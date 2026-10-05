'use client';
import { useLocalFormDraft } from '@/integration/local-draft-controls';
import { Controller, useForm, useFieldArray, useWatch, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RadioList, yesNo, FormTextBoxNumber, FormTextBox, FormError } from '@/components/controls';
import { Navigator } from '@/components/navigator';
import {
  tradePlatesDefinition as definition,
  tradePlatesDefaults,
  tradePlatesSchema,
  tradePlatesDisabled,
  submitTradePlates,
  backTradePlates,
  type TradePlatesForm,
  type TradePlatePorts,
} from '@/domain/trade-plates';
import { useJourney } from '@/runtime/use-journey';
import { validateStoredVehicle } from '@/runtime/vehicle-ports';
export function TradePlatesSurface() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const methods = useForm<TradePlatesForm>({
    defaultValues: tradePlatesDefaults(raw),
    resolver: yupResolver(tradePlatesSchema()) as unknown as Resolver<TradePlatesForm>,
  });
  useLocalFormDraft(methods, 'trade-plates');
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'tradePlateNumbers',
  });
  const covered = useWatch({ control: methods.control, name: 'tradePlateCovered' });
  const disabled = tradePlatesDisabled(raw, journey.host.existingTradePlates);
  const ports: TradePlatePorts = {
    save: journey.form.setData,
    scroll: () => window.scrollTo(0, 0),
    setStep: journey.form.setStep,
    route: journey.internal,
    validate: (vehicle, index, form) => validateStoredVehicle(journey, vehicle, index, form),
  };
  const q = definition.questions;
  return (
    <div className="container container-body-md no-border-radius">
      <h3>{definition.heading}</h3>
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) => submitTradePlates(data, raw, ports))}
      >
        <Controller
          name="tradePlateCovered"
          control={methods.control}
          render={({ field, fieldState }) => (
            <RadioList
              field={field}
              label={q[0].label}
              options={yesNo}
              disabled={disabled}
              error={fieldState.error?.message}
              onNegative={() => {
                methods.resetField('tradePlateMaxNumber', { defaultValue: 0 });
                remove();
              }}
            />
          )}
        />
        {covered && (
          <Controller
            name="tradePlateMaxNumber"
            control={methods.control}
            render={({ field, fieldState }) => (
              <FormTextBoxNumber
                field={field}
                label={q[1].label}
                error={fieldState.error?.message}
              />
            )}
          />
        )}
        {fields.map((row, index) => (
          <div key={row.id}>
            <div className="d-flex justify-content-between">
              <h4>
                {q[2].rowHeading}
                {index + 1}
              </h4>
              <button
                className="btn btn-danger"
                disabled={disabled}
                type="button"
                onClick={() => remove(index)}
              >
                X
              </button>
            </div>
            <Controller
              name={`tradePlateNumbers.${index}.plateNumber`}
              control={methods.control}
              render={({ field, fieldState }) => (
                <FormTextBox
                  field={field}
                  label={q[2].label}
                  disabled={disabled}
                  error={fieldState.error?.message}
                />
              )}
            />
            {index < fields.length - 1 && <hr />}
          </div>
        ))}
        <FormError
          message={
            methods.formState.errors.tradePlateNumbers?.root?.message ??
            methods.formState.errors.tradePlateNumbers?.message
          }
        />
        {covered && fields.length < 150 && (
          <button
            type="button"
            disabled={disabled}
            className="btn btn-primary"
            onClick={() => append({ plateNumber: '' })}
          >
            {journey.host.tradePlateAddLabel}
          </button>
        )}
        <Navigator
          step={7}
          text="Next"
          previous={() => backTradePlates(methods.getValues(), raw, ports)}
        />
      </form>
    </div>
  );
}
