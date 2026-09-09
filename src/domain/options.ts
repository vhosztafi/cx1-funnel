import type { Id, NullableId } from './types';

// OPT-MT-01–72 / CLR-001: collection rows are provided, never reconstructed.
export interface OptionItem {
  value: Id;
  text: string;
  numericValue?: number | null;
  excesses?: ExcessRow[] | null;
  abiGroup?: number | null;
  gvwLimitDecimal?: number | null;
  isSocialDomesticPleasure?: boolean | null;
  requireShunterRadius?: boolean | null;
  requireCarJockeyRadius?: boolean | null;
  customerLOI?: boolean | null;
  isComprehensive?: boolean | null;
  requireNCBIntroRenewal?: boolean | null;
  categoryCommercial?: boolean | null;
  countries?: string | null;
  [metadata: string]: unknown;
}
export interface ExcessRow {
  value: Id;
  text: string;
  isDefault?: boolean;
  numericValue?: number | null;
  [key: string]: unknown;
}
export const optionCollections = [
  'proposerTitles',
  'marketingMethods',
  'companyTypes',
  'tradingFroms',
  'tradingPremiseTypes',
  'mtOccupations',
  'coverLevels',
  'customerLoanCoverLevels',
  'indemnityOwnVehicles',
  'indemnityCustomerVehicles',
  'excessLates',
  'noClaimBonuses',
  'noClaimBonusesEarned',
  'noClaimBonusPreviousInsurers',
  'noClaimBonusIntroRenewalYears',
  'driverPlans',
  'aadDriverMinAge',
  'aadDriverMaxAge',
  'aadMaxVehicleGrouping',
  'aadMaxVehicleGvw',
  'aadMaxMotorcycleCc',
  'youngDriverIndemnityLimit',
  'driverTitles',
  'driverRelationshipsPolicyHolder',
  'driverUsages',
  'driverGVWLimits',
  'driverLicenceTypes',
  'driverMotorcycleCovers',
  'driverMaxABIGroups',
  'driverTradeEmploymentBasises',
  'occupations',
  'driverMTConvictionCodes',
  'driverClaimTypes',
  'driverClaimStatuses',
  'driverCriminalConvictionCodes',
  'driverCCJStatuses',
  'driverExperienceBasedExcesses',
  'driverExperienceBasedVehicleCCLimits',
  'vehicleType',
  'vehicleKeptOvernightType',
  'vehicleModifications',
  'demonstrationCovers',
  'windScreenCovers',
  'thirdPartyDamageLimits',
  'europeanTripUsage',
  'europeanArea',
  'europeanTripCover',
  'carJockeyRadii',
] as const;
export type OptionCollection = (typeof optionCollections)[number];
export interface YoungBand {
  ageFrom: number | null;
  ageTo: number | null;
  additionalExcess?: string;
  defaultAdditionalIndemnity?: string;
  defaultCc?: string;
  indemnities?: readonly OptionItem[];
  cCs?: readonly OptionItem[];
}
export type Options = Partial<Record<OptionCollection, readonly OptionItem[]>> & {
  youngDriverConfiguration?: readonly YoungBand[];
};
export function optionRows(options: Options, name: string | undefined) {
  return name ? options[name as OptionCollection] : undefined;
}
export function looseOption(rows: readonly OptionItem[] | undefined, value: unknown) {
  return rows?.find((option) => option.value == value);
}
export function strictOption(rows: readonly OptionItem[] | undefined, value: unknown) {
  return rows?.find((option) => option.value === value);
}
export function selectedMany(
  rows: readonly OptionItem[] | undefined,
  values?: readonly unknown[] | null,
) {
  return rows?.filter((option) => values?.includes(option.value)) ?? [];
}
export function ownIndemnityValue(options: Options, id: NullableId | undefined) {
  return strictOption(options.indemnityOwnVehicles, id)?.numericValue;
}
/** CLR-007: undefined is an unresolved input, never an invented default limit. */
export interface RuntimeLimits {
  driverLimit?: number;
  pageSize?: number;
}
export function displayedPage<T>(
  items: readonly T[],
  page: number,
  pageSize?: number,
): readonly T[] {
  const size = pageSize as number; // preserve JS comparisons/arithmetic when absent
  return items.length < size ? items : items.slice((page - 1) * size, page * size);
}
export function paginationVisible(length: number, pageSize?: number) {
  return length > (pageSize as number);
}
export function addDriverDisabled(length: number, driverLimit?: number) {
  return !(length < (driverLimit as number));
}
