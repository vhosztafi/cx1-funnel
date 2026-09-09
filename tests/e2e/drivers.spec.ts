import { captureResponsive } from './visual-capture';
import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      limits: { driverLimit: 3, pageSize: 10 },
      consumeDriverValidation: async () => ({
        data: { valid: false, errorMessages: ['Synthetic first issue', 'Synthetic second issue'] },
      }),
    };
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem(
      'motorTradeOptions',
      JSON.stringify({
        driverPlans: [{ value: 1, text: 'Synthetic named plan' }],
        driverTitles: [{ value: 999, text: 'Synthetic title' }],
        companyTypes: [{ value: 1, text: 'Synthetic sole', relationshipOptions: [2, 3] }],
        driverRelationshipsPolicyHolder: [
          { value: 2, text: 'Synthetic employee' },
          { value: 3, text: 'Synthetic policyholder' },
        ],
      }),
    );
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 6,
          stepAsEnum: 'step6',
          stepPath: ['step6'],
          formData: {
            proposerPolicyStartDate: '2026-09-09',
            proposerCompanyTypeId: 1,
            coverLevelID: 3,
            driverPlanId: 1,
            drivers: [
              {
                guid: 'synthetic-original',
                titleID: 999,
                firstName: 'Synthetic',
                surname: '',
                dateOfBirth: '1990-01-01',
                relationshipPolicyholderID: 2,
                postCode: 'TEST1',
                showAddress: true,
                houseNo: '1',
                street: 'Synthetic Street',
                county: 'Synthetic County',
                usageID: 1,
                gvwLimitID: 999,
                isUKResidentSinceBirth: true,
                licenceTypeID: 1,
                licenseIssueDate: '2010-01-01',
                motorcycleCoverID: 1,
                maxABIGroupID: 1,
                tradeEmploymentBasisID: 1,
                coverPersonalVehicle: false,
                coverDrivingOtherVehicles: false,
                hasMotoringConvictions: false,
                hasClaimsOrAccidents: false,
                hasReportedDisability: false,
                hasCriminalConvictions: false,
                hasCCJs: false,
              },
            ],
          },
        },
        version: 0,
      }),
    );
  });
});
test('MTS-06A/B/C invalid existing driver opens detail; edit preserves GUID; local result errors retain order', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks/steps/step6');
  await expect(page.getByRole('heading', { name: 'Drivers', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await expect(page.locator('input[name="surname"]')).toBeVisible();
  await page.locator('input[name="surname"]').fill('Edited');
  await captureResponsive(page, 'driver-details');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Synthetic Edited' })).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.drivers[0].guid,
    ),
  ).toBe('synthetic-original');
  await page.getByRole('button', { name: 'Show more' }).click();
  await expect(page.getByText('Vehicle Usage :', { exact: false })).toBeVisible();
  await captureResponsive(page, 'driver-list-expanded');
  await page.getByRole('button', { name: 'Show less' }).click();
  await expect(page.getByText('Vehicle Usage :', { exact: false })).toHaveCount(0);
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByText('Please review the following:')).toBeVisible();
  await expect(page.locator('li')).toHaveText(['Synthetic first issue', 'Synthetic second issue']);
  await page.getByRole('button', { name: 'Edit', exact: true }).click();
  await page.locator('input[name="firstName"]').fill('Unsaved');
  await page.getByRole('button', { name: 'Go Back' }).click();
  await expect(page.getByRole('heading', { name: 'Synthetic Edited' })).toBeVisible();
});
test('MTS-06 history arrays append only on active empty condition, preserve first row and No removes all', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks/steps/step6');
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.locator('label[for="opt_hasCCJs_true"]').click();
  await expect(page.getByRole('heading', { name: 'CCJ 1', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'X', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Add another CCJ' }).click();
  await expect(page.getByRole('heading', { name: 'CCJ 2', exact: true })).toBeVisible();
  await captureResponsive(page, 'driver-history');
  await page.getByRole('button', { name: 'X', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'CCJ 2', exact: true })).toHaveCount(0);
  await page.locator('label[for="opt_hasCCJs_false"]').click();
  await expect(page.getByRole('heading', { name: 'CCJ 1', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Go Back' }).click();
  await expect(page.getByRole('button', { name: 'Save and Continue' })).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.drivers[0]
          .hasCCJs,
    ),
  ).toBe(false);
});

test('MTS-06-R19/R20 pages use sorted display indices but deletion mutates the raw row', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const host = (window as unknown as { __CX1_HOST_INPUTS__: { limits: unknown } })
      .__CX1_HOST_INPUTS__;
    host.limits = { driverLimit: 2, pageSize: 1 };
    const data = JSON.parse(sessionStorage.getItem('motorTradeFormStore')!);
    const original = data.state.formData.drivers[0];
    data.state.step = 14;
    data.state.stepAsEnum = 'step14';
    data.state.formData.drivers = [
      { ...original, guid: 'synthetic-zed', firstName: 'Zed', surname: 'Fixture' },
      { ...original, guid: 'synthetic-ada', firstName: 'Ada', surname: 'Fixture' },
    ];
    data.state.formData.vehicles = [{ ownerGuid: 'synthetic-ada' }];
    sessionStorage.setItem('motorTradeFormStore', JSON.stringify(data));
  });
  await page.goto('/motortrade-roadrisks/steps/step14');
  await page
    .getByText('Drivers', { exact: true })
    .locator('..')
    .getByRole('button', { name: 'Edit', exact: true })
    .click();
  await expect(page.getByRole('heading', { name: 'Ada Fixture' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add another driver' })).toBeDisabled();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(
    page.getByText("This driver is a vehicle owner, can't be deleted.", { exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Go to page 2', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Zed Fixture' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Ada Fixture' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add another driver' })).toBeEnabled();
  expect(
    await page.evaluate(() =>
      JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.drivers.map(
        (row: { guid: string }) => row.guid,
      ),
    ),
  ).toEqual(['synthetic-ada']);
  await expect(page.getByRole('button', { name: 'Go to page 2', exact: true })).toHaveCount(0);
});

test('MTS-06-R07/U11 preserves the empty 50ms loading state before the next invalid raw driver', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const data = JSON.parse(sessionStorage.getItem('motorTradeFormStore')!);
    const original = data.state.formData.drivers[0];
    data.state.step = 14;
    data.state.stepAsEnum = 'step14';
    data.state.formData.drivers = [
      { ...original, firstName: 'Ada', surname: 'Valid' },
      { ...original, guid: 'synthetic-second', firstName: 'Zed', surname: '' },
    ];
    sessionStorage.setItem('motorTradeFormStore', JSON.stringify(data));
  });
  await page.goto('/motortrade-roadrisks/steps/step14');
  await page
    .getByText('Drivers', { exact: true })
    .locator('..')
    .getByRole('button', { name: 'Edit', exact: true })
    .click();
  await page.getByRole('button', { name: 'Edit', exact: true }).first().click();
  await expect(page.locator('input[name="firstName"]')).toHaveValue('Ada');
  await page.clock.install({ time: new Date('2026-09-09T12:00:00') });
  await page.clock.pauseAt(new Date('2026-09-09T12:00:01'));
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.locator('.container-body-md.no-border-radius')).toBeEmpty();
  await expect(page.locator('form')).toHaveCount(0);
  await page.clock.runFor(49);
  await expect(page.locator('form')).toHaveCount(0);
  await page.clock.runFor(1);
  await expect(page.locator('input[name="firstName"]')).toHaveValue('Zed');
  await expect(page).toHaveURL(/step6$/);
});
