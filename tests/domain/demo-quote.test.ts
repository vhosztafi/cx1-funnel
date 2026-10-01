import { describe, expect, it } from 'vitest';
import { demoQuoteHandoff, demoQuoteProposal } from '@/integration/demo-quote';

describe('demo quote handoff', () => {
  const raw = {
    proposerName: 'Alex', proposerSurname: 'Demo', proposerEmail: 'alex@example.test',
    proposerTelephoneNumber: '01632960000', proposerHouseNumber: '1', proposerStreet: 'Example Street',
    proposerTown: 'Sheffield', proposerPostcode: 'S1 1AA',
    proposerPolicyStartDate: '2026-10-02', businessStartedDate: '2020-01-01',
    businessAnnualTurnover: 50000, businessAnnualWageRoll: 0,
    coverLevelID: 1, vehicles: [{ regNumber: 'DEMO 01', showAddress: true }],
  };

  it('maps compatible draft fields and retains the full terminal argument', () => {
    expect(demoQuoteProposal(raw, '09:00')).toEqual({
      schemaVersion: '1.0', productCode: 'motor-trade-road-risks',
      insured: { firstName: 'Alex', surname: 'Demo', proposerNames: ['Alex Demo'],
        contact: { email: 'alex@example.test', telephone: '01632960000' },
        address: { line1: '1 Example Street', town: 'Sheffield', postcode: 'S1 1AA', country: 'GB' } },
      termIntent: { kind: 'annual', timeZone: 'Europe/London', localStartDate: '2026-10-02', localStartTime: '09:00' },
      risk: { business: { startedOn: '2020-01-01', turnover: '50000.00', wageRoll: '0.00' } },
    });
    const handoff = demoQuoteHandoff(raw, {}, '09:00', 'idempotency-key-123456');
    expect(handoff.proposal).toEqual(demoQuoteProposal(raw, '09:00'));
    expect(JSON.parse(handoff.snapshot).argument.vehicles[0].regNumber).toBe('DEMO 01');
    expect(JSON.parse(handoff.snapshot).argument.coverLevelID).toBe(1);
    expect(JSON.parse(handoff.snapshot).rawAnswers.proposerEmail).toBe('alex@example.test');
  });

  it('omits incompatible draft values while keeping them in the source snapshot', () => {
    const invalid = { ...raw, proposerEmail: 'bad address', businessAnnualTurnover: -1 };
    const handoff = demoQuoteHandoff(invalid, {}, '09:00', 'idempotency-key-123456');
    expect((handoff.proposal.insured as { contact: Record<string, unknown> }).contact.email).toBeUndefined();
    expect((handoff.proposal.risk as { business: Record<string, unknown> }).business.turnover).toBeUndefined();
    expect(JSON.parse(handoff.snapshot).argument.proposerEmail).toBe('bad address');
  });
});
