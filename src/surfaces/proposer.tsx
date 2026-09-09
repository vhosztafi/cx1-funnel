'use client';
import {optionRows} from '@/domain/options';
import {useMemo,useState} from 'react';
import {useForm,useWatch,Controller,type Resolver} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Collapse from 'react-bootstrap/Collapse';
import {proposerDefinition as definition} from '@/contracts/questions';
import {proposerSchema,proposerDefaults,proposerSubmit,proposerLayout,policyDateBounds} from '@/domain/proposer';
import {CheckboxLine,CheckboxLineArray,CheckboxArray,FormError,LogicMultiSelect,FormTextBox,RadioList,yesNo,type Choice} from '@/components/controls';
import {DateControl} from '@/components/date-control';
import {AddressControl} from '@/components/address-control';
import {Navigator} from '@/components/navigator';
import {useJourney} from '@/runtime/use-journey';

import {unresolvedAddress} from '@/runtime/address-input';
export function ProposerSurface() {
  const journey=useJourney();const raw=journey.snapshot.formData;
  const [now]=useState(()=>journey.host.now?.()??new Date());
  const backofficeRaw=sessionStorage.getItem('isBackoffice');const backoffice=backofficeRaw?!!JSON.parse(backofficeRaw).state?.backoffice:false;
  const context={raw,rtl:journey.rtl,backoffice,now,postcodePattern:journey.host.postcodePattern};
  const defaults=useMemo(()=>proposerDefaults(raw),[raw]);
  // Raw defaults remain broader than Yup's accepted output, including null/undefined.
  const methods=useForm<Record<string,unknown>>({defaultValues:defaults,resolver:yupResolver(proposerSchema(context)) as unknown as Resolver<Record<string,unknown>>});
  const values=useWatch({control:methods.control});const errors=methods.formState.errors;
  const layout=proposerLayout(values.proposerCompanyTypeId);const disabled=!!raw.isProposerDetailsDisabled;
  const bounds=policyDateBounds(context);
  function renderField(index:number,label?:string,primary=false) {
    const q=definition.questions[index] as {path:string;control:string;label:string;options?:string;id?:string;maxLength?:number};
    return <Controller key={`${index}-${primary}`} name={q.path} control={methods.control} render={({field,fieldState})=>{
      const props={field,label:label??q.label,error:fieldState.error?.message,id:q.id};
      if(q.control==='checkbox')return <><CheckboxLine {...props}/>{fieldState.error&&<div className="mb-4"><FormError message={fieldState.error.message}/></div>}</>;
      if(q.control==='marketing')return <CheckboxLineArray {...props}/>;
      if(q.control==='checkboxArray')return <CheckboxArray {...props} options={optionRows(journey.options,q.options)??[]}/>;
      if(q.control==='date')return <DateControl {...props} label={raw.isMta?'When do you want the adjustment to start?':q.label} minDate={bounds.controlMin} maxDate={bounds.controlMax}/>;
      if(q.control==='radio')return <RadioList {...props} options={yesNo} disabled={!!raw.isMta}/>;
      if(q.control==='logic')return <LogicMultiSelect {...props} options={optionRows(journey.options,q.options)} disabled={index===6?disabled:undefined} callback={index===6?(option:Choice|null)=>field.onChange(option?.value):undefined}/>;
      const phone=index===12||index===13;
      const sibling=index===12?'proposerMobileNumber':'proposerTelephoneNumber';
      return <FormTextBox {...props} disabled={[6,7,8,10,12,13].includes(index)?disabled:undefined} maxLength={index===10?(primary?50:undefined):q.maxLength} numberPattern={phone?journey.host.textNumberPattern:undefined} onChangeCallback={phone?()=>{if(errors[sibling])void methods.trigger(sibling);}:undefined}/>;
    }}/>;
  }
  const contact=(primary=false)=><>{renderField(6,primary?'Title (Primary Contact):':undefined,primary)}{renderField(7,primary?'First Name (Primary Contact):':undefined,primary)}{renderField(8,primary?'Surname (Primary Contact):':undefined,primary)}</>;
  const addressFields=definition.questions.slice(15).map(q=>({path:q.path,label:q.label,maxLength:50}));
  const addressErrors=Object.fromEntries(Object.entries(errors).map(([key,error])=>[key,error?.message]));
  return <div className="container container-body-md"><form noValidate onSubmit={methods.handleSubmit(values=>{journey.form.setData(proposerSubmit(values,journey.rtl));journey.next(1);})}>
    <h3>{definition.heading}</h3><label className="fw-bold">{definition.consentExplanation}</label>
    {journey.rtl&&<>{renderField(0)}{renderField(1)}{Array.isArray(values.marketingConsent)&&values.marketingConsent.length>0&&renderField(2)}</>}
    <label className="fw-bold">{definition.instruction}</label>{renderField(3)}{renderField(4)}{renderField(5)}
    {!!values.proposerCompanyTypeId&&<><h4>Proposer Details</h4>
      <Collapse in={layout==='sole'}><div>{contact()}{renderField(9)}</div></Collapse>
      <Collapse in={layout==='company'}><div>{renderField(10,'Company Name:',true)}{renderField(9)}{contact(true)}</div></Collapse>
      <Collapse in={layout==='partnership'}><div>{renderField(10,'Partnership Name:')}{renderField(9)}{contact(true)}</div></Collapse>
      {renderField(11)}{renderField(12)}{renderField(13)}
      <AddressControl variant="proposer" postcodePath="proposerPostcode" showAddressPath="proposershowAddress" label="Postcode:" placeholder="eg. SL4 1PD" manualText="Enter Manually" fields={addressFields} values={values} defaults={defaults} setValue={(path,value)=>methods.setValue(path,value)} errors={addressErrors} setError={(path,message)=>methods.setError(path,{message})} clearError={path=>methods.clearErrors(path)} trigger={path=>{void methods.trigger(path);}} ports={journey.host.address??unresolvedAddress} disabled={disabled} animation={journey.host.loadingAnimation}/>
    </>}
    <Navigator step={journey.snapshot.step} previous={()=>journey.previous(1)}/>
  </form></div>;
}
