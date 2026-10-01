import type { AddressPorts } from '@/components/address-control';

// Explicit demo fixtures for CTL-MT-17/18/19. These are not real postal records
// and do not resolve CLR-001 or supply production address-service behavior.
const addresses = [
  { house: '1', street: 'Mock Street' },
  { house: '2', street: 'Mock Street' },
  { house: '3', street: 'Mock Street' },
] as const;

export function createMockAddressService(): AddressPorts {
  return {
    lookup: async (postcode) => {
      if (!postcode.trim()) throw new Error('Mock lookup requires a postcode');
      return addresses.map((address, index) => ({
        value: `mock-address:${encodeURIComponent(postcode)}:${index}`,
        text: `Mock address ${index + 1}: ${address.house} ${address.street}, Mock Town (${postcode})`,
      }));
    },
    select: async (choice) => {
      const match = /^mock-address:([^:]+):([0-2])$/.exec(String(choice.value));
      if (!match) throw new Error('Unknown mock address');
      const address = addresses[Number(match[2])];
      // Each consumer reads only its own field names. Keep selection stateless
      // so concurrent proposer, premises and driver lookups cannot interfere.
      return {
        proposerHouseNumber: address.house,
        proposerStreet: address.street,
        proposerTown: 'Mock Town',
        proposerCity: 'Mock City',
        proposerCounty: 'Mock County',
        tradingPremiseHouseNo: address.house,
        tradingPremiseStreet: address.street,
        tradingPremiseTown: 'Mock Town',
        tradingPremiseCity: 'Mock City',
        tradingPremiseCounty: 'Mock County',
        houseNo: address.house,
        street: address.street,
        town: 'Mock Town',
        city: 'Mock City',
        county: 'Mock County',
      };
    },
    formatPostcode: (value) => value,
    delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  };
}
