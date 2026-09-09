import {
  AutoComplete,
  LogicMultiSelect,
  MultiSelect,
  RadioList,
  CheckboxArray,
  CheckboxLine,
  CheckboxLineArray,
  FormTextBox,
  FormTextBoxNumber,
  TextFieldCurrency,
  TextFieldPercentage,
  FormSelect,
  FormHourBox,
  DetailCollapser,
  FormError,
} from './controls';
import { DateControl } from './date-control';
import { AddressControl } from './address-control';
import { VehicleRegistration } from './vehicle-registration';

/** CTL owners are independent even when an explicit variant shares a component.
 * Callers retain their own prop types, order, field paths and conditional mounts.
 */
export const controlRegistry = {
  'CTL-MT-01': AutoComplete,
  'CTL-MT-02': LogicMultiSelect,
  'CTL-MT-03': MultiSelect,
  'CTL-MT-04': RadioList,
  'CTL-MT-05': CheckboxArray,
  'CTL-MT-06': CheckboxLine,
  'CTL-MT-07': CheckboxLineArray,
  'CTL-MT-08': FormTextBox,
  'CTL-MT-09': FormTextBoxNumber,
  'CTL-MT-10': TextFieldCurrency,
  'CTL-MT-11': TextFieldPercentage,
  'CTL-MT-12': FormSelect,
  'CTL-MT-13': DateControl,
  'CTL-MT-14': DateControl,
  'CTL-MT-15': FormHourBox,
  'CTL-MT-16': DetailCollapser,
  'CTL-MT-17': AddressControl,
  'CTL-MT-18': AddressControl,
  'CTL-MT-19': AddressControl,
  'CTL-MT-20': VehicleRegistration,
  'CTL-MT-21': FormError,
} as const;
