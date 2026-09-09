'use client';
import { useState, useRef, type ReactNode } from 'react';
import { Controller, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormHourBox } from '@/components/controls';
import { Navigator } from '@/components/navigator';
import { SummaryCollapser } from '@/components/summary-collapser';
import { summarySections, type SummaryRow } from '@/domain/summary';
import { summaryTimeSchema, prepareTerminal } from '@/domain/terminal';
import { summaryEdit } from '@/domain/navigation';
import { dayjs } from '@/domain/dates';
import { useJourney } from '@/runtime/use-journey';
function Rows({ rows }: { rows: SummaryRow[] }) {
  return rows.map((row, index) =>
    row.divider ? (
      <hr key={index} />
    ) : row.label !== undefined ? (
      <div key={index} className="d-flex justify-content-between mb-3">
        <span>{row.label}</span>
        <strong style={row.wrap ? { width: '45%', overflowWrap: 'anywhere' } : undefined}>
          {row.value as ReactNode}
        </strong>
      </div>
    ) : (
      <div key={index} className="mb-3">
        <strong>{row.heading as ReactNode}</strong>
        {'detail' in row && (
          <>
            <br />
            {row.detail as ReactNode}
          </>
        )}
      </div>
    ),
  );
}
export function SummarySurface() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const [errors, setErrors] = useState<string[]>([]);
  const prepared = useRef<ReturnType<typeof prepareTerminal>>(undefined);
  const redirecting = useRef(false);
  const backoffice = sessionStorage.getItem('isBackoffice');
  const isBackoffice = backoffice ? !!JSON.parse(backoffice).state?.backoffice : false;
  const now = journey.host.now ?? (() => new Date());
  const methods = useForm<{ proposerPolicyStartTime?: string | null }>({
    defaultValues: { proposerPolicyStartTime: raw.proposerPolicyStartTime },
    resolver: yupResolver(summaryTimeSchema(raw, isBackoffice, now)) as Resolver<{
      proposerPolicyStartTime?: string | null;
    }>,
  });
  return (
    <div className="container container-body-md">
      <h3>Summary</h3>
      {errors.length > 0 && (
        <div
          style={{
            padding: '16px 24px',
            background: '#FDE8E8',
            borderRadius: 5,
            color: 'red',
            fontSize: 16,
            lineHeight: '19.5px',
          }}
        >
          <strong>Please contact the system administrator regarding the following errors;</strong>
          <hr />
          {errors.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
      <form
        noValidate
        onSubmit={(event) =>
          void methods.handleSubmit((values) => {
            prepared.current = prepareTerminal(
              raw,
              values.proposerPolicyStartTime,
              journey.options,
              journey.host.terminalBranch,
              {
                clearErrors: () => setErrors([]),
                setLoading: journey.setLoading,
                setRedirecting: (value) => {
                  redirecting.current = value;
                },
              },
            );
            if (journey.host.terminalPort) journey.host.terminalPort.prepared = prepared.current;
          })(event)
        }
      >
        <div className="border rounded p-4 mt-3">
          <div className="d-flex justify-content-between mb-3">
            <span>When do you want the policy to start?</span>
            <strong>{dayjs(raw.proposerPolicyStartDate).format('DD/MM/YYYY')}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <span>Please specify the time (hh:mm):</span>
            <div style={{ width: '50%' }}>
              <Controller
                name="proposerPolicyStartTime"
                control={methods.control}
                render={({ field, fieldState }) => (
                  <FormHourBox field={field} error={fieldState.error?.message} />
                )}
              />
            </div>
          </div>
        </div>
        {summarySections(raw, journey.options, now()).map((section) => (
          <SummaryCollapser
            key={section.step}
            text={section.title}
            edit={() => journey.execute(summaryEdit(section.step, journey.family))}
          >
            <Rows rows={section.rows} />
          </SummaryCollapser>
        ))}
        <div className="my-5">
          <Navigator
            step={14}
            text="Submit"
            loading={journey.loading}
            prev={() => journey.form.setData(methods.getValues())}
            previous={() => journey.previous(14)}
          />
        </div>
      </form>
    </div>
  );
}
