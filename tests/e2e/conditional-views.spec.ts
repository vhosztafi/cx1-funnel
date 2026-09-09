import { test, expect } from '@playwright/test';
import { captureResponsive } from './visual-capture';
import { optionCollections } from '../../src/domain/options';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(
    (collections) => {
      (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
        now: () => new Date('2026-09-09'),
      };
      sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
      sessionStorage.setItem(
        'motorTradeOptions',
        JSON.stringify(
          Object.fromEntries(
            collections.map((name) => [name, [{ value: 999, text: `Synthetic ${name}` }]]),
          ),
        ),
      );
    },
    [...optionCollections],
  );
});

test('MTS-09 full specified manual form retains its distinct modification shape', async ({
  page,
}) => {
  await page.addInitScript(() => {
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        version: 0,
        state: {
          step: 9,
          stepAsEnum: 'step9',
          stepPath: ['step9'],
          formData: {
            proposerPolicyStartDate: '2026-09-09',
            proposerCompanyTypeId: 1,
            coverLevelID: 1,
            addSpecifiedVehicle: false,
          },
        },
      }),
    );
  });
  await page.goto('/motortrade-roadrisks/steps/step9');
  await page.locator('label[for="opt_addSpecifiedVehicle_true"]').click();
  await page.getByText('Enter manually', { exact: true }).click();
  await expect(page.locator('input[name="make"]')).toBeVisible();
  await page.locator('label[for="opt_hasModification_true"]').click();
  await expect(page.getByRole('heading', { name: 'Modification 1', exact: true })).toBeVisible();
  await expect(page.locator('input[name="isCustomerLoan"]')).toHaveCount(0);
  await captureResponsive(page, 'specified-manual');
  await page.getByRole('button', { name: 'Go Back', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Vehicles', exact: true })).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.specifiedVehicles,
    ),
  ).toBeUndefined();
});

test('MTS-11 locked trip disables owned fields while Add Another Trip remains enabled', async ({
  page,
}) => {
  await page.addInitScript(() => {
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        version: 0,
        state: {
          step: 11,
          stepAsEnum: 'step11',
          stepPath: ['step11'],
          formData: {
            proposerPolicyStartDate: '2026-09-09',
            driverPlanId: 1,
            temporaryEuropeanCover: true,
            vehicles: [{ regNumber: 'SYNTHETIC' }],
            europeanCoverTemporaryExtras: [
              {
                regNumber: 'SYNTHETIC',
                startDateEuropeanTrip: '2026-09-10',
                endDateEuropeanTrip: '2026-09-11',
                europeanAreaID: 999,
                europeanCoverTypeID: 999,
                europeanCoverUsageTypeID: 999,
                isDraft: false,
                europeanCoverDriverNames: ['Synthetic driver'],
              },
            ],
          },
        },
      }),
    );
  });
  await page.goto('/motortrade-roadrisks/steps/step11');
  await expect(page.getByText('Drivers: Synthetic driver', { exact: true })).toBeVisible();
  for (const input of await page.locator('input[name="temporaryEuropeanCover"]').all())
    await expect(input).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Add Another Trip', exact: true })).toBeEnabled();
  await captureResponsive(page, 'extras-locked-trip');
  await page.getByRole('button', { name: 'Add Another Trip', exact: true }).click();
  await expect(page.getByRole('button', { name: 'X', exact: true })).toBeEnabled();
  await captureResponsive(page, 'extras-locked-and-draft');
});

test('ROOT development Debug stays a separate fixed surface with its documented controls', async ({
  page,
}) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = { mode: 'dev' };
  });
  await page.goto('/');
  await expect(page.locator('.debug')).toBeVisible();
  await expect(page.locator('.debug button')).toHaveText(['Set', 'Clear', 'Broker', 'Back Office']);
  expect(
    await page.locator('.debug').evaluate((el) => {
      const s = getComputedStyle(el);
      return [s.position, s.width, s.right, s.top, s.zIndex];
    }),
  ).toEqual(['fixed', '150px', '10px', '250px', '9999']);
  await captureResponsive(page, 'root-debug');
});
