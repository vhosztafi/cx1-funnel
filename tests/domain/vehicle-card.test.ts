import { it, expect, vi } from 'vitest';
import { lookupCardValue, selectedVehicleCategory } from '@/domain/vehicle-card';

it('MTS-08-Q06/Q15/U01 and MTS-09-U01 isolate unspecified lookup formatting without changing raw values', () => {
  const vehicle = {
    vehicleTypeID: 999,
    registrationDate: '2020-01-01',
    make: 'Synthetic make',
    gvw: 0,
    isImported: false,
  };
  const before = { ...vehicle };
  expect(lookupCardValue('make', vehicle, {})).toBe('Synthetic make');
  expect(lookupCardValue('gvw', vehicle, {})).toBe('0');
  expect(lookupCardValue('vehicleTypeID', vehicle, {})).toBeUndefined();
  expect(lookupCardValue('registrationDate', vehicle, {})).toBeUndefined();
  const formatter = vi.fn(() => 'Synthetic supplied display');
  expect(lookupCardValue('registrationDate', vehicle, {}, formatter)).toBe(
    'Synthetic supplied display',
  );
  expect(formatter).toHaveBeenCalledWith('registrationDate', vehicle, {});
  expect(vehicle).toEqual(before);
  expect(lookupCardValue('isImported', vehicle, {})).toBe('No');
  expect(lookupCardValue('isImported', { isImported: true }, {})).toBe('Yes');
});
it('OPT-MT-59 strict missing-row fallback differs from a matched row with absent category metadata', () => {
  const options = {
    vehicleType: [
      { value: 999, text: 'Synthetic', category: 'Motorcycle' },
      { value: 998, text: 'Synthetic unknown' },
    ],
  };
  expect(selectedVehicleCategory(options, 999)).toBe('Motorcycle');
  expect(selectedVehicleCategory(options, '999')).toBe('');
  expect(selectedVehicleCategory({}, 999)).toBe('');
  expect(selectedVehicleCategory(options, 998)).toBeUndefined();
});
