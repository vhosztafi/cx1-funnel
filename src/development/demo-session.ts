import { initialFormState, type StoragePort } from '@/domain/session';
import type { RawForm, Step } from '@/domain/types';
import { stepKey } from '@/domain/navigation';

// Clear only journey-owned data. Leave the site access cookie, host identity,
// unrelated application storage and bundled options untouched.
export function replaceDemoJourney(storage: StoragePort, data: RawForm = {}, step: Step = 1) {
  for (const key of [
    'motorTradeFormStore',
    'brokerGuid',
    'brokerDetail',
    'clientId',
    'isBackoffice',
    'abiDetail',
    'gvwDetail',
    'existingTradePlates',
  ])
    storage.removeItem(key);
  storage.setItem(
    'motorTradeFormStore',
    JSON.stringify({
      state: { ...initialFormState(), formData: data, step, stepAsEnum: stepKey(step) },
      version: 0,
    }),
  );
}
