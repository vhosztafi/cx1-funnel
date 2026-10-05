import { describe, it, expect, vi } from 'vitest';
import type { TestContext } from 'yup';
import { dayjs } from '@/domain/dates';
import {
  addressChosenTest,
  policyDateBounds,
  proposerDefaults,
  proposerLayout,
  proposerSchema,
  proposerSubmit,
  type ProposerContext,
} from '@/domain/proposer';
import { mergeData, initialFormState } from '@/domain/session';

// Explicitly synthetic; these names, dates and identifiers are not production rows.
export const syntheticProposer = {
  consentTo: true,
  marketingConsent: [1],
  marketingMethod: [999],
  proposerPolicyStartDate: new Date('2026-09-10T00:00:00Z'),
  isShortTerm: false,
  proposerCompanyTypeId: 1,
  proposerTitleId: 999,
  proposerName: 'Synthetic',
  proposerSurname: 'Fixture',
  proposerTradingName: '',
  proposerCompanyPartnershipName: 'retained fixture',
  proposerEmail: 'fixture@example.test',
  proposerTelephoneNumber: '01234567890',
  proposerMobileNumber: '',
  proposerPostcode: 'TEST1',
  proposerHouseNumber: '1',
  proposerStreet: 'Synthetic Street',
  proposerCounty: 'Synthetic County',
  proposershowAddress: true,
};
const context: ProposerContext = {
  raw: {},
  rtl: true,
  backoffice: false,
  now: new Date('2026-09-09T12:34:56Z'),
};
describe('MTS-01 proposer contracts', () => {
  it('Q01–20 valid confirmed remainder accepts false policy term and optional town/city', async () => {
    const value = await proposerSchema(context).validate(syntheticProposer);
    expect(value.isShortTerm).toBe(false);
    expect(value.proposerTown).toBeUndefined();
    expect(value.proposerCity).toBeUndefined();
  });
  it('Q01–03 / R01/R03 RTL dependency messages and non-RTL shallow retention', async () => {
    await expect(
      proposerSchema(context).validateAt('consentTo', { consentTo: false }),
    ).rejects.toThrow('This is a required field');
    await expect(
      proposerSchema(context).validateAt('marketingConsent', { marketingConsent: [2] }),
    ).rejects.toThrow(
      'Clegg Gifford Direct Marketing is required when Third Party Marketing is selected',
    );
    await expect(
      proposerSchema(context).validateAt('marketingMethod', {
        marketingConsent: [1],
        marketingMethod: [],
      }),
    ).rejects.toThrow('One must be selected');
    const written = proposerSubmit({ ...syntheticProposer, marketingConsent: [] }, false);
    expect(written).not.toHaveProperty('consentTo');
    expect(written).not.toHaveProperty('marketingConsent');
    expect(written).not.toHaveProperty('marketingMethod');
    const state = mergeData(
      {
        ...initialFormState(),
        formData: { consentTo: true, marketingConsent: [2], marketingMethod: [123] },
      },
      written,
    );
    expect(state.formData).toMatchObject({
      consentTo: true,
      marketingConsent: [2],
      marketingMethod: [123],
    });
    expect(
      proposerSubmit({ marketingConsent: [], marketingMethod: [123] }, true).marketingMethod,
    ).toEqual([]);
    expect(proposerSubmit({ marketingMethod: [123] }, true).marketingMethod).toEqual([123]);
  });
  it('Q06–11 / R02 strict layouts, hidden required fields and submit-only sole clear', async () => {
    expect([1, 2, 3, 4, '1', 99, null].map(proposerLayout)).toEqual([
      'sole',
      'company',
      'company',
      'partnership',
      undefined,
      undefined,
      undefined,
    ]);
    for (const field of ['proposerTitleId', 'proposerName', 'proposerSurname'])
      await expect(
        proposerSchema(context).validateAt(field, { proposerCompanyTypeId: 99 }),
      ).rejects.toThrow();
    for (const id of [2, 3, 4])
      await expect(
        proposerSchema(context).validateAt('proposerCompanyPartnershipName', {
          proposerCompanyTypeId: id,
          proposerCompanyPartnershipName: 'x'.repeat(51),
        }),
      ).rejects.toThrow();
    expect(proposerSubmit(syntheticProposer, true).proposerCompanyPartnershipName).toBeNull();
    expect(syntheticProposer.proposerCompanyPartnershipName).toBe('retained fixture');
    expect(
      proposerSubmit({ ...syntheticProposer, proposerCompanyTypeId: '1' }, true)
        .proposerCompanyPartnershipName,
    ).toBe('retained fixture');
  });
  it('Q04 / R05 date minima have distinct control/schema instants and MTA priority', () => {
    const ordinary = policyDateBounds(context);
    expect(ordinary.controlMin).toEqual(context.now);
    expect(ordinary.schemaMin).toEqual(dayjs(context.now).subtract(1, 'day').toDate());
    expect(ordinary.controlMax).toEqual(dayjs(context.now).startOf('day').add(30, 'day').toDate());
    expect(ordinary.schemaMax).toEqual(dayjs(context.now).add(30, 'day').toDate());
    const bo = policyDateBounds({ ...context, backoffice: true });
    expect(dayjs(bo.controlMin).format('YYYY-MM-DD')).toBe('2025-03-01');
    expect(bo.schemaMin).toEqual(bo.controlMin);
    const mta = policyDateBounds({
      ...context,
      backoffice: true,
      raw: { isMta: true, minPolicyStartDate: '2026-09-15' },
    });
    expect(dayjs(mta.schemaMin).format('YYYY-MM-DD')).toBe('2026-09-14');
    expect(mta.minimumMessage).toBe('Date cannot be earlier than 15/09/2026');
    const hostedMta=policyDateBounds({...context,backoffice:true,raw:{isMta:true,minPolicyStartDate:'2026-09-15',maxPolicyStartDate:'2027-09-15'}});
    expect(dayjs(hostedMta.controlMax).format('YYYY-MM-DD')).toBe('2027-09-15');
    const ordinaryWithBounds=policyDateBounds({...context,raw:{maxPolicyStartDate:'2027-09-15'}});
    expect(ordinaryWithBounds.controlMax).toEqual(ordinary.controlMax);
  });
  it('Q13/Q14 / R04 exact independent phone tests retain strings', async () => {
    const schema = proposerSchema(context);
    for (const field of ['proposerTelephoneNumber', 'proposerMobileNumber']) {
      await expect(
        schema.validateAt(field, { proposerTelephoneNumber: '', proposerMobileNumber: '' }),
      ).rejects.toThrow('This is a required field.');
      await expect(
        schema.validateAt(field, { ...syntheticProposer, [field]: '012345678901' }),
      ).rejects.toThrow('Telephone Number must be at most 11 characters');
    }
    await expect(
      schema.validateAt('proposerMobileNumber', {
        ...syntheticProposer,
        proposerMobileNumber: '17',
      }),
    ).rejects.toThrow('Telephone Number should start with 07.');
    expect(
      await schema.validateAt('proposerMobileNumber', {
        proposerMobileNumber: '07',
        proposerTelephoneNumber: '',
      }),
    ).toBe('07');
  });
  it('Q15 / R06 preserves non-returned createError expression without claiming CLR-008 outcome', () => {
    const createError = vi.fn();
    const callback = addressChosenTest('proposershowAddress');
    expect(
      callback.call({ parent: {}, createError } as unknown as TestContext, 'TEST1'),
    ).toBeUndefined();
    expect(createError).toHaveBeenCalledWith({
      message: 'You must either lookup your address or click Enter manually',
    });
    expect(
      callback.call(
        { parent: { proposershowAddress: true }, createError } as unknown as TestContext,
        'TEST1',
      ),
    ).toBe(true);
  });
  it('Q12, Q15–20 required and maxima remain independent of unresolved postcode regex', async () => {
    const schema = proposerSchema(context);
    await expect(
      schema.validateAt('proposerEmail', { proposerEmail: 'invalid' }),
    ).rejects.toThrow();
    for (const field of [
      'proposerPostcode',
      'proposerHouseNumber',
      'proposerStreet',
      'proposerCounty',
    ])
      await expect(schema.validateAt(field, { [field]: '' })).rejects.toThrow();
    for (const field of [
      'proposerHouseNumber',
      'proposerStreet',
      'proposerTown',
      'proposerCity',
      'proposerCounty',
    ])
      await expect(schema.validateAt(field, { [field]: 'x'.repeat(51) })).rejects.toThrow();
    await expect(
      proposerSchema({ ...context, postcodePattern: /^SYNTHETIC$/ }).validateAt(
        'proposerPostcode',
        { proposerPostcode: 'OTHER', proposershowAddress: true },
      ),
    ).rejects.toThrow('Postcode is not valid.');
  });
  it('R07 defaults omit null, retain false/empty values, and do not read unrelated form values', () => {
    expect(
      proposerDefaults({
        proposerName: null,
        isShortTerm: false,
        proposerSurname: '',
        unrelated: 'keep',
      }),
    ).not.toHaveProperty('proposerName');
    expect(proposerDefaults({ isShortTerm: false, proposerSurname: '' })).toMatchObject({
      consentTo: false,
      isShortTerm: false,
      proposerSurname: '',
    });
    expect(proposerDefaults({ unrelated: 'keep' })).not.toHaveProperty('unrelated');
  });
});
