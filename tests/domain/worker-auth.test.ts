// @vitest-environment node
import { describe, it, expect, vi } from 'vitest';
import worker, { type Env } from '../../worker/index';

const origin = 'https://private.example';
function environment(): Env {
  return {
    SITE_PASSWORD: 'synthetic-test-password',
    ASSETS: { fetch: vi.fn(async () => new Response('protected content')) },
    LOGIN_LIMITER: { limit: vi.fn(async () => ({ success: true })) },
  };
}
function request(path = '/', cookie?: string) {
  return new Request(origin + path, { headers: cookie ? { Cookie: cookie } : {} });
}
function signIn(
  env: Env,
  remember = false,
  path = '/nested?example=1',
  password = env.SITE_PASSWORD!,
) {
  return worker.fetch(
    new Request(origin + '/_access?returnTo=' + encodeURIComponent(path), {
      method: 'POST',
      headers: { Origin: origin, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ password, ...(remember ? { remember: 'yes' } : {}) }),
    }),
    env,
  );
}
describe('Worker password boundary', () => {
  it.each([
    '/',
    '/motortrade-roadrisks/steps/step1',
    '/_next/static/chunks/app.js',
    '/index.txt',
    '/404.html',
    '/unknown',
  ])('blocks %s without serving assets', async (path) => {
    const env = environment();
    const response = await worker.fetch(request(path), env);
    expect(response.status).toBe(401);
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
    const html = await response.text();
    expect(html).toContain('Private access');
    expect(html).not.toMatch(/CX1|Motor Trade|UAT|synthetic-test-password/);
    expect(response.headers.get('Cache-Control')).toContain('no-store');
  });
  it('fails closed without a configured password', async () => {
    const env = environment();
    delete env.SITE_PASSWORD;
    expect((await worker.fetch(request(), env)).status).toBe(503);
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });
  it('rejects wrong passwords without a cookie', async () => {
    const response = await signIn(environment(), false, '/', 'wrong');
    expect(response.status).toBe(401);
    expect(response.headers.has('Set-Cookie')).toBe(false);
  });
  it('uses a session cookie by default and retains access across requests', async () => {
    const env = environment();
    const response = await signIn(env);
    expect(response.status).toBe(303);
    expect(response.headers.get('Location')).toBe('/nested?example=1');
    const cookie = response.headers.get('Set-Cookie')!;
    expect(cookie).toContain('Secure; HttpOnly; SameSite=Lax');
    expect(cookie).not.toMatch(/Max-Age|Expires|synthetic-test-password/);
    for (const path of ['/', '/deep/route', '/_next/static/file.js']) {
      const protectedResponse = await worker.fetch(request(path, cookie), env);
      expect(await protectedResponse.text()).toBe('protected content');
      expect(protectedResponse.headers.get('Cache-Control')).toContain('no-store');
    }
  });
  it('sets a 30-day cookie only when remember me is selected', async () => {
    expect((await signIn(environment(), true)).headers.get('Set-Cookie')).toContain(
      'Max-Age=2592000',
    );
  });
  it('rejects tampering, expiration, and password rotation', async () => {
    const env = environment();
    const cookie = (await signIn(env, true)).headers.get('Set-Cookie')!;
    const tampered = cookie.replace(/=\d+/, '=1');
    expect((await worker.fetch(request('/', tampered), env)).status).toBe(401);
    expect(
      (await worker.fetch(request('/', cookie), { ...env, SITE_PASSWORD: 'changed' })).status,
    ).toBe(401);
    const spy = vi.spyOn(Date, 'now').mockReturnValue(Date.now() + 31 * 86400000);
    try {
      expect((await worker.fetch(request('/', cookie), env)).status).toBe(401);
    } finally {
      spy.mockRestore();
    }
  });
  it.each(['https://evil.example', '//evil.example', '/\\evil.example', '/_access'])(
    'rejects an external or looping return URL %s',
    async (path) => {
      expect((await signIn(environment(), false, path)).headers.get('Location')).toBe('/');
    },
  );
  it('rejects cross-origin login, unsupported bodies, and excessive attempts', async () => {
    const env = environment();
    const crossOrigin = new Request(origin + '/_access', {
      method: 'POST',
      headers: { Origin: 'https://evil.example' },
    });
    expect((await worker.fetch(crossOrigin, env)).status).toBe(403);
    const invalid = new Request(origin + '/_access', {
      method: 'POST',
      headers: { Origin: origin },
      body: 'not a form',
    });
    expect((await worker.fetch(invalid, env)).status).toBe(400);
    env.LOGIN_LIMITER.limit = async () => ({ success: false });
    expect((await signIn(env)).status).toBe(429);
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });
});
