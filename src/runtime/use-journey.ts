'use client';
import {useLocation,useNavigate} from 'react-router-dom';
import {executeNavigation,familyForPath,managerMove} from '@/domain/navigation';
import {useRuntime,useFormSnapshot} from './context';
import type {Step} from '@/domain/types';
export function useJourney() {
  const {pathname}=useLocation();const navigate=useNavigate();const runtime=useRuntime();const snapshot=useFormSnapshot();
  const family=familyForPath(pathname);
  const ports={scroll:()=>window.scrollTo(0,0),setStep:runtime.form.setStep,navigate:(href:string,state?:unknown)=>navigate(href,{state})};
  return {family,rtl:family.includes('-rtl'),snapshot,...runtime,next:(step:Step)=>executeNavigation(managerMove(step,'next',family,runtime.form.getSnapshot().formData,runtime.options),ports),previous:(step:Step)=>executeNavigation(managerMove(step,'previous',family,runtime.form.getSnapshot().formData,runtime.options),ports),execute:(commands:Parameters<typeof executeNavigation>[0])=>executeNavigation(commands,ports)};
}
