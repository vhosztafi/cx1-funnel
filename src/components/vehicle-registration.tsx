'use client';
import {useState,type ReactNode} from 'react';
import type {RawVehicle} from '@/domain/types';
import {vehicleLookupProjection} from '@/domain/vehicle-rules';
import {FormError,Loader,type Field} from './controls';
export interface VehicleLookupResult {values:RawVehicle;chosenVehicleType?:unknown;}
export interface VehicleRegistrationProps {
  field:Field;label:string;error?:string;specified?:boolean;defaultRegistration?:string;
  ordinary?:readonly RawVehicle[]|null;specifiedRows?:readonly RawVehicle[]|null;
  consume:(registration:string)=>Promise<VehicleLookupResult>;
  /** Confirmed metadata tests are supplied by the owning vehicle surface. */
  eligibility:(result:VehicleLookupResult)=>'Registration plate is outside of criteria.'|'Motorcycle type is not allowed.'|undefined;
  trigger:()=>void;setError:(message:string)=>void;clearErrors:()=>void;
  reset:(values?:Record<string,unknown>)=>void;setValue:(name:string,value:unknown)=>void;
  populated:(result:VehicleLookupResult)=>void;setManual:(value:boolean)=>void;
  failed?:()=>void;
  animation?:ReactNode;
}
// CTL-MT-20 / MTS-08-Q01 / MTS-09-Q02
export function VehicleRegistration(p:VehicleRegistrationProps) {
  const [loading,setLoading]=useState(false);
  async function search() {
    const registration=String(p.field.value||'');
    if(!registration){p.trigger();return;}
    const compact=(value?:string)=>value?.replace(/ /g,'');
    const duplicate=[...(p.ordinary||[]),...(p.specifiedRows||[])].some(v=>compact(v.regNumber)===compact(registration))&&compact(p.defaultRegistration)!==compact(registration);
    if(duplicate){p.setError('Reg number has been previously entered.');return;}
    setLoading(true);
    try {
      const result=await p.consume(registration);
      const failure=p.eligibility(result);if(failure){p.setError(failure);return;}
      p.clearErrors();p.setValue('isManualEntry',false);
      const values=vehicleLookupProjection(result.values,registration);
      Object.entries(values).forEach(([key,value])=>p.setValue(key,value));
      p.setManual(false);p.populated({...result,values});
    } catch {
      if(p.specified)p.reset({addSpecifiedVehicle:true,modifications:[]});else p.reset();
      p.failed?.();
      p.setError('Vehicle Not Found, if you believe this is incorrect, please contact your broker so this update can be completed');
    } finally {setLoading(false);}
  }
  return <div className="position-relative mb-4"><label htmlFor={p.field.name}>{p.label}</label><div className="input-group"><input type="text" name={p.field.name} value={String(p.field.value||'')} className="form-control" onChange={e=>p.field.onChange(e.currentTarget.value.toUpperCase().replace(/[^A-Z0-9 ]/g,''))}/><button type="button" className="btn btn-primary" onClick={()=>void search()}>Search</button></div><a onClick={()=>{p.setManual(true);p.setValue('isManualEntry',true);}}>Enter manually</a><FormError message={p.error}/>{loading&&<div className="lookup-overlay"><Loader animation={p.animation}/></div>}</div>;
}
