import { test, expect } from '@playwright/test';

test('UAT option failure clears the overlay and Retry loads the bundled snapshot', async ({
  page,
}) => {
  let attempts = 0;
  let unavailable = true;
  await page.route('**/api/options.json', async (route) => {
    attempts++;
    if (unavailable) await route.fulfill({ status: 503, body: 'Temporarily unavailable' });
    else await route.continue();
  });
  await page.goto('/motortrade-roadrisks/steps/step1');
  const error = page.getByRole('alert').filter({ hasText: 'Could not load UAT options.' });
  await expect(error).toBeVisible();
  await expect(page.locator('.lookup-overlay')).toHaveCount(0);
  unavailable = false;
  await page.getByRole('button', { name: 'Retry loading options' }).click();
  await page.getByRole('combobox').first().click();
  await expect(page.getByRole('option', { name: 'Sole Trader', exact: true })).toBeVisible();
  await expect(error).toHaveCount(0);
  expect(attempts).toBeGreaterThanOrEqual(2);
});

test('fresh standalone entry has mock authentication, usable options and no persistent overlay', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  await page.getByRole('link', { name: 'Motor Trade', exact: true }).click();
  await expect(page).toHaveURL('/motortrade-roadrisks/steps/step1');
  await expect(page.locator('.lookup-overlay')).toHaveCount(0);
  await page.locator('label[for="opt_isShortTerm_false"]').click();
  await expect(page.locator('#opt_isShortTerm_false')).toBeChecked();
  await page.getByRole('combobox').first().click();
  await expect(page.getByRole('option')).toHaveText([
    'Sole Trader',
    'Public Limited Company',
    'Private Limited Company',
    'Partnership',
  ]);
  await page.getByRole('option', { name: 'Sole Trader', exact: true }).click();
  await expect(page.getByText('Sole Trader', { exact: true })).toBeVisible();
  await expect(page.getByText(/Mock:/)).toHaveCount(0);
  expect(
    await page.evaluate(() => ({
      broker: sessionStorage.getItem('authBroker'),
      backoffice: sessionStorage.getItem('authBO'),
      options: sessionStorage.getItem('motorTradeOptions'),
    })),
  ).toEqual({ broker: null, backoffice: null, options: null });
  await page.reload();
  await expect(page.getByLabel('Mock preview')).toBeVisible();
  await expect(page.locator('.lookup-overlay')).toHaveCount(0);
  await page.locator('label[for="opt_isShortTerm_false"]').click();
  await expect(page.locator('#opt_isShortTerm_false')).toBeChecked();
});

test('explicit host inputs retain the host-controlled authentication gate', async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      consumeOptions: async () => ({ data: {} }),
    };
  });
  await page.goto('/motortrade-roadrisks/steps/step1');
  await expect(page.getByRole('heading', { name: 'Motor Trade Full Quote' })).toBeVisible();
  await expect(page.getByLabel('Mock preview')).toHaveCount(0);
  await expect(page.locator('.lookup-overlay')).toHaveCount(1);
});
