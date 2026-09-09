import { it, expect } from 'vitest';
import { controlRegistry } from '@/components/control-registry';
import { ruleBindings, ruleRegistry } from '@/domain/rule-registry';
import { definitionSchema } from '@/contracts/registry';
it('CTL-MT-01–21 retains each owning control entry without merging shared variants', () => {
  expect(Object.keys(controlRegistry)).toEqual(
    Array.from({ length: 21 }, (_, index) => `CTL-MT-${String(index + 1).padStart(2, '0')}`),
  );
  expect(Object.values(controlRegistry).every((component) => typeof component === 'function')).toBe(
    true,
  );
});
it('versioned named-rule bindings resolve without embedding functions or expressions in definitions', () => {
  expect(definitionSchema.validateSync(ruleBindings)).toBe(ruleBindings);
  expect(ruleBindings.rules.map((rule) => rule.id).sort()).toEqual(
    Object.keys(ruleRegistry).sort(),
  );
  expect(ruleRegistry.normalizeTextarea('A\nB', 3)).toBe('A\r\n');
  expect(ruleRegistry.nativeSelectValue(0, '9', true)).toBeUndefined();
  expect(ruleRegistry.newPremise()).toHaveProperty('tradingPremiseYearsTrading', '');
});
