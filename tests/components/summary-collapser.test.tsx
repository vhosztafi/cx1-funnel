import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryCollapser } from '@/components/summary-collapser';
it('MTS-14-U01 independent closed defaults, repeated IDs, unnamed toggles and 44px controls', () => {
  const edit = vi.fn();
  const { container } = render(
    <>
      <SummaryCollapser text="One" edit={edit}>
        Content One
      </SummaryCollapser>
      <SummaryCollapser text="Two" edit={edit}>
        Content Two
      </SummaryCollapser>
    </>,
  );
  expect(container.querySelectorAll('#example-collapse-text')).toHaveLength(2);
  const toggles = screen.getAllByRole('button', { name: '' });
  expect(toggles).toHaveLength(2);
  expect(toggles[0]).toHaveStyle({ height: '44px' });
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggles[0]);
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'true');
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(screen.getAllByRole('button', { name: 'Edit' })[0]);
  expect(edit).toHaveBeenCalledOnce();
});
