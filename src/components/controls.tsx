'use client';

import { useState, type ReactNode } from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IMaskInput } from 'react-imask';
import { emitCurrency,emitNumber,emitPercentage,nativeSelectValue,normalizeTextarea } from '@/domain/control-values';

export interface Choice { text:string; value:unknown; [key:string]:unknown; }
export interface Field { name:string; value:unknown; onChange:(...values:unknown[])=>void; onBlur?:()=>void; }
export interface ControlProps {field:Field;label?:ReactNode;error?:string;disabled?:boolean;id?:string;placeholder?:string;}
export function FormError({message}:{message?:string}) {
  // CTL-MT-21: no role, aria-live or empty-message placeholder.
  return message ? <div className="field-error">{message}</div> : null;
}
export function Loader({size=150,animation}:{size?:number;animation?:ReactNode}) {
  return <div className="legacy-loader" style={{width:size,height:size}}>{animation}</div>;
}
const optionValue=(option:Choice)=>option.value===undefined?'':String(option.value);
export function AutoComplete({field,label,error,disabled,id,placeholder,options,callback}:{options?:readonly Choice[];callback?:(value:unknown)=>void}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor={id}>{label}</label>}<Select<Choice> inputId={id} options={options} getOptionLabel={o=>o.text} getOptionValue={optionValue} value={options?.find(o=>o.value==field.value)} placeholder={placeholder||'Select'} isDisabled={disabled} onBlur={field.onBlur} className={error?'is-invalid':undefined} onChange={o=>{field.onChange(o?.value);callback?.(o?.value);}}/><FormError message={error}/></div>;
}
export function LogicMultiSelect({field,label,error,disabled,id,options,callback}:{options?:readonly Choice[];callback?:(option:Choice|null)=>void}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor={id}>{label}</label>}<Select<Choice> inputId={id} options={options} getOptionLabel={o=>o.text} getOptionValue={optionValue} value={options?.find(o=>o.value===field.value)??null} placeholder="Select" isDisabled={disabled} onBlur={field.onBlur} className={error?'is-invalid':undefined} onChange={o=>{field.onChange(o?.value??null);callback?.(o);}}/><FormError message={error}/></div>;
}
export function MultiSelect({field,label,error,disabled,options}:{options?:readonly Choice[]}&ControlProps) {
  const value=Array.isArray(field.value)?options?.filter(o=>field.value instanceof Array&&field.value.includes(o.value)):undefined;
  return <div className="mb-4">{label&&<label>{label}</label>}<Select<Choice,true> isMulti options={options} getOptionLabel={o=>o.text} getOptionValue={optionValue} value={value} placeholder="Start typing" isDisabled={disabled} onBlur={field.onBlur} onChange={rows=>field.onChange(rows.map(o=>o.value))}/><FormError message={error}/></div>;
}
export function RadioList({field,label,error,disabled,options,info,onChoice,onPositive,onNegative,animation}:{options?:readonly Choice[];info?:ReactNode;onChoice?:(option:Choice)=>void;onPositive?:()=>void;onNegative?:()=>void;animation?:ReactNode}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor={field.name}>{label}</label>}{info&&<p>{info}</p>}<div className="radio-options">{options?.length?options.map((o,index)=>{
    const id=`opt_${field.name}_${o.value}`;
    return <span key={index}><input id={id} type="radio" name={field.name} value={index} checked={o.value===field.value} disabled={disabled} onBlur={field.onBlur} onChange={()=>{onChoice?.(o);if(o.value===true)onPositive?.();if(o.value===false)onNegative?.();field.onChange(o.value);}}/><label htmlFor={id} className={disabled?'disabled':undefined}>{o.text}</label></span>;
  }):<Loader animation={animation}/>}</div><FormError message={error}/></div>;
}
export const yesNo:readonly Choice[]=[{text:'Yes',value:true},{text:'No',value:false}];
export function CheckboxArray({field,label,error,options,marketing=false}:{options:readonly Choice[];marketing?:boolean}&ControlProps) {
  const [values,setValues]=useState<unknown[]>(()=>Array.isArray(field.value)?field.value:[]);
  return <div className="mb-4">{label&&<label>{label}</label>}{options.map((o,index)=><div key={index}>{marketing&&<label className="d-block">{o.text}</label>}<input type="checkbox" id={`${field.name}-${o.value}`} checked={values.includes(o.value)} onChange={e=>{const next=e.currentTarget.checked?[...values,o.value]:values.filter(v=>v!==o.value);setValues(next);field.onChange(next);}}/><label htmlFor={`${field.name}-${o.value}`}>{marketing?'Yes (A clear YES or NO answer to be given)':o.text}</label></div>)}<FormError message={error}/></div>;
}
export function CheckboxLineArray(props:ControlProps) {return <CheckboxArray {...props} marketing options={[{text:'Direct Marketing',value:1},{text:'Third Party Marketing',value:2}]}/>;}
export function CheckboxLine({field,id,label,callback}:{callback?:()=>void}&ControlProps) {
  return <div className="mb-4"><input id={id} name={field.name} type="checkbox" checked={Boolean(field.value||false)} onBlur={field.onBlur} onChange={e=>{field.onChange(e.currentTarget.checked);callback?.();}}/><label htmlFor={id}>{label}</label></div>;
}
export function FormTextBox({field,label,error,disabled,placeholder,type,rows=4,maxLength,numberPattern,onChangeCallback}:{type?:'textarea';rows?:number;maxLength?:number;numberPattern?:RegExp;onChangeCallback?:()=>void}&ControlProps) {
  const props={name:field.name,value:String(field.value||''),disabled,placeholder:disabled?undefined:placeholder?.trim()||undefined,maxLength,onBlur:field.onBlur,className:`form-control${error?' is-invalid':''}`};
  return <div className="mb-4">{label&&<label htmlFor={field.name}>{label}</label>}{type==='textarea'?<textarea {...props} rows={rows} onChange={e=>field.onChange(normalizeTextarea(e.currentTarget.value,maxLength))}/>:<input {...props} type="text" onChange={e=>{onChangeCallback?.();const value=e.currentTarget.value;field.onChange(numberPattern?value.replace(numberPattern,''):value);}}/>}<FormError message={error}/></div>;
}
export function FormTextBoxNumber({field,label,error,errorShow,disabled,placeholder,maxLength,makeNull,callback}:{maxLength?:number;makeNull?:boolean;errorShow?:boolean;callback?:()=>void}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor="">{label}</label>}<input type="text" value={field.value?.toString()||''} disabled={disabled} placeholder={disabled?undefined:placeholder?.trim()||undefined} maxLength={maxLength} onBlur={field.onBlur} className={`form-control${error||errorShow?' is-invalid':''}`} onChange={e=>emitNumber(e.currentTarget.value,field.onChange,makeNull,callback)}/><FormError message={error}/></div>;
}
export function TextFieldCurrency({field,label,error,placeholder,blockDecimals,hideSeparator,callback}:{blockDecimals?:boolean;hideSeparator?:boolean;callback?:()=>void}&ControlProps) {
  const [internal,setInternal]=useState(()=>field.value?String(field.value):'');
  return <div className="mb-4">{label&&<label htmlFor={field.name}>{label}</label>}<div className="input-group"><span className="input-group-text">£</span><IMaskInput mask={Number} scale={blockDecimals?0:2} thousandsSeparator={hideSeparator?'':','} radix="." mapToRadix={['.']} value={internal} placeholder={placeholder} className="form-control" onAccept={(_,mask)=>{const value=mask.unmaskedValue;emitCurrency(value,internal,field.onChange,callback);setInternal(value);}}/></div><FormError message={error}/></div>;
}
export function TextFieldPercentage({field,label,error,placeholder,blockDecimals,hideSeparator,numberFormat,callback}:{blockDecimals?:boolean;hideSeparator?:boolean;numberFormat?:boolean;callback?:()=>void}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor={field.name}>{label}</label>}<div className="input-group"><span className="input-group-text">%</span><IMaskInput mask={Number} min={0} max={100} scale={blockDecimals?0:2} thousandsSeparator={hideSeparator?'':','} radix="." mapToRadix={['.']} value={field.value?String(field.value):undefined} placeholder={placeholder} className="form-control" onAccept={(v,mask)=>emitPercentage(String(v),mask.unmaskedValue,numberFormat,field.onChange,callback)}/></div><FormError message={error}/></div>;
}
export function FormSelect({field,label,error,disabled,options,numberFormat,placeholder}:{options?:readonly Choice[];numberFormat?:boolean}&ControlProps) {
  return <div className="mb-4">{label&&<label htmlFor="">{label}</label>}<select className={`form-select${error?' is-invalid':''}`} value={field.value===undefined?'':String(field.value)} disabled={disabled} onBlur={field.onBlur} onChange={e=>field.onChange(nativeSelectValue(e.currentTarget.selectedIndex,e.currentTarget.value,numberFormat))}><option value="">{placeholder||'Select...'}</option>{options?.map((o,index)=><option key={index} value={String(o.value)}>{o.text}</option>)}</select><FormError message={error}/></div>;
}
export function FormHourBox({field,error,callback,disabled,placeholder}:{callback?:()=>void}&ControlProps) {
  return <div className="mb-4 col-12"><input name={field.name} type="time" value={String(field.value||'')} disabled={disabled} placeholder={disabled?undefined:placeholder?.trim()||undefined} className="form-control" onChange={e=>{callback?.();field.onChange(e.currentTarget.value);}}/><FormError message={error}/></div>;
}
export function DetailCollapser({text,initialAdded,added,setValue,onClose,disabled,children}:{text:ReactNode;initialAdded?:boolean;added?:string;setValue?:(name:string,value:boolean)=>void;onClose?:()=>void;disabled?:boolean;children:ReactNode}) {
  const [open,setOpen]=useState(initialAdded);
  return <div className="border rounded p-4 mt-3"><div className="d-flex align-items-center justify-content-between"><div>{text}</div><Button type="button" disabled={disabled} aria-expanded={open} aria-controls="example-collapse-text" onClick={()=>{if(added)setValue?.(added,!open);if(open)onClose?.();setOpen(!open);}}>{open?'−':'+'}</Button></div><Collapse in={!!open}><div id="example-collapse-text">{children}</div></Collapse></div>;
}
