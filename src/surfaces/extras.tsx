'use client';
import { useEffect } from 'react';
import {
  useForm,
  Controller,
  useFieldArray,
  useWatch,
  type Control,
  type Resolver,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DetailCollapser,
  AutoComplete,
  RadioList,
  yesNo,
  MultiSelect,
  FormSelect,
  FormError,
} from '@/components/controls';
import { DateControl } from '@/components/date-control';
import { Navigator } from '@/components/navigator';
import {
  extrasDefinition as definition,
  extrasDefaults,
  extrasSchema,
  extrasSubmit,
  newAnnualTrip,
  newTemporaryTrip,
  europeanControlsLocked,
  motorcycleDemonstrationVisible,
  policyEnd,
  type ExtrasValues,
  type AnnualTrip,
  type TemporaryTrip,
} from '@/domain/extras';
import { strictOption, looseOption } from '@/domain/options';
import { useJourney } from '@/runtime/use-journey';
function CustomError({ message }: { message?: string }) {
  useEffect(() => {
    if (message) document.getElementById('customError')?.scrollIntoView();
  }, [message]);
  return (
    <div id="customError">
      <FormError message={message} />
    </div>
  );
}
export function ExtrasSurface() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const methods = useForm<ExtrasValues>({
    defaultValues: extrasDefaults(raw),
    resolver: yupResolver(extrasSchema(raw, journey.options)) as unknown as Resolver<ExtrasValues>,
  });
  const defaults = methods.formState.defaultValues as ExtrasValues;
  const values = useWatch({ control: methods.control });
  const annual = useFieldArray({
    control: methods.control as unknown as Control<{ europeanCoverAnnualExtras: AnnualTrip[] }>,
    name: 'europeanCoverAnnualExtras',
  });
  const temporary = useFieldArray({
    control: methods.control as unknown as Control<{
      europeanCoverTemporaryExtras: TemporaryTrip[];
    }>,
    name: 'europeanCoverTemporaryExtras',
  });
  const locked = europeanControlsLocked(defaults);
  const registrations = raw.vehicles?.map((vehicle) => ({
    text: vehicle.regNumber as string,
    value: vehicle.regNumber,
  }));
  const label = (n: number) => definition.questions[n - 1].label;
  const clearAnnualError = () => {
    if (methods.formState.errors.customRegNumberError) methods.clearErrors('customRegNumberError');
  };
  const simple = (n: number) => {
    const q = definition.questions[n - 1];
    const options =
      n === 2
        ? journey.options.demonstrationCovers
        : n === 5
          ? journey.options.windScreenCovers
          : n === 9
            ? journey.options.thirdPartyDamageLimits
            : undefined;
    return (
      <Controller
        key={q.path}
        name={q.path}
        control={methods.control}
        render={({ field, fieldState }) =>
          [2, 5, 9].includes(n) ? (
            <AutoComplete
              field={field}
              label={q.label}
              options={options}
              error={fieldState.error?.message}
            />
          ) : (
            <RadioList
              field={field}
              label={q.label}
              options={yesNo}
              error={fieldState.error?.message}
            />
          )
        }
      />
    );
  };
  return (
    <div className="container container-body-md">
      <h3>Extras</h3>
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) => {
          journey.form.setData(extrasSubmit(data, raw));
          journey.next(11);
        })}
      >
        <DetailCollapser
          text={label(1)}
          added="demonstrationCover"
          initialAdded={!!defaults.demonstrationCover}
          setValue={methods.setValue}
          onClose={() => {
            methods.setValue('demonstrationCoverTypeID', undefined);
            methods.setValue('demonstrationCoverForMotorcycles', undefined);
          }}
        >
          {simple(2)}
          {motorcycleDemonstrationVisible(raw) && simple(3)}
        </DetailCollapser>
        <DetailCollapser
          text={label(4)}
          added="windscreenCover"
          initialAdded={!!defaults.windscreenCover}
          setValue={methods.setValue}
          onClose={() => {
            void methods.trigger('customWindscreenError');
            methods.setValue('windscreenCoverTypeID', undefined);
            methods.setValue('isAdditionalWindscreenCoverRequired', undefined);
          }}
        >
          {simple(5)}
          {simple(6)}
        </DetailCollapser>
        <Controller
          name="customWindscreenError"
          control={methods.control}
          disabled
          shouldUnregister
          render={({ fieldState }) => <CustomError message={fieldState.error?.message} />}
        />
        {[7, 8, 9].map(simple)}
        <DetailCollapser
          text="European cover"
          initialAdded={!!(defaults.annualEuropeanCover || defaults.temporaryEuropeanCover)}
          disabled={locked}
          onClose={() => {
            methods.setValue('annualEuropeanCover', false);
            methods.setValue('temporaryEuropeanCover', false);
            annual.remove();
            temporary.remove();
          }}
        >
          <Controller
            name="annualEuropeanCover"
            control={methods.control}
            render={({ field, fieldState }) => (
              <RadioList
                field={field}
                label={label(10)}
                options={yesNo}
                error={fieldState.error?.message}
                onPositive={() => annual.append(newAnnualTrip())}
                onNegative={() => annual.remove()}
              />
            )}
          />
          {!!values.annualEuropeanCover && annual.fields.length > 0 && (
            <>
              <Controller
                name="customRegNumberError"
                control={methods.control}
                disabled
                shouldUnregister
                render={({ fieldState }) => <CustomError message={fieldState.error?.message} />}
              />
              {annual.fields.map((row, index) => (
                <div key={row.id}>
                  {index > 0 && <hr />}
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        annual.remove(index);
                        clearAnnualError();
                      }}
                    >
                      X
                    </button>
                  )}
                  <Controller
                    name={`europeanCoverAnnualExtras.${index}.regNumber`}
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <AutoComplete
                        field={field}
                        label={label(11)}
                        options={registrations}
                        error={fieldState.error?.message}
                        callback={clearAnnualError}
                      />
                    )}
                  />
                  <Controller
                    name={`europeanCoverAnnualExtras.${index}.europeanCoverUsageTypeID`}
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <AutoComplete
                        field={field}
                        label={label(12)}
                        options={journey.options.europeanTripUsage}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => annual.append(newAnnualTrip())}
              >
                Add Another Vehicle
              </button>
            </>
          )}
          <Controller
            name="temporaryEuropeanCover"
            control={methods.control}
            render={({ field, fieldState }) => (
              <RadioList
                field={field}
                label={label(13)}
                options={yesNo}
                disabled={locked}
                error={fieldState.error?.message}
                onPositive={() => temporary.append(newTemporaryTrip(raw.driverPlanId))}
                onNegative={() => temporary.remove()}
              />
            )}
          />
          {!!values.temporaryEuropeanCover && temporary.fields.length > 0 && (
            <>
              {temporary.fields.map((row, index) => {
                const disabled = row.isDraft === false;
                const current = values.europeanCoverTemporaryExtras?.[index];
                const countries = looseOption(
                  journey.options.europeanArea,
                  current?.europeanAreaID,
                )?.countries;
                const field = (n: number) => {
                  const key = definition.questions[n - 1].path.split('[].')[1];
                  return (
                    <Controller
                      key={key}
                      name={`europeanCoverTemporaryExtras.${index}.${key}`}
                      control={methods.control}
                      render={({ field, fieldState }) => {
                        const props = {
                          field,
                          label: label(n),
                          disabled,
                          error: fieldState.error?.message,
                        };
                        if (n === 14) return <AutoComplete {...props} options={registrations} />;
                        if (n === 15 || n === 16)
                          return (
                            <DateControl
                              {...props}
                              minDate={
                                n === 15
                                  ? raw.proposerPolicyStartDate
                                  : (journey.host.now?.() ?? new Date())
                              }
                              maxDate={n === 16 ? policyEnd(raw).toISOString() : undefined}
                            />
                          );
                        if (n === 17)
                          return (
                            <>
                              <FormSelect
                                {...props}
                                options={journey.options.europeanArea}
                                numberFormat
                              />
                              {countries && (
                                <div style={{ backgroundColor: 'lavender' }}>
                                  Countries: {countries}
                                </div>
                              )}
                            </>
                          );
                        return (
                          <AutoComplete
                            {...props}
                            options={
                              n === 19
                                ? journey.options.europeanTripCover
                                : journey.options.europeanTripUsage
                            }
                          />
                        );
                      }}
                    />
                  );
                };
                return (
                  <div key={row.id}>
                    {index > 0 && <hr />}
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        disabled={disabled}
                        onClick={() => temporary.remove(index)}
                      >
                        X
                      </button>
                    )}
                    {[14, 15, 16, 17].map(field)}
                    {raw.driverPlanId === 3 ? (
                      <p>
                        {`Any driver between the ages of ${strictOption(journey.options.aadDriverMinAge, raw.aadDriverMinAgeId)?.text} and ${strictOption(journey.options.aadDriverMaxAge, raw.aadDriverMaxAgeId)?.text}`}
                      </p>
                    ) : disabled ? (
                      <div className="opacity-50">
                        Drivers: {row.europeanCoverDriverNames?.join(', ')}
                      </div>
                    ) : (
                      <Controller
                        name={`europeanCoverTemporaryExtras.${index}.europeanCoverDriverGuids`}
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <MultiSelect
                            field={field}
                            label="Drivers:"
                            error={fieldState.error?.message}
                            options={raw.drivers?.map((driver) => ({
                              text: `${driver.firstName} ${driver.surname}`,
                              value: driver.guid,
                            }))}
                          />
                        )}
                      />
                    )}
                    {[19, 20].map(field)}
                  </div>
                );
              })}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => temporary.append(newTemporaryTrip(raw.driverPlanId))}
              >
                Add Another Trip
              </button>
            </>
          )}
        </DetailCollapser>
        <Navigator
          step={11}
          prev={() => journey.form.setData(methods.getValues())}
          previous={() => journey.previous(11)}
        />
      </form>
    </div>
  );
}
