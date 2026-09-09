import type { RawForm, RouteState, Step, StepKey } from './types';
import type { Options } from './options';
import { ownIndemnityValue } from './options';

export const families = ['motortrade-roadrisks-s2-rtl','motortrade-roadrisks-rtl','motortrade-roadrisks-s2','motortrade-roadrisks'] as const;
export type Family = typeof families[number];
export const standardFamily: Family = 'motortrade-roadrisks';
export const steps: readonly Step[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
export function familyForPath(path: string): Family { return families.find(f => path.includes(f)) ?? standardFamily; }
export function stepKey(step: Step): StepKey { return `step${step}`; }
export function stepHref(family: Family, step: Step) { return `/${family}/steps/${stepKey(step)}`; }
export type NavigationCommand = {type:'scroll'} | {type:'setStep';step:Step} | {type:'navigate';href:string;state?:RouteState};

// EDGE-08A/08B: intentionally separate from reverse and header predicates.
export function nextAfterVehicles(data: RawForm, options: Options): 9|10 {
  const numericValue = ownIndemnityValue(options, data.coverIndemnityLimitOwnVehiclesID);
  return data.coverLevelID === 1 && numericValue && numericValue <= 15000 ? 9 : 10;
}
// EDGE-10A/10B: preserve this independent source expression.
export function previousBeforeCategories(data: RawForm, options: Options): 8|9 {
  const numericValue = ownIndemnityValue(options, data.coverIndemnityLimitOwnVehiclesID);
  return data.coverLevelID === 1 && numericValue && numericValue <= 15000 ? 9 : 8;
}
export function managerMove(step: Step, direction: 'next'|'previous', family: Family, data: RawForm, options: Options): NavigationCommand[] {
  let destination: Step;
  let state: RouteState | undefined;
  if (direction === 'next') {
    if (step === 14) return [];
    destination = step === 8 ? nextAfterVehicles(data, options) : (step+1) as Step;
  } else {
    if (step === 1) return [];
    destination = step === 10 ? previousBeforeCategories(data, options) : (step-1) as Step;
    if (step === 10 && destination === 8) state = {showVehicles:true};
  }
  return [{type:'scroll'},{type:'setStep',step:destination},{type:'navigate',href:stepHref(family,destination),state}];
}
// EDGE-SUM-06/08/OTHER: navigate precedes setStep, no origin stack.
export function summaryEdit(step: Step, family: Family): NavigationCommand[] {
  const state = step === 6 ? {showCards:true} : step === 8 ? {showVehicles:true} : undefined;
  return [{type:'navigate',href:stepHref(step===6||step===8?family:standardFamily,step),state},{type:'setStep',step}];
}
// CLR-006: return the ordered calls, not a claimed browser-history outcome.
export function routeGuard(routeStep: string | undefined, persisted: StepKey, family: Family): NavigationCommand[] {
  const calls: NavigationCommand[] = [];
  const mapped = steps.some(step => stepKey(step) === routeStep);
  if (!mapped) calls.push({type:'navigate',href:stepHref(family,1)});
  if (routeStep && routeStep !== persisted) calls.push({type:'navigate',href:`/${family}/steps/${persisted}`});
  return calls;
}
export function internalSurface(step: Step, state?: RouteState) {
  if (step === 6) return state?.driverLoading ? 'MTS-06L' : state?.editing ? 'MTS-06B' : state?.showCards ? 'MTS-06C' : 'MTS-06A';
  if (step === 8) return state?.vehicleLoading ? 'MTS-08L' : state?.showVehicles ? 'MTS-08B' : state?.editing ? 'MTS-08A' : 'MTS-08Ø';
  return `MTS-${String(step).padStart(2,'0')}`;
}
export function progress(step: number, data: RawForm) {
  const total = (data.coverLevelID === 1 || data.coverLevelID === 3) && (data.coverIndemnityLimitOwnVehiclesID as number) <= 6 && step > 8 ? 13 : 14;
  return {total, percent:Math.round(step/total*100), counter:`Step ${step} of 14`};
}
export function executeNavigation(commands: readonly NavigationCommand[], ports: {scroll:()=>void;setStep:(step:Step)=>void;navigate:(href:string,state?:RouteState)=>void}) {
  for (const command of commands) {
    if (command.type==='scroll') ports.scroll();
    else if (command.type==='setStep') ports.setStep(command.step);
    else ports.navigate(command.href,command.state);
  }
}
