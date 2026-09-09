import * as yup from 'yup';
import { uniq } from 'lodash-es';
import definition from '@/contracts/extras/questions.json';
import { dayjs } from './dates';
import { strictOption, type Options } from './options';
import type { RawForm, DateValue } from './types';
export { definition as extrasDefinition };
export interface AnnualTrip {
  [key: string]: unknown;
  regNumber?: string;
  europeanCoverUsageTypeID?: number | string | null;
}
export interface TemporaryTrip extends AnnualTrip {
  startDateEuropeanTrip?: DateValue;
  endDateEuropeanTrip?: DateValue;
  europeanAreaID?: number | string | null;
  europeanCoverDriverGuids?: string[] | null;
  europeanCoverTypeID?: number | string | null;
  isDraft?: boolean;
  europeanCoverDriverNames?: string[];
}
export interface ExtrasValues extends Record<string, unknown> {
  europeanCoverAnnualExtras?: AnnualTrip[];
  europeanCoverTemporaryExtras?: TemporaryTrip[];
}
export function newAnnualTrip(): AnnualTrip {
  return { regNumber: '', europeanCoverUsageTypeID: undefined };
}
export function newTemporaryTrip(plan: unknown): TemporaryTrip {
  return {
    regNumber: '',
    startDateEuropeanTrip: undefined,
    endDateEuropeanTrip: undefined,
    europeanAreaID: undefined,
    europeanCoverDriverGuids: plan === 3 ? [] : undefined,
    europeanCoverTypeID: undefined,
    europeanCoverUsageTypeID: undefined,
    isDraft: true,
  };
}
export function extrasDefaults(raw: RawForm): ExtrasValues {
  const paths = [
    ...definition.questions.filter((q) => !q.path.includes('[]')).map((q) => q.path),
    'europeanCoverAnnualExtras',
    'europeanCoverTemporaryExtras',
  ];
  return Object.fromEntries(
    paths
      .map((path) => [
        path,
        path === 'thirdPartyPropertyDamageCoverTypeID' ? raw[path] || 1 : raw[path],
      ])
      .filter(([, value]) => value !== null),
  );
}
export function europeanControlsLocked(defaults: ExtrasValues) {
  return !!(
    defaults.europeanCoverTemporaryExtras &&
    defaults.europeanCoverTemporaryExtras.length &&
    defaults.europeanCoverTemporaryExtras.find((row) => row.isDraft === false)
  );
}
export function motorcycleDemonstrationVisible(raw: RawForm) {
  return !!raw.drivers?.find((driver) => driver.motorcycleLicenceIssueDate);
}
export function policyEnd(raw: RawForm) {
  return dayjs(raw.proposerPolicyStartDate).add(raw.isShortTerm ? 6 : 12, 'month');
}
export function tripStartTest(raw: RawForm) {
  return function (this: yup.TestContext, value: Date | undefined) {
    if (this.parent.isDraft === false) return true;
    const date = dayjs(dayjs(value).format('YYYY-MM-DD'));
    if (date.isBefore(dayjs(raw.proposerPolicyStartDate), 'day'))
      return this.createError({
        message: 'Start Date of Trip must be later than policy start date.',
      });
    if (!this.parent.endDateEuropeanTrip) return true;
    const end = dayjs(this.parent.endDateEuropeanTrip);
    if (date.isAfter(end, 'day'))
      return this.createError({
        message: 'Start Date of Trip must be earlier than the end date of trip.',
      });
    if (date.isBefore(end, 'day')) return true;
  };
}
export function tripEndTest(raw: RawForm) {
  return function (this: yup.TestContext, value: Date | undefined) {
    if (this.parent.isDraft === false) return true;
    if (!this.parent.startDateEuropeanTrip) return true;
    const date = dayjs(dayjs(value).format('YYYY-MM-DD'));
    if (date.isAfter(policyEnd(raw), 'day'))
      return this.createError({
        message: 'End Date of Trip must be earlier than the policy end date.',
      });
    const start = dayjs(this.parent.startDateEuropeanTrip);
    if (date.isBefore(start, 'day'))
      return this.createError({
        message: 'End Date of Trip must be later than the start date of the trip.',
      });
    if (date.isAfter(start, 'day')) return true;
  };
}
export function tripUsageTest(raw: RawForm, options: Options) {
  return function (this: yup.TestContext, value: number | undefined) {
    const motorTrade = options.driverUsages?.find(
      (row) => row.isSocialDomesticPleasure === false,
    )?.value;
    const socialTrip = options.europeanTripUsage?.find(
      (row) => row.isSocialDomesticPleasure === true,
    )?.value;
    const selected = (this.parent.europeanCoverDriverGuids as string[] | undefined)?.map(
      (guid) => raw.drivers?.find((driver) => driver.guid === guid)?.usageID,
    );
    if (
      value === socialTrip &&
      (raw.driverPlanId === 3 || (!!value && !!selected?.includes(motorTrade)))
    )
      return this.createError({
        message: 'Chosen usage type is not valid for the chosen drivers for this trip.',
      });
    return true;
  };
}
export function comprehensiveTest(
  raw: RawForm,
  options: Options,
  collection: 'demonstrationCovers' | 'europeanTripCover',
  message: string,
) {
  return function (this: yup.TestContext, value: number | undefined) {
    if (strictOption(options[collection], value)?.isComprehensive && raw.coverLevelID !== 1) {
      this.createError({ message });
    } else return true;
  };
}
const number = () => yup.number().required().label('This');
const bool = () => yup.boolean().required().label('This');
export function extrasSchema(raw: RawForm, options: Options) {
  const annual = yup.object({
    regNumber: yup.string().required().label('This'),
    europeanCoverUsageTypeID: yup.number().when('type', {
      is: 'number',
      then: (s) => s.required().label('This'),
      otherwise: (s) =>
        s
          .required()
          .label('This')
          .test('TripUsage', tripUsageTest(raw, options) as yup.TestFunction<number>),
    }),
  });
  const temporary = yup.object({
    regNumber: yup.string().required().label('This'),
    startDateEuropeanTrip: yup
      .date()
      .required()
      .label('This')
      .when('type', {
        is: 'date',
        otherwise: (s) => s.test('startTrip', tripStartTest(raw) as yup.TestFunction<Date>),
      }),
    endDateEuropeanTrip: yup
      .date()
      .required()
      .label('This')
      .when('type', {
        is: 'date',
        otherwise: (s) => s.test('endTrip', tripEndTest(raw) as yup.TestFunction<Date>),
      }),
    europeanAreaID: number(),
    europeanCoverDriverGuids: yup
      .array()
      .nullable()
      .test('driversNeeded', 'This is a required field.', function (value) {
        return this.parent.isDraft === false || raw.driverPlanId === 3 || !!value?.length;
      }),
    europeanCoverTypeID: yup.number().when('type', {
      is: 'number',
      then: (s) => s.notRequired(),
      otherwise: (s) =>
        s
          .required()
          .label('This')
          .test(
            'TripCover',
            'Chosen cover level is not valid for this trip.',
            comprehensiveTest(
              raw,
              options,
              'europeanTripCover',
              'Chosen cover level is not valid for this trip.',
            ) as yup.TestFunction<number>,
          ),
    }),
    europeanCoverUsageTypeID: yup.number().when('type', {
      is: 'number',
      then: (s) => s.notRequired(),
      otherwise: (s) =>
        s
          .required()
          .label('This')
          .test('TripUsage', tripUsageTest(raw, options) as yup.TestFunction<number>),
    }),
  });
  return yup.object({
    demonstrationCover: yup.boolean().notRequired(),
    demonstrationCoverTypeID: yup
      .number()
      .when('demonstrationCover', {
        is: true,
        then: (s) => s.required().label('This'),
        otherwise: (s) => s.notRequired(),
      })
      .test(
        'DemonstrationCover',
        'Chosen demonstration cover is not valid.',
        comprehensiveTest(
          raw,
          options,
          'demonstrationCovers',
          'Chosen demonstration cover is not valid.',
        ),
      ),
    demonstrationCoverForMotorcycles: yup.boolean().when('demonstrationCover', {
      is: (value: unknown) => !!value && motorcycleDemonstrationVisible(raw),
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    }),
    windscreenCover: yup
      .boolean()
      .notRequired()
      .test('windscreen', function (value) {
        return (
          !value ||
          raw.coverLevelID === 1 ||
          this.createError({
            path: 'customWindscreenError',
            message: 'You can only add windscreen cover if your cover level is Comprehensive',
          })
        );
      }),
    windscreenCoverTypeID: yup.number().when('windscreenCover', {
      is: true,
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    }),
    isAdditionalWindscreenCoverRequired: yup.boolean().when('windscreenCover', {
      is: true,
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    }),
    lossOfUseCover: bool(),
    vehiclesAtSubcontractorsCover: bool(),
    thirdPartyPropertyDamageCoverTypeID: number(),
    europeanCover: yup.boolean().notRequired(),
    annualEuropeanCover: yup.boolean().notRequired(),
    temporaryEuropeanCover: yup.boolean().notRequired(),
    europeanCoverAnnualExtras: yup
      .array()
      .of(annual)
      .notRequired()
      .test('UniqueRegNumber', 'Registration number must be unique', function (rows) {
        return (
          !rows ||
          uniq(rows.map((row) => row.regNumber)).length === rows.length ||
          this.createError({
            path: 'customRegNumberError',
            message: 'Some registration numbers have been chosen multiple times.',
          })
        );
      }),
    europeanCoverTemporaryExtras: yup.array().of(temporary).notRequired(),
  });
}
export function extrasSubmit(data: ExtrasValues, raw: RawForm) {
  const result = { ...data };
  delete result.customRegNumberError;
  delete result.customWindscreenError;
  if (!motorcycleDemonstrationVisible(raw)) result.demonstrationCoverForMotorcycles = undefined;
  if (!result.windscreenCover) {
    result.windscreenCoverTypeID = undefined;
    result.isAdditionalWindscreenCoverRequired = undefined;
  }
  if (!result.demonstrationCover) {
    result.demonstrationCoverTypeID = undefined;
    result.demonstrationCoverForMotorcycles = undefined;
  }
  return result;
}
