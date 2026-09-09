import type { RawVehicle } from './types';
import type { Options } from './options';

export type LookupCardFormatter = (
  field: 'vehicleTypeID' | 'registrationDate',
  vehicle: RawVehicle,
  options: Options,
) => string | undefined;

// MTS-08-Q06/Q15/Q16, MTS-08-U01, MTS-09-U01; IMP-CLR-020.
// List-card projection rules are not evidence for the separately mounted lookup card.
export function lookupCardValue(
  field: string,
  vehicle: RawVehicle,
  options: Options,
  formatter?: LookupCardFormatter,
) {
  if (field === 'vehicleTypeID' || field === 'registrationDate')
    return formatter?.(field, vehicle, options);
  if (field === 'isImported') return vehicle.isImported ? 'Yes' : 'No';
  return vehicle[field] == null ? '' : String(vehicle[field]);
}

// OPT-MT-59: a missing strict row has the documented empty category fallback.
export function selectedVehicleCategory(options: Options, value: unknown) {
  const row = options.vehicleType?.find((option) => option.value === value);
  return row ? row.category : '';
}
