import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
  VehicleRegistration,
  type VehicleRegistrationProps,
} from '@/components/vehicle-registration';
function props(): VehicleRegistrationProps {
  return {
    field: { name: 'regNumber', value: 'SYN 1', onChange: vi.fn() },
    label: 'Vehicle Registration',
    consume: vi.fn(async () => ({ values: { make: 'Synthetic', gvw: '0', unrelated: 'omit' } })),
    eligibility: () => undefined,
    trigger: vi.fn(),
    setError: vi.fn(),
    clearErrors: vi.fn(),
    reset: vi.fn(),
    setValue: vi.fn(),
    setManual: vi.fn(),
    populated: vi.fn(),
    failed: vi.fn(),
  };
}
describe('CTL-MT-20 local lookup lifecycle', () => {
  it('MTS-08-R01 named lookup projection normalizes zero, clears errors, hides manual and emits searched registration', async () => {
    const p = props();
    render(<VehicleRegistration {...p} />);
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => expect(p.populated).toHaveBeenCalledOnce());
    expect(p.clearErrors).toHaveBeenCalledOnce();
    expect(p.setValue).toHaveBeenCalledWith('gvw', 0);
    expect(p.setValue).toHaveBeenCalledWith('regNumber', 'SYN 1');
    expect(p.setValue).not.toHaveBeenCalledWith('unrelated', 'omit');
    expect(p.setManual).toHaveBeenCalledWith(false);
  });
  it('MTS-09-Q02 rejection resets the distinct specified shape before clearing retrieved card and reporting error', async () => {
    const calls: unknown[] = [];
    const p = props();
    p.consume = async () => {
      throw Error('synthetic');
    };
    p.reset = (value) => calls.push(value);
    p.failed = () => calls.push('retrieved cleared');
    p.setError = (value) => calls.push(value);
    render(<VehicleRegistration {...p} specified />);
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => expect(calls).toHaveLength(3));
    expect(calls).toEqual([
      { addSpecifiedVehicle: true, modifications: [] },
      'retrieved cleared',
      'Vehicle Not Found, if you believe this is incorrect, please contact your broker so this update can be completed',
    ]);
  });
  it('Q01 duplicate test removes spaces but does not normalize stored case, and permits original registration', async () => {
    const p = props();
    const { rerender } = render(<VehicleRegistration {...p} ordinary={[{ regNumber: 'SYN1' }]} />);
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(p.consume).not.toHaveBeenCalled();
    expect(p.setError).toHaveBeenCalledWith('Reg number has been previously entered.');
    rerender(
      <VehicleRegistration {...p} ordinary={[{ regNumber: 'SYN1' }]} defaultRegistration="SYN 1" />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => expect(p.consume).toHaveBeenCalledOnce());
  });
});
