# Motor Trade Funnel — LLM Implementation Handoff

## Purpose and authority

Document 04 is the index, classification layer, and completion proof for the Motor Trade funnel specification. Documents 01–03 plus `clarifications.md` remain canonical; this handoff links their contracts and does not replace or duplicate them.

[Start with scope and evidence authority](./01-scope-and-source-inventory.md#evidence-authority-and-status).

## Scope and terminal boundary

Use [Document 01 for the complete inclusion and exclusion boundary](./01-scope-and-source-inventory.md#in-scope), including the neighboring root context and its [terminal pre-quotation boundary](./01-scope-and-source-inventory.md#terminal-pre-quotation-boundary). The executable terminal requirement is recorded with the other mandatory invariants below.

## Canonical reading order

Follow this sequence so authority and scope are established before implementation detail or unresolved disposition.

| Order | Canonical document | Owned contract |
|---:|---|---|
| 1 | [Scope, authority, and source inventory](./01-scope-and-source-inventory.md) | Evidence hierarchy, root entry, source inventory, product variants, exclusions, and final boundary |
| 2 | [Journey and navigation](./02-journey-and-navigation.md) | Numbered/internal surfaces, transitions, route guards, navigation, progress, state, and Summary edits |
| 3 | [Questions and business rules](./03-questions-and-business-rules.md) | Exact questions, options, copy, controls, validation, rules, lifecycle, projections, and completeness ledgers |
| 4 | [Clarifications](./clarifications.md) | Missing, ambiguous, conflicting, and dynamically unavailable facts |

Use this concern map to locate one canonical owner without creating a second behavioral catalogue.

| Concern | Canonical owner | Required action | Boundary |
|---|---|---|---|
| Evidence authority, root entry, source tiers, product-family context, and exclusions | [Document 01 — Evidence Authority and Status](./01-scope-and-source-inventory.md#evidence-authority-and-status) | Reproduce exactly | Do not elevate an adjacent or downstream source above mounted React |
| Numbered and internal surfaces | [Document 02 — Canonical Numbered Journey](./02-journey-and-navigation.md#canonical-numbered-journey) | Reproduce exactly | Do not renumber internal Step 6 or Step 8 views |
| Transitions, branches, and route guards | [Document 02 — Executable Transition Ledger](./02-journey-and-navigation.md#executable-transition-ledger) | Reproduce exactly | Do not derive a cleaner route graph |
| Navigation, progress, retained state, and Summary edits | [Document 02 — State Retention, Reset, and Loss Contract](./02-journey-and-navigation.md#state-retention-reset-and-loss-contract) | Reproduce exactly | Do not infer clearing from rendered or projected omission |
| Questions, mounted copy, controls, options, rules, and validation | [Document 03 — Stable Record Schemas](./03-questions-and-business-rules.md#stable-record-schemas) | Reproduce exactly | Do not restate detailed records in this handoff |
| Shared lifecycle, layout, responsive, and code-evidenced accessibility contracts | [Document 03 — Shared Value Lifecycle, Copy, Layout, and Accessibility Contracts](./03-questions-and-business-rules.md#shared-value-lifecycle-copy-layout-and-accessibility-contracts) | Reproduce exactly | Do not add semantics absent from mounted source |
| Missing, ambiguous, conflicting, or runtime-unavailable facts | [Clarification Register](./clarifications.md#clarification-register) | Preserve unresolved | Do not generalize a localized gap to unaffected behavior |
| Non-observable engineering choices | [Behavior-neutral future implementation context](#behavior-neutral-future-implementation-context) | Behavior-neutral discretion | Complete observable equivalence remains mandatory |

## How to use stable IDs and evidence

Stable IDs locate canonical definitions; an occurrence elsewhere is a reference unless its owner below defines it. Evidence status describes repository authority and never acts as a confidence percentage.

| Namespace | Canonical use and owner |
|---|---|
| `MTS` | Numbered/internal surfaces in document 02; question, rule, and mounted-state suffixes in document 03 |
| `EDGE` | Transition and route/guard records owned by [document 02's Executable Transition Ledger](./02-journey-and-navigation.md#executable-transition-ledger) |
| `CTL` | Shared mounted control contracts in document 03 |
| `OPT` | Option and consumed metadata contracts in document 03 |
| `SHR` | Cross-surface lifecycle, copy, layout, and shared-rule contracts in document 03 |
| `AUD` | Documentation-only reconciliation and completeness assertions in document 03 |
| `CLR` | Append-only unknown or conflict records in `clarifications.md` |

The four evidence statuses retain the definitions and handling established by [document 01](./01-scope-and-source-inventory.md#evidence-authority-and-status).

| Evidence status | Meaning and handling |
|---|---|
| `Direct React` | Mounted React or a mounted/imported source directly controls the observable fact |
| `Dependency-resolved` | A bounded repository dependency supplies a missing front-end-visible fact without overriding React |
| `Conflict` | React remains controlling and the conflicting fact links its existing clarification |
| `Unresolved` | The completed repository trail stops before a required value or observable outcome; unaffected work continues |

Use the [bounded dependency traversal](./01-scope-and-source-inventory.md#bounded-dependency-traversal) for every supporting fact. A canonical record supplies its own repository-relative `path:symbol` evidence; a relative specification link routes to that record but is not a substitute for its evidence.

## Mandatory legacy behavior

These ten source-cohesive invariants prevent cross-document contradiction. Their links, not this summary wording, own the exact contract.

- Mandatory: Preserve the selected route family's numbered spine `MTS-01` through `MTS-14`; keep the Step 6 and Step 8 internal views subordinate to their numbered surfaces. [Canonical owner](./02-journey-and-navigation.md#canonical-numbered-journey). Evidence: Direct React — `CleggGifford.CoverX.UI/src/router/motorTradeBuyRouter.tsx:MotorTradeBuyRouter`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`.
- Mandatory: Preserve the Step 9 inclusion and reverse-branch predicates exactly as separate manager expressions. [Transition owner](./02-journey-and-navigation.md#executable-transition-ledger). Evidence: Direct React — `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerLogic`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerPrevLogic`.
- Mandatory: Render the visible `Step {stepIndex} of 14` counter from persisted numeric `step`, independently of the route string and Header progress formula. [Progress owner](./02-journey-and-navigation.md#progress-and-step-numbering-contract). Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/MotorTradeBuyRouteController.tsx:MotorTradeBuyRouteController`.
- Mandatory: Preserve the Header progress denominator predicate and rounded percentage independently of the manager's Step 9 predicate and the visible counter. [Progress owner](./02-journey-and-navigation.md#progress-and-step-numbering-contract). Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/Header.tsx:Header`.
- Mandatory: Preserve Summary edit destinations, active versus hard-coded route-family behavior, and the absence of an edit-return marker or stack. [Summary edit owner](./02-journey-and-navigation.md#summary-edit-navigation). Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:goToStepForEdit`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setStep`.
- Mandatory: Preserve the source-selected Step 6 loading view and Step 8 loading/blank views without adding recovery copy or a default redirect. [Internal-state owner](./02-journey-and-navigation.md#step-6-driver-internal-states) and [Step 8 owner](./02-journey-and-navigation.md#step-8-vehicle-internal-states). Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`.
- Mandatory: Keep raw persisted form values and current-step fields governed only by the documented `setData`, `setStep`, and reset operations; a rendered omission does not prove a store write or clear. [State owner](./02-journey-and-navigation.md#state-retention-reset-and-loss-contract). Evidence: Direct React — `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setStep`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.reset`.
- Mandatory: Keep sanitized vehicle projection separate from raw persisted state: Summary consumes `sanitizeMotorTradeVehicles(formData)` locally and does not write that projection back through `setData`. [Lifecycle and projection owner](./03-questions-and-business-rules.md#cross-step-value-lifecycle-and-projection-ledger). Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`.
- Mandatory: Preserve the validated Summary surface and complete selected-branch local argument evaluation inside the boundary, then exclude the selected call and every later effect. [Summary and terminal owner](./03-questions-and-business-rules.md#mts-14--summary-and-terminal-gate). Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:onSubmit`.
- Mandatory: Cover the mounted Motor Trade front-end journey from the root entry through complete branch-specific local `MotorTradeConverter` argument evaluation at valid Summary submit. Stop after branch-specific local MotorTradeConverter argument preparation and immediately before the selected transport invocation. [Canonical terminal boundary](./01-scope-and-source-inventory.md#terminal-pre-quotation-boundary). Evidence: Direct React — `CleggGifford.CoverX.UI/src/pages/Home.tsx:Home`; `CleggGifford.CoverX.UI/src/router/motorTradeBuyRouter.tsx:MotorTradeBuyRouter`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:onSubmit`.

## Unresolved — do not invent

Every localized gap stays owned by the append-only register. The table states what remains implementable and the repository evidence required for a formal resolution.

Use each linked disposition below to localize its repository-evidence gap while continuing unaffected canonical work.

| Clarification | Status and progress | Affected surface | Confirmed implementable remainder and prohibited inference | Resolution evidence needed |
|---|---|---|---|---|
| [`CLR-001`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Dynamic option labels, IDs, order, metadata, and dependent predicates | Preserve repository-coded consumers, shapes, transforms, filters, and fallbacks; do not invent absent database rows | A repository seed, export, fixture, or executable repository test connected to `CleggGifford.CoverX.UI/src/containers/dataContainer.tsx:DataContainer` |
| [`CLR-002`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Back-office buy parent/child composition | Preserve the declared routes and no-`Outlet` parent; do not assert child reachability or intended wrapper behavior | Repository composition evidence or an executable repository route test covering `CleggGifford.CoverX.UI/src/steps/MotorTrade/index.tsx:MotorTradePopulate` |
| [`CLR-003`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Development-only Debug panel handoff classification | Preserve the complete code-evidenced development delta in its canonical owner; do not classify it as mandatory or discretionary | Repository authority or an executable repository test resolving the classification of `CleggGifford.CoverX.UI/src/containers/debug.tsx:DebugContainer` |
| [`CLR-004`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | `MTS-03` dialog controls and `EDGE-03` movement | Preserve both submit types and click handlers; do not select event order, submit outcome, or navigation result | An executable repository interaction test for `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:Dialog` |
| [`CLR-005`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Referrer-derived ribbon role and dashboard branch | Preserve the referrer predicate, stored flag, and conditional ribbons; do not claim runtime identity, authorization, or entry-path mapping | Repository fixtures or executable entry tests for `CleggGifford.CoverX.UI/src/steps/MotorTrade/index.tsx:MotorTradePopulate` |
| [`CLR-006`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Truthy unmapped route-step double navigation | Preserve both source-ordered navigation calls; do not collapse them to one destination or history result | An executable repository router test for `CleggGifford.CoverX.UI/src/steps/MotorTrade/MotorTradeBuyRouteController.tsx:MotorTradeBuyRouteController` |
| [`CLR-007`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Driver Add threshold and driver/vehicle page sizes | Preserve variable-controlled comparisons and slice/pagination formulas; do not hardcode a literal from comments or restricted assignments | Approved non-secret repository configuration evidence or executable tests for `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:driverLimit/pageSize` |
| [`CLR-008`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Non-returned Yup `createError` branches and equal-date fall-through | Preserve callback expressions, declared paths, and literal messages; do not assert pass/fail, path, or emitted text | A repository-resident pinned implementation or executable characterization test covering `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema` and the other registered callbacks |
| [`CLR-009`](./clarifications.md#clarification-register) | Unresolved; Non-blocking | Dependency-generated built-in Yup messages and punctuation | Preserve coded chains, labels, literal messages, and mounted error channels; do not hardcode unproved default text | A vendored implementation or executable repository characterization test for the dependency selected by `CleggGifford.CoverX.UI/package.json:yup` |

## Behavior-neutral future implementation context

Next.js, Tailwind CSS, and a UI kit are future implementation context only; none supplies behavioral authority or permits observable divergence from the canonical documents.

- Behavior-neutral discretion: File organization may vary while every linked observable contract remains equivalent.
- Behavior-neutral discretion: Component boundaries may vary while mounted order, state effects, and interaction outcomes remain equivalent.
- Behavior-neutral discretion: Non-observable code reuse may vary while exact copy, primitives, comparisons, branches, and omissions remain equivalent.
- Behavior-neutral discretion: Build tooling may vary without changing routes, values, timing contracts, layout behavior, or evidence boundaries.
- Behavior-neutral discretion: Equivalent primitives may be selected only when their rendered semantics, emissions, attributes, disabled behavior, errors, and lifecycle match the canonical owner.

## Prohibited changes

This is a scope guard, not an improvement backlog. Do not introduce any of the following as legacy behavior or as a handoff requirement:

- rewritten, shortened, corrected, or normalized user-visible copy;
- inferred database option IDs, labels, values, order, or metadata;
- normalized booleans, numbers, strings, nulls, undefined values, empty arrays, equality operators, malformed identifiers, or date/time behavior;
- repaired route behavior, progress math, step numbering, Summary edit destinations, blank/loading views, repeated IDs, or dialog sequencing;
- broader resets, stale-state cleanup, sanitization written back to raw state, or an invented edit-return stack;
- accessibility, responsive, control, error, or UX enhancement presented as legacy behavior;
- architecture mandates beyond the behavior-neutral context in this document;
- Commercial Combined detail, transport behavior, API contracts, quotation/results, referral outcomes, checkout, payments, or backend behavior;
- live/browser/session/database/external behavioral evidence or `.env*` assignment disclosure; or
- modification under `CleggGifford.CoverX.UI/`, `CleggGifford.CoverX/`, or `CleggGifford.CoverX.FunnelApi/`.

## Phase 4 requirement proof

Each row records `PASS` only after its deterministic corpus assertion succeeded over the final five-document set.

| Requirement | Artifact or section | Deterministic verification | Result |
|---|---|---|---|
| EVID-01 | Final five-document material-record inventory | Validate all 836 material records and 1,987 candidate locators for literal path, selector, wildcard absence, and source-token occurrence | PASS |
| EVID-02 | [Clarification Register](./clarifications.md#clarification-register) and handoff disposition table | Prove nine unique register rows, inbound canonical backlinks, and nine linked dispositions | PASS |
| EVID-03 | Unresolved disposition table | Prove every row exposes affected surface, confirmed remainder, prohibited inference, and resolution evidence | PASS |
| EVID-04 | Unresolved disposition table | Prove every gap remains localized and Non-blocking while canonical remainders stay usable | PASS |
| HAND-01 | Canonical reading order, concern map, and stable-ID guide | Resolve 702 canonical definitions, all stable-ID references, and 41 relative links including 36 fragments without a duplicate handoff definition | PASS |
| HAND-02 | Behavior-neutral future implementation context | Prove the three stack terms occur exactly once inside the neutral lane and authorize no observable change | PASS |
| HAND-03 | Three separate H2 lanes | Prove the Mandatory and behavior-neutral prefixes remain exclusive, every unresolved disposition is classified in the Unresolved H2, and no statement mixes lanes | PASS |
| HAND-04 | Prohibited changes and semantic review | Reject positive redesign language, forbidden detail, external evidence, and environment assignments | PASS |

## Final integrity audit

The independent gate reran every assertion against the canonical owners before recording these results.

| Gate | Corpus and assertion | Observed result | Result |
|---|---|---|---|
| Citation grammar and target | Five final documents; material locators and source-token resolution | 1,987 locators; zero malformed, wildcard, missing-path, empty-selector, or source-token failures | PASS |
| Stable identifiers | Five final documents; owner-scoped definitions, uniqueness, and reference resolution | 702 definitions; exact 544 detail and nine clarification partitions; zero duplicates or unresolved references | PASS |
| Markdown links and anchors | Five final documents; relative targets and GitHub-compatible fragments | 41 relative links and 36 decoded fragments resolved | PASS |
| Evidence statuses | Closed material-record inventory; exactly one allowed status per record | 836 records: 93/146/569/19/9 by document; zero vocabulary or cardinality failures | PASS |
| CLR coupling | Canonical claims, register, and handoff dispositions | Nine register definitions, canonical inbound backlinks, and nine linked dispositions | PASS |
| Clarification completeness | Eight-field register rows and localized progress state | Nine rows have eight populated fields and remain Unresolved, Non-blocking | PASS |
| Lane separation | Mandatory, unresolved, and neutral H2 bodies | Three exclusive H2 bodies; ten Mandatory records, nine classified Unresolved dispositions, five behavior-neutral records, and zero mixed statements | PASS |
| Semantic contradictions | Canonical step, branch, progress, Summary, state, projection, and boundary invariants | Twelve owner assertions and seven required invariant links passed | PASS |
| Forbidden scope | Handoff guidance, headings, links, and prohibition guard | Required guards present; zero positive redesign, external-link, assignment, or downstream-heading failures | PASS |
| Documentation-only diff | Immutable Phase 4 baseline through final working tree | Baseline is a valid ancestor; protected baseline, staged, unstaged, and untracked path union is empty | PASS |
