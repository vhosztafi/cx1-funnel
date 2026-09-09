import * as yup from 'yup';
import {max,sortBy} from 'lodash-es';
import type {RawForm,RawDriver,RouteState} from './types';
import {strictOption,type Options} from './options';
export const driverPlanDefinition={version:1,owner:'MTS-06A',heading:'Drivers',instructionStart:'Standard any driver cover is as follows:',instructionEnd:'Any driver that does not meet the above conditions must be named.',questions:[
  {owner:'MTS-06-Q01',path:'driverPlanId',label:'Driver Plan:',id:'Drivers',options:'driverPlans'},
  {owner:'MTS-06-Q02',path:'aadDriverNumber',label:'Number of Drivers:',control:'number'},
  {owner:'MTS-06-Q03',path:'aadDriverMinAgeId',label:'Minimum Driver Age:',id:'aad_driver_min_age',options:'aadDriverMinAge'},
  {owner:'MTS-06-Q04',path:'aadDriverMaxAgeId',label:'Maximum Driver Age:',id:'aad_driver_max_age',options:'aadDriverMaxAge'},
  {owner:'MTS-06-Q05',path:'aadMaxVehicleGroupingID',label:'Maximum vehicle grouping:',id:'max_vehicle_grouping',options:'aadMaxVehicleGrouping'},
  {owner:'MTS-06-Q06',path:'aadMaxVehicleGvwID',label:'Maximum Gross Vehicle Weight Handled:',id:'max_gross_weight',options:'aadMaxVehicleGvw'},
  {owner:'MTS-06-Q07',path:'aadMaxMotorcycleCcID',label:'Maximum Motorcycle CC Handled:',id:'max_motorcycle_cc',options:'aadMaxMotorcycleCc'},
]} as const;
export function anyDriverFields(plan:unknown){return plan===2||plan===3;}
export function driverPlanDefaults(raw:RawForm){return Object.fromEntries(driverPlanDefinition.questions.filter(q=>raw[q.path]!==null).map(q=>[q.path,raw[q.path]]));}
export function driverPlanSchema(){return yup.object(Object.fromEntries(driverPlanDefinition.questions.map((q,index)=>[q.path,index===0?yup.number().required().label('This'):(index===1?yup.number().typeError('This is a required field'):yup.number()).when('driverPlanId',{is:anyDriverFields,then:s=>s.required().label('This'),otherwise:s=>s.notRequired()})])));}
export function driverPlanProjection(data:Record<string,unknown>){const result={...data};if(data.driverPlanId===1)for(const q of driverPlanDefinition.questions.slice(1))result[q.path]=undefined;else if(data.driverPlanId!==2)result.drivers=[];return result;}
export const driverPlanRoute:RouteState={editing:false,editDriver:null,showCards:false};
export interface DriverWorkflowPorts {save:(data:Partial<RawForm>)=>void;loading:(on:boolean)=>void;scroll:()=>void;route:(state:RouteState)=>void;next:()=>void;setValidators:(raw:RawForm)=>void;validate:(driver:RawDriver,raw:RawForm)=>Promise<unknown>;delay:(milliseconds:number)=>Promise<void>;uuid:()=>string;}
export async function submitDriverPlan(data:Record<string,unknown>,raw:RawForm,ports:DriverWorkflowPorts){
  const projected=driverPlanProjection(data);ports.save(projected);const merged={...raw,...projected};
  if(data.driverPlanId!==1&&data.driverPlanId!==2){ports.setValidators(merged);ports.next();return;}
  if(!raw.drivers?.length){ports.route({editing:true,editDriver:0});return;}
  ports.loading(true);
  for(let index=0;index<raw.drivers.length;index++)try{await ports.validate(raw.drivers[index],merged);}catch{ports.scroll();ports.loading(false);ports.route({editing:true,editDriver:index,navigateList:true});return;}
  ports.scroll();ports.loading(false);ports.route({showCards:true});
}
export function driverDetailBack(raw:RawForm,navigateList:unknown):RouteState{return navigateList||!raw.drivers?.length?driverPlanRoute:{showCards:true};}
export async function saveDriverDetail(cleaned:RawDriver,raw:RawForm,editingDriver:number,ports:DriverWorkflowPorts){
  const existing=raw.drivers?.[editingDriver];
  if(!existing){ports.save({drivers:[...(raw.drivers??[]),{...cleaned,guid:ports.uuid()}]});ports.route({showCards:true});return;}
  ports.save({drivers:raw.drivers!.map((row,index)=>index===editingDriver?cleaned:row)});
  if(editingDriver===raw.drivers!.length-1){ports.route({showCards:true});return;}
  ports.loading(true);
  // MTS-06-R07: later rows validate against the pre-existing form closure.
  for(let index=editingDriver+1;index<raw.drivers!.length;index++)try{await ports.validate(raw.drivers![index],raw);}catch{ports.scroll();ports.loading(false);ports.route({driverLoading:true});await ports.delay(50);ports.route({editDriver:index,editing:true,navigateList:true});return;}
  ports.scroll();ports.loading(false);ports.route({showCards:true});
}
export function driversSorted(drivers:readonly RawDriver[]|null|undefined){const indexed=drivers?.map((driver,driverIndex)=>({...driver,driverIndex}))??[];return [3,1,4,5,2].flatMap(relationship=>sortBy(indexed.filter(row=>row.relationshipPolicyholderID===relationship),row=>row.firstName));}
export function deleteDriver(raw:RawForm,rawIndex:number,pageCount:number,activePage:number){const driver=raw.drivers?.[rawIndex];if(!driver)return {kind:'missing'} as const;if(raw.vehicles?.find(vehicle=>vehicle.ownerGuid===driver.guid))return {kind:'blocked',message:"This driver is a vehicle owner, can't be deleted.",duration:3500} as const;if(raw.drivers!.length===1)return {kind:'deleted',drivers:[],route:{editing:true,editDriver:0},activePage} as const;return {kind:'deleted',drivers:raw.drivers!.toSpliced(rawIndex,1).map(row=>row),activePage:pageCount===1?activePage-1:activePage} as const;}
export function validatorProjection(raw:RawForm,options:Options){
  const driverMaxGvw=max(raw.drivers?.map(row=>row.gvwLimitID));const driverListGvw=strictOption(options.driverGVWLimits,driverMaxGvw)?.gvwLimitDecimal;
  const driverPlanGvw=strictOption(options.aadMaxVehicleGvw,raw.aadMaxVehicleGvwID)?.maxGVW;
  const maxAbi=max(raw.drivers?.map(row=>row.maxABIGroupID));const text=strictOption(options.driverMaxABIGroups,maxAbi)?.text;
  const driverMaxAbi=raw.drivers?.length?Number(text?.slice(-2)):undefined;
  const driverPlanMaxAbi=anyDriverFields(raw.driverPlanId)?strictOption(options.aadMaxVehicleGrouping,raw.aadMaxVehicleGroupingID)?.abiGroup:null;
  return {abi:{driverMaxAbi,driverPlanMaxAbi},gvw:{driverListGvw,driverPlanGvw}};
}
