import { describe, expect, it } from 'vitest';
import { gvwInKilograms, projectExcesses, projectYoungBands } from '@/domain/option-transforms';

const syntheticRows = [5, 4, 3, 2, 1].map((value) => ({
  value,
  text: `Synthetic ${value}`,
  numericValue: value * 1000,
}));

describe('confirmed option transformations with synthetic inputs', () => {
  it('OPT-MT-20/27/52/72 retains null and zero while converting tonnes', () => {
    expect([null, 0, 3.5, 7.5].map(gvwInKilograms)).toEqual([null, 0, 3500, 7500]);
  });
  it('OPT-MT-09/58 filters inactive rows, appends exact suffix and sorts defaults then numbers', () => {
    const rows = [
      { value: 1, text: 'Synthetic 50', numericValue: 50, active: true, isDefault: false },
      { value: 2, text: 'Synthetic 1000', numericValue: 1000, active: true, isDefault: true },
      { value: 3, text: 'Synthetic 200', numericValue: 200, active: true, isDefault: true },
      { value: 4, text: 'Hidden', numericValue: 0, active: false, isDefault: true },
      { value: 5, text: 'Synthetic 9', numericValue: 9, active: true, isDefault: false },
    ];
    expect(projectExcesses(rows).map((row) => [row.value, row.text])).toEqual([
      [3, 'Synthetic 200 (Default)'],
      [2, 'Synthetic 1000 (Default)'],
      [5, 'Synthetic 9'],
      [1, 'Synthetic 50'],
    ]);
    expect(rows[1].text).toBe('Synthetic 1000');
    expect(projectExcesses([])).toEqual([]);
  });
  it('OPT-MT-22/64–70 keeps four bands and source-order rows without guessing currency', () => {
    const bands = projectYoungBands(syntheticRows, syntheticRows, (value) => `TEST-C0:${value}`);
    expect(
      bands.map((b) => [
        b.ageFrom,
        b.ageTo,
        b.additionalExcess,
        b.defaultAdditionalIndemnity,
        b.defaultCc,
      ]),
    ).toEqual([
      [null, 18, 'TEST-C0:500', 'Synthetic 1', 'Synthetic 1'],
      [19, 20, 'TEST-C0:350', 'Synthetic 1', 'Synthetic 2'],
      [21, 22, 'TEST-C0:250', 'Synthetic 2', 'Synthetic 3'],
      [23, null, 'TEST-C0:250', 'Synthetic 3', 'Synthetic 4'],
    ]);
    expect(bands.map((b) => b.indemnities?.map((row) => row.value))).toEqual([
      [4, 2, 1],
      [4, 2, 1],
      [4, 2],
      [4, 3],
    ]);
    expect(bands.map((b) => b.cCs?.map((row) => row.value))).toEqual([
      [5, 4, 3, 2, 1],
      [5, 4, 3, 2],
      [5, 4, 3],
      [5, 4],
    ]);
  });
  it('OPT-MT-69/70 rejects missing and duplicate Single matches rather than choosing a fallback', () => {
    expect(() => projectYoungBands([], syntheticRows, String)).toThrow();
    expect(() =>
      projectYoungBands([...syntheticRows, syntheticRows[4]], syntheticRows, String),
    ).toThrow();
    expect(() => projectYoungBands(syntheticRows, [], String)).toThrow();
    expect(() =>
      projectYoungBands(syntheticRows, [...syntheticRows, syntheticRows[4]], String),
    ).toThrow();
  });
});
