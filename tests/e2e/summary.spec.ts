import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __CX1_HOST_INPUTS__: unknown }).__CX1_HOST_INPUTS__ = {
      now: () => new Date('2026-09-09T12:00:00'),
      terminalBranch: { kind: 'ordinary' },
      terminalPort: {},
      limits: { pageSize: 10, driverLimit: 5 },
    };
    sessionStorage.setItem('authBroker', 'SYNTHETIC TEST ONLY');
    sessionStorage.setItem('motorTradeOptions', '{}');
    sessionStorage.setItem(
      'motorTradeFormStore',
      JSON.stringify({
        state: {
          step: 14,
          stepAsEnum: 'step14',
          stepPath: ['step14'],
          formData: {
            proposerPolicyStartDate: '2026-09-09',
            proposerPolicyStartTime: '12:00',
            vehicles: [],
            drivers: [],
            proposerEmail: 'synthetic@example.test',
          },
        },
        version: 0,
      }),
    );
  });
});
test('MTS-14/U01 disclosures start closed and Driver Edit preserves active family with list flags', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks-rtl/steps/step14');
  await expect(page.getByRole('heading', { name: 'Summary', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit', exact: true })).toHaveCount(12);
  await expect(page.locator('form button[aria-expanded="false"]')).toHaveCount(12);
  const proposer = page.getByText('Proposer Details', { exact: true }).locator('..').locator('..');
  await proposer.locator('button[aria-expanded]').click();
  await expect(proposer.getByText('synthetic@example.test')).toBeVisible();
  await page
    .getByText('Drivers', { exact: true })
    .locator('..')
    .getByRole('button', { name: 'Edit', exact: true })
    .click();
  await expect(page).toHaveURL(/motortrade-roadrisks-rtl\/steps\/step6$/);
  await expect(page.getByRole('button', { name: 'Add another driver' })).toBeVisible();
});
test('MTS-14-R01/R02 validation precedes loading; valid Submit reaches local boundary without persisting ISO or navigating', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks/steps/step14');
  await page.locator('input[type="time"]').fill('11:59');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(
    page.getByText('Specified time and date must be later than form submission.', { exact: true }),
  ).toBeVisible();
  await page.locator('input[type="time"]').fill('12:01');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Submit', exact: true })).toBeDisabled();
  await expect(page.locator('.lookup-overlay')).toBeVisible();
  await expect(page).toHaveURL(/step14$/);
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData
          .proposerPolicyStartTime,
    ),
  ).toBe('12:00');
  expect(
    await page.evaluate(
      () =>
        (
          window as unknown as {
            __CX1_HOST_INPUTS__: {
              terminalPort: { prepared: { argument: Record<string, unknown> } };
            };
          }
        ).__CX1_HOST_INPUTS__.terminalPort.prepared.argument.proposerPolicyStartTime,
    ),
  ).toBe('2026-09-09T12:01:00.000Z');
});
test('EDGE-SUM-OTHER standard-family edit and MTS-14 Back raw-time persistence', async ({
  page,
}) => {
  await page.goto('/motortrade-roadrisks-rtl/steps/step14');
  await page
    .getByText('Additional Information', { exact: true })
    .locator('..')
    .getByRole('button', { name: 'Edit', exact: true })
    .click();
  await expect(page).toHaveURL(/\/motortrade-roadrisks\/steps\/step13$/);
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.locator('input[type="time"]').fill('10:00');
  await page.getByRole('button', { name: 'Go Back' }).click();
  await expect(page).toHaveURL(/step13$/);
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData
          .proposerPolicyStartTime,
    ),
  ).toBe('10:00');
});

test('MTS-14-R03 every Edit destination preserves raw state and the two special list routes', async ({
  page,
}) => {
  test.setTimeout(90000);
  await page.addInitScript(() => {
    const persisted = JSON.parse(sessionStorage.getItem('motorTradeFormStore')!);
    persisted.state.formData = {
      ...persisted.state.formData,
      coverLevelID: 1,
      coverIndemnityLimitOwnVehiclesID: 999,
      specifiedVehicles: [{ ownerTypeID: 2, regNumber: 'SYNTHETIC' }],
      syntheticRetained: 'edit fixture',
    };
    sessionStorage.setItem('motorTradeFormStore', JSON.stringify(persisted));
    sessionStorage.setItem(
      'motorTradeOptions',
      JSON.stringify({
        indemnityOwnVehicles: [{ value: 999, text: 'Synthetic limit', numericValue: 15000 }],
      }),
    );
  });
  for (let step = 1; step <= 13; step++) {
    await page.goto('/motortrade-roadrisks-s2-rtl/steps/step14');
    const buttons = page.getByRole('button', { name: 'Edit', exact: true });
    await expect(buttons).toHaveCount(13);
    const before = await page.evaluate(
      () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData,
    );
    await buttons.nth(step - 1).click();
    const family =
      step === 6 || step === 8 ? 'motortrade-roadrisks-s2-rtl' : 'motortrade-roadrisks';
    await expect(page).toHaveURL(`/${family}/steps/step${step}`);
    if (step === 6)
      await expect(page.getByRole('button', { name: 'Add another driver' })).toBeVisible();
    if (step === 8)
      await expect(page.getByText('Please click the button below to add a vehicle')).toBeVisible();
    const after = await page.evaluate(
      () => JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state,
    );
    expect(after.step).toBe(step);
    expect(after.formData).toEqual(before);
  }
});
