'use client';
import { useLocalFormDraft } from '@/integration/local-draft-controls';
import { useForm, Controller, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DetailCollapser,
  TextFieldPercentage,
  FormTextBoxNumber,
  FormTextBox,
  FormError,
} from '@/components/controls';
import { Navigator } from '@/components/navigator';
import { useJourney } from '@/runtime/use-journey';
import { readVehicleValidators } from '@/runtime/vehicle-ports';
import {
  vehicleTypesDefinition as definition,
  vehicleTypeForces,
  vehicleTypesDefaults,
  vehicleTypesSchema,
  vehicleTypesSubmit,
  type TypeForces,
} from '@/domain/vehicle-types';
export function VehicleTypesSurface() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const forces = vehicleTypeForces(raw, journey.options, readVehicleValidators().abi);
  const defaults = vehicleTypesDefaults(raw, forces);
  const methods = useForm<Record<string, unknown>>({
    defaultValues: defaults,
    resolver: yupResolver(vehicleTypesSchema(forces)) as unknown as Resolver<
      Record<string, unknown>
    >,
  });
  useLocalFormDraft(methods, 'vehicle-types');
  const percentageChanged = () => {
    if (methods.formState.errors.totalPercentage) void methods.trigger('totalPercentage');
  };
  return (
    <div className="container container-body-md">
      <h3>Vehicles to be Driven</h3>
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) => {
          journey.form.setData(vehicleTypesSubmit(data));
          journey.next(10);
        })}
      >
        {definition.categories.map((category) => {
          const percent = (
            <Controller
              name={category.percentage.path}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextFieldPercentage
                  field={field}
                  label={category.percentage.label}
                  error={fieldState.error?.message}
                  numberFormat
                  callback={percentageChanged}
                />
              )}
            />
          );
          if (forces[category.path as keyof TypeForces])
            return (
              <div className="my-4" key={category.path}>
                {percent}
              </div>
            );
          return (
            <DetailCollapser
              key={category.path}
              text={category.label}
              initialAdded={!!defaults[category.path]}
              added={category.path}
              setValue={methods.setValue}
              onClose={() => {
                methods.setValue(category.percentage.path, 0);
                if (category.detail) methods.resetField(category.detail.path);
              }}
            >
              {percent}
              {category.detail && (
                <Controller
                  name={category.detail.path}
                  control={methods.control}
                  render={({ field, fieldState }) =>
                    category.detail!.type === 'number' ? (
                      <FormTextBoxNumber
                        field={field}
                        label={category.detail!.label}
                        error={fieldState.error?.message}
                      />
                    ) : (
                      <FormTextBox
                        field={field}
                        label={category.detail!.label}
                        error={fieldState.error?.message}
                        type="textarea"
                        placeholder="Please provide details:"
                      />
                    )
                  }
                />
              )}
            </DetailCollapser>
          );
        })}
        {['totalPercentage', 'atLeastOneType'].map((name) => (
          <Controller
            key={name}
            name={name}
            control={methods.control}
            render={({ fieldState }) => (
              <FormError
                message={
                  typeof fieldState.error?.message === 'string'
                    ? fieldState.error.message
                    : undefined
                }
              />
            )}
          />
        ))}
        <div className="mt-4">
          <Navigator
            step={10}
            prev={() => journey.form.setData(methods.getValues())}
            previous={() => journey.previous(10)}
          />
        </div>
      </form>
    </div>
  );
}
