import type { StoragePort } from './session';
import { cleanSession } from './entry';
export type CleanCategory =
  'brokerGuid' | 'brokerDetail' | 'isBackoffice' | 'clientId' | 'existingTradePlates';
export interface CleanInputs {
  resetStates: Record<CleanCategory, Record<string, unknown>>;
  consumeAuthentication: () => Promise<{ key: 'authBroker' | 'authBO'; value: string }>;
  failureDestination?: string;
}
export function cleanDestination(path: string) {
  return path.replace('/broker/clean/', '/broker/').replace('/back-office/clean/', '/back-office/');
}
export async function runClean(
  path: string,
  storage: StoragePort,
  resetForm: () => void,
  inputs: CleanInputs | undefined,
  ports: { navigate: (path: string) => void; exit: (path: string) => void },
) {
  const reset = (name: CleanCategory) => {
    if (inputs)
      storage.setItem(name, JSON.stringify({ state: inputs.resetStates[name], version: 0 }));
  };
  cleanSession(storage, {
    guid: () => reset('brokerGuid'),
    form: resetForm,
    broker: () => reset('brokerDetail'),
    backoffice: () => reset('isBackoffice'),
    client: () => reset('clientId'),
    existingTradePlates: () => reset('existingTradePlates'),
  });
  if (!inputs) return;
  try {
    const auth = await inputs.consumeAuthentication();
    storage.setItem(auth.key, auth.value);
    ports.navigate(cleanDestination(path));
  } catch {
    if (inputs.failureDestination) ports.exit(inputs.failureDestination);
  }
}
