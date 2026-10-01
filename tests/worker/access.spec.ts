import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
const password =
  process.env.SITE_PASSWORD ??
  readFileSync('.dev.vars', 'utf8')
    .match(/^SITE_PASSWORD=(.+)$/m)?.[1]
    .trim();
if (!password)
  throw new Error('Set SITE_PASSWORD or configure .dev.vars before running Worker tests');
const asset =
  '/_next/static/chunks/' +
  readdirSync('out/_next/static/chunks').find((name) => name.endsWith('.js'));

test('all pages and actual exported assets are protected, with a neutral responsive login', async ({
  page,
  request,
}) => {
  for (const path of [
    '/',
    '/motortrade-roadrisks/steps/step1',
    '/index.txt',
    '/404.html',
    '/api/options.json',
    asset,
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(401);
    expect(await response.text()).toContain('Private access');
    expect(response.headers()['cache-control']).toContain('no-store');
  }
  await page.goto('/motortrade-roadrisks/steps/step1');
  await expect(page.getByRole('heading', { name: 'Private access' })).toBeVisible();
  await expect(page.locator('body')).not.toContainText(/CX1|Motor Trade|UAT/);
  await page.setViewportSize({ width: 375, height: 667 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: '.wrangler/login.png' });
  await page.getByLabel('Password', { exact: true }).fill('incorrect-test-password');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('alert')).toHaveText('Incorrect password.');
  expect(
    (await page.context().cookies()).find((cookie) => cookie.name === '__Host-preview-access'),
  ).toBeUndefined();
});

test('session login returns to the deep link and remains authenticated on refresh and asset requests', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks/steps/step1');
  await page.getByLabel('Password', { exact: true }).fill(password!);
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL(/\/motortrade-roadrisks\/steps\/step1$/);
  const optionsResponse = await page.evaluate(async () => {
    const result = await fetch('/api/options.json');
    return { status: result.status, body: await result.json() };
  });
  expect(optionsResponse.status).toBe(200);
  expect(optionsResponse.body).toEqual(JSON.parse(readFileSync('public/api/options.json', 'utf8')));
  // Block every external request to prove dropdowns are fully self-contained.
  const externalRequests: string[] = [];
  const currentOrigin = new URL(page.url()).origin;
  await page.route('**/*', async (route) => {
    if (new URL(route.request().url()).origin !== currentOrigin) {
      externalRequests.push(route.request().url());
      await route.abort();
    } else await route.continue();
  });
  await page.reload();
  await page.getByRole('combobox').first().click();
  await expect(page.getByRole('option')).toHaveText(
    optionsResponse.body.companyTypes.map((row: { text: string }) => row.text),
  );
  await page.getByRole('option', { name: 'Sole Trader', exact: true }).click();
  const address = page
    .locator('.position-relative.mb-4')
    .filter({ has: page.getByRole('button', { name: 'Lookup', exact: true }) })
    .first();
  await page.keyboard.press('Escape');
  await address.locator('input').first().fill('SW1A 1AA');
  await address.getByRole('button', { name: 'Lookup', exact: true }).click();
  await address
    .getByText('Mock address 2: 2 Mock Street, Mock Town (SW1A1AA)', { exact: true })
    .click();
  await expect(address.locator('input').nth(1)).toHaveValue('2');
  await expect(address.locator('input').nth(2)).toHaveValue('Mock Street');
  await expect(address.locator('input').nth(5)).toHaveValue('Mock County');
  await address.locator('input').first().fill('M1 1AE');
  await address.getByRole('button', { name: 'Lookup', exact: true }).click();
  await address
    .getByText('Mock address 1: 1 Mock Street, Mock Town (M11AE)', { exact: true })
    .click();
  await expect(address.locator('input').nth(1)).toHaveValue('1');
  expect(externalRequests).toEqual([]);
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  const cookie = (await page.context().cookies()).find(
    (cookie) => cookie.name === '__Host-preview-access',
  )!;
  expect(cookie).toMatchObject({ secure: true, httpOnly: true, sameSite: 'Lax', expires: -1 });
  await page.reload();
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  const response = await page.evaluate(async (path) => {
    const result = await fetch(path);
    return {
      status: result.status,
      type: result.headers.get('content-type'),
      cache: result.headers.get('cache-control'),
    };
  }, asset);
  expect(response.status).toBe(200);
  expect(response.type).toMatch(/javascript/);
  expect(response.cache).toContain('no-store');
  await page.context().clearCookies();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Private access' })).toBeVisible();
});

test('remember me has a 30-day expiry and works in a restored browser context', async ({
  page,
  browser,
  baseURL,
}) => {
  await page.goto('/');
  await page.getByLabel('Password', { exact: true }).fill(password!);
  await page.getByLabel('Remember me for 30 days').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  const cookie = (await page.context().cookies()).find(
    (cookie) => cookie.name === '__Host-preview-access',
  )!;
  expect(Math.abs(cookie.expires - Date.now() / 1000 - 2592000)).toBeLessThan(30);
  const restored = await browser.newContext({
    baseURL,
    storageState: await page.context().storageState(),
  });
  const tab = await restored.newPage();
  await tab.goto('/');
  await expect(tab.getByLabel('Mock preview')).toBeVisible();
  await restored.close();
});
