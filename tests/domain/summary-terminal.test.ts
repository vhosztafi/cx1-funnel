import { describe, it, expect, vi } from 'vitest';
import { summarySections } from '@/domain/summary';
import {
  summaryTimeSchema,
  terminalSubmitData,
  terminalArgument,
  prepareTerminal,
  type TerminalBranch,
} from '@/domain/terminal';
import { motorTradeConverter } from '@/domain/converter';
import { currencyFormat } from '@/domain/currency';
describe('MTS-14 Summary projections', () => {
  it('R04/R05 eleven unconditional sections retain empty rows, empty vehicle array adds its disclosure, specified uses first surviving only', () => {
    const base = summarySections({}, {}, new Date('2026-09-09'));
    expect(base.map((section) => section.step)).toEqual([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13]);
    expect(base[0].rows).toHaveLength(6);
    expect(base.at(-1)?.rows).toHaveLength(1);
    const sections = summarySections(
      {
        vehicles: [],
        specifiedVehicles: [{ regNumber: 'one' }, { regNumber: 'two' }],
        coverLevelID: 1,
        coverIndemnityLimitOwnVehiclesID: 1,
      },
      { indemnityOwnVehicles: [{ value: 1, text: 'Synthetic', numericValue: 15000 }] },
      new Date(),
    );
    expect(sections.find((section) => section.step === 8)?.rows).toEqual([]);
    expect(sections.find((section) => section.step === 9)?.rows[0].heading).toBe('one');
    expect(sections.find((section) => section.step === 9)?.rows).toHaveLength(3);
  });
  it('R04/R06 raw driver order and current age differ from driver-plan/list projections', () => {
    const sections = summarySections(
      {
        proposerPolicyStartDate: '2020-01-01',
        drivers: [
          {
            firstName: 'Z',
            surname: 'A',
            dateOfBirth: '2000-01-01',
            relationshipPolicyholderID: 2,
          },
          {
            firstName: 'A',
            surname: 'B',
            dateOfBirth: '1990-01-01',
            relationshipPolicyholderID: 3,
          },
        ],
      },
      {},
      new Date('2026-09-09'),
    );
    const rows = sections.find((section) => section.step === 6)!.rows;
    expect(rows[0].heading).toBe('Z A');
    expect(rows[1].value).toBe('01/01/2000 (26 yrs old)');
    expect(rows[4].heading).toBe('A B');
  });
  it('MTS-11-R11 intentionally uses driverUsages and coverLevels while joining persisted names only', () => {
    const sections = summarySections(
      {
        annualEuropeanCover: true,
        europeanCoverAnnualExtras: [{ regNumber: 'SYN', europeanCoverUsageTypeID: 1 }],
        temporaryEuropeanCover: true,
        europeanCoverTemporaryExtras: [
          {
            europeanCoverTypeID: 1,
            europeanCoverUsageTypeID: 1,
            europeanCoverDriverGuids: ['no name'],
            europeanCoverDriverNames: ['Persisted Name'],
          },
        ],
      },
      {
        driverUsages: [{ value: 1, text: 'Summary usage' }],
        europeanTripUsage: [{ value: 1, text: 'Input usage' }],
        coverLevels: [{ value: 1, text: 'Summary cover' }],
        europeanTripCover: [{ value: 1, text: 'Input cover' }],
      },
      new Date(),
    );
    const values = sections.find((section) => section.step === 11)!.rows.map((row) => row.value);
    expect(values.filter((value) => value === 'Summary usage')).toHaveLength(2);
    expect(values).toContain('Summary cover');
    expect(values).toContain('Persisted Name');
    expect(values).not.toContain('Input usage');
    expect(values).not.toContain('Input cover');
  });
  it('R06 exact GBP formatter substitutes falsey zero and zero minimum retains meaningful decimals', () => {
    expect(currencyFormat(undefined, 0)).toBe('£0');
    expect(currencyFormat(1234.5, 0)).toBe('£1,234.5');
    expect(currencyFormat(0)).toBe('£0.00');
  });
});
describe('MTS-14-Q01/R01–03 terminal boundary', () => {
  const now = () => new Date('2026-09-09T12:34:59');
  it('minimum precedes backoffice bypass, and equality passes at minute granularity', async () => {
    const raw = {
      proposerPolicyStartDate: '2026-09-09',
      isMta: true,
      minPolicyStartDate: '2026-09-09T10:30:59',
    };
    await expect(
      summaryTimeSchema(raw, true, now).validate({ proposerPolicyStartTime: '10:29' }),
    ).rejects.toThrow('Specified time and date must be later than 09/09/2026 10:30');
    await expect(
      summaryTimeSchema(raw, true, now).validate({ proposerPolicyStartTime: '10:30' }),
    ).resolves.toHaveProperty('proposerPolicyStartTime', '10:30');
    await expect(
      summaryTimeSchema(raw, false, now).validate({ proposerPolicyStartTime: '12:34' }),
    ).resolves.toHaveProperty('proposerPolicyStartTime', '12:34');
    await expect(
      summaryTimeSchema(raw, false, now).validate({ proposerPolicyStartTime: '12:33' }),
    ).rejects.toThrow('Specified time and date must be later than form submission.');
    await expect(summaryTimeSchema(raw, true, now).validate({})).rejects.toThrow();
  });
  it('R02 UTC preserves wall time, clears errors then loading and redirect flag, and never writes raw store', () => {
    const raw = {
      proposerPolicyStartDate: '2026-09-09',
      proposerPolicyStartTime: 'old',
      tradePlateNumbers: [{ plateNumber: 'RAW' }],
      proposershowAddress: true,
    };
    const calls: unknown[] = [];
    const prepared = prepareTerminal(
      raw,
      '12:34',
      {},
      { kind: 'ordinary' },
      {
        clearErrors: () => calls.push('clear'),
        setLoading: (value) => calls.push(['loading', value]),
        setRedirecting: (value) => calls.push(['redirecting', value]),
      },
    );
    expect(calls).toEqual(['clear', ['loading', true], ['redirecting', false]]);
    expect(prepared?.argument.proposerPolicyStartTime).toBe('2026-09-09T12:34:00.000Z');
    expect(prepared?.argument.tradePlateNumbers).toEqual(['RAW']);
    expect(prepared?.argument).not.toHaveProperty('proposershowAddress');
    expect(raw.proposerPolicyStartTime).toBe('old');
  });
  for (const kind of ['backoffice-new', 'broker-new', 'backoffice-adjustment'] as const)
    it(`R02 ${kind} converts exactly once into data and retains explicitly supplied context fields`, () => {
      const convert = vi.fn(motorTradeConverter);
      const input = terminalSubmitData({ proposerPolicyStartDate: '2026-09-09' }, '12:34');
      const branch: TerminalBranch = { kind, argumentFields: { syntheticContext: 'test only' } };
      const argument = terminalArgument(input, {}, branch, convert);
      expect(convert).toHaveBeenCalledOnce();
      expect(argument).toMatchObject({
        syntheticContext: 'test only',
        data: { proposerPolicyStartTime: '2026-09-09T12:34:00.000Z' },
      });
    });
  it('R02 broker adjustment converts inner object then wrapper and preserves three own undefined properties', () => {
    const convert = vi.fn(motorTradeConverter);
    const data = terminalSubmitData(
      { proposerPolicyStartDate: '2026-09-09', drivers: [{ showAddress: true }] },
      '12:34',
    );
    const arg = terminalArgument(
      data,
      {},
      { kind: 'broker-adjustment', guid: 'synthetic-guid' },
      convert,
    );
    expect(convert).toHaveBeenCalledTimes(2);
    expect(convert.mock.calls[1][0]).toMatchObject({
      guid: 'synthetic-guid',
      data: { drivers: [{}] },
    });
    expect(arg).toHaveProperty('vehicles', undefined);
    expect(arg).toHaveProperty('specifiedVehicles', undefined);
    expect(arg).toHaveProperty('addSpecifiedVehicle', undefined);
    expect(arg).toHaveProperty('guid', 'synthetic-guid');
  });
});
