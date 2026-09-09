# CX1 Motor Trade Front-end

## What This Is

Reimplementation of the documented CX1 Motor Trade sales funnel in Next.js, TypeScript, Tailwind CSS and a behavior-neutral UI kit. The journey starts at the root product control and stops after local pre-quotation argument preparation.

## Core Value

Reproduce every confirmed observable legacy contract without inventing missing facts.

## Current Milestone: v1.1 Complete Motor Trade implementation

The v1.0 specification was delivered separately; provenance is in docs/provenance. This repository initially contains documentation only. Implementation phase numbering continues after specification phases 1–4.

## Requirements

### Validated

- v1.0 canonical behavioral specification and handoff (provenance only; implementation is not validated).

### Active

- [ ] Every applicable MTS, EDGE, CTL, OPT, SHR and AUD owner implemented and tested.
- [ ] Root entry, numbered and internal surfaces, rules, state, routes and Summary reproduce canonical behavior.
- [ ] Local terminal preparation stops before transport.
- [ ] Unit, component, end-to-end, lint, type and production-build verification passes.

### Out of Scope

- APIs, transport, backend, quotation/referral results, redirects after invocation, checkout and payments.
- Commercial Combined funnel detail beyond the documented neighboring root control.
- Canonical-document edits and inferred CLR production values.

## Context

AGENTS.md and IMPLEMENTATION-GUIDE.md govern engineering. Document 04 indexes Documents 01, 02, 03 and clarifications, which own behavior. All were read before planning. The absent legacy tree is provenance, not an invitation to seek external behavior. CLR-001–009 stay unresolved and non-blocking. User authorized autonomous planning, execution, verification and atomic commits on 2026-09-09; redundant approval and exploratory scope questions are unnecessary.

## Constraints

- Canonical copy, layout, equality, effects, defaults, omissions and quirks override framework and UI-kit preferences.
- Typed, versioned JSON-compatible definitions describe declarative facts; named functions implement rules.
- Raw persisted state, local edits, rendered projections, Summary and terminal preparation are distinct.
- Synthetic rows/configuration may exist only in explicitly named development/test fixtures.

## Key Decisions

| Decision | Rationale | Outcome |
|---|---|---|
| Skip domain ecosystem research | Behavior is fully scoped by immutable canonical records | Accepted |
| Six implementation phases, starting at 5 | Preserve v1.0 provenance numbering and isolate reviewable changes | Accepted |
| Track planned and verified coverage separately | Prevent stable-ID mentions from being mistaken for proof | Accepted |
| Use local injectable boundaries | Exercise confirmed consumers without introducing APIs or invented values | Accepted |

## Evolution

At each phase transition, update validated requirements, decisions and current context. At milestone completion, review all sections against delivered and verified behavior.

Last updated: 2026-09-09 — milestone initialization.
