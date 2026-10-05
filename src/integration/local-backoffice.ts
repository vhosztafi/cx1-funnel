import type { HostInputs } from '@/runtime/context';
import type { FormSession, FormState, StoragePort } from '@/domain/session';
import type { RawForm } from '@/domain/types';
import { consumeUatOptions } from '@/development/uat-options';

export interface LocalDraft { version: 1; formData: RawForm; step: number; pendingForms?: Record<string, Record<string, unknown>>; routeState?: Record<string, unknown> }
interface Context { quoteId: string; revisionId: string; reference: string; clientName: string; agencyName: string; productCode: string;captureLimits:{driverLimit:number;pageSize:number} }
export interface LocalBackoffice {
  context: Context; initial: LocalDraft; storage: StoragePort; host: HostInputs;
  register: (scope: string, read: () => Record<string, unknown>, restore: (values: Record<string, unknown>) => void) => () => void;
  changed: () => void;
  capture: (form: FormSession, complete?: boolean) => Promise<string>;
  retry: () => void; returnToRecord: () => void;
  subscribe: (listener: () => void) => () => void;
  status: () => { busy: boolean; message: string; error: string; pending: boolean };
  bind: (form: FormSession) => void;
}
let connection: LocalBackoffice | undefined;
export const currentLocalBackoffice = () => connection;
const approvedPairs: Record<string, string> = {
  'http://127.0.0.1:3177': 'http://127.0.0.1:3193',
  'https://cx1-dev.gyongyos.co.uk': 'https://cx1-admin-dev.gyongyos.co.uk',
};

