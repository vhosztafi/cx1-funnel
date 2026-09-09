'use client';
import {Controller,useForm,useFieldArray,useWatch,type Resolver} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AutoComplete,TextFieldPercentage,FormError} from '@/components/controls';
import {Navigator} from '@/components/navigator';
import {useJourney} from '@/runtime/use-journey';
import {looseOption} from '@/domain/options';
import {occupationsDefinition as definition,occupationsDefaults,occupationsSchema,appendOccupation,removeOccupation,type OccupationsForm} from '@/domain/occupations';
export function OccupationsSurface(){
  const journey=useJourney();const options=journey.options.occupations??[];
  const methods=useForm<OccupationsForm>({defaultValues:occupationsDefaults(journey.snapshot.formData),resolver:yupResolver(occupationsSchema(options)) as unknown as Resolver<OccupationsForm>});
  const {fields,replace}=useFieldArray({control:methods.control,name:'occupations'});const rows=useWatch({control:methods.control,name:'occupations'});const error=methods.formState.errors.occupations;
  return <div className="container container-body-md"><form noValidate onSubmit={methods.handleSubmit(data=>{journey.form.setData({...data});journey.next(4);})}><h3>{definition.heading}</h3>
    {fields.map((item,index)=>{const title=looseOption(options,rows[index]?.occupationId)?.text;return <div key={item.id} style={index?{borderTop:'2px solid #f4f4f4',paddingTop:16}:undefined}><div className="d-flex justify-content-between align-items-center"><h4>Occupation {index+1}{title?`: ${title}`:''}</h4>{index>0&&<button type="button" className="btn btn-danger d-flex align-items-center justify-content-center" style={{width:46,height:46}} onClick={()=>replace(removeOccupation(methods.getValues('occupations'),index))}>X</button>}</div>
      <Controller name={`occupations.${index}.occupationId`} control={methods.control} render={({field,fieldState})=><AutoComplete field={field} id="businessActivity" placeholder="Start typing" options={options} error={fieldState.error?.message}/>}/>
      {rows.length>1&&<Controller name={`occupations.${index}.percentage`} control={methods.control} render={({field,fieldState})=><TextFieldPercentage field={field} label="Occupation Percentage: " numberFormat error={fieldState.error?.message} callback={()=>{if(error)void methods.trigger('occupations');}}/>}/>} 
    </div>;})}
    {error?.message&&<div className="mb-4"><FormError message={error.message}/></div>}{error?.root&&<div className="mb-4"><FormError message={error.root.message}/></div>}
    {fields.length<5&&<button type="button" className="btn btn-primary" onClick={()=>replace(appendOccupation(methods.getValues('occupations')))}>{definition.add}</button>}
    <div style={{borderTop:'2px solid #f4f4f4'}}/><Navigator step={journey.snapshot.step} prev={()=>journey.form.setData({...methods.getValues()})} previous={()=>journey.previous(4)}/>
  </form></div>;
}
