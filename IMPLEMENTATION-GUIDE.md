# CX1 Motor Trade Funnel Implementation Guide

## Purpose

This is the read-first engineering guide for implementing the completed v1.0 as-is specification. It adds implementation structure and delivery gates; it does not add or reinterpret business behavior.

## Canonical reading order

Read these files completely, in this order, before creating the implementation plan:

1. [Scope, authority, and source inventory](./docs/motor-trade-funnel/01-scope-and-source-inventory.md)
2. [Journey and navigation](./docs/motor-trade-funnel/02-journey-and-navigation.md)
3. [Questions and business rules](./docs/motor-trade-funnel/03-questions-and-business-rules.md)
4. [Clarifications](./docs/motor-trade-funnel/clarifications.md)

Use [Document 04 — LLM Implementation Handoff](./docs/motor-trade-funnel/04-llm-implementation-handoff.md) as the index, concern map, stable-ID guide, mandatory-invariant list, unresolved-disposition table, and completion proof. Its links point to the canonical owners above.

## Authority and conflict precedence

Apply this order when two instructions appear to disagree:

1. The canonical owner record in Documents 01–03 or `clarifications.md`.
2. Document 04's classification and link to that owner.
3. `AGENTS.md` repository guardrails.
4. This behavior-neutral engineering guide.
5. Framework, UI-kit, library, browser, and general best-practice defaults.

The archived [requirements](./docs/provenance/v1.0-REQUIREMENTS.md) and [milestone audit](./docs/provenance/v1.0-MILESTONE-AUDIT.md) establish provenance and limitations; they do not override a canonical behavior record. If canonical evidence is ambiguous, preserve the ambiguity and follow its `CLR` disposition. Do not choose the most convenient interpretation.

Repository code only was the evidence basis for the specification. The legacy source is not included here, so its `path:symbol` locators remain provenance rather than local files. Missing legacy source is never permission to guess.

## Scope and terminal boundary

The implementation begins at the root page where Commercial Combined and Motor Trade controls appear. Only the documented neighboring Commercial Combined context is in scope; its funnel is not.

Implement the selected Motor Trade route family, the `MTS-01` through `MTS-14` numbered spine, every documented internal Step 6 and Step 8 surface, Summary editing, and all locally observable behavior. At valid Summary submission, evaluate the complete selected-branch local `MotorTradeConverter` arguments. Stop immediately after that local preparation and immediately before the selected transport invocation.

Do not invent a downstream call, API contract, request protocol, quotation or referral result, checkout, or payment behavior. Represent the excluded boundary with a local, testable port or event whose production transport implementation remains absent.

## Technical baseline

- Use Next.js with TypeScript and Tailwind CSS.
- Reuse an existing repository UI kit if one is already configured. Otherwise choose a mature React- and Tailwind-compatible UI kit as behavior-neutral engineering discretion, record the choice and version, and keep the selection replaceable.
- Do not accept UI kit defaults that alter exact copy, DOM/control semantics, emitted values, disabled states, validation timing, focus/dialog behavior, routing, state, mounted order, responsive layout, progress, or other canonical observations.
- Record chosen runtime, package manager, dependency versions, test tools, and UI-kit vendor in the implementation plan or an architecture decision. Dependency selection supplies no business authority.
- Keep client-only state and effects explicit. Use server components only where they cannot alter the browser lifecycle and interaction contracts owned by the specification.

## Modular and configurable structure

Build a behavior-preserving funnel system rather than fourteen unrelated pages, while keeping every legacy distinction explicit.

Use typed, versioned, JSON-compatible definitions for stable declarative facts such as:

- canonical stable IDs and route-family ownership;
- numbered and internal surface metadata;
- mounted question/control order;
- literal copy and literal option values proven by the specification;
- field names, initial values, persistence keys, visibility references, and validation-rule references;
- navigation actions, progress metadata, Summary groups, and edit destinations.

Validate definitions at build or test time with a schema. Treat duplicate or malformed legacy identifiers as explicit permitted exceptions tied to their stable IDs, not data to normalize.

Keep behavior requiring comparisons, source ordering, side effects, projections, async lifecycle, or branch-specific state in named, typed rule functions. Reference those functions from configuration by stable identifier; do not encode unsafe expressions as strings. Separate at least these concerns:

- definition schema and versioning;
- rendering registry for controls and internal surfaces;
- raw persisted funnel state;
- route/transition engine and guards;
- validation and derived-rule functions;
- dynamic-option provider boundaries and transforms;
- Summary projection and edit navigation;
- the local pre-transport terminal port.

Configuration must reproduce the canonical route graph and behavior. It must not derive a cleaner graph, coerce values, merge separately owned predicates, add resets, write sanitized projections back to raw state, repair blank/loading views, or manufacture `CLR-001` through `CLR-009` values.

## Implementation sequence

### 1. Scaffold and record behavior-neutral decisions

- Inspect the empty repository and write a delivery plan tied to canonical stable IDs.
- Scaffold Next.js, TypeScript, Tailwind CSS, linting, formatting, and the selected test tools.
- Reuse or select the UI kit under the constraints above. Do not start screen work until exact-value and event semantics can be controlled.
- Establish `docs/implementation/TRACEABILITY.md` and `docs/implementation/CLARIFICATIONS.md`. Seed the latter by referencing, not rewriting or resolving, `CLR-001` through `CLR-009`.

