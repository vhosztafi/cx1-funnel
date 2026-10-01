import { it, expect, vi } from 'vitest';
import { createMockHost } from '@/development/mock-host';
import { authPresenceGuard } from '@/domain/entry';
import { hydrateOptions } from '@/domain/option-cache';

vi.mock('@/development/uat-options', () => ({
  consumeUatOptions: async () => ({
    data: {
      companyTypes: [{ value: 1, text: 'Sole Trader', relationshipOptions: [2, 3, 5] }],
    },
  }),
}));

it('development fixture satisfies auth and completes SHR-MT-R01 without browser storage', async () => {
  const { host, previewStorage } = createMockHost();
  expect(
    authPresenceGuard(
      previewStorage,
      () => {
        throw Error('unexpected loading');
      },
      () => {},
    ),
  ).toBe(true);
  const loading: boolean[] = [];
  await hydrateOptions('/motortrade-roadrisks/steps/step1', false, {
    storage: previewStorage,
    consume: host.consumeOptions!,
    merge: (options) => expect(options.companyTypes?.[0].text).toBe('Sole Trader'),
    setLoading: (value) => loading.push(value),
    setFetching: () => {},
    markFetched: () => {},
    delay: async () => {},
  });
  expect(loading).toEqual([true, false]);
  expect(previewStorage.getItem('motorTradeOptions')).toContain('Sole Trader');
  expect(createMockHost().previewStorage.getItem('motorTradeOptions')).toBeNull();
});
