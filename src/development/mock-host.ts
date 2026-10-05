import { createMockAddressService } from './mock-address';
import { consumeUatOptions } from './uat-options';
import type { StoragePort } from '@/domain/session';
import type { HostInputs } from '@/runtime/context';

export function createMockHost(): { host: HostInputs; previewStorage: StoragePort } {
  // Neither the mock identity nor the UAT option cache touches sessionStorage.
  const memory = new Map<string, string>([['authBroker', 'MOCK DEVELOPMENT IDENTITY']]);
  const previewStorage: StoragePort = {
    getItem: (key) => memory.get(key) ?? null,
    setItem: (key, value) => {
      memory.set(key, value);
    },
    removeItem: (key) => {
      memory.delete(key);
    },
    clear: () => memory.clear(),
  };
  return {
    previewStorage,
    host: {
      consumeOptions: consumeUatOptions,
      consumePopulation: async () => ({}),
      consumeDriverValidation: async () => ({ data: { valid: true, errorMessages: [] } }),
      // Vehicle lookup remains a local failure with manual entry.
      consumeVehicleLookup: async () => {
        throw new Error('Mock preview: use manual vehicle entry');
      },
      address: createMockAddressService(),
      limits: { pageSize: 10, driverLimit: 5 },
      brokerDashboard: '/',
      backofficeDashboard: '/',
      tradePlateAddLabel: 'Add trade plate',
      terminalBranch: { kind: 'ordinary' },
      terminalPort: {},
    },
  };
}
