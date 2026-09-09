import * as yup from 'yup';
import { max } from 'lodash-es';
import { dayjs } from './dates';
import type { RawForm, RawVehicle } from './types';
import { strictOption } from './options';
import {
  vehicleParameters,
  motorcycleVehicleAllowed,
  modificationDuplicate,
} from './vehicle-rules';
export interface VehicleSchemaContext {
  raw: RawForm;
  parameters: ReturnType<typeof vehicleParameters>;
  manualEnter: boolean;
  editingIndex: number;
  specified?: boolean;
  now: Date;
  currencyFormat?: (value: unknown, digits: number) => string;
}
const requiredText = () => yup.string().required().label('This');
const requiredNumber = () => yup.number().required().label('This');
const requiredBoolean = () => yup.boolean().required().label('This');
// CLR-008: the recorded custom callback deliberately does not return createError.
export function vehicleValueTest(context: VehicleSchemaContext) {
  return function (this: yup.TestContext, value: number | undefined) {
    if ((value as number) > (context.parameters.maxVehicleValue as number)) {
      this.createError({
        message: context.currencyFormat
          ? `Vehicle Value must be less or equal to ${context.currencyFormat(context.parameters.maxVehicleValue, 0)}.`
          : '',
      });
    }
  };
}
export function vehicleDetailSchema(context: VehicleSchemaContext) {
  const { raw, parameters: p, manualEnter: manual, specified } = context;
  const category = (row: RawVehicle) =>
    row.chosenVehicleType ?? strictOption(p.vehicleTypes, row.vehicleTypeID)?.category;
  const text = () => (manual ? requiredText() : yup.string().notRequired());
  const routed = (ctx: yup.TestContext, field: string, message: string) =>
    ctx.createError({
      path: manual ? field : field === 'abiGroup' ? 'customAbiError' : 'customGvwError',
      message,
    });
  let value = requiredNumber();
  if (specified) value = value.min(50000);
  else
    value = value.test(
      'maximumVehicleValue',
      '',
      vehicleValueTest(context) as yup.TestFunction<number>,
    );
  let purchase = yup
    .date()
    .min(new Date('1900-01-01'), 'Date cannot be earlier than 01/01/1900.')
    .required()
    .label('This');
  if (!specified)
    purchase = purchase.max(
      dayjs(context.now).endOf('day').toDate(),
      'Purchase date cannot be in the future.',
    );
  return yup.object({
    ...(specified ? { addSpecifiedVehicle: yup.boolean().notRequired() } : {}),
    regNumber: requiredText().matches(
      /^[A-Za-z0-9 ]+$/,
      'Please enter a valid Vehicle Registration.',
    ),
    make: text(),
    model: text(),
    abiCode: requiredText(),
    abiGroup: yup
      .number()
      .nullable()
      .notRequired()
      .test('abi', function (value) {
        const cat = category(this.parent);
        if (value == null && !['Motorcycle', 'Commercial', 'Other'].includes(cat as string))
          return routed(
            this,
            'abiGroup',
            manual || specified ? 'This field is required.' : 'ABI Group is required.',
          );
        const commercial =
          cat === 'Commercial' &&
          strictOption(p.vehicleTypes, this.parent.vehicleTypeID)
            ?.requiresABICheckForCommercialVehicle === false;
        return (
          commercial ||
          !value ||
          !(value > (p.maxAbi as number)) ||
          routed(this, 'abiGroup', `ABI Group must be less than or equal to ${p.maxAbi}`)
        );
      }),
    vehicleTypeID: (manual ? requiredNumber() : yup.number().notRequired()).test(
      'motorcycle',
      'Motorcycle type is not allowed.',
      (value) =>
        !p.motorCycleType.some((row) => row.value === value) || motorcycleVehicleAllowed(raw),
    ),
    bodyType: text(),
    gvw: yup
      .number()
      .typeError('This is a required field')
      .nullable()
      .notRequired()
      .test('gvw', function (value) {
        const cat = category(this.parent);
        if (cat === 'Car') return true;
        if (manual && cat !== 'Other' && value == null)
          return routed(this, 'gvw', 'This field is required.');
        const limit = max(p.maxGvw);
        return (
          p.maxGvw.includes(null) ||
          value == null ||
          !(value > (limit as number)) ||
          routed(this, 'gvw', `Gross Vehicle Weight must be less or equal to ${limit}`)
        );
      }),
    engineSize: yup
      .string()
      .notRequired()
      .test('engineSize', function (value) {
        const cat = category(this.parent);
        if (cat === 'Car') return true;
        if (manual && !value) return this.createError({ message: 'This field is required.' });
        if (value && !p.motorCycleType.some((row) => row.value === this.parent.vehicleTypeID))
          return true;
        if (p.anyDriverCC === null || p.driversCC === null) return true;
        if (Number(value) > (p.driversCC as number))
          return this.createError({
            message: `Engine size can not be greater than ${p.driversCC}`,
          });
        if (Number(value) > (p.anyDriverCC as number))
          return this.createError({
            message: `Engine size can not be greater than ${p.anyDriverCC}`,
          });
        return true;
      }),
    registrationYear: manual ? requiredNumber().min(1900) : yup.number().notRequired(),
    registrationDate: (manual ? yup.date().required() : yup.date().notRequired())
      .min(new Date('1900-01-01'), 'Date cannot be earlier than 01/01/1900.')
      .label('This'),
    isImported: manual ? requiredBoolean() : yup.boolean().notRequired(),
    vehicleValue: value,
    purchaseDate: purchase,
    ownerTypeID: requiredNumber().test(
      'owner',
      'Chosen driver is not eligible to be the owner of a vehicle.',
      function (value) {
        if (
          value === 4 &&
          !raw.drivers?.find((row) => row.guid === this.parent.ownerGuid)?.coverPersonalVehicle
        ) {
          const error = this.createError({
            message: 'Chosen driver is not eligible to be the owner of a vehicle.',
          });
          if (!specified) return error;
        } else return true;
      },
    ),
    keptOvernightTypeID: requiredNumber(),
    vehicleKeptAddress: requiredText(),
    isPartLeaseAgreement: requiredBoolean(),
    leaseLengthYears: yup
      .number()
      .nullable()
      .when('isPartLeaseAgreement', {
        is: true,
        then: (s) => s.required().label('This'),
        otherwise: (s) => s.notRequired(),
      }),
    ...(!specified
      ? {
          isCustomerLoan: requiredBoolean().test(
            'loan',
            "To add a customer loan vehicle, you must select 'Yes' for 'Customer Loan Cover Required' in Step 5",
            (value) => !value || !!raw.requireCustomerLoanCover,
          ),
        }
      : {}),
    hasModification: requiredBoolean(),
    [specified ? 'modifications' : 'vehicleModifications']: yup
      .array()
      .of(yup.object({ [specified ? 'modificationID' : 'modificationId']: requiredNumber() }))
      .notRequired()
      .test('modifications', function (rows) {
        return (
          !modificationDuplicate(rows, specified) ||
          this.createError({
            path: 'customModificationError',
            message: 'Some modifications have been chosen multiple times.',
          })
        );
      }),
  });
}
export function specifiedLeanSchema() {
  return yup.object({ addSpecifiedVehicle: requiredBoolean() });
}
