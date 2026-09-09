import { describe, it, expect } from 'vitest';
import { premiseBranch, premiseSelection, newPremise, premisesSchema } from '@/domain/premises';
describe('MTS-02 premises', () => {
  it('Q01 / R01 source strict branch and row changes', () => {
    for (const value of [3, 4]) {
      expect(premiseBranch(value)).toBe(true);
      expect(premiseSelection(value, 0)).toBe('append-one');
      expect(premiseSelection(value, 1)).toBeUndefined();
    }
    for (const value of [1, 2]) {
      expect(premiseSelection(value, 1)).toBe('remove-all');
      expect(premiseSelection(value, 0)).toBeUndefined();
    }
    for (const value of ['1', '3', null, undefined, 99]) {
      expect(premiseBranch(value)).toBe(false);
      expect(premiseSelection(value, 1)).toBeUndefined();
    }
    expect(newPremise()).toMatchObject({
      tradingPremisePostcode: '',
      tradingPremiseYearsTrading: '',
      tradingPremiseTypeId: undefined,
      tradingPremiseIsSharedWorksite: undefined,
    });
    expect(newPremise()).not.toBe(newPremise());
  });
  it('R03 present rows validated without a required/minimum array rule', async () => {
    for (const tradingFromId of [3, 4]) {
      await expect(premisesSchema().validate({ tradingFromId })).resolves.toEqual({
        tradingFromId,
      });
      await expect(
        premisesSchema().validate({ tradingFromId, tradingPremises: [] }),
      ).resolves.toEqual({ tradingFromId, tradingPremises: [] });
    }
    await expect(
      premisesSchema().validate({ tradingFromId: 3, tradingPremises: [newPremise()] }),
    ).rejects.toThrow();
  });
  it('Q02–10 field constraints allow zero years and false shared, not empty numeric input', async () => {
    const row = {
      tradingPremisePostcode: 'SYNTHETIC',
      showAddress: true,
      tradingPremiseTypeId: 999,
      tradingPremiseYearsTrading: 0,
      tradingPremiseIsSharedWorksite: false,
      tradingPremiseHouseNo: '1',
      tradingPremiseStreet: 'Synthetic Street',
      tradingPremiseCounty: 'Synthetic County',
    };
    await expect(
      premisesSchema().validate({ tradingFromId: 3, tradingPremises: [row] }),
    ).resolves.toMatchObject({ tradingPremises: [row] });
    await expect(
      premisesSchema().validate({
        tradingFromId: 3,
        tradingPremises: [{ ...row, tradingPremiseYearsTrading: '' }],
      }),
    ).rejects.toThrow('This field is required');
    for (const key of [
      'tradingPremiseHouseNo',
      'tradingPremiseStreet',
      'tradingPremiseCounty',
      'tradingPremiseTown',
      'tradingPremiseCity',
    ])
      await expect(
        premisesSchema().validate({
          tradingFromId: 3,
          tradingPremises: [{ ...row, [key]: 'x'.repeat(51) }],
        }),
      ).rejects.toThrow();
  });
});
