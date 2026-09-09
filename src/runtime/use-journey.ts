'use client';
import {useLocation,useNavigate} from 'react-router-dom';
import {executeNavigation,familyForPath,managerMove,stepHref} from '@/domain/navigation';
import {useRuntime,useFormSnapshot} from './context';
import type {Step} from '@/domain/types';
export function useJourney() {
  const {pathname,state:routeState}=useLocation();const navigate=useNavigate();const runtime=useRuntime();const snapshot=useFormSnapshot();
  const family=familyForPath(pathname);
  const ports={scroll:()=>window.scrollTo(0,0),setStep:runtime.form.setStep,navigate:(href:string,state?:unknown)=>navigate(href,{state})};
  return {family,rtl:family.includes('-rtl'),snapshot,...runtime,routeState:routeState as import('@/domain/types').RouteState|undefined,internal:(state:import('@/domain/types').RouteState,step:Step=6)=>navigate(stepHref(family,step),{state}),next:(step:Step)=>executeNavigation(managerMove(step,'next',family,runtime.form.getSnapshot().formData,runtime.options),ports),previous:(step:Step)=>executeNavigation(managerMove(step,'previous',family,runtime.form.getSnapshot().formData,runtime.options),ports),execute:(commands:Parameters<typeof executeNavigation>[0])=>executeNavigation(commands,ports)};
}
