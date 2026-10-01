import { afterEach, it, expect, vi } from 'vitest';
import { consumeUatOptions, OPTIONS_URL } from '@/development/uat-options';
import { optionCollections } from '@/domain/options';

afterEach(() => vi.unstubAllGlobals());

it('uses only the same-origin snapshot endpoint and preserves IDs, order and nested metadata', async () => {
  // Small test response; observed company row plus a synthetic metadata sentinel.
  const data = {
    ...Object.fromEntries(optionCollections.map((name) => [name, []])),
    companyTypes: [{ value: 1, text: 'Sole Trader', relationshipOptions: [2, 3, 5] }],
    extraCollection: [{ nestedSentinel: ['unchanged', 42] }],
  };
  const request = vi.fn().mockResolvedValue({ ok: true, json: async () => data });
  vi.stubGlobal('fetch', request);
  expect((await consumeUatOptions()).data).toBe(data);
  expect(request).toHaveBeenCalledWith(
    OPTIONS_URL,
    expect.objectContaining({
      method: 'GET',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      signal: expect.any(AbortSignal),
    }),
  );
  expect(OPTIONS_URL).toBe('/api/options.json');
});

it('rejects HTTP failures and malformed/missing rows without synthetic fallback options', async () => {
  const request = vi.fn();
  vi.stubGlobal('fetch', request);
  request.mockResolvedValueOnce({ ok: false, status: 503 });
  await expect(consumeUatOptions()).rejects.toThrow('HTTP 503');
  for (const data of [null, [], {}, { proposerTitles: [{ value: {}, text: 'invalid' }] }]) {
    request.mockResolvedValueOnce({ ok: true, json: async () => data });
    await expect(consumeUatOptions()).rejects.toThrow('Invalid UAT');
  }
});
