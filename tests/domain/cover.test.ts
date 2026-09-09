import {describe,it,expect} from 'vitest';
import type {Options} from '@/domain/options';
import {coverSubmit,coverSchema,coverDefaults,ownCoverOptions,customerCoverOptions,coverExcesses,customerLoi,introRenewal,driversFlatten,policyIndemnity} from '@/domain/cover';
const synthetic:Options={mtOccupations:[{value:999,text:'Synthetic customer metadata',customerLOI:true}],coverLevels:[{value:1,text:'Synthetic full',isComprehensive:true},{value:3,text:'Synthetic limited'}],customerLoanCoverLevels:[{value:99,text:'Synthetic full loan',isComprehensive:true}],indemnityOwnVehicles:[{value:1,text:'Synthetic zero',numericValue:0},{value:2,text:'Synthetic 15k',numericValue:15000,excesses:[{value:99,text:'Synthetic excess (Default)'}]},{value:3,text:'Synthetic 20k',numericValue:20000},{value:4,text:'Synthetic unknown',numericValue:null}],indemnityCustomerVehicles:[{value:1,text:'Synthetic zero',numericValue:0},{value:2,text:'Synthetic 15k',numericValue:15000}],noClaimBonusPreviousInsurers:[{value:99,text:'Synthetic intro',requireNCBIntroRenewal:true}],youngDriverIndemnityLimit:[{value:1,text:'Synthetic young',numericValue:20000}],driverExperienceBasedExcesses:[{value:2,text:'Synthetic experience',numericValue:15000}]};
describe('MTS-05 cover contracts',()=>{
  it('R01/R05 normalization writes six nulls and NCB clears; absent driver/count keys stay absent',()=>{
    const value=coverSubmit({coverLevelID:3,coverNCBID:1,requireCustomerLoanCover:false,coverNCBEarnedID:3}, {},synthetic);
    for(const key of ['coverIndemnityLimitOwnVehiclesID','coverIndemnityLimitCustomerVehiclesID','coverExcessID','coverAddAllSectionsExcess','coverExcessLateID','coverRemoveCoInsuraneExcess','coverNCBEarnedID','coverNCBExpiryDate','coverNCBPreviousInsurerId','coverNCBPreviousInsurerOther','coverIsNCBProtected','customerLoanCoverLevelID','hasCoverNCBIntroRenewal','coverNCBIntroRenewalYearID'])expect(value[key]).toBeNull();
    expect(value).not.toHaveProperty('drivers');expect(value).not.toHaveProperty('customerLoanVehicleCount');expect(coverDefaults({customerLoanVehicleCount:3})).not.toHaveProperty('customerLoanVehicleCount');
  });
  it('Q02/Q03 / R02 different zero filters and customer schema ID comparison',async()=>{
    expect(ownCoverOptions(2,synthetic)?.map(o=>o.value)).toEqual([1,2]);expect(customerCoverOptions(2,synthetic)?.map(o=>o.value)).toEqual([2]);expect(ownCoverOptions('2',synthetic)).toBe(synthetic.indemnityOwnVehicles);
    const schema=coverSchema({occupations:[{occupationId:999}]},synthetic);
    await expect(schema.validateAt('coverIndemnityLimitCustomerVehiclesID',{coverLevelID:2,coverIndemnityLimitCustomerVehiclesID:2})).rejects.toThrow('Maximum indemnity limit for TPF&T cover is £15,000 for customer.');
    await expect(schema.validateAt('coverIndemnityLimitOwnVehiclesID',{coverLevelID:2,coverIndemnityLimitOwnVehiclesID:2})).resolves.toBe(2);
    await expect(schema.validateAt('coverIndemnityLimitOwnVehiclesID',{coverLevelID:2,coverIndemnityLimitOwnVehiclesID:3})).rejects.toThrow('Maximum indemnity limit for TPF&T cover is £15,000 for own.');
  });
  it('Q04 strict nested excess selection and Summary parent slice remain separate',()=>{
    expect(coverExcesses(1,2,synthetic)).toEqual([{value:99,text:'Synthetic excess (Default)'}]);expect(coverExcesses(1,'2',synthetic)).toEqual([]);
    const rows=Array.from({length:7},(_,index)=>({value:index+1,text:'Synthetic',numericValue:10000,excesses:[{value:index,text:'Synthetic excess'}]}));expect(coverExcesses(2,7,{indemnityOwnVehicles:rows})).toHaveLength(1);expect(coverExcesses(2,7,{indemnityOwnVehicles:rows},true)).toEqual([]);
  });
  it('R03 customer metadata converts occupation IDs but compares option values strictly',()=>{
    expect(customerLoi({occupations:[{occupationId:'999'}]},synthetic)).toBe(true);expect(customerLoi({occupations:[{occupationId:999}]},{mtOccupations:[{value:'999',text:'Synthetic',customerLOI:true}]})).toBe(false);
  });
  it('R04 loan comprehensive eligibility is metadata-driven',async()=>{
    await expect(coverSchema({},synthetic).validateAt('customerLoanCoverLevelID',{requireCustomerLoanCover:true,coverLevelID:3,customerLoanCoverLevelID:99})).rejects.toThrow('Chosen cover level is not eligible.');
    await expect(coverSchema({},synthetic).validateAt('customerLoanCoverLevelID',{requireCustomerLoanCover:true,coverLevelID:1,customerLoanCoverLevelID:99})).resolves.toBe(99);
  });
  it('R06 intro conditions and false renewal normalize independently',()=>{
    const data={coverNCBID:2,coverNCBEarnedID:3,coverNCBPreviousInsurerId:99,hasCoverNCBIntroRenewal:false,coverNCBIntroRenewalYearID:999};expect(introRenewal(data,synthetic)).toBe(true);expect(introRenewal({...data,coverNCBPreviousInsurerId:'99'},synthetic)).toBe(false);expect(coverSubmit(data,{},synthetic)).toMatchObject({hasCoverNCBIntroRenewal:false,coverNCBIntroRenewalYearID:null});
  });
  it('Q12 schema deliberately has no date maximum',async()=>{await expect(coverSchema({},synthetic).validateAt('coverNCBExpiryDate',{coverNCBID:2,coverNCBExpiryDate:'2099-01-01'})).resolves.toBeInstanceOf(Date);});
  it('R07 driver omission preserves other properties and truthy strict metadata limits',()=>{
    const drivers=[{guid:'synthetic',ageAdditionalExcess:999,ageIndemnityLimitID:1,experienceBasedExcessID:2,ageMaxCcID:99}];
    expect(driversFlatten(drivers,3,15000,synthetic)).toEqual([{guid:'synthetic',ageMaxCcID:99}]);
    expect(driversFlatten(drivers,1,15000,synthetic)).toEqual([{guid:'synthetic',ageAdditionalExcess:999,experienceBasedExcessID:2,ageMaxCcID:99}]);
    expect(driversFlatten(drivers,1,0,synthetic)).toEqual(drivers);expect(driversFlatten([{ageIndemnityLimitID:'1'}],1,15000,synthetic)).toEqual([{ageIndemnityLimitID:'1'}]);
    expect(policyIndemnity({coverLevelID:1,coverIndemnityLimitOwnVehiclesID:1,coverIndemnityLimitCustomerVehiclesID:2},{occupations:[{occupationId:999}]},synthetic)).toBe(15000);
    expect(drivers[0]).toHaveProperty('ageIndemnityLimitID',1);
  });
});
