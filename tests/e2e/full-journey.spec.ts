import { test, expect } from '@playwright/test';
import declaration from '../../src/contracts/declaration/pairs.json' with { type: 'json' };

test('ROOT through MTS-01–14: all numbered surfaces prepare a local argument without transport', async ({
  page,
}, info) => {
  test.setTimeout(90000);
  await page.addInitScript((pairs) => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      now: () => new Date('2026-09-09T12:00:00'),
      limits: { pageSize: 10, driverLimit: 5 },
      terminalBranch: { kind: 'ordinary' },
      terminalPort: {},
    };
    const synthetic = (value: number, text: string, extra = {}) => ({
      value,
      text: `Synthetic ${text}`,
      ...extra,
    });
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem(
      'motorTradeOptions',
      JSON.stringify({
        companyTypes: [synthetic(1, 'sole')],
        proposerTitles: [synthetic(999, 'title')],
        tradingFroms: [synthetic(1, 'home')],
        mtOccupations: [synthetic(999, 'occupation')],
        coverLevels: [synthetic(1, 'comprehensive', { isComprehensive: true })],
        indemnityOwnVehicles: [
          synthetic(1, 'indemnity', { numericValue: 15000, excesses: [synthetic(999, 'excess')] }),
        ],
        noClaimBonuses: [synthetic(1, 'no NCB')],
        driverPlans: [synthetic(3, 'any driver')],
        aadDriverMinAge: [synthetic(999, '25')],
        aadDriverMaxAge: [synthetic(999, '75')],
        aadMaxVehicleGrouping: [synthetic(999, 'ABI', { abiGroup: 20 })],
        aadMaxVehicleGvw: [synthetic(999, 'GVW', { gvwLimitDecimal: 3500 })],
        aadMaxMotorcycleCc: [synthetic(1, 'no motorcycles')],
        thirdPartyDamageLimits: [synthetic(1, 'limit')],
      }),
    );
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 1,
          stepAsEnum: 'step1',
          stepPath: ['step1'],
          formData: {
            proposerPolicyStartDate: '2026-09-09',
            proposerPolicyStartTime: '12:01',
            isShortTerm: false,
            proposerCompanyTypeId: 1,
            proposerTitleId: 999,
            proposerName: 'Synthetic',
            proposerSurname: 'Fixture',
            proposerEmail: 'synthetic@example.test',
            proposerTelephoneNumber: '01234567890',
            proposerPostcode: 'TEST1',
            proposershowAddress: true,
            proposerHouseNumber: '1',
            proposerStreet: 'Synthetic Street',
            proposerCounty: 'Synthetic County',
            tradingFromId: 1,
            tradingPremises: [],
            businessStartedDate: '2020-01-01',
            businessAnnualTurnover: 1000,
            businessAnnualWageRoll: 0,
            businessIsTradeAssociationMember: false,
            businessIsVATRegistered: false,
            businessNumberOfVehiclesHandlePerYear: 1,
            businessNumberOfVehicleCapacity: 1,
            occupations: [{ occupationId: 999, percentage: 100 }],
            coverLevelID: 1,
            coverIndemnityLimitOwnVehiclesID: 1,
            coverExcessID: 999,
            coverAddAllSectionsExcess: false,
            coverExcessLateID: 1,
            coverRemoveCoInsuraneExcess: false,
            requireCustomerLoanCover: false,
            coverNCBID: 1,
            driverPlanId: 3,
            aadDriverNumber: 1,
            aadDriverMinAgeId: 999,
            aadDriverMaxAgeId: 999,
            aadMaxVehicleGroupingID: 999,
            aadMaxVehicleGvwID: 999,
            aadMaxMotorcycleCcID: 1,
            tradePlateCovered: false,
            tradePlateMaxNumber: 0,
            tradePlateNumbers: [],
            standardCars: true,
            percentageOfStandardCars: 100,
            lossOfUseCover: false,
            vehiclesAtSubcontractorsCover: false,
            thirdPartyPropertyDamageCoverTypeID: 1,
            ...Object.fromEntries(pairs.map((pair) => [pair.path, false])),
          },
        },
        version: 0,
      }),
    );
  }, declaration.pairs);
  const capture = async (name: string) => {
    await expect(page.locator('.collapsing')).toHaveCount(0);
    for (const width of [375, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await page.screenshot({ path: info.outputPath(`${name}-${width}.png`), fullPage: true });
      // SHR-MT-R07 retains the header's negative mobile margins; do not impose
      // a new viewport-overflow rule on that documented layout exception.
      for (const body of await page.locator('.container-body-md').all())
        expect((await body.boundingBox())!.width).toBeLessThanOrEqual(Math.min(width, 568));
    }
  };
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await capture('root');
  await page.getByRole('link', { name: 'Motor Trade', exact: true }).click();
  for (let step = 1; step <= 14; step++) {
    await expect(page).toHaveURL(new RegExp(`/steps/step${step}$`));
    await expect(page.locator('form')).toBeVisible();
    await capture(`step${step}`);
    if (step === 9) await page.locator('label[for="opt_addSpecifiedVehicle_false"]').click();
    if (step < 14)
      await page
        .getByRole('button', {
          name: step >= 7 && step <= 9 ? 'Next' : 'Save and Continue',
          exact: true,
        })
        .click();
  }
  for (const disclosure of await page.locator('form button[aria-expanded]').all()) {
    await disclosure.click();
  }
  await expect(page.getByText('synthetic@example.test', { exact: true })).toBeVisible();
  await capture('summary-open');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(page.locator('.lookup-overlay')).toBeVisible();
  const result = await page.evaluate(() => ({
    raw: JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state,
    prepared: (
      window as unknown as { __CX1_HOST_INPUTS__: { terminalPort: { prepared: unknown } } }
    ).__CX1_HOST_INPUTS__.terminalPort.prepared,
  }));
  expect(result.raw.stepPath).toEqual(Array.from({ length: 14 }, (_, index) => `step${index + 1}`));
  expect(result.raw.formData.proposerPolicyStartTime).toBe('12:01');
  expect(result.prepared).toMatchObject({
    branch: { kind: 'ordinary' },
    argument: { proposerPolicyStartTime: '2026-09-09T12:01:00.000Z' },
  });
  await expect(page).toHaveURL(/step14$/);
});
