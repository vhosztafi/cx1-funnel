import type { RawForm, Step, StepKey } from './types';
import { stepKey } from './navigation';

export interface FormState { formData:RawForm;step:Step;stepAsEnum:StepKey;stepPath:StepKey[]; }
export interface StoragePort {getItem:(key:string)=>string|null;setItem:(key:string,value:string)=>void;removeItem:(key:string)=>void;clear:()=>void;}
export function initialFormState(): FormState { return {formData:{},step:1,stepAsEnum:'step1',stepPath:[]}; }
export function mergeData(state: FormState, data: Partial<RawForm>): FormState { return {...state,formData:{...state.formData,...data}}; }
export function setStep(state: FormState, step: Step): FormState {
  const key=stepKey(step);
  return {...state,step,stepAsEnum:key,stepPath:state.stepPath.includes(key)?state.stepPath:[...state.stepPath,key]};
}
export function resetForm(state: FormState): FormState { return {...state,formData:{},step:1,stepAsEnum:'step1'}; }
export function createSession(storage?:StoragePort) {
  const persisted = storage?.getItem('motorTradeFormStore');
  let current = persisted ? {...initialFormState(),...JSON.parse(persisted).state} as FormState : initialFormState();
  const listeners = new Set<()=>void>();
  function publish(next:FormState) {
    current=next;
    storage?.setItem('motorTradeFormStore',JSON.stringify({state:current,version:0}));
    listeners.forEach(listener=>listener());
  }
  return {
    getSnapshot:()=>current,
    subscribe:(listener:()=>void)=>{listeners.add(listener);return()=>{listeners.delete(listener);};},
    setData:(data:Partial<RawForm>)=>publish(mergeData(current,data)),
    setStep:(step:Step)=>publish(setStep(current,step)),
    reset:()=>publish(resetForm(current)),
  };
}
export type FormSession = ReturnType<typeof createSession>;
