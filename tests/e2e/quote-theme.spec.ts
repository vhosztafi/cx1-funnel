import { test, expect } from '@playwright/test';

test('presentation theme responds to one accent token and fits desktop/mobile', async ({
  page,
}, info) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem('motorTradeOptions', '{}');
  });
  await page.goto('/motortrade-roadrisks/steps/step1');
  const title = page.getByRole('heading', { name: 'Motor Trade Full Quote' });
  await expect(title).toBeVisible();
  for (const width of [1280, 375]) {
    await page.setViewportSize({ width, height: 900 });
    const form = (await page.locator('form').boundingBox())!;
    expect(form.x).toBeGreaterThanOrEqual(0);
    expect(form.x + form.width).toBeLessThanOrEqual(width);
    await page.screenshot({ path: info.outputPath(`quote-theme-${width}.png`), fullPage: true });
  }
  await page.evaluate(() => document.documentElement.style.setProperty('--cx-accent', '#704090'));
  for (const selector of ['.brand-band', '.progress-bar', '.quote-navigation .btn-primary']) {
    await expect(page.locator(selector)).toHaveCSS('background-color', 'rgb(112, 64, 144)');
  }
  await expect(title).toHaveCSS('font-family', /Georgia/);
});
