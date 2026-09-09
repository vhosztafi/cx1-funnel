import { describe,it,expect,vi } from 'vitest';
import { families, familyForPath,stepHref,steps,routeGuard,summaryEdit,progress,internalSurface,managerMove,nextAfterVehicles,previousBeforeCategories,executeNavigation } from '@/domain/navigation';
import { createSession,initialFormState,mergeData,resetForm,setStep } from '@/domain/session';
import { displayedPage,paginationVisible,addDriverDisabled } from '@/domain/options';

describe('route families and explicit effects',()=>{
  it.each(families)('retains %s but drops entry-context prefixes',family=>{
    expect(familyForPath(`/back-office/new-quote/buy/${family}/steps/step4`)).toBe(family);
    for(const step of steps) expect(stepHref(family,step)).toBe(`/${family}/steps/step${step}`);
  });
  it('RT-ALIAS-STEP uses the standard family',()=>expect(familyForPath('/motortrade/buy/step4')).toBe('motortrade-roadrisks'));
  it('CLR-006 preserves both calls without asserting final history',()=>{
    expect(routeGuard('unknown','step5',families[0])).toEqual([{type:'navigate',href:stepHref(families[0],1)},{type:'navigate',href:stepHref(families[0],5)}]);
    expect(routeGuard(undefined,'step5',families[0])).toEqual([{type:'navigate',href:stepHref(families[0],1)}]);
    expect(routeGuard('step5','step5',families[0])).toEqual([]);
    expect(routeGuard('step2','step5',families[0])).toEqual([{type:'navigate',href:stepHref(families[0],5)}]);
  });
  it.each(steps.filter(s=>s!==14))('EDGE-SUM edits %i preserve command order',step=>{
    const commands=summaryEdit(step,families[0]);
    expect(commands[0]).toEqual({type:'navigate',href:stepHref(step===6||step===8?families[0]:families[3],step),state:step===6?{showCards:true}:step===8?{showVehicles:true}:undefined});
    expect(commands[1]).toEqual({type:'setStep',step});
  });
  it('executes manager scroll, state and navigation in order',()=>{
    const calls:string[]=[];
    executeNavigation(managerMove(4,'next',families[0],{},{}),{scroll:()=>calls.push('scroll'),setStep:s=>calls.push(`set:${s}`),navigate:h=>calls.push(h)});
    expect(calls).toEqual(['scroll','set:5',stepHref(families[0],5)]);
  });
  it('MTS-06 and MTS-08 preserve different flag priorities and absent-state views',()=>{
    expect(internalSurface(6)).toBe('MTS-06A'); expect(internalSurface(8)).toBe('MTS-08Ø');
    expect(internalSurface(6,{driverLoading:true,editing:true,showCards:true})).toBe('MTS-06L');
    expect(internalSurface(6,{editing:true,showCards:true})).toBe('MTS-06B');
    expect(internalSurface(8,{vehicleLoading:true,editing:true,showVehicles:true})).toBe('MTS-08L');
    expect(internalSurface(8,{editing:true,showVehicles:true})).toBe('MTS-08B');
  });
});
describe('independent branches and progress',()=>{
  it.each([undefined,null,0,14999,15000,15001])('EDGE-08 and EDGE-10 preserve numeric metadata %s',numericValue=>{
    const options={indemnityOwnVehicles:[{value:901,text:'SYNTHETIC test row',numericValue}]};
    const data={coverLevelID:1,coverIndemnityLimitOwnVehiclesID:901};
    const include=!!numericValue&&numericValue<=15000;
    expect(nextAfterVehicles(data,options)).toBe(include?9:10);
    expect(previousBeforeCategories(data,options)).toBe(include?9:8);
    expect(nextAfterVehicles({...data,coverLevelID:'1'},options)).toBe(10);
    expect(nextAfterVehicles({...data,coverIndemnityLimitOwnVehiclesID:'901'},options)).toBe(10);
    expect(managerMove(10,'previous',families[0],data,options)[2]).toEqual({type:'navigate',href:stepHref(families[0],include?9:8),state:include?undefined:{showVehicles:true}});
  });
  it('header can report 108% and literal 14 counter without consulting metadata',()=>{
    expect(progress(14,{coverLevelID:3,coverIndemnityLimitOwnVehiclesID:6})).toEqual({total:13,percent:108,counter:'Step 14 of 14'});
    expect(progress(8,{coverLevelID:1,coverIndemnityLimitOwnVehiclesID:1}).total).toBe(14);
    expect(progress(10,{coverLevelID:'1',coverIndemnityLimitOwnVehiclesID:1}).total).toBe(14);
    expect(progress(10,{coverLevelID:1,coverIndemnityLimitOwnVehiclesID:'6'}).total).toBe(13);
  });
});
describe('raw store and unresolved limit formulas',()=>{
  it('SHR-MT-R03/R04 shallow replacement distinguishes absent, undefined, null and false',()=>{
    const original=mergeData(initialFormState(),{keep:'x',drivers:[{guid:'synthetic'}],flag:true});
    const next=mergeData(original,{drivers:[],flag:false,cleared:null,provided:undefined});
    expect(next.formData).toEqual({keep:'x',drivers:[],flag:false,cleared:null,provided:undefined});
    expect(Object.hasOwn(next.formData,'provided')).toBe(true);
    expect(original.formData.drivers).toHaveLength(1);
  });
  it('visit ledger retains first-seen order across backtracking and reset',()=>{
    let state=initialFormState(); for(const step of [5,2,5,1] as const) state=setStep(state,step);
    expect(state.stepPath).toEqual(['step5','step2','step1']);
    expect(resetForm(state)).toEqual({...state,formData:{},step:1,stepAsEnum:'step1'});
  });
  it('session serialization has independent raw cache and notifies subscribers',()=>{
    const memory=new Map<string,string>();const storage={getItem:(k:string)=>memory.get(k)??null,setItem:(k:string,v:string)=>{memory.set(k,v);},removeItem:(k:string)=>{memory.delete(k);},clear:()=>memory.clear()};
    storage.setItem('motorTradeOptions','{"unchanged":true}');
    const store=createSession(storage);const listener=vi.fn();store.subscribe(listener);store.setData({flag:false});store.setStep(4);store.reset();
    expect(listener).toHaveBeenCalledTimes(3);
    expect(createSession(storage).getSnapshot().stepPath).toEqual(['step4']);
    expect(storage.getItem('motorTradeOptions')).toBe('{"unchanged":true}');
  });
  it('SHR-MT-R09 uses supplied synthetic limits without production defaults',()=>{
    expect(displayedPage([1,2,3,4,5],2,2)).toEqual([3,4]);
    expect(displayedPage([1],1,2)).toEqual([1]);
    expect(paginationVisible(2,2)).toBe(false);expect(paginationVisible(3,2)).toBe(true);
    expect(addDriverDisabled(1,2)).toBe(false);expect(addDriverDisabled(2,2)).toBe(true);
    expect(addDriverDisabled(0,undefined)).toBe(true);expect(displayedPage([1,2],1,undefined)).toEqual([]);
  });
});
