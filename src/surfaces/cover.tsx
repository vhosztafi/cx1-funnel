'use client';
import { optionRows } from '@/domain/options';
import { useRef, useState } from 'react';
import type { SelectInstance } from 'react-select';
import { Controller, useForm, useWatch, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Collapse from 'react-bootstrap/Collapse';
import { AutoComplete, RadioList, FormTextBox, yesNo, type Choice } from '@/components/controls';
import { DateControl } from '@/components/date-control';
import { Navigator } from '@/components/navigator';
import { dayjs } from '@/domain/dates';
import { useJourney } from '@/runtime/use-journey';
import {
  coverDefinition as definition,
  coverDefaults,
  coverSchema,
  coverSubmit,
  coverHasLimits,
  hasNcb,
  customerLoi,
  introRenewal,
  ownCoverOptions,
  customerCoverOptions,
  coverExcesses,
} from '@/domain/cover';
export function CoverSurface() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const options = journey.options;
  const [today] = useState(() =>
    dayjs(journey.host.now?.() ?? new Date())
      .startOf('day')
      .toDate(),
  );
  const excess = useRef<SelectInstance<Choice>>(null);
  const methods = useForm<Record<string, unknown>>({
    defaultValues: coverDefaults(raw),
    resolver: yupResolver(coverSchema(raw, options)) as unknown as Resolver<
      Record<string, unknown>
    >,
  });
  const values = useWatch({ control: methods.control });
  const limits = coverHasLimits(values.coverLevelID);
  const introductory = introRenewal(values, options);
  function field(index: number) {
    const q = definition.questions[index] as {
      path: string;
      label: string;
      control: string;
      id?: string;
      options?: string;
      defaultValue?: unknown;
      disabled?: boolean;
      placeholder?: string;
    };
    return (
      <Controller
        key={q.path}
        name={q.path}
        control={methods.control}
        defaultValue={q.defaultValue}
        render={({ field, fieldState }) => {
          const props = {
            field,
            label: q.label,
            error: fieldState.error?.message,
            disabled: q.disabled,
            id: q.id,
            placeholder: q.placeholder,
          };
          if (q.control === 'radio')
            return (
              <RadioList
                {...props}
                options={q.options ? optionRows(options, q.options) : yesNo}
                disabled={index === 16 ? !!raw.isMta : q.disabled}
                animation={journey.host.loadingAnimation}
              />
            );
          if (q.control === 'date')
            return <DateControl {...props} minDate="1900-01-01" maxDate={today} />;
          if (q.control === 'text')
            return (
              <>
                <label>{q.label}</label>
                <FormTextBox {...props} label={undefined} maxLength={50} />
              </>
            );
          const rows =
            index === 1
              ? ownCoverOptions(values.coverLevelID, options)
              : index === 2
                ? customerCoverOptions(values.coverLevelID, options)
                : index === 3
                  ? coverExcesses(
                      values.coverLevelID,
                      values.coverIndemnityLimitOwnVehiclesID,
                      options,
                    )
                  : optionRows(options, q.options);
          return (
            <AutoComplete
              {...props}
              options={rows}
              selectRef={index === 3 ? excess : undefined}
              callback={(value) => {
                if (index === 1) {
                  excess.current?.clearValue();
                  methods.setValue('coverExcessID', '');
                }
                if (index === 9 && value === 1) methods.setValue('coverNCBEarnedID', undefined);
                if (index === 10)
                  methods.setValue(
                    'coverIsNCBProtected',
                    value === 3 && raw.isMta ? false : undefined,
                  );
              }}
            />
          );
        }}
      />
    );
  }
  return (
    <div className="container container-body-md">
      <form
        noValidate
        onSubmit={methods.handleSubmit((values) => {
          journey.form.setData(coverSubmit(values, raw, options));
          journey.next(5);
        })}
      >
        <h3>{definition.heading}</h3>
        {field(0)}
        {limits && (
          <>
            <h4>Limit of Indemnity</h4>
            {field(1)}
            {customerLoi(raw, options) && field(2)}
            <h4>Excess</h4>
            {field(3)}
            {field(4)}
            {field(5)}
            {field(6)}
          </>
        )}
        {field(7)}
        {!!values.requireCustomerLoanCover && field(8)}
        <h4>No Claims Bonus</h4>
        {field(9)}
        {hasNcb(values.coverNCBID) && (
          <>
            {field(10)}
            {field(11)}
            {field(12)}
            {introductory && (
              <>
                {field(13)}
                {!!values.hasCoverNCBIntroRenewal && field(14)}
              </>
            )}
            <Collapse in={values.coverNCBPreviousInsurerId === 21}>
              <div>{field(15)}</div>
            </Collapse>
          </>
        )}
        {values.coverNCBEarnedID === 3 && field(16)}
        <Navigator
          step={journey.snapshot.step}
          prev={() => journey.form.setData(methods.getValues())}
          previous={() => journey.previous(5)}
        />
      </form>
    </div>
  );
}