### 2. Define the configuration contract and state model

- Create the versioned definition types, schema validation, stable-ID registry, control registry, and explicit rule-function registry.
- Model raw persisted values without normalization. Preserve documented distinctions among booleans, numbers, strings, null, undefined, and empty collections.
- Create injectable dynamic-option provider boundaries. Keep production data absent until supplied by an in-scope source; use clearly synthetic fixtures only in tests or explicit development fixtures.
- Add unit tests for schema validation, exact comparisons, transition predicates, validation functions, option transforms/filters, projections, and reset/retention behavior.

### 3. Build shared mounted controls and layout contracts

- Implement shared fields, errors, dialogs, pagination, navigation buttons, Header/progress, ribbons, loading states, and responsive layout primitives from `CTL` and `SHR` owners.
- Verify exact copy, attributes, initial values, error channels, disabled behavior, and event timing with component tests.
- Override UI-kit defaults wherever the canonical contract differs.

### 4. Build entry, route/state engine, and ordered surfaces

- Implement the root-page context and selected Motor Trade entry.
- Implement route-family selection, route guards, persisted numeric step, visible step count, Header progress formula, forward/back behavior, and source-ordered multiple navigations as separate contracts.
- Add `MTS-01` through `MTS-14` and every internal Step 6/Step 8 surface in canonical mounted order. Do not renumber internal views.
- Implement Step 9 forward and reverse predicates separately and preserve every documented include/skip edge.

### 5. Build Summary, edit flows, and the terminal preparation boundary

- Preserve raw state while applying only the documented local Summary projections and omissions.
- Implement every Summary edit destination and route-family behavior without an invented return marker or navigation stack.
- Validate Summary and evaluate the complete selected local converter arguments.
- Emit to the local terminal port for assertion, but provide no transport adapter. This port is the end of the implementation.

### 6. Complete automated evidence and traceability

- Map every applicable canonical `MTS`, `EDGE`, `CTL`, `OPT`, `SHR`, and `AUD` owner to code and automated tests in `docs/implementation/TRACEABILITY.md`.
- Record unresolved implementation impact without resolving any `CLR`.
- Run all unit, component, end-to-end, lint, type-check, and build gates. Audit the codebase for excluded APIs, transport, results, checkout, payments, and invented production data.

## Test strategy

### Unit tests

Test schema rejection, explicit legacy exceptions, rule-function comparisons, separate forward/reverse predicates, route mapping, raw-state retention and reset, validation callbacks, derived values, pagination formulas, option transforms/filters/fallbacks, Summary sanitation, and converter-argument preparation. Assert types and exact values, not truthy approximations.

### Component tests

For each mounted state, test question/control order, exact text and punctuation, labels, help/disclaimer copy, options, defaults, disabled states, error channels, conditional mount/unmount behavior, loading/blank views, dialogs, pagination controls, responsive classes/contracts, and emitted values. Built-in dependency text covered by `CLR-009` must remain an unresolved expectation rather than an invented literal.

### End-to-end tests

At minimum cover:

- root Motor Trade entry through `MTS-01`–`MTS-14` and successful local terminal preparation, proving no transport call occurs;
- Step 8 → Step 9 inclusion and Step 8 → Step 10 skip, plus both reverse paths;
- Step 6 driver and Step 8 vehicle list/detail/loading/blank/add/edit/delete/pagination flows where documented;
- Summary projection, every edit destination, retained state, and ordinary continuation back to Summary;
- route-family guards, truthy unmapped-route source-ordered navigation calls, progress math, visible counter, Back, Continue, and reset behavior;
- validation and conditional branches for all canonically owned question/rule records.

Tests for dynamic options may inject clearly synthetic rows to prove consumer shapes, ordering, metadata use, transforms, filters, fallbacks, and dependent predicates. Name them as synthetic fixtures and never assert they are legacy production values.

## Traceability contract

Maintain one row per applicable canonical owner with at least:

| Stable ID | Canonical link | Implementation files | Test files | Status | Notes/CLR |
|---|---|---|---|---|---|

Do not mark an owner complete unless its observable contract is implemented and tested, or its unavailable portion is explicitly localized to an existing unresolved clarification while the confirmed remainder is complete. References are not duplicate definitions: link back to the owner record.

## Completion gates

Implementation is complete only when:

- all applicable stable owners are mapped, implemented, and tested;
- exact copy, types, values, order, branches, navigation, progress, state lifecycle, projections, timing, omissions, loading/blank views, and responsive/layout contracts match their owners;
- `CLR-001` through `CLR-009` remain unresolved, non-blocking, and free of invented production values;
- the root-to-terminal and required branch/edit/back/guard flows pass end to end;
- the local converter arguments are prepared and observable in tests, with no transport or downstream scope implemented;
- lint, type-check, test, and production build commands pass; and
- traceability and implementation clarifications are current.

The milestone audit reports 8/8 cross-phase connections and 5/5 end-to-end specification flows as integrated, but no phase had formal `VERIFICATION.md` and Nyquist validation was disabled. Treat the copied specification as an implementation contract with disclosed verification debt, not as independently runtime-verified behavior.
