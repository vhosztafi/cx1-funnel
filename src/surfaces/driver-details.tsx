'use client';
import { useEffect, useState } from 'react';
import {
  useForm,
  useWatch,
  useFieldArray,
  Controller,
  type Resolver,
  type Control,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import questionsData from '@/contracts/driver/questions.json';
import {
  AutoComplete,
  FormTextBox,
  FormTextBoxNumber,
  TextFieldCurrency,
  RadioList,
  FormError,
  yesNo,
} from '@/components/controls';
import { DateControl } from '@/components/date-control';
import { AddressControl } from '@/components/address-control';
import { useJourney } from '@/runtime/use-journey';
import { driverPorts } from '@/runtime/driver-ports';
import { unresolvedAddress } from '@/runtime/address-input';
import { driverDetailSchema } from '@/domain/driver-schema';
import {
  driverHistoryDefinitions,
  newHistoryRow,
  driverHistoryActive,
  historyRemoval,
} from '@/domain/driver-histories';
import {
  driverDateClears,
  cleanDriver,
  relationshipOptions,
  youngAndExperienceOptions,
} from '@/domain/driver-rules';
import { saveDriverDetail, driverDetailBack } from '@/domain/driver-workflow';
import { optionRows } from '@/domain/options';
import type { RawDriver } from '@/domain/types';
interface Values extends Record<string, unknown> {
  driverOccupations?: Record<string, unknown>[];
  driverMotortradingConvictions?: Record<string, unknown>[];
  driverClaims?: Record<string, unknown>[];
  criminalConvictions?: Record<string, unknown>[];
  countyCourtJudgements?: Record<string, unknown>[];
}
function useHistory(control: Control<Values>, index: number) {
  const group = driverHistoryDefinitions.groups[index];
  const array = useFieldArray({
    control: control as unknown as Control<{
      driverOccupations: Values[];
      driverMotortradingConvictions: Values[];
      driverClaims: Values[];
      criminalConvictions: Values[];
      countyCourtJudgements: Values[];
    }>,
    name: group.array,
  });
  const parent = useWatch({ control, name: group.parent });
  const active = driverHistoryActive(group.parent, parent);
  const { append } = array;
  const length = array.fields.length;
  useEffect(() => {
    if (active && length === 0) append(newHistoryRow(group));
  }, [active, length, append, group]);
  return { ...array, group, active };
}
export function DriverDetails() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const index = journey.routeState?.editDriver ?? 0;
  const defaults = raw.drivers?.[index] || {};
  const [now] = useState(() => journey.host.now?.() ?? new Date());
  const methods = useForm<Values>({
    defaultValues: defaults,
    resolver: yupResolver(
      driverDetailSchema({
        raw,
        options: journey.options,
        postcodePattern: journey.host.postcodePattern,
        messages: journey.host.driverErrors,
        now,
      }),
    ) as unknown as Resolver<Values>,
  });
  const values = useWatch({ control: methods.control });
  const d = youngAndExperienceOptions(values as RawDriver, raw, journey.options);
  const h0 = useHistory(methods.control, 0),
    h1 = useHistory(methods.control, 1),
    h2 = useHistory(methods.control, 2),
    h3 = useHistory(methods.control, 3),
    h4 = useHistory(methods.control, 4);
  const histories = [h0, h1, h2, h3, h4];
  const fullName = `${values.firstName || ''} ${values.surname || ''}`;
  function renderField(number: number, path?: string) {
    const q = questionsData.questions.find(
      (q) => q.owner === `MTS-06-Q${String(number).padStart(2, '0')}`,
    )!;
    const name = path ?? q.path;
    if (number === 13) {
      const fields = questionsData.questions
        .filter((q) => Number(q.owner.slice(-2)) >= 14 && Number(q.owner.slice(-2)) <= 18)
        .map((q) => ({ path: q.path, label: q.label!, maxLength: 50 }));
      return (
        <AddressControl
          key="postCode"
          variant="driver"
          label="Postcode:"
          postcodePath="postCode"
          showAddressPath="showAddress"
          placeholder="eg. SL4 1PD"
          manualText="Enter Manually"
          fields={fields}
          values={values}
          defaults={defaults}
          setValue={(path, value) => methods.setValue(path, value)}
          errors={Object.fromEntries(
            Object.entries(methods.formState.errors).map(([key, error]) => [key, error?.message]),
          )}
          setError={(path, message) => methods.setError(path, { message })}
          clearError={(path) => methods.clearErrors(path)}
          trigger={(path) => {
            void methods.trigger(path);
          }}
          ports={journey.host.address ?? unresolvedAddress}
          animation={journey.host.loadingAnimation}
        />
      );
    }
    let label = q.label;
    if (number === 58)
      label = label
        ?.replace('{{additionalExcess}}', d.band?.additionalExcess ?? '')
        .replace("{{firstName || ''}}", String(values.firstName || ''))
        .replace("{{surname || ''}}", String(values.surname || ''));
    if (number === 60)
      label = label
        ?.replace('{{fullName}}', fullName)
        .replace('{{defaultCc}}', d.band?.defaultCc ?? '');
    if (number === 59 || number === 61 || number === 62)
      label = journey.host.driverPrompts?.[q.owner as 'MTS-06-Q59' | 'MTS-06-Q61' | 'MTS-06-Q62']?.(
        {
          fullName,
          excessLimit: d.limit,
          defaultAdditionalIndemnity: d.band?.defaultAdditionalIndemnity,
          indemnity: journey.options.driverExperienceBasedExcesses?.[0]?.text,
          defaultCc: d.experienceCC[0]?.text,
        },
      );
    return (
      <Controller
        key={name}
        name={name}
        control={methods.control}
        render={({ field, fieldState }) => {
          const props = { field, label, error: fieldState.error?.message, id: q.id };
          const rows =
            number === 12
              ? relationshipOptions(raw, journey.options)
              : number === 59
                ? d.indemnities
                : number === 60
                  ? d.ccs
                  : number === 61
                    ? d.experienceExcesses
                    : number === 62
                      ? d.experienceCC
                      : optionRows(journey.options, q.options);
          if (q.control === 'auto')
            return (
              <AutoComplete
                {...props}
                options={rows}
                callback={(value) => {
                  if (number === 25 && value === 1)
                    methods.setValue('motorcycleLicenceIssueDate', null);
                  if (number === 29 && methods.formState.errors.customOccupationsError)
                    methods.clearErrors('customOccupationsError');
                }}
              />
            );
          if (q.control === 'radio')
            return (
              <RadioList
                {...props}
                options={q.options || number === 59 || number === 60 ? rows : yesNo}
                animation={journey.host.loadingAnimation}
                onChoice={(option) => {
                  if (number === 28 && option.value === 1) h0.remove();
                }}
                onPositive={() => {
                  if (number === 21) methods.setValue('ukResidenceSince', null);
                }}
                onNegative={() => {
                  if (number === 46) methods.setValue('hasReportedDisabilityDetails', null);
                  const group = histories.find((h) => h.group.parent === q.path);
                  if (group) group.remove();
                  if (number === 38)
                    methods.setValue(name.replace(/disqualified$/, 'banLength'), undefined);
                }}
              />
            );
          if (q.control === 'date' || q.control === 'birth')
            return (
              <DateControl
                {...props}
                birth={q.control === 'birth'}
                policyStart={raw.proposerPolicyStartDate}
                minDate="1900-01-01"
                maxDate={number === 11 || number === 22 ? now : undefined}
                callback={() => {
                  const clears =
                    number === 11
                      ? driverDateClears.birth
                      : number === 24
                        ? driverDateClears.licence
                        : [];
                  clears.forEach((path) => methods.setValue(path, null, { shouldValidate: true }));
                }}
              />
            );
          if (q.control === 'number')
            return <FormTextBoxNumber {...props} maxLength={q.maxLength} />;
          if (q.control === 'currency') return <TextFieldCurrency {...props} />;
          return <FormTextBox {...props} maxLength={q.maxLength} />;
        }}
      />
    );
  }
  function history(h: typeof h0) {
    const { group } = h;
    if (!h.active) return null;
    const rows = values[group.array] as Values[] | undefined;
    return (
      <>
        {group.array === 'driverOccupations' && (
          <Controller
            name="customOccupationsError"
            control={methods.control}
            disabled
            shouldUnregister
            render={({ fieldState }) => <FormError message={fieldState.error?.message} />}
          />
        )}{' '}
        {h.fields.map((item, index) => (
          <div key={item.id}>
            {index > 0 && <hr />}
            <div className="d-flex justify-content-between">
              <h4>
                {group.heading} {index + 1}
              </h4>
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: 46, height: 46 }}
                  onClick={() => {
                    const changes = historyRemoval(
                      methods.getValues(group.array) as Values[],
                      index,
                      group.lastRemovalParent,
                    );
                    h.remove(index);
                    Object.entries(changes.writes).forEach(([key, value]) =>
                      methods.setValue(key, value),
                    );
                    if (
                      group.array === 'driverOccupations' &&
                      methods.formState.errors.customOccupationsError
                    )
                      methods.clearErrors('customOccupationsError');
                  }}
                >
                  X
                </button>
              )}
            </div>
            {group.questions.map((number) =>
              number === 39 && !rows?.[index]?.disqualified
                ? null
                : renderField(
                    number,
                    `${group.array}.${index}.${questionsData.questions.find((q) => Number(q.owner.slice(-2)) === number)!.path.split('[].')[1]}`,
                  ),
            )}
          </div>
        ))}
        {h.fields.length > 0 && h.fields.length < group.limit && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => h.append(newHistoryRow(group))}
          >
            {group.add}
          </button>
        )}
      </>
    );
  }
  return (
    <div className="container container-body-md">
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) =>
          saveDriverDetail(
            cleanDriver(data as RawDriver, raw, journey.options),
            raw,
            index,
            driverPorts(journey),
          ),
        )}
      >
        {[8, 9, 10, 11, 12, 13, 19, 20, 21].map((number) => renderField(number))}
        {values.isUKResidentSinceBirth === false && renderField(22)}
        {renderField(23)}
        {renderField(24)}
        {renderField(25)}
        {!!values.motorcycleCoverID && values.motorcycleCoverID !== 1 && renderField(26)}
        {renderField(27)}
        {renderField(28)}
        {history(h0)}
        {renderField(31)}
        {renderField(32)}
        {renderField(33)}
        {history(h1)}
        {renderField(40)}
        {history(h2)}
        {renderField(46)}
        {!!values.hasReportedDisability && renderField(47)}
        {renderField(48)}
        {history(h3)}
        {renderField(53)}
        {history(h4)}
        {(d.age as number) < 25 && (
          <>
            <hr className="border-primary" />
            <h4>Young Driver Details</h4>
            {raw.coverLevelID !== 3 && (
              <>
                {renderField(58)}
                {d.indemnities.length >= 1 && renderField(59)}
              </>
            )}
            {renderField(60)}
          </>
        )}
        {(d.experience as number) < 1 && (d.age as number) > 24 && (
          <>
            <hr className="border-primary" />
            <h4>UK Licence for less than 1 year</h4>
            {raw.coverLevelID !== 3 && d.experienceExcesses.length >= 1 && renderField(61)}
            {renderField(62)}
          </>
        )}
        <div className="text-center d-flex flex-column my-5">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
          <button
            type="button"
            className="btn btn-link"
            onClick={() =>
              journey.internal(driverDetailBack(raw, journey.routeState?.navigateList))
            }
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
