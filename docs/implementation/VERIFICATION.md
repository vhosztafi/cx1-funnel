# Motor Trade implementation verification

Date: 2026-09-09. Scope: confirmed front-end contracts through the local pre-quotation boundary. The five canonical source files are unchanged. No live funnel or external source was used as behavioral evidence.

## Evidence and limits

Design follow-up, 2026-09-10: user-authorized [Aviva-inspired presentation](DESIGN.md) now supplies the shared blue theme, brand band, serif page titles, grey form panels and responsive controls. Questions, steps and rule logic remain unchanged. All 33 browser scenarios passed, including the complete journey, mobile/desktop captures, date anchoring and an accent-token substitution check. Of 433 unit/component tests, the only initial failure expected an absent host logo to render a broken image; the test now supplies its own logo fixture and passed on rerun. Lint, typecheck, canonical inventory and the isolated production build passed. The approved visual dimensions supersede the prior layout assertions; they do not amend the historical canonical documents.

UAT feed follow-up: the user explicitly authorized reading `https://clegggiffordcoverxwebapi-uat.magiclick.net/funnel/motortrade-roadrisks/options` and replacing all synthetic dropdown options. The development consumer now reads that feed directly, preserving its 52 observed collections and original row IDs, labels, order and metadata. Mock authentication remains separate. Browser verification exercises the actual feed, reload and a forced HTTP failure followed by Retry. The feed is current UAT data, not proof of historical production values; canonical documents remain unchanged. This authorized GET is the sole transport exception in the scope audit; quotation transport remains excluded.

UAT verification: 433 unit/component tests passed, along with lint, typecheck, canonical inventory and isolated production build. The full browser run passed 31 scenarios; its remaining failure was an ambiguous test alert selector matching Next's route announcer. After narrowing the selector, all three feed/preview scenarios passed on rerun, covering all 32 browser scenarios. No `Mock:` strings remain in application source.

Follow-up, 2026-09-09: CTL-MT-13/14 custom date fields now provide both the picker root and trigger refs, anchoring the calendar to the input group. The browser regression checks opening and reopening at 1280px and 375px. Verification passed: 430 unit/component tests, 29 browser tests, lint, typecheck and canonical inventory check. Browser tests reused the existing port-3000 development server through `PLAYWRIGHT_BASE_URL`; the production build was not repeated while that server was running.

Fresh-session investigation: without host inputs, `EDGE-GUARD-AUTH` activates loading but has no dashboard URL to navigate to, and `SHR-MT-R01` invokes an intentionally unresolved option consumer. Both can leave overlays mounted; missing animation assets make them appear blank. Seeded browser tests do not demonstrate a usable unconfigured session.

User-authorized follow-up: standalone development now supplies mock authentication and local option responses, with a visible Mock preview banner. Authentication and option caching use a separate in-memory StoragePort; production credentials/cache are not seeded. Explicit host inputs or existing authentication preserve host-controlled behavior, and production builds never activate the mock. Mock address/vehicle lookup failures terminate and permit manual entry. Synthetic values and limits remain development fixtures and resolve no canonical clarification. Fresh entry, active controls, option selection, reload, absence of persisted mock data, and preservation of the real auth gate have dedicated browser coverage. All 431 unit/component and 31 browser tests, lint, typecheck, formatting of changed code and canonical inventory checks passed.

The traceability matrix maps 677 canonical owners to implementation and automated test files, including the explicitly excluded referral route. All 256 question owners are indexed in typed, versioned, JSON-compatible runtime definitions. Declarative schema tests reject malformed definitions, and 174 complete standalone question literals are compared directly with canonical copy. Dynamic templates, predicates and projection behavior have separate tests. Inventory checks establish completeness of indexing, not behavior; the behavioral evidence is in the linked domain, component and browser suites.

