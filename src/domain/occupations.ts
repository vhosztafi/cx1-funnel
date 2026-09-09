import * as yup from 'yup';
import type { RawForm } from './types';
import type { OptionItem } from './options';
export interface Occupation {
  occupationId?: number | string | null;
  percentage?: number | string | null;
  type?: string;
}
export interface OccupationsForm {
  occupations: Occupation[];
}
export const occupationsDefinition = {
  version: 1,
  owner: 'MTS-04',
  heading: 'Occupation',
  questions: [
    {
      owner: 'MTS-04-Q01',
      path: 'occupationId',
      id: 'businessActivity',
      placeholder: 'Start typing',
      options: 'mtOccupations',
    },
    {
      owner: 'MTS-04-Q02',
      path: 'percentage',
      label: 'Occupation Percentage: ',
      numberFormat: true,
    },
  ],
  add: 'Add another occupation',
} as const;
export function occupationsDefaults(raw: RawForm): OccupationsForm {
  return { occupations: raw.occupations || [{ occupationId: '', percentage: 100 }] };
}
export function appendOccupation(rows: Occupation[]): Occupation[] {
  return [
    ...(rows.length === 1 ? [{ occupationId: rows[0].occupationId, percentage: undefined }] : rows),
    { occupationId: undefined, percentage: undefined },
  ];
}
export function removeOccupation(rows: Occupation[], index: number): Occupation[] {
  const remaining = rows.filter((_, i) => i !== index);
  return remaining.length === 1 ? [{ ...remaining[0], percentage: 100 }] : remaining;
}
// MTS-04-R02/R04: preserve raw SameValueZero uniqueness, addition and non-returned
// createError callbacks. CLR-008 remains open for legacy failing-path runtime results.
export function uniqueOccupations(this: yup.TestContext, rows: Occupation[] | undefined) {
  if (rows && new Set(rows.map((row) => row.occupationId)).size !== rows.length) {
    this.createError({ message: 'Some occupations have been chosen multiple times.' });
  } else return true;
}
export function sumOccupations(this: yup.TestContext, rows: Occupation[] | undefined) {
  let total: unknown = 0;
  for (const row of rows ?? []) total = (total as number) + (row.percentage as number);
  if (total !== 100) {
    this.createError({
      path: 'occupations.root',
      message: 'The total of all occupations must equal 100%.',
    });
  } else return true;
}
export function jockeySingular(options: readonly OptionItem[]) {
  return function (this: yup.TestContext, rows: Occupation[] | undefined) {
    if (
      rows &&
      rows.length > 1 &&
      rows.some((row) =>
        options.some(
          (option) => option.value === row.occupationId && option.requireCarJockeyRadius,
        ),
      )
    )
      return this.createError({
        path: 'occupations.root',
        message: 'Car Jockey must be the only occupation',
      });
    return true;
  };
}
export function occupationsSchema(options: readonly OptionItem[]) {
  return yup.object({
    occupations: yup
      .array()
      .of(
        yup.object({
          occupationId: yup.number().when('type', {
            is: 'number',
            then: (s) => s.required().label('This'),
            otherwise: (s) =>
              s.typeError('This is a required field.').required('This is a required field.'),
          }),
          percentage: yup.number().when('type', {
            is: 'number',
            then: (s) => s.required().label('This'),
            otherwise: (s) =>
              s
                .typeError('This is a required field.')
                .required('This is a required field.')
                .min(1, 'This field must be greater than 0'),
          }),
        }),
      )
      .min(1, 'There must be at least one occupation added.')
      .test(
        'uniqueOccupations',
        'Some occupations have been chosen multiple times.',
        uniqueOccupations as yup.TestFunction<Occupation[] | undefined>,
      )
      .test('jockeySingular', jockeySingular(options))
      .test(
        'sumPercentage',
        'The total of all occupations must equal 100%.',
        sumOccupations as yup.TestFunction<Occupation[] | undefined>,
      ),
  });
}
