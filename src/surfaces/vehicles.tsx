'use client';
import {useJourney} from '@/runtime/use-journey';
import {internalSurface} from '@/domain/navigation';
import {VehicleDetails} from './vehicle-details';
import {VehicleList} from './vehicle-list';
export function VehiclesSurface(){const journey=useJourney();const surface=internalSurface(8,journey.routeState);if(surface==='MTS-08L'||surface==='MTS-08Ø')return <div className="container container-body-md"/>;if(surface==='MTS-08B')return <VehicleList/>;return <VehicleDetails key={journey.routeState?.editingVehicle}/>;}
export function SpecifiedVehicleSurface(){return <VehicleDetails specified/>;}
