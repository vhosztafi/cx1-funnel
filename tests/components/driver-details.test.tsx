import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RuntimeContext } from '@/runtime/context';
import { createSession } from '@/domain/session';
import { DriverDetails } from '@/surfaces/driver-details';
import { optionCollections, type Options } from '@/domain/options';
import { questionRegistry } from '@/contracts/registry';
import type { RawDriver } from '@/domain/types';
function mount(driver: RawDriver, coverLevelID = 1) {
  const form = createSession();
  form.setStep(6);
  form.setData({
    proposerPolicyStartDate: '2026-09-09',
    proposerCompanyTypeId: 1,
    coverLevelID,
    coverIndemnityLimitOwnVehiclesID: 1,
    drivers: [driver],
  });
  const options: Options = {
    ...Object.fromEntries(
      optionCollections.map((name) => [name, [{ value: 1, text: `Synthetic ${name}` }]]),
    ),
    companyTypes: [{ value: 1, text: 'Synthetic company', relationshipOptions: [2] }],
    driverRelationshipsPolicyHolder: [{ value: 2, text: 'Synthetic employee' }],
    indemnityOwnVehicles: [{ value: 1, text: 'Synthetic limit', numericValue: 20000 }],
    youngDriverConfiguration: [
      {
        ageFrom: 21,
        ageTo: 22,
        additionalExcess: 'Synthetic excess',
        defaultCc: 'Synthetic CC',
        indemnities: [{ value: 999, text: 'Synthetic indemnity', numericValue: 10000 }],
        cCs: [{ value: 999, text: 'Synthetic CC' }],
      },
    ],
    driverExperienceBasedExcesses: [
      { value: 999, text: 'Synthetic experience excess', numericValue: 10000 },
    ],
    driverExperienceBasedVehicleCCLimits: [{ value: 999, text: 'Synthetic experience CC' }],
  };
  const result = render(
    <MemoryRouter
      initialEntries={[
        { pathname: '/motortrade-roadrisks/steps/step6', state: { editing: true, editDriver: 0 } },
      ]}
    >
      <RuntimeContext.Provider
        value={{
          form,
          host: {
            now: () => new Date('2026-09-09'),
            driverPrompts: {
              'MTS-06-Q59': () => 'Synthetic Q59',
              'MTS-06-Q61': () => 'Synthetic Q61',
              'MTS-06-Q62': () => 'Synthetic Q62',
            },
          },
          options,
          loading: false,
          setLoading: vi.fn(),
          surfaces: {},
        }}
      >
        <DriverDetails />
      </RuntimeContext.Provider>
    </MemoryRouter>,
  );
  return { ...result, form };
}
const syntheticDriver: RawDriver = {
  guid: 'synthetic',
  firstName: 'Synthetic',
  surname: 'Driver',
  dateOfBirth: '2005-01-01',
  relationshipPolicyholderID: 2,
  showAddress: true,
  isUKResidentSinceBirth: false,
  motorcycleCoverID: 2,
  tradeEmploymentBasisID: 2,
  driverOccupations: [{}],
  hasMotoringConvictions: true,
  driverMotortradingConvictions: [{ disqualified: true }],
  hasClaimsOrAccidents: true,
  driverClaims: [{}],
  hasReportedDisability: true,
  hasReportedDisabilityDetails: 'Retained until No',
  hasCriminalConvictions: true,
  criminalConvictions: [{}],
  hasCCJs: true,
  countyCourtJudgements: [{}],
};
it('MTS-06-Q08–60 complete active detail groups retain canonical field order and first-row omissions', () => {
  const { container, form } = mount(syntheticDriver);
  const labels = Array.from(container.querySelectorAll('label')).map((label) => label.textContent);
  let after = -1;
  for (let number = 8; number <= 57; number++) {
    const owner = `MTS-06-Q${String(number).padStart(2, '0')}`;
    const expected = questionRegistry.get(owner)!.label;
    const index = labels.findIndex((label, index) => index > after && label === expected);
    expect(index, `${owner}: ${expected}`).toBeGreaterThan(after);
    after = index;
  }
  expect(screen.getByRole('heading', { name: 'Young Driver Details' })).toBeInTheDocument();
  expect(screen.getByText('Synthetic Q59')).toBeInTheDocument();
  expect(container.textContent).toContain(
    'An additional excess of Synthetic excess will apply to Synthetic Driver due to their age.  Do you wish to remove this excess for an additional premium? ',
  );
  expect(container.textContent).toContain(
    'Synthetic Driver is restricted to drive vehicles up to a maximum of Synthetic CC. Do you wish to increase this restriction for an additional premium?',
  );
  expect(screen.queryByRole('button', { name: 'X' })).toBeNull();
  expect(screen.queryByText('Synthetic Q61')).toBeNull();
  expect(form.getSnapshot().formData.drivers?.[0]).toEqual(syntheticDriver);
  fireEvent.click(container.querySelector('label[for="opt_hasReportedDisability_false"]')!);
  expect(container.querySelector('input[name="hasReportedDisabilityDetails"]')).toBeNull();
  expect(form.getSnapshot().formData.drivers?.[0].hasReportedDisabilityDetails).toBe(
    'Retained until No',
  );
});
it.each([1, 3])(
  'MTS-06-Q61/62 experience controls with cover %s retain the TPO excess omission',
  (cover) => {
    const { container } = mount(
      { ...syntheticDriver, dateOfBirth: '1990-01-01', licenseIssueDate: '2026-08-01' },
      cover,
    );
    expect(
      screen.getByRole('heading', { name: 'UK Licence for less than 1 year' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Young Driver Details' })).toBeNull();
    expect(Boolean(screen.queryByText('Synthetic Q61'))).toBe(cover !== 3);
    expect(screen.getByText('Synthetic Q62')).toBeInTheDocument();
    expect(
      container.querySelector('input[name="experienceIncreaseVehicleCCLimitID"]'),
    ).not.toBeNull();
  },
);
