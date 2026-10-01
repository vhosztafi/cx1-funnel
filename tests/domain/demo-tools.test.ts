import { it, expect } from 'vitest';
import options from '../../public/api/options.json';
import { createDemoSample } from '@/development/demo-sample';
import { replaceDemoJourney } from '@/development/demo-session';
import { proposerSchema } from '@/domain/proposer';
import { businessSchema } from '@/domain/business';
import { coverSchema } from '@/domain/cover';
import { driverPlanSchema } from '@/domain/driver-workflow';
import { occupationsSchema } from '@/domain/occupations';
import { declarationSchema } from '@/domain/declaration';
import { summaryTimeSchema } from '@/domain/terminal';

it('builds fresh fictional sample answers from actual bundled IDs that pass journey validation', async () => {
  const now = new Date('2030-12-31T23:59:00');
  const raw = createDemoSample(options, now);
  expect(raw.proposerPolicyStartDate).toBe('2031-01-01');
  expect(raw.proposerEmail).toBe('alex.demo@example.test');
  expect(raw.occupations).toEqual([{ occupationId: 8, percentage: 100 }]);
  for (const schema of [
    proposerSchema({ raw, now, backoffice: false, rtl: false }),
    businessSchema(raw.proposerPolicyStartDate),
    coverSchema(raw, options),
    driverPlanSchema(),
    occupationsSchema(options.mtOccupations),
    declarationSchema(),
    summaryTimeSchema(raw, false, () => now),
  ]) {
    await expect(schema.validate(raw, { abortEarly: false })).resolves.toBeDefined();
  }
  const other = createDemoSample(options, now);
  raw.occupations!.push({ occupationId: 999, percentage: 0 });
  expect(other.occupations).toHaveLength(1);
});

it('does not invent missing option IDs', () => {
  expect(() => createDemoSample({})).toThrow('Sample option unavailable');
});

it('replaces all old answers and route history without clearing unrelated storage or authentication', () => {
  const values = new Map([
    ['motorTradeFormStore', 'old'],
    ['abiDetail', 'stale'],
    ['gvwDetail', 'stale'],
    ['brokerGuid', 'stale'],
    ['unrelated', 'keep'],
    ['authBroker', 'keep'],
  ]);
  const storage = {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
    removeItem: (key: string) => {
      values.delete(key);
    },
    clear: () => {
      throw new Error('Must not clear storage globally');
    },
  };
  replaceDemoJourney(storage, { proposerName: 'Demo' }, 14);
  expect(JSON.parse(values.get('motorTradeFormStore')!).state).toEqual({
    formData: { proposerName: 'Demo' },
    step: 14,
    stepAsEnum: 'step14',
    stepPath: [],
  });
  expect(values.has('abiDetail')).toBe(false);
  expect(values.has('brokerGuid')).toBe(false);
  expect(values.get('authBroker')).toBe('keep');
  expect(values.get('unrelated')).toBe('keep');
  replaceDemoJourney(storage);
  expect(JSON.parse(values.get('motorTradeFormStore')!).state).toEqual({
    formData: {},
    step: 1,
    stepAsEnum: 'step1',
    stepPath: [],
  });
});
