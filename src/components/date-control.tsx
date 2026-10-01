'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { usePickerContext } from '@mui/x-date-pickers/hooks';
import { useForkRef } from '@mui/material/utils';
import { IMaskInput, IMask } from 'react-imask';
import { dayjs, manualDate, pickedDate } from '@/domain/dates';
import type { DateValue } from '@/domain/types';
import { FormError, type ControlProps } from './controls';

interface DateProps extends ControlProps {
  minDate?: DateValue;
  maxDate?: DateValue;
  birth?: boolean;
  policyStart?: DateValue;
  callback?: () => void;
}
const InputContext = createContext<DateProps | null>(null);
const maskBlocks = {
  d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
  m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
  Y: { mask: IMask.MaskedRange, from: 1, to: 9999, maxLength: 4 },
};
function MaskedDateField() {
  const props = useContext(InputContext)!;
  const { rootRef, triggerRef, setOpen } = usePickerContext();
  // CTL-MT-13/14: the custom field also supplies MUI's popup anchor.
  const fieldRef = useForkRef(rootRef, triggerRef);
  const [display, setDisplay] = useState(() =>
    props.field.value ? dayjs(props.field.value as DateValue).format('DD/MM/YYYY') : '',
  );
  useEffect(() => {
    setDisplay(props.field.value ? dayjs(props.field.value as DateValue).format('DD/MM/YYYY') : '');
  }, [props.field.value]);
  return (
    <div ref={fieldRef} className="input-group">
      <IMaskInput
        mask="d{/}m{/}Y"
        blocks={maskBlocks}
        autofix="pad"
        lazy
        value={display}
        disabled={props.disabled}
        placeholder={
          props.placeholder === undefined ? 'dd/mm/yyyy' : props.placeholder.trim() || undefined
        }
        className={`form-control${props.error ? ' is-invalid' : ''}`}
        onKeyDown={() => props.callback?.()}
        onAccept={(v, _mask, event) => {
          const text = String(v);
          setDisplay(text);
          // CTL-MT-13/14: a mask synchronization is not a manual-entry event.
          if (event) props.field.onChange(manualDate(text));
        }}
      />
      <button
        type="button"
        disabled={props.disabled}
        className="btn btn-outline-secondary"
        onClick={() => setOpen(true)}
      >
        ▦
      </button>
    </div>
  );
}
export function DateControl(props: DateProps) {
  const value = props.field.value ? dayjs(props.field.value as DateValue) : null;
  const age =
    props.birth && props.field.value
      ? Math.floor(
          dayjs(props.policyStart).diff(dayjs(props.field.value as DateValue), 'years', true),
        )
      : undefined;
  return (
    <div className="mb-4">
      {props.label && <label htmlFor="">{props.label}</label>}
      <InputContext.Provider value={props}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={value}
            minDate={props.minDate ? dayjs(props.minDate) : undefined}
            maxDate={props.maxDate ? dayjs(props.maxDate) : undefined}
            disabled={props.disabled}
            format="DD/MM/YYYY"
            slots={{ field: MaskedDateField }}
            onChange={(v) => {
              props.callback?.();
              props.field.onChange(v?.isValid() ? pickedDate(v, props.birth) : undefined);
            }}
          />
        </LocalizationProvider>
      </InputContext.Provider>
      {age ? <span>{age} years old</span> : null}
      <FormError message={props.error} />
    </div>
  );
}
