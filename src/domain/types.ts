/** Raw inputs deliberately admit numeric-looking strings: SHR-MT-R04. */
export type Id = number | string;
export type NullableId = Id | null;
export type DateValue = string | Date | null;
export interface RawAddress {
  [key: string]: unknown;
  showAddress?: boolean;
}
export interface RawDriver extends RawAddress {
  guid?: string;
  firstName?: string;
  surname?: string;
  dateOfBirth?: DateValue;
  relationshipPolicyholderID?: NullableId;
  usageID?: NullableId;
  coverPersonalVehicle?: boolean | null;
  maxABIGroupID?: NullableId;
  gvwLimitID?: NullableId;
  licenceTypeID?: NullableId;
  licenceHeldYearsID?: NullableId;
}
export interface RawVehicle {
  [key: string]: unknown;
  regNumber?: string;
  make?: string;
  model?: string;
  ownerTypeID?: NullableId;
  ownerGuid?: string | null;
  vehicleTypeID?: NullableId;
  vehicleModifications?: { modificationId?: NullableId }[] | null;
  modifications?: { modificationID?: NullableId }[] | null;
}
export interface RawForm {
  [key: string]: unknown;
  proposerPolicyStartDate?: DateValue;
  proposerPolicyStartTime?: string | null;
  minPolicyStartDate?: DateValue;
  isMta?: boolean;
  isShortTerm?: boolean | null;
  coverLevelID?: NullableId;
  coverIndemnityLimitOwnVehiclesID?: NullableId;
  coverIndemnityLimitCustomerVehiclesID?: NullableId;
  driverPlanId?: NullableId;
  drivers?: RawDriver[] | null;
  vehicles?: RawVehicle[] | null;
  specifiedVehicles?: RawVehicle[] | null;
  addSpecifiedVehicle?: boolean | null;
  tradingPremises?: RawAddress[] | null;
  tradePlateNumbers?: { plateNumber?: string }[] | null;
  occupations?: { occupationId?: NullableId; percentage?: number | string | null }[] | null;
}
export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export type StepKey = `step${Step}`;
export interface RouteState {
  from?: string;
  editing?: boolean;
  editDriver?: number | null;
  showCards?: boolean;
  driverLoading?: boolean;
  vehicleLoading?: boolean;
  showVehicles?: boolean;
  editingVehicle?: number;
  navigateList?: boolean;
}
