import { describe, it, expect, vi } from 'vitest';
import type { TestContext } from 'yup';
import {
  occupationsDefaults,
  appendOccupation,
  removeOccupation,
  uniqueOccupations,
  sumOccupations,
  jockeySingular,
  occupationsSchema,
} from '@/domain/occupations';
describe('MTS-04 occupations', () => {
  it('R01 retains truthy empty array; second row resets sole percentage and remove-to-one restores 100', () => {
    const raw: [] = [];
    expect(occupationsDefaults({ occupations: raw }).occupations).toBe(raw);
    expect(occupationsDefaults({}).occupations).toEqual([{ occupationId: '', percentage: 100 }]);
    expect(appendOccupation([{ occupationId: 999, percentage: 100 }])).toEqual([
      { occupationId: 999, percentage: undefined },
      { occupationId: undefined, percentage: undefined },
    ]);
    expect(
      removeOccupation(
        [
          { occupationId: 999, percentage: 40 },
          { occupationId: 998, percentage: 60 },
        ],
        1,
      ),
    ).toEqual([{ occupationId: 999, percentage: 100 }]);
  });
  it('R02 raw uniqueness uses SameValueZero; preserve non-returned error under CLR-008', () => {
    const createError = vi.fn();
    const ctx = { createError } as unknown as TestContext;
    expect(uniqueOccupations.call(ctx, [{ occupationId: 1 }, { occupationId: '1' }])).toBe(true);
    expect(uniqueOccupations.call(ctx, [{ occupationId: 1 }, { occupationId: 1 }])).toBeUndefined();
    expect(createError).toHaveBeenCalledWith({
      message: 'Some occupations have been chosen multiple times.',
    });
  });
  it('R03 metadata singularity uses strict raw ID and returns root error', () => {
    const error = { syntheticError: true };
    const createError = vi.fn(() => error);
    const callback = jockeySingular([
      { value: 999, text: 'Synthetic metadata row', requireCarJockeyRadius: true },
    ]);
    const ctx = { createError } as unknown as TestContext;
    expect(callback.call(ctx, [{ occupationId: '999' }, { occupationId: 998 }])).toBe(true);
    expect(callback.call(ctx, [{ occupationId: 999 }, { occupationId: 998 }])).toBe(error);
    expect(createError).toHaveBeenCalledWith({
      path: 'occupations.root',
      message: 'Car Jockey must be the only occupation',
    });
  });
  it('R04 source raw addition and strict numeric total, without claiming CLR-008 runtime result', () => {
    const createError = vi.fn();
    const ctx = { createError } as unknown as TestContext;
    expect(sumOccupations.call(ctx, [{ percentage: 40 }, { percentage: 60 }])).toBe(true);
    expect(sumOccupations.call(ctx, [{ percentage: '40' }, { percentage: 60 }])).toBeUndefined();
    expect(createError).toHaveBeenCalledWith({
      path: 'occupations.root',
      message: 'The total of all occupations must equal 100%.',
    });
  });
  it('Q01/Q02 state-only type selects required branch; default percentage minimum 1', async () => {
    const schema = occupationsSchema([]);
    await expect(
      schema.validateAt('occupations[0].percentage', { occupations: [{ percentage: 0 }] }),
    ).rejects.toThrow('This field must be greater than 0');
    await expect(
      schema.validateAt('occupations[0].percentage', {
        occupations: [{ type: 'number', percentage: 0 }],
      }),
    ).resolves.toBe(0);
    await expect(
      schema.validateAt('occupations[0].occupationId', { occupations: [{ occupationId: '' }] }),
    ).rejects.toThrow('This is a required field.');
    await expect(schema.validate({ occupations: [] })).rejects.toThrow(
      'There must be at least one occupation added.',
    );
  });
});
