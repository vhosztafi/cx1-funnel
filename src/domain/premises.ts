import * as yup from 'yup';
import {addressChosenTest} from './proposer';
import type {RawForm} from './types';
export interface Premise { [key:string]:unknown;tradingPremisePostcode?:string;tradingPremiseTypeId?:number|string|null;tradingPremiseYearsTrading?:number|string;tradingPremiseIsSharedWorksite?:boolean|null;tradingPremiseHouseNo?:string;tradingPremiseStreet?:string;tradingPremiseTown?:string;tradingPremiseCity?:string;tradingPremiseCounty?:string;showAddress?:boolean;}
export interface PremisesForm {tradingFromId?:number|string|null;tradingPremises?:Premise[];}
export const premisesDefinition={version:1,owner:'MTS-02',heading:'Premises Details',tradingFrom:{owner:'MTS-02-Q01',path:'tradingFromId',label:'Where are you trading from?',id:'Company',options:'tradingFroms'},rowQuestions:[
  {owner:'MTS-02-Q02',path:'tradingPremisePostcode',label:'Postcode:'},
  {owner:'MTS-02-Q03',path:'tradingPremiseTypeId',label:'What type of premises are you trading from? ',id:'Company',options:'tradingPremiseTypes'},
  {owner:'MTS-02-Q04',path:'tradingPremiseYearsTrading',label:'How long have you been trading from these premises? (years) ',maxLength:4},
  {owner:'MTS-02-Q05',path:'tradingPremiseIsSharedWorksite',label:'Is this a shared worksite? '},
  {owner:'MTS-02-Q06',path:'tradingPremiseHouseNo',label:'House No',maxLength:50},
  {owner:'MTS-02-Q07',path:'tradingPremiseStreet',label:'Street',maxLength:50},
  {owner:'MTS-02-Q08',path:'tradingPremiseTown',label:'Town',maxLength:50},
  {owner:'MTS-02-Q09',path:'tradingPremiseCity',label:'City',maxLength:50},
  {owner:'MTS-02-Q10',path:'tradingPremiseCounty',label:'County',maxLength:50},
]} as const;
// MTS-02-R01: empty-string numeric default is deliberate.
export function newPremise():Premise{return {tradingPremisePostcode:'',tradingPremiseTypeId:undefined,tradingPremiseYearsTrading:'',tradingPremiseIsSharedWorksite:undefined,tradingPremiseHouseNo:'',tradingPremiseStreet:'',tradingPremiseTown:'',tradingPremiseCity:'',tradingPremiseCounty:''};}
export function premiseBranch(value:unknown){return value===3||value===4;}
export function premiseSelection(value:unknown,length:number):'remove-all'|'append-one'|undefined {if((value===1||value===2)&&length>0)return 'remove-all';if(premiseBranch(value)&&length===0)return 'append-one';}
export function premisesDefaults(raw:RawForm):PremisesForm{return {tradingFromId:raw.tradingFromId as PremisesForm['tradingFromId'],tradingPremises:raw.tradingPremises as Premise[]|undefined};}
export function premisesSchema(postcodePattern?:RegExp){
  let postcode=yup.string().required().max(10).label('This');if(postcodePattern)postcode=postcode.matches(postcodePattern,'Postcode is not valid.');
  postcode=postcode.test('postCode',addressChosenTest('showAddress') as yup.TestFunction<string>);
  return yup.object({tradingFromId:yup.number().required().label('This'),tradingPremises:yup.array().of(yup.object({
    tradingPremisePostcode:postcode,tradingPremiseTypeId:yup.number().required().label('This'),tradingPremiseYearsTrading:yup.number().typeError('This field is required').required().label('This'),tradingPremiseIsSharedWorksite:yup.boolean().notRequired().required().label('This'),
    tradingPremiseHouseNo:yup.string().required().max(50).label('This'),tradingPremiseStreet:yup.string().required().max(50).label('This'),tradingPremiseTown:yup.string().notRequired().max(50).label('This'),tradingPremiseCity:yup.string().notRequired().max(50).label('This'),tradingPremiseCounty:yup.string().required().max(50).label('This'),
  }))});
}
