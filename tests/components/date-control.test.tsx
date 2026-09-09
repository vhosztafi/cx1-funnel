import { useState } from 'react';
import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateControl } from '@/components/date-control';
import { dayjs, manualDate, pickedDate } from '@/domain/dates';

it('CTL-MT-13/14 strict manual calendar parsing keeps UTC wall dates and rejects incomplete/invalid dates', () => {
  expect(manualDate('29/02/2024')?.toISOString()).toBe('2024-02-29T00:00:00.000Z');
  for (const value of [
    '29/02/2023',
    '31/04/2026',
    '1/01/2026',
    '01/01/26',
    '',
    '09/09/202',
    '00/09/2026',
  ])
    expect(manualDate(value)).toBeUndefined();
  const value = dayjs('2026-09-09T14:25:36');
  expect(pickedDate(value).toISOString()).toBe('2026-09-09T00:00:00.000Z');
  expect(pickedDate(value, true).toISOString()).toBe('2026-09-09T14:25:36.000Z');
});
it('CTL-MT-13 manual key callback precedes each acceptance, with no manufactured input ID', async () => {
  const calls: unknown[] = [];
  function Field() {
    const [value, setValue] = useState<unknown>();
    return (
      <DateControl
        label="Synthetic date"
        field={{
          name: 'syntheticDate',
          value,
          onChange: (value) => {
            calls.push(value);
            setValue(value);
          },
        }}
        callback={() => calls.push('callback')}
      />
    );
  }
  const { container } = render(<Field />);
  const input = screen.getByPlaceholderText('dd/mm/yyyy');
  expect(input).not.toHaveAttribute('id');
  expect(container.querySelector('label')).toHaveAttribute('for', '');
  await userEvent.type(input, '09092026');
  expect(input).toHaveValue('09/09/2026');
  expect(calls[0]).toBe('callback');
  expect(calls.at(-1)).toEqual(new Date('2026-09-09T00:00:00.000Z'));
  await userEvent.clear(input);
  expect(calls.at(-1)).toBeUndefined();
});
it('CTL-MT-14 truthy policy-start age displays exact suffix, while age zero is absent', () => {
  const { rerender } = render(
    <DateControl
      birth
      policyStart="2026-09-09"
      field={{ name: 'birth', value: '2000-09-10', onChange: vi.fn() }}
    />,
  );
  expect(screen.getByText('25 years old')).toBeInTheDocument();
  rerender(
    <DateControl
      birth
      policyStart="2026-09-09"
      disabled
      field={{ name: 'birth', value: '2026-09-09', onChange: vi.fn() }}
    />,
  );
  expect(screen.queryByText(/years old/)).toBeNull();
  expect(screen.getByRole('textbox')).toBeDisabled();
  expect(screen.getByRole('button')).toBeDisabled();
});
it('CTL-MT-13 picker callback precedes date emission', async () => {
  const calls: unknown[] = [];
  const { container } = render(
    <DateControl
      field={{ name: 'synthetic', value: '2026-09-09', onChange: (value) => calls.push(value) }}
      callback={() => calls.push('callback')}
    />,
  );
  fireEvent.click(container.querySelector('button')!);
  fireEvent.click(await screen.findByRole('gridcell', { name: '10' }));
  expect(calls).toEqual(['callback', new Date('2026-09-10T00:00:00.000Z')]);
});
