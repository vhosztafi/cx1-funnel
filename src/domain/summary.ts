import type { RawForm, Step, DateValue } from './types';
import { looseOption, type Options, type OptionCollection } from './options';
import { dayjs } from './dates';
import { coverDefinition, coverExcesses } from './cover';
import { vehicleTypesSummary } from './vehicle-types';
import { declarationSummary } from './declaration';
import { extrasDefinition, type AnnualTrip, type TemporaryTrip } from './extras';
import { sanitizeMotorTradeVehicles } from './converter';
export interface SummaryRow {
  label?: string;
  value?: unknown;
  heading?: unknown;
  detail?: unknown;
  wrap?: boolean;
  divider?: boolean;
}
export interface SummarySection {
  owner: string;
  step: Step;
  title: string;
  rows: SummaryRow[];
}
// MTS-14-R04: raw missing values are left for React; no generic empty-state copy.
export function summarySections(raw: RawForm, options: Options, now: Date): SummarySection[] {
  const bool = (value: unknown) => (value ? 'Yes' : 'No');
  const date = (value: unknown) => dayjs(value as DateValue).format('DD/MM/YYYY');
  const option = (collection: OptionCollection, value: unknown) =>
    looseOption(options[collection], value)?.text;
  const row = (label: string, value: unknown, wrap = false): SummaryRow => ({ label, value, wrap });
  const section = (step: Step, title: string, rows: SummaryRow[]): SummarySection => ({
    owner: `MTS-${String(step).padStart(2, '0')}`,
    step,
    title,
    rows,
  });
  const groups = <T>(
    values: readonly T[] | null | undefined,
    render: (value: T, index: number) => SummaryRow[],
  ) =>
    values?.flatMap((value, index) => [
      ...(index ? [{ divider: true }] : []),
      ...render(value, index),
    ]) || [];
  const result: SummarySection[] = [
    section(1, 'Proposer Details', [
      row(
        'The standard policy term is 12 months. Do you wish to change this to 6 months?',
        bool(raw.isShortTerm),
      ),
      row(
        'What type of company / legal entity is used?',
        option('companyTypes', raw.proposerCompanyTypeId),
      ),
      row('Email Address', raw.proposerEmail, true),
      row('Telephone Number', raw.proposerTelephoneNumber),
      row('Mobile Number', raw.proposerMobileNumber),
      row('Postcode', raw.proposerPostcode),
    ]),
    section(2, 'Premises Details', [
      row('Where are you trading from?', option('tradingFroms', raw.tradingFromId)),
      ...(raw.tradingFromId === 3 || raw.tradingFromId === 4
        ? groups(raw.tradingPremises, (premise, index) => [
            { heading: `Premise ${index + 1}` },
            row('Postcode', premise.tradingPremisePostcode),
            row(
              'What type of premises are you trading from?',
              option('tradingPremiseTypes', premise.tradingPremiseTypeId),
            ),
            row(
              'How long have you been trading from these premises? (years)',
              premise.tradingPremiseYearsTrading,
            ),
            row('Is this a shared worksite?', bool(premise.tradingPremiseIsSharedWorksite)),
          ])
        : []),
    ]),
    section(3, 'Business Details', [
      row('Date Business Started Trading', date(raw.businessStartedDate)),
      row('Annual Turnover', raw.businessAnnualTurnover),
      row('Annual Wage Roll', raw.businessAnnualWageRoll),
      row(
        'Are you a member of any trade associations?',
        bool(raw.businessIsTradeAssociationMember),
      ),
      ...(raw.businessIsTradeAssociationMember
        ? [row('Trade Association', raw.businessTradeAssociationName)]
        : []),
      row('Is the company VAT registered?', bool(raw.businessIsVATRegistered)),
      ...(raw.businessIsVATRegistered ? [row('VAT Number ', raw.businessVATNumber)] : []),
      row('Number of vehicles handled per year', raw.businessNumberOfVehiclesHandlePerYear),
      row('Maximum Vehicle Capacity', raw.businessNumberOfVehicleCapacity),
    ]),
    section(
      4,
      'Occupations',
      groups(raw.occupations, (occupation, index) => [
        {
          heading: `Occupation ${index + 1}: ${options.mtOccupations?.find((option) => `${option.value}` == occupation.occupationId)?.text}`,
        },
        row('Occupation Percentage', `${occupation.percentage}%`),
      ]),
    ),
  ];
  const coverRows: SummaryRow[] = [];
  for (const n of [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 17]) {
    const q = coverDefinition.questions[n - 1];
    let label: string = q.label;
    let value: unknown;
    if (n === 1) label = 'Cover Level';
    if (n === 2) label = 'Own vehicles';
    if (n === 3) label = 'Customer vehicles';
    if (n === 4)
      value = looseOption(
        coverExcesses(raw.coverLevelID, raw.coverIndemnityLimitOwnVehiclesID, options, true),
        raw.coverExcessID,
      )?.text;
    else if ([5, 7, 17].includes(n)) value = bool(raw[q.path]);
    else if (n === 12) value = date(raw[q.path]);
    else
      value = option('options' in q ? (q.options as OptionCollection) : 'coverLevels', raw[q.path]);
    coverRows.push(row(label, value));
    if (n === 13 && raw.coverNCBPreviousInsurerId === 21)
      coverRows.push(row('Other Insurer Details', raw.coverNCBPreviousInsurerOther));
  }
  result.push(
    section(5, 'Cover Required', coverRows),
    section(
      6,
      'Drivers',
      groups(raw.drivers, (driver) => [
        { heading: `${driver.firstName} ${driver.surname}` },
        row(
          'Date of Birth:',
          `${date(driver.dateOfBirth)} (${Math.floor(dayjs(now).diff(dayjs(dayjs(driver.dateOfBirth).format('YYYY-MM-DD')), 'years', true))} yrs old)`,
        ),
        row(
          'Relationship to Policyholder:',
          option('driverRelationshipsPolicyHolder', driver.relationshipPolicyholderID),
          true,
        ),
      ]),
    ),
    section(7, 'Trade Plates', [
      row('Do you require Trade Plates to be covered?', bool(raw.tradePlateCovered)),
      ...(raw.tradePlateCovered ? [row('How Many?', raw.tradePlateMaxNumber)] : []),
      ...(raw.tradePlateNumbers?.map((plate, index) =>
        row(`Trade Plate ${index + 1}`, `${plate.plateNumber}`),
      ) || []),
    ]),
  );
  const projected = sanitizeMotorTradeVehicles(raw, options);
  if (projected.vehicles)
    result.push(
      section(
        8,
        'Vehicles',
        groups(projected.vehicles, (vehicle) => [
          { heading: vehicle.regNumber },
          row('Make ', vehicle.make),
          row('Model', vehicle.model),
        ]),
      ),
    );
  if (projected.specifiedVehicles?.length) {
    const vehicle = projected.specifiedVehicles[0];
    result.push(
      section(9, 'Specified Vehicle', [
        { heading: vehicle.regNumber },
        row('Make ', vehicle.make),
        row('Model', vehicle.model),
      ]),
    );
  }
  result.push(
    section(
      10,
      'Vehicles to be Driven',
      vehicleTypesSummary(raw).flatMap((category) => [
        { heading: category.label },
        row('Percentage:', category.percentage),
        ...(category.details ? [row('Detail:', category.details)] : []),
        ...(category.max
          ? [row('Maximum number of vehicles that can be carried by transporter:', category.max)]
          : []),
      ]),
    ),
  );
  const eq = (n: number) => extrasDefinition.questions[n - 1];
  const extra = (n: number, value: unknown, label?: string) => row(label ?? eq(n).label, value);
  const extras: SummaryRow[] = [];
  if (raw.demonstrationCover)
    extras.push(
      extra(2, option('demonstrationCovers', raw.demonstrationCoverTypeID)),
      extra(3, bool(raw.demonstrationCoverForMotorcycles)),
    );
  if (raw.windscreenCover)
    extras.push(
      extra(5, option('windScreenCovers', raw.windscreenCoverTypeID)),
      extra(6, bool(raw.isAdditionalWindscreenCoverRequired)),
    );
  extras.push(
    extra(7, bool(raw.lossOfUseCover), 'Is loss of use cover required?'),
    extra(8, bool(raw.vehiclesAtSubcontractorsCover)),
    extra(9, option('thirdPartyDamageLimits', raw.thirdPartyPropertyDamageCoverTypeID)),
  );
  if (raw.annualEuropeanCover)
    extras.push(
      extra(10, 'Yes'),
      ...groups(raw.europeanCoverAnnualExtras as AnnualTrip[] | undefined, (trip, index) => [
        { heading: `Vehicle ${index + 1}` },
        extra(11, trip.regNumber),
        extra(12, option('driverUsages', trip.europeanCoverUsageTypeID)),
      ]),
    );
  if (raw.temporaryEuropeanCover)
    extras.push(
      extra(13, 'Yes'),
      ...groups(raw.europeanCoverTemporaryExtras as TemporaryTrip[] | undefined, (trip, index) => [
        { heading: `Trip ${index + 1}` },
        extra(14, trip.regNumber),
        extra(15, date(trip.startDateEuropeanTrip)),
        extra(16, date(trip.endDateEuropeanTrip)),
        extra(17, option('europeanArea', trip.europeanAreaID)),
        row('Drivers:', trip.europeanCoverDriverNames?.join(', ')),
        extra(19, option('coverLevels', trip.europeanCoverTypeID)),
        extra(20, option('driverUsages', trip.europeanCoverUsageTypeID)),
      ]),
    );
  result.push(
    section(11, 'Extras', extras),
    section(
      12,
      'Declaration',
      declarationSummary(raw).map((entry) => ({ heading: entry.label, detail: entry.detail })),
    ),
    section(13, 'Additional Information', [
      row(
        'Please provide any information that you think is essential to the risk:',
        raw.essentialRiskInformation,
      ),
      ...(raw.restrictShuntersPolicyRadius
        ? [row('Do you wish to restrict the policy to a 100 meter radius?', 'Yes')]
        : []),
    ]),
  );
  return result;
}
