import type { StoragePort } from './session';
export const debugDefinition = {
  version: 1,
  owners: ['ROOT-008', 'ROOT-009', 'ROOT-010', 'ROOT-011', 'ROOT-012'],
  heading: 'Debug',
  label: 'Step',
  steps: Array.from({ length: 14 }, (_, index) => ({
    value: String(index + 1),
    text: String(index + 1),
  })),
  buttons: ['Set', 'Clear', 'Broker', 'Back Office'],
} as const;
export function debugClear(session: StoragePort, local: StoragePort, reload: () => void) {
  const commercial = session.getItem('commercialCombinedOptions');
  const motor = session.getItem('motorTradeOptions');
  session.clear();
  local.clear();
  if (commercial) session.setItem('commercialCombinedOptions', commercial);
  if (motor) session.setItem('motorTradeOptions', motor);
  reload();
}
export function debugSet(
  step: unknown,
  pathname: string,
  ports: { persist: (step: unknown) => void; motorTrade?: () => void; reload: () => void },
) {
  ports.persist(step);
  if (pathname.includes('motortrade-roadrisks')) ports.motorTrade?.();
  ports.reload();
}
