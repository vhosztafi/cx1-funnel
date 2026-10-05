'use client';
import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
  type ComponentType,
} from 'react';
import type { FormSession } from '@/domain/session';
import type { StoragePort } from '@/domain/session';
import type { CleanInputs } from '@/domain/clean';
import type { Options, RuntimeLimits } from '@/domain/options';
import type { PopulationPorts } from '@/domain/entry';
import type { RawForm, Step } from '@/domain/types';
import type { DriverErrorInputs } from '@/domain/driver-rules';
import type { TerminalBranch, prepareTerminal } from '@/domain/terminal';
import type { AddressPorts } from '@/components/address-control';
import type { VehicleRegistrationProps } from '@/components/vehicle-registration';
import type { LookupCardFormatter } from '@/domain/vehicle-card';
export interface HostInputs {
  contextStorage?: StoragePort;
  mode?: string;
  clean?: CleanInputs;
  debug?: {
    applyMotorTrade?: (step: unknown, alternate: boolean) => void;
    brokerArea?: unknown;
    backofficeArea?: unknown;
  };
  logo?: string;
  loadingAnimation?: ReactNode;
  limits?: RuntimeLimits;
  consumeOptions?: () => Promise<{ data: Options }>;
  consumePopulation?: PopulationPorts['consume'];
  brokerDashboard?: string;
  backofficeDashboard?: string;
  brokerRibbon?: ReactNode;
  backofficeRibbon?: ReactNode;
  driverErrors?: DriverErrorInputs;
  driverInstructionBody?: ReactNode;
  driverPrompts?: Partial<
    Record<'MTS-06-Q59' | 'MTS-06-Q61' | 'MTS-06-Q62', (values: Record<string, unknown>) => string>
  >;
  consumeDriverValidation?: (argument: {
    data: Record<string, unknown>;
  }) => Promise<{ data: { valid: unknown; errorMessages: string[] } }>;
  address?: AddressPorts;
  postcodePattern?: RegExp;
  textNumberPattern?: RegExp;
  now?: () => Date;
  tradePlateAddLabel?: string;
  existingTradePlates?: unknown;
  consumeVehicleLookup?: VehicleRegistrationProps['consume'];
  vehicleLookupEligibility?: VehicleRegistrationProps['eligibility'];
  lookupCardFormatter?: LookupCardFormatter;
  terminalBranch?: TerminalBranch;
  terminalPort?: { prepared?: ReturnType<typeof prepareTerminal> };
  submitDemoQuote?: (raw: RawForm, options: Options, startTime: unknown) => Promise<string>;
}
export interface Runtime {
  /** Development-only auth/option cache; never persisted as real credentials. */
  previewStorage?: StoragePort;
  form: FormSession;
  options: Options;
  host: HostInputs;
  loading: boolean;
  setLoading: (value: boolean) => void;
  surfaces: Partial<Record<Step, ComponentType>>;
}
export const RuntimeContext = createContext<Runtime | null>(null);
export function useRuntime() {
  const value = useContext(RuntimeContext);
  if (!value) throw new Error('Runtime provider missing');
  return value;
}
export function useFormSnapshot() {
  const { form } = useRuntime();
  return useSyncExternalStore(form.subscribe, form.getSnapshot, form.getSnapshot);
}
