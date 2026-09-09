import {describe,it,expect,vi} from 'vitest';
import {populate,authPresenceGuard,cleanSession,returnToDashboard,type EntryContext,type PopulationPorts} from '@/domain/entry';
import {hydrateOptions} from '@/domain/option-cache';
import type {StoragePort} from '@/domain/session';
function memory(initial:Record<string,string>={}):StoragePort {const values=new Map(Object.entries(initial));return {getItem:k=>values.get(k)??null,setItem:(k,v)=>{values.set(k,v);},removeItem:k=>{values.delete(k);},clear:()=>values.clear()};}
function ports(fail=false) { const calls:unknown[][]=[];const p:PopulationPorts={setClient:v=>calls.push(['client',v]),setBroker:(a,b)=>calls.push(['broker',a,b]),setBackoffice:v=>calls.push(['backoffice',v]),setGuid:v=>calls.push(['guid',v]),setData:v=>calls.push(['data',v]),consume:async(branch,id)=>{calls.push(['consume',branch,id]);if(fail)throw new Error('synthetic failure');return {synthetic:true};},navigate:(href,state)=>calls.push(['navigate',href,state])};return {p,calls}; }
describe('entry source order and retention',()=>{
  const examples:[string,EntryContext,string|undefined,number][]=[['EDGE-ENTRY-NEW',{referrer:''},undefined,0],['EDGE-ENTRY-CLONE',{clientId:'synthetic-client',guid:'synthetic-guid',referrer:''},'clone',0],['EDGE-ENTRY-CLIENT',{clientId:'synthetic-client',referrer:''},'client',0],['EDGE-ENTRY-GUID-BO',{guid:'synthetic-guid',referrer:'https://synthetic.test/back-office/'},'guid-backoffice',1],['EDGE-ENTRY-GUID-NON-BO',{guid:'synthetic-guid',referrer:''},'guid',2]];
  it.each(examples)('%s writes context before branching',async(_,context,branch,guidCount)=>{
    const {p,calls}=ports();await populate(context,'motortrade-roadrisks-rtl',p);
    expect(calls.slice(0,3)).toEqual([['client',context.clientId],['broker',undefined,undefined],['backoffice',context.referrer.includes('/back-office/')]]);
    expect(calls.filter(c=>c[0]==='guid')).toHaveLength(guidCount);
    expect(calls.filter(c=>c[0]==='consume').map(c=>c[1])).toEqual(branch?[branch]:[]);
    expect(calls.at(-1)).toEqual(['navigate','/motortrade-roadrisks-rtl/steps/step1',{from:'motorTrade'}]);
    if(branch==='guid')expect(calls[3]).toEqual(['guid','synthetic-guid']);
  });
  it.each([false,true])('failure retains only non-backoffice prewrite (backoffice=%s)',async(backoffice)=>{
    const {p,calls}=ports(true);await expect(populate({guid:'synthetic',referrer:backoffice?'/back-office/':''},'motortrade-roadrisks',p)).rejects.toThrow('synthetic failure');
    expect(calls.filter(c=>c[0]==='data')).toEqual([]);expect(calls.filter(c=>c[0]==='guid')).toHaveLength(backoffice?0:1);expect(calls.at(-1)?.[0]).toBe('navigate');
  });
  it('EDGE-GUARD-AUTH checks presence only and starts loading before exit',()=>{
    const calls:string[]=[];const storage=memory();expect(authPresenceGuard(storage,()=>calls.push('loading'),()=>calls.push('dashboard'))).toBe(false);expect(calls).toEqual(['loading','dashboard']);
    storage.setItem('authBO','synthetic-unverified-content');expect(authPresenceGuard(storage,vi.fn(),vi.fn())).toBe(true);
  });
  it('clean reset retains options and validators; dashboard clears all categories',()=>{
    const storage=memory({authBO:'x',authBroker:'y',abiDetail:'a',gvwDetail:'g',motorTradeOptions:'o',unrelated:'u'});const calls:string[]=[];
    cleanSession(storage,{guid:()=>calls.push('guid'),form:()=>calls.push('form'),broker:()=>calls.push('broker'),backoffice:()=>calls.push('backoffice'),client:()=>calls.push('client'),existingTradePlates:()=>calls.push('plates')});
    expect(calls).toEqual(['guid','form','broker','backoffice','client','plates']);expect(storage.getItem('authBO')).toBeNull();expect(storage.getItem('abiDetail')).toBe('a');expect(storage.getItem('gvwDetail')).toBe('g');expect(storage.getItem('motorTradeOptions')).toBe('o');
    returnToDashboard(storage);expect(storage.getItem('unrelated')).toBeNull();expect(storage.getItem('motorTradeOptions')).toBeNull();
  });
});
describe('SHR-MT-R01 raw options cache',()=>{
  function setup(storage=memory()) {return {storage,merge:vi.fn(),setLoading:vi.fn(),setFetching:vi.fn(),markFetched:vi.fn(),delay:vi.fn(async()=>{}),consume:vi.fn(async()=>({data:{driverPlans:[{text:'SYNTHETIC',value:999}]}}))};}
  it('hydrates cached JSON without fetching or validating its shape',async()=>{
    const p=setup(memory({motorTradeOptions:'{"arbitrary":"retained"}'}));await hydrateOptions('/motortrade-roadrisks/steps/step1',false,p);expect(p.merge).toHaveBeenCalledWith({arbitrary:'retained'});expect(p.consume).not.toHaveBeenCalled();expect(p.markFetched).toHaveBeenCalledOnce();
  });
  it('waits 300ms, consumes data, stores raw JSON then clears loading',async()=>{
    const p=setup();await hydrateOptions('/motortrade-roadrisks',false,p);expect(p.delay).toHaveBeenCalledWith(300);expect(p.consume).toHaveBeenCalledOnce();expect(p.storage.getItem('motorTradeOptions')).toBe('{"driverPlans":[{"text":"SYNTHETIC","value":999}]}');expect(p.setLoading.mock.calls).toEqual([[true],[false]]);
  });
  it('failure clears loading without manufactured data or error copy',async()=>{
    const p=setup();p.consume.mockRejectedValueOnce(new Error('synthetic failure'));await expect(hydrateOptions('/motortrade-roadrisks',false,p)).rejects.toThrow('synthetic failure');expect(p.merge).not.toHaveBeenCalled();expect(p.setFetching.mock.calls).toEqual([[true],[false]]);expect(p.markFetched).not.toHaveBeenCalled();
  });
});
