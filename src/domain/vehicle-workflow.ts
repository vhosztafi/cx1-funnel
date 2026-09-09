import type { RawForm, RawVehicle, RouteState } from './types';
export const vehicleMessages = {
  capacity: 'Number of vehicles cannot be greater than Maximum number of vehicles held.',
  loan: "If 'Yes' is selected for 'Customer Loan Cover Required' in Cover Required step, at least one vehicle must be designated as a customer loan vehicle",
} as const;
// MTS-08-R11: equality for Add is intentionally different from Continue's greater-than.
export function vehicleAddBlocked(raw: RawForm) {
  const capacity = raw.businessNumberOfVehicleCapacity;
  return capacity === 0 || (raw.vehicles?.length === capacity && capacity !== 0);
}
export function vehicleContinueGate(raw: RawForm): 'loan' | 'capacity' | 'normalize' | 'continue' {
  if (raw.requireCustomerLoanCover && !raw.vehicles?.some((row) => row.isCustomerLoan))
    return 'loan';
  if (raw.vehicles && raw.vehicles.length > (raw.businessNumberOfVehicleCapacity as number))
    return 'capacity';
  return raw.vehicles ? 'continue' : 'normalize';
}
export function vehicleDetailBack(raw: RawForm, navigateList: unknown) {
  return navigateList || !raw.vehicles?.length
    ? { step: 7 as const, state: undefined }
    : { step: 8 as const, state: { showVehicles: true } };
}
export function deleteVehicle(raw: RawForm, index: number, pageCount: number, page: number) {
  return {
    activePage: pageCount === 1 ? page - 1 : page,
    vehicles: raw.vehicles?.length === 1 ? [] : raw.vehicles?.toSpliced(index, 1),
    notification: false,
  };
}
export function vehicleSubmitProjection(data: RawVehicle) {
  return Object.fromEntries(
    Object.entries(data).filter(
      ([key]) =>
        ![
          'customAbiError',
          'customGvwError',
          'customModificationError',
          'chosenVehicleType',
        ].includes(key),
    ),
  ) as RawVehicle;
}
export interface VehicleWorkflowPorts {
  save: (data: Partial<RawForm>) => void;
  loading: (on: boolean) => void;
  scroll: () => void;
  route: (state: RouteState) => void;
  validate: (vehicle: RawVehicle, index: number, raw: RawForm) => Promise<unknown>;
  delay: (ms: number) => Promise<void>;
}
// MTS-08-R06: later validation uses the existing raw closure and a distinct 500ms blank view.
export async function saveVehicleDetail(
  data: RawVehicle,
  raw: RawForm,
  index: number,
  ports: VehicleWorkflowPorts,
) {
  const cleaned = vehicleSubmitProjection(data);
  const existing = raw.vehicles?.[index];
  ports.save({
    vehicles: existing
      ? raw.vehicles!.map((row, i) => (i === index ? cleaned : row))
      : [...(raw.vehicles || []), cleaned],
  });
  if (!existing || index === raw.vehicles!.length - 1) {
    ports.route({ showVehicles: true });
    return;
  }
  ports.loading(true);
  for (let i = index + 1; i < raw.vehicles!.length; i++)
    try {
      await ports.validate(raw.vehicles![i], i, raw);
    } catch {
      ports.scroll();
      ports.loading(false);
      ports.route({ vehicleLoading: true });
      await ports.delay(500);
      ports.route({ editingVehicle: i, editing: true, navigateList: true });
      return;
    }
  ports.scroll();
  ports.loading(false);
  ports.route({ showVehicles: true });
}
// MTS-09-R16–20: undefined resolver is an owned branch, not a default full schema.
export function specifiedResolverBranch(specified: unknown, raw: RawForm) {
  return specified ? 'full' : raw.specifiedVehicles?.length ? 'undefined' : 'lean';
}
export function specifiedDefaults(raw: RawForm) {
  return {
    ...(raw.specifiedVehicles?.[0] || {}),
    ...(raw.specifiedVehicles ? { addSpecifiedVehicle: raw.specifiedVehicles.length > 0 } : {}),
    modifications: raw.specifiedVehicles?.[0]?.modifications || [],
  };
}
export function specifiedSubmitProjection(data: RawVehicle & { addSpecifiedVehicle?: unknown }) {
  if (!data.addSpecifiedVehicle) return { addSpecifiedVehicle: false, specifiedVehicles: [] };
  const clean = vehicleSubmitProjection(data);
  delete clean.addSpecifiedVehicle;
  return { addSpecifiedVehicle: true, specifiedVehicles: [clean] };
}
