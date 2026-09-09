import {dayjs} from './dates';
import type {RawDriver,RawForm,DateValue} from './types';
import {strictOption,type Options,type YoungBand} from './options';
import {policyIndemnity} from './cover';
export const youngBandDefinitions={version:1,owners:['OPT-MT-22','OPT-MT-64','OPT-MT-65','OPT-MT-66','OPT-MT-67','OPT-MT-68','OPT-MT-69','OPT-MT-70'],bands:[
  {ageFrom:null,ageTo:18,defaultCc:1,allowedCC:[1,2,3,4,5],defaultIndemnity:1,allowedIndemnity:[1,2,4],excess:500},
  {ageFrom:19,ageTo:20,defaultCc:2,allowedCC:[2,3,4,5],defaultIndemnity:1,allowedIndemnity:[1,2,4],excess:350},
  {ageFrom:21,ageTo:22,defaultCc:3,allowedCC:[3,4,5],defaultIndemnity:2,allowedIndemnity:[2,4],excess:250},
  {ageFrom:23,ageTo:null,defaultCc:4,allowedCC:[4,5],defaultIndemnity:3,allowedIndemnity:[3,4],excess:250},
]} as const;
export function ageAt(value:DateValue|undefined,policyStart:DateValue|undefined){return Math.floor(dayjs(policyStart).diff(dayjs(value).format('YYYY-MM-DD'),'year',true));}
export function driverAges(driver:RawDriver,raw:RawForm){const licence=driver.licenseIssueDate as DateValue|undefined;return {age:driver.dateOfBirth&&ageAt(driver.dateOfBirth,raw.proposerPolicyStartDate),experience:licence&&ageAt(licence,raw.proposerPolicyStartDate)};}
export function findYoungBand(bands:readonly YoungBand[]|undefined,age:number|null|''|undefined){return bands?.find(band=>(band.ageFrom||0)<=(age as number)&&(age as number)<=(band.ageTo||1000));}
export function youngAndExperienceOptions(driver:RawDriver,raw:RawForm,options:Options,planRevalidation=false){
  const {age,experience}=driverAges(driver,raw);const band=findYoungBand(options.youngDriverConfiguration,age);
  const limit=policyIndemnity(raw,raw,options);
  const indemnities=band?.indemnities?.filter(row=>!!row.numericValue&&row.numericValue<=(limit as number))??[];
  const experienceExcesses=options.driverExperienceBasedExcesses?.filter(row=>!!row.numericValue&&(planRevalidation?row.numericValue<(limit as number):row.numericValue<=(limit as number)))??[];
  return {age,experience,band,limit,indemnities,ccs:band?.cCs??[],experienceExcesses,experienceCC:options.driverExperienceBasedVehicleCCLimits??[]};
}
export function relationshipOptions(raw:RawForm,options:Options){const ids=strictOption(options.companyTypes,raw.proposerCompanyTypeId)?.relationshipOptions as readonly unknown[]|undefined;return options.driverRelationshipsPolicyHolder?.filter(row=>ids?.includes(row.value));}
export type MissingDriverError='spouseUnder25'|'policyholderExists'|'motorcycleOver1000'|'personalMotorTradeOnly'|'personalAutomatic'|'otherMotorTradeOnly'|'otherUnder21'|'otherAutomatic';
export type DriverErrorInputs=Partial<Record<MissingDriverError,string>>;
export function relationshipFailure(driver:RawDriver,raw:RawForm):MissingDriverError|undefined {const {age}=driverAges(driver,raw);if(driver.relationshipPolicyholderID===5&&(age as number)<25)return 'spouseUnder25';if(driver.relationshipPolicyholderID===3&&raw.drivers?.some(row=>row.relationshipPolicyholderID===3&&row.guid!==driver.guid))return 'policyholderExists';}
export function motorcycleFailure(driver:RawDriver,raw:RawForm):MissingDriverError|undefined {const {age}=driverAges(driver,raw);if(driver.motorcycleCoverID===6&&((age as number)<30||driver.motorcycleLicenceIssueDate&&ageAt(driver.motorcycleLicenceIssueDate as DateValue,raw.proposerPolicyStartDate)<2))return 'motorcycleOver1000';}
export function personalCoverFailure(driver:RawDriver):MissingDriverError|undefined {if(driver.coverPersonalVehicle===true&&driver.usageID===1)return 'personalMotorTradeOnly';if(driver.coverPersonalVehicle===false&&[1,4,3,5].includes(driver.relationshipPolicyholderID as number)&&driver.usageID!==1)return 'personalAutomatic';}
export function otherCoverFailure(driver:RawDriver,raw:RawForm):MissingDriverError|undefined {const {age}=driverAges(driver,raw);if(driver.coverDrivingOtherVehicles===true&&driver.usageID===1)return 'otherMotorTradeOnly';if(driver.coverDrivingOtherVehicles===true&&(age as number)<21)return 'otherUnder21';if(driver.coverDrivingOtherVehicles===false&&(age as number)>=21&&[1,4,3].includes(driver.relationshipPolicyholderID as number)&&driver.usageID!==1)return 'otherAutomatic';}
export const driverDateClears={birth:['ageAdditionalExcess','ageIndemnityLimitID','ageIncreaseVehicleCCID','experienceBasedExcessID','experienceIncreaseVehicleCCLimitID'],licence:['experienceBasedExcessID','experienceIncreaseVehicleCCLimitID']} as const;
export function cleanDriver(driver:RawDriver,raw:RawForm,options:Options){const data={...driver};const d=youngAndExperienceOptions(driver,raw,options);const young=(d.age as number)<25;const inexperienced=(d.experience as number)<1&&(d.age as number)>24;
  if(!(young&&raw.coverLevelID!==3))data.ageAdditionalExcess=null;
  if(!(young&&raw.coverLevelID!==3&&d.indemnities.length>0))data.ageIndemnityLimitID=null;
  if(!young)data.ageIncreaseVehicleCCID=null;
  if(!(inexperienced&&raw.coverLevelID!==3&&d.experienceExcesses.length>0))data.experienceBasedExcessID=null;
  if(!inexperienced)data.experienceIncreaseVehicleCCLimitID=null;
  return data;
}
