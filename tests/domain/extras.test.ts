import { describe, it, expect, vi } from 'vitest';
import type { TestContext } from 'yup';
import {
  extrasDefaults,
  extrasSchema,
  extrasSubmit,
  newAnnualTrip,
  newTemporaryTrip,
  europeanControlsLocked,
  policyEnd,
  tripStartTest,
  tripEndTest,
  tripUsageTest,
  comprehensiveTest,
} from '@/domain/extras';
describe('MTS-11 extras and Europe contracts', () => {
  it('R01/R03/R06 exact drafts, third-party falsey default and null omission', () => {
    expect(newAnnualTrip()).toEqual({ regNumber: '', europeanCoverUsageTypeID: undefined });
    expect(newTemporaryTrip(3).europeanCoverDriverGuids).toEqual([]);
    expect(newTemporaryTrip('3').europeanCoverDriverGuids).toBeUndefined();
    expect(newTemporaryTrip(3)).not.toHaveProperty('europeanCoverDriverNames');
    expect(newTemporaryTrip(3)).not.toHaveProperty('type');
    expect(
      extrasDefaults({ demonstrationCover: null, thirdPartyPropertyDamageCoverTypeID: 0 }),
    ).toHaveProperty('thirdPartyPropertyDamageCoverTypeID', 1);
    expect(extrasDefaults({ demonstrationCover: null })).not.toHaveProperty('demonstrationCover');
  });
  it('R02 annual exact uniqueness is independent of cover flag and has no cardinality minimum', async () => {
    const schema = extrasSchema({}, {});
    await expect(
      schema.validateAt('europeanCoverAnnualExtras', {
        annualEuropeanCover: true,
        europeanCoverAnnualExtras: [],
      }),
    ).resolves.toEqual([]);
    await expect(
      schema.validateAt('europeanCoverAnnualExtras', {
        annualEuropeanCover: false,
        europeanCoverAnnualExtras: [
          { regNumber: 'A', europeanCoverUsageTypeID: 1 },
          { regNumber: 'A', europeanCoverUsageTypeID: 1 },
        ],
      }),
    ).rejects.toMatchObject({
      path: 'customRegNumberError',
      message: 'Some registration numbers have been chosen multiple times.',
    });
    await expect(
      schema.validateAt('europeanCoverAnnualExtras', {
        europeanCoverAnnualExtras: [
          { regNumber: 'A', europeanCoverUsageTypeID: 1 },
          { regNumber: 'a', europeanCoverUsageTypeID: 1 },
        ],
      }),
    ).resolves.toHaveLength(2);
  });
  it('R04 short-term end and date equality retain callback fallthrough, while locked rows bypass custom order', () => {
    const raw = { proposerPolicyStartDate: '2026-01-01', isShortTerm: true };
    expect(policyEnd(raw).format('YYYY-MM-DD')).toBe('2026-07-01');
    const parent = { startDateEuropeanTrip: '2026-02-01', endDateEuropeanTrip: '2026-02-01' };
    expect(
      tripStartTest(raw).call({ parent } as TestContext, new Date('2026-02-01')),
    ).toBeUndefined();
    expect(
      tripEndTest(raw).call({ parent } as TestContext, new Date('2026-02-01')),
    ).toBeUndefined();
    expect(
      tripStartTest(raw).call(
        { parent: { ...parent, isDraft: false } } as TestContext,
        new Date('1900-01-01'),
      ),
    ).toBe(true);
  });
  it('Q18 locked rows still require dates but nullable driver GUIDs are permitted for strict plan3', async () => {
    const schema = extrasSchema({ driverPlanId: 3 }, {});
    await expect(
      schema.validateAt('europeanCoverTemporaryExtras[0].europeanCoverDriverGuids', {
        europeanCoverTemporaryExtras: [{ europeanCoverDriverGuids: null }],
      }),
    ).resolves.toBeNull();
    await expect(
      schema.validateAt('europeanCoverTemporaryExtras[0].startDateEuropeanTrip', {
        europeanCoverTemporaryExtras: [{ isDraft: false }],
      }),
    ).rejects.toThrow();
  });
  it('R05 social usage checks selected raw driver GUIDs strictly and uses raw option IDs', () => {
    const createError = vi.fn(() => false);
    const options = {
      driverUsages: [{ value: 1, text: 'Synthetic MT', isSocialDomesticPleasure: false }],
      europeanTripUsage: [{ value: 2, text: 'Synthetic social', isSocialDomesticPleasure: true }],
    };
    const rule = tripUsageTest({ driverPlanId: 1, drivers: [{ guid: 'a', usageID: 1 }] }, options);
    expect(
      rule.call(
        { parent: { europeanCoverDriverGuids: ['a'] }, createError } as unknown as TestContext,
        2,
      ),
    ).toBe(false);
    expect(createError).toHaveBeenCalledWith({
      message: 'Chosen usage type is not valid for the chosen drivers for this trip.',
    });
    expect(
      rule.call(
        {
          parent: { europeanCoverDriverGuids: ['missing'] },
          createError,
        } as unknown as TestContext,
        2,
      ),
    ).toBe(true);
  });
  it('R07 discarded comprehensive createError differs from returned windscreen custom path', async () => {
    const createError = vi.fn();
    const rule = comprehensiveTest(
      { coverLevelID: 3 },
      {
        demonstrationCovers: [{ value: 1, text: 'Synthetic comprehensive', isComprehensive: true }],
      },
      'demonstrationCovers',
      'Chosen demonstration cover is not valid.',
    );
    expect(rule.call({ createError } as unknown as TestContext, 1)).toBeUndefined();
    expect(createError).toHaveBeenCalledOnce();
    await expect(
      extrasSchema({ coverLevelID: 3 }, {}).validateAt('windscreenCover', {
        windscreenCover: true,
      }),
    ).rejects.toMatchObject({
      path: 'customWindscreenError',
      message: 'You can only add windscreen cover if your cover level is Comprehensive',
    });
  });
  it('R08/R10 locks only strict false defaults; submit clears dependencies without touching Europe drafts or names', () => {
    expect(europeanControlsLocked({ europeanCoverTemporaryExtras: [{ isDraft: false }] })).toBe(
      true,
    );
    expect(europeanControlsLocked({ europeanCoverTemporaryExtras: [{ isDraft: true }] })).toBe(
      false,
    );
    const rows = [{ isDraft: true, europeanCoverDriverNames: ['Persisted'] }];
    const raw = {
      customRegNumberError: 'omit',
      demonstrationCover: false,
      demonstrationCoverTypeID: 99,
      windscreenCover: false,
      windscreenCoverTypeID: 99,
      europeanCoverTemporaryExtras: rows,
    };
    const submitted = extrasSubmit(raw, {});
    expect(submitted).not.toHaveProperty('customRegNumberError');
    expect(submitted.demonstrationCoverTypeID).toBeUndefined();
    expect(submitted.windscreenCoverTypeID).toBeUndefined();
    expect(submitted.europeanCoverTemporaryExtras).toBe(rows);
    expect(raw.demonstrationCoverTypeID).toBe(99);
  });
});
