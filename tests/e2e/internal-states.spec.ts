import { test, expect } from '@playwright/test';
for (const [owner, step, state] of [
  ['MTS-06L', 6, { driverLoading: true, editing: true, showCards: true }],
  ['MTS-08L', 8, { vehicleLoading: true, showVehicles: true, editing: true }],
  ['MTS-08Ø', 8, {}],
] as const) {
  test(`${owner} owns an empty body without a form, heading, spinner or recovery action`, async ({
    page,
  }) => {
    await page.addInitScript(
      ({ step, state }) => {
        sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
        sessionStorage.setItem('motorTradeOptions', '{}');
        sessionStorage.setItem(
          'motorTradeFormStore',
          JSON.stringify({
            state: { formData: {}, step, stepAsEnum: `step${step}`, stepPath: [`step${step}`] },
            version: 0,
          }),
        );
        history.replaceState({ usr: state }, '', location.href);
      },
      { step, state },
    );
    await page.goto(`/motortrade-roadrisks/steps/step${step}`);
    await expect(page.getByText(`Step ${step} of 14`, { exact: true })).toBeVisible();
    await expect(page.locator('form')).toHaveCount(0);
    await expect(page.getByRole('heading')).toHaveCount(0);
    await expect(page.locator('.legacy-loader')).toHaveCount(0);
    await expect(page.locator('.container-body-md').last()).toBeEmpty();
  });
}
test('MTS-08-R10–13 raw-order pagination, last-page deletion and four-second capacity notification', async ({
  page,
}) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      limits: { pageSize: 1 },
    };
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem('motorTradeOptions', '{}');
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 8,
          stepAsEnum: 'step8',
          stepPath: ['step8'],
          formData: {
            businessNumberOfVehicleCapacity: 1,
            vehicles: [{ regNumber: 'SYNTHETIC FIRST' }, { regNumber: 'SYNTHETIC SECOND' }],
          },
        },
        version: 0,
      }),
    );
    history.replaceState({ usr: { showVehicles: true } }, '', location.href);
  });
  await page.goto('/motortrade-roadrisks/steps/step8');
  await expect(page.getByRole('heading', { name: 'SYNTHETIC FIRST' })).toBeVisible();
  await page.getByRole('button', { name: 'Go to page 2', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'SYNTHETIC SECOND' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'SYNTHETIC FIRST' })).toBeVisible();
  expect(
    await page.evaluate(
      () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.vehicles,
    ),
  ).toEqual([{ regNumber: 'SYNTHETIC FIRST' }]);
  await page.clock.install({ time: new Date('2026-09-09T12:00:00') });
  await page.clock.pauseAt(new Date('2026-09-09T12:00:01'));
  await page.getByRole('button', { name: 'Add Vehicle', exact: true }).click();
  await expect(page.locator('.field-error')).toHaveCount(1);
  await page.clock.runFor(3999);
  await expect(page.locator('.field-error')).toHaveCount(1);
  await page.clock.runFor(1);
  await expect(page.locator('.field-error')).toHaveCount(0);
});
for (const include of [true, false]) {
  test(`EDGE-08/10 independent forward and reverse predicates ${include ? 'include' : 'skip'} Step 9`, async ({
    page,
  }) => {
    await page.addInitScript((include) => {
      sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
      sessionStorage.setItem(
        'motorTradeOptions',
        JSON.stringify({
          indemnityOwnVehicles: [{ value: 999, text: 'Synthetic limit', numericValue: 15000 }],
        }),
      );
      sessionStorage.setItem(
        'motorTradeFormStore',
        JSON.stringify({
          state: {
            step: 10,
            stepAsEnum: 'step10',
            stepPath: ['step10'],
            formData: {
              coverLevelID: include ? 1 : 3,
              coverIndemnityLimitOwnVehiclesID: 999,
              driverPlanId: 1,
              businessNumberOfVehicleCapacity: 0,
              standardCars: true,
              percentageOfStandardCars: 100,
            },
          },
          version: 0,
        }),
      );
    }, include);
    await page.goto('/motortrade-roadrisks/steps/step10');
    await page.getByRole('button', { name: 'Go Back', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`step${include ? 9 : 8}$`));
    if (include) {
      await page.getByRole('button', { name: 'Go Back', exact: true }).click();
      await expect(page).toHaveURL(/step8$/);
    }
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`step${include ? 9 : 10}$`));
  });
}
