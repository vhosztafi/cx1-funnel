# CX1 Motor Trade Implementation Handoff Manifest

## Source identity

- Project: **CX1 Motor Trade Funnel Specification**
- Milestone: **v1.0**
- Shipped: **2026-09-09**
- Source Git tag: `v1.0`
- Source Git revision: `33443140da8de98b254a54c13ba109fe690d2de8`
- Package purpose: documentation-only transfer into the CX1 implementation repository

The five files under `docs/motor-trade-funnel/` and the two archived files under `docs/provenance/` were copied byte-for-byte. The remaining five Markdown files are implementation-repository guidance created for this handoff.

## Included file inventory and SHA-256

| File | Role | SHA-256 |
|---|---|---|
| `README.md` | Repository entry point | `5b25987ac79527ac1e0b6d064fcef2df1bca9860389cee23b8d2267d2f34c504` |
| `AGENTS.md` | Repository-wide implementation constraints | `b6b07706ce8658cfbfc95be84d6cec8e4066821b3cf0d9138926466df0fe4c8f` |
| `IMPLEMENTATION-GUIDE.md` | Read-first engineering guide | `816641a3b56a51cbe7a57f1559a608948b696a39ac994bba54b9c486185c5a25` |
| `STARTER-PROMPT.md` | Copyable implementation-agent prompt | `54e861172840a0d302f8da2e6bdfde447ff5d7d83b6856f445a88a5d0019dfb2` |
| `docs/motor-trade-funnel/01-scope-and-source-inventory.md` | Canonical scope, evidence, inventory, and terminal boundary | `c35930db2db744138e1407a2629da7ac8999899caf1c019a5c4ed42efbc8cfad` |
| `docs/motor-trade-funnel/02-journey-and-navigation.md` | Canonical journey, routes, navigation, state, and progress | `94455e0ea223e0ecf2087de95e0b34815d79619c6ac87a8805faa49d22b60cb2` |
| `docs/motor-trade-funnel/03-questions-and-business-rules.md` | Canonical questions, controls, options, validation, and rules | `45670266585a17bd27d8ee1ee9882d42db08c6099f5336195d5d98e3bf1bb2a9` |
| `docs/motor-trade-funnel/04-llm-implementation-handoff.md` | Canonical index and classification layer | `d811d41b1469c19039132f60ebc50549f949e3d4ddbafa9ee1a04b953a21e366` |
| `docs/motor-trade-funnel/clarifications.md` | Canonical unresolved clarification register | `188da47cb51d453bd45ce5930aa618a6bbdf1292a54486cafbe58c2cab41cf92` |
| `docs/provenance/v1.0-REQUIREMENTS.md` | Archived 28-requirement record | `00a3165b9dec4adc76b7045fafffeadd7a652f5b2ca4ddb9a75695f5a77583f6` |
| `docs/provenance/v1.0-MILESTONE-AUDIT.md` | Archived milestone audit and limitations | `9c46ebe03b2a50508e255d4759fde2bf0e3116a8892daa2ef49f3b8be290429c` |
| `docs/provenance/HANDOFF-MANIFEST.md` | This inventory and provenance record | Self-hash intentionally omitted because embedding it would recursively change the file |

All hashes are lowercase hexadecimal SHA-256 values. The manifest's own hash can be calculated from the committed destination file; it is not embedded because no file can contain its own final cryptographic digest without a separate signing convention.

## Explicit exclusions

The package does not include:

- legacy source directories `CleggGifford.CoverX.UI`, `CleggGifford.CoverX`, or `CleggGifford.CoverX.FunnelApi`;
- `.env` or `.env*` files, configuration assignments, secrets, package caches, dependency trees, or executable manifests;
- `.planning/phases`, phase plans, phase summaries, reviews, security reports, iteration history, or other obsolete workflow artifacts;
- Commercial Combined funnel detail beyond its canonically documented neighboring root-page context;
- API contracts, backend or transport behavior, quotation/referral results, checkout, or payments; or
- invented runtime database rows, live-funnel observations, or external behavioral evidence.

Legacy `path:symbol` locators in the canonical documents are provenance references to the source repository used for specification work. They are not local files in this implementation repository and their absence does not weaken or expand the canonical contract.

## Verification and risk record

The v1.0 milestone audit found all **8/8** cross-phase connections wired, all **5/5** end-to-end specification flows complete, and no broken relative Markdown links. It also recorded that none of Phases 1–4 had a formal `VERIFICATION.md`, so the audit's three-source gate classified all 28 requirements as orphaned from independent phase verification even though requirements and summaries marked them complete.

Nyquist validation was disabled. Phase 3 and Phase 4 security dispositions were closed through explicit risk acceptance rather than independent mitigation verification. These are disclosed limitations; this manifest does not recast them as successful formal verification.

## Integrity use

Before relying on the package, calculate SHA-256 for the eleven non-manifest files and compare them with this table. The five canonical-document hashes must remain unchanged during implementation. If an intentional specification correction is approved, record the reason, provenance, replacement hash, and authorizing decision rather than silently editing a canonical file.
