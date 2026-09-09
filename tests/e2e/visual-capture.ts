import { expect, test, type Page } from '@playwright/test';

// Visual evidence uses only the explicitly synthetic browser fixtures in each test.
export async function captureResponsive(page: Page, name: string) {
  const viewport = page.viewportSize();
  for (const width of [375, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.locator('.collapsing')).toHaveCount(0);
    await page.screenshot({
      path: test.info().outputPath(`${name}-${width}.png`),
      fullPage: true,
      animations: 'disabled',
    });
  }
  if (viewport) await page.setViewportSize(viewport);
}
