import { describe, it, expect, vi } from 'vitest';
import {
  normalizeTextarea,
  emitNumber,
  emitCurrency,
  emitPercentage,
  nativeSelectValue,
} from '@/domain/control-values';
import { looseOption, strictOption, selectedMany } from '@/domain/options';
describe('shared control value contracts', () => {
  it('CTL-MT-01/02/03 distinguish equality and unmatched values', () => {
    const rows = [
      { value: 1, text: 'SYNTHETIC numeric' },
      { value: '1', text: 'SYNTHETIC string' },
    ];
    expect(looseOption(rows, '1')).toBe(rows[0]);
    expect(strictOption(rows, '1')).toBe(rows[1]);
    expect(selectedMany(rows, ['1'])).toEqual([rows[1]]);
    expect(looseOption(rows, 9)).toBeUndefined();
  });
  it.each([
    ['a\nb', 4, 'a\r\nb'],
    ['a\nb', 2, 'a'],
    ['a\rb', 3, 'a\r\n'],
    ['a\r\nb', 4, 'a\r\nb'],
  ])('CTL-MT-08 normalizes and truncates %s', (input, max, expected) =>
    expect(normalizeTextarea(input as string, max as number)).toBe(expected),
  );
  it('unbounded textarea emits untouched text', () =>
    expect(normalizeTextarea('a\nb')).toBe('a\nb'));
  it('CTL-MT-09 strips non-digits and calls callback only after nonblank emission', () => {
    const calls: unknown[] = [];
    const onChange = (v: unknown) => calls.push(v);
    const callback = () => calls.push('callback');
    emitNumber('a-01.2', onChange, false, callback);
    expect(calls).toEqual([12, 'callback']);
    calls.length = 0;
    emitNumber('abc', onChange, true, callback);
    expect(calls).toEqual([null]);
    calls.length = 0;
    emitNumber('', onChange, false, callback);
    expect(calls).toEqual(['']);
  });
  it('CTL-MT-10 blank currency is undefined; prior string differs from numeric value', () => {
    const callback = vi.fn();
    const emit = vi.fn();
    emitCurrency('12', '12', emit, callback);
    expect(emit).toHaveBeenCalledWith(12);
    emitCurrency('', '12', emit);
    expect(emit).toHaveBeenLastCalledWith(undefined);
    expect(callback).toHaveBeenCalledOnce();
  });
  it('CTL-MT-11 preserves numeric blank zero and nonnumeric two-argument call', () => {
    const emit = vi.fn();
    emitPercentage('', '', true, emit);
    expect(emit).toHaveBeenLastCalledWith(0);
    emitPercentage('', '', false, emit);
    expect(emit).toHaveBeenLastCalledWith('', undefined);
    emitPercentage('12', '12', false, emit);
    expect(emit).toHaveBeenLastCalledWith('12', 12);
  });
  it('CTL-MT-12 uses selected index and explicit numeric branch', () => {
    expect(nativeSelectValue(0, '5', true)).toBeUndefined();
    expect(nativeSelectValue(1, '5')).toBe('5');
    expect(nativeSelectValue(1, '5', true)).toBe(5);
  });
});
