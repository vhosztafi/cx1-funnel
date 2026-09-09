# Implementation clarification log

The canonical CLR-001–009 remain unresolved and non-blocking. This log does not edit or resolve the specification.

| ID | Affected owners | Ambiguity / impact | Required evidence | Status |
|---|---|---|---|---|
| IMP-CLR-001 | ROOT header, SHR-MT-R01/R08, CTL-MT-04/17–20 | The handoff describes the CG logo and looping Lottie assets, but supplies no asset files or complete asset content. Preserve dimensions, alt and loading containers through asset inputs; do not fabricate brand or animation artwork. | Approved repository-resident assets matching the documented imports | Open, non-blocking |
| IMP-CLR-002 | CTL-MT-08 | numberFormat refers to a source regex without spelling out its pattern. Do not infer a regex from its helper name; implement independently specified number control semantics and isolate this input. | Canonical correction or permitted source-resident literal regex | Open, non-blocking |
| IMP-CLR-003 | CTL-MT-17–19, MTS-08-R04 | fixPostcodeValue is named but its formatting expression is not supplied. Uppercase/alphanumeric transforms are confirmed; the subsequent formatter remains an injected function. | Canonical correction containing the formatter expression | Open, non-blocking |
| IMP-CLR-004 | Journey header/ribbon, ROOT-012 | The docs refer to source-defined broker/back-office identity copy and configured dashboard suffixes without providing their literal expressions. Keep separate role-bound rendering inputs and do not fabricate identity text or destinations. | Canonical correction with mounted branch expressions and non-secret suffixes | Open, non-blocking |
| IMP-CLR-005 | MTS-01-Q15, MTS-02-Q02, MTS-06-Q13 | The exact UK/GIR postcode regex is referenced but its literal pattern is absent. Schema factories accept the approved pattern explicitly; requiredness, maximum length, literal error channel and address-chosen callback are implemented independently. No regex is inferred from a conventional UK postcode validator. | Canonical correction with the literal source pattern | Open, non-blocking |

New library/runtime observations are engineering evidence only. They do not settle CLR-004/006/008/009 legacy outcomes or default copy.
