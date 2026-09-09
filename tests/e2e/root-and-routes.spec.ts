import { test, expect } from '@playwright/test';
const syntheticState = {
  formData: { syntheticRetained: 'fixture-only' },
  step: 1,
  stepAsEnum: 'step1',
  stepPath: ['step1'],
};
test.beforeEach(async ({ page }) => {
  await page.addInitScript((state) => {
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST PRESENCE ONLY');
    sessionStorage.setItem('motorTradeOptions', '{}');
    sessionStorage.setItem('motorTradeFormStore', JSON.stringify({ state, version: 0 }));
  }, syntheticState);
});
test('ROOT-001–007 links preserve order, SPA entry and raw form data', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Products', level: 3 })).toBeVisible();
  await expect(page.locator('li a')).toHaveText(['Commercial combined', 'Motor Trade']);
  await page.evaluate(() => {
    (window as unknown as { syntheticNavigationMarker: number }).syntheticNavigationMarker = 42;
  });
  await page.getByRole('link', { name: 'Motor Trade', exact: true }).click();
  await expect(page).toHaveURL('/motortrade-roadrisks/steps/step1');
  await expect(page.getByText('Step 1 of 14', { exact: true })).toBeVisible();
  expect(
    await page.evaluate(
      () => (window as unknown as { syntheticNavigationMarker: number }).syntheticNavigationMarker,
    ),
  ).toBe(42);
  expect(
    await page.evaluate(() => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state),
  ).toEqual(syntheticState);
});
test('ROOT-003 and SHR-MT-R06 root body has 440px maximum at both widths', async ({ page }) => {
  for (const width of [375, 1000]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    const box = await page.locator('.container-body-sm').boundingBox();
    expect(box!.width).toBeLessThanOrEqual(440);
    expect(box!.width).toBeLessThanOrEqual(width);
    expect(await page.getByAltText('CG logo').evaluate((e) => getComputedStyle(e).maxWidth)).toBe(
      '60px',
    );
  }
});
test('EDGE-GUARD-PERSISTED drops broker prefix without rewriting answers', async ({ page }) => {
  await page.goto('/broker/buy/motortrade-roadrisks-s2-rtl/steps/step4');
  await expect(page).toHaveURL('/motortrade-roadrisks-s2-rtl/steps/step1');
  await expect(page.getByText('Step 1 of 14', { exact: true })).toBeVisible();
  expect(
    await page.evaluate(
      () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData,
    ),
  ).toEqual(syntheticState.formData);
});
