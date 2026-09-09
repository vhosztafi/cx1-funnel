// @vitest-environment node
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import inventory from '@/contracts/canonical-inventory.json';
describe('canonical inventory integrity (not behavioral coverage)', () => {
  it('preserves every source hash and question record property', () => {
    for (const [file, hash] of Object.entries(inventory.sources))
      expect(createHash('sha256').update(readFileSync(file)).digest('hex'), file).toBe(hash);
    const questions = inventory.records.filter((r) => /^MTS-\d{2}-Q/.test(r.id));
    expect(questions).toHaveLength(256);
    for (const question of questions)
      for (const key of [
        'Position',
        'Visible copy',
        'Control',
        'Stored/emitted value',
        'Options',
        'Visible when',
        'Enabled when',
        'Required when',
        'Constraints',
        'Errors',
        'Lifecycle',
        'Summary',
        'Evidence',
        'Clarification',
      ])
        expect(question.properties, `${question.id} ${key}`).toHaveProperty(key);
  });
  it('has no duplicate owners and includes the unusual blank-state edge', () => {
    expect(new Set(inventory.records.map((r) => r.id)).size).toBe(inventory.records.length);
    expect(inventory.records.some((r) => r.id === 'EDGE-08Ø')).toBe(true);
    expect(inventory.records.filter((r) => r.id.startsWith('OPT-'))).toHaveLength(72);
    expect(inventory.records.filter((r) => r.id.startsWith('CTL-'))).toHaveLength(21);
  });
});
