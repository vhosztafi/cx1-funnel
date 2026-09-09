# Phase 8 — Trade plates and vehicles

Goal: implement MTS-07, MTS-08A/B/L/Ø and MTS-09 Q/R/U contracts with their outgoing/back transitions and local lookup/validation consumers.

1. Implement trade-plate array/count/MTA predicates and distinct Back route state. Revalidate existing ordinary vehicles in order before selecting detail/list; retain the raw pre-existing closure where specified.
2. Define ordinary vehicle fields, option projections and schema context from raw form plus ABI/GVW stores. Preserve manual versus lookup field defaults, validation/equality differences, generated owner/address options, dependent resets and modification row shape.
3. Implement ordinary detail/list/loading/blank surfaces, index edit/delete, count and customer-loan blocking, exact 4000ms error, pagination formula and list-only formatting boundary.
4. Implement the specified vehicle's lean/full/undefined resolver branches, separate modifications key, minimum value, date differences, single-row submit and Back-without-save behavior. Keep Step 9 inclusion predicates separately coded forward/back.
5. Integrate the already tested projection-only sanitizer used by driver validation; retain raw ineligible/stale rows and absent versus empty arrays.
6. Test lookup/manual callbacks with synthetic local outputs, all list guards, route-local states, source-ordered writes and timed transitions. Update traceability without claiming final per-owner/visual reconciliation until Phase 10.

No transport implementation, lookup service API, quotation result or downstream UI is introduced. Configured limits, option rows and unresolved expressions remain explicit inputs.
