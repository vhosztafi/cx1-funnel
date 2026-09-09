import {describe,it,expect,vi} from 'vitest';
import {driverPlanProjection,driverPlanSchema,submitDriverPlan,saveDriverDetail,driversSorted,deleteDriver,validatorProjection,driverDetailBack,type DriverWorkflowPorts} from '@/domain/driver-workflow';
import type {RawForm} from '@/domain/types';
function workflow(){const calls:unknown[]=[];const ports:DriverWorkflowPorts={save:data=>calls.push(['save',data]),loading:on=>calls.push(['loading',on]),scroll:()=>calls.push(['scroll']),route:state=>calls.push(['route',state]),next:()=>calls.push(['next']),setValidators:raw=>calls.push(['validators',raw]),validate:vi.fn(async()=>{}),delay:async ms=>{calls.push(['delay',ms]);},uuid:()=> 'synthetic-uuid'};return {calls,ports};}
describe('MTS-06 workflow',()=>{
  it('Q01–07 / R01 plan fields have no numeric minima and ID1 writes undefined only',async()=>{
    expect(driverPlanProjection({driverPlanId:1,aadDriverNumber:9})).toMatchObject({driverPlanId:1,aadDriverNumber:undefined,aadDriverMinAgeId:undefined});expect(driverPlanProjection({driverPlanId:3}).drivers).toEqual([]);
    await expect(driverPlanSchema().validate({driverPlanId:2,aadDriverNumber:0,aadDriverMinAgeId:99,aadDriverMaxAgeId:99,aadMaxVehicleGroupingID:99,aadMaxVehicleGvwID:99,aadMaxMotorcycleCcID:99})).resolves.toHaveProperty('aadDriverNumber',0);
  });
  it('EDGE-06A-DETAIL/SKIP save precedes local navigation or validators then numbered next',async()=>{
    const {calls,ports}=workflow();await submitDriverPlan({driverPlanId:1},{},ports);expect(calls.at(-1)).toEqual(['route',{editing:true,editDriver:0}]);expect((calls[0] as unknown[])[0]).toBe('save');calls.length=0;
    await submitDriverPlan({driverPlanId:3},{drivers:[{guid:'old'}]},ports);expect(calls).toEqual([['save',{driverPlanId:3,drivers:[]}],['validators',{driverPlanId:3,drivers:[]}],['next']]);
  });
  it('R02 existing drivers validate sequentially; first rejection ends recursion',async()=>{
    const {calls,ports}=workflow();ports.validate=vi.fn(async driver=>{if(driver.guid==='bad')throw Error('synthetic');});const raw={drivers:[{guid:'ok'},{guid:'bad'},{guid:'unvisited'}]};
    await submitDriverPlan({driverPlanId:2},raw,ports);expect(ports.validate).toHaveBeenCalledTimes(2);expect(calls.slice(-3)).toEqual([['scroll'],['loading',false],['route',{editing:true,editDriver:1,navigateList:true}]]);
  });
  it('R07 saves replacement then validates pre-existing closure and emits blank loading then 50ms detail',async()=>{
    const {calls,ports}=workflow();const raw:RawForm={drivers:[{guid:'first',firstName:'old'},{guid:'bad'}]};ports.validate=vi.fn(async(_driver,context)=>{expect(context).toBe(raw);expect(context.drivers?.[0].firstName).toBe('old');throw Error('synthetic');});
    await saveDriverDetail({guid:'first',firstName:'new'},raw,0,ports);expect(calls).toEqual([['save',{drivers:[{guid:'first',firstName:'new'},{guid:'bad'}]}],['loading',true],['scroll'],['loading',false],['route',{driverLoading:true}],['delay',50],['route',{editDriver:1,editing:true,navigateList:true}]]);
    expect(driverDetailBack(raw,true)).toEqual({editing:false,editDriver:null,showCards:false});expect(driverDetailBack(raw,false)).toEqual({showCards:true});
  });
  it('R07 absent/append create UUID while last edit neither regenerates nor revalidates',async()=>{
    const {calls,ports}=workflow();await saveDriverDetail({firstName:'Synthetic'},{},0,ports);expect(calls).toEqual([['save',{drivers:[{firstName:'Synthetic',guid:'synthetic-uuid'}]}],['route',{showCards:true}]]);calls.length=0;
    await saveDriverDetail({guid:'original'},{drivers:[{guid:'original'}]},0,ports);expect(ports.validate).not.toHaveBeenCalled();expect(calls[0]).toEqual(['save',{drivers:[{guid:'original'}]}]);
  });
  it('R18 display groups sort by firstName and retain original raw indices; string IDs excluded',()=>{
    const drivers=[{firstName:'Z',relationshipPolicyholderID:2},{firstName:'B',relationshipPolicyholderID:1},{firstName:'A',relationshipPolicyholderID:1},{firstName:'P',relationshipPolicyholderID:3},{firstName:'hidden',relationshipPolicyholderID:'3'}];expect(driversSorted(drivers).map(row=>row.driverIndex)).toEqual([3,2,1,0]);expect(drivers[0].firstName).toBe('Z');
  });
  it('R19 owner block only consults ordinary vehicles; page decrement and sole-row route are distinct',()=>{
    expect(deleteDriver({drivers:[{guid:'owner'}],vehicles:[{ownerGuid:'owner'}]},0,1,1)).toEqual({kind:'blocked',message:"This driver is a vehicle owner, can't be deleted.",duration:3500});
    expect(deleteDriver({drivers:[{guid:'owner'}],specifiedVehicles:[{ownerGuid:'owner'}]},0,1,1)).toMatchObject({kind:'deleted',drivers:[],route:{editing:true,editDriver:0}});
    expect(deleteDriver({drivers:[{guid:'one'},{guid:'two'}]},1,1,1)).toEqual({kind:'deleted',drivers:[{guid:'one'}],activePage:0});
  });
  it('R16 raw ID maxima, strict lookup and Number(last two text characters) drive validators',()=>{
    const value=validatorProjection({driverPlanId:2,aadMaxVehicleGroupingID:99,aadMaxVehicleGvwID:99,drivers:[{gvwLimitID:1,maxABIGroupID:2},{gvwLimitID:2,maxABIGroupID:1}]},{driverGVWLimits:[{value:2,text:'Synthetic',gvwLimitDecimal:9000}],driverMaxABIGroups:[{value:2,text:'Synthetic Group 31'}],aadMaxVehicleGrouping:[{value:99,text:'Synthetic',abiGroup:50}],aadMaxVehicleGvw:[{value:99,text:'Synthetic',maxGVW:12000}]});expect(value).toEqual({abi:{driverMaxAbi:31,driverPlanMaxAbi:50},gvw:{driverListGvw:9000,driverPlanGvw:12000}});
    expect(validatorProjection({},{}).abi).toEqual({driverMaxAbi:undefined,driverPlanMaxAbi:null});
  });
});
