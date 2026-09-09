import { driverDetailSchema } from '@/domain/driver-schema';
import { validatorProjection, type DriverWorkflowPorts } from '@/domain/driver-workflow';
import type { useJourney } from './use-journey';
import type { RawForm } from '@/domain/types';
export function setDriverValidators(raw: RawForm, journey: ReturnType<typeof useJourney>) {
  // MTS-06-R16: reset both persisted stores before writing either projection.
  sessionStorage.setItem('abiDetail', JSON.stringify({ state: {}, version: 0 }));
  sessionStorage.setItem('gvwDetail', JSON.stringify({ state: {}, version: 0 }));
  const projection = validatorProjection(raw, journey.options);
  sessionStorage.setItem('abiDetail', JSON.stringify({ state: projection.abi, version: 0 }));
  sessionStorage.setItem('gvwDetail', JSON.stringify({ state: projection.gvw, version: 0 }));
}
export function driverPorts(
  journey: ReturnType<typeof useJourney>,
  plan = false,
): DriverWorkflowPorts {
  return {
    save: journey.form.setData,
    loading: journey.setLoading,
    scroll: () => window.scrollTo(0, 0),
    route: (state) => journey.internal(state),
    next: () => journey.next(6),
    setValidators: (raw) => setDriverValidators(raw, journey),
    validate: (driver, raw) =>
      driverDetailSchema({
        raw,
        options: journey.options,
        postcodePattern: journey.host.postcodePattern,
        messages: journey.host.driverErrors,
        now: journey.host.now?.() ?? new Date(),
        planRevalidation: plan,
      }).validate(driver),
    delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    uuid: () => crypto.randomUUID(),
  };
}
