import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AutoComplete,
  LogicMultiSelect,
  MultiSelect,
  RadioList,
  yesNo,
  CheckboxArray,
  CheckboxLine,
  CheckboxLineArray,
  FormTextBox,
  FormTextBoxNumber,
  FormSelect,
  FormHourBox,
  FormError,
  DetailCollapser,
  type Field,
} from '@/components/controls';
const field = (value: unknown = undefined): Field => ({
  name: 'syntheticField',
  value,
  onChange: vi.fn(),
});
describe('mounted shared control contracts', () => {
  it('CTL-MT-04 radio callback order and native index differ from emitted value', () => {
    const calls: unknown[] = [];
    const f = { ...field(), onChange: (value: unknown) => calls.push(value) };
    const { container } = render(
      <RadioList
        field={f}
        options={yesNo}
        onChoice={(o) => calls.push(o)}
        onNegative={() => calls.push('negative')}
        onPositive={() => calls.push('positive')}
      />,
    );
    const no = screen.getByRole('radio', { name: 'No' });
    expect(no).toHaveAttribute('value', '1');
    fireEvent.click(no);
    expect(calls).toEqual([yesNo[1], 'negative', false]);
    calls.length = 0;
    fireEvent.click(no);
    expect(calls).toEqual([yesNo[1], 'negative', false]);
    expect(container.querySelector('label[for="opt_syntheticField_false"]')).not.toBeNull();
  });
  it('CTL-MT-04 strict selection, disabled state and absent-options animation dimensions', () => {
    const { rerender, container } = render(
      <RadioList field={field('1')} options={[{ text: 'Synthetic', value: 1 }]} disabled />,
    );
    expect(screen.getByRole('radio')).not.toBeChecked();
    expect(screen.getByRole('radio')).toBeDisabled();
    rerender(<RadioList field={field()} options={[]} />);
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(container.querySelector('.legacy-loader')).toHaveStyle({
      width: '150px',
      height: '150px',
    });
    expect(container.textContent).toBe('');
  });
  it('CTL-MT-01 loose matching, association and primitive callback', async () => {
    const f = field('1'),
      callback = vi.fn();
    render(
      <AutoComplete
        field={f}
        label="Synthetic label"
        id="synthetic"
        options={[
          { value: 1, text: 'Synthetic one' },
          { value: 2, text: 'Synthetic two' },
        ]}
        callback={callback}
      />,
    );
    expect(screen.getByText('Synthetic one')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Synthetic label'));
    await userEvent.click(screen.getByText('Synthetic two'));
    expect(f.onChange).toHaveBeenCalledWith(2);
    expect(callback).toHaveBeenCalledWith(2);
  });
  it('CTL-MT-02 strict lookup uses whole-option callback', async () => {
    const f = field('1'),
      callback = vi.fn(),
      option = { value: 1, text: 'Synthetic one' };
    render(<LogicMultiSelect field={f} options={[option]} callback={callback} />);
    expect(screen.getByText('Select')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByText('Synthetic one'));
    expect(f.onChange).toHaveBeenCalledWith(1);
    expect(callback).toHaveBeenCalledWith(option);
  });
  it('CTL-MT-03 label is not associated and selections retain primitive arrays', async () => {
    const f = field([]);
    render(
      <MultiSelect
        field={f}
        label="Synthetic multi"
        options={[{ value: '1', text: 'Synthetic one' }]}
      />,
    );
    expect(screen.getByRole('combobox')).not.toHaveAttribute('id', 'syntheticField');
    expect(screen.getByText('Start typing')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByText('Synthetic one'));
    expect(f.onChange).toHaveBeenCalledWith(['1']);
  });
  it('CTL-MT-05 uncheck removes every strict match but retains other primitive types', () => {
    const f = field([1, 1, '1']);
    render(<CheckboxArray field={f} options={[{ text: 'Synthetic', value: 1 }]} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(f.onChange).toHaveBeenCalledWith(['1']);
  });
  it('CTL-MT-06 emits before callback and mounts no error', () => {
    const calls: unknown[] = [];
    render(
      <CheckboxLine
        field={{ ...field(), onChange: (v) => calls.push(v) }}
        id="synthetic"
        label="Check"
        error="Must not mount"
        callback={() => calls.push('callback')}
      />,
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(calls).toEqual([true, 'callback']);
    expect(screen.queryByText('Must not mount')).toBeNull();
  });
  it('CTL-MT-07 fixed copy and order', () => {
    const { container } = render(<CheckboxLineArray field={field([])} />);
    expect(container.textContent).toBe(
      'Direct MarketingYes (A clear YES or NO answer to be given)Third Party MarketingYes (A clear YES or NO answer to be given)',
    );
    expect(screen.getAllByRole('checkbox').map((e) => e.id)).toEqual([
      'syntheticField-1',
      'syntheticField-2',
    ]);
  });
  it('CTL-MT-08 falsey display, missing ID, CRLF truncation and suppressed placeholder', () => {
    const f = field(null);
    const { rerender } = render(
      <FormTextBox field={f} label="Synthetic text" type="textarea" maxLength={4} />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
    expect(input).not.toHaveAttribute('id');
    fireEvent.change(input, { target: { value: 'a\nb' } });
    expect(f.onChange).toHaveBeenCalledWith('a\r\nb');
    rerender(<FormTextBox field={f} disabled placeholder="hidden" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('placeholder');
  });
  it('CTL-MT-09 uses text editing and strips non-digits without blank callback', () => {
    const f = field(),
      callback = vi.fn();
    render(<FormTextBoxNumber field={f} makeNull callback={callback} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(f.onChange).toHaveBeenCalledWith(null);
    expect(callback).not.toHaveBeenCalled();
    fireEvent.change(input, { target: { value: '-01.2' } });
    expect(f.onChange).toHaveBeenLastCalledWith(12);
    expect(callback).toHaveBeenCalledOnce();
  });
  it('CTL-MT-12 native placeholder index emits undefined', () => {
    const f = field(2);
    render(<FormSelect field={f} options={[{ value: 2, text: 'Synthetic two' }]} numberFormat />);
    expect(screen.getByRole('option', { name: 'Select...' })).toBeInTheDocument();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });
    expect(f.onChange).toHaveBeenCalledWith(undefined);
  });
  it('CTL-MT-15 raw time changes call callback first and retain name without ID', () => {
    const calls: unknown[] = [];
    const { container } = render(
      <FormHourBox
        field={{ ...field(), onChange: (v) => calls.push(v) }}
        callback={() => calls.push('callback')}
      />,
    );
    const input = container.querySelector('input')!;
    expect(input).toHaveAttribute('name', 'syntheticField');
    expect(input).not.toHaveAttribute('id');
    fireEvent.change(input, { target: { value: '12:34' } });
    expect(calls).toEqual(['callback', '12:34']);
  });
  it('CTL-MT-16 retains repeated collapse IDs and writes before close callback', () => {
    const calls: unknown[] = [];
    render(
      <>
        <DetailCollapser
          text="A"
          initialAdded
          added="flag"
          setValue={(k, v) => calls.push([k, v])}
          onClose={() => calls.push('close')}
        >
          body
        </DetailCollapser>
        <DetailCollapser text="B">body two</DetailCollapser>
      </>,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons.every((b) => b.getAttribute('aria-controls') === 'example-collapse-text')).toBe(
      true,
    );
    fireEvent.click(buttons[0]);
    expect(calls).toEqual([['flag', false], 'close']);
  });
  it('CTL-MT-21 empty message mounts nothing and truthy message adds no announcement', () => {
    const { container, rerender } = render(<FormError message="" />);
    expect(container).toBeEmptyDOMElement();
    rerender(<FormError message="Exact supplied text" />);
    expect(screen.getByText('Exact supplied text')).not.toHaveAttribute('role');
    expect(container.querySelector('[aria-live]')).toBeNull();
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.firstElementChild?.className).toContain('mt-undefined');
    rerender(<FormError message="Exact supplied text" mt={null} mb={2} className="synthetic" />);
    expect(container.firstElementChild?.className).not.toContain('mt-');
    expect(container.firstElementChild?.className).toContain('mb-2 synthetic');
  });
  it('controlled parent retains false after radio selection', () => {
    function Wrapper() {
      const [value, setValue] = useState<unknown>();
      return <RadioList field={{ name: 'synthetic', value, onChange: setValue }} options={yesNo} />;
    }
    render(<Wrapper />);
    fireEvent.click(screen.getByRole('radio', { name: 'No' }));
    expect(screen.getByRole('radio', { name: 'No' })).toBeChecked();
  });
});
