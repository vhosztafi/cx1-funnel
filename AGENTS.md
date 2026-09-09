# Implementation Agent Instructions

## Mission

Implement the CX1 Motor Trade front-end sales funnel on Next.js, TypeScript, Tailwind CSS, and a UI kit while reproducing the observable legacy behavior exactly as documented.

## Authority

- The canonical behavioral sources are `docs/motor-trade-funnel/01-scope-and-source-inventory.md`, `02-journey-and-navigation.md`, `03-questions-and-business-rules.md`, and `clarifications.md`.
- `docs/motor-trade-funnel/04-llm-implementation-handoff.md` is the canonical index and classification layer. Follow its reading order and its links to the owning records.
- The canonical documents override this file, `IMPLEMENTATION-GUIDE.md`, implementation preferences, framework defaults, and provenance records whenever they conflict.
- Repository code only was the evidence authority used to create the specification. Legacy `path:symbol` locators are provenance references; the legacy files are intentionally absent here. Do not replace absent source with live-funnel observations, external documentation, assumptions, or remembered behavior.
- Do not edit the copied canonical documents during implementation unless the user explicitly requests a specification correction.

## Non-negotiable behavior and scope

- **Behavioral fidelity:** preserve exact mounted copy, options, ordering, values, types, equality semantics, defaults, validation, errors, conditional visibility, branches, state effects, route behavior, progress, internal surfaces, loading/blank views, layout contracts, timing, omissions, malformed identifiers, repeated identifiers, quirks, and documented non-behavior.
- Implement only the Motor Trade front-end journey, beginning with its control on the root page and ending at the documented pre-quotation terminal boundary.
- Commercial Combined may appear only as the neighboring root-page context explicitly documented by the specification. Do not implement its funnel detail.
- Do not implement or specify APIs, backend behavior, transport, quotation or referral results, checkout, or payments. Complete local branch-specific converter argument preparation, then stop immediately before the selected transport invocation.
- Engineering structure may improve maintainability only when it is behavior-neutral. Never normalize, repair, redesign, reinterpret, shorten, correct, or enhance observable legacy behavior.
- Framework, browser, accessibility, UI-kit, and type-system defaults are not behavioral authority. Override them when necessary to match an owned canonical contract, subject to applicable law and platform security requirements; record any unavoidable conflict instead of silently changing behavior.

## Unknowns

- Keep `CLR-001` through `CLR-009` unresolved and non-blocking. Implement each confirmed remainder and its documented consumers, shapes, transforms, expressions, and fallbacks without inventing the missing fact.
- Never manufacture runtime option rows, identifiers, labels, metadata, route outcomes, configuration limits, validation messages, event ordering, identity meaning, or any other clarification value.
- Isolate unresolved inputs behind explicit typed boundaries. Synthetic values are allowed only in clearly named test or development fixtures and must never be represented as legacy production values.
- Add newly discovered ambiguity to an implementation clarification log with its affected stable IDs, impact, and required evidence. Continue all unaffected work.

## Implementation discipline

- Preserve canonical stable IDs in comments, configuration metadata, tests, and the implementation traceability matrix. Map every applicable `MTS`, `EDGE`, `CTL`, `OPT`, `SHR`, and `AUD` owner to implementation code and automated tests.
- Represent stable, declarative facts as typed, versioned, JSON-compatible definitions. Use explicit, named rule functions for behavior that cannot safely be represented as static data. Configuration is structure, not permission to alter behavior or fill a `CLR` gap.
- Keep raw persisted state distinct from rendered projections and sanitized Summary data exactly as specified. Do not infer a clear, reset, write-back, or coercion from omission.
- Use explicit route/state transitions rather than deriving a cleaner journey. Preserve source-ordered multiple effects and separate predicates when the specification distinguishes them.
- Before marking work complete, run unit, component, and end-to-end checks described in `IMPLEMENTATION-GUIDE.md`, update traceability, and verify no excluded downstream behavior was introduced.

## Working agreement

- Inspect existing repository state before selecting versions, package manager, test tools, or a UI-kit vendor. Prefer established repository choices when present.
- Ask only when a missing engineering decision materially affects the implementation and cannot be made behavior-neutrally. Otherwise proceed autonomously.
- Keep commits atomic and do not mix canonical-document changes with implementation code.
