'use client';
import { useState } from 'react';
import { useRuntime } from '@/runtime/context';
import { replaceDemoJourney } from './demo-session';
import styles from './demo-toolbar.module.css';

export function DemoToolbar() {
  const { previewStorage } = useRuntime();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  if (!previewStorage) return null;
  async function load(step: 1 | 14) {
    setBusy(true);
    setError('');
    try {
      const [{ createDemoSample }, { consumeUatOptions }] = await Promise.all([
        import('./demo-sample'),
        import('./uat-options'),
      ]);
      const { data } = await consumeUatOptions();
      const sample = createDemoSample(data);
      replaceDemoJourney(sessionStorage, sample, step);
      // Reload the browser-owned journey to discard mounted form/terminal state.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign(`/motortrade-roadrisks/steps/step${step}`);
    } catch {
      setError('Could not load the sample. Please try again.');
      setBusy(false);
    }
  }
  function restart() {
    setBusy(true);
    try {
      replaceDemoJourney(sessionStorage);
      // Reload the browser-owned journey to discard mounted form/terminal state.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign('/motortrade-roadrisks/steps/step1');
    } catch {
      setError('Could not restart. Please allow browser session storage and try again.');
      setBusy(false);
    }
  }
  return (
    <details className={styles.toolbar}>
      <summary>
        Demo tools <span>Sample data & restart</span>
      </summary>
      <div className={styles.body}>
        <p>
          Fictional sample: sole trader, trading from home, comprehensive cover and any driver.
          Loading a sample replaces all current answers, including declarations. Nothing is
          submitted.
        </p>
        <div className={styles.actions}>
          <button type="button" disabled={busy} onClick={() => void load(1)}>
            Load sample journey
          </button>
          <button type="button" disabled={busy} onClick={() => void load(14)}>
            Load sample at Summary
          </button>
          <button type="button" disabled={busy} className={styles.restart} onClick={restart}>
            Clear & restart
          </button>
        </div>
        <small>
          Restart clears the journey and returns to step 1. Your site login stays active.
        </small>
        {busy && <p role="status">Preparing demo…</p>}
        {error && <p role="alert">{error}</p>}
      </div>
    </details>
  );
}
