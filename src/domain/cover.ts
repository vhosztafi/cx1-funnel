import * as yup from 'yup';
import { dayjs } from './dates';
import type { RawForm, RawDriver } from './types';
import { strictOption, type Options } from './options';
export const coverDefinition = {
  version: 1,
  owner: 'MTS-05',
  heading: 'Cover Required',
  questions: [
    {
      owner: 'MTS-05-Q01',
      path: 'coverLevelID',
      label: 'Cover Level:',
      control: 'radio',
      options: 'coverLevels',
    },
    {
      owner: 'MTS-05-Q02',
      path: 'coverIndemnityLimitOwnVehiclesID',
      label: 'Own vehicles:',
      control: 'auto',
      id: 'own-vehicles',
      options: 'indemnityOwnVehicles',
    },
    {
      owner: 'MTS-05-Q03',
      path: 'coverIndemnityLimitCustomerVehiclesID',
      label: 'Customer vehicles',
      control: 'auto',
      id: 'customer-vehicles',
      options: 'indemnityCustomerVehicles',
    },
    {
      owner: 'MTS-05-Q04',
      path: 'coverExcessID',
      label: 'Excess Required:',
      control: 'auto',
      id: 'excess-required',
    },
    {
      owner: 'MTS-05-Q05',
      path: 'coverAddAllSectionsExcess',
      label: 'Do you want to add an all-sections excess? ',
      control: 'radio',
      defaultValue: false,
      disabled: true,
    },
    {
      owner: 'MTS-05-Q06',
      path: 'coverExcessLateID',
      label: 'Do you want to add a late notification excess?',
      control: 'auto',
      id: 'late-notification-excess',
      options: 'excessLates',
      defaultValue: 1,
      disabled: true,
    },
    {
      owner: 'MTS-05-Q07',
      path: 'coverRemoveCoInsuraneExcess',
      label: 'Do you want to delete the 10% co-insurance excess? ',
      control: 'radio',
    },
    {
      owner: 'MTS-05-Q08',
      path: 'requireCustomerLoanCover',
      label: 'Do you require customer loan vehicle cover? ',
      control: 'radio',
    },
    {
      owner: 'MTS-05-Q09',
      path: 'customerLoanCoverLevelID',
      label: 'Customer loan vehicles cover level :',
      control: 'auto',
      id: 'coverLevel',
      options: 'customerLoanCoverLevels',
    },
    {
      owner: 'MTS-05-Q10',
      path: 'coverNCBID',
      label: 'No Claims Bonus held (years):',
      control: 'auto',
      id: 'no-claims-bonus',
      options: 'noClaimBonuses',
    },
    {
      owner: 'MTS-05-Q11',
      path: 'coverNCBEarnedID',
      label: 'How was the No Claims Bonus earned? ',
      control: 'auto',
      id: 'no-claims-bonus',
      options: 'noClaimBonusesEarned',
    },
    {
      owner: 'MTS-05-Q12',
      path: 'coverNCBExpiryDate',
      label: 'Expiry Date of the No Claims Bonus: ',
      control: 'date',
    },
    {
      owner: 'MTS-05-Q13',
      path: 'coverNCBPreviousInsurerId',
      label: 'Previous Insurer:',
      control: 'auto',
      id: 'previous-insurer',
      options: 'noClaimBonusPreviousInsurers',
      placeholder: 'Start typing',
    },
    {
      owner: 'MTS-05-Q14',
      path: 'hasCoverNCBIntroRenewal',
      label:
        'Has the client been insured with Tradex/Watford for the last 12 months where an introductory discount was given?',
      control: 'radio',
    },
    {
      owner: 'MTS-05-Q15',
      path: 'coverNCBIntroRenewalYearID',
      label: 'How many years discount was the introductory discount based on?',
      control: 'auto',
      id: 'previous-insurer',
      options: 'noClaimBonusIntroRenewalYears',
      placeholder: 'Start typing',
    },
    {
      owner: 'MTS-05-Q16',
      path: 'coverNCBPreviousInsurerOther',
      label: 'Please provide details',
      control: 'text',
      maxLength: 50,
    },
    {
      owner: 'MTS-05-Q17',
      path: 'coverIsNCBProtected',
      label: 'Would you like to protect the No Claims Bonus?',
      control: 'radio',
    },
  ],
} as const;
export function coverDefaults(raw: RawForm) {
  return Object.fromEntries(
    coverDefinition.questions.filter((q) => raw[q.path] !== null).map((q) => [q.path, raw[q.path]]),
  );
}
export function coverHasLimits(value: unknown) {
  return value === 1 || value === 2;
}
export function hasNcb(value: unknown) {
  return !!value && value !== 1;
}
export function customerLoi(raw: RawForm, options: Options) {
  const ids = options.mtOccupations?.filter((o) => o.customerLOI).map((o) => o.value) ?? [];
  return !!raw.occupations?.some((row) => ids.includes(Number(row.occupationId)));
}
export function introRenewal(data: Record<string, unknown>, options: Options) {
  return (
    data.coverNCBID === 2 &&
    data.coverNCBEarnedID === 3 &&
    (options.noClaimBonusPreviousInsurers
      ?.filter((o) => o.requireNCBIntroRenewal)
      .map((o) => o.value)
      .includes(data.coverNCBPreviousInsurerId as number | string) ??
      false)
  );
}
export function ownCoverOptions(level: unknown, options: Options) {
  return level === 2
    ? options.indemnityOwnVehicles?.filter(
        (o) => (!!o.numericValue && o.numericValue <= 15000) || o.numericValue === 0,
      )
    : options.indemnityOwnVehicles;
}
export function customerCoverOptions(level: unknown, options: Options) {
  return level === 2
    ? options.indemnityCustomerVehicles?.filter((o) => !!o.numericValue && o.numericValue <= 15000)
    : options.indemnityCustomerVehicles;
}
export function coverExcesses(level: unknown, ownId: unknown, options: Options, summary = false) {
  const parents =
    summary && level === 2
      ? options.indemnityOwnVehicles?.slice(0, 6)
      : ownCoverOptions(level, options);
  return ownId === undefined ? [] : (strictOption(parents, ownId)?.excesses ?? []);
}
export function policyIndemnity(data: Record<string, unknown>, raw: RawForm, options: Options) {
  const own = strictOption(
    options.indemnityOwnVehicles,
    data.coverIndemnityLimitOwnVehiclesID,
  )?.numericValue;
  const customer = strictOption(
    options.indemnityCustomerVehicles,
    data.coverIndemnityLimitCustomerVehiclesID,
  )?.numericValue;
  if (!customerLoi(raw, options) || data.coverLevelID === 3) return own;
  const comparable = [customer, own].filter(
    (value): value is number => value !== null && value !== undefined && !Number.isNaN(value),
  );
  return comparable.length ? Math.max(...comparable) : undefined;
}
export function driversFlatten(
  drivers: RawDriver[],
  level: unknown,
  limit: number | null | undefined,
  options: Options,
) {
  return drivers.map((driver) => {
    const data = { ...driver };
    if (level === 3) {
      delete data.ageAdditionalExcess;
      delete data.ageIndemnityLimitID;
      delete data.experienceBasedExcessID;
    } else
      for (const [key, rows] of [
        ['ageIndemnityLimitID', options.youngDriverIndemnityLimit],
        ['experienceBasedExcessID', options.driverExperienceBasedExcesses],
      ] as const) {
        const numeric = strictOption(rows, driver[key])?.numericValue;
        if (numeric && limit && numeric > limit) delete data[key];
      }
    return data;
  });
}
export function coverSubmit(values: Record<string, unknown>, raw: RawForm, options: Options) {
  const data = { ...values };
  if (data.coverLevelID === 3)
    for (const key of [
      'coverIndemnityLimitOwnVehiclesID',
      'coverIndemnityLimitCustomerVehiclesID',
      'coverExcessID',
      'coverAddAllSectionsExcess',
      'coverExcessLateID',
      'coverRemoveCoInsuraneExcess',
    ])
      data[key] = null;
  if (!customerLoi(raw, options)) data.coverIndemnityLimitCustomerVehiclesID = null;
  if (!data.requireCustomerLoanCover) data.customerLoanCoverLevelID = null;
  if (data.coverNCBID === 1)
    for (const key of [
      'coverNCBEarnedID',
      'coverNCBExpiryDate',
      'coverNCBPreviousInsurerId',
      'coverNCBPreviousInsurerOther',
    ])
      data[key] = null;
  if (data.coverNCBPreviousInsurerId !== 21) data.coverNCBPreviousInsurerOther = null;
  if (data.coverNCBEarnedID !== 3) data.coverIsNCBProtected = null;
  if (!introRenewal(data, options)) {
    data.hasCoverNCBIntroRenewal = null;
    data.coverNCBIntroRenewalYearID = null;
  }
  if (data.hasCoverNCBIntroRenewal === false) data.coverNCBIntroRenewalYearID = null;
  if (raw.drivers?.length)
    data.drivers = driversFlatten(
      raw.drivers,
      data.coverLevelID,
      policyIndemnity(data, raw, options),
      options,
    );
  return data;
}
export function coverSchema(raw: RawForm, options: Options) {
  const inCover = (schema: yup.AnySchema) =>
    schema.when('coverLevelID', {
      is: coverHasLimits,
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    });
  const ncbNumber = () =>
    yup.number().when('coverNCBID', {
      is: hasNcb,
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    });
  return yup.object({
    coverLevelID: yup.number().required().label('This'),
    coverIndemnityLimitOwnVehiclesID: yup
      .number()
      .notRequired()
      .test('requiredCase', 'This is a required field', function (value) {
        return !coverHasLimits(this.parent.coverLevelID) || !!value;
      })
      .test(
        'MaxLimit',
        'Maximum indemnity limit for TPF&T cover is £15,000 for own.',
        function (value) {
          const numeric = strictOption(options.indemnityOwnVehicles, value)?.numericValue;
          return !(this.parent.coverLevelID === 2 && value && numeric && numeric > 15000);
        },
      ),
    coverIndemnityLimitCustomerVehiclesID: yup
      .number()
      .notRequired()
      .test('requiredCase', 'This is a required field', function (value) {
        return !(coverHasLimits(this.parent.coverLevelID) && customerLoi(raw, options)) || !!value;
      })
      .test(
        'MaxLimit',
        'Maximum indemnity limit for TPF&T cover is £15,000 for customer.',
        function (value) {
          return !(this.parent.coverLevelID === 2 && value && value > 1);
        },
      ),
    coverExcessID: inCover(yup.number().typeError('This is a required field')),
    coverAddAllSectionsExcess: inCover(yup.boolean()),
    coverExcessLateID: inCover(yup.number()),
    coverRemoveCoInsuraneExcess: inCover(yup.boolean()),
    requireCustomerLoanCover: yup.boolean().required().label('This'),
    customerLoanCoverLevelID: yup
      .number()
      .when('requireCustomerLoanCover', {
        is: true,
        then: (s) => s.required().label('This'),
        otherwise: (s) => s.notRequired(),
      })
      .test('eligible', 'Chosen cover level is not eligible.', function (value) {
        const policy = options.coverLevels?.find((o) => o.isComprehensive)?.value;
        const loan = options.customerLoanCoverLevels?.find((o) => o.isComprehensive)?.value;
        return !(this.parent.coverLevelID !== policy && value === loan);
      }),
    customerLoanVehicleCount: yup.number().notRequired(),
    coverNCBID: yup.number().required().label('This'),
    coverNCBEarnedID: ncbNumber(),
    coverNCBPreviousInsurerId: ncbNumber(),
    coverNCBExpiryDate: yup
      .date()
      .min(dayjs('1900-01-01').toDate(), 'Date cannot be earlier than 01/01/1900.')
      .when('coverNCBID', {
        is: hasNcb,
        then: (s) => s.required().label('This'),
        otherwise: (s) => s.notRequired(),
      }),
    hasCoverNCBIntroRenewal: yup
      .boolean()
      .notRequired()
      .test('requiredCase', 'This is a required field', function (value) {
        return !introRenewal(this.parent, options) || value === true || value === false;
      }),
    coverNCBIntroRenewalYearID: yup
      .number()
      .notRequired()
      .test('requiredCase', 'This is a required field', function (value) {
        return (
          !(introRenewal(this.parent, options) && this.parent.hasCoverNCBIntroRenewal === true) ||
          !!value
        );
      }),
    coverNCBPreviousInsurerOther: yup
      .string()
      .max(50)
      .when('coverNCBPreviousInsurerId', {
        is: (value: unknown) => !!value && value === 21,
        then: (s) => s.required().label('This'),
        otherwise: (s) => s.notRequired(),
      }),
    coverIsNCBProtected: yup.boolean().when('coverNCBEarnedID', {
      is: (value: unknown) => !!value && value === 3,
      then: (s) => s.required().label('This'),
      otherwise: (s) => s.notRequired(),
    }),
  });
}
