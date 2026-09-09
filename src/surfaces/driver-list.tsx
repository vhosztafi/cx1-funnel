'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Snackbar from '@mui/material/Snackbar';
import Pagination from '@mui/material/Pagination';
import { useJourney } from '@/runtime/use-journey';
import { setDriverValidators } from '@/runtime/driver-ports';
import { driversSorted, deleteDriver, driverPlanRoute } from '@/domain/driver-workflow';
import { motorTradeConverter } from '@/domain/converter';
import { ageAt } from '@/domain/driver-rules';
import { dayjs } from '@/domain/dates';
import {
  displayedPage,
  paginationVisible,
  addDriverDisabled,
  strictOption,
  type Options,
} from '@/domain/options';
import type { RawDriver, DateValue } from '@/domain/types';
import { FormError, Loader } from '@/components/controls';
function DriverCard({
  driver,
  options,
  policyStart,
  edit,
  remove,
}: {
  driver: RawDriver;
  options: Options;
  policyStart?: DateValue;
  edit: () => void;
  remove: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>
          {driver.firstName} {driver.surname}
        </h4>
        <div>
          <button type="button" className="btn btn-link" onClick={edit}>
            Edit
          </button>
          <button type="button" className="btn btn-link" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
      <div>
        Date of Birth: {dayjs(driver.dateOfBirth).format('DD/MM/YYYY')} (
        {ageAt(driver.dateOfBirth, policyStart)} yrs old)
      </div>
      <div>
        Relationship to Policyholder:{' '}
        {
          strictOption(options.driverRelationshipsPolicyHolder, driver.relationshipPolicyholderID)
            ?.text
        }
      </div>
      {open && (
        <>
          <div>Vehicle Usage : {strictOption(options.driverUsages, driver.usageID)?.text}</div>
          <div>
            Gross Vehicle Weight Limit{' '}
            {strictOption(options.driverGVWLimits, driver.gvwLimitID)?.text}
          </div>
        </>
      )}
      <button type="button" className="btn btn-link" onClick={() => setOpen(!open)}>
        {open ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}
export function DriverList() {
  const journey = useJourney();
  const raw = journey.snapshot.formData;
  const [page, setPage] = useState(1);
  const [snackbar, setSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const sorted = driversSorted(raw.drivers);
  const displayed = displayedPage(sorted, page, journey.host.limits?.pageSize);
  async function next() {
    setLoading(true);
    try {
      const args = { data: motorTradeConverter(raw, journey.options) };
      const result = journey.host.consumeDriverValidation
        ? await journey.host.consumeDriverValidation(args)
        : await new Promise<never>(() => {});
      if (result.data.valid) {
        setDriverValidators(raw, journey);
        journey.next(6);
      } else {
        setErrors(result.data.errorMessages);
        window.scrollTo(0, 0);
      }
    } finally {
      setLoading(false);
    }
  }
  function remove(index: number) {
    const result = deleteDriver(raw, index, displayed.length, page);
    if (result.kind === 'blocked') {
      setSnackbar(true);
      return;
    }
    if (result.kind === 'deleted') {
      journey.form.setData({ drivers: [...result.drivers] });
      if (result.route) journey.internal(result.route);
      else setPage(result.activePage);
    }
  }
  return (
    <div className="container container-body-md">
      <h3>Drivers</h3>
      {errors.length > 0 && (
        <div className="text-danger">
          <strong>Please review the following:</strong>
          <ul>
            {errors.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}
      {displayed.map((driver, index) => (
        <div key={driver.guid}>
          <DriverCard
            driver={driver}
            options={journey.options}
            policyStart={raw.proposerPolicyStartDate}
            edit={() => journey.internal({ editing: true, editDriver: driver.driverIndex })}
            remove={() => remove(driver.driverIndex)}
          />
          {index < displayed.length - 1 && <hr className="border-primary" />}
        </div>
      ))}
      {paginationVisible(sorted.length, journey.host.limits?.pageSize) && (
        <Pagination
          page={page}
          count={Math.ceil(sorted.length / (journey.host.limits?.pageSize as number))}
          onChange={(_, value) => {
            window.scrollTo(0, 0);
            setPage(value);
          }}
        />
      )}
      <Button
        type="button"
        disabled={addDriverDisabled(sorted.length, journey.host.limits?.driverLimit)}
        onClick={() => journey.internal({ editing: true, editDriver: sorted.length })}
      >
        Add another driver
      </Button>
      <hr />
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          void next();
        }}
        className="position-relative text-center d-flex flex-column my-5"
      >
        <button className="btn btn-primary" type="submit">
          Next
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => journey.internal(driverPlanRoute)}
        >
          Go Back
        </button>
        {loading && (
          <div className="lookup-overlay">
            <Loader animation={journey.host.loadingAnimation} />
          </div>
        )}
      </form>
      <Snackbar
        open={snackbar}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSnackbar(false)}
      >
        <div>
          <FormError message="This driver is a vehicle owner, can't be deleted." />
        </div>
      </Snackbar>
    </div>
  );
}
