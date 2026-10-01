import type { RawForm } from '@/domain/types';
import type { Options } from '@/domain/options';
import { terminalArgument, terminalSubmitData } from '@/domain/terminal';

export const DEMO_ADMIN_ORIGIN = 'https://cx1-admin-dev.gyongyos.co.uk';
export const DEMO_CLIENT_ID = '4d5690a9-3120-4ef2-8798-787eae64cdae';
export const DEMO_RELATIONSHIP_ID = '40196fa6-7a0e-4143-b4e3-dd758542739c';
export const DEMO_PRODUCT_CODE = 'motor-trade-road-risks';

export type DemoQuoteHandoff = {
  type: 'cx1:quote-handoff';
  version: 1;
  key: string;
  proposal: Record<string, unknown>;
  snapshot: string;
};

function bounded(value: unknown, maximum: number) {
  return typeof value === 'string' && value.trim() && value.trim().length <= maximum ? value.trim() : undefined;
}
function date(value: unknown) {
  const text = value instanceof Date ? value.toISOString().slice(0, 10) : value;
  return typeof text === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(text) && !Number.isNaN(Date.parse(text)) ? text : undefined;
}
function amount(value: unknown) {
  if (value === null || value === undefined || value === '') return undefined;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 && number < 1e13 ? number.toFixed(2) : undefined;
}

// The back-office draft schema has a separate question/reference catalogue.
// Transfer fields with unambiguous compatible meaning here; retain the exact
// terminal argument in the quote's source file for the remaining review work.
export function demoQuoteProposal(raw: RawForm, startTime: unknown): Record<string, unknown> {
  const insured: Record<string, unknown> = {};
  const firstName = bounded(raw.proposerName, 100);
  const surname = bounded(raw.proposerSurname, 100);
  if (firstName) insured.firstName = firstName;
  if (surname) insured.surname = surname;
  if (firstName && surname) insured.proposerNames = [`${firstName} ${surname}`];
  const contact: Record<string, unknown> = {};
  const email = bounded(raw.proposerEmail, 254);
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) contact.email = email;
  const telephone = bounded(raw.proposerTelephoneNumber, 50);
  if (telephone) contact.telephone = telephone;
  if (Object.keys(contact).length) insured.contact = contact;
  const house = bounded(raw.proposerHouseNumber, 50);
  const street = bounded(raw.proposerStreet, 100);
  const town = bounded(raw.proposerTown, 100);
  const postcode = bounded(raw.proposerPostcode, 10)?.toUpperCase();
  if (house && street && town && postcode && /^[A-Z0-9 ]{5,10}$/.test(postcode))
    insured.address = { line1: `${house} ${street}`, town, postcode, country: 'GB' };
  const business: Record<string, unknown> = {};
  const startedOn = date(raw.businessStartedDate);
  if (startedOn) business.startedOn = startedOn;
  const turnover = amount(raw.businessAnnualTurnover);
  if (turnover) business.turnover = turnover;
  const wageRoll = amount(raw.businessAnnualWageRoll);
  if (wageRoll) business.wageRoll = wageRoll;
  const termIntent: Record<string, unknown> = { kind: raw.isShortTerm === true ? 'short-period' : 'annual', timeZone: 'Europe/London' };
  const localStartDate = date(raw.proposerPolicyStartDate);
  if (localStartDate) termIntent.localStartDate = localStartDate;
  if (typeof startTime === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(startTime)) termIntent.localStartTime = startTime;
  return {
    schemaVersion: '1.0', productCode: DEMO_PRODUCT_CODE,
    ...(Object.keys(insured).length ? { insured } : {}),
    termIntent,
    ...(Object.keys(business).length ? { risk: { business } } : {}),
  };
}

export function demoQuoteHandoff(raw: RawForm, options: Options, startTime: unknown, key: string): DemoQuoteHandoff {
  const submitData = terminalSubmitData(raw, startTime);
  const argument = terminalArgument(submitData, options, { kind: 'ordinary' });
  const snapshot = JSON.stringify({ format: 'cx1-demo-funnel-v1', submittedAt: new Date().toISOString(), rawAnswers: submitData, argument }, null, 2);
  if (new TextEncoder().encode(snapshot).length > 1024 * 1024) throw new Error('The demo journey is too large to transfer.');
  return { type: 'cx1:quote-handoff', version: 1, key, proposal: demoQuoteProposal(raw, startTime), snapshot };
}