| Area | Verified behavior |
|---|---|
| Root, shared controls and runtime | Product order and SPA entry; family guards; source-ordered navigation commands; raw session state and retained reset categories; separate visible count/progress formula; option equality/absence; repeated radio callbacks; masked values and callback order; disclosure IDs; address/lookup controls; Debug and clean inputs |
| MTS-01–05 | Company/marketing branches, postcode/manual fields, premises and occupation arrays, turnover/VAT dialog expressions, requiredness and custom errors, cover/NCB dependencies, raw Back/submit differences and driver flattening |
| MTS-06 | Plan/detail/list/loading routing, all history groups and conditional driver questions, young/experience inputs, grouped stable sorting, raw-index mutation, owner deletion block, page changes, GUID retention, no-save Back, local revalidation and 50ms loading transition |
| MTS-07–09 | Plate rows and gates, distinct ordinary/specified shapes, manual/lookup error paths, ABI/GVW/engine/owner/lease/loan/modification boundaries, capacity and 4000ms notification, list/detail/blank states, later-row workflow validation and separately coded forward/reverse Step 9 predicates |
| MTS-10–13 | Forced category predicates and reset order, percentage exception callbacks, repeated annual Yes append, annual/temporary trip differences, locked versus draft controls, date/usage rules, declaration nulling and omitted additional-information values |
| MTS-14 and terminal | Raw versus sanitized Summary, thirteen possible sections and exact omissions, all thirteen Edit destinations, two special list-state edits, ordinary Back/continuation, policy-time gate and five local converter branches including double conversion; no terminal transport |
| Scope | AST scan rejects transport constructors/calls, server actions, API route handlers and excluded service imports; canonical inventory stays outside the runtime client dependency graph |

The root-to-terminal browser test uses a synthetic any-driver path and visits all fourteen numbered steps. Separate browser and domain tests cover the named-driver, ordinary-vehicle and specified-vehicle subflows. It does not bypass or invent an outcome for the ordinary vehicle-value callback whose return behavior is subject to CLR-008.

## Automated gates

Mock-preview follow-up production check: `CX1_BUILD_DIR=.next/production-check` production build passed alongside the active development server. The emitted browser JavaScript contains neither the mock identity marker nor the synthetic fixture labels checked. Next's temporary TypeScript include-path edits were reverted after verification.

All final gates passed on 2026-09-09. Commands use the pinned local tools; package scripts provide their portable entry points.

| Gate | Result |
|---|---|
| Canonical hashes and owner inventory | Pass — five source hashes unchanged; 677 owners / 256 questions |
| Formatting | Pass — all configured source/test/tool files |
| Unit/component tests | Pass — 430 tests in 33 files |
| Browser tests | Pass — 28 tests; 54 responsive captures |
| TypeScript | Pass — no diagnostics |
| ESLint | Pass — no findings |
| Production Webpack build | Pass — compile, TypeScript, prerender and trace generation |

## Visual review

Screenshots at widths 375 and 1280 were inspected for root, all fourteen numbered surfaces, expanded Summary, driver detail/history/list, ordinary lookup/manual/modification views, full specified entry, annual/locked/draft Extras, VAT dialog and Debug. Browser tests retain reproducible capture points in `full-journey.spec.ts`, `conditional-views.spec.ts`, and the owning surface suites. Images are generated in `test-results/`; rerunning tests replaces those artifacts.

The review found and corrected the Tailwind `.collapse` utility hiding expanded Bootstrap content, missing driver action icons, mask initialization writing to raw state, mask deletion residue, and the extraneous Next development indicator. Screenshots wait for Bootstrap collapse settlement and disable CSS animations for still capture; separate tests exercise the documented timers.

Known layout quirks remain, including negative mobile header margins, repeated collapse/radio identifiers, unnamed disclosure icons, unmatched dialog ARIA references and unguarded Summary dates. Absent logo/Lottie inputs remain unavailable: no replacement brand art or animation was fabricated. The screenshots validate the documented layout contracts, not pixel equivalence to unavailable legacy screenshots/assets.

## Unresolved facts retained

CLR-001–009 are unchanged and non-blocking. Dynamic rows and metadata, context/identity meanings, missing configuration limits, dependency-sensitive event/navigation/schema outcomes and built-in messages are not established by the selected dependencies or synthetic tests.

The append-only implementation clarification log localizes missing literals/assets/patterns, conflicting source statements, clean reset shapes, branch selection/context fields and lookup-card type/date formatting. Typed host inputs expose unavailable values without production defaults. The confirmed remainder is implemented and tested; “confirmed remainder implemented / tested” in traceability does not claim that an unresolved value or outcome has been recovered.

No APIs, transport adapter, quotation/referral result, checkout, payment, Commercial Combined detail or post-invocation redirect was added. Successful Summary submission exposes a prepared local argument and stops at that boundary.
