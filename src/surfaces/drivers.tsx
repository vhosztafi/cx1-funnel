'use client';
import {useJourney} from '@/runtime/use-journey';
import {internalSurface} from '@/domain/navigation';
import {DriverPlan} from './driver-plan';
import {DriverDetails} from './driver-details';
import {DriverList} from './driver-list';
export function DriversSurface(){const journey=useJourney();const surface=internalSurface(6,journey.routeState);if(surface==='MTS-06L')return <div className="container container-body-md no-border-radius"><></></div>;if(surface==='MTS-06B')return <DriverDetails/>;if(surface==='MTS-06C')return <DriverList/>;return <DriverPlan/>;}
