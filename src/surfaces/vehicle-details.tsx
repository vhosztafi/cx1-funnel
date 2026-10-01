'use client';
import { lookupCardValue, selectedVehicleCategory } from '@/domain/vehicle-card';
import { currencyFormat } from '@/domain/currency';
import { useState } from 'react';
import {
  useForm,
  Controller,
  useFieldArray,
  useWatch,
  type Resolver,
  type Control,
} from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AutoComplete,
  FormTextBox,
  FormTextBoxNumber,
  TextFieldCurrency,
  RadioList,
  yesNo,
  FormError,
} from '@/components/controls';
import { DateControl } from '@/components/date-control';
import { VehicleRegistration } from '@/components/vehicle-registration';
import { Navigator } from '@/components/navigator';
import definition from '@/contracts/vehicle/questions.json';
import specifiedDefinition from '@/contracts/vehicle/specified-questions.json';
import { vehicleDetailSchema, specifiedLeanSchema } from '@/domain/vehicle-schema';
import {
  vehicleOwnerOptions,
  vehicleOwnerSelection,
  overnightOptions,
  vehicleParameters,
  motorcycleVehicleAllowed,
} from '@/domain/vehicle-rules';
import {
  saveVehicleDetail,
  vehicleDetailBack,
  specifiedDefaults,
  specifiedResolverBranch,
  specifiedSubmitProjection,
} from '@/domain/vehicle-workflow';
import { strictOption } from '@/domain/options';
import type { RawVehicle } from '@/domain/types';
import { useJourney } from '@/runtime/use-journey';
import { readVehicleValidators, vehiclePorts } from '@/runtime/vehicle-ports';
type Values = Record<string, unknown>;
type ArrayValues = {
  vehicleModifications: { modificationId?: number }[];
  modifications: { modificationID?: number }[];
};
// MTS-08A / MTS-09: field order is shared, while defaults/resolvers/projections are explicit branches.
export function VehicleDetails({ specified = false }: { specified?: boolean }) {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const index = journey.routeState?.editingVehicle ?? 0;
  const original = specified ? raw.specifiedVehicles?.[0] : raw.vehicles?.[index];
  const [manual, setManual] = useState(!!original?.isManualEntry);
  const [retrieved, setRetrieved] = useState<RawVehicle | null>(
    original && !original.isManualEntry ? original : null,
  );
  const [showLookup, setShowLookup] = useState(!original || !!original.isManualEntry);
  const [addingSpecified, setAddingSpecified] = useState(!!raw.specifiedVehicles?.length);
  const [now] = useState(() => journey.host.now?.() ?? new Date());
  const fullSchema = vehicleDetailSchema({
    raw,
    parameters: vehicleParameters(raw, journey.options, readVehicleValidators()),
    manualEnter: manual,
    editingIndex: index,
    specified,
    now,
    currencyFormat,
  });
  const branch = specified ? specifiedResolverBranch(addingSpecified, raw) : 'full';
  const schema =
    branch === 'full' ? fullSchema : branch === 'lean' ? specifiedLeanSchema() : undefined;
  const methods = useForm<Values>({
    defaultValues: specified
      ? specifiedDefaults(raw)
      : {
          ...Object.fromEntries(
            Object.entries(original || {}).filter(([, value]) => value !== null),
          ),
          vehicleModifications: original?.vehicleModifications || [],
        },
    resolver: schema
      ? (yupResolver(schema as AnyObjectSchema) as unknown as Resolver<Values>)
      : undefined,
  });
  const values = useWatch({ control: methods.control });
  const modsName = specified ? 'modifications' : 'vehicleModifications';
  const modsKey = specified ? 'modificationID' : 'modificationId';
  const { fields, append, remove } = useFieldArray({
    control: methods.control as unknown as Control<ArrayValues>,
    name: modsName,
  });
  const enterManual = () => {
    setManual(true);
    setShowLookup(true);
    methods.setValue('isManualEntry', true);
  };
  const clearModification = () => methods.clearErrors('customModificationError');
  const render = (number: number) => {
    const ordinary = definition.questions[number - 1];
    const q = specified
      ? (specifiedDefinition.questions.find((question) => question.path === ordinary.path) ??
        ordinary)
      : ordinary;
    const name = q.path;
    return (
      <Controller
        key={name}
        name={name}
        control={methods.control}
        render={({ field, fieldState }) => {
          const props = { field, label: q.label, error: fieldState.error?.message };
          if (
            [
              'make',
              'model',
              'abiCode',
              'bodyType',
              'fuelType',
              'transmission',
              'engineSize',
            ].includes(name)
          )
            return <FormTextBox {...props} />;
          if (
            ['abiGroup', 'gvw', 'seats', 'doors', 'registrationYear', 'leaseLengthYears'].includes(
              name,
            )
          )
            return (
              <>
                <FormTextBoxNumber {...props} makeNull={name === 'abiGroup' || name === 'gvw'} />
                {!specified &&
                  name === 'seats' &&
                  typeof field.value === 'number' &&
                  field.value >= 9 && <p>MT only usage</p>}
              </>
            );
          if (name === 'vehicleValue') return <TextFieldCurrency {...props} />;
          if (name === 'registrationDate' || name === 'purchaseDate')
            return (
              <DateControl
                {...props}
                minDate="1900-01-01"
                maxDate={name === 'purchaseDate' && !specified ? now : undefined}
              />
            );
          if (name === 'ownerTypeID')
            return (
              <AutoComplete
                {...props}
                field={{
                  ...field,
                  value: field.value === 4 ? values.ownerGuid : field.value,
                  onChange: (value) => {
                    const normalized = vehicleOwnerSelection(value);
                    methods.setValue('ownerTypeID', normalized.ownerTypeID);
                    methods.setValue('ownerGuid', normalized.ownerGuid);
                  },
                }}
                options={vehicleOwnerOptions(raw, specified)}
              />
            );
          if (name === 'vehicleTypeID')
            return (
              <AutoComplete
                {...props}
                options={journey.options.vehicleType}
                callback={(value) =>
                  methods.setValue(
                    'chosenVehicleType',
                    selectedVehicleCategory(journey.options, value),
                  )
                }
              />
            );
          if (name === 'keptOvernightTypeID')
            return <AutoComplete {...props} options={journey.options.vehicleKeptOvernightType} />;
          if (name === 'vehicleKeptAddress')
            return (
              <AutoComplete
                {...props}
                options={overnightOptions(raw, specified, journey.host.address?.formatPostcode)}
              />
            );
          return (
            <RadioList
              {...props}
              options={yesNo}
              onNegative={() => {
                if (name === 'isPartLeaseAgreement') methods.setValue('leaseLengthYears', null);
                if (name === 'hasModification' && fields.length) remove();
              }}
              onPositive={() => {
                if (name === 'hasModification' && !fields.length)
                  append(specified ? { modificationID: undefined } : { modificationId: undefined });
              }}
            />
          );
        }}
      />
    );
  };
  async function submit(data: Values) {
    if (specified) {
      journey.form.setData(specifiedSubmitProjection(data));
      journey.next(9);
    } else await saveVehicleDetail(data, raw, index, vehiclePorts(journey));
  }
  function back() {
    if (specified) {
      journey.form.setStep(8);
      journey.internal({ showVehicles: true }, 8);
      return;
    }
    const destination = vehicleDetailBack(raw, journey.routeState?.navigateList);
    if (destination.step === 7) journey.previous(8);
    else journey.internal(destination.state!, 8);
  }
  return (
    <div className="container container-body-md">
      <h3>{specified ? 'Specified Vehicle' : 'Vehicles'}</h3>
      <form noValidate onSubmit={methods.handleSubmit(submit)}>
        {specified && (
          <Controller
            name="addSpecifiedVehicle"
            control={methods.control}
            render={({ field, fieldState }) => (
              <RadioList
                field={field}
                label={specifiedDefinition.questions[0].label}
                options={yesNo}
                error={fieldState.error?.message}
                onPositive={() => {
                  setAddingSpecified(true);
                  setShowLookup(true);
                }}
                onNegative={() => {
                  methods.clearErrors();
                  setAddingSpecified(false);
                }}
              />
            )}
          />
        )}
        {(!specified || addingSpecified) && (
          <>
            {showLookup && (
              <Controller
                name="regNumber"
                control={methods.control}
                render={({ field, fieldState }) => (
                  <VehicleRegistration
                    field={field}
                    label="Vehicle Registration"
                    error={fieldState.error?.message}
                    specified={specified}
                    defaultRegistration={original?.regNumber}
                    ordinary={raw.vehicles}
                    specifiedRows={raw.specifiedVehicles}
                    consume={journey.host.consumeVehicleLookup ?? (() => new Promise(() => {}))}
                    eligibility={(result) => {
                      const supplied = journey.host.vehicleLookupEligibility?.(result);
                      if (supplied) return supplied;
                      const category = strictOption(
                        journey.options.vehicleType,
                        result.values.vehicleTypeID,
                      )?.category;
                      return category === 'Motorcycle' && !motorcycleVehicleAllowed(raw)
                        ? 'Motorcycle type is not allowed.'
                        : undefined;
                    }}
                    trigger={() => {
                      void methods.trigger('regNumber');
                    }}
                    setError={(message) => methods.setError('regNumber', { message })}
                    clearErrors={() => methods.clearErrors()}
                    reset={(value) => methods.reset(value)}
                    setValue={methods.setValue}
                    setManual={setManual}
                    populated={(result) => {
                      setRetrieved(result.values);
                      setShowLookup(false);
                      methods.setValue(
                        'chosenVehicleType',
                        selectedVehicleCategory(journey.options, result.values.vehicleTypeID),
                      );
                    }}
                    failed={() => setRetrieved(null)}
                    animation={journey.host.loadingAnimation}
                  />
                )}
              />
            )}
            {!manual && retrieved && (
              <div className="vehicle-lookup-card">
                <div>{retrieved.regNumber}</div>
                {definition.questions.slice(1, 16).map((q) => (
                  <div key={q.path}>
                    {q.label}{' '}
                    {lookupCardValue(
                      q.path,
                      retrieved,
                      journey.options,
                      journey.host.lookupCardFormatter,
                    )}
                  </div>
                ))}
                <button type="button" className="btn btn-link" onClick={enterManual}>
                  Edit
                </button>
              </div>
            )}
            {['customAbiError', 'customGvwError'].map((name) => (
              <Controller
                key={name}
                name={name}
                disabled
                control={methods.control}
                render={({ fieldState }) => <FormError message={fieldState.error?.message} />}
              />
            ))}
            {manual && definition.questions.slice(1, 16).map((_, i) => render(i + 2))}
            {(retrieved || manual) && (
              <>
                {[17, 18, 19, 20, 21, 22].map(render)}
                {!!values.isPartLeaseAgreement && render(23)}
                {!specified && render(24)}
                {render(25)}
                <Controller
                  name="customModificationError"
                  disabled
                  control={methods.control}
                  render={({ fieldState }) => <FormError message={fieldState.error?.message} />}
                />
                {!!values.hasModification && (
                  <>
                    {fields.map((row, i) => (
                      <div key={row.id}>
                        <div className="d-flex justify-content-between">
                          <h4>Modification {i + 1}</h4>
                          {i > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                remove(i);
                                clearModification();
                              }}
                            >
                              X
                            </button>
                          )}
                        </div>
                        <Controller
                          name={`${modsName}.${i}.${modsKey}`}
                          control={methods.control}
                          render={({ field, fieldState }) => (
                            <AutoComplete
                              field={field}
                              label="What modifications have been made?"
                              options={journey.options.vehicleModifications}
                              error={fieldState.error?.message}
                              callback={clearModification}
                            />
                          )}
                        />
                      </div>
                    ))}
                    {fields.length < 10 && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                          append(
                            specified
                              ? { modificationID: undefined }
                              : { modificationId: undefined },
                          )
                        }
                      >
                        {' '}
                        Add another modification
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
        <Navigator step={specified ? 9 : 8} text="Next" previous={back} />
      </form>
    </div>
  );
}
