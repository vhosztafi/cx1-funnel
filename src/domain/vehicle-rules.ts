import { max, uniq } from 'lodash-es';
import type { RawForm, RawVehicle } from './types';
import { strictOption, type Options } from './options';
export interface VehicleValidators {
  abi: { driverMaxAbi?: unknown; driverPlanMaxAbi?: unknown };
  gvw: { driverListGvw?: unknown; driverPlanGvw?: unknown };
}
export function vehicleParameters(raw: RawForm, options: Options, variables: VehicleValidators) {
  return {
    maxAbi: max([variables.abi.driverMaxAbi, variables.abi.driverPlanMaxAbi]),
    maxGvw: [variables.gvw.driverListGvw, variables.gvw.driverPlanGvw],
    maxVehicleValue:
      strictOption(options.indemnityOwnVehicles, raw.coverIndemnityLimitOwnVehiclesID)
        ?.numericValue ?? null,
    motorCycleType: options.vehicleType?.filter((row) => row.category === 'Motorcycle') || [],
    anyDriverCC: strictOption(options.aadMaxMotorcycleCc, raw.aadMaxMotorcycleCcID)?.maxCC,
    driversCC: strictOption(
      options.driverMotorcycleCovers,
      max(raw.drivers?.map((row) => row.motorcycleCoverID)),
    )?.maxCC,
    vehicleTypes: options.vehicleType,
  };
}
export function motorcycleVehicleAllowed(raw: RawForm) {
  return (
    !!raw.drivers?.some((driver) => driver.motorcycleLicenceIssueDate) ||
    (raw.driverPlanId !== 1 && raw.aadMaxMotorcycleCcID !== 1)
  );
}
export interface VehicleChoice {
  value: unknown;
  text: string;
  [key: string]: unknown;
}
// OPT-MT-72 / MTS-08-R03 / MTS-09-R17: generated labels are confirmed, database rows aren't.
export function vehicleOwnerOptions(raw: RawForm, specified = false): VehicleChoice[] {
  const company = raw.proposerCompanyTypeId;
  if (company !== 1 && company !== 2 && company !== 3 && company !== 4) return [];
  const drivers = (raw.drivers || [])
    .filter((driver) => specified || company !== 1 || driver.relationshipPolicyholderID !== 3)
    .map((driver) => ({ value: driver.guid, text: `${driver.firstName} ${driver.surname}` }));
  if (company === 1)
    return [...drivers, { value: 1, text: `${raw.proposerName} ${raw.proposerSurname}` }];
  return [
    ...drivers,
    { value: 2, text: String(raw.proposerCompanyPartnershipName) },
    ...(company === 2 || company === 3 ? [{ value: 3, text: 'Other Company Director' }] : []),
  ];
}
export function vehicleOwnerSelection(value: unknown) {
  return value === 1 || value === 2 || value === 3
    ? { ownerTypeID: value, ownerGuid: null }
    : { ownerTypeID: 4, ownerGuid: value };
}
export function vehicleOwnerDisplay(vehicle: RawVehicle, raw: RawForm) {
  if (vehicle.ownerTypeID === 1) return `${raw.proposerName} ${raw.proposerSurname}`;
  if (vehicle.ownerTypeID === 2 || vehicle.ownerTypeID === 3)
    return raw.proposerCompanyPartnershipName;
  if (vehicle.ownerTypeID === 4) {
    if (!vehicle.ownerGuid) return vehicle.ownerDescription;
    const driver = raw.drivers?.find((row) => row.guid === vehicle.ownerGuid);
    return `${driver?.firstName} ${driver?.surname}`;
  }
  return null;
}
export function overnightOptions(
  raw: RawForm,
  specified = false,
  format?: (postcode: string) => string | undefined,
): VehicleChoice[] {
  const values = [
    raw.proposerPostcode,
    ...(raw.tradingPremises || []).map((row) => row.tradingPremisePostcode),
    ...(raw.drivers || []).filter((row) => row.coverPersonalVehicle).map((row) => row.postCode),
  ];
  if (specified) return uniq(values).map((value) => ({ value, text: value as string }));
  return uniq(values.map((value) => (value as string | undefined)?.replace(/ /g, ''))).map(
    (value) => ({
      value,
      text: format?.((value || '').toUpperCase().replace(/[^A-Z0-9]/g, '')) || '',
    }),
  );
}
export function modificationDuplicate(
  rows: readonly Record<string, unknown>[] | null | undefined,
  specified = false,
) {
  const key = specified ? 'modificationID' : 'modificationId';
  const values = rows?.map((row) => row[key]).filter(Boolean) || [];
  return new Set(values).size !== values.length;
}
export const vehicleLookupFields = [
  'make',
  'model',
  'abiCode',
  'abiGroup',
  'vehicleTypeID',
  'bodyType',
  'isImported',
  'gvw',
  'seats',
  'doors',
  'fuelType',
  'transmission',
  'engineSize',
  'registrationYear',
  'registrationDate',
] as const;
export function vehicleLookupProjection(values: RawVehicle, registration: string): RawVehicle {
  return {
    ...Object.fromEntries(
      vehicleLookupFields.map((key) => [
        key,
        key === 'gvw' && !Number.isNaN(Number(values[key])) ? Number(values[key]) : values[key],
      ]),
    ),
    regNumber: registration,
    isManualEntry: false,
  };
}
