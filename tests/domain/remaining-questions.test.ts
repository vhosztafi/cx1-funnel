import { describe, it, expect, vi } from 'vitest';
import type { TestContext } from 'yup';
import {
  vehicleTypeForces,
  vehicleTypesDefaults,
  vehicleTypesSchema,
  vehicleTypesTotalTest,
  vehicleTypesSubmit,
  vehicleTypesSummary,
  vehicleTypesDefinition,
} from '@/domain/vehicle-types';
import {
  declarationDefinition,
  declarationDefaults,
  declarationSchema,
  declarationSummary,
} from '@/domain/declaration';
import {
  additionalPredicates,
  additionalDefaults,
  additionalSchema,
  additionalProjection,
} from '@/domain/additional-information';
describe('MTS-10 category matrix and source-ordered effects', () => {
  it('R02 eight forces retain raw vs metadata distinctions and specified modifications do not force ordinary modified flag', () => {
    const forces = vehicleTypeForces(
      {
        driverPlanId: 1,
        vehicles: [{ vehicleTypeID: 1, gvw: 3501, isImported: true, seats: 8 }],
        specifiedVehicles: [{ modifications: [{ modificationID: 1 }] }],
      },
      {
        vehicleType: [
          {
            value: 1,
            text: 'Synthetic commercial',
            category: 'Commercial',
            requiresQuadBikes: true,
            requiresRallyTrackKitCarsTrikes: true,
          },
        ],
      },
      { driverMaxAbi: 29 },
    );
    expect(forces).toEqual({
      sportsPerformanceVehicles: true,
      commercialVehicles: true,
      motorcycles: false,
      importedVehicles: true,
      modifiedVehicles: false,
      rallyTrackKitCarsTrikes: true,
      quadBikes: true,
      vehiclesWithMoreThan7Seats: true,
    });
    expect(vehicleTypeForces({}, {}, {}).motorcycles).toBe(true);
  });
  it('R01/R07/R09 null omission, explicit submit undefined and mismatched Summary detail stay independent', () => {
    const forces = vehicleTypeForces({ driverPlanId: 1 }, {}, {});
    const defaults = vehicleTypesDefaults(
      { standardCars: null, tankers: false, percentageOfTankers: 0 },
      forces,
    );
    expect(defaults).not.toHaveProperty('standardCars');
    expect(defaults).toMatchObject({ tankers: false, percentageOfTankers: 0 });
    const raw = {
      vehiclesCarryingCorrosiveToxicExplosiveFlammableGoods: true,
      corrosiveToxicExplosiveFlammableGoodsDetails: 'retained but omitted',
      airsideOrHazardousLocations: false,
      airsideOrHazardousLocationsDetails: 'cleared',
    };
    expect(vehicleTypesSubmit(raw)).toHaveProperty('airsideOrHazardousLocationsDetails', undefined);
    expect(vehicleTypesSummary(raw)[0].details).toBeUndefined();
    expect(raw.airsideOrHazardousLocationsDetails).toBe('cleared');
  });
  it('R04 aggregates only numeric non-NaN values and discards createError; R05 returns exact empty error', async () => {
    const createError = vi.fn();
    const parent = {
      standardCars: true,
      percentageOfStandardCars: 50,
      percentageOfTankers: '50',
      percentageOfMotorcycles: NaN,
    };
    expect(
      vehicleTypesTotalTest.call({
        parent,
        path: 'totalPercentage',
        createError,
      } as unknown as TestContext),
    ).toBeUndefined();
    expect(createError).toHaveBeenCalledWith({
      path: 'totalPercentage',
      message: 'The total of all occupations must equal 100%.',
    });
    expect(
      vehicleTypesTotalTest.call({
        parent: { ...parent, percentageOfStandardCars: 100 },
      } as TestContext),
    ).toBe(true);
    await expect(
      vehicleTypesSchema(vehicleTypeForces({ driverPlanId: 1 }, {}, {})).validateAt(
        'atLeastOneType',
        {},
      ),
    ).rejects.toMatchObject({ message: '' });
  });
  for (const category of vehicleTypesDefinition.categories.filter(
    (c) => !['sportsPerformanceVehicles', 'motorcycles'].includes(c.path),
  ))
    it(`${category.owner}/${category.percentage.owner} true requires minimum one; false accepts zero`, async () => {
      const schema = vehicleTypesSchema(vehicleTypeForces({ driverPlanId: 1 }, {}, {}));
      await expect(
        schema.validateAt(category.percentage.path, {
          [category.path]: true,
          [category.percentage.path]: 0,
        }),
      ).rejects.toThrow();
      await expect(
        schema.validateAt(category.percentage.path, {
          [category.path]: false,
          [category.percentage.path]: 0,
        }),
      ).resolves.toBe(0);
    });
});
describe('MTS-12 declarations and MTS-13 predicates', () => {
  for (const pair of declarationDefinition.pairs)
    it(`${pair.owner}/${pair.detail.owner} requires answer; true requires detail; false does not clear retained raw text`, async () => {
      const schema = declarationSchema();
      await expect(schema.validateAt(pair.path, {})).rejects.toThrow();
      await expect(schema.validateAt(pair.detail.path, { [pair.path]: true })).rejects.toThrow();
      await expect(
        schema.validateAt(pair.detail.path, { [pair.path]: false, [pair.detail.path]: 'old' }),
      ).resolves.toBe('old');
      expect(declarationSummary({ [pair.path]: false, [pair.detail.path]: 'old' })).toEqual([]);
      expect(declarationSummary({ [pair.path]: true, [pair.detail.path]: 'old' })).toEqual([
        { label: pair.label, detail: 'old' },
      ]);
    });
  it('MTS-12-R21 omits exact-null defaults while MTS-13-R03 retains null', () => {
    expect(
      declarationDefaults({ haveAnyOfDriversHadSpecialTermsApplied: null }),
    ).not.toHaveProperty('haveAnyOfDriversHadSpecialTermsApplied');
    expect(additionalDefaults({ essentialRiskInformation: null })).toHaveProperty(
      'essentialRiskInformation',
      null,
    );
  });
  it('MTS-13-R01/R02 converts selected jockey ID only, while sole shunter ID is strict and absent driver list passes negated find', () => {
    const options = {
      mtOccupations: [
        { value: 1, text: 'Synthetic', requireCarJockeyRadius: true, requireShunterRadius: true },
      ],
      driverUsages: [{ value: 1, text: 'Synthetic', isSocialDomesticPleasure: false }],
    };
    expect(
      additionalPredicates({ occupations: [{ occupationId: '1' }], coverLevelID: 3 }, options),
    ).toEqual({ jockey: true, shunter: false });
    expect(
      additionalPredicates({ occupations: [{ occupationId: 1 }], coverLevelID: 3 }, options)
        .shunter,
    ).toBe(true);
    expect(
      additionalPredicates(
        { occupations: [{ occupationId: 1 }], coverLevelID: 3, drivers: [{ usageID: '1' }] },
        options,
      ).shunter,
    ).toBe(false);
  });
  it('MTS-13-Q03 remains optional while asked and both paths null only unasked values', async () => {
    await expect(additionalSchema(false).validate({})).resolves.toEqual({});
    expect(
      additionalProjection(
        {
          essentialRiskInformation: 'raw',
          restrictShuntersPolicyRadius: true,
          carJockeyRadiusID: 99,
        },
        { jockey: false, shunter: false },
      ),
    ).toEqual({
      essentialRiskInformation: 'raw',
      restrictShuntersPolicyRadius: null,
      carJockeyRadiusID: null,
    });
    await expect(additionalSchema(true).validate({})).rejects.toThrow();
  });
});
