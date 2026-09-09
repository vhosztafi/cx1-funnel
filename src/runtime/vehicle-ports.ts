import {currencyFormat} from '@/domain/currency';
import {vehicleParameters,type VehicleValidators} from '@/domain/vehicle-rules';
import {vehicleDetailSchema} from '@/domain/vehicle-schema';
import type {useJourney} from './use-journey';
import type {RawForm,RawVehicle} from '@/domain/types';
export function readVehicleValidators():VehicleValidators{const read=(name:string)=>{const value=sessionStorage.getItem(name);return value?JSON.parse(value).state:{};};return {abi:read('abiDetail'),gvw:read('gvwDetail')};}
export function validateStoredVehicle(journey:ReturnType<typeof useJourney>,vehicle:RawVehicle,index:number,raw:RawForm){return vehicleDetailSchema({raw,parameters:vehicleParameters(raw,journey.options,readVehicleValidators()),manualEnter:!!vehicle.isManualEntry,editingIndex:index,now:journey.host.now?.()??new Date(),currencyFormat}).validate(vehicle);}
export function vehiclePorts(journey:ReturnType<typeof useJourney>){return {save:journey.form.setData,scroll:()=>window.scrollTo(0,0),loading:journey.setLoading,route:(state:import('@/domain/types').RouteState)=>journey.internal(state,8),delay:(ms:number)=>new Promise<void>(resolve=>setTimeout(resolve,ms)),validate:(vehicle:RawVehicle,index:number,raw:RawForm)=>validateStoredVehicle(journey,vehicle,index,raw)};}
