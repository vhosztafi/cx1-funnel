import { test, expect } from '@playwright/test';
import declarations from '../../src/contracts/declaration/pairs.json' with { type: 'json' };
test('MTS-10–13 category totals, repeated annual Yes, declaration nulling and optional risk continue', async ({
  page,
}) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      now: () => new Date('2026-09-09'),
    };
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem('motorTradeOptions', '{}');
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 10,
          stepAsEnum: 'step10',
          stepPath: ['step10'],
          formData: {
            driverPlanId: 1,
            proposerPolicyStartDate: '2026-09-09',
            coverLevelID: 3,
            standardCars: true,
            percentageOfStandardCars: 100,
            restrictShuntersPolicyRadius: true,
            carJockeyRadiusID: 99,
          },
        },
        version: 0,
      }),
    );
  });
  await page.goto('/motortrade-roadrisks/steps/step10');
  await expect(page.getByRole('heading', { name: 'Vehicles to be Driven' })).toBeVisible();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Extras', exact: true })).toBeVisible();
  await page.locator('label[for="opt_lossOfUseCover_false"]').click();
  await page.locator('label[for="opt_vehiclesAtSubcontractorsCover_false"]').click();
  await page.getByText('European cover', { exact: true }).locator('..').getByRole('button').click();
  await page.locator('label[for="opt_annualEuropeanCover_true"]').click();
  await expect(page.getByText('Vehicle Registration:', { exact: true })).toHaveCount(1);
  await page.locator('label[for="opt_annualEuropeanCover_true"]').click();
  await expect(page.getByText('Vehicle Registration:', { exact: true })).toHaveCount(2);
  await expect(page.getByRole('button', { name: 'X', exact: true })).toHaveCount(1);
  await page.locator('label[for="opt_annualEuropeanCover_false"]').click();
  await expect(page.getByRole('button', { name: 'Add Another Vehicle' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Declaration', exact: true })).toBeVisible();
  const first = declarations.pairs[0];
  await page.locator(`label[for="opt_${first.path}_true"]`).click();
  await page.locator(`textarea[name="${first.detail.path}"]`).fill('Synthetic detail');
  for (const pair of declarations.pairs)
    await page.locator(`label[for="opt_${pair.path}_false"]`).click();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Additional Information' })).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData
          .anyOfDriversHadSpecialTermsAppliedDetails,
    ),
  ).toBeNull();
  await expect(page.locator('input[name="carJockeyRadiusID"]')).toHaveCount(0);
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page).toHaveURL(/step14$/);
  expect(
    await page.evaluate(
      () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData,
    ),
  ).toMatchObject({ carJockeyRadiusID: null, restrictShuntersPolicyRadius: null });
});
