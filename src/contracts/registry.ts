import * as yup from 'yup';
import { proposerDefinition } from './questions';
import { premisesDefinition } from '@/domain/premises';
import { businessDefinition } from '@/domain/business';
import { occupationsDefinition } from '@/domain/occupations';
import { coverDefinition } from '@/domain/cover';
import { driverPlanDefinition } from '@/domain/driver-workflow';
import { driverHistoryDefinitions } from '@/domain/driver-histories';
import { youngBandDefinitions } from '@/domain/driver-rules';
import { tradePlatesDefinition } from '@/domain/trade-plates';
import { additionalDefinition } from '@/domain/additional-information';
import driver from './driver/questions.json';
import vehicle from './vehicle/questions.json';
import specifiedVehicle from './vehicle/specified-questions.json';
import { summaryDefinition } from './summary';
import categories from './vehicle-types/categories.json';
import extras from './extras/questions.json';
import declaration from './declaration/pairs.json';
import { optionCollections } from '@/domain/options';

export type JsonDefinitionValue =
  | null
  | boolean
  | number
  | string
  | readonly JsonDefinitionValue[]
  | { [key: string]: JsonDefinitionValue };
export interface VersionedDefinition {
  version: 1;
  [key: string]: JsonDefinitionValue;
}
const ownerPattern =
  /^(?:MTS-\d{2}(?:[ABCLØ]|-[QRU]\d{2})?|(?:CTL|OPT|AUD)-MT-\d{2}|SHR-MT-R\d{2}|ROOT-\d{3}|TERM-\d{3}|EDGE-[A-Z0-9Ø-]+)$/;
function validDefinitionValue(value: unknown): boolean {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return true;
  if (typeof value === 'number') return Number.isFinite(value);
  if (Array.isArray(value)) return value.every(validDefinitionValue);
  if (typeof value !== 'object' || Object.getPrototypeOf(value) !== Object.prototype) return false;
  for (const [key, child] of Object.entries(value)) {
    if (!validDefinitionValue(child)) return false;
    if (key === 'owner' && (typeof child !== 'string' || !ownerPattern.test(child))) return false;
    if (
      key === 'options' &&
      typeof child === 'string' &&
      !(optionCollections as readonly string[]).includes(child)
    )
      return false;
  }
  return true;
}
/** Engineering definition validation only; it never validates or casts raw form data. */
export const definitionSchema = yup
  .object({ version: yup.number().oneOf([1]).required() })
  .strict()
  .test('json-definition', 'Invalid versioned definition', validDefinitionValue);
export const definitionRegistry = {
  proposer: proposerDefinition,
  premises: premisesDefinition,
  business: businessDefinition,
  occupations: occupationsDefinition,
  cover: coverDefinition,
  driverPlan: driverPlanDefinition,
  driver,
  driverHistories: driverHistoryDefinitions,
  youngBands: youngBandDefinitions,
  tradePlates: tradePlatesDefinition,
  vehicle,
  specifiedVehicle,
  summary: summaryDefinition,
  categories,
  extras,
  declaration,
  additional: additionalDefinition,
};

export interface RegisteredQuestion {
  owner: string;
  path: string;
  label?: string;
  control?: string;
  options?: string;
  [key: string]: unknown;
}
/** A lookup index, not a synthesized order: surfaces retain their owning arrays. */
export function indexQuestionDefinitions(
  definitions: unknown,
): ReadonlyMap<string, RegisteredQuestion> {
  const result = new Map<string, RegisteredQuestion>();
  const visit = (value: unknown) => {
    if (!value || typeof value !== 'object') return;
    const row = value as Record<string, unknown>;
    if (
      typeof row.owner === 'string' &&
      /^MTS-\d{2}-Q\d{2}$/.test(row.owner) &&
      typeof row.path === 'string'
    ) {
      if (result.has(row.owner)) throw new Error(`Duplicate question owner ${row.owner}`);
      result.set(row.owner, row as RegisteredQuestion);
    }
    Object.values(value).forEach(visit);
  };
  visit(definitions);
  return result;
}
export const questionRegistry = indexQuestionDefinitions(definitionRegistry);
