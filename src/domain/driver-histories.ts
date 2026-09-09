import * as yup from 'yup';
import { dayjs } from './dates';
import type { DateValue, RawForm } from './types';
export const driverHistoryDefinitions = {
  version: 1,
  groups: [
    {
      owner: 'MTS-06-R08',
      parent: 'tradeEmploymentBasisID',
      array: 'driverOccupations',
      heading: 'Occupation',
      add: 'Add another occupation',
      limit: 5,
      questions: [29, 30],
      defaults: {},
      undefinedFields: ['motortradeRoadRisksOccupationID', 'isBusinessUseRequired'],
      lastRemovalParent: 'tradeEmploymentBasisID',
    },
    {
      owner: 'MTS-06-R11',
      parent: 'hasMotoringConvictions',
      array: 'driverMotortradingConvictions',
      heading: 'Conviction',
      add: 'Add another conviction',
      limit: 100,
      questions: [34, 35, 36, 37, 38, 39],
      defaults: {
        convictionDate: null,
        driverMotortradingConvictionCodeID: '',
        fineAmount: '',
        points: '',
        banLength: '',
      },
      undefinedFields: ['disqualified'],
      lastRemovalParent: 'hasMotoringConvictions',
    },
    {
      owner: 'MTS-06-R12',
      parent: 'hasClaimsOrAccidents',
      array: 'driverClaims',
      heading: 'Claim',
      add: 'Add another claim / accident',
      limit: 100,
      questions: [41, 42, 43, 44, 45],
      defaults: {
        claimDate: null,
        claimTypeID: '',
        totalCost: '',
        description: '',
        claimStatusID: null,
      },
      lastRemovalParent: 'hasClaimsOrAccidents',
    },
    {
      owner: 'MTS-06-R14',
      parent: 'hasCriminalConvictions',
      array: 'criminalConvictions',
      heading: 'Conviction',
      add: 'Add another conviction',
      limit: 100,
      questions: [49, 50, 51, 52],
      defaults: {
        convictionDate: null,
        criminalConvictionCodeID: '',
        sentenceLengthYear: '',
        sentenceLengthMonth: '',
      },
      lastRemovalParent: 'hasCriminalConvictions',
    },
    {
      owner: 'MTS-06-R15',
      parent: 'hasCCJs',
      array: 'countyCourtJudgements',
      heading: 'CCJ',
      add: 'Add another CCJ',
      limit: 100,
      questions: [54, 55, 56, 57],
      defaults: { ccjDate: null, countyCourtJudgementStatusID: '', amount: '', circumstances: '' },
      lastRemovalParent: 'ccj',
    },
  ],
} as const;
export function newHistoryRow(group: (typeof driverHistoryDefinitions.groups)[number]) {
  return {
    ...group.defaults,
    ...Object.fromEntries(
      ('undefinedFields' in group ? group.undefinedFields : []).map((key) => [key, undefined]),
    ),
  };
}
export function driverHistoryActive(parent: string, value: unknown) {
  return parent === 'tradeEmploymentBasisID' ? value === 2 : !!value;
}
export function historyRemoval(array: readonly unknown[], index: number, parent: string) {
  return {
    rows: array.filter((_, i) => i !== index),
    writes: array.length === 1 && parent !== 'tradeEmploymentBasisID' ? { [parent]: false } : {},
  };
}
const requiredNumber = () => yup.number().required().label('This');
const requiredString = () => yup.string().required().label('This');
const requiredBool = () => yup.boolean().required().label('This');
export const minDriverDate = () =>
  yup.date().min(dayjs('1900-01-01').toDate(), 'Date cannot be earlier than 01/01/1900.');
export function driverHistorySchemas(raw: RawForm) {
  return {
    driverOccupations: yup
      .array()
      .of(
        yup.object({
          motortradeRoadRisksOccupationID: requiredNumber(),
          isBusinessUseRequired: requiredBool(),
        }),
      )
      .test('UniqueOccupations', function (rows) {
        const ids = rows?.map((row) => row.motortradeRoadRisksOccupationID) ?? [];
        return (
          new Set(ids).size === ids.length ||
          this.createError({
            path: 'customOccupationsError',
            message: 'Some occupations have been chosen multiple times.',
          })
        );
      }),
    driverMotortradingConvictions: yup.array().of(
      yup.object({
        convictionDate: minDriverDate().required().label('This'),
        driverMotortradingConvictionCodeID: requiredNumber(),
        fineAmount: requiredNumber(),
        points: requiredNumber(),
        disqualified: requiredBool().test(
          'ban',
          'Driver can not be added to policy whilst on a ban.',
          function (value) {
            return !(
              value &&
              this.parent.convictionDate &&
              this.parent.banLength &&
              dayjs(this.parent.convictionDate as DateValue)
                .add(this.parent.banLength, 'month')
                .isAfter(dayjs(raw.proposerPolicyStartDate))
            );
          },
        ),
        banLength: yup
          .number()
          .typeError('This field is required')
          .when('disqualified', {
            is: (v: unknown) => !!v,
            then: (s) => s.required().label('This'),
            otherwise: (s) => s.notRequired(),
          }),
      }),
    ),
    driverClaims: yup
      .array()
      .of(
        yup.object({
          claimDate: minDriverDate().required().label('This'),
          claimTypeID: requiredNumber(),
          description: requiredString(),
          totalCost: requiredNumber(),
          claimStatusID: requiredNumber(),
        }),
      ),
    criminalConvictions: yup
      .array()
      .of(
        yup.object({
          convictionDate: minDriverDate().required().label('This'),
          criminalConvictionCodeID: requiredNumber(),
          sentenceLengthYear: requiredNumber(),
          sentenceLengthMonth: requiredNumber(),
        }),
      ),
    countyCourtJudgements: yup
      .array()
      .of(
        yup.object({
          ccjDate: minDriverDate().required().label('This'),
          countyCourtJudgementStatusID: requiredNumber(),
          amount: requiredNumber(),
          circumstances: requiredString(),
        }),
      ),
  };
}
