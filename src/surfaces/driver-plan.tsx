'use client';
import {useForm,useWatch,Controller,type Resolver} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AutoComplete,FormTextBoxNumber} from '@/components/controls';
import {Navigator} from '@/components/navigator';
import {optionRows} from '@/domain/options';
import {driverPlanDefinition as definition,driverPlanDefaults,driverPlanSchema,submitDriverPlan,anyDriverFields} from '@/domain/driver-workflow';
import {useJourney} from '@/runtime/use-journey';
import {driverPorts} from '@/runtime/driver-ports';
export function DriverPlan(){const journey=useJourney();const raw=journey.snapshot.formData;const methods=useForm<Record<string,unknown>>({defaultValues:driverPlanDefaults(raw),resolver:yupResolver(driverPlanSchema()) as unknown as Resolver<Record<string,unknown>>});const plan=useWatch({control:methods.control,name:'driverPlanId'});
  const render=(index:number)=>{const q=definition.questions[index] as {path:string;label:string;id?:string;options?:string;control?:string};return <Controller key={q.path} name={q.path} control={methods.control} render={({field,fieldState})=>q.control==='number'?<FormTextBoxNumber field={field} label={q.label} error={fieldState.error?.message}/>:<AutoComplete field={field} label={q.label} id={q.id} options={optionRows(journey.options,q.options)} error={fieldState.error?.message}/>}/>;};
  return <div className="container container-body-md"><form noValidate onSubmit={methods.handleSubmit(data=>submitDriverPlan(data,raw,driverPorts(journey,true)))}><h3>{definition.heading}</h3>{render(0)}
    {anyDriverFields(plan)&&<><div className="driver-instruction"><p>{definition.instructionStart}</p>{journey.host.driverInstructionBody}<p>{definition.instructionEnd}</p></div>{definition.questions.slice(1).map((_,index)=>render(index+1))}</>}
    <Navigator step={journey.snapshot.step} prev={()=>journey.form.setData(methods.getValues())} previous={()=>journey.previous(6)}/>
  </form></div>;
}
