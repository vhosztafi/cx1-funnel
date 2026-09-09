import * as yup from 'yup';
import type {RawDriver,RawForm} from './types';
import type {Options} from './options';
import {dayjs} from './dates';
import {addressChosenTest} from './proposer';
import {minDriverDate,driverHistorySchemas} from './driver-histories';
import {ageAt,driverAges,youngAndExperienceOptions,relationshipFailure,motorcycleFailure,personalCoverFailure,otherCoverFailure,type DriverErrorInputs,type MissingDriverError} from './driver-rules';
interface Context {raw:RawForm;options:Options;postcodePattern?:RegExp;messages?:DriverErrorInputs;now:Date;planRevalidation?:boolean;}
const numeric=()=>yup.number().required().label('This');const boolean=()=>yup.boolean().required().label('This');const text=()=>yup.string().required().label('This');
// IMP-CLR-009: reject the confirmed invalid condition while leaving unavailable
// custom text empty. FormError's documented empty-message behavior is retained.
function missingMessageRule(context:Context,rule:(driver:RawDriver)=>MissingDriverError|undefined){return function(this:yup.TestContext){const failure=rule(this.parent);return !failure||this.createError({message:context.messages?.[failure]??''});};}
export function driverAbiTest(raw:RawForm){return function(this:yup.TestContext,value:number|undefined){const age=ageAt(this.parent.dateOfBirth,raw.proposerPolicyStartDate);if(age>=17&&age<=20&&(value as number)>2||age>=21&&age<=24&&(value as number)>4){this.createError({message:'Chosen ABI Group is not valid for this driver.'});}else return true;};}
export function driverDetailSchema(context:Context){
  const {raw,options}=context;const derived=(row:RawDriver)=>youngAndExperienceOptions(row,raw,options,context.planRevalidation);
  let postcode=yup.string().required().max(10).label('This');if(context.postcodePattern)postcode=postcode.matches(context.postcodePattern,'Postcode is not valid.');
  return yup.object({
    titleID:numeric(),firstName:text(),surname:text(),
    dateOfBirth:minDriverDate().required().label('This').test('minimumAge','Driver must be at least 17 years old',value=>ageAt(value,raw.proposerPolicyStartDate)>=17).test('maximumAge','Driver must be at most 84 years old',value=>ageAt(value,raw.proposerPolicyStartDate)<=85),
    relationshipPolicyholderID:numeric().test('relationship',missingMessageRule(context,driver=>relationshipFailure(driver,raw))),
    postCode:postcode.test('postCode',addressChosenTest('showAddress') as yup.TestFunction<string>),houseNo:text().max(50),street:text().max(50),town:yup.string().notRequired().max(50),city:yup.string().notRequired().max(50),county:text().max(50),
    usageID:numeric(),gvwLimitID:numeric(),isUKResidentSinceBirth:boolean(),
    ukResidenceSince:minDriverDate().max(context.now,"Date you've moved to UK cannot be in the future").when('isUKResidentSinceBirth',{is:false,then:s=>s.required().label('This'),otherwise:s=>s.notRequired()}).test('afterBirth','Entered date cannot be earlier than Date of Birth',function(value){return !value||!this.parent.dateOfBirth||!dayjs(value).isBefore(dayjs(this.parent.dateOfBirth),'day');}),
    licenceTypeID:numeric().test('licence','We do not cover Provisional UK licences',value=>value!==3),
    licenseIssueDate:minDriverDate().required().label('This').test('seventeenthBirthday',function(value){const minimum=dayjs(this.parent.dateOfBirth).add(17,'year');return !value||!dayjs(value).isBefore(minimum,'day')||this.createError({message:`Driving Licence Issue Date cannot be earlier than ${minimum.format('DD/MM/YYYY')}`});}).test('youngLicence','Young Drivers must have a UK Licence longer than 1 year.',function(value){return !(ageAt(this.parent.dateOfBirth,raw.proposerPolicyStartDate)<25&&ageAt(value,raw.proposerPolicyStartDate)<1);}),
    motorcycleCoverID:numeric().test('motorcycle',missingMessageRule(context,driver=>motorcycleFailure(driver,raw))),
    motorcycleLicenceIssueDate:minDriverDate().typeError('This field is required').when('motorcycleCoverID',{is:(value:unknown)=>!!value&&value!==1,then:s=>s.required().label('This'),otherwise:s=>s.notRequired()}).test('afterDrivingLicence','Motorcycle Licence Issue Date cannot be earlier than Driving Licence Issue Date',function(value){return !value||!this.parent.licenseIssueDate||!dayjs(value).isBefore(dayjs(this.parent.licenseIssueDate),'day');}),
    maxABIGroupID:numeric().test('age','Chosen ABI Group is not valid for this driver.',driverAbiTest(raw) as yup.TestFunction<number>),tradeEmploymentBasisID:numeric(),
    coverPersonalVehicle:boolean().test('personal',missingMessageRule(context,personalCoverFailure)),coverDrivingOtherVehicles:boolean().test('other',missingMessageRule(context,driver=>otherCoverFailure(driver,raw))),
    hasMotoringConvictions:boolean(),hasClaimsOrAccidents:boolean(),hasReportedDisability:boolean(),hasReportedDisabilityDetails:yup.string().max(50).when('driverPlahasReportedDisabilitynId',{is:(value:unknown)=>!!value,then:s=>s.required().label('This'),otherwise:s=>s.notRequired()}),hasCriminalConvictions:boolean(),hasCCJs:boolean(),
    ...driverHistorySchemas(raw),
    ageAdditionalExcess:yup.boolean().notRequired().test('bandValid','This is a required field',function(value){const {age}=driverAges(this.parent,raw);return !(this.parent.dateOfBirth&&(age as number)<25&&raw.coverLevelID!==3&&(value===null||value===undefined));}),
    ageIndemnityLimitID:yup.number().notRequired().test('bandValid',function(value){const d=derived(this.parent);if((d.age as number)<=24&&raw.coverLevelID!==3&&d.indemnities.length>0){if(!value)return this.createError({message:'This is a required field'});if(!d.indemnities.map(row=>Number(row.value)).includes(Number(value)))return this.createError({message:'Selected Age Indemnity Limit is not valid for this age'});}return true;}),
    ageIncreaseVehicleCCID:yup.number().notRequired().test('bandValid',function(value){const d=derived(this.parent);if(this.parent.dateOfBirth&&(d.age as number)<25){if(!value)return this.createError({message:'This is a required field'});if(d.ccs.length>0&&!d.ccs.map(row=>Number(row.value)).includes(Number(value)))return this.createError({message:"Vehicle CC limit is not valid for this driver's age"});}return true;}),
    experienceBasedExcessID:yup.number().notRequired().test('requiredCase','This is a required field',function(value){const d=derived(this.parent);return !((d.age as number)>24&&(d.experience as number)<1&&raw.coverLevelID!==3&&d.experienceExcesses.length>0)||!!value;}),
    experienceIncreaseVehicleCCLimitID:yup.number().notRequired().test('requiredCase','This is a required field',function(value){const d=derived(this.parent);return !((d.age as number)>24&&(d.experience as number)<1)||!!value;}),
  });
}
