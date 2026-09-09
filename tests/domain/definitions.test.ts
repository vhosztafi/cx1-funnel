// @vitest-environment node
import { describe, it, expect } from 'vitest';
import {
  definitionRegistry,
  definitionSchema,
  indexQuestionDefinitions,
  questionRegistry,
} from '@/contracts/registry';
import inventory from '@/contracts/canonical-inventory.json';
describe('versioned runtime definitions, separate from raw form values', () => {
  const literalQuestions = inventory.records.flatMap((record) => {
    const question = questionRegistry.get(record.id);
    const literal = record.properties['Visible copy']?.match(/^`([^`]+)`\.?$/)?.[1];
    return question && literal && question.label !== undefined
      ? [[record.id, question.label, literal]]
      : [];
  });
  it.each(literalQuestions)(
    '%s retains its complete standalone literal copy',
    (owner, label, literal) => {
      expect(label).toBe(literal);
    },
  );
  it.each(Object.entries(definitionRegistry))(
    '%s is strict, versioned and losslessly JSON-compatible',
    (name, definition) => {
      expect(definitionSchema.validateSync(definition)).toBe(definition);
      expect(JSON.parse(JSON.stringify(definition))).toEqual(definition);
    },
  );
  it.each([undefined, () => 1, new Date(), NaN, Infinity, /test/])(
    'rejects non-JSON definition values without coercion',
    (value) => {
      expect(() => definitionSchema.validateSync({ version: 1, value })).toThrow();
    },
  );
  it.each([
    { version: '1' },
    { version: 2 },
    { version: 1, owner: 'made-up' },
    { version: 1, options: 'inventedProductionRows' },
  ])('rejects unsupported versions and references', (value) => {
    expect(() => definitionSchema.validateSync(value)).toThrow();
  });
  it('indexes every canonical question once without collapsing repeated field paths', () => {
    const owners = inventory.records
      .filter((record) => /^MTS-\d{2}-Q\d{2}$/.test(record.id))
      .map((record) => record.id)
      .sort();
    expect([...questionRegistry.keys()].sort()).toEqual(owners);
    expect(questionRegistry.get('MTS-08-Q01')?.path).toBe('regNumber');
    expect(questionRegistry.get('MTS-09-Q02')?.path).toBe('regNumber');
    expect(() =>
      indexQuestionDefinitions([
        { owner: 'MTS-01-Q01', path: 'x' },
        { owner: 'MTS-01-Q01', path: 'y' },
      ]),
    ).toThrow('Duplicate question owner');
  });
});
