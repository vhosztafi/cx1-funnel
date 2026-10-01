import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const password =
  process.env.SITE_PASSWORD ??
  readFileSync('.dev.vars', 'utf8')
    .match(/^SITE_PASSWORD=(.+)$/m)?.[1]
    .trim();

async function signIn(page: import('@playwright/test').Page) {
  await page.goto('/');
  await page.getByLabel('Password', { exact: true }).fill(password!);
  await page.getByRole('button', { name: 'Continue' }).click();
}

test('collapsed demo tools seed a traversable journey, open Summary, and clear without logging out', async ({
  page,
}) => {
  test.setTimeout(90000);
  await signIn(page);
  await expect(page.getByRole('button', { name: 'Load sample journey', exact: true })).toBeHidden();
  await page.getByText('Demo tools', { exact: false }).click();
  await Promise.all([
    page.waitForEvent('domcontentloaded'),
    page.getByRole('button', { name: 'Load sample journey', exact: true }).click(),
  ]);
  for (let step = 1; step <= 14; step++) {
    await expect(page).toHaveURL(new RegExp(`/steps/step${step}$`));
    if (step < 14)
      await page
        .getByRole('button', {
          name: step >= 7 && step <= 9 ? 'Next' : 'Save and Continue',
          exact: true,
        })
        .click();
  }
  await page.getByText('Demo tools', { exact: false }).click();
  await Promise.all([
    page.waitForEvent('domcontentloaded'),
    page.getByRole('button', { name: 'Load sample at Summary', exact: true }).click(),
  ]);
  await expect(page).toHaveURL(/step14$/);
  await expect(page.getByRole('button', { name: 'Submit', exact: true })).toBeVisible();
  await page.getByText('Demo tools', { exact: false }).click();
  await page.setViewportSize({ width: 375, height: 900 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.getByRole('button', { name: 'Clear & restart', exact: true })).toBeVisible();
  await page.screenshot({ path: '.wrangler/demo-tools.png' });
  await page.evaluate(() => {
    sessionStorage.setItem('unrelated-demo-test', 'keep');
    sessionStorage.setItem('abiDetail', 'stale');
  });
  const loginCookie = (await page.context().cookies()).find(
    (cookie) => cookie.name === '__Host-preview-access',
  )!.value;
  await Promise.all([
    page.waitForEvent('domcontentloaded'),
    page.getByRole('button', { name: 'Clear & restart', exact: true }).click(),
  ]);
  await expect(page).toHaveURL(/step1$/);
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  const state = await page.evaluate(() => ({
    form: JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state,
    auxiliary: sessionStorage.getItem('abiDetail'),
    unrelated: sessionStorage.getItem('unrelated-demo-test'),
  }));
  expect(state.form.formData).toEqual({});
  expect(state.form.step).toBe(1);
  expect(state.auxiliary).toBeNull();
  expect(state.unrelated).toBe('keep');
  expect(
    (await page.context().cookies()).find((cookie) => cookie.name === '__Host-preview-access')!
      .value,
  ).toBe(loginCookie);
  await page.reload();
  await expect(page.getByLabel('Mock preview')).toBeVisible();
});

test('host-controlled sessions do not expose demo tools', async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      consumeOptions: async () => ({ data: {} }),
    };
  });
  await signIn(page);
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await expect(page.getByText('Demo tools', { exact: false })).toHaveCount(0);
});
