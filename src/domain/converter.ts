import type { RawForm, RawVehicle } from './types';
import { strictOption, type Options } from './options';
// MTS-09-R18 / MTS-14-R05: projection only; never write sanitized rows back.
export function sanitizeMotorTradeVehicles(raw: RawForm, options: Options) {
  const eligibleOwner = (vehicle: RawVehicle) =>
    vehicle.ownerTypeID !== 4 ||
    raw.drivers?.some(
      (driver) => driver.guid === vehicle.ownerGuid && driver.coverPersonalVehicle === true,
    );
  const numeric = strictOption(
    options.indemnityOwnVehicles,
    raw.coverIndemnityLimitOwnVehiclesID,
  )?.numericValue;
  const specifiedEligible = raw.coverLevelID === 1 && !!numeric && numeric <= 15000;
  const vehicles = raw.vehicles?.filter(eligibleOwner);
  const specifiedVehicles = raw.specifiedVehicles?.filter(
    (vehicle) => specifiedEligible && eligibleOwner(vehicle),
  );
  return {
    ...raw,
    vehicles,
    specifiedVehicles,
    addSpecifiedVehicle: raw.specifiedVehicles
      ? !!specifiedVehicles?.length
      : raw.addSpecifiedVehicle,
  };
}
function omitAddress<T extends Record<string, unknown>>(row: T) {
  const result = { ...row };
  delete result.showAddress;
  return result;
}
// MTS-06-R21 / MTS-14-R02: entirely local argument conversion; no transport.
export function motorTradeConverter(raw: RawForm, options: Options) {
  const result: Record<string, unknown> = sanitizeMotorTradeVehicles(raw, options);
  if (raw.tradingPremises) result.tradingPremises = raw.tradingPremises.map(omitAddress);
  if (raw.drivers) result.drivers = raw.drivers.map(omitAddress);
  if (raw.tradePlateNumbers)
    result.tradePlateNumbers = raw.tradePlateNumbers.map((plate) => plate.plateNumber);
  delete result.proposershowAddress;
  return result;
}
