'use client';
import {useState,type ReactNode} from 'react';
import {FormError,Loader} from './controls';

export interface AddressChoice {key:string;text:string;}
export interface AddressField {path:string;label:string;}
export interface AddressPorts {
  /** Local injected lookup outputs. No transport implementation is included. */
  lookup:(postcode:string)=>Promise<readonly AddressChoice[]>;
  select:(choice:AddressChoice)=>Promise<Record<string,unknown>>;
  formatPostcode:(normalized:string)=>string;
  delay:(ms:number)=>Promise<void>;
}
interface Props {
  variant:'proposer'|'premise'|'driver';postcodePath:string;showAddressPath:string;
  label:string;fields:readonly AddressField[];values:Record<string,unknown>;defaults:Record<string,unknown>;
  setValue:(path:string,value:unknown)=>void;errors?:Record<string,string|undefined>;
  setError:(path:string,message:string)=>void;clearError:(path:string)=>void;trigger:(path:string)=>void;
  ports:AddressPorts;disabled?:boolean;animation?:ReactNode;
}
// CTL-MT-17/18/19: callers supply exact paths and copy; runtime address text is not invented.
export function AddressControl(p:Props) {
  const [manual,setManual]=useState(()=>p.variant==='proposer'?!!p.defaults[p.postcodePath]:p.variant==='premise'?!!p.defaults[p.showAddressPath]:Object.keys(p.defaults).length>0);
  const [results,setResults]=useState<readonly AddressChoice[]>([]);
  const [loading,setLoading]=useState(false);
  const disabled=p.variant==='proposer'?p.disabled:undefined;
  const postcode=String(p.values[p.postcodePath]||'');
  async function lookup() {
    if(!postcode){p.trigger(p.postcodePath);return;}
    if(p.variant==='driver'){p.clearError(p.postcodePath);p.setValue(p.showAddressPath,false);}
    setLoading(true);
    try {const rows=await p.ports.lookup(postcode);p.clearError(p.postcodePath);setManual(false);setResults(rows);}
    catch {p.setError(p.postcodePath,'Address not found');}
    finally {setLoading(false);}
  }
  async function select(choice:AddressChoice) {
    const result=await p.ports.select(choice);setResults([]);await p.ports.delay(10);
    p.fields.forEach(field=>p.setValue(field.path,result[field.path]));p.setValue(p.showAddressPath,true);setManual(true);p.fields.forEach(field=>p.trigger(field.path));
  }
  return <div className="position-relative mb-4"><label htmlFor="">{p.label}</label><div className="input-group"><input type="text" value={postcode} maxLength={10} disabled={disabled} className="form-control" onChange={e=>p.setValue(p.postcodePath,p.ports.formatPostcode(e.currentTarget.value.toUpperCase().replace(/[^A-Z0-9]/g,'')))}/><button type="button" className="btn btn-primary" disabled={disabled} onClick={()=>void lookup()}>Lookup</button></div><FormError message={p.errors?.[p.postcodePath]}/>{!manual&&<a onClick={()=>{setManual(true);p.setValue(p.showAddressPath,true);}}>Enter manually</a>}{results.length>0&&<ul>{results.map(row=><li key={row.key} onClick={()=>void select(row)}>{row.text}</li>)}</ul>}{manual&&p.fields.map(field=><div className="mb-4" key={field.path}><label htmlFor="">{field.label}</label><input type="text" className="form-control" value={String(p.values[field.path]||'')} disabled={disabled} onChange={e=>p.setValue(field.path,e.currentTarget.value)}/><FormError message={p.errors?.[field.path]}/></div>)}{loading&&<div className="lookup-overlay"><Loader size={p.variant==='driver'?100:150} animation={p.animation}/></div>}</div>;
}
