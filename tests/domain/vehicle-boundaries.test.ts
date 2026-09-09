import { describe, it, expect } from 'vitest';
import {
  vehicleOwnerOptions,
  vehicleOwnerDisplay,
  vehicleParameters,
  modificationDuplicate,
} from '@/domain/vehicle-rules';
import {
  vehicleDetailSchema,
  specifiedLeanSchema,
  type VehicleSchemaContext,
} from '@/domain/vehicle-schema';
import { vehicleDetailBack } from '@/domain/vehicle-workflow';
const base: VehicleSchemaContext = {
  raw: { driverPlanId: 3, aadMaxMotorcycleCcID: 2 },
  manualEnter: true,
  editingIndex: 0,
  now: new Date('2026-09-09'),
  parameters: {
    maxAbi: 20,
    maxGvw: [3500, 7500],
    maxVehicleValue: 15000,
    motorCycleType: [{ value: 2, text: 'Synthetic motorcycle', category: 'Motorcycle' }],
    anyDriverCC: 1000,
    driversCC: 500,
    vehicleTypes: [
      { value: 1, text: 'Synthetic car', category: 'Car' },
      { value: 2, text: 'Synthetic motorcycle', category: 'Motorcycle' },
      {
        value: 3,
        text: 'Synthetic commercial',
        category: 'Commercial',
        requiresABICheckForCommercialVehicle: false,
      },
    ],
  },
};
describe('MTS-08/09 distinct vehicle boundaries with synthetic metadata', () => {
  it('R03/R17 owner options preserve company branches and raw driver order', () => {
    const raw = {
      proposerName: 'Synthetic',
      proposerSurname: 'Person',
      proposerCompanyPartnershipName: 'Synthetic company',
      drivers: [
        { guid: 'a', firstName: 'Z', surname: 'A', relationshipPolicyholderID: 3 },
        { guid: 'b', firstName: 'A', surname: 'B', relationshipPolicyholderID: 2 },
      ],
    };
    expect(
      vehicleOwnerOptions({ ...raw, proposerCompanyTypeId: 1 }).map((row) => row.value),
    ).toEqual(['b', 1]);
    expect(
      vehicleOwnerOptions({ ...raw, proposerCompanyTypeId: 1 }, true).map((row) => row.value),
    ).toEqual(['a', 'b', 1]);
    for (const type of [2, 3])
      expect(
        vehicleOwnerOptions({ ...raw, proposerCompanyTypeId: type }).map((row) => row.value),
      ).toEqual(['a', 'b', 2, 3]);
    expect(
      vehicleOwnerOptions({ ...raw, proposerCompanyTypeId: 4 }).map((row) => row.value),
    ).toEqual(['a', 'b', 2]);
    expect(vehicleOwnerOptions({ ...raw, proposerCompanyTypeId: '1' })).toEqual([]);
    expect(vehicleOwnerDisplay({ ownerTypeID: 1 }, raw)).toBe('Synthetic Person');
    for (const type of [2, 3])
      expect(vehicleOwnerDisplay({ ownerTypeID: type }, raw)).toBe('Synthetic company');
    expect(vehicleOwnerDisplay({ ownerTypeID: 4, ownerGuid: 'b' }, raw)).toBe('A B');
    expect(vehicleOwnerDisplay({ ownerTypeID: 4, ownerGuid: 'missing' }, raw)).toBe(
      'undefined undefined',
    );
    expect(
      vehicleOwnerDisplay(
        { ownerTypeID: 4, ownerGuid: null, ownerDescription: 'Stored description' },
        raw,
      ),
    ).toBe('Stored description');
    expect(vehicleOwnerDisplay({ ownerTypeID: '1' }, raw)).toBeNull();
  });
  it('R02 derives separate ABI/GVW and motorcycle limits without normalizing identifiers', () => {
    const p = vehicleParameters(
      {
        coverIndemnityLimitOwnVehiclesID: '1',
        aadMaxMotorcycleCcID: 2,
        drivers: [{ motorcycleCoverID: 1 }, { motorcycleCoverID: 2 }],
      },
      {
        indemnityOwnVehicles: [{ value: 1, text: 'Synthetic', numericValue: 15000 }],
        aadMaxMotorcycleCc: [{ value: 2, text: 'Synthetic', maxCC: 1000 }],
        driverMotorcycleCovers: [{ value: 2, text: 'Synthetic', maxCC: null }],
        vehicleType: base.parameters.vehicleTypes,
      },
      {
        abi: { driverMaxAbi: 10, driverPlanMaxAbi: 20 },
        gvw: { driverListGvw: null, driverPlanGvw: 3500 },
      },
    );
    expect(p).toMatchObject({
      maxVehicleValue: null,
      maxAbi: 20,
      maxGvw: [null, 3500],
      anyDriverCC: 1000,
      driversCC: null,
    });
    expect(p.motorCycleType.map((row) => row.value)).toEqual([2]);
  });
  it('Q05/Q06/Q08 ABI and GVW route errors to manual fields or lookup custom paths', async () => {
    await expect(
      vehicleDetailSchema(base).validateAt('abiGroup', { vehicleTypeID: 1, abiGroup: null }),
    ).rejects.toMatchObject({ path: 'abiGroup', message: 'This field is required.' });
    await expect(
      vehicleDetailSchema({ ...base, manualEnter: false }).validateAt('abiGroup', {
        vehicleTypeID: 1,
        abiGroup: null,
      }),
    ).rejects.toMatchObject({ path: 'customAbiError', message: 'ABI Group is required.' });
    await expect(
      vehicleDetailSchema(base).validateAt('abiGroup', { vehicleTypeID: 3, abiGroup: 100 }),
    ).resolves.toBe(100);
    await expect(
      vehicleDetailSchema({ ...base, manualEnter: false }).validateAt('abiGroup', {
        vehicleTypeID: 1,
        abiGroup: 21,
      }),
    ).rejects.toMatchObject({
      path: 'customAbiError',
      message: 'ABI Group must be less than or equal to 20',
    });
    await expect(
      vehicleDetailSchema(base).validateAt('gvw', { vehicleTypeID: 1, gvw: null }),
    ).resolves.toBeNull();
    await expect(
      vehicleDetailSchema(base).validateAt('gvw', { chosenVehicleType: 'Other', gvw: null }),
    ).resolves.toBeNull();
    await expect(
      vehicleDetailSchema(base).validateAt('gvw', { vehicleTypeID: 3, gvw: null }),
    ).rejects.toMatchObject({ path: 'gvw', message: 'This field is required.' });
    await expect(
      vehicleDetailSchema({ ...base, manualEnter: false }).validateAt('gvw', {
        vehicleTypeID: 3,
        gvw: 7501,
      }),
    ).rejects.toMatchObject({
      path: 'customGvwError',
      message: 'Gross Vehicle Weight must be less or equal to 7500',
    });
    await expect(
      vehicleDetailSchema({
        ...base,
        parameters: { ...base.parameters, maxGvw: [null, 1] },
      }).validateAt('gvw', { vehicleTypeID: 3, gvw: 99999 }),
    ).resolves.toBe(99999);
  });
  it('Q13/Q14 engine restrictions preserve Car bypass, required manual entry and independent limits', async () => {
    const schema = vehicleDetailSchema(base);
    await expect(schema.validateAt('engineSize', { vehicleTypeID: 1 })).resolves.toBeUndefined();
    await expect(
      schema.validateAt('engineSize', { vehicleTypeID: 2, engineSize: '' }),
    ).rejects.toThrow('This field is required.');
    await expect(
      schema.validateAt('engineSize', { vehicleTypeID: 3, engineSize: '99999' }),
    ).resolves.toBe('99999');
    await expect(
      schema.validateAt('engineSize', { vehicleTypeID: 2, engineSize: '501' }),
    ).rejects.toThrow('Engine size can not be greater than 500');
    await expect(
      vehicleDetailSchema({
        ...base,
        parameters: { ...base.parameters, driversCC: 2000 },
      }).validateAt('engineSize', { vehicleTypeID: 2, engineSize: '1001' }),
    ).rejects.toThrow('Engine size can not be greater than 1000');
    await expect(
      vehicleDetailSchema({
        ...base,
        parameters: { ...base.parameters, driversCC: null },
      }).validateAt('engineSize', { vehicleTypeID: 2, engineSize: '99999' }),
    ).resolves.toBe('99999');
  });
  it('Q19–26 keeps owner eligibility, lease requiredness, loan gate and differently named modification rows', async () => {
    const schema = vehicleDetailSchema(base);
    await expect(
      schema.validateAt('ownerTypeID', { ownerTypeID: 4, ownerGuid: 'missing' }),
    ).rejects.toThrow('Chosen driver is not eligible to be the owner of a vehicle.');
    await expect(
      vehicleDetailSchema({
        ...base,
        raw: { drivers: [{ guid: 'a', coverPersonalVehicle: true }] },
      }).validateAt('ownerTypeID', { ownerTypeID: 4, ownerGuid: 'a' }),
    ).resolves.toBe(4);
    await expect(
      schema.validateAt('leaseLengthYears', { isPartLeaseAgreement: true }),
    ).rejects.toThrow();
    await expect(
      schema.validateAt('leaseLengthYears', {
        isPartLeaseAgreement: false,
        leaseLengthYears: null,
      }),
    ).resolves.toBeNull();
    await expect(schema.validateAt('isCustomerLoan', { isCustomerLoan: true })).rejects.toThrow(
      "To add a customer loan vehicle, you must select 'Yes'",
    );
    await expect(
      vehicleDetailSchema({ ...base, raw: { requireCustomerLoanCover: true } }).validateAt(
        'isCustomerLoan',
        { isCustomerLoan: true },
      ),
    ).resolves.toBe(true);
    for (const specified of [false, true]) {
      const key = specified ? 'modifications' : 'vehicleModifications';
      const id = specified ? 'modificationID' : 'modificationId';
      await expect(
        vehicleDetailSchema({ ...base, specified }).validateAt(key, {
          [key]: [{ [id]: 1 }, { [id]: 1 }],
        }),
      ).rejects.toMatchObject({
        path: 'customModificationError',
        message: 'Some modifications have been chosen multiple times.',
      });
      expect(modificationDuplicate([{ [id]: 0 }, { [id]: null }], specified)).toBe(false);
      expect(modificationDuplicate([{ [id]: 1 }, { [id]: '1' }], specified)).toBe(false);
    }
    await expect(specifiedLeanSchema().validate({ addSpecifiedVehicle: false })).resolves.toEqual({
      addSpecifiedVehicle: false,
    });
    await expect(specifiedLeanSchema().validate({})).rejects.toThrow();
    expect(vehicleDetailBack({ vehicles: [{}] }, false)).toMatchObject({
      step: 8,
      state: { showVehicles: true },
    });
    expect(vehicleDetailBack({ vehicles: [{}] }, true)).toMatchObject({ step: 7 });
    expect(vehicleDetailBack({}, false)).toMatchObject({ step: 7 });
  });
});
