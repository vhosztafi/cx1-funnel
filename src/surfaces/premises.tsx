'use client';
import {Controller,useForm,useFieldArray,useWatch,type Resolver} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogicMultiSelect,FormTextBoxNumber,RadioList,yesNo} from '@/components/controls';
import {AddressControl} from '@/components/address-control';
import {Navigator} from '@/components/navigator';
import {useJourney} from '@/runtime/use-journey';
import {unresolvedAddress} from '@/runtime/address-input';
import {premisesDefinition as definition,premisesDefaults,premisesSchema,premiseBranch,premiseSelection,newPremise,type PremisesForm} from '@/domain/premises';

export function PremisesSurface(){
  const journey=useJourney();const methods=useForm<PremisesForm>({defaultValues:premisesDefaults(journey.snapshot.formData),resolver:yupResolver(premisesSchema(journey.host.postcodePattern)) as unknown as Resolver<PremisesForm>});
  const {fields,append,remove}=useFieldArray({control:methods.control,name:'tradingPremises'});const values=useWatch({control:methods.control});
  const q=definition.rowQuestions;
  return <div className="container container-body-md"><form noValidate onSubmit={methods.handleSubmit(data=>{journey.form.setData({...data});journey.next(2);})}><h3>{definition.heading}</h3>
    <Controller name="tradingFromId" control={methods.control} render={({field,fieldState})=><LogicMultiSelect field={field} label={definition.tradingFrom.label} id="Company" options={journey.options.tradingFroms} error={fieldState.error?.message} callback={option=>{const action=premiseSelection(option?.value,fields.length);if(action==='remove-all')remove();if(action==='append-one')append(newPremise());}}/>}/>
    {premiseBranch(values.tradingFromId)&&<>{fields.map((item,index)=>{
      const row=values.tradingPremises?.[index]??{};const errors=methods.formState.errors.tradingPremises?.[index];
      const addressFields=q.slice(4).map(field=>({path:field.path,label:field.label,maxLength:50}));
      return <div key={item.id}>{index>0&&<hr/>}<div className="d-flex justify-content-between align-items-center"><h4>Trading Premise {index+1}</h4>{index>0&&<button className="btn btn-danger" style={{width:46,height:46}} type="button" onClick={()=>remove(index)}>X</button>}</div>
        <AddressControl variant="premise" label={q[0].label} postcodePath="tradingPremisePostcode" showAddressPath="showAddress" placeholder="eg. SL4 1PD" manualText="Enter Manually" fields={addressFields} values={row} defaults={item as unknown as Record<string,unknown>} setValue={(path,value)=>methods.setValue(`tradingPremises.${index}.${path}` as Parameters<typeof methods.setValue>[0],value)} errors={Object.fromEntries(Object.entries(errors??{}).map(([key,error])=>[key,typeof error==='object'&&error&&'message' in error?String(error.message):undefined]))} setError={(path,message)=>methods.setError(`tradingPremises.${index}.${path}` as Parameters<typeof methods.setError>[0],{message})} clearError={path=>methods.clearErrors(`tradingPremises.${index}.${path}` as Parameters<typeof methods.clearErrors>[0])} trigger={path=>{void methods.trigger(`tradingPremises.${index}.${path}` as Parameters<typeof methods.trigger>[0]);}} ports={journey.host.address??unresolvedAddress} animation={journey.host.loadingAnimation}/>
        <Controller name={`tradingPremises.${index}.tradingPremiseTypeId`} control={methods.control} render={({field,fieldState})=><LogicMultiSelect field={field} label={q[1].label} id="Company" options={journey.options.tradingPremiseTypes} error={fieldState.error?.message}/>}/>
        <Controller name={`tradingPremises.${index}.tradingPremiseYearsTrading`} control={methods.control} render={({field,fieldState})=><FormTextBoxNumber field={field} label={q[2].label} maxLength={4} error={fieldState.error?.message}/>}/>
        <Controller name={`tradingPremises.${index}.tradingPremiseIsSharedWorksite`} control={methods.control} render={({field,fieldState})=><RadioList field={field} label={q[3].label} options={yesNo} error={fieldState.error?.message}/>}/>
      </div>;
    })}{fields.length<5&&<button type="button" className="btn btn-primary" onClick={()=>append(newPremise())}>Add another trading premises</button>}</>}
    {/* Navigation owning Document 02: unvalidated Back saves current values. */}
    <Navigator step={journey.snapshot.step} prev={()=>journey.form.setData({...methods.getValues()})} previous={()=>journey.previous(2)}/>
  </form></div>;
}
