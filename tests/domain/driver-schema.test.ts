import {describe,it,expect,vi} from 'vitest';
import type {TestContext} from 'yup';
import {driverDetailSchema,driverAbiTest} from '@/domain/driver-schema';
import {driverHistoryDefinitions,newHistoryRow,historyRemoval} from '@/domain/driver-histories';
import {relationshipFailure,personalCoverFailure,otherCoverFailure,cleanDriver,youngAndExperienceOptions} from '@/domain/driver-rules';
const raw={proposerPolicyStartDate:'2026-09-09',coverLevelID:3};
const syntheticDriver={titleID:999,firstName:'Synthetic',surname:'Fixture',dateOfBirth:'1990-01-01',relationshipPolicyholderID:2,postCode:'TEST1',showAddress:true,houseNo:'1',street:'Synthetic Street',county:'Synthetic County',usageID:1,gvwLimitID:999,isUKResidentSinceBirth:true,licenceTypeID:1,licenseIssueDate:'2010-01-01',motorcycleCoverID:1,maxABIGroupID:1,tradeEmploymentBasisID:1,coverPersonalVehicle:false,coverDrivingOtherVehicles:false,hasMotoringConvictions:false,hasClaimsOrAccidents:false,hasReportedDisability:false,hasCriminalConvictions:false,hasCCJs:false};
describe('MTS-06 driver detail conditions',()=>{
  it('Q08–62 accepts a synthetic adult with no histories and preserves hidden optional absence',async()=>{
    const schema=driverDetailSchema({raw,options:{},now:new Date('2026-09-09')});await expect(schema.validate(syntheticDriver)).resolves.toMatchObject({...syntheticDriver,dateOfBirth:new Date('1990-01-01'),licenseIssueDate:new Date('2010-01-01')});
    await expect(schema.validateAt('dateOfBirth',{dateOfBirth:'1941-01-01'})).resolves.toBeInstanceOf(Date);await expect(schema.validateAt('dateOfBirth',{dateOfBirth:'1940-01-01'})).rejects.toThrow('Driver must be at most 84 years old');
    await expect(schema.validateAt('licenceTypeID',{licenceTypeID:3})).rejects.toThrow('We do not cover Provisional UK licences');
  });
  it('R04 known invalid predicates remain exact independently of missing custom literals',()=>{
    expect(relationshipFailure({...syntheticDriver,dateOfBirth:'2005-01-01',relationshipPolicyholderID:5},raw)).toBe('spouseUnder25');
    expect(relationshipFailure({...syntheticDriver,guid:'same',relationshipPolicyholderID:3},{...raw,drivers:[{guid:'same',relationshipPolicyholderID:3}]})).toBeUndefined();
    expect(personalCoverFailure({...syntheticDriver,coverPersonalVehicle:true})).toBe('personalMotorTradeOnly');
    expect(otherCoverFailure({...syntheticDriver,usageID:2,relationshipPolicyholderID:3},raw)).toBe('otherAutomatic');
  });
  it('R06 requiredness uses exact misspelled sibling rather than visible disability answer',async()=>{
    const schema=driverDetailSchema({raw,options:{},now:new Date()});await expect(schema.validateAt('hasReportedDisabilityDetails',{hasReportedDisability:true,hasReportedDisabilityDetails:''})).resolves.toBe('');
    await expect(schema.validateAt('hasReportedDisabilityDetails',{driverPlahasReportedDisabilitynId:true,hasReportedDisabilityDetails:''})).rejects.toThrow();
  });
  it('Q27 non-returned ABI error expression remains unresolved under CLR-008',()=>{
    const createError=vi.fn();const ctx={parent:{dateOfBirth:'2007-01-01'},createError} as unknown as TestContext;expect(driverAbiTest(raw).call(ctx,3)).toBeUndefined();expect(createError).toHaveBeenCalledWith({message:'Chosen ABI Group is not valid for this driver.'});
  });
  it('R08/R11/R12/R14/R15 declarative definitions are JSON-compatible; explicit row factory adds undefined',()=>{
    expect(JSON.parse(JSON.stringify(driverHistoryDefinitions))).toEqual(driverHistoryDefinitions);
    expect(newHistoryRow(driverHistoryDefinitions.groups[0])).toEqual({motortradeRoadRisksOccupationID:undefined,isBusinessUseRequired:undefined});
    expect(newHistoryRow(driverHistoryDefinitions.groups[1])).toEqual({convictionDate:null,driverMotortradingConvictionCodeID:'',fineAmount:'',points:'',disqualified:undefined,banLength:''});
    expect(historyRemoval([{}],0,'ccj')).toEqual({rows:[],writes:{ccj:false}});
  });
  it('Q38 ban end strictly after policy date rejects and exact equality passes',async()=>{
    const schema=driverDetailSchema({raw,options:{},now:new Date()});const path='driverMotortradingConvictions[0].disqualified';
    await expect(schema.validateAt(path,{driverMotortradingConvictions:[{convictionDate:'2026-08-09',banLength:1,disqualified:true}]})).resolves.toBe(true);
    await expect(schema.validateAt(path,{driverMotortradingConvictions:[{convictionDate:'2026-08-10',banLength:1,disqualified:true}]})).rejects.toThrow('Driver can not be added to policy whilst on a ban.');
  });
  it('Q58–62 distinct cover/age/options predicates null fields without omitting them',()=>{
    const data=cleanDriver({...syntheticDriver,ageAdditionalExcess:true,ageIndemnityLimitID:999,ageIncreaseVehicleCCID:999,experienceBasedExcessID:999,experienceIncreaseVehicleCCLimitID:999},raw,{});
    for(const key of ['ageAdditionalExcess','ageIndemnityLimitID','ageIncreaseVehicleCCID','experienceBasedExcessID','experienceIncreaseVehicleCCLimitID'])expect(data).toHaveProperty(key,null);
    const options={indemnityOwnVehicles:[{value:1,text:'Synthetic',numericValue:15000}],driverExperienceBasedExcesses:[{value:999,text:'Synthetic',numericValue:15000}]};
    expect(youngAndExperienceOptions(syntheticDriver,{...raw,coverIndemnityLimitOwnVehiclesID:1},options).experienceExcesses).toHaveLength(1);expect(youngAndExperienceOptions(syntheticDriver,{...raw,coverIndemnityLimitOwnVehiclesID:1},options,true).experienceExcesses).toHaveLength(0);
  });
});
