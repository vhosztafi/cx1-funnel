'use client';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AutoComplete } from './controls';
import { useRuntime } from '@/runtime/context';
import { debugDefinition as definition, debugClear, debugSet } from '@/domain/debug';
export function DebugPanel() {
  const { host } = useRuntime();
  if (host.mode !== 'dev') return null;
  return <MountedDebug />;
}
function MountedDebug() {
  const { host } = useRuntime();
  const { pathname } = useLocation();
  const [step, setStep] = useState<unknown>(() => localStorage.getItem('selectedStep') || '1');
  const [alternate, setAlternate] = useState(() => localStorage.getItem('useMT2') === 'true');
  const reload = () => window.location.reload();
  return (
    <div className="debug p-3 border rounded bg-light">
      <h3>{definition.heading}</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          debugSet(step, pathname, {
            persist: (value) => localStorage.setItem('selectedStep', String(value)),
            motorTrade: () => host.debug?.applyMotorTrade?.(step, alternate),
            reload,
          });
        }}
      >
        <AutoComplete
          field={{ name: 'stepSelect', value: step, onChange: setStep }}
          label="Step"
          options={definition.steps}
        />
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={alternate}
            onChange={(event) => {
              setAlternate(event.currentTarget.checked);
              localStorage.setItem('useMT2', String(event.currentTarget.checked));
            }}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Set
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => debugClear(sessionStorage, localStorage, reload)}
        >
          Clear
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            if (host.debug?.brokerArea) debugClear(sessionStorage, localStorage, () => {});
            if (host.brokerDashboard) window.location.href = host.brokerDashboard;
          }}
        >
          Broker
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            if (host.debug?.backofficeArea) debugClear(sessionStorage, localStorage, () => {});
            if (host.backofficeDashboard) window.location.href = host.backofficeDashboard;
          }}
        >
          Back Office
        </button>
      </form>
    </div>
  );
}
