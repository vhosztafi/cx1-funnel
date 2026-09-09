'use client';
import { useState, type ReactNode } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { PencilIcon } from './action-icons';
// MTS-14-U01: independent closed defaults and deliberately repeated collapse IDs.
export function SummaryCollapser({
  text,
  edit,
  children,
}: {
  text: string;
  edit: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded p-4 mt-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="h6">{text}</div>
        <div className="d-flex gap-2">
          <Button
            type="button"
            style={{ height: 44, padding: '8px 16px', border: '1px solid' }}
            onClick={edit}
          >
            <PencilIcon /> Edit
          </Button>
          <Button
            type="button"
            style={{ height: 44 }}
            aria-expanded={open}
            aria-controls="example-collapse-text"
            onClick={() => setOpen(!open)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d={open ? 'm6 15 6-6 6 6' : 'm6 9 6 6 6-6'}
              />
            </svg>
          </Button>
        </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">{children}</div>
      </Collapse>
    </div>
  );
}
