import {
  normalizeTextarea,
  emitNumber,
  emitCurrency,
  emitPercentage,
  nativeSelectValue,
} from './control-values';
import { newPremise } from './premises';
import { vehicleTypesSubmit } from './vehicle-types';
import { sanitizeMotorTradeVehicles } from './converter';
import { prepareTerminal } from './terminal';

/** Named functions remain code. These JSON-compatible references never evaluate strings. */
export const ruleBindings = {
  version: 1,
  rules: [
    { id: 'normalizeTextarea', owner: 'CTL-MT-08' },
    { id: 'emitNumber', owner: 'CTL-MT-09' },
    { id: 'emitCurrency', owner: 'CTL-MT-10' },
    { id: 'emitPercentage', owner: 'CTL-MT-11' },
    { id: 'nativeSelectValue', owner: 'CTL-MT-12' },
    { id: 'newPremise', owner: 'MTS-02-R01' },
    { id: 'vehicleTypesSubmit', owner: 'MTS-10-R07' },
    { id: 'sanitizeMotorTradeVehicles', owner: 'MTS-14-R05' },
    { id: 'prepareTerminal', owner: 'MTS-14-R02' },
  ],
} as const;
export const ruleRegistry = {
  normalizeTextarea,
  emitNumber,
  emitCurrency,
  emitPercentage,
  nativeSelectValue,
  newPremise,
  vehicleTypesSubmit,
  sanitizeMotorTradeVehicles,
  prepareTerminal,
};
export type RuleId = keyof typeof ruleRegistry;
