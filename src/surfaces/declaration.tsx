'use client';
import { Controller, useForm, useWatch, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Collapse from 'react-bootstrap/Collapse';
import { RadioList, yesNo, FormTextBox } from '@/components/controls';
import { Navigator } from '@/components/navigator';
import {
  declarationDefinition as definition,
  declarationDefaults,
  declarationSchema,
} from '@/domain/declaration';
import { useJourney } from '@/runtime/use-journey';
export function DeclarationSurface() {
  const journey = useJourney();
  const methods = useForm<Record<string, unknown>>({
    defaultValues: declarationDefaults(journey.snapshot.formData),
    resolver: yupResolver(declarationSchema()) as unknown as Resolver<Record<string, unknown>>,
  });
  const values = useWatch({ control: methods.control });
  return (
    <div className="container container-body-md">
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) => {
          journey.form.setData(data);
          journey.next(12);
        })}
      >
        <h3>Declaration</h3>
        {definition.pairs.map((pair) => (
          <div className="d-flex flex-column" key={pair.path}>
            <Controller
              name={pair.path}
              control={methods.control}
              render={({ field, fieldState }) => (
                <RadioList
                  field={field}
                  label={pair.label}
                  options={yesNo}
                  error={fieldState.error?.message}
                  onNegative={() => methods.setValue(pair.detail.path, null)}
                />
              )}
            />
            <Collapse in={!!values[pair.path]}>
              <div>
                <Controller
                  name={pair.detail.path}
                  control={methods.control}
                  render={({ field, fieldState }) => (
                    <FormTextBox
                      field={field}
                      label={pair.detail.label}
                      type="textarea"
                      maxLength={500}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </div>
            </Collapse>
          </div>
        ))}
        <Navigator
          step={12}
          prev={() => journey.form.setData(methods.getValues())}
          previous={() => journey.previous(12)}
        />
      </form>
    </div>
  );
}
