import { describe, it, expect, vi } from 'vitest';
import { debugClear, debugSet, debugDefinition } from '@/domain/debug';
import { runClean, cleanDestination, type CleanInputs } from '@/domain/clean';
import { createSession, type StoragePort } from '@/domain/session';
function storage(seed: Record<string, string> = {}): StoragePort {
  const values = new Map(Object.entries(seed));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => {
      values.set(key, value);
    },
    removeItem: (key) => {
      values.delete(key);
    },
    clear: () => values.clear(),
  };
}
describe('ROOT-008–012 and clean routes', () => {
  it('ROOT-009/010 root Set persists selection and reloads without a product write', () => {
    expect(debugDefinition.steps.map((row) => row.value)).toEqual(
      Array.from({ length: 14 }, (_, i) => String(i + 1)),
    );
    const calls: string[] = [];
    const motorTrade = vi.fn();
    debugSet('14', '/', {
      persist: (value) => calls.push(String(value)),
      motorTrade,
      reload: () => calls.push('reload'),
    });
    expect(calls).toEqual(['14', 'reload']);
    expect(motorTrade).not.toHaveBeenCalled();
  });
  it('ROOT-011 Clear preserves only truthy raw option entries across both storage clears', () => {
    const session = storage({
      motorTradeOptions: '{}',
      commercialCombinedOptions: 'cached',
      authBroker: 'old',
      unrelated: 'old',
    });
    const local = storage({ selectedStep: '9' });
    const reload = vi.fn();
    debugClear(session, local, reload);
    expect(session.getItem('motorTradeOptions')).toBe('{}');
    expect(session.getItem('commercialCombinedOptions')).toBe('cached');
    expect(session.getItem('authBroker')).toBeNull();
    expect(session.getItem('unrelated')).toBeNull();
    expect(local.getItem('selectedStep')).toBeNull();
    expect(reload).toHaveBeenCalledOnce();
  });
  it('RT-CLEAN partial reset retains ledger, validators and options and writes selected auth before rewritten navigation', async () => {
    const session = storage({
      authBroker: 'old',
      authBO: 'old',
      motorTradeOptions: '{}',
      abiDetail: 'retained ABI',
      gvwDetail: 'retained GVW',
    });
    const form = createSession(session);
    form.setData({ proposerName: 'old' });
    form.setStep(14);
    const calls: unknown[] = [];
    const inputs: CleanInputs = {
      resetStates: {
        brokerGuid: { guid: undefined },
        brokerDetail: {},
        isBackoffice: {},
        clientId: {},
        existingTradePlates: {},
      },
      consumeAuthentication: async () => {
        expect(session.getItem('authBroker')).toBeNull();
        expect(form.getSnapshot().formData).toEqual({});
        return { key: 'authBO', value: 'synthetic authorized value' };
      },
    };
    await runClean(
      '/back-office/clean/new-quote/buy/motortrade-roadrisks',
      session,
      form.reset,
      inputs,
      { navigate: (path) => calls.push([path, session.getItem('authBO')]), exit: vi.fn() },
    );
    expect(calls).toEqual([
      ['/back-office/new-quote/buy/motortrade-roadrisks', 'synthetic authorized value'],
    ]);
    expect(form.getSnapshot()).toMatchObject({
      step: 1,
      stepAsEnum: 'step1',
      stepPath: ['step14'],
    });
    expect(session.getItem('abiDetail')).toBe('retained ABI');
    expect(session.getItem('gvwDetail')).toBe('retained GVW');
    expect(session.getItem('motorTradeOptions')).toBe('{}');
  });
  it('RT-CLEAN failed local authentication exits only to explicitly supplied boundary', async () => {
    const exit = vi.fn(),
      navigate = vi.fn();
    await runClean(
      '/broker/clean/buy/motortrade-roadrisks',
      storage(),
      vi.fn(),
      {
        resetStates: {
          brokerGuid: {},
          brokerDetail: {},
          isBackoffice: {},
          clientId: {},
          existingTradePlates: {},
        },
        consumeAuthentication: async () => {
          throw Error('synthetic');
        },
        failureDestination: '/synthetic-dashboard',
      },
      { navigate, exit },
    );
    expect(navigate).not.toHaveBeenCalled();
    expect(exit).toHaveBeenCalledWith('/synthetic-dashboard');
    expect(cleanDestination('/broker/clean/buy/motortrade-roadrisks/steps/step1')).toBe(
      '/broker/buy/motortrade-roadrisks/steps/step1',
    );
  });
});
