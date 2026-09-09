import { test, expect } from '@playwright/test';
test('MTS-05 / EDGE-05 limited-cover submit prepares driver omissions before driver plan entry', async ({
  page,
}) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem(
      'motorTradeOptions',
      JSON.stringify({
        coverLevels: [{ value: 3, text: 'Synthetic limited' }],
        customerLoanCoverLevels: [
          { value: 999, text: 'Synthetic comprehensive loan', isComprehensive: true },
        ],
        noClaimBonuses: [{ value: 1, text: 'Synthetic no NCB' }],
      }),
    );
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 5,
          stepAsEnum: 'step5',
          stepPath: ['step5'],
          formData: {
            coverLevelID: 3,
            requireCustomerLoanCover: false,
            coverNCBID: 1,
            drivers: [
              {
                guid: 'synthetic',
                ageAdditionalExcess: 999,
                ageIndemnityLimitID: 999,
                experienceBasedExcessID: 999,
                ageMaxCcID: 999,
              },
            ],
            customerLoanVehicleCount: 7,
          },
        },
        version: 0,
      }),
    );
  });
  await page.goto('/motortrade-roadrisks/steps/step5');
  await expect(page.getByRole('heading', { name: 'Cover Required' })).toBeVisible();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page).toHaveURL('/motortrade-roadrisks/steps/step6');
  const data = await page.evaluate(
    () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData,
  );
  expect(data.drivers).toEqual([{ guid: 'synthetic', ageMaxCcID: 999 }]);
  expect(data.customerLoanVehicleCount).toBe(7);
  expect(data.coverIndemnityLimitOwnVehiclesID).toBeNull();
  expect(data.coverNCBEarnedID).toBeNull();
});
