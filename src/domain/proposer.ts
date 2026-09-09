import * as yup from 'yup';
import {dayjs} from './dates';
import type {RawForm} from './types';
import {proposerDefinition} from '@/contracts/questions';

export interface ProposerContext {raw:RawForm;rtl:boolean;backoffice:boolean;now:Date;postcodePattern?:RegExp;}
export function policyDateBounds({raw,backoffice,now}:ProposerContext) {
  const minimum=raw.isMta&&raw.minPolicyStartDate?dayjs(raw.minPolicyStartDate):undefined;
  return {controlMin:(minimum??(backoffice?dayjs('2025-03-01'):dayjs(now))).toDate(),schemaMin:(minimum?minimum.subtract(1,'day'):backoffice?dayjs('2025-03-01'):dayjs(now).subtract(1,'day')).toDate(),controlMax:dayjs(now).startOf('day').add(30,'day').toDate(),schemaMax:dayjs(now).add(30,'day').toDate(),minimumMessage:minimum?`Date cannot be earlier than ${minimum.format('DD/MM/YYYY')}`:backoffice?'Date cannot be earlier than 01/03/2025.':'Policy start date must not be in the past.'};
}
// CLR-008: preserve createError without returning it; tests inspect the callback
// calls, never assert the pinned dependency's failing-path result as legacy fact.
export function addressChosenTest(showPath:string) {
  return function(this:yup.TestContext,value:unknown) {
    if(value&&!this.parent[showPath]) {this.createError({message:'You must either lookup your address or click Enter manually'});}
    else return true;
  };
}
export function proposerSchema(context:ProposerContext) {
  const bounds=policyDateBounds(context);
  let postcode=yup.string().required().max(10).label('This');
  if(context.postcodePattern)postcode=postcode.matches(context.postcodePattern,'Postcode is not valid.');
  postcode=postcode.test('postCode',addressChosenTest('proposershowAddress') as yup.TestFunction<string>);
  return yup.object({
    consentTo:context.rtl?yup.boolean().oneOf([true],'This is a required field'):yup.boolean().notRequired(),
    marketingConsent:yup.array().notRequired().test('directMarketing','Direct Marketing is required when Third Party Marketing is selected',function(value){if(context.rtl&&value?.includes(2)&&!value.includes(1))return this.createError({message:'Clegg Gifford Direct Marketing is required when Third Party Marketing is selected'});return true;}),
    marketingMethod:yup.array().notRequired().test('oneSelected','One must be selected',function(value){return !this.parent.marketingConsent?.length||!!value?.length;}),
    proposerPolicyStartDate:yup.date().min(bounds.schemaMin,bounds.minimumMessage).max(bounds.schemaMax,'Policy start date must be in the range of 30 days.').required().label('This'),
    isShortTerm:yup.boolean().required().label('This'),
    proposerCompanyTypeId:yup.number().required().label('This'),proposerTitleId:yup.number().required().label('This'),
    proposerName:yup.string().required().label('This'),proposerSurname:yup.string().required().label('This'),proposerTradingName:yup.string().notRequired().label('This'),
    proposerCompanyPartnershipName:yup.string().when('proposerCompanyTypeId',{is:(value:unknown)=>value===2||value===3||value===4,then:schema=>schema.required().max(50).label('This'),otherwise:schema=>schema.notRequired()}),
    proposerEmail:yup.string().email().required().label('This'),
    proposerTelephoneNumber:yup.string().max(11,'Telephone Number must be at most 11 characters').test('telephoneRequired','This is a required field.',function(value){return !!value||!!this.parent.proposerMobileNumber;}),
    proposerMobileNumber:yup.string().max(11,'Telephone Number must be at most 11 characters').test('mobileRequired','This is a required field.',function(value){return !!value||!!this.parent.proposerTelephoneNumber;}).test('mobilePrefix','Telephone Number should start with 07.',value=>!value||value.startsWith('07')),
    proposerPostcode:postcode,
    proposerHouseNumber:yup.string().required().max(50).label('This'),proposerStreet:yup.string().required().max(50).label('This'),proposerTown:yup.string().notRequired().max(50).label('This'),proposerCity:yup.string().notRequired().max(50).label('This'),proposerCounty:yup.string().required().max(50).label('This'),
  });
}
export function proposerDefaults(raw:RawForm) {
  const defaults:Record<string,unknown>={};
  for(const question of proposerDefinition.questions)if(raw[question.path]!==null)defaults[question.path]=raw[question.path];
  defaults.consentTo=raw.consentTo||false;defaults.proposershowAddress=raw.proposershowAddress;
  return defaults;
}
export function proposerSubmit(values:Record<string,unknown>,rtl:boolean) {
  const data={...values};
  if(Array.isArray(data.marketingConsent)&&data.marketingConsent.length===0)data.marketingMethod=[];
  if(!rtl)for(const key of ['consentTo','marketingConsent','marketingMethod'])delete data[key];
  if(data.proposerCompanyTypeId===1)data.proposerCompanyPartnershipName=null;
  return data;
}
export function proposerLayout(company:unknown) {return company===1?'sole':company===2||company===3?'company':company===4?'partnership':undefined;}
