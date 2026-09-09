import type { RawForm, RouteState } from './types';
import type { StoragePort } from './session';
import { stepHref, type Family } from './navigation';

export interface EntryContext {brokerId?:string;brokerName?:string;clientId?:string;guid?:string;referrer:string;}
export type PopulationBranch = 'clone'|'client'|'guid-backoffice'|'guid';
export interface PopulationPorts {
  setClient:(value:string|undefined)=>void;
  setBroker:(id:string|undefined,name:string|undefined)=>void;
  setBackoffice:(value:boolean)=>void;
  setGuid:(guid:string)=>void;
  setData:(data:RawForm)=>void;
  /** A local source of already-converted values; no transport adapter is supplied. */
  consume:(branch:PopulationBranch,identifier:string)=>Promise<RawForm>;
  navigate:(href:string,state:RouteState)=>void;
}
// EDGE-ENTRY-* / CLR-005. Invocation and source ordering are observable independently.
export async function populate(context:EntryContext,family:Family,ports:PopulationPorts) {
  const backoffice=context.referrer.includes('/back-office/');
  ports.setClient(context.clientId);ports.setBroker(context.brokerId,context.brokerName);ports.setBackoffice(backoffice);
  if(!context.clientId&&!context.guid) {ports.navigate(stepHref(family,1),{from:'motorTrade'});return;}
  const branch:PopulationBranch=context.clientId?(context.guid?'clone':'client'):backoffice?'guid-backoffice':'guid';
  const identifier=context.clientId&&!context.guid?context.clientId:context.guid!;
  if(branch==='guid')ports.setGuid(context.guid!);
  try {
    const data=await ports.consume(branch,identifier);
    if(branch==='guid'||branch==='guid-backoffice')ports.setGuid(context.guid!);
    ports.setData(data);
  } finally {ports.navigate(stepHref(family,1),{from:'motorTrade'});}
}
export function authPresenceGuard(storage:StoragePort,loading:()=>void,dashboard:()=>void) {
  if(!storage.getItem('authBroker')&&!storage.getItem('authBO')) {loading();dashboard();return false;}
  return true;
}
export function cleanSession(storage:StoragePort,resets:{guid:()=>void;form:()=>void;broker:()=>void;backoffice:()=>void;client:()=>void;existingTradePlates:()=>void}) {
  storage.removeItem('authBroker');storage.removeItem('authBO');
  resets.guid();resets.form();resets.broker();resets.backoffice();resets.client();resets.existingTradePlates();
}
export function returnToDashboard(storage:StoragePort) {storage.clear();}
