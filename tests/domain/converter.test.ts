import {describe,it,expect} from 'vitest';
import {sanitizeMotorTradeVehicles,motorTradeConverter} from '@/domain/converter';
describe('MTS-09-R18 / MTS-14-R02/R05 local converter reused by MTS-06-R21',()=>{
  it('filters owner type 4 by strict personal-cover permission and keeps source order without mutation',()=>{
    const raw={drivers:[{guid:'eligible',coverPersonalVehicle:true},{guid:'ineligible',coverPersonalVehicle:false}],vehicles:[{regNumber:'KEEP1',ownerTypeID:1},{regNumber:'DROP',ownerTypeID:4,ownerGuid:'ineligible'},{regNumber:'KEEP2',ownerTypeID:4,ownerGuid:'eligible'},{regNumber:'STRING',ownerTypeID:'4'}]};
    expect(sanitizeMotorTradeVehicles(raw,{}).vehicles?.map(v=>v.regNumber)).toEqual(['KEEP1','KEEP2','STRING']);expect(raw.vehicles).toHaveLength(4);
  });
  it('specified eligibility repeats strict cover/indemnity predicate, updates flag only for truthy raw array',()=>{
    const options={indemnityOwnVehicles:[{value:99,text:'Synthetic',numericValue:15000}]};const raw={coverLevelID:1,coverIndemnityLimitOwnVehiclesID:99,specifiedVehicles:[{regNumber:'SYNTHETIC'}],addSpecifiedVehicle:false};
    expect(sanitizeMotorTradeVehicles(raw,options)).toMatchObject({addSpecifiedVehicle:true,specifiedVehicles:[{regNumber:'SYNTHETIC'}]});expect(sanitizeMotorTradeVehicles({...raw,coverLevelID:'1'},options)).toMatchObject({addSpecifiedVehicle:false,specifiedVehicles:[]});expect(raw.addSpecifiedVehicle).toBe(false);
    expect(sanitizeMotorTradeVehicles({addSpecifiedVehicle:true},{})).toMatchObject({addSpecifiedVehicle:true,vehicles:undefined,specifiedVehicles:undefined});expect(sanitizeMotorTradeVehicles({specifiedVehicles:[],addSpecifiedVehicle:true},{}).addSpecifiedVehicle).toBe(false);
  });
  it('converter strips only documented address flags and maps plate strings; raw flags remain',()=>{
    const raw={proposershowAddress:true,other:true,drivers:[{guid:'synthetic',showAddress:true}],tradingPremises:[{showAddress:true,postcode:'SYNTHETIC'}],tradePlateNumbers:[{plateNumber:'SYNTHETIC'}]};
    expect(motorTradeConverter(raw,{})).toEqual({other:true,drivers:[{guid:'synthetic'}],tradingPremises:[{postcode:'SYNTHETIC'}],tradePlateNumbers:['SYNTHETIC'],vehicles:undefined,specifiedVehicles:undefined,addSpecifiedVehicle:undefined});expect(raw.drivers[0].showAddress).toBe(true);
  });
  it('broker-adjustment outer wrapper conversion adds three undefined top-level vehicle fields',()=>{
    const inner=motorTradeConverter({other:'synthetic'},{});expect(motorTradeConverter({data:inner,guid:'synthetic'},{})).toEqual({data:inner,guid:'synthetic',vehicles:undefined,specifiedVehicles:undefined,addSpecifiedVehicle:undefined});
  });
});
