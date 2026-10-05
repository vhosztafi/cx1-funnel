'use client';
import { useLocalFormDraft } from '@/integration/local-draft-controls';
import { useState } from 'react';
import { Controller, useForm, useWatch, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Dialog from '@mui/material/Dialog';
import { DateControl } from '@/components/date-control';
import {
  FormTextBox,
  FormTextBoxNumber,
  TextFieldCurrency,
  RadioList,
  yesNo,
} from '@/components/controls';
import { Navigator } from '@/components/navigator';
import { useJourney } from '@/runtime/use-journey';
import {
  businessDefinition as definition,
  businessDefaults,
  businessSchema,
  submitBusiness,
  agreeBusiness,
} from '@/domain/business';
export function BusinessSurface() {
  const journey = useJourney();
  const [assurance, setAssurance] = useState(false);
  const methods = useForm<Record<string, unknown>>({
    defaultValues: businessDefaults(journey.snapshot.formData),
    resolver: yupResolver(
      businessSchema(journey.snapshot.formData.proposerPolicyStartDate),
    ) as unknown as Resolver<Record<string, unknown>>,
  });
  useLocalFormDraft(methods, 'business');
  const values = useWatch({ control: methods.control });
  const ports = {
    save: journey.form.setData,
    next: () => journey.next(3),
    assurance: setAssurance,
  };
  return (
    <div className="container container-body-md">
      <h3>{definition.heading}</h3>
      <form
        noValidate
        onSubmit={methods.handleSubmit((data) =>
          submitBusiness(
            data,
            values.businessAnnualTurnover,
            values.businessIsVATRegistered,
            ports,
          ),
        )}
      >
        <Dialog
          maxWidth={false}
          open={assurance}
          onClose={() => setAssurance(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="business-assurance"
          slotProps={{ paper: { style: { width: 628, margin: 0, padding: 32, borderRadius: 10 } } }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: 16,
              lineHeight: '19.5px',
              textAlign: 'justify',
              marginBottom: 32,
            }}
          >
            {definition.assurance}
          </p>
          <div className="d-flex justify-content-end" style={{ gap: 12 }}>
            <button type="submit" className="btn disagree" onClick={() => setAssurance(false)}>
              Disagree
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => agreeBusiness(methods.getValues(), ports)}
            >
              Agree
            </button>
          </div>
        </Dialog>
        {definition.questions.map((q, index) => {
          if (
            (index === 4 && !values.businessIsTradeAssociationMember) ||
            (index === 6 && !values.businessIsVATRegistered)
          )
            return null;
          return (
            <Controller
              key={q.owner}
              name={q.path}
              control={methods.control}
              render={({ field, fieldState }) => {
                const props = { field, label: q.label, error: fieldState.error?.message };
                if (q.control === 'date')
                  return (
                    <DateControl
                      {...props}
                      minDate="1900-01-01"
                      maxDate={journey.snapshot.formData.proposerPolicyStartDate}
                    />
                  );
                if (q.control === 'currency') return <TextFieldCurrency {...props} />;
                if (q.control === 'number') return <FormTextBoxNumber {...props} />;
                if (q.control === 'radio')
                  return (
                    <RadioList
                      {...props}
                      options={yesNo}
                      onNegative={() =>
                        index === 3
                          ? methods.setValue('businessTradeAssociationName', null)
                          : methods.resetField('businessVATNumber', { defaultValue: '' })
                      }
                    />
                  );
                return <FormTextBox {...props} maxLength={index === 6 ? 20 : undefined} />;
              }}
            />
          );
        })}
        <Navigator
          step={journey.snapshot.step}
          prev={() => journey.form.setData(methods.getValues())}
          previous={() => journey.previous(3)}
        />
      </form>
    </div>
  );
}
