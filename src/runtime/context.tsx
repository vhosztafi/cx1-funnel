'use client';
import {createContext,useContext,useSyncExternalStore,type ReactNode,type ComponentType} from 'react';
import type {FormSession} from '@/domain/session';
import type {Options,RuntimeLimits} from '@/domain/options';
import type {PopulationPorts} from '@/domain/entry';
import type {Step} from '@/domain/types';
export interface HostInputs {
  mode?:string;logo?:string;loadingAnimation?:ReactNode;limits?:RuntimeLimits;
  consumeOptions?:()=>Promise<{data:Options}>;consumePopulation?:PopulationPorts['consume'];
  brokerDashboard?:string;backofficeDashboard?:string;
  brokerRibbon?:ReactNode;backofficeRibbon?:ReactNode;
}
export interface Runtime {
  form:FormSession;options:Options;host:HostInputs;loading:boolean;setLoading:(value:boolean)=>void;
  surfaces:Partial<Record<Step,ComponentType>>;
}
export const RuntimeContext=createContext<Runtime|null>(null);
export function useRuntime(){const value=useContext(RuntimeContext);if(!value)throw new Error('Runtime provider missing');return value;}
export function useFormSnapshot(){const {form}=useRuntime();return useSyncExternalStore(form.subscribe,form.getSnapshot,form.getSnapshot);}
