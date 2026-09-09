'use client';
import {useEffect,useState,useCallback,type ReactNode} from 'react';
import {BrowserRouter,Routes,Route,Outlet,useLocation,useNavigate,useParams} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Home} from '@/components/home';
import {Loader} from '@/components/controls';
import {createSession} from '@/domain/session';
import {families,familyForPath,progress,routeGuard,executeNavigation,steps,stepKey} from '@/domain/navigation';
import {populate,authPresenceGuard,returnToDashboard} from '@/domain/entry';
import {hydrateOptions} from '@/domain/option-cache';
import {RuntimeContext,useRuntime,useFormSnapshot,type Runtime,type HostInputs} from './context';
import type {Options} from '@/domain/options';
import {TradePlatesSurface} from '@/surfaces/trade-plates';
import {VehiclesSurface,SpecifiedVehicleSurface} from '@/surfaces/vehicles';
import {DriversSurface} from '@/surfaces/drivers';
import {CoverSurface} from '@/surfaces/cover';
import {OccupationsSurface} from '@/surfaces/occupations';
import {BusinessSurface} from '@/surfaces/business';
import {PremisesSurface} from '@/surfaces/premises';
import {ProposerSurface} from '@/surfaces/proposer';

declare global {interface Window {__CX1_HOST_INPUTS__?:HostInputs;}}
const pending=<T,>():Promise<T>=>new Promise(()=>{});
export function ClientApplication() {
  const [form,setForm]=useState<Runtime['form']>();
  const [host,setHost]=useState<HostInputs>({});
  const [options,setOptions]=useState<Options>({});
  const [loading,setLoading]=useState(false);
  const mergeOptions=useCallback((data:Options)=>setOptions(previous=>({...previous,...data})),[]);
  useEffect(()=>{setForm(createSession(window.sessionStorage));setHost(window.__CX1_HOST_INPUTS__??{});},[]);
  if(!form)return null;
  return <RuntimeContext.Provider value={{form,host,options,loading,setLoading,surfaces:{1:ProposerSurface,2:PremisesSurface,3:BusinessSurface,4:OccupationsSurface,5:CoverSurface,6:DriversSurface,7:TradePlatesSurface,8:VehiclesSurface,9:SpecifiedVehicleSurface}}}><BrowserRouter useTransitions={false}><OptionContainer merge={mergeOptions}><ApplicationRoutes/></OptionContainer></BrowserRouter></RuntimeContext.Provider>;
}
function OptionContainer({children,merge}:{children:ReactNode;merge:(data:Options)=>void}) {
  const {pathname}=useLocation();const {host}=useRuntime();const [fetched,setFetched]=useState(false);const [loading,setLoading]=useState(false);
  useEffect(()=>{void hydrateOptions(pathname,fetched,{storage:sessionStorage,merge,setLoading,setFetching:()=>{},markFetched:()=>setFetched(true),delay:ms=>new Promise(resolve=>setTimeout(resolve,ms)),consume:host.consumeOptions??pending}).catch(()=>{});},[pathname,fetched,host.consumeOptions,merge]);
  return <div className="position-relative">{children}{loading&&<div className="lookup-overlay"><Loader animation={host.loadingAnimation}/></div>}</div>;
}
export function ApplicationRoutes() {
  const {host}=useRuntime();
  return <Routes><Route path="/" element={<Home logo={host.logo}/>}/>{families.flatMap(family=>[
    <Route key={`${family}-direct`} path={`/${family}`} element={<Container/>}><Route index element={<Controller/>}/><Route path="steps/:step" element={<Controller/>}/></Route>,
    <Route key={`${family}-broker`} path={`/broker/buy/${family}`} element={<Container/>}><Route index element={<Controller/>}/><Route path=":guid" element={<Populate/>}/><Route path="steps/:step" element={<Controller/>}/></Route>,
    // CLR-002: preserve parent and declared children without supplying an Outlet.
    <Route key={`${family}-bo`} path={`/back-office/buy/${family}`} element={<Populate/>}><Route index element={<Controller/>}/><Route path=":guid" element={<Populate/>}/><Route path="steps/:step" element={<Controller/>}/></Route>,
    <Route key={`${family}-new`} path={`/back-office/new-quote/buy/${family}`} element={<Container/>}><Route index element={<Controller/>}/><Route path=":brokerId/:brokerName" element={<Populate/>}/><Route path="steps/:step" element={<Controller/>}/></Route>,
    <Route key={`${family}-client`} path={`/back-office/new-quote-client/buy/${family}`} element={<Container/>}><Route index element={<Controller/>}/><Route path=":brokerId/:brokerName/:clientId" element={<Populate/>}/><Route path=":brokerId/:brokerName/:clientId/:guid" element={<Populate/>}/><Route path="steps/:step" element={<Controller/>}/></Route>,
    <Route key={`${family}-alias`} path="/motortrade/buy" element={<Container/>}><Route index element={<Controller/>}/><Route path=":step" element={<Controller/>}/></Route>,
  ])}<Route path="*" element={null}/></Routes>;
}
function readBackoffice(){const raw=sessionStorage.getItem('isBackoffice');return raw?!!JSON.parse(raw).state?.backoffice:false;}
function Container() {
  const {host,loading}=useRuntime();const snapshot=useFormSnapshot();const derived=progress(snapshot.step,snapshot.formData);const backoffice=readBackoffice();
  return <><header className="container-fluid"><div className="d-flex align-items-center mt-3"><div className="logo"><img src={host.logo} alt="CG logo"/></div></div><div>{backoffice?host.backofficeRibbon:host.brokerRibbon}<a href={backoffice?host.backofficeDashboard:host.brokerDashboard} onClick={()=>returnToDashboard(sessionStorage)}>Return to Dashboard</a></div><ProgressBar now={derived.percent} className="mx-n3 mx-sm-0"/></header><Outlet/>{loading&&<div className="lookup-overlay"><Loader animation={host.loadingAnimation}/></div>}</>;
}
function Controller() {
  const {step}=useParams();const location=useLocation();const navigate=useNavigate();const {form,host,setLoading,surfaces}=useRuntime();const snapshot=useFormSnapshot();const family=familyForPath(location.pathname);
  useEffect(()=>{
    if(!authPresenceGuard(sessionStorage,()=>setLoading(true),()=>{if(host.brokerDashboard)window.location.assign(host.brokerDashboard);} ))return;
    executeNavigation(routeGuard(step,snapshot.stepAsEnum,family),{scroll:()=>{},setStep:form.setStep,navigate:(href,state)=>navigate(href,{state})});
  },[step,snapshot.stepAsEnum,family,navigate,form,host.brokerDashboard,setLoading]);
  const numeric=steps.find(s=>stepKey(s)===step);const Surface=numeric?surfaces[numeric]:undefined;
  return <><div className="container container-body-md">{progress(snapshot.step,snapshot.formData).counter}</div>{Surface&&<Surface/>}</>;
}
function Populate() {
  const params=useParams();const {pathname}=useLocation();const navigate=useNavigate();const {host,form}=useRuntime();
  useEffect(()=>{
    const write=(key:string,state:Record<string,unknown>)=>sessionStorage.setItem(key,JSON.stringify({state,version:0}));
    void populate({...params,referrer:document.referrer},familyForPath(pathname),{setClient:clientId=>write('clientId',{clientId}),setBroker:(brokerId,brokerName)=>write('brokerDetail',{brokerId,brokerName}),setBackoffice:backoffice=>write('isBackoffice',{backoffice}),setGuid:guid=>write('brokerGuid',{guid}),setData:form.setData,consume:host.consumePopulation??pending,navigate:(href,state)=>navigate(href,{state})}).catch(()=>{});
  },[params,pathname,form,host.consumePopulation,navigate]);
  return <Loader animation={host.loadingAnimation}/>;
}