export async function connectLocalBackoffice(): Promise<LocalBackoffice | undefined> {
  const query = new URLSearchParams(window.location.search || (window.parent !== window ? sessionStorage.getItem('cx1-backoffice-connection') ?? '' : ''));
  if (query.get('cx1Host') !== 'backoffice') return undefined;
  const nonce = query.get('nonce'); const parentOrigin = query.get('parentOrigin');
  const approvedParent = approvedPairs[window.location.origin];
  if (!approvedParent || parentOrigin !== approvedParent || window.parent === window || !nonce || !/^[0-9a-f-]{36}$/i.test(nonce)) throw new Error('The back-office connection is unavailable.');
  sessionStorage.setItem('cx1-backoffice-connection', query.toString());
  // Exact approved origins only. No credential forwarding or arbitrary return URLs.
  const send = (message: Record<string, unknown>) => window.parent.postMessage({ ...message, nonce }, approvedParent);
  const opened = await new Promise<{ state: LocalDraft; context: Context; pending: boolean }>((resolve, reject) => {
    const timeout = window.setTimeout(() => { window.removeEventListener('message', receive); reject(new Error('The saved quote did not connect.')); }, 30_000);
    function receive(event: MessageEvent) {
      if (event.origin !== approvedParent || event.source !== window.parent || event.data?.nonce !== nonce || event.data?.type !== 'cx1:funnel-open') return;
      const state = event.data.state as LocalDraft; const context = event.data.context as Context;
      if (state?.version !== 1 || !state.formData || typeof state.formData !== 'object' || Array.isArray(state.formData) || !Number.isInteger(state.step) || state.step < 1 || state.step > 14 || !/^[0-9a-f-]{36}$/i.test(context?.quoteId) || !['motor-trade-road-risks', 'motor-trade-combined'].includes(context?.productCode) || !Number.isInteger(context.captureLimits?.driverLimit) || context.captureLimits.driverLimit<1 || context.captureLimits.driverLimit>1000 || !Number.isInteger(context.captureLimits.pageSize) || context.captureLimits.pageSize<1 || context.captureLimits.pageSize>100) return;
      window.clearTimeout(timeout); window.removeEventListener('message', receive); resolve({ state, context, pending:event.data.pending===true });
    }
    window.addEventListener('message', receive); send({ type: 'cx1:funnel-ready' });
  });
  const prefix = `cx1-backoffice:${opened.context.quoteId}:`;
  const storage: StoragePort = { getItem: key => sessionStorage.getItem(prefix + key), setItem: (key, value) => sessionStorage.setItem(prefix + key, value), removeItem: key => sessionStorage.removeItem(prefix + key), clear: () => { for (const key of Object.keys(sessionStorage)) if (key.startsWith(prefix)) sessionStorage.removeItem(key); } };
  const retained=storage.getItem('unsaved');
  if(retained){try{const entry=JSON.parse(retained);if(entry.revisionId===opened.context.revisionId && entry.draft?.version===1 && entry.draft.formData && Number.isInteger(entry.draft.step) && entry.draft.step>=1 && entry.draft.step<=14)opened.state=entry.draft;}catch{/* The saved server revision remains authoritative. */}}
  const initial: FormState = { formData: opened.state.formData, step: opened.state.step as FormState['step'], stepAsEnum: `step${opened.state.step}` as FormState['stepAsEnum'], stepPath: [] };
  storage.setItem('motorTradeFormStore', JSON.stringify({ state: initial, version: 0 }));
  // Legacy ribbon state is presentation only. Backend authorization continues
  // to run on every parent request under its real authenticated session.
  sessionStorage.setItem('isBackoffice', JSON.stringify({ state: { backoffice: true }, version: 0 }));
  window.history.replaceState({ usr: opened.state.routeState, key: 'host', idx: 0 }, '', `/motortrade-roadrisks/steps/step${initial.step}?${query}`);
  const forms = new Map<string, () => Record<string, unknown>>(); const writers = new Map<string,(values:Record<string,unknown>)=>void>(); const listeners = new Set<() => void>();
  let form: FormSession | undefined; let resolveSave: ((url: string) => void) | undefined; let rejectSave: ((error: Error) => void) | undefined;
  let savedIssues:{category:string;path:string;questionId?:string;message:string}[]=[];
  let status = { busy: false, message: opened.pending?'Confirm the pending save before continuing.':'', error: '', pending: opened.pending };
  function publish(next: typeof status) { status = next; for (const listener of listeners) listener(); }
  function changed(){if(!status.busy && !status.pending)send({type:'cx1:funnel-dirty'});}
  function capture(session: FormSession, complete = false): Promise<string> {
    if (status.busy || status.pending) return Promise.reject(new Error('Confirm the pending save before editing again.'));
    const snapshot = session.getSnapshot(); const pendingForms = Object.fromEntries([...forms].map(([scope, read]) => [scope, read()]));
    const root = Object.entries(pendingForms).filter(([scope]) => !['driver-details', 'vehicle-details'].some(nested => scope.startsWith(nested))).map(([, values]) => values);
    const state: LocalDraft = { version: 1, step: snapshot.step, formData: Object.assign({}, snapshot.formData, ...root), pendingForms, routeState: window.history.state?.usr };
    storage.setItem('unsaved', JSON.stringify({revisionId:opened.context.revisionId,draft:state})); publish({ busy: true, message: 'Saving draft…', error: '', pending: false });
    return new Promise((resolve, reject) => { resolveSave = resolve; rejectSave = reject; send({ type: 'cx1:funnel-save', state, complete }); });
  }
  const host: HostInputs = {
    consumeOptions: consumeUatOptions,
    limits:opened.context.captureLimits,
    consumeDriverValidation:async()=>{
      if(!form)throw new Error('The draft has not connected.');await capture(form);
      const errorMessages=savedIssues.filter(issue=>issue.category==='capture' && (issue.path.startsWith('/risk/drivers') || issue.questionId?.startsWith('MTS-06-'))).map(issue=>issue.message);
      return {data:{valid:errorMessages.length===0,errorMessages}};
    },
    consumeVehicleLookup:async()=>{throw new Error('Use manual vehicle entry. Vehicle lookup is not connected.');},
    address:{lookup:async()=>[],select:async()=>{throw new Error('Select a saved address or use manual entry.');},formatPostcode:value=>value.length>3?`${value.slice(0,-3)} ${value.slice(-3)}`:value,delay:ms=>new Promise(resolve=>setTimeout(resolve,ms))},
    // This storage satisfies the inherited presentation guard only. It contains
    // no authentication credentials and cannot authorize a back-office request.
    contextStorage: { getItem: key => key === 'authBO' ? 'local parent context' : storage.getItem(key), setItem: storage.setItem, removeItem: storage.removeItem, clear: storage.clear },
    brokerDashboard: approvedParent, backofficeDashboard: approvedParent, tradePlateAddLabel: 'Add trade plate', terminalBranch: { kind: 'backoffice-new', argumentFields: { quoteId: opened.context.quoteId } }, terminalPort: {},
    submitDemoQuote: async (raw, _options, time) => { if (!form) throw new Error('Capture is not ready.'); form.setData({ ...raw, proposerPolicyStartTime: time as string }); return capture(form, true); },
  };
  connection = { context: opened.context, initial: opened.state, storage, host, register: (scope, read,restore) => { forms.set(scope, read);writers.set(scope,restore); return () => { forms.delete(scope);writers.delete(scope); }; }, changed, capture, retry: () => { if (status.pending) { publish({ ...status, busy: true, error: '', message: 'Confirming saved draft…' }); send({ type: 'cx1:funnel-retry' }); } }, returnToRecord: () => { if (!status.busy && !status.pending && form) void capture(form,true).catch(()=>{}); }, subscribe: listener => { listeners.add(listener); return () => { listeners.delete(listener); }; }, status: () => status, bind: value => { form = value;value.subscribe(changed); } };
  window.addEventListener('message', event => {
    if (event.origin !== approvedParent || event.source !== window.parent || event.data?.nonce !== nonce) return;
    if (event.data.type === 'cx1:funnel-saved' && event.data.url === `${approvedParent}/quotes/${opened.context.quoteId}`) {
      if(typeof event.data.revisionId==='string')opened.context.revisionId=event.data.revisionId;
      if(Array.isArray(event.data.readiness?.issues))savedIssues=event.data.readiness.issues;
      const saved=event.data.state as LocalDraft | undefined;
      if(saved?.version===1 && saved.formData){form?.setData(saved.formData);for(const [scope,restore] of writers){const values=saved.pendingForms?.[scope];if(values)restore(values);}}
      storage.removeItem('unsaved'); publish({ busy: false, message: 'Draft saved.', error: '', pending: false }); resolveSave?.(event.data.url); resolveSave = undefined; rejectSave = undefined;
    }
    if (event.data.type === 'cx1:funnel-error') { const message = typeof event.data.message === 'string' ? event.data.message : 'The draft could not be saved.'; publish({ busy: false, message: '', error: message, pending: event.data.pending === true }); rejectSave?.(new Error(message)); rejectSave = undefined; }
    if (event.data.type === 'cx1:funnel-retry-request') connection?.retry();
    if (event.data.type === 'cx1:funnel-save-return') connection?.returnToRecord();
  });
  return connection;
}
