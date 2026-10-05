'use client';
import { useEffect, useSyncExternalStore, type ReactNode } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { currentLocalBackoffice } from './local-backoffice';
import { useRuntime } from '@/runtime/context';

export function useLocalFormDraft<T extends FieldValues>(methods: UseFormReturn<T>, scope: string) {
  useEffect(() => {
    const host = currentLocalBackoffice(); if (!host) return;
    const pending = host.initial.pendingForms?.[scope];
    if (pending) { methods.reset(pending as T); delete host.initial.pendingForms![scope]; }
    const unregister=host.register(scope, () => methods.getValues(),values=>methods.reset(values as T));
    const watch=methods.watch(()=>host.changed());
    return()=>{unregister();watch.unsubscribe();};
  }, [methods, scope]);
}
export function LocalDraftBoundary({children}:{children:ReactNode}){
  const host=currentLocalBackoffice();const state=useSyncExternalStore(host?.subscribe ?? (()=>()=>{}),host?.status ?? (()=>empty),()=>empty);
  return host?<fieldset className="capture-write-boundary" disabled={state.busy||state.pending}>{children}</fieldset>:children;
}
export function LocalDraftControls() {
  const { form } = useRuntime(); const host = currentLocalBackoffice();
  const state = useSyncExternalStore(host?.subscribe ?? (() => () => {}), host?.status ?? (() => empty), () => empty);
  if (!host) return null;
  return <aside className="local-draft-controls" aria-label="Saved back-office draft"><strong>{host.context.reference}</strong> · {host.context.clientName} · {host.context.agencyName}
    <div><button type="button" className="btn btn-primary" disabled={state.busy || state.pending} onClick={() => void host.capture(form).catch(() => {})}>Save draft</button>{state.pending && <button type="button" className="btn btn-outline-primary" disabled={state.busy} onClick={host.retry}>Retry same save</button>}<button type="button" className="btn btn-outline-secondary" disabled={state.busy || state.pending} onClick={host.returnToRecord}>{host.context.captureKind==='mta'?'Return to MTA':'Return to quote'}</button></div>
    {state.message && <p role="status">{state.message}</p>}{state.error && <p role="alert">{state.error}</p>}
  </aside>;
}
const empty = { busy: false, message: '', error: '', pending: false };
