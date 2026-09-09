import * as yup from 'yup';
import definition from '@/contracts/declaration/pairs.json';
import type { RawForm } from './types';
export { definition as declarationDefinition };
export function declarationDefaults(raw: RawForm) {
  return Object.fromEntries(
    definition.pairs
      .flatMap((pair) => [pair.path, pair.detail.path])
      .filter((key) => raw[key] !== null)
      .map((key) => [key, raw[key]]),
  );
}
export function declarationSchema() {
  return yup.object(
    Object.fromEntries(
      definition.pairs.flatMap((pair) => [
        [pair.path, yup.boolean().required().label('This')],
        [
          pair.detail.path,
          yup.string().when(pair.path, {
            is: true,
            then: (s) => s.required().label('This'),
            otherwise: (s) => s.notRequired(),
          }),
        ],
      ]),
    ),
  );
}
export function declarationSummary(raw: RawForm) {
  return definition.pairs
    .filter((pair) => raw[pair.path])
    .map((pair) => ({ label: pair.label, detail: raw[pair.detail.path] }));
}
