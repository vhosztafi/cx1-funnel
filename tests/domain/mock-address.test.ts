import { it, expect } from 'vitest';
import { createMockAddressService } from '@/development/mock-address';

it.each(['SW1A 1AA', 'M1 1AE', 'not-a-real-postcode'])(
  'provides clearly fictional demo addresses for %s without validating geography',
  async (postcode) => {
    const service = createMockAddressService();
    const rows = await service.lookup(postcode);
    expect(rows).toHaveLength(3);
    expect(
      rows.every((row) => row.text.startsWith('Mock address') && row.text.includes(postcode)),
    ).toBe(true);
    expect(new Set(rows.map((row) => row.value)).size).toBe(3);
    const selected = await service.select(rows[1]);
    expect(selected).toMatchObject({
      proposerHouseNumber: '2',
      proposerStreet: 'Mock Street',
      proposerCounty: 'Mock County',
      tradingPremiseHouseNo: '2',
      tradingPremiseStreet: 'Mock Street',
      tradingPremiseCounty: 'Mock County',
      houseNo: '2',
      street: 'Mock Street',
      county: 'Mock County',
    });
  },
);

it('does not mix concurrent lookup choices and rejects empty input or unknown selections', async () => {
  const service = createMockAddressService();
  const [first, second] = await Promise.all([service.lookup('M11AE'), service.lookup('SW1A1AA')]);
  expect(first[0].value).not.toBe(second[0].value);
  expect((await service.select(first[2])).houseNo).toBe('3');
  expect((await service.select(second[0])).houseNo).toBe('1');
  await expect(service.lookup('')).rejects.toThrow();
  await expect(service.select({ value: 'real-address', text: 'not a mock' })).rejects.toThrow();
});
