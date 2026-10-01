'use client';
import { Controller, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RadioList, yesNo, FormTextBox } from '@/components/controls';
import { Navigator } from '@/components/navigator';
import {
  additionalDefinition as definition,
  additionalDefaults,
  additionalPredicates,
  additionalSchema,
  additionalProjection,
} from '@/domain/additional-information';
import { useJourney } from '@/runtime/use-journey';
export function AdditionalInformationSurface() {
  const journey = useJourney();
  const predicates = additionalPredicates(journey.snapshot.formData, journey.options);
  const methods = useForm<Record<string, unknown>>({
    defaultValues: additionalDefaults(journey.snapshot.formData),
    resolver: yupResolver(additionalSchema(predicates.jockey)) as unknown as Resolver<
      Record<string, unknown>
    >,
  });
  return (
    <div className="container container-body-md">
      <h3>{definition.heading}</h3>
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) => {
          journey.form.setData(additionalProjection(data, predicates));
          journey.next(13);
        })}
      >
        {definition.questions.map((q, index) =>
          (index === 1 && !predicates.jockey) || (index === 2 && !predicates.shunter) ? null : (
            <Controller
              key={q.path}
              name={q.path}
              control={methods.control}
              render={({ field, fieldState }) =>
                index === 0 ? (
                  <FormTextBox
                    field={field}
                    label={q.label}
                    type="textarea"
                    maxLength={1000}
                    error={fieldState.error?.message}
                  />
                ) : (
                  <RadioList
                    field={field}
                    label={q.label}
                    options={index === 1 ? journey.options.carJockeyRadii : yesNo}
                    error={fieldState.error?.message}
                  />
                )
              }
            />
          ),
        )}
        <Navigator
          step={13}
          prev={() => journey.form.setData(additionalProjection(methods.getValues(), predicates))}
          previous={() => journey.previous(13)}
        />
      </form>
    </div>
  );
}
