import * as yup from 'yup';
import {dayjs} from './dates';
import type {DateValue,RawForm} from './types';
export const businessDefinition={version:1,owner:'MTS-03',heading:'Business Details',assurance:'Businesses must register for VAT if their VAT taxable turnover is above £90,000. They can also choose to register if their turnover is below £90,000. Do you wish to continue?',questions:[
  {owner:'MTS-03-Q01',path:'businessStartedDate',label:'Date Business Started Trading:',control:'date'},
  {owner:'MTS-03-Q02',path:'businessAnnualTurnover',label:'Annual Turnover:',control:'currency'},
  {owner:'MTS-03-Q03',path:'businessAnnualWageRoll',label:'Annual Wage Roll:',control:'currency'},
  {owner:'MTS-03-Q04',path:'businessIsTradeAssociationMember',label:'Are you a member of any trade associations?',control:'radio'},
  {owner:'MTS-03-Q05',path:'businessTradeAssociationName',label:'Trade Association:',control:'text'},
  {owner:'MTS-03-Q06',path:'businessIsVATRegistered',label:'Is the company VAT registered?',control:'radio'},
  {owner:'MTS-03-Q07',path:'businessVATNumber',label:'VAT Number:',control:'text',maxLength:20},
  {owner:'MTS-03-Q08',path:'businessNumberOfVehiclesHandlePerYear',label:'Number of vehicles handled per year:',control:'number'},
  {owner:'MTS-03-Q09',path:'businessNumberOfVehicleCapacity',label:'Motor Insurance Policy Database (MIPD) Vehicle Limit:',control:'number'},
]} as const;
export function businessDefaults(raw:RawForm){return Object.fromEntries(businessDefinition.questions.filter(q=>raw[q.path]!==null).map(q=>[q.path,raw[q.path]]));}
export function businessSchema(policyStart:DateValue|undefined){return yup.object({
  businessStartedDate:yup.date().min(dayjs('1900-01-01').toDate(),'Date cannot be earlier than 01/01/1900.').max(dayjs(policyStart).toDate(),`This field must be at earlier than ${dayjs(policyStart).format('DD/MM/YYYY')}.`).required().label('This'),
  businessAnnualTurnover:yup.number().required().label('This'),businessAnnualWageRoll:yup.number().required().label('This'),
  businessIsTradeAssociationMember:yup.boolean().required().label('This'),businessTradeAssociationName:yup.string().when('businessIsTradeAssociationMember',{is:true,then:s=>s.required().label('This'),otherwise:s=>s.notRequired()}),
  businessIsVATRegistered:yup.boolean().required().label('This'),businessVATNumber:yup.string().notRequired(),
  businessNumberOfVehiclesHandlePerYear:yup.number().min(1,'This field must be greater than 0').required().label('This'),businessNumberOfVehicleCapacity:yup.number().required().label('This'),
});}
export function requiresVatAssurance(turnover:unknown,registered:unknown){return (turnover as number)>=90000&&!registered;}
export interface BusinessActions {save:(data:Record<string,unknown>)=>void;next:()=>void;assurance:(value:boolean)=>void;}
// MTS-03-R03/R04: separate handlers; CLR-004 does not specify their final browser composition.
export function submitBusiness(data:Record<string,unknown>,watchedTurnover:unknown,registered:unknown,ports:BusinessActions){if(requiresVatAssurance(watchedTurnover,registered)){ports.assurance(true);return;}ports.save(data);ports.next();}
export function agreeBusiness(data:Record<string,unknown>,ports:BusinessActions){ports.save(data);ports.next();ports.assurance(false);}
