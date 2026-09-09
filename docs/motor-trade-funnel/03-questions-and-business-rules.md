# Motor Trade Questions and Business Rules

This document is a repository-only, legacy-read-only specification. The mounted legacy application source is evidence and is not modified. No live funnel, environment value, browser/session content, database row, or external behavior is used to fill gaps. Only the Motor Trade front-end sales journey is specified. Commercial Combined, API contracts, quotation/results, referral outcomes, checkout, payments, downstream transport behavior, and future-stack redesign are excluded. The in-scope boundary includes the branch-specific local `MotorTradeConverter` argument evaluation(s) reached from validated Step 14 Submit and ends after that local preparation, immediately before the selected transport callee is invoked.

## Evidence Authority and Stable Notation

Mounted React controls every question, non-question UI, option, and business-rule claim. Supporting repository code is admitted only through a named mounted Motor Trade consumer and only while it changes a front-end-visible fact. Traversal stops at transport-only, quotation-only, payment-only, generated, absent database/runtime, or unrelated behavior. A supporting source may fill a gap but cannot override explicit React.

Every material record has exactly one evidence status:

- **Direct React** — mounted React, an imported static asset, mounted styling, or a mounted translation directly states the fact.
- **Dependency-resolved** — a named mounted React consumer leads through a bounded repository dependency to the missing front-end-visible fact.
- **Conflict** — controlling React and supporting evidence disagree; React remains controlling and the conflict links to the clarification register.
- **Unresolved** — the completed repository-only trail proves the boundary or ambiguity but not the missing value or observable outcome; the known contract remains usable.

`Direct React` and `Dependency-resolved` records use `Clarification: —`. `Conflict` and `Unresolved` records require a `CLR-*` link. Each material record must include at least one repository-relative `path:symbol` citation. Stable IDs are documentation labels only: they do not add fields, routes, ordering, or behavior. Where a schema calls a Yup built-in such as `.required()` or `.min()` without a message argument, this specification records the coded operation and label but does not invent dependency-generated text; exact copy for those paths is CLR-009.

| Namespace | Purpose | Uniqueness and evidence rule |
|---|---|---|
| `MTS-XX-QNN` | A mounted question or editable value on numbered surface `MTS-XX` | Unique within the surface; all fourteen question properties below are mandatory. |
| `MTS-XX-RNN` | A code-supported predicate, mutation, validation, projection, or other business rule | Unique within the surface; all eight business-rule properties below are mandatory. |
| `MTS-XX-UNN` | Mounted headings, instructions, dialogs, buttons, loading/blank/error states, layout, or accessibility facts not owned by one question | Unique within the surface; must state mount position/condition, exact observable contract, status, evidence, and clarification. |
| `AUD-MT-NN` | A documentation-only reconciliation, backlink, comparison, or completeness assertion; never mounted UI or runtime state | Unique document-wide; uses the documentation-audit schema and must not be counted as a source-to-UI fact. |
| `CTL-MT-NN` | One effective shared-control contract used by mounted Motor Trade React | Unique document-wide; question records cite it and then state field-specific props and callbacks. |
| `OPT-MT-NN` | One option collection or consumed `OptionItem` metadata contract | Unique document-wide; records retain the mounted consumer, bounded producer trail, code-resolved transforms, stop point, status, and clarification. |
| `SHR-MT-RNN` | One cross-surface lifecycle, cache, presentation, copy, layout, accessibility, or other shared rule | Unique document-wide; affected MTS records cite it without redefining it. |

The numbered surfaces remain `MTS-01` through `MTS-14`. Step 6 retains `MTS-06A`, `MTS-06B`, `MTS-06C`, and `MTS-06L`; Step 8 retains `MTS-08A`, `MTS-08B`, `MTS-08L`, and `MTS-08Ø`. Render order comes from mounted JSX, never schema, type, locale-file, or summary order.

Evidence authority and traversal are inherited from `docs/motor-trade-funnel/01-scope-and-source-inventory.md:Evidence Authority and Status/Bounded Dependency Traversal`; surface identity and the terminal edge are inherited from `docs/motor-trade-funnel/02-journey-and-navigation.md:Canonical Numbered Journey/Final Pre-Quotation Action and Terminal Boundary`.

## Stable Record Schemas

### Question and editable-value schema

Every `MTS-XX-QNN` record must contain every row. Use explicit values such as `not mounted`, `not constrained`, `none`, or `Unresolved`; do not silently omit a property. Hidden, disabled, absent from schema, optional, cleared, raw-retained, and projection-omitted are separate contracts.

#### MTS-XX-QNN — `<stored field path>`

| Property | Exact contract |
|---|---|
| Position | Exact position in the numbered step, internal subflow, conditional group, and repeated row |
| Visible copy | Exact mounted heading, label, instruction, hint, disclaimer, placeholder, suffix/prefix, dialog and adjacent copy |
| Control | Repository component, effective native/input behavior, shared `CTL-MT-NN`, and field-specific props |
| Stored/emitted value | Field path, shape, equality behavior, and exact empty representation |
| Options | Source class; known labels/values/order/grouping/default; filters and metadata; `OPT-MT-NN` where shared |
| Visible when | Exact mounted predicate |
| Enabled when | Exact disabled, forced, or read-only expression, separate from visibility |
| Required when | Exact active Yup expression and every runtime parameter, separate from visual asterisks |
| Constraints | Allowed values, range, length, format, uniqueness, cross-field and date tests |
| Errors | Exact text/source/channel, trigger, and mounted presentation |
| Lifecycle | Store default → form default → displayed value → control normalization → callback/effect → validation → submit/Back reset → raw persisted state |
| Summary | Section, label, order, lookup, condition, formatting, derivation, sanitizer and omission |
| Evidence | Exactly one status plus repository-relative `path:symbol` references for render, schema, control, state and projection |
| Clarification | `CLR-*` for `Conflict`/`Unresolved`; otherwise `—` |

### Business-rule schema

#### MTS-XX-RNN — `<rule name>`

- Trigger: exact expression, operators, primitive types, IDs, metadata, and quantifiers.
- Evaluation point: render, input change, effect, submit, Back, list Continue, summary, sanitizer, or another exact source event.
- Affected fields: stable question/value IDs and the visible/control effect.
- Raw-state effect: exact assignment, retention, clearing value, or explicit no-write.
- Projection effect: exact sanitized, derived, filtered, formatted, or omitted effect, or none.
- User-visible result/error: exact copy and presentation channel, including an explicit empty message.
- Evidence: exactly one status — repository-relative `path:symbol` reference(s).
- Clarification: `CLR-*` for `Conflict`/`Unresolved`; otherwise `—`.

### Documentation-audit schema

#### AUD-MT-NN — `<audit assertion>`

- Audit position: placement in this specification and explicit confirmation that no legacy UI node or runtime state is introduced.
- Purpose: reconciliation, backlink, comparison, completeness, or another documentation-only audit purpose.
- Assertion: the exact source-to-record proposition checked by the audit.
- Coverage: stable records, source partitions, controls, options, or schemas included in the assertion.
- Evidence: exactly one status — repository-relative `path:symbol` reference(s).
- Clarification: `CLR-*` for `Conflict`/`Unresolved`; otherwise `—`.

### Non-question mounted UI/state schema

#### MTS-XX-UNN — `<mounted UI/state fact>`

- Position and mount condition: exact numbered/internal surface position and predicate.
- Kind: heading, instruction, help, hint, disclaimer, dialog, button, loading state, blank state, error state, layout, or accessibility fact.
- Exact observable contract: source text, native element/component, handler, state, dimensions/classes, or attribute; use `none mounted` where source mounts nothing.
- Related questions/rules: stable IDs or `none`.
- Evidence: exactly one status — repository-relative `path:symbol` reference(s).
- Clarification: `CLR-*` for `Conflict`/`Unresolved`; otherwise `—`.

## Shared Control Semantics

Question records cite these controls but must still state their effective field-specific `label`, `placeholder`, `disabled`, sizing, formatting, limit, callback, and other supplied props. Source appearance does not authorize a stronger primitive, association, lookup result, error announcement, or accessibility claim.

### CTL-MT-01 — `AutoComplete`

- Native/rendered element and copy: single `react-select` `Select`; optional `<label htmlFor={id}>`; `inputId={id}`; option label is `text`; placeholder is the supplied truthy value or mounted `t('common.select')` (`Select`).
- Equality/value/empty: selected option uses loose `option.value == field.value`; unresolved selection is `undefined`; change calls `field.onChange(e?.value)` and therefore can emit the selected primitive or `undefined`.
- Formatting/callback/error/loading: `getOptionValue` stringifies defined values and returns `''` for `undefined`; after `field.onChange`, optional `callBack` receives the same primitive; disabled uses `isDisabled`; error class and `FormError` use `fieldState.error`; no loading UI is mounted.
- Accessibility/override: label/input association exists only when caller supplies both label and `id`; callers own options, disabled, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/AutoComplete.tsx:AutoComplete`.
- Clarification: —.

### CTL-MT-02 — `LogicMultiSelect`

- Native/rendered element and copy: despite its name, one `react-select` `Select`; optional `<label htmlFor={id}>`; `inputId={id}`; labels use `text`; placeholder is mounted `t('common.select')`.
- Equality/value/empty: strict `option.value === field.value`; no match is `null`; selection emits one primitive, while a cleared/no selection emits `null`.
- Formatting/callback/error/loading: `getOptionValue` returns `value?.toString() || ''`; `field.onChange` runs before optional `callBack(selectedOption)`, whose argument is the whole option or `null`; `FormError` renders the field error; no loading UI is mounted.
- Accessibility/override: label association depends on caller `id`; callers own options, label, and disabled state.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/LogicMultiSelect.tsx:LogicMultiSelect`.
- Clarification: —.

### CTL-MT-03 — `MultiSelect`

- Native/rendered element and copy: multi-value `react-select`; optional group label has no `htmlFor`; no `inputId` is supplied; labels use `text`; placeholder is mounted `t('common.type_placeholder')` (`Start typing`).
- Equality/value/empty: displayed options are those whose primitive values are included in `field.value`; absent/no matches display `undefined`; change maps selections to an array of primitive `value`s, including `[]` for an empty selection.
- Formatting/callback/error/loading: defined option values are stringified; `undefined` becomes `''`; no callback prop is invoked; disabled uses `isDisabled`; `FormError` renders the field error; no loading UI is mounted.
- Accessibility/override: the optional visible label is not source-associated with the select; callers own options, label, and disabled state.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/MultiSelect.tsx:MultiSelect`.
- Clarification: —.

### CTL-MT-04 — `RadioList`

- Native/rendered element and copy: one native `type="radio"` per option with visible button-styled `<label>` containing `opt.text`; group label uses `htmlFor={field?.name}` while option labels use generated `opt_${field?.name}_${opt.value}` IDs; optional info paragraph and tooltip wrapper are source-controlled.
- Equality/value/empty: checked state uses strict `opt.value === field?.value`; an unmatched/undefined value leaves all radios unchecked; the DOM `value` is the option index, but click emission is `opt.value`.
- Formatting/callback/error/loading: click order is optional `onChange(opt)`, then a positive callback only for `opt.value === true`, then a negative callback only for `opt.value === false`, then `field.onChange(opt.value)`; disabled is applied to input and label styling; absent or empty options mount a 150×150 looping/autoplay Lottie animation; error class and `FormError` use `fieldState.error`.
- Accessibility/override: each option label is associated with its generated input ID; tooltip ID is repeatedly `button-tooltip`; callers own `size`, `info`, tooltip, disabled and callbacks.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/RadioList.tsx:RadioList`.
- Clarification: —.

### CTL-MT-05 — `CheckboxArray`

- Native/rendered element and copy: native checkbox per option; optional group label has no association; option label is `opt.text` and its `htmlFor` matches `${field.name}-${opt.value}`.
- Equality/value/empty: local array initializes from `field.value || []`; checked uses `value.includes(opt.value)`; check appends the primitive without deduplication, uncheck filters all strictly equal values; resulting primitive array is emitted, with `[]` as empty.
- Formatting/callback/error/loading: no coercion or callback; `FormError` renders the field error; no disabled or loading behavior is implemented by this component.
- Accessibility/override: option inputs and labels are source-associated; callers own option order/value/text.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/CheckboxArray.tsx:CheckboxArray`.
- Clarification: —.

### CTL-MT-06 — `CheckboxLine`

- Native/rendered element and copy: one native checkbox and associated `<label htmlFor={id}>` containing `labelText`.
- Equality/value/empty: displayed checked state falls back to `false`; click passes `e.currentTarget.checked` to `field.onChange`; the source then invokes optional `callBack()`.
- Formatting/callback/error/loading: boolean is not coerced further; no mounted `FormError`, invalid state, disabled prop, or loading state exists in this wrapper.
- Accessibility/override: caller `id` supplies the input/label association; the spread `field` props are retained exactly.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/CheckboxLine.tsx:CheckboxLine`.
- Clarification: —.

### CTL-MT-07 — `ChecBoxLineArray` / exported `CheckboxLineArray`

- Native/rendered element and copy: two fixed native checkbox rows in order: `Direct Marketing`, then `Third Party Marketing`; each displays its fixed question as `FormLabel` and exact checkbox text `Yes (A clear YES or NO answer to be given)`.
- Equality/value/empty: local array initializes from `field.value || []`; option values are numeric `1` and `2`; check appends, uncheck strictly filters, then emits the primitive array; empty is `[]`.
- Formatting/callback/error/loading: no coercion, callback, disabled, or loading behavior; `FormError` renders the field error after both rows.
- Accessibility/override: each input ID `${field.name}-${opt.value}` matches its answer label; the preceding question `FormLabel` does not declare a control association.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/ChecBoxLineArray.tsx:CheckboxLineArray`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`.
- Clarification: —.

### CTL-MT-08 — `FormTextBox`

- Native/rendered element and copy: native `<textarea>` when `field.type === 'textarea'`, otherwise native `type="text"`; optional label uses `htmlFor={field.name}` but neither branch supplies a matching `id`; a blank/whitespace placeholder becomes `undefined`, and disabled inputs suppress the placeholder.
- Equality/value/empty: both branches display `field.value || ''` and emit strings. Textarea with `maxLength` normalizes every line ending to CRLF, counts CRLF as two characters, truncates without splitting CRLF, and emits the truncated CRLF string. Otherwise it emits the entered string.
- Formatting/callback/error/loading: text-input callback runs before normalization/emission; `numberFormat` strips the source regex characters but does not coerce the remaining text to a number; disabled changes class, opacity and placeholder; `FormError` renders the field error; no loading state.
- Accessibility/override: label association is not established by a matching input ID; callers own textarea/type, rows, size, max length, number format, disabled, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/FormTextBox.tsx:FormTextBox/onlyNumber`.
- Clarification: —.

### CTL-MT-09 — `FormTextBoxNumber`

- Native/rendered element and copy: native `type="text"`; optional label has `htmlFor=""`; input has no ID; placeholder is trimmed or `undefined` and is suppressed when disabled.
- Equality/value/empty: display is `field?.value?.toString() || ''`; input removes all non-digits. Blank after stripping emits `null` when `makeNull` is truthy, otherwise `''`; nonblank emits `Number(strippedDigits)`.
- Formatting/callback/error/loading: optional `onChangeCallback()` runs only after a nonblank numeric emission, not on the early blank return; invalid class uses field error or `errorShow`; `FormError` uses only the field message; no loading behavior.
- Accessibility/override: no source input/label association; callers own `makeNull`, `maxLength`, `errorShow`, disabled, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/FormTextBoxNumber.tsx:FormTextBoxNumber`.
- Clarification: —.

### CTL-MT-10 — `TextFieldCurrency`

- Native/rendered element and copy: `IMaskInput` in a React Bootstrap `InputGroup` with a separate visible `£` prefix box; optional label uses `htmlFor={field.name}` but the masked input supplies no matching source ID/name.
- Equality/value/empty: local display initializes to stringified truthy `field.value` or `''`; accepted input calculates `Number(el.unmaskedValue)` and emits that number, or `undefined` when blank/NaN.
- Formatting/callback/error/loading: thousands separator is `,` unless hidden; decimal scale is `0` when `blockDecimals`, otherwise `2`; optional currency symbol may also be part of the mask; deletion removes a trailing decimal and a symbol-only value. Source compares the prior `internalValue` string to the numeric/empty value before `field.onChange`, then invokes optional callback. `FormError` renders the error; no disabled/loading prop.
- Accessibility/override: source label association is not established; callers own mask-symbol visibility, separator, decimal scale, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/TextFieldCurrency.tsx:TextFieldCurrency`.
- Clarification: —.

### CTL-MT-11 — `TextFieldPercentage`

- Native/rendered element and copy: `IMaskInput` in an `InputGroup` with separate visible `%` prefix; optional label uses `htmlFor={field.name}` but the masked input has no matching source ID/name.
- Equality/value/empty: mask range is 0–100 with scale `0` when `blockDecimals`, otherwise `2`; falsey field values display as `undefined`. If `numberFormat` is true, source calls `field.onChange(Number(numVal))`, so blank unmasked text follows the source `Number('')` path. Otherwise source calls `field.onChange(v, blank-or-NaN ? undefined : numVal)`; preserve this two-argument call rather than normalizing it to a different contract.
- Formatting/callback/error/loading: comma separator unless hidden; deletion removes trailing decimal; optional callback runs after the branch; `FormError` renders the field error; no disabled/loading prop.
- Accessibility/override: source label association is not established; callers own number-format branch, separator, decimal scale, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/TextFieldPercentage.tsx:TextFieldPercentage`.
- Clarification: —.

### CTL-MT-12 — `FormSelect`

- Native/rendered element and copy: React Bootstrap native select; optional label has `htmlFor=""`; first option displays the supplied placeholder or exact inline `Select...`.
- Equality/value/empty: selected index `0` emits `undefined`; other selections emit `Number(e.target.value)` only when `numberFormat` is true, otherwise the selected string. Options render in caller order using `item.value` and `item.text`.
- Formatting/callback/error/loading: no callback or loading UI; disabled styling and native disabled state are applied; `FormError` renders the field error.
- Accessibility/override: no source label/select ID association; callers own options, placeholder, numeric coercion and disabled state.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/FormSelect.tsx:FormSelect`.
- Clarification: —.

### CTL-MT-13 — `Datepicker`

- Native/rendered element and copy: MUI `DesktopDatePicker` with a masked `IMaskInput` rendered in an `InputGroup`; display/mask is `dd/mm/yyyy`; default placeholder is exact `dd/mm/yyyy`, blank whitespace becomes `undefined`; optional label has `htmlFor=""`.
- Equality/value/empty: initial display is `formatDate(field.value)`; valid picker input becomes `dayjs(value).startOf('day').utc(true).toDate()`; complete valid manual input becomes `getValidDateOrNull(v)?.utc(true)?.toDate()`; incomplete manual input writes `undefined`. Picker `value` is `field.value || null`.
- Formatting/callback/error/loading: day/month masks pad/autofix, source inserts/removes `/`, and the year range is 1–9999. Picker callback runs before `setValue`; manual keydown callback runs before masked accept. Writes supply the source `shouldValidate` flags. Disabled state, min/max date and error styling are caller-controlled; `FormError` renders the field error; no loading UI.
- Accessibility/override: no source label/input association; adornment placement and mounted date-picker behavior are retained without additional claims.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/Datepicker.tsx:DatePicker`.
- Clarification: —.

### CTL-MT-14 — `DatepickerBirthDate`

- Native/rendered element and copy: MUI `DesktopDatePicker` plus masked `IMaskInput`; same `dd/mm/yyyy` placeholder/mask rules as CTL-MT-13; optional label has `htmlFor=""`.
- Equality/value/empty: valid picker input uses `dayjs(value).utc(true).toDate()` without the CTL-MT-13 `startOf('day')`; complete manual input uses `getValidDateOrNull(v)?.utc(true)?.toDate()`; incomplete input writes `undefined`; picker `value` is `field.value || null`.
- Formatting/callback/error/loading: calculates visible age as `Math.floor(policyStart.diff(birthDate,'years',true))`; a truthy age displays exact suffix ` years old`; callback and mask order otherwise follow the source branches; min/max/disabled/error are caller-controlled and `FormError` renders the field error.
- Accessibility/override: no source label/input association; callers own dates, callback, placeholder and disabled state.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/DatepickerBirthDate.tsx:BirthDatePicker`.
- Clarification: —.

### CTL-MT-15 — `FormHourBox`

- Native/rendered element and copy: native `type="time"`; no label is rendered by the component; placeholder is trimmed or `undefined` and suppressed while disabled.
- Equality/value/empty: display is `field.value || ''`; input emits the raw time string, including `''` when native input is cleared.
- Formatting/callback/error/loading: optional callback runs before `field.onChange`; disabled changes class/opacity; `FormError` renders the field error; no loading state.
- Accessibility/override: input has `name={field.name}` but no source ID/label association; caller owns surrounding label/copy, disabled, placeholder, and callback.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/FormHourBox.tsx:FormHourBox`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: —.

### CTL-MT-16 — `DetailCollapser`

- Native/rendered element and copy: bordered React Bootstrap `Collapse` card with heading `text`, optional focus-triggered info popover containing source HTML, and native toggle `Button` showing Add/Remove icons.
- Equality/value/empty: local `isOpen` initializes from `field?.added`; when the string prop `added` is truthy, toggle writes `setValue(added, !isOpen)`; otherwise no form value is written. Local state then toggles.
- Formatting/callback/error/loading: on close only (`callBack && isOpen`), callback runs after any `setValue` call and before local state toggles; disabled applies to the toggle and opacity; no mounted `FormError` or loading state.
- Accessibility/override: toggle has `aria-expanded={isOpen}` and repeated `aria-controls="example-collapse-text"`; content uses repeated `id="example-collapse-text"`; info button has no source accessible label. Parent-supplied forced/disabled/added behavior remains field-specific.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/DetailCollapser.tsx:DetailCollapser`.
- Clarification: —.

### CTL-MT-17 — `CapitalPostCode`

- Native/rendered element and copy: Step 1 postcode text input, native Lookup button with icon and mounted `t('common.lookup')`, optional `Enter manually` anchor, clickable result-list `<li>` rows, and five manual native text inputs in order HouseNumber, Street, Town, City, County with mounted label translations.
- Equality/value/empty: initial postcode is uppercased, non-alphanumerics removed and passed through `fixPostcodeValue`, or `''`; change repeats that transform and writes `${fieldName}Postcode`. Manual inputs emit strings. Selecting a result writes returned address fields, `${fieldName}showAddress=true`, and may write `undefined` returned fields.
- Formatting/callback/error/loading: default presence of `${fieldName}Postcode` opens manual mode; Lookup with empty value triggers field validation, otherwise starts lookup. Success clears postcode errors, hides manual mode and stores runtime results; failure sets exact `Address not found`. Result selection retrieves, clears results, waits 10 ms, writes five fields, opens manual mode and triggers them. A full-area translucent overlay mounts a 150×150 Lottie while loading. Disabled state affects postcode, lookup and manual inputs.
- Accessibility/override: multiple visible labels use `htmlFor=""`; postcode/manual inputs have no matching IDs; results are clickable `<li>` elements without source keyboard handlers. Caller owns `fieldName`, label, placeholder and disabled.
- Evidence: Direct React — Source qualifier (React with runtime/input-dependent result): `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:CapitalPostCode`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`.
- Clarification: —.

### CTL-MT-18 — `PremisePostCode`

- Native/rendered element and copy: repeated Step 2 premise postcode input, Lookup button, conditional `Enter manually` anchor/result list, then manual fields in order HouseNo, Street, Town, City, County under `tradingPremises.${idx}`.
- Equality/value/empty: initial postcode is uppercased, stripped and `fixPostcodeValue` formatted, or `''`; change writes the formatted string to `tradingPremisePostcode`; manual values are strings. Selecting a result writes five runtime address values plus `showAddress=true`.
- Formatting/callback/error/loading: default `showAddress` controls initial manual mode; empty Lookup triggers postcode validation; success clears errors, hides manual mode and stores results; failure sets exact `Address not found`; selection waits 10 ms, writes/opens/triggers the five address fields. Loading mounts the 150×150 Lottie overlay. This variant has no disabled prop.
- Accessibility/override: labels use `htmlFor=""`; inputs have no matching source IDs; result `<li>` rows have click only. Caller index fixes the repeated path and ordering.
- Evidence: Direct React — Source qualifier (React with runtime/input-dependent result): `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:PremisePostCode`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:MotorTradeStep2`.
- Clarification: —.

### CTL-MT-19 — `DriverPostCode`

- Native/rendered element and copy: unprefixed Driver Details postcode input, Lookup button, conditional `Enter manually` anchor/result list, then manual fields in order `houseNo`, `street`, `town`, `city`, `county`.
- Equality/value/empty: initial postcode is uppercased, stripped and `fixPostcodeValue` formatted, or `''`; change writes the formatted string to `postCode`; manual values are strings; result selection writes runtime values plus `showAddress=true`.
- Formatting/callback/error/loading: any nonempty `formState.defaultValues` initially opens manual mode. Lookup clears `postCode`, writes `showAddress=false`, then success hides manual mode and stores results; failure sets exact `Address not found`. Result selection waits 10 ms before address writes/triggers. Loading overlay uses a 100×100 Lottie, unlike the 150×150 shared variants. This component has no disabled prop.
- Accessibility/override: labels use `htmlFor=""`; inputs have no matching source IDs; result `<li>` rows have click only.
- Evidence: Direct React — Source qualifier (React with runtime/input-dependent result): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:DriverPostCode`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`.
- Clarification: —.

### CTL-MT-20 — `VehicleRegistration`

- Native/rendered element and copy: registration text input, native button with exact inline `Search`, unconditional mounted `Enter manually` anchor, `FormError`, and a 150×150 Lottie lookup overlay.
- Equality/value/empty: display is `field.value || ''`; change uppercases and removes every character except letters, digits and spaces, then emits the string. Duplicate comparison removes spaces from ordinary plus specified registration values and the current default; empty is `''`.
- Formatting/callback/error/loading: empty Search triggers the field. A nonempty duplicate sets exact `Reg number has been previously entered.` and stops. Lookup can set exact `Registration plate is outside of criteria.` or `Motorcycle type is not allowed.` from mounted metadata predicates. Success clears all form errors, writes lookup/manual flag plus returned vehicle fields, derives `chosenVehicleType`, preserves numeric/zero GVW or returned raw GVW, hides lookup/manual views, and returns the populated object to parent state. Failure resets the ordinary form, or the specified form to `{ addSpecifiedVehicle: true, modifications: [] }`, then sets exact `Vehicle Not Found, if you believe this is incorrect, please contact your broker so this update can be completed`. Manual link sets parent manual mode and `isManualEntry=true`.
- Accessibility/override: label uses `htmlFor={field.name}` while input has `name` but no matching source ID; actions are native button/anchor. Parent controls ordinary versus specified reset and lookup/manual view state.
- Evidence: Direct React — Source qualifier (React with runtime/input-dependent result): `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:VehicleRegistration`; mounted at `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails` and `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`.
- Clarification: —.

### CTL-MT-21 — `FormError`

- Native/rendered element and copy: falsey `message` returns `null`; otherwise a rounded flex `<div>` contains `WarningRounded` and the exact message in legacy red. Empty string, `undefined`, `null`, `false`, and other falsey values are therefore visually suppressed.
- Equality/value/empty: no value is emitted. Optional margin classes follow the exact `mt !== null` and `mb != null` branches; the interpolated `className` is retained even when undefined.
- Formatting/callback/error/loading: no callback or loading state; no escaping/rewriting is performed by this component.
- Accessibility/override: source supplies no `role`, `aria-live`, or other error-announcement attribute; do not add one to the as-is contract.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/ui/FormError.tsx:FormError`.
- Clarification: —.

### Inspected postcode variants not mounted by Motor Trade

`CleggGifford.CoverX.UI/src/components/fields/PostCode.tsx:PostCode` and `CleggGifford.CoverX.UI/src/components/fields/PostCodeSingular.tsx:PostCodeSingular` were read separately as required, but repository search finds no import or JSX use under the mounted Motor Trade step tree. They receive no `CTL-MT-NN` because that would falsely imply consumption. `PostCode` is tied to `step5.locations.${idx}` and `PostCodeSingular` to a caller-supplied dotted object path; neither overrides CTL-MT-17, CTL-MT-18, or CTL-MT-19. Evidence status: Direct React — Source qualifier (React for the non-mount finding): `CleggGifford.CoverX.UI/src/components/fields/PostCode.tsx:PostCode`; `CleggGifford.CoverX.UI/src/components/fields/PostCodeSingular.tsx:PostCodeSingular`; mounted-consumer search under `CleggGifford.CoverX.UI/src/steps/MotorTrade`.

## Dynamic Options and Repository-Resolved Transforms

Every collection record below begins at its named mounted consumer, then follows the common bounded trail `DataContainer` → `getMotorTradeOptions` → legacy `Options` → the stated source class. Unless a row states otherwise, `Options` projects repository-confirmed `{ value: x.Id, text: x.Name }` in the enumeration returned by `ListAll()`; the consumer renders that order and falls back to `[]` when coded. The database rows reached after `ListAll()` are not repository-resident. Consequently, each affected record is `Unresolved` only for current row IDs/text/order and links `CLR-001`; its stated projection, metadata, filter, equality, default and ordering remain repository-confirmed. No live endpoint, cache, database, or environment content was inspected.

Common evidence for all records: `CleggGifford.CoverX.UI/src/containers/dataContainer.tsx:DataContainer`; `CleggGifford.CoverX.UI/src/api/motorTrade.ts:getMotorTradeOptions`; `CleggGifford.CoverX/CgLloyds20.WebApi/ApiControllers/FunnelMotortradeRoadRisksController.cs:Options`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:MotortradeRoadRisksOptionsResult`; with each applicable producer class and `ListAll` method identified in its Source/Producer column.

### Mounted collection records

| ID | Frontend collection | Source class | Producer trail | Repository-resolved shape/mapping/order | Consumer transforms | Default | Unresolved content | Consumers | Evidence | Clarification |
|---|---|---|---|---|---|---|---|---|---|---|
| `OPT-MT-01` | `proposerTitles` | `LkTitleDS.List` | Common trail → `LkTitleDS.List` | `{value: ID, text: Name}`; source order | Direct select/summary lookup | `[]`; no selected collection default | Current rows/order | MTS-01-Q07 `proposerTitleId`; later director/partner title fields; MTS-14 summary | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:proposerTitles` | `CLR-001` |
| `OPT-MT-02` | `marketingMethods` | `LkClientGdprMarketingMethodDS.ListAll` | Common trail → named `ListAll` | `{value: ID, text: Name}`; source order | Passed to checkbox array when marketing consent is true | `[]` | Current rows/order | MTS-01-Q03 `marketingMethod`; MTS-01-R03 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:marketingMethod`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:marketingMethods` | `CLR-001` |
| `OPT-MT-03` | `companyTypes` | `LkIpMotortradeRoadRisksCompanyTypeDS` | Common trail → named `ListAll` | `{value: Id, text: Name, relationshipOptions: related relationship IDs}` | Selected company filters driver relationships; summary finds text by value | `[]` | Current rows/order and relationship memberships | MTS-01-Q06 `proposerCompanyTypeId`; MTS-01-R02; MTS-06B relationship; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerCompanyTypeId`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:companyTypesGiven` | `CLR-001` |
| `OPT-MT-04` | `tradingFroms` | `LkIpMotortradeRoadRisksTradingFromDS` | Common trail → named `ListAll` | Base shape; source order | Direct select and summary value-to-text find | `[]` | Current rows/order | MTS-02-Q01 `tradingFromId`; MTS-02-R01; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingFromId`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingFroms` | `CLR-001` |
| `OPT-MT-05` | `tradingPremiseTypes` | `LkIpMotortradeRoadRisksTradingPremiseTypeDS` | Common trail → named `ListAll` | Base shape; source order | Direct repeated-premise select and summary lookup | `[]` | Current rows/order | MTS-02-Q03 `tradingPremises[].tradingPremiseTypeId`; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingPremiseTypeId`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingPremiseTypes` | `CLR-001` |
| `OPT-MT-06` | `mtOccupations` | `LkIpMotortradeRoadRisksMotortradeOccupationDS` | Common trail → named `ListAll` | Base shape plus three boolean flags; source order | Selected IDs map to text; flags drive customer LOI, shunter and car-jockey conditions | `[]` | Current rows/order/flag values | MTS-04-Q01/R02/R03; MTS-05-Q03/R03; MTS-13; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:mtOccupations`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLOIOccupations`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:valetteIDs/jockeyIDs` | `CLR-001` |
| `OPT-MT-07` | `coverLevels` | `LkIpMotortradeRoadRisksCoverLevelDS` | Common trail → named `ListAll` | Base shape plus `isComprehensive`; source order | Mounted choice; value is supplied to Step 5 schema; summary text lookup | `[]` | Current rows/order/metadata | MTS-05-Q01/Q09/R01/R04; MTS-11; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverLevelID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverLevels` | `CLR-001` |
| `OPT-MT-08` | `customerLoanCoverLevels` | `LkIpMotortradeRoadRisksVehicleCustomerLoanCoverLevelDS` | Common trail → named `ListAll` | Base shape plus `isComprehensive`; source order | Passed into Step 5 schema and mounted choice | `[]` | Current rows/order/metadata | MTS-05-Q09/R04 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLoanCoverLevels` | `CLR-001` |
| `OPT-MT-09` | `indemnityOwnVehicles` | `LkIpMotortradeRoadRisksIndemnityLimitOwnVehiclesDS` | Common trail → named `ListAll` | Base shape plus `numericValue=OGIValue` and nested active excess records; nested defaults first then `numericValue` ascending | Filters at `<=15000` in non-comprehensive flow, selected numeric limit drives skips/validation; summary slices first six in one branch | `[]`; nested default is metadata-marked row, not a forced field selection | Current parent/nested rows and outer order | MTS-05-Q02/Q04/R02/R07; MTS-06; MTS-07–09; MTS-14 | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:indemnityOwnVehicle`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:indemnityOwnOptions/excessOptions` | `CLR-001` |
| `OPT-MT-10` | `indemnityCustomerVehicles` | `LkIpMotortradeRoadRisksIndemnityLimitCustomerVehiclesDS` | Common trail → named `ListAll` | `{value, text, numericValue: OGIValue}`; source order | Non-comprehensive branch filters truthy `numericValue <=15000`; selected numeric limit constrains driver rules | `[]` | Current rows/order | MTS-05-Q03/R02/R07; MTS-06; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:indemnityCustomerOptions`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:policyCustomerIndemnityLimit` | `CLR-001` |
| `OPT-MT-11` | `excessLates` | `LkIpMotortradeRoadRisksExcessLateDS` | Common trail → named `ListAll` | Base shape; source order | Mounted as a disabled ID-1/2 choice with Controller default 1; summary lookup | `[]` | Current rows/order | MTS-05-Q06/R01; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:excessLates`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:excessLates` | `CLR-001` |
| `OPT-MT-12` | `noClaimBonuses` | `LkIpMotortradeRoadRisksNCBDS` | Common trail → named `ListAll` | Base shape; source order | Direct select and summary lookup | `[]` | Current rows/order | MTS-05-Q10/R05; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:noClaimBonuses`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:noClaimBonuses` | `CLR-001` |
| `OPT-MT-13` | `noClaimBonusesEarned` | `LkIpMotortradeRoadRisksNCBEarnedDS` | Common trail → named `ListAll` | Base shape; source order | Conditional select and summary lookup | `[]` | Current rows/order | MTS-05-Q11/Q17/R05; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:noClaimBonusesEarned`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:noClaimBonusesEarned` | `CLR-001` |
| `OPT-MT-14` | `noClaimBonusPreviousInsurers` | `LkIpMotortradeRoadRisksNCBPreviousInsurerDS` | Common trail → named `ListAll` | Base shape plus `requireNCBIntroRenewal`; source order | Metadata partitions insurers and controls introductory-renewal follow-up; summary lookup | `[]` | Current rows/order/flag values | MTS-05-Q13/Q14/R05/R06; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:satisfiedConditionOptions`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:NCBpreviousInsurer` | `CLR-001` |
| `OPT-MT-15` | `noClaimBonusIntroRenewalYears` | `LkIpMotortradeRoadRisksNCBIntroRenewalYearDS` | Common trail → named `ListAll` | Base shape; source order | Mounted for qualifying insurer/answer branch | `[]` | Current rows/order | MTS-05-Q15/R06 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:noClaimBonusIntroRenewalYears` | `CLR-001` |
| `OPT-MT-16` | `driverPlans` | `LkIpMotortradeRoadRisksDriverPlanDS` | Common trail → named `ListAll` | Base shape; source order | Direct plan selection | `[]` | Current rows/order | MTS-06-Q01 `driverPlanId` | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:driverPlans` | `CLR-001` |
| `OPT-MT-17` | `aadDriverMinAge` | `LkIpMotortradeRoadRisksAADDriverMinAgeDS` | Common trail → named `ListAll` | Base shape; source order | Choice; selected value also participates in AAD validation | `[]` | Current rows/order | MTS-06-Q03 `aadDriverMinAgeId`; MTS-11 oldest/youngest rules | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadDriverMinAge`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:youngestDriver` | `CLR-001` |
| `OPT-MT-18` | `aadDriverMaxAge` | `LkIpMotortradeRoadRisksAADDriverMaxAgeDS` | Common trail → named `ListAll` | Base shape; source order | Choice; selected value participates in validation | `[]` | Current rows/order | MTS-06-Q04 `aadDriverMaxAgeId`; MTS-11 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadDriverMaxAge`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:oldestDriver` | `CLR-001` |
| `OPT-MT-19` | `aadMaxVehicleGrouping` | `LkIpMotortradeRoadRisksAADMaxVehicleGroupingDS` | Common trail → named `ListAll` | Base shape plus integer `abiGroup`; source order | Selected metadata becomes AAD ABI ceiling in driver/vehicle validators | `[]` | Current rows/order/metadata | MTS-06A `aadMaxVehicleGroupingID`; MTS-06B/MTS-08A validation | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadMaxVehicleGrouping`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:abiGroup` | `CLR-001` |
| `OPT-MT-20` | `aadMaxVehicleGvw` | `LkIpMotortradeRoadRisksAADMaxVehicleGvwDS` | Common trail → named `ListAll` | `maxGVW = MaxGVW * 1000` when non-null, otherwise `null`; source order | Selected multiplied metadata becomes AAD GVW ceiling | `[]` | Current rows/order/source values | MTS-06A `aadMaxVehicleGvwID`; MTS-06B/MTS-08A validation | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:aadMaxVehicleGvw`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverPlanGvw` | `CLR-001` |
| `OPT-MT-21` | `aadMaxMotorcycleCc` | `LkIpMotortradeRoadRisksAADMaxMotorcycleCcDS` | Common trail → named `ListAll` | Base shape plus nullable `maxCC`; source order | Selected metadata is compared with driver maximum motorcycle cover | `[]` | Current rows/order/metadata | MTS-06A `aadMaxMotorcycleCcID`; MTS-07/MTS-08A/MTS-09 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadMaxMotorcycleCc`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:anyDriverEngineLimit` | `CLR-001` |
| `OPT-MT-22` | `youngDriverConfiguration` | Code initializer plus two lookup collections | Common trail → `MotortradeRoadRisksOptionsResult` constructor | Four source-ordered bands: `≤18` default CC ID 1, allowed 1/2/3/4/5, default indemnity ID 1, allowed 1/2/4, excess 500; `19–20` default CC 2, allowed 2/3/4/5, default indemnity 1, allowed 1/2/4, excess 350; `21–22` default CC 3, allowed 3/4/5, default indemnity 2, allowed 2/4, excess 250; `≥23` default CC 4, allowed 4/5, default indemnity 3, allowed 3/4, excess 250. Default labels use `Single(...).Text`, arrays use source-order `Where`, excess uses `ToString("C0")` | Finds band with `ageFrom || 0` and `ageTo || 1000`; filters indemnities by policy limit; mounts derived prompts/options | No form selection forced solely by collection; code-derived label defaults feed young-driver UI | Lookup row labels and culture-produced currency string are not literal in repository output | MTS-06B young-driver details | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ageRange` | `CLR-001` |
| `OPT-MT-23` | `youngDriverIndemnityLimit` | `LkIpMotortradeRoadRisksDriverAgeIndemnityLimitDS` | Common trail → named `ListAll` | `{value, text, numericValue}`; source order; enum IDs 1/2/3/4 denote 5k/10k/15k/20k initializer choices | Supplies configuration labels/options; omission compares selected numeric value to own-policy limit | `[]` | Current labels/rows/order/numeric values | MTS-06B and driver omission | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:youngDriverIndemnityLimit`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:chosenYoungerNumeric` | `CLR-001` |
| `OPT-MT-24` | `driverTitles` | `LkIpMotortradeRoadRisksDriverTitleDS` | Common trail → named `ListAll` | Base shape; source order | Direct choice | `[]` | Current rows/order | MTS-06-Q08 `titleID` | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverTitles` | `CLR-001` |
| `OPT-MT-25` | `driverRelationshipsPolicyHolder` | `LkIpMotortradeRoadRisksDriverRelationshipPolicyholderDS` | Common trail → named `ListAll` | Base shape; source order | Filtered to IDs in selected company type `relationshipOptions`; summary lookup | `[]` | Current rows/order and memberships | MTS-06-Q12 `relationshipPolicyholderID`; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:relationshipOptions`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:driverRelationshipsPolicyHolder` | `CLR-001` |
| `OPT-MT-26` | `driverUsages` | `LkIpMotortradeRoadRisksDriverUsageDS` | Common trail → named `ListAll` | Base shape plus `isSocialDomesticPleasure`; source order | Direct driver choice; first option whose flag is false is used as Motor-Trade-only value in Step 13; summary lookup | `[]` | Current rows/order/flag values | MTS-06-Q19 `usageID`; MTS-11/MTS-13/MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverUsages`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:motorTradeOnlyChoice` | `CLR-001` |
| `OPT-MT-27` | `driverGVWLimits` | `LkIpMotortradeRoadRisksDriverGVWLimitDS` | Common trail → named `ListAll` | Base shape plus `gvwLimitDecimal = MaxGVW * 1000` when non-null, else `null`; source order | Selected multiplied value compared with AAD ceiling | `[]` | Current rows/order/source values | MTS-06-Q20 `gvwLimitID` | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverGVWLimits`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverGVW` | `CLR-001` |
| `OPT-MT-28` | `driverLicenceTypes` | `LkIpMotortradeRoadRisksDriverLicenceTypeDS` | Common trail → named `ListAll` | Base shape; source order | Direct choice | `[]` | Current rows/order | MTS-06-Q23 `licenceTypeID` | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverLicenceTypes` | `CLR-001` |
| `OPT-MT-29` | `driverMotorcycleCovers` | `LkIpMotortradeRoadRisksDriverMotorcycleCoverDS` | Common trail → named `ListAll` | Base shape plus nullable `maxCC`; source order | Selected maximum compared with AAD maximum | `[]` | Current rows/order/metadata | MTS-06B motorcycle cover; MTS-07/MTS-08A/MTS-09 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverMotorcycleCovers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:driversMaxCC` | `CLR-001` |
| `OPT-MT-30` | `driverMaxABIGroups` | `LkIpMotortradeRoadRisksDriverMaxABIGroupDS` | Common trail → named `ListAll` | Base shape; source order | Selected value sorted numerically across drivers and compared with AAD ABI group | `[]` | Current rows/order | MTS-06-Q27 `maxABIGroupID`; vehicle validation | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverMaxABIGroups`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverMaxABIGroup` | `CLR-001` |
| `OPT-MT-31` | `driverTradeEmploymentBasises` | `LkIpMotortradeRoadRisksDriverTradeEmploymentBasisDS` | Common trail → named `ListAll` | Base shape; source order | Direct choice | `[]` | Current rows/order | MTS-06B employment basis | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverTradeEmploymentBasises` | `CLR-001` |
| `OPT-MT-32` | `occupations` | `LkIpMotortradeRoadRisksOccupationDS` | Common trail → named `ListAll` | Base shape; source order | Repeated additional-occupation choice | `[]` | Current rows/order | MTS-06B driver occupations | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:occupations` | `CLR-001` |
| `OPT-MT-33` | `driverMTConvictionCodes` | `LkIpMotortradeRoadRisksDriverMotortradingConvictionCodeDS` | Common trail → named `ListAll` | Base shape; source order | Repeated conviction code choice | `[]` | Current rows/order | MTS-06B convictions | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverMTConvictionCodes` | `CLR-001` |
| `OPT-MT-34` | `driverClaimTypes` | `LkIpMotortradeRoadRisksDriverClaimTypeDS` | Common trail → named `ListAll` | Base shape; source order | Repeated claim type choice | `[]` | Current rows/order | MTS-06B claims | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverClaimTypes` | `CLR-001` |
| `OPT-MT-35` | `driverClaimStatuses` | `LkIpMotortradeRoadRisksDriverClaimStatusDS` | Common trail → named `ListAll` | Base shape; source order | Repeated claim status choice | `[]` | Current rows/order | MTS-06B claims | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverClaimStatuses` | `CLR-001` |
| `OPT-MT-36` | `driverCriminalConvictionCodes` | `LkIpMotortradeRoadRisksDriverCriminalConvictionCodeDS` | Common trail → named `ListAll` | Base shape; source order | Repeated criminal-code choice | `[]` | Current rows/order | MTS-06B criminal convictions | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverCriminalConvictionCodes` | `CLR-001` |
| `OPT-MT-37` | `driverCCJStatuses` | `LkIpMotortradeRoadRisksDriverCountyCourtJudgementStatusDS` | Common trail → named `ListAll` | Base shape; source order | Repeated CCJ status choice | `[]` | Current rows/order | MTS-06B CCJs | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverCCJStatuses` | `CLR-001` |
| `OPT-MT-38` | `driverExperienceBasedExcesses` | `LkIpMotortradeRoadRisksDriverExperienceBasedExcessDS` | Common trail → named `ListAll` | Base shape plus `numericValue`; source order | Filters to truthy values below policy indemnity; omission compares selected numeric value | `[]` | Current rows/order/numeric values | MTS-06B less-than-one-year licence rules | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverExperienceBasedExcesses`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten` | `CLR-001` |
| `OPT-MT-39` | `driverExperienceBasedVehicleCCLimits` | `LkIpMotortradeRoadRisksDriverExperienceIncreaseVehicleCCLimitDS` | Common trail → named `ListAll` | Base shape; source order | Direct restricted-licence option list and default input | `[]` | Current rows/order | MTS-06B less-than-one-year licence rules | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverExperienceBasedVehicleCCLimits` | `CLR-001` |
| `OPT-MT-40` | `vehicleType` | `LkIpMotortradeRoadRisksVehicleTypeDS` | Common trail → named `ListAll` | Base shape plus `category`, `requiresQuadBikes`, `requiresRallyTrackKitCarsTrikes`; DTO also carries ABI-check flag not declared/consumed by mounted frontend option type | Finds category; filters Motorcycle; metadata forces Step 10 categories; maps selection into lookup/manual forms | `[]` | Current rows/order/metadata strings/flags | MTS-07; MTS-08A/B; MTS-09; MTS-10 | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:vehicleType`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleType`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:vehicleType` | `CLR-001` |
| `OPT-MT-41` | `vehicleKeptOvernightType` | `LkIpMotortradeRoadRisksVehicleKeptOvernightTypeDS` | Common trail → named `ListAll` | Base shape; source order | Direct choice and vehicle-card text lookup | `[]` | Current rows/order | MTS-08A/B and MTS-09 overnight details | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleKeptOvernightType`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:VehicleSummaryCard` | `CLR-001` |
| `OPT-MT-42` | `vehicleModifications` | `LkIpMotortradeRoadRisksVehicleModificationDS` | Common trail → named `ListAll` | Base shape; source order | Ordinary vehicle uses primitive multi-select array; specified form uses its mounted distinct shape; cards map IDs to text | `[]` | Current rows/order | MTS-08A/B and MTS-09 modifications | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleModifications`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:vehicleModifications` | `CLR-001` |
| `OPT-MT-43` | `demonstrationCovers` | `LkIpMotortradeRoadRisksDemonstrationCoverDS` | Common trail → named `ListAll` | Base shape plus `isComprehensive`; source order | Direct conditional choice and summary lookup | `[]` | Current rows/order/metadata | MTS-11 demonstration cover; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:demonstrationCovers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary` | `CLR-001` |
| `OPT-MT-44` | `windScreenCovers` | `LkIpMotortradeRoadRisksWindscreenCoverDS` | Common trail → named `ListAll` | Base shape; source order | Direct conditional choice and summary lookup | `[]` | Current rows/order | MTS-11 windscreen cover; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:windScreenCovers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary` | `CLR-001` |
| `OPT-MT-45` | `thirdPartyDamageLimits` | `LkIpMotortradeRoadRisksThirdPartyPropertyDamageLimitDS` | Common trail → named `ListAll` | Base shape; source order | Direct choice and summary lookup | `[]` | Current rows/order | MTS-11 third-party damage; MTS-14 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:thirdPartyDamageLimits`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary` | `CLR-001` |
| `OPT-MT-46` | `europeanTripUsage` | `LkIpMotortradeRoadRisksEuropeanTripUsageDS` | Common trail → named `ListAll` | Base shape plus `isSocialDomesticPleasure`; source order | Used only by annual Q12 and repeated temporary-trip Q20 input choices and their compatibility predicates; StepSummary reads `driverUsages` (OPT-MT-26), not this collection | `[]` | Current rows/order/metadata | MTS-11-Q12/Q20 and R05 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:europeanTripUsage`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:europeanCoverUsageTypeID` | `CLR-001` |
| `OPT-MT-47` | `europeanArea` | `LkIpMotortradeRoadRisksEuropeanAreaDS` | Common trail → named `ListAll` | `{value: ID, text: Name, countries: Countries}` and materialized with `ToList`; source order | Temporary-trip Q17 area selection finds and displays stored `countries`; StepSummary maps the temporary-trip area text | `[]` | Current rows/order/country strings | MTS-11-Q17 temporary-trip area/countries; MTS-11-R11/MTS-14 Summary | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:europeanArea/countries`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:europeanArea` | `CLR-001` |
| `OPT-MT-48` | `europeanTripCover` | `LkIpMotortradeRoadRisksEuropeanTripCoverDS` | Common trail → named `ListAll` | Base shape plus `isComprehensive`; source order | Repeated temporary-trip cover choice | `[]` | Current rows/order/metadata | MTS-11 temporary-trip cover | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:europeanTripCover` | `CLR-001` |
| `OPT-MT-49` | `carJockeyRadii` | `LkIpMotortradeRoadRisksCarJockeyRadiusDS` | Common trail → named `ListAll` | `{value: ID, text: Name}` materialized with `ToList`; source order | Mounted only when selected Motor Trade occupations require car-jockey radius | `[]` | Current rows/order | MTS-13-Q02 `carJockeyRadiusID` | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:carJockeyRadii`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:carJockeyRadii` | `CLR-001` |

`marketingConsents`, `vehicleOwnerTypes`, and `vehicleStatuses` exist in `IOptions`/the producer but no mounted Motor Trade consumer reads them. `driverResidencyLenghts` and top-level `excesses` exist in the frontend interface but are not populated by `MotortradeRoadRisksOptionsResult`; no mounted consumer reads them. They therefore receive no `OPT-MT-NN`: assigning an ID would falsely claim mounted use. Evidence: Direct React/dependency boundary — `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:IOptions`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:MotortradeRoadRisksOptionsResult`; mounted search under `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`.

### Consumed metadata records

Each metadata record remains separate so later question/rule records can cite the exact flag or derived scalar without renumbering its parent collection.

| ID | Frontend collection / metadata | Source class | Producer trail | Repository-resolved shape/mapping/order | Consumer transforms | Default | Unresolved content | Consumers | Evidence | Clarification |
|---|---|---|---|---|---|---|---|---|---|---|
| `OPT-MT-50` | `companyTypes[].relationshipOptions` | Company-type relationship navigation | `OPT-MT-03` trail | Related relationship IDs or absent | Optional-chained then filters relationship collection by strict `includes` | Absent remains absent | Membership values | MTS-06B relationship | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:RelationshipOptions`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:relationshipOptions` | `CLR-001` |
| `OPT-MT-51` | `aadMaxVehicleGrouping[].abiGroup` | `AADMaxVehicleGroupingDS` | `OPT-MT-19` trail | Copies integer `AbiGroup` | Selected value becomes validation ceiling | No fallback beyond optional result | Values | MTS-06B/MTS-08A validators | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:AbiGroup`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:abiGroup` | `CLR-001` |
| `OPT-MT-52` | `aadMaxVehicleGvw[].maxGVW` | `AADMaxVehicleGvwDS` | `OPT-MT-20` trail | Non-null source multiplied by `1000`; null retained | Selected metadata supplies ceiling | `null` preserved | Source values | MTS-06B/MTS-08A validators | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:MaxGVW`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverPlanGvw` | `CLR-001` |
| `OPT-MT-53` | `mtOccupations[].requireShunterRadius` | Motortrade occupation DS | `OPT-MT-06` trail | Boolean copied exactly | Filter selected occupation IDs requiring shunter radius | False does not qualify | Flag values | MTS-13 shunter group | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:valetteIDs` | `CLR-001` |
| `OPT-MT-54` | `mtOccupations[].requireCarJockeyRadius` | Motortrade occupation DS | `OPT-MT-06` trail | Boolean copied exactly | Filter selected occupation IDs requiring car-jockey radius | False does not qualify | Flag values | MTS-13 car-jockey group | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:jockeyIDs` | `CLR-001` |
| `OPT-MT-55` | `driverUsages[].isSocialDomesticPleasure` | Driver usage DS | `OPT-MT-26` trail | Boolean copied exactly | `find(option => !option.isSocialDomesticPleasure)` supplies Motor-Trade-only choice | First source-order false row | Flag values/order | MTS-13 restriction rules | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:motorTradeOnlyChoice` | `CLR-001` |
| `OPT-MT-56` | `vehicleType[].requiresQuadBikes` | Vehicle type DS | `OPT-MT-40` trail | Boolean copied exactly | `some/find`-style mounted predicate through filtered source result forces related Step 10 card | False does not qualify | Flag values | MTS-10 quad bikes | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:requiresQuadBikes` | `CLR-001` |
| `OPT-MT-57` | `vehicleType[].requiresRallyTrackKitCarsTrikes` | Vehicle type DS | `OPT-MT-40` trail | Boolean copied exactly | Mounted predicate forces related Step 10 card | False does not qualify | Flag values | MTS-10 rally/track/kit/trikes | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:requiresRallyTrackKitCarsTrikes` | `CLR-001` |
| `OPT-MT-58` | `indemnityOwnVehicles[].excesses` | Own-indemnity relationship + excess entity | `OPT-MT-09` trail | Select nested rows, retain `e.Active`, append exact ` (Default)` to default text, sort default first then numeric ascending | Selected indemnity supplies mounted excess list | Empty relationship yields `[]`; marked default remains first | Parent/nested rows and flags | MTS-05-Q04/R02; MTS-14 | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:Excesses`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:excessOptions` | `CLR-001` |
| `OPT-MT-59` | `vehicleType[].category` | Vehicle type DS | `OPT-MT-40` trail | String copied exactly | Strict comparisons to `'Motorcycle'` and `'Commercial'`; selected category is stored/used by vehicle forms | Missing match uses `''` in coded branches | Category values | MTS-07/MTS-08A/MTS-09/MTS-10 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:category`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:commercialVehicle` | `CLR-001` |
| `OPT-MT-60` | `mtOccupations[].customerLOI` | Motortrade occupation DS | `OPT-MT-06` trail | Boolean copied exactly | Filters occupations affecting customer limit-of-indemnity conditions | False does not qualify | Flag values | MTS-05-Q03/R03 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLOIOccupations` | `CLR-001` |
| `OPT-MT-61` | `noClaimBonusPreviousInsurers[].requireNCBIntroRenewal` | NCB previous insurer DS | `OPT-MT-14` trail | Boolean copied exactly | Filters insurer IDs that enable introductory-renewal questions | False does not qualify | Flag values | MTS-05-Q14/Q15/R06 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:satisfiedConditionOptions` | `CLR-001` |
| `OPT-MT-62` | `aadMaxMotorcycleCc[].maxCC` / `driverMotorcycleCovers[].maxCC` | Two named motorcycle DS sources | `OPT-MT-21`/`OPT-MT-29` trails | Nullable decimal copied | Finds selected metadata then compares AAD/driver limits | Optional lookup may be undefined | Values | MTS-07/MTS-08A/MTS-09 | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:anyDriverEngineLimit/driversMaxCC` | `CLR-001` |
| `OPT-MT-63` | `europeanArea[].countries` | European area DS | `OPT-MT-47` trail | String copied by DTO constructor | Selected temporary-trip Q17 area supplies the conditionally displayed country string; StepSummary omits the countries metadata | Optional lookup may be undefined | Strings | MTS-11-Q17 temporary-trip countries display | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:countries`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:EuropeanAreaDTO` | `CLR-001` |
| `OPT-MT-64` | `youngDriverConfiguration[].ageFrom` | Code initializer | `OPT-MT-22` trail | `null`, 19, 21, 23 in source order | `ageFrom || 0` lower bound | `null` becomes comparison bound 0 | None for numeric bounds | MTS-06B | Dependency-resolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:initialisers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:lowerLimit` | — |
| `OPT-MT-65` | `youngDriverConfiguration[].ageTo` | Code initializer | `OPT-MT-22` trail | 18, 20, 22, `null` in source order | `ageTo || 1000` upper bound | `null` becomes comparison bound 1000 | None for numeric bounds | MTS-06B | Dependency-resolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:initialisers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:upperLimit` | — |
| `OPT-MT-66` | `youngDriverConfiguration[].additionalExcess` | Code initializer | `OPT-MT-22` trail | 500/350/250/250 formatted with `ToString("C0")` | Interpolated into mounted young-driver prompt | No fallback beyond optional access | Exact runtime culture rendering | MTS-06B | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations/AdditionalExcess`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:youngDriverOptions.additionalExcess` | `CLR-001` |
| `OPT-MT-67` | `youngDriverConfiguration[].indemnities` | Initializer + indemnity rows | `OPT-MT-22`/`OPT-MT-23` trails | ID allowlists per band filtered from source-order collection | Further filters truthy `numericValue <= policyIndemnityLimit` | `[]` at control callsite | Row labels/numeric values/order | MTS-06B | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations/Indemnities`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:indemnities` | `CLR-001` |
| `OPT-MT-68` | `youngDriverConfiguration[].cCs` | Initializer + CC rows | `OPT-MT-22` trail | ID allowlists per band filtered from source-order CC collection | Passed to mounted select | `[]` at control callsite | Row labels/order | MTS-06B | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations/CCs`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:cCs` | `CLR-001` |
| `OPT-MT-69` | `youngDriverConfiguration[].defaultAdditionalIndemnity` | Initializer + indemnity rows | `OPT-MT-22` trail | `Single` by enum ID then copies row `Text` | Used as displayed/default prompt value | No fallback; producer requires one matching row | Resolved text | MTS-06B | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations/DefaultAdditionalIndemnity`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails` | `CLR-001` |
| `OPT-MT-70` | `youngDriverConfiguration[].defaultCc` | Initializer + CC rows | `OPT-MT-22` trail | `Single` by enum ID then copies row `Text` | Used as displayed/default prompt value | No fallback; producer requires one matching row | Resolved text | MTS-06B | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:CreateYoungDriverConfigurations/DefaultCc`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails` | `CLR-001` |
| `OPT-MT-71` | `numericValue` on indemnity/experience rows | Respective DS entity | `OPT-MT-09/10/23/38` trails | Copies `OGIValue` or `NumericValue` as documented per collection | Exact truthy, `<=`, `<`, `===0`, and selected-limit comparisons; Manager Step 9 condition is `coverLevelID === 1 && numericValue truthy && numericValue <= 15000` | Zero is preserved and only admitted where branch explicitly tests it | Row numeric values | MTS-05-Q02/Q03/R02/R07; MTS-06; MTS-07–09 and omissions | Unresolved — `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous/next`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:MotorTradeStep5`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles` | `CLR-001` |
| `OPT-MT-72` | `driverGVWLimits[].gvwLimitDecimal` | Driver GVW DS | `OPT-MT-27` trail | Non-null source multiplied by `1000`; null retained | Selected value becomes driver GVW figure | Optional lookup may be undefined | Source values | MTS-06B/MTS-08A validators | Unresolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:GVWLimitDecimal`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverGVW` | `CLR-001` |

## Shared Value Lifecycle, Copy, Layout, and Accessibility Contracts

### SHR-MT-R01 — Motor Trade option fetch, raw cache, hydration, and loading

- Trigger: `DataContainer` pathname contains `motortrade-roadrisks` and its local `optionsFetched` is false.
- Cache path: if raw `sessionStorage.getItem('motorTradeOptions')` is truthy, source parses it with `JSON.parse`, shallow-merges it into the non-persisted in-memory `motorTradeOptionsFormStore`, and marks fetched. It performs no age, version, user, schema, or freshness check.
- Fetch path: without the raw cache entry, source sets local fetching and shared `optionsloaderStore.loading`, waits exactly **300 ms**, calls `getMotorTradeOptions`, consumes `response.data`, shallow-merges the result into the option store, writes the same data to raw session key `motorTradeOptions` with `JSON.stringify`, and marks fetched. `finally` clears both loading flags; no local catch/error message is mounted.
- Visible result: while shared loading is true, children remain in the container under an absolute full-area translucent overlay with the mounted looping/autoplay Lottie animation; no text is mounted.
- Boundary: the specification does not inspect or reproduce a live cache/response. Exact current database rows remain `CLR-001`.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/containers/dataContainer.tsx:DataContainer`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeOptionsFormStore`; `CleggGifford.CoverX.UI/src/api/motorTrade.ts:getMotorTradeOptions`.
- Clarification: —.

### SHR-MT-R02 — Option producer stop boundary

- Every `OPT-MT-*` claim starts at a mounted consumer or SHR-MT-R01, retains the exact frontend collection/property, follows `getMotorTradeOptions` and `Options`, and admits only front-end-visible DTO construction.
- A `ListAll()` data-service method establishes the database-backed class and active/sort query code when present, but does not establish the current returned rows. Code-resident multipliers, filters, `Single`/`Where` projections, nested-excess construction, ` (Default)` suffix and explicit sorting remain confirmed; only absent row facts are Unresolved.
- Evidence: Dependency-resolved — `CleggGifford.CoverX/CgLloyds20.WebApi/ApiControllers/FunnelMotortradeRoadRisksController.cs:Options`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/Api/MotortradeRoadRisks/MotortradeRoadRisksOptionsResult.cs:MotortradeRoadRisksOptionsResult`; the option catalog identifies each applicable data-service class by its exact repository class name.
- Clarification: — for the traversal rule; individual row leaves link `CLR-001`.

### SHR-MT-R03 — Mandatory value-lifecycle vocabulary

Each detailed question/rule must state these stages separately and in this order: **repository/store default** → form `defaultValues` → displayed value → shared-control normalization/emission → callback/effect derivation → active schema behavior → submit or Back reset/write → **raw persisted** Motor Trade store value → sorted/sanitized **projection** → summary condition/lookup/format. An unchanged stage says `no write` or `retained`; it is never inferred from a later stage. Hidden, disabled, optional, absent from schema, cleared, retained raw and omitted from projection remain distinct.

- Evidence: Direct React — `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:useMotorTradeManager`; mounted `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1` through `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: —.

### SHR-MT-R04 — Primitive and empty-value fidelity

`false`, `0`, `''`, `null`, `undefined`, `[]`, an unmatched option, and an absent property are separate observable/store contracts. Equality remains as written (`==`, `===`, `includes`, truthiness); no documentation consumer may coerce a numeric-looking string, replace `undefined` with `null`, treat zero as empty, or treat a hidden retained raw value as cleared. Question records cite their `CTL-MT-*` emission contract and then the exact field-specific props.

- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/AutoComplete.tsx:AutoComplete`; `CleggGifford.CoverX.UI/src/components/fields/LogicMultiSelect.tsx:LogicMultiSelect`; `CleggGifford.CoverX.UI/src/components/fields/FormTextBoxNumber.tsx:FormTextBoxNumber`; `CleggGifford.CoverX.UI/src/components/fields/FormSelect.tsx:FormSelect`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore`.
- Clarification: —.

### SHR-MT-R05 — Exact mounted-copy authority

Only copy actually mounted by the active Motor Trade consumer is contractual. Translation-backed copy uses the exact English key value from `CleggGifford.CoverX.UI/src/i18n/en/common.json:select`, `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:summary`, `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:full_quote_label`, `CleggGifford.CoverX.UI/src/i18n/en/mtSummary.json:proposerPolicyStartDate`, or `CleggGifford.CoverX.UI/src/i18n/en/validation.json:your_activity` only when mounted; these are literal representative keys that make each file citation resolvable, not a claim that only those keys are consumed. Locale-file order and unused keys create no UI. Inline strings remain inline and retain spelling/punctuation. Runtime/input-dependent address, vehicle, and returned validation content is documented as a dynamic channel rather than invented. Placeholders, labels, headings, instructions, hints, disclaimers, dialog text, button text, errors and summary labels remain separately sourced.

- Evidence: Direct React — mounted components cited by each per-surface Evidence record; representative literal keys `CleggGifford.CoverX.UI/src/i18n/en/common.json:select`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:summary`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:full_quote_label`; `CleggGifford.CoverX.UI/src/i18n/en/mtSummary.json:proposerPolicyStartDate`; `CleggGifford.CoverX.UI/src/i18n/en/validation.json:your_activity`.
- Clarification: —.

### SHR-MT-R06 — Responsive grid and breakpoints

The source breakpoint map is exactly `xs: 0`, `sm: 440px`, `md: 568px`, `lg: 992px`, `xl: 1200px`, `xxl: 1400px`. Preserve the mounted Bootstrap 12-column `Row`/`Col` props, 1.25rem grid gutter, margins and classes per surface. Render order changes only where source responsive classes do so.

- Evidence: Direct React — `CleggGifford.CoverX.UI/src/assets/style/_variables.scss:$grid-breakpoints/$grid-gutter-width`; mounted Motor Trade step JSX.
- Clarification: —.

### SHR-MT-R07 — Source-specific layout exceptions

Do not standardize step bodies: retain each actual `container`/`container-body-*` class; `container-body-md` caps driver, vehicle and summary bodies at 568px. Preserve smallest-view progress `mx-n3` and `sm` reset `mx-sm-0`; centered column-oriented shared navigation with Back below forward submit; custom subflow controls in their own layout; the Step 3 dialog's 628px paper width, 32px padding and 10px radius with no repository-specific narrow-screen alternative; summary headers' flex/end controls, 44px control height and inline padding. No sticky controls, mobile question reorder, new collision behavior, or breakpoint-specific copy is evidenced.

- Evidence: Direct React — `CleggGifford.CoverX.UI/src/assets/style/_containers.scss:container-body-md`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/Header.tsx:Header`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Dialog.scss:MuiDialog-paper`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/SummaryCards/SummaryCollapser.tsx:SummaryCollapser`; mounted step JSX.
- Clarification: —.

### SHR-MT-R08 — Accessibility evidence, without invention

Preserve only mounted native semantics and attributes. Header logo alt is exactly `CG logo`; forward navigation is native submit, Back is native button, dashboard exit is an anchor. Retain each control's actual IDs/`htmlFor`, including empty or missing associations. Step 3 retains `aria-labelledby="alert-dialog-title"` and `aria-describedby="alert-dialog-description"` exactly as mounted. Detail/summary collapsers retain `aria-expanded` and repeated `aria-controls="example-collapse-text"`/content ID. Do not assert an accessible name, live-region error announcement, keyboard behavior, focus sequence, progress label, or lookup-result semantics unless a source attribute or native element establishes it.

- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/Header.tsx:Header`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:Dialog`; `CleggGifford.CoverX.UI/src/components/fields/DetailCollapser.tsx:DetailCollapser`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/SummaryCards/SummaryCollapser.tsx:SummaryCollapser`; CTL-MT-01–21 sources.
- Clarification: —.

### SHR-MT-R09 — Environment-controlled driver and pagination limits

Driver List reads `VITE_COVERX_PAGE_SIZE` for the displayed slice and pagination condition, and `VITE_COVERX_DRIVER_LIMIT` for the Add Driver disabled guard `!(existingDrivers.length < driverLimit)`. Vehicle List reads the same `VITE_COVERX_PAGE_SIZE` for its slice and mounts pagination only when list length is greater than that value. The driver source contains an unfinished comment claiming an actual limit of 125; that comment is non-controlling and does not establish the effective runtime variable. Literal assignments are restricted environment data and were not read or copied.

- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:pageSize/driverLimit`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:pageSize`.
- Clarification: `CLR-007`.

## Numbered Surface Coverage Spine

This spine is an ownership/index contract, not an empty detail-section substitute. Detailed `Q`, `R`, and `U` records are appended by the owning plan.

| Surface | Exact Phase 2 title | Mounted component/subview IDs | Detailed extraction owner | Evidence |
|---|---|---|---|---|
| `MTS-01` | Motor Trade Full Quote | `MotorTradeStep1` | Plan 03-02 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1` |
| `MTS-02` | Premises Details | `MotorTradeStep2` | Plan 03-02 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:MotorTradeStep2` |
| `MTS-03` | Business Details | `MotorTradeStep3`; turnover/VAT dialog | Plan 03-02 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:MotorTradeStep3/Dialog` |
| `MTS-04` | Occupation | `MotorTradeStep4` | Plan 03-02 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:MotorTradeStep4` |
| `MTS-05` | Cover Required | `MotorTradeStep5` | Plan 03-02 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:MotorTradeStep5` |
| `MTS-06` | Drivers | `MotorTradeStep6`; `MTS-06A` Driver Plan; `MTS-06B` Driver Details; `MTS-06C` Driver List/Cards; `MTS-06L` empty loading container | Plan 03-03 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:DriverPlan`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:DriverList` |
| `MTS-07` | Trade Plates | `MotorTradeStep7` | Plan 03-04 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7` |
| `MTS-08` | Vehicles | `MotorTradeStep8`; `MTS-08A` Vehicle Details; `MTS-08B` Vehicle List/Cards; `MTS-08L` empty loading container; `MTS-08Ø` blank fallback | Plan 03-04 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList` |
| `MTS-09` | Specified Vehicle | `MotorTradeStep9`; lean/full form modes | Plan 03-04 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9` |
| `MTS-10` | Vehicles to be Driven | `MotorTradeStep10`; 17 ordered `DetailCollapser` categories | Plan 03-05 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles` |
| `MTS-11` | Extras | `MotorTradeStep11`; demonstration, windscreen, loss-of-use, subcontractor, damage and European-cover groups | Plan 03-05 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11` |
| `MTS-12` | Declaration | `MotorTradeStep12`; ten ordered declaration/detail groups | Plan 03-06 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12` |
| `MTS-13` | Additional Information | `MotorTradeStep13`; essential-risk, shunter and car-jockey groups | Plan 03-06 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13` |
| `MTS-14` | Summary | `StepSummary`; conditional thirteen-section projection, policy start time, terminal errors, Back and validated Submit boundary | Plan 03-07 | `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary/onSubmit` |

## MTS-01 — Motor Trade Full Quote

### Context and mounted-order contract

The source uses one `MotorTradeStep1` component for every route family. The mounted order is: page heading; consent explanation; the three RTL-only consent/marketing values; full-quote instruction; policy start date; policy term; company type; conditional proposer heading and company-type layout; email; telephone; mobile; postcode lookup/manual address; shared navigation. S2 changes the URL family only and supplies no distinct mounted question or validation.

| Context | Exact Step 1 difference | Evidence status | Evidence |
|---|---|---|---|
| Standard | `isRTL` is false; the consent explanation still mounts, but `consentTo`, `marketingConsent`, and `marketingMethod` do not mount and are omitted from the successful Step 1 write. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isRTL/onSubmit` |
| S2 | Same fields/copy/schema branch as Standard; no S2-specific conditional exists in this component. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`; `CleggGifford.CoverX.UI/src/router/motorTradeBuyRouter.tsx:MotorTradeBuyRouter` |
| RTL | `isRTL` is true because the URL contains `motortrade-roadrisks-rtl`; the three consent/marketing values mount and remain in successful submitted step data subject to their rules below. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isRTL` |
| S2+RTL | `isRTL` is true because the URL contains `motortrade-roadrisks-s2-rtl`; behavior is otherwise the same as RTL. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isRTL` |
| MTA | `isMTA = formData?.isMta`; policy-term input is disabled, policy-start label changes to `When do you want the adjustment to start?`, and a truthy stored `minPolicyStartDate` becomes the date minimum/schema parameter. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isMTA/minPolicyDateSet` |
| Back office | Persisted `backoffice` is coerced with `!!backoffice` into `MTStep1Schema`; without an MTA minimum, the control and schema use the fixed `2025-03-01` lower boundary described in MTS-01-R05. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:backoffice/useForm/proposerPolicyStartDate` |
| Ordinary sales | Without an MTA minimum and with falsey `backoffice`, the control minimum is `dayjs()` and the schema lower comparison is `dayjs().subtract(1,'day')`; upper bounds use the current date plus 30 days. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerPolicyStartDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema` |
| Proposer lock | Truthy `formData?.isProposerDetailsDisabled` disables title, first name, surname, company/partnership name, phone, mobile, and the postcode/manual address control; it does not disable company type, trading name, email, policy date, consent, or marketing controls. | Direct React | `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:disableFields` |

#### MTS-01-U01 — Page heading

- Position and mount condition: first item inside the form; always mounted.
- Kind: heading.
- Exact observable contract: `Heading` resolves `mtheading.full_quote` to `Motor Trade Full Quote`.
- Related questions/rules: MTS-01-Q01–MTS-01-Q20.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:full_quote`.
- Clarification: —.

#### MTS-01-U02 — Consent explanation

- Position and mount condition: immediately after the page heading and before the RTL-only fields; always mounted, including Standard and S2.
- Kind: instruction/disclaimer.
- Exact observable contract: bold `FormLabel`: `In order to provide you with a quotation I require your consent to collect relevant personal data from you and any other person named on the policy. This will allow Clegg Gifford to arrange and administer the insurance policy on your behalf should you choose to proceed with the quotation given, is this ok?`
- Related questions/rules: MTS-01-Q01–MTS-01-Q03; MTS-01-R01.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:consentHeader`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:consentHeader`.
- Clarification: —.

#### MTS-01-Q01 — `consentTo`

| Property | Exact contract |
|---|---|
| Position | First RTL-only value, after MTS-01-U02 and before `marketingConsent`. |
| Visible copy | `Yes (A clear YES or NO answer to be given)`. |
| Control | CTL-MT-06 `CheckboxLine`, native checkbox, with `id="consentTo"`; no mounted negative checkbox. |
| Stored/emitted value | Boolean checked value; display falls back to `false`; form default is `formData?.consentTo || false`. |
| Options | One fixed checkbox proposition represented by checked `true`/unchecked `false`; no option collection. |
| Visible when | `isRTL` is true: URL contains `motortrade-roadrisks-s2-rtl` or `motortrade-roadrisks-rtl`. |
| Enabled when | Always enabled when mounted. |
| Required when | `isRTL`: `yup.boolean().oneOf([true], 'This is a required field')`; otherwise `.notRequired()` and not mounted. |
| Constraints | Only `true` is schema-accepted in RTL mode. |
| Errors | Exact literal `This is a required field`; Step 1 separately mounts `FormError` in an `mb-4` wrapper when `formState.errors.consentTo` exists. |
| Lifecycle | Store absent/retained value → default false when falsey → checkbox emits boolean → successful RTL submit persists it; successful non-RTL submit omits this top-level key from the write, leaving any prior raw store key retained by shallow merge. |
| Summary | Not mounted in `StepSummary`; no summary row or sanitizer clearing is evidenced. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:defaultObject/consentTo/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/CheckboxLine.tsx:CheckboxLine`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q02 — `marketingConsent`

| Property | Exact contract |
|---|---|
| Position | Second RTL-only value, after the separate `consentTo` error channel and before conditional `marketingMethod`. |
| Visible copy | Component label prop is `Marketing Consent`; fixed rows appear in order `Direct Marketing`, then `Third Party Marketing`, each followed by `Yes (A clear YES or NO answer to be given)`. |
| Control | CTL-MT-07 `CheckboxLineArray`; two native checkboxes with source IDs derived from the field name and values. |
| Stored/emitted value | Primitive numeric array; values are `1` and `2`; unchecked empty representation is `[]`; default is stored `marketingConsent` when non-null/defined. |
| Options | Inline fixed order: Direct Marketing=`1`, Third Party Marketing=`2`. |
| Visible when | `isRTL` is true. |
| Enabled when | Always enabled when mounted. |
| Required when | Array is `.notRequired()`, but its custom test runs in RTL mode. |
| Constraints | When value includes `2` but not `1`, custom test rejects; outside RTL the test returns true. |
| Errors | Exact custom-test error is `Clegg Gifford Direct Marketing is required when Third Party Marketing is selected`; CTL-MT-07 mounts `FormError`. The test declaration's unused second argument is `Direct Marketing is required when Third Party Marketing is selected`. |
| Lifecycle | Store/default array → component-local `field.value || []` → checking appends `1`/`2`, unchecking strictly filters → RTL submit persists array; non-RTL submit omits the key from its shallow write, so an earlier raw key is not cleared. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:marketingConsent`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/ChecBoxLineArray.tsx:CheckboxLineArray`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q03 — `marketingMethod`

| Property | Exact contract |
|---|---|
| Position | Third RTL-only value, directly after `marketingConsent`; absent when its condition is false. |
| Visible copy | `If so, how would you like to be contacted...`. Dynamic checkbox labels come from the option rows. |
| Control | CTL-MT-05 `CheckboxArray`; field-specific options are `options?.marketingMethods || []`. |
| Stored/emitted value | Array of selected option primitive values; empty is `[]`; default is stored `marketingMethod` when non-null/defined. |
| Options | OPT-MT-02; source-order database-backed rows, with exact current values/text/order unresolved under CLR-001. |
| Visible when | `isRTL && watch('marketingConsent') && watch('marketingConsent')?.length > 0`. |
| Enabled when | Always enabled when visible. |
| Required when | Schema array is `.notRequired()`, but custom `oneSelected` test requires a nonempty value whenever parent `marketingConsent` exists and has length greater than zero. |
| Constraints | At least one dynamic option under that condition; otherwise no schema constraint. |
| Errors | Exact literal `One must be selected`, mounted through CTL-MT-05 `FormError`; test name/second argument is `oneSelected`. |
| Lifecycle | Stored/default array → CTL-MT-05 appends/filters primitives → if `marketingConsent` is truthy and its length is exactly zero at successful submit, handler writes `marketingMethod: []`; non-RTL successful submit omits it from that shallow write. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Unresolved — Unresolved scope (database rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:marketingConsented/marketingMethod/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/CheckboxArray.tsx:CheckboxArray`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | CLR-001 |

#### MTS-01-U03 — Full-quote instruction

- Position and mount condition: after the optional RTL group and before the policy date; always mounted.
- Kind: instruction.
- Exact observable contract: bold `FormLabel`: `Please fill out the following details to get a full quote.`
- Related questions/rules: MTS-01-Q04–MTS-01-Q20.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:full_quote_label`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:full_quote_label`.
- Clarification: —.

#### MTS-01-Q04 — `proposerPolicyStartDate`

| Property | Exact contract |
|---|---|
| Position | First common full-quote question, after MTS-01-U03 and before policy term. |
| Visible copy | Ordinary/back-office label `When do you want the policy to start?`; MTA label `When do you want the adjustment to start?`; default placeholder `dd/mm/yyyy`. |
| Control | CTL-MT-13 `Datepicker`; field-specific `minDate`/`maxDate` and `setValue` supplied. |
| Stored/emitted value | Valid picker/manual value becomes a `Date` normalized with `utc(true)`; picker also applies `startOf('day')`; incomplete manual input writes `undefined`; picker display is `field.value || null`. |
| Options | Calendar/manual date input; no list. |
| Visible when | Always. |
| Enabled when | Always; no disabled prop is supplied. |
| Required when | Always `yup.date().required().label('This')`. |
| Constraints | MTA with truthy `minPolicyStartDate`: control min is that value and schema min is one day earlier; otherwise back office uses `2025-03-01` for both control/schema; otherwise control min is `dayjs()` and schema min is current time minus one day. Control max is current day start plus 30 days; schema max is current time plus 30 days. |
| Errors | MTA minimum: `Date cannot be earlier than {DD/MM/YYYY}`; back office: `Date cannot be earlier than 01/03/2025.`; ordinary: `Policy start date must not be in the past.`; maximum: `Policy start date must be in the range of 30 days.`; required uses the repository's Yup `.required().label('This')` channel. CTL-MT-13 mounts `FormError`. |
| Lifecycle | Stored value is included unless null → Datepicker formats/normalizes → validation uses `MTStep1Schema(t, !!backoffice, minPolicyDateSet)` → successful submit shallow-persists the Date; Back is not mounted at Step 1. |
| Summary | Before all collapsers, label `When do you want the policy to start?`; `dayjs(value).format('DD/MM/YYYY')`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:minPolicyDateSet/proposerPolicyStartDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/Datepicker.tsx:DatePicker`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerPolicyStartDate`. |
| Clarification | — |

#### MTS-01-Q05 — `isShortTerm`

| Property | Exact contract |
|---|---|
| Position | After policy start date and before company type. |
| Visible copy | `The standard policy term is 12 months. Do you wish to change this to 6 months?` |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean; unmatched/undefined leaves both unchecked. |
| Options | Inline in order: `Yes`=`true`, `No`=`false`. |
| Visible when | Always. |
| Enabled when | Disabled exactly when `isMTA` is truthy. |
| Required when | Always `yup.boolean().required().label('This')`. |
| Constraints | Boolean required; no additional test. |
| Errors | Repository Yup required channel mounted by CTL-MT-04 `FormError`. |
| Lifecycle | Stored value is default when non-null → strict option equality/click emits boolean → successful submit persists; disabled MTA behavior does not itself rewrite the raw value. |
| Summary | First `Proposer Details` row, same question text; renders `t('common.' + !!value)`, therefore `Yes` for truthy and `No` for falsey. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isShortTerm`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/RadioList.tsx:RadioList`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:isShortTerm`. |
| Clarification | — |

#### MTS-01-Q06 — `proposerCompanyTypeId`

| Property | Exact contract |
|---|---|
| Position | After policy term; controls the remaining proposer-detail layout. |
| Visible copy | `What type of company/legal entity is used?` (`StepSummary` inserts spaces around `/`: `What type of company / legal entity is used?`). |
| Control | CTL-MT-02 `LogicMultiSelect`, `id="Company"`. |
| Stored/emitted value | One option primitive or `null`; strict selected-option equality. |
| Options | OPT-MT-03; current dynamic rows and relationship metadata unresolved under CLR-001. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | Numeric required; company-layout comparisons are exact numeric IDs 1, 2, 3, and 4. |
| Errors | Repository Yup number/required channel via CTL-MT-02 `FormError`. |
| Lifecycle | Stored/default primitive → option selection emits primitive or `null` → watched synchronously to choose one Collapse → successful submit persists; when value is exactly `1`, submit additionally writes `proposerCompanyPartnershipName: null`. |
| Summary | Second `Proposer Details` row; loose `rel.value == formData?.proposerCompanyTypeId` lookup in OPT-MT-03; absent match renders no text. |
| Evidence | Unresolved — Unresolved scope (database rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerCompanyTypeId/soleTraderChosen/companyChosen/partnershipChosen/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerCompanyTypeId`. |
| Clarification | CLR-001 |

#### MTS-01-U04 — Conditional proposer heading and three layouts

- Position and mount condition: after company type; mounts only when `!!watch('proposerCompanyTypeId')`.
- Kind: heading/layout.
- Exact observable contract: level-4 heading `Proposer Details`. ID `1` opens the Sole Trader Collapse: Title, First Name, Surname, Trading Name. IDs `2` or `3` open the Limited Company Collapse: Company Name, Trading Name, Title (Primary Contact), First Name (Primary Contact), Surname (Primary Contact). ID `4` opens the Partnership Collapse: Partnership Name, Trading Name, then the same three Primary Contact questions. No other truthy ID opens one of those three bodies.
- Related questions/rules: MTS-01-Q07–MTS-01-Q11; MTS-01-R02.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:soleTraderChosen/companyChosen/partnershipChosen`.
- Clarification: —.

#### MTS-01-Q07 — `proposerTitleId`

| Property | Exact contract |
|---|---|
| Position | Sole trader: first field. Company/partnership: after Trading Name and before primary-contact First Name. |
| Visible copy | Sole trader `Title:`; company/partnership `Title (Primary Contact):`. |
| Control | CTL-MT-02 `LogicMultiSelect`, `id="Title"`, disabled by `disableFields`; callback redundantly calls `field.onChange(selectedTitle?.value)` after CTL-MT-02 has already emitted its primitive. |
| Stored/emitted value | Selected primitive value; clear path can emit `null` and callback then emits `undefined`. |
| Options | OPT-MT-01; current database rows/order unresolved under CLR-001. |
| Visible when | Company type is exactly 1, 2, 3, or 4 in its corresponding Collapse. |
| Enabled when | Enabled when `!formData?.isProposerDetailsDisabled`. |
| Required when | Always `yup.number().required().label('This')`, even while no supported company-layout Collapse is open. |
| Constraints | Numeric required. |
| Errors | Repository Yup number/required channel via CTL-MT-02 `FormError`. |
| Lifecycle | Stored/default primitive → CTL-MT-02 emission then callback emission → successful submit persists; proposer lock only disables, not clears. |
| Summary | Not mounted in `StepSummary` despite `mtSummary.proposerTitleId` existing; translation-catalog presence is not a mounted row. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerTitleId`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | CLR-001 |

#### MTS-01-Q08 — `proposerName`

| Property | Exact contract |
|---|---|
| Position | Sole trader: after Title. Company/partnership: after primary-contact Title. |
| Visible copy | Sole trader `First Name:`; company/partnership `First Name (Primary Contact):`. |
| Control | CTL-MT-08 `FormTextBox`; disabled by `disableFields`. |
| Stored/emitted value | String; empty display/emission `''`. |
| Options | None. |
| Visible when | Company type exactly 1, 2, 3, or 4. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Always `yup.string().required().label('This')`. |
| Constraints | Required string; no explicit maximum in the schema or control. |
| Errors | Repository Yup required channel via CTL-MT-08 `FormError`. |
| Lifecycle | Stored/default string → native text string → successful submit persists; disabled does not rewrite. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerName`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q09 — `proposerSurname`

| Property | Exact contract |
|---|---|
| Position | Sole trader: after First Name. Company/partnership: after primary-contact First Name. |
| Visible copy | Sole trader `Surname:`; company/partnership `Surname (Primary Contact):`. |
| Control | CTL-MT-08 `FormTextBox`; disabled by `disableFields`. |
| Stored/emitted value | String; empty `''`. |
| Options | None. |
| Visible when | Company type exactly 1, 2, 3, or 4. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Always `yup.string().required().label('This')`. |
| Constraints | Required string; no explicit maximum. |
| Errors | Repository Yup required channel through CTL-MT-08. |
| Lifecycle | Stored/default string → native text emission → successful submit persists; no branch-specific clear. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerSurname`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q10 — `proposerTradingName`

| Property | Exact contract |
|---|---|
| Position | Sole trader: fourth field; company/partnership: second field after company/partnership name. |
| Visible copy | Exact inline `Trading Name (if applicable):`. |
| Control | CTL-MT-08 `FormTextBox`; notably no `disabled={disableFields}` in any branch. |
| Stored/emitted value | String; empty `''`. |
| Options | None. |
| Visible when | Company type exactly 1, 2, 3, or 4. |
| Enabled when | Always enabled when visible, including proposer-lock context. |
| Required when | `.notRequired().label('This')`. |
| Constraints | None beyond string type. |
| Errors | No required error; any Yup type error uses the library channel and CTL-MT-08. |
| Lifecycle | Stored/default string → text emission → successful submit persists; switching layouts does not clear it. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerTradingName`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q11 — `proposerCompanyPartnershipName`

| Property | Exact contract |
|---|---|
| Position | First field of company IDs 2/3 or partnership ID 4; absent from sole-trader layout. |
| Visible copy | IDs 2/3: `Company Name:`; ID 4: `Partnership Name:`. |
| Control | CTL-MT-08 `FormTextBox`, disabled by `disableFields`; company branch supplies `maxLength={50}`, partnership branch supplies no control maximum. |
| Stored/emitted value | String; empty `''`; successful sole-trader submit forces `null`. |
| Options | None. |
| Visible when | `proposerCompanyTypeId === 2 || === 3 || === 4`. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Yup `.when('proposerCompanyTypeId')`: required and maximum 50 for exact IDs 2/3/4; otherwise not required. |
| Constraints | Schema maximum 50 for IDs 2/3/4; company control also caps 50, partnership control does not. |
| Errors | Required/max errors use repository Yup `.required().max(50).label('This')` channel through CTL-MT-08. |
| Lifecycle | Stored/default string → branch text input → switching to sole trader does not immediately clear; successful submit with company type 1 writes `null`; other successful submits persist current value. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerCompanyPartnershipName/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q12 — `proposerEmail`

| Property | Exact contract |
|---|---|
| Position | After all conditional company-layout fields and before telephone. |
| Visible copy | `Email Address: ` (translation retains a trailing space). |
| Control | CTL-MT-08 `FormTextBox`; not disabled by proposer lock. |
| Stored/emitted value | String; empty `''`. |
| Options | None. |
| Visible when | Any truthy company type, because it is inside the outer proposer-details fragment. |
| Enabled when | Always enabled when visible. |
| Required when | `yup.string().email().required().label('This')`. |
| Constraints | Required and Yup email format. |
| Errors | Repository Yup email/required messages via CTL-MT-08 `FormError`; source supplies no custom literal. |
| Lifecycle | Stored/default string → text emission → successful submit persists. |
| Summary | `Proposer Details`, row after company type, label `Email Address`; raw value rendered with a 45%-width wrapping span. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerEmail`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerEmail`. |
| Clarification | — |

#### MTS-01-Q13 — `proposerTelephoneNumber`

| Property | Exact contract |
|---|---|
| Position | After email and before mobile. |
| Visible copy | `Telephone Number:` |
| Control | CTL-MT-08 `FormTextBox`, `numberFormat`, `maxLength={11}`, disabled by proposer lock; callback triggers mobile revalidation only when mobile currently has an error. |
| Stored/emitted value | String after CTL-MT-08 character stripping; empty `''`. |
| Options | None. |
| Visible when | Any truthy company type. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Custom test requires it only when both telephone value and sibling mobile are falsey. |
| Constraints | Maximum 11 characters. |
| Errors | Maximum literal `Telephone Number must be at most 11 characters`; cross-field literal `This is a required field.`; CTL-MT-08 mounts `FormError`. |
| Lifecycle | Stored/default string → `numberFormat` strips source-regex characters without numeric coercion → callback may trigger sibling → validation → successful submit persists. |
| Summary | `Proposer Details`, `Telephone Number`, raw stored string. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerTelephoneNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/components/fields/FormTextBox.tsx:FormTextBox`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerTelephoneNumber`. |
| Clarification | — |

#### MTS-01-Q14 — `proposerMobileNumber`

| Property | Exact contract |
|---|---|
| Position | After telephone and before postcode. |
| Visible copy | `Mobile Number:` |
| Control | CTL-MT-08 `FormTextBox`, `numberFormat`, `maxLength={11}`, disabled by proposer lock; callback triggers telephone revalidation only when telephone currently has an error. |
| Stored/emitted value | String after character stripping; empty `''`. |
| Options | None. |
| Visible when | Any truthy company type. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Custom test requires it only when both mobile value and sibling telephone are falsey. |
| Constraints | Maximum 11; any nonempty value must start with exact characters `07`. |
| Errors | Maximum source literal is also `Telephone Number must be at most 11 characters`; prefix `Telephone Number should start with 07.`; cross-field `This is a required field.`; CTL-MT-08 mounts `FormError`. |
| Lifecycle | Stored/default string → character stripping → callback may trigger sibling → prefix/cross-field validation → successful submit persists. |
| Summary | `Proposer Details`, `Mobile Number`, raw stored string. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerMobileNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerMobileNumber`. |
| Clarification | — |

#### MTS-01-Q15 — `proposerPostcode`

| Property | Exact contract |
|---|---|
| Position | After mobile; opens the final address group. |
| Visible copy | `Postcode:`; placeholder `eg. SL4 1PD`; actions `Lookup` and conditional `Enter Manually`; lookup-result text is runtime/input-dependent. |
| Control | CTL-MT-17 `CapitalPostCode`, `fieldName="proposer"`, disabled by proposer lock. Native postcode input, native button, anchor, clickable result rows. |
| Stored/emitted value | Uppercased, non-alphanumeric-stripped and `fixPostcodeValue`-formatted string; empty `''`; max input length 10. |
| Options | Runtime/input-dependent address result list; source consumes `{text,value}` and does not establish returned rows. |
| Visible when | Any truthy company type. Manual link appears only with zero results and local manual mode false; results appear when length > 0. |
| Enabled when | Postcode/manual inputs and Lookup are disabled exactly by proposer lock. |
| Required when | Required string, maximum 10, postcode regex; custom `postCode` test calls `createError` when value is truthy and `proposershowAddress` is falsey but does not explicitly return that result. |
| Constraints | Exact UK/GIR regex in `MTStep1Schema`; user must select/enter an address according to the source callback expression. |
| Errors | `Postcode is not valid.`; custom message resolves `validation.postcode_error_click` to `You must either lookup your address or click Enter manually`; lookup rejection sets `Address not found`; all use mounted `FormError`. |
| Lifecycle | Stored/default postcode opens manual mode when truthy → input normalizes and clears postcode errors → empty Lookup triggers validation; nonempty Lookup populates local results/hides manual fields; manual link writes `proposershowAddress=true`; result selection waits 10ms, writes five address fields and `proposershowAddress=true`, then triggers them → successful submit persists top-level fields. |
| Summary | `Proposer Details`, final row `Postcode`, raw stored postcode only; result/manual address fields are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerPostcode`; `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:CapitalPostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:proposerPostcode`. |
| Clarification | CLR-008 |

#### MTS-01-Q16 — `proposerHouseNumber`

| Property | Exact contract |
|---|---|
| Position | First manual address value under postcode. |
| Visible copy | `House Number` from `label.housenumber`. |
| Control | CTL-MT-17 manual native text input, maxLength 50. |
| Stored/emitted value | String; selection may write returned `address1` including `undefined`; manual empty is `''`. |
| Options | None; populated from selected runtime address when used. |
| Visible when | CapitalPostCode local manual mode is true. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Always schema-required. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via mounted `FormError`. |
| Lifecycle | Stored/default → manual display or lookup-result write → triggered after selection → submit persists. |
| Summary | Not mounted; only postcode is shown. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerHouseNumber`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q17 — `proposerStreet`

| Property | Exact contract |
|---|---|
| Position | Second manual address value. |
| Visible copy | `Street` from `label.street`. |
| Control | CTL-MT-17 manual native text input, maxLength 50. |
| Stored/emitted value | String; selected address may write `address2`/`undefined`. |
| Options | None. |
| Visible when | Manual mode true. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Always schema-required. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via `FormError`. |
| Lifecycle | Stored/default → manual/lookup write → validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerStreet`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q18 — `proposerTown`

| Property | Exact contract |
|---|---|
| Position | Third manual address value. |
| Visible copy | `Town` from `label.town`. |
| Control | CTL-MT-17 manual native text input, maxLength 50. |
| Stored/emitted value | String; lookup may write returned town/`undefined`. |
| Options | None. |
| Visible when | Manual mode true. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | `.notRequired()`. |
| Constraints | Maximum 50. |
| Errors | Yup maximum channel via `FormError`; no required error. |
| Lifecycle | Stored/default → manual/lookup write → optional validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerTown`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q19 — `proposerCity`

| Property | Exact contract |
|---|---|
| Position | Fourth manual address value. |
| Visible copy | `City` from `label.city`. |
| Control | CTL-MT-17 manual native text input, maxLength 50. |
| Stored/emitted value | String; lookup may write returned city/`undefined`. |
| Options | None. |
| Visible when | Manual mode true. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | `.notRequired()`. |
| Constraints | Maximum 50. |
| Errors | Yup maximum channel via `FormError`; no required error. |
| Lifecycle | Stored/default → manual/lookup write → optional validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerCity`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-Q20 — `proposerCounty`

| Property | Exact contract |
|---|---|
| Position | Fifth and final manual address value. |
| Visible copy | `County` from `label.county`. |
| Control | CTL-MT-17 manual native text input, maxLength 50. |
| Stored/emitted value | String; lookup may write returned county/`undefined`. |
| Options | None. |
| Visible when | Manual mode true. |
| Enabled when | Enabled when proposer details are not disabled. |
| Required when | Always schema-required. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via `FormError`. |
| Lifecycle | Stored/default → manual/lookup write → validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerCounty`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Proposer Details`. |
| Clarification | — |

#### MTS-01-R01 — RTL-only consent and non-RTL write projection

- Trigger: `isRTL = href.includes('motortrade-roadrisks-s2-rtl') || href.includes('motortrade-roadrisks-rtl')`; successful submit applies `if (!isRTL) omit(..., ['consentTo','marketingConsent','marketingMethod'])`.
- Evaluation point: module evaluation/render and successful submit.
- Affected fields: MTS-01-Q01–MTS-01-Q03; visibility and Step 1 write shape.
- Raw-state effect: RTL writes submitted values. Non-RTL omits those keys from `setData`; because the store shallow-merges, previously persisted keys are retained rather than explicitly deleted.
- Projection effect: these values have no mounted StepSummary projection.
- User-visible result/error: MTS-01-U02 remains visible in all families; only RTL families show the controls.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:isRTL/onSubmit`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`.
- Clarification: —.

#### MTS-01-R02 — Company-type layout, required fields, and sole-trader clear

- Trigger: strict watched ID tests: sole trader `=== 1`; company `=== 2 || === 3`; partnership `=== 4`; outer heading/body gate uses truthiness.
- Evaluation point: render and successful submit.
- Affected fields: MTS-01-Q06–MTS-01-Q12; branch labels/order and company/partnership name requirement.
- Raw-state effect: successful submit with ID 1 writes `proposerCompanyPartnershipName: null`; other branch switches do not automatically clear shared or hidden fields.
- Projection effect: summary shows only company type, email, phone, mobile and postcode from this group; name/title/trading/company-partnership fields are omitted.
- User-visible result/error: exact three layouts are stated in MTS-01-U04; unsupported truthy IDs show the heading/common contact/address fields without a branch body.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:soleTraderChosen/companyChosen/partnershipChosen/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerCompanyPartnershipName`.
- Clarification: —.

#### MTS-01-R03 — Marketing dependency and clear

- Trigger: `marketingConsented = watch('marketingConsent') && watch('marketingConsent')?.length > 0`; schema additionally tests Third Party value 2 requires Direct value 1; submit clear uses `data?.marketingConsent && data?.marketingConsent?.length === 0`.
- Evaluation point: render, validation and successful submit.
- Affected fields: MTS-01-Q02–MTS-01-Q03.
- Raw-state effect: an explicitly present empty consent array causes `marketingMethod: []`; a falsey/absent consent does not take that submit-clear branch.
- Projection effect: none; neither field is summarized.
- User-visible result/error: method checkboxes appear only for nonempty consent; exact errors are in Q02/Q03.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:marketingConsented/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:marketingConsent/marketingMethod`.
- Clarification: CLR-001 only for OPT-MT-02 rows.

#### MTS-01-R04 — Telephone-or-mobile validation and sibling revalidation

- Trigger: each custom test checks its sibling and current falsey value; mobile also checks `value && !value.startsWith('07')`; each input callback triggers the sibling only while that sibling has an error.
- Evaluation point: input change callback and schema validation.
- Affected fields: MTS-01-Q13–MTS-01-Q14.
- Raw-state effect: no cross-field clearing; successful values persist as strings.
- Projection effect: both raw strings are independently displayed in summary.
- User-visible result/error: at least one value must be truthy; maximum/prefix/error text is recorded on each question.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:proposerTelephoneNumber/proposerMobileNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerTelephoneNumber/proposerMobileNumber`.
- Clarification: —.

#### MTS-01-R05 — Policy-date context bounds

- Trigger: MTA and truthy stored minimum take priority; otherwise `backoffice`; otherwise ordinary sales. Upper date always derives from current day/time plus 30 days.
- Evaluation point: render and schema validation.
- Affected fields: MTS-01-Q04; label, selectable bounds and validation messages.
- Raw-state effect: no automatic write; selected/entered valid Date persists on submit.
- Projection effect: summary formats stored value `DD/MM/YYYY`.
- User-visible result/error: exact per-context labels/minimum/maximum messages are in MTS-01-Q04.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:minPolicyDateSet/proposerPolicyStartDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`.
- Clarification: —.

#### MTS-01-R06 — Capital postcode lookup and manual-address state

- Trigger: postcode change, Lookup with empty/nonempty value, manual-link activation, runtime result selection, or lookup rejection.
- Evaluation point: CTL-MT-17 input/click/promise callbacks and Step 1 validation.
- Affected fields: MTS-01-Q15–MTS-01-Q20 plus hidden `proposershowAddress`.
- Raw-state effect: input writes normalized postcode; manual link/result writes `proposershowAddress=true`; result writes returned five address values after 10ms. Lookup results/loading/manual visibility remain component-local until their explicit form writes.
- Projection effect: summary shows postcode only.
- User-visible result/error: `Lookup`, `Enter Manually`, runtime result texts, 150×150 translucent loading overlay, `Address not found`, schema regex/custom messages.
- Evidence: Direct React — Source qualifier (React with runtime-dependent results): `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:CapitalPostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:proposerPostcode`.
- Clarification: —.

#### MTS-01-R07 — Successful persistence, navigation, and Step 1 Back absence

- Trigger: form `handleSubmit(onSubmit)` accepts MTStep1Schema.
- Evaluation point: successful submit.
- Affected fields: all MTS-01 questions; MTS-01-U05.
- Raw-state effect: handler applies the branch projections above, calls shallow `setData`, then manager `next`; unrelated prior top-level keys remain.
- Projection effect: only the explicitly documented StepSummary rows render later.
- User-visible result/error: shared forward native submit says `Save and Continue`; at persisted step 1 shared `Go Back` is not rendered.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`.
- Clarification: —.

#### MTS-01-U05 — Navigation

- Position and mount condition: final form item; always mounted.
- Kind: button/layout.
- Exact observable contract: centered column-oriented shared navigation; native `type="submit"` `Save and Continue`; shared Back is suppressed because stored step is 1.
- Related questions/rules: MTS-01-R07.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

## MTS-02 — Premises Details

### Context and mounted-order contract

All route families use the same `MotorTradeStep2`. Mounted order is the page heading, `tradingFromId`, then—only for exact IDs `3` or `4`—zero or more indexed premises in array order, the conditional add control, and shared navigation. Each premise mounts postcode/address lifecycle first, then premises type, years trading, and shared-worksite choice. S2, RTL, S2+RTL, MTA, and back-office contexts add no Step 2 branch evidenced in this component.

#### MTS-02-U01 — Page heading

- Position and mount condition: first form item; always mounted.
- Kind: heading.
- Exact observable contract: `Premises Details`.
- Related questions/rules: MTS-02-Q01–MTS-02-Q10.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:MotorTradeStep2`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:premises_details`.
- Clarification: —.

#### MTS-02-Q01 — `tradingFromId`

| Property | Exact contract |
|---|---|
| Position | First question, after MTS-02-U01. |
| Visible copy | `Where are you trading from?` |
| Control | CTL-MT-02 `LogicMultiSelect`, `id="Company"`. |
| Stored/emitted value | One option primitive or `null`; strict selected-option equality. |
| Options | OPT-MT-04; current database-backed rows/order unresolved under CLR-001. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | Numeric required; downstream behavior compares exact IDs `1`, `2`, `3`, `4`. |
| Errors | Repository Yup number/required channel through CTL-MT-02 `FormError`. |
| Lifecycle | Stored default → option selection → callback may delete all rows or append one default row → successful submit shallow-persists value and current array. |
| Summary | First `Premises Details` row; loose `rel.value == formData?.tradingFromId` OPT-MT-04 lookup; no match renders no text. |
| Evidence | Unresolved — Unresolved scope (database rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingFromId/tradingFrom`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep2Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingFromId`. |
| Clarification | CLR-001 |

#### MTS-02-Q02 — `tradingPremises[].tradingPremisePostcode`

| Property | Exact contract |
|---|---|
| Position | First question in each indexed premise. |
| Visible copy | `Postcode:`; placeholder `eg. SL4 1PD`; actions `Lookup` and conditional `Enter Manually`; result text is runtime/input-dependent. |
| Control | CTL-MT-18 `PremisePostCode`, native postcode input/button/link/result rows. |
| Stored/emitted value | Uppercased, non-alphanumeric-stripped and `fixPostcodeValue`-formatted string; empty `''`; max input length 10. |
| Options | Runtime/input-dependent address results consumed as `{text,value}`. |
| Visible when | Its indexed row exists and `tradingFromId === 3 || tradingFromId === 4`. |
| Enabled when | Always enabled while mounted. |
| Required when | Each present array item: required string, maximum 10, postcode regex; custom `postCode` test calls `createError` when postcode is truthy and row `showAddress` is falsey but does not explicitly return it. |
| Constraints | Exact UK/GIR regex in `MTStep2Schema`. |
| Errors | `Postcode is not valid.`; `You must either lookup your address or click Enter manually`; lookup rejection `Address not found`; mounted `FormError`. |
| Lifecycle | Stored postcode makes local manual mode initially true → input normalizes/clears error → lookup populates local results or error → manual link/result writes row `showAddress=true`; result writes five row address values and triggers them. |
| Summary | For IDs 3/4 only, first row under `Premise {index+1}`; raw postcode. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingPremisePostcode`; `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:PremisePostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep2Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingPremisePostcode`. |
| Clarification | CLR-008 |

#### MTS-02-Q03 — `tradingPremises[].tradingPremiseTypeId`

| Property | Exact contract |
|---|---|
| Position | After the indexed postcode/address control. |
| Visible copy | `What type of premises are you trading from? ` (translation retains trailing space). |
| Control | CTL-MT-02 `LogicMultiSelect`, `id="Company"`. |
| Stored/emitted value | One option primitive or `null`. |
| Options | OPT-MT-05; database-backed rows/order unresolved under CLR-001. |
| Visible when | Indexed row exists under exact trading-from ID 3 or 4. |
| Enabled when | Always. |
| Required when | Every present row: `yup.number().required().label('This')`. |
| Constraints | Numeric required. |
| Errors | Repository Yup number/required channel via CTL-MT-02 `FormError`. |
| Lifecycle | Default row starts `undefined`; selection emits primitive; successful Step 2 submit persists array item. |
| Summary | `Premise {index+1}`, row after postcode; loose OPT-MT-05 lookup, no match renders no text. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingPremiseTypeId`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseTypeId`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingPremiseTypeId`. |
| Clarification | CLR-001 |

#### MTS-02-Q04 — `tradingPremises[].tradingPremiseYearsTrading`

| Property | Exact contract |
|---|---|
| Position | After premises type and before shared-worksite choice. |
| Visible copy | `How long have you been trading from these premises? (years) ` (trailing space retained). |
| Control | CTL-MT-09 `FormTextBoxNumber`, `maxLength={4}`. |
| Stored/emitted value | Numeric value or `undefined`; appended default is `''`. |
| Options | None. |
| Visible when | Indexed row exists under exact trading-from ID 3 or 4. |
| Enabled when | Always. |
| Required when | Every present row: number `.required().label('This')`. |
| Constraints | Control limits input to four characters; schema supplies no numeric minimum/maximum. |
| Errors | Type error exact `This field is required`; repository Yup required channel; CTL-MT-09 `FormError`. |
| Lifecycle | Appended `''` → CTL-MT-09 numeric/undefined emission → validation → submit persists current row. |
| Summary | `Premise {index+1}` raw value, label without the translation's trailing space. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingPremiseYearsTrading`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseYearsTrading`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingPremiseYearsTrading`. |
| Clarification | — |

#### MTS-02-Q05 — `tradingPremises[].tradingPremiseIsSharedWorksite`

| Property | Exact contract |
|---|---|
| Position | Final visible question in each indexed premise. |
| Visible copy | `Is this a shared worksite? ` (trailing space retained). |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean; appended default `undefined`. |
| Options | Inline fixed order: `Yes`=`true`, `No`=`false`. |
| Visible when | Indexed row exists under exact trading-from ID 3 or 4. |
| Enabled when | Always. |
| Required when | Every present row: boolean `.notRequired().required().label('This')`. |
| Constraints | Boolean required. |
| Errors | Repository Yup required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Undefined/stored default → strict radio emission → validation → submit persists. |
| Summary | `Premise {index+1}` renders `t('common.' + !!value)`, so truthy=`Yes`, falsey/undefined=`No`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:tradingPremiseIsSharedWorksite`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseIsSharedWorksite`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradingPremiseIsSharedWorksite`. |
| Clarification | — |

#### MTS-02-Q06 — `tradingPremises[].tradingPremiseHouseNo`

| Property | Exact contract |
|---|---|
| Position | First manual address field under the row postcode. |
| Visible copy | `House No` from `label.houseno`. |
| Control | CTL-MT-18 native text input, maxLength 50. |
| Stored/emitted value | String; lookup selection may write `address1`/`undefined`; appended default `''`. |
| Options | None. |
| Visible when | Row postcode control's local manual mode is true. |
| Enabled when | Always. |
| Required when | Every present row: required string. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via mounted `FormError`. |
| Lifecycle | Default/stored → manual or result write → triggered on result selection → submit persists. |
| Summary | Not mounted; premise summary shows postcode, type, years and shared status only. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseHouseNo`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premise`. |
| Clarification | — |

#### MTS-02-Q07 — `tradingPremises[].tradingPremiseStreet`

| Property | Exact contract |
|---|---|
| Position | Second manual address field. |
| Visible copy | `Street`. |
| Control | CTL-MT-18 native text input, maxLength 50. |
| Stored/emitted value | String; selection may write `address2`/`undefined`; appended default `''`. |
| Options | None. |
| Visible when | Row manual mode true. |
| Enabled when | Always. |
| Required when | Every present row: required string. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via `FormError`. |
| Lifecycle | Default/stored → manual/result write → validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseStreet`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premise`. |
| Clarification | — |

#### MTS-02-Q08 — `tradingPremises[].tradingPremiseTown`

| Property | Exact contract |
|---|---|
| Position | Third manual address field. |
| Visible copy | `Town`. |
| Control | CTL-MT-18 native text input, maxLength 50. |
| Stored/emitted value | String; selection may write returned town/`undefined`; appended default `''`. |
| Options | None. |
| Visible when | Row manual mode true. |
| Enabled when | Always. |
| Required when | `.notRequired()`. |
| Constraints | Maximum 50. |
| Errors | Yup maximum channel via `FormError`; no required error. |
| Lifecycle | Default/stored → manual/result write → optional validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseTown`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premise`. |
| Clarification | — |

#### MTS-02-Q09 — `tradingPremises[].tradingPremiseCity`

| Property | Exact contract |
|---|---|
| Position | Fourth manual address field. |
| Visible copy | `City`. |
| Control | CTL-MT-18 native text input, maxLength 50. |
| Stored/emitted value | String; selection may write returned city/`undefined`; appended default `''`. |
| Options | None. |
| Visible when | Row manual mode true. |
| Enabled when | Always. |
| Required when | `.notRequired()`. |
| Constraints | Maximum 50. |
| Errors | Yup maximum channel via `FormError`; no required error. |
| Lifecycle | Default/stored → manual/result write → optional validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseCity`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premise`. |
| Clarification | — |

#### MTS-02-Q10 — `tradingPremises[].tradingPremiseCounty`

| Property | Exact contract |
|---|---|
| Position | Fifth and final manual address field. |
| Visible copy | `County`. |
| Control | CTL-MT-18 native text input, maxLength 50. |
| Stored/emitted value | String; selection may write returned county/`undefined`; appended default `''`. |
| Options | None. |
| Visible when | Row manual mode true. |
| Enabled when | Always. |
| Required when | Every present row: required string. |
| Constraints | Maximum 50. |
| Errors | Repository Yup required/max channel via `FormError`. |
| Lifecycle | Default/stored → manual/result write → validation → submit persists. |
| Summary | Not mounted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremiseCounty`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premise`. |
| Clarification | — |

#### MTS-02-R01 — Trading-from branch and repeatable-row lifecycle

- Trigger: selecting ID 1/2 while `fields.length > 0`, or ID 3/4 while `fields.length === 0`; add/remove controls.
- Evaluation point: `LogicMultiSelect` callback and row-control clicks.
- Affected fields: MTS-02-Q01–MTS-02-Q10 and entire `tradingPremises` array.
- Raw-state effect: ID 1/2 calls parameterless `remove()` and deletes every array row; ID 3/4 appends exactly one default row only when none exists. Add appends another identical row; remove deletes only its index.
- Projection effect: summary premise rows render only when stored trading-from ID is 3/4; raw rows can otherwise exist only where a path bypasses the source callback.
- User-visible result/error: row headings `Trading Premise {index+1}`; first row has no X; subsequent rows have a red 46×46 `X`; dividers occur between rows; add control disappears at five rows.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:fields/addPremisesFields/tradingFromId/onRemovePremise`.
- Clarification: —.

#### MTS-02-R02 — Premise postcode lookup and manual address

- Trigger: input change, Lookup, manual-link activation, result selection, or lookup rejection for an indexed row.
- Evaluation point: CTL-MT-18 callbacks and schema validation.
- Affected fields: MTS-02-Q02 and MTS-02-Q06–MTS-02-Q10 plus row `showAddress`.
- Raw-state effect: writes only the indexed row; selected results populate five address values and `showAddress=true`; loading/results/manual visibility otherwise remain component-local.
- Projection effect: only the postcode from this group is summarized.
- User-visible result/error: runtime result list, 150×150 translucent loading overlay, `Address not found`, and the schema messages in Q02.
- Evidence: Direct React — Source qualifier (React with runtime-dependent results): `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:PremisePostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradingPremisePostcode`.
- Clarification: —.

#### MTS-02-R03 — Present-row validation without an array cardinality rule

- Trigger: Step 2 submit validation.
- Evaluation point: `MTStep2Schema`.
- Affected fields: all present `tradingPremises` items.
- Raw-state effect: present rows must satisfy their field schemas; the array itself has neither `.required()` nor `.min()`, so no schema rule independently requires a row for IDs 3/4.
- Projection effect: no change; summary maps stored rows only under IDs 3/4.
- User-visible result/error: field errors mount beside their respective row controls; there is no array-level message evidenced.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep2Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:handleSubmit`.
- Clarification: —.

#### MTS-02-R04 — Successful persistence, summary, and navigation

- Trigger: `handleSubmit(onSubmit)` accepts `MTStep2Schema`, or shared Back is clicked.
- Evaluation point: submit/Back click.
- Affected fields: all MTS-02 questions and MTS-02-U03.
- Raw-state effect: successful forward submit shallow-persists submitted Step 2 values then calls `next`; shared Back calls supplied `prev` without Step 2 persisting unsaved current values.
- Projection effect: summary shows trading-from and, only for ID 3/4, each stored premise's postcode, type, years and boolean shared status; manual address values are omitted.
- User-visible result/error: shared buttons are `Go Back` and native `type="submit"` `Save and Continue`.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:onSubmit/NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Premises Details`.
- Clarification: —.

#### MTS-02-U02 — Indexed row and add/remove controls

- Position and mount condition: after trading-from, only for exact ID 3/4.
- Kind: repeatable layout/buttons.
- Exact observable contract: rows preserve array order and are numbered from one; at most five can be added through this UI; first row is not removable; later rows have an `X`; `Add another trading premises` is native `type="button"`.
- Related questions/rules: MTS-02-Q02–MTS-02-Q10; MTS-02-R01.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:fields`.
- Clarification: —.

#### MTS-02-U03 — Navigation

- Position and mount condition: final form item; always mounted.
- Kind: buttons/layout.
- Exact observable contract: shared centered column navigation with `Go Back` followed by native `type="submit"` `Save and Continue`.
- Related questions/rules: MTS-02-R04.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

## MTS-03 — Business Details

### Context and mounted-order contract

All route families use the same `MotorTradeStep3`. Mounted order is heading, the normally closed VAT assurance dialog, business-start date, annual turnover, annual wage roll, trade-association choice and conditional name, VAT-registration choice and conditional VAT number, vehicles handled per year, MIPD vehicle limit, and shared navigation. S2, RTL, S2+RTL, MTA, and back-office contexts add no Step 3 branch evidenced here; the stored Step 1 policy-start date supplies the business-date maximum.

#### MTS-03-U01 — Page heading

- Position and mount condition: first visible form item while the dialog is closed; always mounted.
- Kind: heading.
- Exact observable contract: `Business Details`.
- Related questions/rules: MTS-03-Q01–MTS-03-Q09.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:MotorTradeStep3`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:business_details`.
- Clarification: —.

#### MTS-03-Q01 — `businessStartedDate`

| Property | Exact contract |
|---|---|
| Position | First data question, after the dialog mount and before annual turnover. |
| Visible copy | `Date Business Started Trading:`; default date placeholder `dd/mm/yyyy`. |
| Control | CTL-MT-13 `Datepicker`. |
| Stored/emitted value | Valid picker/manual value becomes a UTC-preserving normalized `Date`; incomplete manual input emits `undefined`. |
| Options | Calendar/manual date input. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.date().required().label('This')`. |
| Constraints | Minimum `1900-01-01`; maximum is stored `formData.proposerPolicyStartDate`, passed both to control and schema. |
| Errors | Minimum exact `Date cannot be earlier than 01/01/1900.`; maximum exact template `This field must be at earlier than {DD/MM/YYYY}.`; repository Yup required channel; CTL-MT-13 `FormError`. |
| Lifecycle | Non-null stored default → date normalization → validation against stored policy start → successful submit persists; Back also persists `getValues()`. |
| Summary | First `Business Details` row; formatted `DD/MM/YYYY`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessStartedDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep3Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessStartedDate`. |
| Clarification | — |

#### MTS-03-Q02 — `businessAnnualTurnover`

| Property | Exact contract |
|---|---|
| Position | After business-start date and before annual wage roll. |
| Visible copy | `Annual Turnover:` |
| Control | CTL-MT-10 `TextFieldCurrency`. |
| Stored/emitted value | Numeric value or `undefined`; display uses currency formatting supplied by CTL-MT-10. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | No schema minimum/maximum; value `>= 90000` participates in MTS-03-R03. |
| Errors | Repository Yup number/required channel via CTL-MT-10 `FormError`. |
| Lifecycle | Stored/default → currency control numeric emission → validation → successful submit may open assurance instead of persisting/navigating. |
| Summary | `Annual Turnover`, raw numeric stored value; no currency formatting is applied by `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessAnnualTurnover/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessAnnualTurnover`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessAnnualTurnover`. |
| Clarification | — |

#### MTS-03-Q03 — `businessAnnualWageRoll`

| Property | Exact contract |
|---|---|
| Position | After annual turnover and before trade-association choice. |
| Visible copy | `Annual Wage Roll:` |
| Control | CTL-MT-10 `TextFieldCurrency`. |
| Stored/emitted value | Numeric value or `undefined`. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | No schema minimum/maximum. |
| Errors | Repository Yup number/required channel via CTL-MT-10 `FormError`. |
| Lifecycle | Stored/default → numeric emission → validation → submit/Back persistence. |
| Summary | `Annual Wage Roll`, raw numeric stored value; no summary currency formatting. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessAnnualWageRoll`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessAnnualWageRoll`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessAnnualWageRoll`. |
| Clarification | — |

#### MTS-03-Q04 — `businessIsTradeAssociationMember`

| Property | Exact contract |
|---|---|
| Position | After wage roll and before conditional association name. |
| Visible copy | `Are you a member of any trade associations?` |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean. |
| Options | Inline order: `Yes`=`true`, `No`=`false`. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.boolean().required().label('This')`. |
| Constraints | Boolean required. |
| Errors | Repository Yup required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → radio emission; negative selection callback immediately writes association name `null`; submit/Back persists. |
| Summary | Boolean renders through `common.${!!value}`; label matches visible question. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessIsTradeAssociationMember`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessIsTradeAssociationMember`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessIsTradeAssociationMember`. |
| Clarification | — |

#### MTS-03-Q05 — `businessTradeAssociationName`

| Property | Exact contract |
|---|---|
| Position | Immediately after association membership when visible. |
| Visible copy | `Trade Association:` |
| Control | CTL-MT-08 `FormTextBox`. |
| Stored/emitted value | String; negative parent callback writes `null`. |
| Options | None. |
| Visible when | `watch('businessIsTradeAssociationMember')` is truthy. |
| Enabled when | Always when visible. |
| Required when | Required only when parent value is exactly `true`; otherwise `.notRequired()`. |
| Constraints | No explicit maximum or format. |
| Errors | Repository Yup conditional-required channel via CTL-MT-08 `FormError`. |
| Lifecycle | Stored/default → conditional text emission; selecting parent No synchronously clears to `null`; submit/Back persists. |
| Summary | Conditional row only when stored name is truthy, independent of the stored parent at projection time. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessTradeAssociationName`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessTradeAssociationName`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessTradeAssociationName`. |
| Clarification | — |

#### MTS-03-Q06 — `businessIsVATRegistered`

| Property | Exact contract |
|---|---|
| Position | After the trade-association group and before conditional VAT number. |
| Visible copy | `Is the company VAT registered?` |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean. |
| Options | Inline order: `Yes`=`true`, `No`=`false`. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.boolean().required().label('This')`. |
| Constraints | Boolean required; falsey value with turnover `>= 90000` triggers MTS-03-R03. |
| Errors | Repository Yup required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → radio emission; negative callback `resetField`s VAT number to default `''`; submit may open assurance. |
| Summary | Boolean renders through `common.${!!value}`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessIsVATRegistered`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessIsVATRegistered`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessIsVATRegistered`. |
| Clarification | — |

#### MTS-03-Q07 — `businessVATNumber`

| Property | Exact contract |
|---|---|
| Position | Immediately after VAT-registration choice when visible. |
| Visible copy | `VAT Number:` |
| Control | CTL-MT-08 `FormTextBox`, `maxLength={20}`. |
| Stored/emitted value | String; selecting parent No resets it to `''`. |
| Options | None. |
| Visible when | `watch('businessIsVATRegistered')` is truthy. |
| Enabled when | Always when visible. |
| Required when | Never; schema is `.string().notRequired()` even when visible. |
| Constraints | Control maximum 20 characters; no schema maximum. |
| Errors | No required/custom schema error; CTL-MT-08 retains its error channel. |
| Lifecycle | Stored/default → conditional text emission → negative parent reset to `''` → submit/Back persists. |
| Summary | Conditional row only when stored VAT number is truthy; summary label is `VAT Number ` with trailing space. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessVATNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessVATNumber`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessVATNumber`. |
| Clarification | — |

#### MTS-03-Q08 — `businessNumberOfVehiclesHandlePerYear`

| Property | Exact contract |
|---|---|
| Position | After VAT group and before MIPD vehicle limit. |
| Visible copy | `Number of vehicles handled per year:` |
| Control | CTL-MT-09 `FormTextBoxNumber`. |
| Stored/emitted value | Numeric value or `undefined`. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always numeric required. |
| Constraints | Minimum 1. |
| Errors | Exact minimum `This field must be greater than 0`; repository Yup number/required channel via CTL-MT-09 `FormError`. |
| Lifecycle | Stored/default → numeric emission → validation → submit/Back persistence. |
| Summary | Raw numeric value under matching label. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessNumberOfVehiclesHandlePerYear`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessNumberOfVehiclesHandlePerYear`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessNumberOfVehiclesHandlePerYear`. |
| Clarification | — |

#### MTS-03-Q09 — `businessNumberOfVehicleCapacity`

| Property | Exact contract |
|---|---|
| Position | Final data question, before navigation. |
| Visible copy | `Motor Insurance Policy Database (MIPD) Vehicle Limit:` |
| Control | CTL-MT-09 `FormTextBoxNumber`. |
| Stored/emitted value | Numeric value or `undefined`. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | No schema minimum/maximum. |
| Errors | Repository Yup number/required channel via CTL-MT-09 `FormError`. |
| Lifecycle | Stored/default → numeric emission → validation → submit/Back persistence. |
| Summary | Raw numeric value under the MIPD label. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:businessNumberOfVehicleCapacity`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessNumberOfVehicleCapacity`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessNumberOfVehicleCapacity`. |
| Clarification | — |

#### MTS-03-R01 — Trade-association visibility, requirement, and clear

- Trigger: watched membership truthiness; exact negative RadioList selection.
- Evaluation point: render, negative callback, validation.
- Affected fields: MTS-03-Q04–MTS-03-Q05.
- Raw-state effect: selecting No calls `setValue('businessTradeAssociationName', null)`; otherwise the field is retained/persisted.
- Projection effect: membership always projects as a coerced boolean; name projects only when its stored value is truthy.
- User-visible result/error: name appears only for truthy membership and is required only for exact boolean true.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:memberTradeAssociation`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessTradeAssociationName`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:businessTradeAssociationName`.
- Clarification: —.

#### MTS-03-R02 — VAT-number visibility, optionality, and reset

- Trigger: watched VAT-registration truthiness; exact negative RadioList selection.
- Evaluation point: render and negative callback.
- Affected fields: MTS-03-Q06–MTS-03-Q07.
- Raw-state effect: selecting No resets VAT number with `defaultValue: ''`; a truthy parent shows it, but validation never requires it.
- Projection effect: VAT status always projects as coerced boolean; number projects only when stored number is truthy.
- User-visible result/error: optional VAT number appears only for truthy registration and is limited by the control to 20 characters.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:vatRegistered/resetField`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:businessVATNumber`.
- Clarification: —.

#### MTS-03-R03 — £90,000 VAT assurance gate

- Trigger: successful validation followed by `watch('businessAnnualTurnover') >= 90000 && !vatRegistered`.
- Evaluation point: `onSubmit`, before `setData` and `next`.
- Affected fields: MTS-03-Q02, MTS-03-Q06; MTS-03-U02.
- Raw-state effect: the initial gated submit only opens local `assurance`; it does not call `setData` or `next` on that branch. Dialog buttons are both native `type="submit"`; Agree also directly writes `getValues()`, calls `next()`, and closes.
- Projection effect: once persisted, summary shows turnover raw and VAT status as a coerced boolean.
- User-visible result/error: dialog paragraph and actions are recorded in MTS-03-U02.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:onSubmit/Dialog`.
- Clarification: CLR-004 for final browser event ordering after either dialog submit button.

#### MTS-03-R04 — Successful persistence, Back persistence, and summary

- Trigger: accepted normal submit, Agree click path, or shared Back.
- Evaluation point: form/dialog/button handlers.
- Affected fields: all MTS-03 questions and MTS-03-U03.
- Raw-state effect: normal accepted submit shallow-persists submitted values then calls `next`; Back first shallow-persists `getValues()`, then shared navigation invokes `prev`; Agree performs its direct write/navigation described above.
- Projection effect: all nine business values have summary rows, with name/VAT number truthy-conditional and the formats stated per question.
- User-visible result/error: shared `Go Back` and `Save and Continue`; VAT assurance can intercept forward submit.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:onSubmit/prev`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Business Details`.
- Clarification: CLR-004 only for dialog-event ordering.

#### MTS-03-U02 — VAT assurance dialog

- Position and mount condition: mounted after heading; open only after MTS-03-R03 sets `assurance=true`.
- Kind: modal instruction/actions.
- Exact observable contract: `Businesses must register for VAT if their VAT taxable turnover is above £90,000. They can also choose to register if their turnover is below £90,000. Do you wish to continue?`; action order `Disagree`, then `Agree`. Dialog has `aria-labelledby="alert-dialog-title"` and `aria-describedby="alert-dialog-description"`, but the shown descendants carry no matching IDs. Both actions are native `type="submit"`. The paper is 628px wide with zero margin, 32px padding, and 10px radius; explanation is 600-weight 16px/19.5px justified with 32px bottom margin; actions are end-justified, 12px apart, and each button is 46px high with 12px×40px padding and 20px radius. Disagree overrides background `#F4F4F4`, transparent border, and text `#333333`.
- Related questions/rules: MTS-03-Q02, MTS-03-Q06; MTS-03-R03.
- Evidence: Unresolved — React and mounted CSS sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:Dialog`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Dialog.scss:MuiDialog-paper`.
- Clarification: CLR-004.

#### MTS-03-U03 — Navigation

- Position and mount condition: final form item; always mounted behind any open dialog.
- Kind: buttons/layout.
- Exact observable contract: shared `Go Back` followed by native `type="submit"` `Save and Continue`; Back invokes Step 3's persistence callback before navigation.
- Related questions/rules: MTS-03-R03–MTS-03-R04.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

## MTS-04 — Occupation

### Context and mounted-order contract

All route families use the same `MotorTradeStep4`. The mounted order is heading, one to five indexed occupation blocks, array-level error channels, conditional add control, a fixed divider, and shared navigation. Each block mounts an option search and, only while more than one row exists, its percentage. S2, RTL, S2+RTL, MTA, and back-office contexts add no Step 4 branch.

#### MTS-04-U01 — Page heading

- Position and mount condition: first form item; always mounted.
- Kind: heading.
- Exact observable contract: `Occupation`.
- Related questions/rules: MTS-04-Q01–MTS-04-Q02.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:MotorTradeStep4`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:occupation`.
- Clarification: —.

#### MTS-04-Q01 — `occupations[].occupationId`

| Property | Exact contract |
|---|---|
| Position | First control in each indexed occupation block, after its MTS-04-U02 heading/removal action. |
| Visible copy | No field label; placeholder `Start typing`. Block heading starts `Occupation {index+1}` and appends `: {option text}` only when its lookup resolves. |
| Control | CTL-MT-01 `AutoComplete`, repeated with the same `id="businessActivity"`. |
| Stored/emitted value | One option primitive or `undefined`; default first row uses `''`, appended rows use `undefined`. |
| Options | OPT-MT-06; source-order database rows and `requireCarJockeyRadius` metadata unresolved under CLR-001. |
| Visible when | Every existing row. |
| Enabled when | Always. |
| Required when | Every row. A state-only sibling `type === 'number'` selects simple number-required; otherwise number type error and required apply. Step 4 does not initialize or mount `type`. |
| Constraints | Array-wide source-defined uniqueness and Car Jockey metadata rules are MTS-04-R02/R03. |
| Errors | Default branch exact `This is a required field.`; number branch uses repository Yup required channel; CTL-MT-01 `FormError`; array messages are recorded in the rules. |
| Lifecycle | Existing `formData.occupations` is reused by reference as defaults; only its falsey absence creates `[{occupationId:'', percentage:100}]`. Select emits primitive; add/remove/reset transitions are MTS-04-R01; successful submit/Back persists the array. |
| Summary | Rows stay in stored order; heading uses loose match `` `${option.value}` == occupationId `` and renders `Occupation {index+1}: {text}`; missing match leaves text empty/undefined. |
| Evidence | Unresolved — Unresolved scope (option rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:occupationId/occupationTitle`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep4Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Occupations`. |
| Clarification | CLR-001 |

#### MTS-04-Q02 — `occupations[].percentage`

| Property | Exact contract |
|---|---|
| Position | Second control in each block, after occupation selection; not mounted for a single row. |
| Visible copy | `Occupation Percentage: ` with trailing space; separate visible `%` prefix. |
| Control | CTL-MT-11 `TextFieldPercentage`, `numberFormat`; callback re-triggers the whole `occupations` array only while it has an error. |
| Stored/emitted value | Numeric path uses `Number(unmaskedText)`; first auto-created single row is `100`; appended rows and the formerly sole row become `undefined`. |
| Options | Masked numeric range 0–100; no option collection. |
| Visible when | `watch('occupations').length > 1`. |
| Enabled when | Always when mounted. |
| Required when | Every row, including when the single row's percentage control is hidden. State-only sibling `type === 'number'` uses simple number-required; default branch also requires minimum 1. |
| Constraints | Control range 0–100; default schema branch minimum 1; strict cross-row total must equal numeric 100. |
| Errors | Default type error `This is a required field.`; minimum `This field must be greater than 0`; total `The total of all occupations must equal 100%.`; control/array-root `FormError` channels. |
| Lifecycle | Initial absent array gets hidden 100 → adding row two resets row one's percentage to `undefined` and appends another undefined percentage → later adds retain watched values → removing to one row writes its percentage 100 → submit/Back persists. |
| Summary | Always renders for every stored row, even a single row: `Occupation Percentage` and `{raw percentage}%`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:percentage/showPercentage/onAppendNew/onRemove`; `CleggGifford.CoverX.UI/src/components/fields/TextFieldPercentage.tsx:TextFieldPercentage`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:percentage/sumPercentage`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:percentage`. |
| Clarification | — |

#### MTS-04-R01 — Row initialization, add/remove, and percentage transitions

- Trigger: form initialization, `Add another occupation`, or a row X.
- Evaluation point: `useForm`, `onAppendNew`, `onRemove`.
- Affected fields: MTS-04-Q01–MTS-04-Q02 and row order/cardinality.
- Raw-state effect: absent/falsey stored array initializes one row `('',100)`; a truthy empty array remains empty. Adding when exactly one row resets that row to its watched ID and `percentage:undefined`, then appends `(undefined,undefined)`; adding with more rows resets to current watched array then appends. Removal deletes the index and restores row zero to 100 only when exactly one remains.
- Projection effect: summary maps whatever stored rows/percentages exist in their array order.
- User-visible result/error: add is available below five rows; first row never has X; later rows do; a single row hides its percentage input.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:defaultValues/onAppendNew/onRemove`.
- Clarification: —.

#### MTS-04-R02 — Minimum cardinality and source-defined uniqueness

- Trigger: Step 4 validation.
- Evaluation point: `MTStep4Schema` array tests.
- Affected fields: MTS-04-Q01 and whole `occupations` array.
- Raw-state effect: no mutation; invalid array blocks successful submit.
- Projection effect: none until valid data is persisted.
- User-visible result/error: minimum one gives `There must be at least one occupation added.`; uniqueness maps raw `occupationId` values then compares array length with Lodash `uniq` length, so its equality semantics are those raw values rather than the heading's loose lookup; duplicate branch calls `createError` without returning it and the declared/exact message is `Some occupations have been chosen multiple times.`.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:uniqueOccupations`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:formState.errors.occupations`.
- Clarification: CLR-008.

#### MTS-04-R03 — `requireCarJockeyRadius` singularity

- Trigger: any selected row's raw `occupationId` strictly matches an OPT-MT-06 row whose `requireCarJockeyRadius` is truthy, while array length is greater than one.
- Evaluation point: `MTStep4Schema` `jockeySingular` test.
- Affected fields: MTS-04-Q01 and array root.
- Raw-state effect: no mutation; validation blocks submit.
- Projection effect: none until resolved.
- User-visible result/error: exact `Car Jockey must be the only occupation`, assigned to `occupations.root`; the rule is metadata-based and does not prove a specific database label/value.
- Evidence: Unresolved — Unresolved scope (option rows/flag values): `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:jockeySingular`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:formState.errors.occupations.root`.
- Clarification: CLR-001.

#### MTS-04-R04 — Strict percentage total

- Trigger: Step 4 validation after iterating every row with `total = total + v.percentage`; final test is `total !== 100`.
- Evaluation point: `MTStep4Schema` `sumPercentage` test and percentage-change callback.
- Affected fields: MTS-04-Q02 and array root.
- Raw-state effect: no mutation; invalid total blocks submit; typing while an array error exists re-triggers validation.
- Projection effect: summary later appends `%` independently to each stored raw percentage.
- User-visible result/error: exact `The total of all occupations must equal 100%.` at `occupations.root`.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:sumPercentage`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:onChangeCallBack`.
- Clarification: CLR-008.

#### MTS-04-R05 — Successful persistence and Back

- Trigger: valid native form submit or shared Back.
- Evaluation point: `onSubmit`/`prev`.
- Affected fields: MTS-04-Q01–MTS-04-Q02; MTS-04-U03.
- Raw-state effect: forward shallow-persists submitted array then calls `next`; Back shallow-persists `getValues()` before shared `prev` navigation.
- Projection effect: occupation summary is an ordered row map with dynamic text and percentage described above.
- User-visible result/error: shared `Go Back` and `Save and Continue`; no route-context variation.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:onSubmit/prev`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

#### MTS-04-U02 — Indexed headings, removal, errors, and add control

- Position and mount condition: blocks follow page heading; array errors follow blocks; add follows errors.
- Kind: repeated layout/buttons/error channels.
- Exact observable contract: block heading `Occupation {index+1}` plus optional `: {resolved text}`; blocks after index zero have 2px `#f4f4f4` top border/16px padding and red 46×46 flex-centered `X`; add is native `type="button"`, text `Add another occupation`, hidden at five rows; field-array error and `occupations.root` each mount in `mb-4`; fixed 2px divider precedes navigation.
- Related questions/rules: MTS-04-Q01–MTS-04-Q02; MTS-04-R01–MTS-04-R04.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:fields/formState/onAppendNew`.
- Clarification: —.

#### MTS-04-U03 — Navigation

- Position and mount condition: after fixed divider; always mounted.
- Kind: buttons/layout.
- Exact observable contract: shared `Go Back` followed by native `type="submit"` `Save and Continue`; Back persists current Step 4 values first.
- Related questions/rules: MTS-04-R05.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

## MTS-05 — Cover Required

### Context and mounted-order contract

All route families use `MotorTradeStep5`. Mounted order is heading; cover level; the ID-1/2 limit/excess group; customer-loan choice and conditional level; No Claims Bonus heading and selection; the conditional NCB detail/introduction/other-insurer group; conditional protection; shared navigation. MTA affects only the earned-selection callback and protection disabled/default behavior evidenced below. `customerLoanVehicleCount` is commented out and not mounted.

#### MTS-05-U01 — Page heading

- Position and mount condition: first form item; always mounted.
- Kind: heading.
- Exact observable contract: `Cover Required`.
- Related questions/rules: MTS-05-Q01–MTS-05-Q17.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:MotorTradeStep5`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:cover_required`.
- Clarification: —.

#### MTS-05-Q01 — `coverLevelID`

| Property | Exact contract |
|---|---|
| Position | First question after MTS-05-U01. |
| Visible copy | `Cover Level:` |
| Control | CTL-MT-04 `RadioList`, size 12. |
| Stored/emitted value | One option primitive; undefined leaves all radios unchecked. |
| Options | OPT-MT-07; dynamic rows and `isComprehensive` metadata unresolved under CLR-001. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | Numeric required; exact IDs 1/2 show limits/excesses and ID 3 drives submit clears/driver omissions. Customer-loan eligibility separately uses OPT-MT-07 `isComprehensive`. |
| Errors | Repository Yup number/required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Non-null stored default → radio emits option primitive → controls ID branches → successful submit applies MTS-05-R01/R07 then persists. |
| Summary | Unconditional first `Cover Required` row; loose OPT-MT-07 value lookup, no match renders no text. |
| Evidence | Unresolved — Unresolved scope (rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverLevelID/coverLevel`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverLevelID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverLevelID`. |
| Clarification | CLR-001 |

#### MTS-05-U02 — Limit of Indemnity heading

- Position and mount condition: after cover level, only when `coverLevel === 1 || coverLevel === 2`.
- Kind: level-4 heading.
- Exact observable contract: `Limit of Indemnity`.
- Related questions/rules: MTS-05-Q02–MTS-05-Q03; MTS-05-R01–MTS-05-R03.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:limit_of_indemnity`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:limit_of_indemnity`.
- Clarification: —.

#### MTS-05-Q02 — `coverIndemnityLimitOwnVehiclesID`

| Property | Exact contract |
|---|---|
| Position | First question below MTS-05-U02. |
| Visible copy | `Own vehicles:` |
| Control | CTL-MT-01 `AutoComplete`, `id="own-vehicles"`; change callback clears the excess react-select ref then explicitly sets `coverExcessID` to `''`. |
| Stored/emitted value | One option primitive or `undefined`; excess clear uses string `''`. |
| Options | OPT-MT-09. For exact cover ID 2, retains rows with truthy `numericValue <= 15000` or `numericValue === 0`; otherwise full source order. Rows/numeric values unresolved under CLR-001. |
| Visible when | `coverLevel === 1 || coverLevel === 2`. |
| Enabled when | Always when visible. |
| Required when | Custom `requiredCase` when parent cover ID is exactly 1 or 2; outer schema remains `.notRequired()`. |
| Constraints | For cover ID 2, selected row metadata `numericValue > 15000` is rejected only when selected value and numeric metadata are truthy. |
| Errors | Required exact `This is a required field`; maximum exact `Maximum indemnity limit for TPF&T cover is £15,000 for own.`; CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → filtered select primitive → change clears Q04 → submit may null it for cover 3 and supplies selected metadata to driversFlatten limit calculation. |
| Summary | Unconditional row `Own vehicles`; loose lookup against full OPT-MT-09. For summary excess derivation only, cover ID 2 uses `indemnityOwnVehicles.slice(0,6)` rather than Step 5's metadata filter. |
| Evidence | Unresolved — Unresolved scope (option data): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:indemnityOwnOptions/coverIndemnityLimitOwnVehiclesID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverIndemnityLimitOwnVehiclesID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:indemnityOwnOptions`. |
| Clarification | CLR-001 |

#### MTS-05-Q03 — `coverIndemnityLimitCustomerVehiclesID`

| Property | Exact contract |
|---|---|
| Position | After own-vehicle limit and before MTS-05-U03, when mounted. |
| Visible copy | `Customer vehicles` (no colon). |
| Control | CTL-MT-01 `AutoComplete`, `id="customer-vehicles"`. |
| Stored/emitted value | One option primitive or `undefined`; submit writes `null` when the occupation-derived visibility is false. |
| Options | OPT-MT-10. For exact cover ID 2, retains only rows with truthy `numericValue <= 15000`; otherwise full source order. |
| Visible when | Cover ID is 1/2 and `showVehiclesField` is true: at least one stored occupation, after `Number(occupationId)`, is included by strict `includes` in OPT-MT-06 values whose `customerLOI` is truthy. |
| Enabled when | Always when visible. |
| Required when | Custom `requiredCase` under the same cover ID 1/2 plus stored-occupation/metadata predicate; schema reads `formData.occupations`, not current Step 5 fields. |
| Constraints | For exact cover ID 2, schema rejects a truthy selected primitive `value > 1`; this test does not look up `numericValue`. |
| Errors | Required `This is a required field`; maximum `Maximum indemnity limit for TPF&T cover is £15,000 for customer.`; CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → occupation/metadata-dependent mount → primitive emission → hidden branch is normalized to `null` in `submitData`; visible selection contributes metadata to used driver limit. |
| Summary | Unconditional row `Customer vehicles`; loose lookup against full OPT-MT-10 even when the question was hidden/cleared. |
| Evidence | Unresolved — Unresolved scope (option data/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLOIOccupations/showVehiclesField/indemnityCustomerOptions/submitData`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverIndemnityLimitCustomerVehiclesID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverIndemnityLimitCustomerVehiclesID`. |
| Clarification | CLR-001 |

#### MTS-05-U03 — Excess heading

- Position and mount condition: after own/customer indemnity controls, only for exact cover ID 1/2.
- Kind: level-4 heading.
- Exact observable contract: `Excess`.
- Related questions/rules: MTS-05-Q04–MTS-05-Q07; MTS-05-R01–MTS-05-R02.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:mtheading.excess`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:excess`.
- Clarification: —.

#### MTS-05-Q04 — `coverExcessID`

| Property | Exact contract |
|---|---|
| Position | First question below MTS-05-U03. |
| Visible copy | `Excess Required:` |
| Control | CTL-MT-01 `AutoComplete`, `id="excess-required"`, custom ref used by Q02 clear. |
| Stored/emitted value | One nested option primitive or `undefined`; Q02 callback explicitly writes `''`; cover ID 3 submit writes `null`. |
| Options | OPT-MT-58 nested active excesses from the strictly matched selected OPT-MT-09 row; `[]` when own ID is `undefined` or unmatched. Source labels append ` (Default)` to marked default, sort default first, then numeric ascending. Rows unresolved under CLR-001. |
| Visible when | Exact cover ID 1 or 2. |
| Enabled when | Always when visible. |
| Required when | Exact cover ID 1/2. |
| Constraints | Numeric required; availability depends on selected own-indemnity row. |
| Errors | Exact type error `This is a required field`; repository Yup required channel; CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → selected-own nested list → own change clears it → select emits primitive → cover ID 3 submit nulls it. Nested default ordering does not force selection. |
| Summary | Unconditional `Excess Required:` row; lookup uses nested list derived from stored own value, with summary's cover-2 first-six parent slice. |
| Evidence | Unresolved — Unresolved scope (nested rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:excessOptions/coverExcessID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverExcessID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:excessOptions`; `OPT-MT-58`. |
| Clarification | CLR-001 |

#### MTS-05-Q05 — `coverAddAllSectionsExcess`

| Property | Exact contract |
|---|---|
| Position | After required excess and before late-notification excess. |
| Visible copy | `Do you want to add an all-sections excess? ` (trailing space retained). |
| Control | CTL-MT-04 `RadioList`, always `disabled={true}`, Controller `defaultValue={false}`. |
| Stored/emitted value | Stored default if present; otherwise Controller false; disabled UI emits no new choice; cover ID 3 submit writes `null`. |
| Options | Inline order Yes=`true`, No=`false`. |
| Visible when | Exact cover ID 1 or 2. |
| Enabled when | Never; both radios disabled. |
| Required when | Exact cover ID 1/2 despite disabled state; otherwise not required. |
| Constraints | Boolean required in visible branch. |
| Errors | Repository Yup boolean/required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default false → disabled display → submit persists under ID1/2 or nulls under ID3. |
| Summary | Unconditional row; coerces with `!!value`, so falsey/null/undefined renders `No`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverAddAllSectionsExcess`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverAddAllSectionsExcess`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverAddAllSectionsExcess`. |
| Clarification | — |

#### MTS-05-Q06 — `coverExcessLateID`

| Property | Exact contract |
|---|---|
| Position | After all-sections excess and before co-insurance deletion. |
| Visible copy | `Do you want to add a late notification excess?` |
| Control | CTL-MT-01 `AutoComplete`, `id="late-notification-excess"`, always disabled, Controller `defaultValue={1}`. |
| Stored/emitted value | Stored default if present; otherwise primitive numeric 1; disabled UI emits no new choice; cover ID 3 submit writes `null`. |
| Options | OPT-MT-11 source-order dynamic rows unresolved under CLR-001. |
| Visible when | Exact cover ID 1 or 2. |
| Enabled when | Never; select is disabled. |
| Required when | Exact cover ID 1/2; otherwise not required. |
| Constraints | Numeric required in visible branch. |
| Errors | Repository Yup number/required channel via CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default 1 → disabled lookup display → submit persists under ID1/2 or nulls under ID3. |
| Summary | Unconditional row; loose OPT-MT-11 lookup. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverExcessLateID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverExcessLateID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverExcessLateID`. |
| Clarification | CLR-001 |

#### MTS-05-Q07 — `coverRemoveCoInsuraneExcess`

| Property | Exact contract |
|---|---|
| Position | Final ID-1/2 excess question. Source field spelling is `Insurane`. |
| Visible copy | `Do you want to delete the 10% co-insurance excess? ` (trailing space retained). |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean; cover ID 3 submit writes `null`. |
| Options | Inline order Yes=`true`, No=`false`. |
| Visible when | Exact cover ID 1 or 2. |
| Enabled when | Always when visible. |
| Required when | Exact cover ID 1/2; otherwise not required. |
| Constraints | Boolean required in visible branch. |
| Errors | Repository Yup boolean/required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → strict radio emission → submit persists under ID1/2 or nulls under ID3. |
| Summary | Unconditional row; falsey/null/undefined coerces to `No`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverRemoveCoInsuraneExcess`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverRemoveCoInsuraneExcess`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverRemoveCoInsuraneExcess`. |
| Clarification | — |

#### MTS-05-Q08 — `requireCustomerLoanCover`

| Property | Exact contract |
|---|---|
| Position | After the optional ID-1/2 group and before conditional loan level. |
| Visible copy | `Do you require customer loan vehicle cover? ` (trailing space retained). |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean. |
| Options | Inline order Yes=`true`, No=`false`. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.boolean().required().label('This')`. |
| Constraints | Boolean required. |
| Errors | Repository Yup required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → radio emission → truthiness mounts Q09; falsey submit writes Q09 `null`. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:requireCustomerLoanCover`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:requireCustomerLoanCover`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`. |
| Clarification | — |

#### MTS-05-Q09 — `customerLoanCoverLevelID`

| Property | Exact contract |
|---|---|
| Position | Immediately after customer-loan choice when visible, before MTS-05-U04. |
| Visible copy | Inline `Customer loan vehicles cover level :` (space before colon). |
| Control | CTL-MT-01 `AutoComplete`, `id="coverLevel"`. |
| Stored/emitted value | One option primitive or `undefined`; falsey-parent submit writes `null`. |
| Options | OPT-MT-08 with dynamic `isComprehensive` metadata unresolved under CLR-001. |
| Visible when | `watch('requireCustomerLoanCover')` is truthy. |
| Enabled when | Always when visible. |
| Required when | Parent is exact boolean `true`; otherwise not required. |
| Constraints | Finds the first comprehensive OPT-MT-07 and OPT-MT-08 values; if selected policy cover is not that value but selected loan cover is, rejects it. |
| Errors | Exact `Chosen cover level is not eligible.`; repository Yup required channel; CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → conditional primitive select → eligibility validation → parent-false submit nulls it. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Unresolved — Unresolved scope (rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLoanCoverLevelID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:customerLoanCoverLevelID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`. |
| Clarification | CLR-001 |

#### MTS-05-U04 — No Claims Bonus heading

- Position and mount condition: after the customer-loan group; always mounted.
- Kind: level-4 heading.
- Exact observable contract: `No Claims Bonus`.
- Related questions/rules: MTS-05-Q10–MTS-05-Q17; MTS-05-R04–MTS-05-R06.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:mtheading.no_claim_bonus`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:no_claim_bonus`.
- Clarification: —.

#### MTS-05-Q10 — `coverNCBID`

| Property | Exact contract |
|---|---|
| Position | First question below MTS-05-U04. |
| Visible copy | `No Claims Bonus held (years):` |
| Control | CTL-MT-01 `AutoComplete`, `id="no-claims-bonus"`; callback writes Q11 `undefined` only when selected primitive is exact number 1. |
| Stored/emitted value | One option primitive or `undefined`. |
| Options | OPT-MT-12; dynamic source order/rows unresolved under CLR-001. |
| Visible when | Always. |
| Enabled when | Always. |
| Required when | Always `yup.number().required().label('This')`. |
| Constraints | Numeric required; truthy ID other than strict number 1 mounts Q11–Q13/Q16; exact IDs 1 and 2 drive submit/follow-up branches. |
| Errors | Repository Yup number/required channel via CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → primitive select; selecting 1 clears earned ID immediately; submit ID1 nulls earned/expiry/insurer/other, while general follow-up normalization also clears intro/protection as applicable. |
| Summary | Unconditional row; loose OPT-MT-12 lookup. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNCBID/ncbHeldAtAll`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverNCBID`. |
| Clarification | CLR-001 |

#### MTS-05-Q11 — `coverNCBEarnedID`

| Property | Exact contract |
|---|---|
| Position | First conditional NCB-detail question, before expiry. |
| Visible copy | `How was the No Claims Bonus earned? ` (trailing space retained). |
| Control | CTL-MT-01 `AutoComplete`, reusing `id="no-claims-bonus"`; callback sets Q17 false for exact selected 3 with truthy MTA, otherwise undefined. |
| Stored/emitted value | One option primitive or `undefined`; submit writes `null` when Q10 is exact 1. |
| Options | OPT-MT-13 source-order rows unresolved under CLR-001. |
| Visible when | `ncbHeldAtAll && ncbHeldAtAll !== 1`. |
| Enabled when | Always when visible. |
| Required when | Parent Q10 is truthy and not exact 1. |
| Constraints | Numeric required in branch; exact number 3 controls intro/protection. |
| Errors | Repository Yup number/required channel via CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → primitive selection and MTA-dependent Q17 write → submit clears for Q10 ID1 and clears Q17 unless earned is exact 3. |
| Summary | Unconditional row; loose OPT-MT-13 lookup. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNCBEarnedID/earnedHow`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBEarnedID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverNCBEarnedID`. |
| Clarification | CLR-001 |

#### MTS-05-Q12 — `coverNCBExpiryDate`

| Property | Exact contract |
|---|---|
| Position | After earned method and before previous insurer. |
| Visible copy | `Expiry Date of the No Claims Bonus: ` (trailing space retained); default `dd/mm/yyyy`. |
| Control | CTL-MT-13 `Datepicker`, control min `1900-01-01`, control max current day start. |
| Stored/emitted value | Normalized `Date` or `undefined`; submit writes `null` when Q10 is exact 1. |
| Options | Calendar/manual date input. |
| Visible when | Q10 truthy and not exact 1. |
| Enabled when | Always when visible. |
| Required when | Q10 truthy and not exact 1. |
| Constraints | Schema minimum 1900-01-01; schema declares no maximum although the mounted control supplies today as maximum. |
| Errors | Exact minimum `Date cannot be earlier than 01/01/1900.`; repository Yup date/required channel via CTL-MT-13 `FormError`. |
| Lifecycle | Stored/default → date normalization/control bounds → submit persists or ID1 nulls it. |
| Summary | Unconditional row formats `dayjs(value).format('DD/MM/YYYY')`, including whatever text that expression produces for absent/invalid state. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNCBExpiryDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBExpiryDate`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverNCBExpiryDate`. |
| Clarification | — |

#### MTS-05-Q13 — `coverNCBPreviousInsurerId`

| Property | Exact contract |
|---|---|
| Position | After expiry date; controls introductory-renewal and other-insurer branches. |
| Visible copy | `Previous Insurer:`; placeholder `Start typing`. |
| Control | CTL-MT-01 `AutoComplete`, `id="previous-insurer"`. |
| Stored/emitted value | One option primitive or `undefined`; submit writes `null` when Q10 is exact 1. |
| Options | OPT-MT-14 with `requireNCBIntroRenewal` metadata; rows/order/flags unresolved under CLR-001. |
| Visible when | Q10 truthy and not exact 1. |
| Enabled when | Always when visible. |
| Required when | Q10 truthy and not exact 1. |
| Constraints | Numeric required in branch; exact number 21 controls Q16; strict `includes` in metadata-filtered values controls Q14/Q15. |
| Errors | Repository Yup number/required channel via CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → primitive selection → controls branches; submit nulls Q16 unless exact 21 and nulls intro fields unless all metadata conditions hold. |
| Summary | Unconditional previous-insurer row with loose OPT-MT-14 lookup and a trailing JSX space. |
| Evidence | Unresolved — Unresolved scope (option rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNCBPreviousInsurerId/previousInsurerSatisfies`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBPreviousInsurerId`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverNCBPreviousInsurerId`. |
| Clarification | CLR-001 |

#### MTS-05-Q14 — `hasCoverNCBIntroRenewal`

| Property | Exact contract |
|---|---|
| Position | After previous insurer, before conditional intro year and other-insurer Collapse. |
| Visible copy | `Has the client been insured with Tradex/Watford for the last 12 months where an introductory discount was given?` |
| Control | CTL-MT-04 `RadioList`. |
| Stored/emitted value | Boolean; submit writes `null` if any parent condition fails. |
| Options | Inline order Yes=`true`, No=`false`. |
| Visible when | Q10 strict `=== 2`, Q11 strict `=== 3`, and selected Q13 is strictly included in OPT-MT-14 values whose `requireNCBIntroRenewal` is truthy. |
| Enabled when | Always when visible. |
| Required when | Same three parent conditions and value is neither exact true nor exact false. |
| Constraints | Boolean required only under full predicate. |
| Errors | Exact `This is a required field` via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → radio emission → truthy mounts Q15; submit nulls Q14/Q15 if parent predicate fails, and false specifically nulls Q15. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Unresolved — Unresolved scope (insurer flags): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:previousInsurerSatisfies/hasCoverNCBIntroRenewal`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:hasCoverNCBIntroRenewal`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`. |
| Clarification | CLR-001 |

#### MTS-05-Q15 — `coverNCBIntroRenewalYearID`

| Property | Exact contract |
|---|---|
| Position | Immediately after Q14 when visible, before other-insurer Collapse. |
| Visible copy | `How many years discount was the introductory discount based on?`; placeholder `Start typing`. |
| Control | CTL-MT-01 `AutoComplete`, reusing `id="previous-insurer"`. |
| Stored/emitted value | One option primitive or `undefined`; normalization may write `null`. |
| Options | OPT-MT-15 dynamic source-order rows unresolved under CLR-001. |
| Visible when | `watch('hasCoverNCBIntroRenewal')` is truthy inside the full Q14 parent branch. |
| Enabled when | Always when visible. |
| Required when | Q10 exact 2, Q11 exact 3, insurer metadata qualifies, Q14 exact true, and value is falsey. |
| Constraints | Numeric required only under complete predicate. |
| Errors | Exact `This is a required field` via CTL-MT-01 `FormError`. |
| Lifecycle | Stored/default → primitive selection → false Q14 nulls it; failed parent predicate nulls it on submit. |
| Summary | Not mounted in `StepSummary`. |
| Evidence | Unresolved — Unresolved scope (rows/insurer flags): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNCBIntroRenewalYearID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBIntroRenewalYearID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`. |
| Clarification | CLR-001 |

#### MTS-05-Q16 — `coverNCBPreviousInsurerOther`

| Property | Exact contract |
|---|---|
| Position | After introductory-renewal group, within a Collapse, before Q17. |
| Visible copy | `Please provide details`; no separate text-input label. |
| Control | CTL-MT-08 `FormTextBox`, size 12, maxLength 50, preceded by sub-element `FormLabel`. |
| Stored/emitted value | String; submit writes `null` unless Q13 is exact number 21. |
| Options | None. |
| Visible when | `watch('coverNCBPreviousInsurerId') === 21`; Collapse remains mounted with `in` controlling expansion. |
| Enabled when | Always when expanded. |
| Required when | Q13 is truthy and exact 21; otherwise not required. |
| Constraints | Maximum 50 in schema and control. |
| Errors | Repository Yup string/max/required channel via CTL-MT-08 `FormError`. |
| Lifecycle | Stored/default → conditional text → submit keeps only for exact insurer 21, otherwise null. |
| Summary | Conditional row only for stored Q13 strict `=== 21`, label `Other Insurer Details`, raw string. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverNBCInsurer/coverNCBPreviousInsurerOther`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBPreviousInsurerOther`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverNCBPreviousInsurerOther`. |
| Clarification | — |

#### MTS-05-Q17 — `coverIsNCBProtected`

| Property | Exact contract |
|---|---|
| Position | After the conditional NCB-detail fragment and before navigation. |
| Visible copy | `Would you like to protect the No Claims Bonus?` |
| Control | CTL-MT-04 `RadioList`, disabled with `!!isMTA`. |
| Stored/emitted value | Boolean; Q11 callback writes false for exact earned ID3 in MTA, otherwise undefined; submit writes null unless earned ID is exact 3. |
| Options | Inline order Yes=`true`, No=`false`. |
| Visible when | `earnedHow && earnedHow === 3`. |
| Enabled when | Enabled only when stored `formData.isMta` is falsey. |
| Required when | Q11 is truthy and exact 3, including MTA disabled state. |
| Constraints | Boolean required in branch. |
| Errors | Repository Yup boolean/required channel via CTL-MT-04 `FormError`. |
| Lifecycle | Stored/default → earned-selection callback may force false/undefined → visible radio (disabled in MTA) → submit nulls unless Q11 exact3. |
| Summary | Unconditional final cover row; coerced boolean renders `Yes`/`No`, so null/undefined renders `No`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverIsNCBProtected/isMTA`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverIsNCBProtected`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:coverIsNCBProtected`. |
| Clarification | — |

#### MTS-05-R01 — Cover-level branch, requiredness, and ID-3 normalization

- Trigger: watched/submitted `coverLevelID`; render uses strict ID 1/2 and submit clearing uses strict ID 3.
- Evaluation point: render, `MTStep5Schema`, and successful `onSubmit` before store write.
- Affected fields: MTS-05-Q01–MTS-05-Q07 and MTS-05-U02/U03.
- Raw-state effect: IDs 1/2 mount and require the limit/excess group. Submitted ID3 writes own indemnity, customer indemnity, required excess, all-sections excess, late excess, and co-insurance deletion to `null`; the source wraps that object in parameterless Lodash `omit`, which supplies no named property-removal list.
- Projection effect: summary nevertheless mounts every Q01–Q07 row unconditionally and resolves/coerces the stored values as each question specifies.
- User-visible result/error: exact level rows are unresolved; exact numeric predicates and field errors remain implementable without guessed labels.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:coverLevel/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep5Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`.
- Clarification: CLR-001 for OPT-MT-07 rows.

#### MTS-05-R02 — Indemnity filters and nested excess dependency

- Trigger: exact cover ID 2; strict own-indemnity selection/change.
- Evaluation point: option derivation, Q02 callback, schema maximum tests, and summary option derivation.
- Affected fields: MTS-05-Q02–MTS-05-Q04; OPT-MT-09/10/58/71.
- Raw-state effect: Step 5 applies the distinct own/customer metadata filters stated in Q02/Q03; Q02 change clears Q04 to `''`; Q04 choices are the selected parent's nested `excesses` or `[]`.
- Projection effect: summary uses full own/customer lookup rows, but derives its excess parents with `slice(0,6)` for cover ID2 and then strictly matches the chosen own value.
- User-visible result/error: nested active excess rows retain source transformation/order—default-labelled row first, then numeric ascending—but no database row/value is invented.
- Evidence: Unresolved — Unresolved scope (option data): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:indemnityCustomerOptions/indemnityOwnOptions/excessOptions`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MaxLimit`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:excessOptions`; `OPT-MT-58`.
- Clarification: CLR-001.

#### MTS-05-R03 — Occupation-metadata customer-indemnity branch

- Trigger: at least one stored `formData.occupations` ID, converted with `Number`, is strictly included in OPT-MT-06 values whose `customerLOI` flag is truthy.
- Evaluation point: render-time `showVehiclesField`, schema `requiredCase`, submit normalization, and driver-limit selection.
- Affected fields: MTS-05-Q03; MTS-04-Q01; MTS-05-R07.
- Raw-state effect: truthy predicate permits Q03; false predicate hides it and successful submit writes customer indemnity `null`. When visible and cover is not ID3, selected customer numeric metadata can contribute to `usedLimit`.
- Projection effect: cover summary still mounts `Customer vehicles` unconditionally; future driver projections use the normalized/mapped driver array from R07.
- User-visible result/error: hidden/required behavior depends on metadata, not an inferred occupation label.
- Evidence: Unresolved — Unresolved scope (occupation rows/flags): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLOIOccupations/showVehiclesField/submitData`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverIndemnityLimitCustomerVehiclesID`; `OPT-MT-60`.
- Clarification: CLR-001.

#### MTS-05-R04 — Customer-loan branch and non-mounted vehicle count

- Trigger: Q08 truthiness/exact true and selected OPT-MT-07/08 `isComprehensive` metadata.
- Evaluation point: render, `customerLoanCoverLevelID` validation, and submit normalization.
- Affected fields: MTS-05-Q08–MTS-05-Q09 and state-only `customerLoanVehicleCount`.
- Raw-state effect: falsey submitted Q08 writes Q09 `null`. `customerLoanVehicleCount` has a commented-out Controller and unfinished source note, is absent from `defaultObject`, and is not submitted by this form; although `MTStep5Schema` could require it when parameter `isMTA` is truthy, the Step 5 resolver call does not pass `isMTA`, so this caller selects `.number().notRequired()`. A prior store key is not explicitly cleared by the shallow merge.
- Projection effect: Q08, Q09, and `customerLoanVehicleCount` are all omitted from `StepSummary`.
- User-visible result/error: only Q08/Q09 mount; the commented field and its label ` Customer Loan Vehicle Count:` are not observable UI.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:customerLoanVehicleCount/MTStep5Schema`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:customerLoanVehicleCount`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`.
- Clarification: —.

#### MTS-05-R05 — NCB detail visibility, MTA protection, and base clears

- Trigger: Q10 truthy/not ID1, Q11 exact ID3, Q13 exact ID21, Q11 selection callback, and successful submit.
- Evaluation point: render, callbacks, validation, submit normalization.
- Affected fields: MTS-05-Q10–MTS-05-Q13, Q16, Q17.
- Raw-state effect: selecting Q10 ID1 writes Q11 `undefined`; submitted Q10 ID1 nulls Q11/Q12/Q13/Q16. Submitted Q13 other than ID21 nulls Q16. Submitted Q11 other than ID3 nulls Q17. Selecting Q11 ID3 while stored MTA is truthy sets Q17 false; every other Q11 callback value sets it undefined; mounted Q17 is disabled in MTA.
- Projection effect: summary mounts Q10–Q13 and Q17 unconditionally; Q16 only for stored strict insurer ID21. Dynamic values use loose lookup, date formats directly, booleans coerce with `!!`.
- User-visible result/error: Q11–Q13/Q16 mount only inside Q10's truthy-not-1 fragment; Q17 mounts separately only for truthy exact Q11 ID3.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:ncbHeldAtAll/earnedHow/coverNBCInsurer/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBEarnedID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverNCBPreviousInsurerId`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverIsNCBProtected`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`.
- Clarification: CLR-001 for dynamic labels only.

#### MTS-05-R06 — Introductory-renewal metadata branch and normalization

- Trigger: Q10 strict ID2, Q11 strict ID3, and Q13 strict inclusion in the OPT-MT-14 subset with truthy `requireNCBIntroRenewal`; Q14 exact false.
- Evaluation point: render, two custom schema `requiredCase` tests, and submit normalization.
- Affected fields: MTS-05-Q14–MTS-05-Q15; OPT-MT-14/15/61.
- Raw-state effect: if any three-part parent condition fails, submit writes both values `null`; if Q14 is exact false, submit writes Q15 `null`; otherwise accepted primitives persist.
- Projection effect: neither value is mounted in `StepSummary`.
- User-visible result/error: Q14 mounts under the full metadata predicate; Q15 mounts for truthy Q14; exact custom required messages are in their question records.
- Evidence: Unresolved — Unresolved scope (insurer/year rows and flag values): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:satisfiedConditionOptions/previousInsurerSatisfies/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:hasCoverNCBIntroRenewal/coverNCBIntroRenewalYearID`.
- Clarification: CLR-001.

#### MTS-05-R07 — `driversFlatten` cross-step mutation

- Trigger: successful Step 5 submit while stored `formData.drivers` exists with length greater than zero.
- Evaluation point: after Step 5 field normalization and option-metadata limit derivation, before `setData`/`next`.
- Affected fields: stored driver objects' `ageAdditionalExcess`, `ageIndemnityLimitID`, and `experienceBasedExcessID`; MTS-05-Q01–Q03.
- Raw-state effect: exact cover ID3 maps every driver through Lodash `omit` of all three named keys. Other cover IDs map every driver and omit `ageIndemnityLimitID` only when its selected OPT value's truthy `numericValue` is greater than truthy `policyIndemnityLimit`, and likewise for `experienceBasedExcessID`; comparisons use strict option-value equality. The mapped driver array is written back to the form store. With no stored drivers, Step 5 writes no `drivers` key.
- Projection effect: `policyIndemnityLimit` is own selected `numericValue`, except when `showVehiclesField` is true and cover is not ID3, where Lodash `max([customerNumeric, ownNumeric])` is used. Later driver summary/steps receive the mapped objects and therefore cannot project omitted keys from those objects.
- User-visible result/error: no Step 5 message is mounted for this mutation; it is a successful-submit side effect.
- Evidence: Unresolved — Source qualifier (React/Lodash): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:policyOwnIndemnityLimit/policyCustomerIndemnityLimit/usedLimit/onSubmit`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `OPT-MT-71`.
- Clarification: CLR-001 only for dynamic numeric metadata values.

#### MTS-05-R08 — Successful persistence, Back, and summary projection boundary

- Trigger: valid native submit or shared Back.
- Evaluation point: `onSubmit`/`prev` and later `StepSummary` render.
- Affected fields: all MTS-05 questions, state-only vehicle count, and MTS-05-U05.
- Raw-state effect: forward applies R01/R03–R07 projections, shallow-persists `submitData` plus mapped drivers when applicable, then calls `next`; Back shallow-persists current `getValues()` without forward-submit normalization, then shared navigation calls `prev`.
- Projection effect: summary unconditionally mounts Q01–Q07, Q10–Q13 and Q17 rows; Q16 is strict-ID21 conditional; Q08/Q09/Q14/Q15 and non-mounted `customerLoanVehicleCount` are omitted. Lookups/format/coercions are recorded on each question.
- User-visible result/error: native forward text `Save and Continue`; Back text `Go Back`; summary can show blank/coerced rows for fields whose entry controls were hidden.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:onSubmit/prev`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Cover Required`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`.
- Clarification: —.

#### MTS-05-U05 — Navigation

- Position and mount condition: final form item, after conditional Q17; always mounted.
- Kind: buttons/layout.
- Exact observable contract: shared `Go Back` followed by native `type="submit"` `Save and Continue`; Back persists current unnormalized Step 5 values before navigation.
- Related questions/rules: MTS-05-R08.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

## MTS-06 — Drivers

Step 6 is one numbered surface with four mutually selected route-local views. `MotorTradeStep6` tests `driverLoading` first; otherwise `editing` selects MTS-06B, `showCards` selects MTS-06C, and absence of all three selects MTS-06A. The view flags do not change the persisted numbered step. Dynamic option rows remain unresolved under CLR-001 and the two configured list literals remain under CLR-007.

### MTS-06A — Driver Plan

Mounted order is the `Drivers` heading, Q01, the ID-2/3 any-driver instruction, Q02–Q07 when `driverPlanId === 2 || driverPlanId === 3`, then shared navigation. `DriverPlanSchema` is the submit gate.

#### MTS-06-Q01 — `driverPlanId`

| Property | Exact contract |
|---|---|
| Position | MTS-06A, first control after heading. |
| Visible copy | `Driver Plan:`; `Drivers` heading; `Select` placeholder. |
| Control | CTL-MT-01 `AutoComplete`, `id="Drivers"`. |
| Stored/emitted value | One option primitive or `undefined`; store/form default is prior value with only `null` omitted. |
| Options | OPT-MT-16, source order; rows unresolved under CLR-001. |
| Visible when | Always in MTS-06A. |
| Enabled when | Always enabled. |
| Required when | Always, by `DriverPlanSchema`. |
| Constraints | Numeric required; exact IDs 1/2 control named-driver movement, IDs 2/3 show Q02–Q07. |
| Errors | Repository Yup required/type channel through CTL-MT-01 `FormError`. |
| Lifecycle | Prior raw value → primitive select → valid submit follows MTS-06-R01/R02; non-1/2 submit clears `drivers`. |
| Summary | No Driver Plan row in `StepSummary`; Drivers section projects named rows only. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:driverPlanId/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | CLR-001. |

#### MTS-06-U01 — Any-driver instruction

- Position and mount condition: MTS-06A after Q01 when Q01 is strict `=== 3 || === 2`.
- Kind: information panel.
- Exact observable contract: purple panel beginning `Standard any driver cover is as follows:`, followed in order by `Motor Trade use only`; full UK licence at least 3 years; the exact listed minor-conviction families and exceptions; the exact major-conviction families; no pending prosecutions/police enquiries; no accident/incident/fire/theft losses in the last 3 years; and no disclosable criminal convictions under the Rehabilitation of Offenders Act. 1974; ending `Any driver that does not meet the above conditions must be named.`
- Related questions/rules: MTS-06-Q01; MTS-06-R01.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:chosenDriverPlan information panel`.
- Clarification: —.

#### MTS-06-Q02 — `aadDriverNumber`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, first field. |
| Visible copy | `Number of Drivers:`. |
| Control | CTL-MT-09 `FormTextBoxNumber`; no supplied `makeNull`/limit. |
| Stored/emitted value | Digits become number; blank emits `''`; prior `null` omitted from defaults. |
| Options | None. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric; no schema min/max. MTS-06C add uses a separate configured limit. |
| Errors | Exact type error `This is a required field`; required label channel. |
| Lifecycle | Prior/default → numeric normalization → persisted for ID2/3; ID1 submit writes `undefined`. |
| Summary | Not mounted in Drivers summary. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadDriverNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | —. |

#### MTS-06-Q03 — `aadDriverMinAgeId`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, after Q02. |
| Visible copy | `Minimum Driver Age:`. |
| Control | CTL-MT-01, `id="aad_driver_min_age"`. |
| Stored/emitted value | Option primitive/`undefined`; prior `null` omitted. |
| Options | OPT-MT-17, unresolved rows/source order. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric required; selected value later participates in AAD validation outside this form. |
| Errors | Repository Yup number/required channel. |
| Lifecycle | Prior/default → selection → persisted; ID1 submit writes `undefined`. |
| Summary | Not mounted in Drivers summary. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadDriverMinAgeId`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | CLR-001. |

#### MTS-06-Q04 — `aadDriverMaxAgeId`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, after Q03. |
| Visible copy | `Maximum Driver Age:`. |
| Control | CTL-MT-01, `id="aad_driver_max_age"`. |
| Stored/emitted value | Option primitive/`undefined`; prior `null` omitted. |
| Options | OPT-MT-18, unresolved rows/source order. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric required; later AAD validation consumer. |
| Errors | Repository Yup number/required channel. |
| Lifecycle | Prior/default → selection → persisted; ID1 submit writes `undefined`. |
| Summary | Not mounted in Drivers summary. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadDriverMaxAgeId`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | CLR-001. |

#### MTS-06-Q05 — `aadMaxVehicleGroupingID`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, after Q04. |
| Visible copy | `Maximum vehicle grouping:`. |
| Control | CTL-MT-01, `id="max_vehicle_grouping"`. |
| Stored/emitted value | Option primitive/`undefined`; prior `null` omitted. |
| Options | OPT-MT-19/51; selected metadata `abiGroup`. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric required; SetValidators resolves strict value equality. |
| Errors | Repository Yup number/required channel. |
| Lifecycle | Selection persists for ID2/3; ID1 writes `undefined`; SetValidators later derives plan ABI ceiling. |
| Summary | Not mounted; feeds validator state only. |
| Evidence | Unresolved — Unresolved scope (metadata value): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadMaxVehicleGroupingID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverPlanMaxAbi`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | CLR-001. |

#### MTS-06-Q06 — `aadMaxVehicleGvwID`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, after Q05. |
| Visible copy | `Maximum Gross Vehicle Weight Handled:`. |
| Control | CTL-MT-01, `id="max_gross_weight"`. |
| Stored/emitted value | Option primitive/`undefined`; prior `null` omitted. |
| Options | OPT-MT-20/52; producer multiplies non-null `MaxGVW` by 1000. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric required; strict option lookup feeds SetValidators. |
| Errors | Repository Yup number/required channel. |
| Lifecycle | Selection persists for ID2/3; ID1 writes `undefined`; derived `maxGVW` enters validator store. |
| Summary | Not mounted; validator-only consumer. |
| Evidence | Unresolved — Unresolved scope (row/value): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadMaxVehicleGvwID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverPlanGvw`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | CLR-001. |

#### MTS-06-Q07 — `aadMaxMotorcycleCcID`

| Property | Exact contract |
|---|---|
| Position | MTS-06A conditional group, final field before navigation. |
| Visible copy | `Maximum Motorcycle CC Handled:`. |
| Control | CTL-MT-01, `id="max_motorcycle_cc"`. |
| Stored/emitted value | Option primitive/`undefined`; prior `null` omitted. |
| Options | OPT-MT-21/62 with nullable `maxCC`. |
| Visible when | Q01 strict ID2 or ID3. |
| Enabled when | Enabled when visible. |
| Required when | Q01 truthy and exact 2 or 3. |
| Constraints | Numeric required; downstream motorcycle comparisons use selected metadata. |
| Errors | Repository Yup number/required channel. |
| Lifecycle | Selection persists for ID2/3; ID1 submit writes `undefined`. |
| Summary | Not mounted in Drivers summary. |
| Evidence | Unresolved — Unresolved scope (rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:aadMaxMotorcycleCcID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`. |
| Clarification | CLR-001. |

#### MTS-06-R01 — Driver-plan branches, validation, and movement

- Trigger: Q01 strict ID1/ID2 for `nextPageDrivers`; strict ID2/ID3 for additional fields; any other submitted ID takes the skip path.
- Evaluation point: render and successful `DriverPlanSchema` submit.
- Affected fields: MTS-06-Q01–Q07 and stored `drivers`.
- Raw-state effect: ID1 persists plan data while writing Q02–Q07 `undefined`; ID2 persists submitted plan data; the non-1/non-2 path mutates `formData.drivers=[]`, shallow-merges it with submitted plan data, then calls `setValidators`.
- Projection effect: IDs1/2 enter named-driver state; other IDs exit to MTS-07 after validator derivation.
- User-visible result/error: missing/invalid plan fields remain on MTS-06A through field `FormError`; exact option labels are not inferred.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:showAdditional/nextPageDrivers/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`.
- Clarification: CLR-001 for plan labels only.

#### MTS-06-R02 — Existing-driver sequential revalidation

- Trigger: valid ID1/2 plan submit with `formData.drivers.length > 0`.
- Evaluation point: recursive `DriverDetailSchema(...).validate(formData.drivers[index])` starting at zero.
- Affected fields: every MTS-06B question plus MTS-06 route state.
- Raw-state effect: plan submission is already shallow-persisted; driver rows are not rewritten by this validation.
- Projection effect: all valid rows open MTS-06C; first failure opens that raw index in MTS-06B with `navigateList:true`.
- User-visible result/error: quotes-loading state is true during recursion; both completion paths scroll to top and clear it; no schema message is rendered on MTS-06A.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:revalidate`.
- Clarification: —.

#### MTS-06-U02 — MTS-06A navigation

- Position and mount condition: after Q07/group; always in MTS-06A.
- Kind: buttons.
- Exact observable contract: shared native `Go Back` then `Save and Continue`; Back shallow-persists `getValues()` before manager Previous reaches MTS-05.
- Related questions/rules: MTS-06-R01/R02.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:prev/NavigatorButton`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:NavigatorButton`.
- Clarification: —.

### MTS-06B — Driver Details

`DriverDetailSchema` receives exactly `{t, formData, configOptions: options?.youngDriverConfiguration, policyIndemnityLevel, excessOptions}`. The form defaults to `formData.drivers[location.state.editDriver] || {}`. The concise question tables below use the shared control contracts for primitive/empty and field-error behavior; every exception, reset, summary mapping, and source predicate remains explicit.

#### MTS-06-Q08 — `titleID`

| Property | Exact contract |
|---|---|
| Position | MTS-06B first field after `Drivers`. |
| Visible copy | `Driver Title:`. |
| Control | CTL-MT-01, `id="Driver Title"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-24, source order, unresolved rows. |
| Visible when | Always in MTS-06B. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric required. |
| Errors | Yup number/required through CTL-MT-01. |
| Lifecycle | Stored row/default or empty → select → saved in created/replaced driver. |
| Summary | Omitted from Drivers summary. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:titleID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | CLR-001. |

#### MTS-06-Q09 — `firstName`

| Property | Exact contract |
|---|---|
| Position | After Q08. |
| Visible copy | `First Name:`. |
| Control | CTL-MT-08 `FormTextBox`. |
| Stored/emitted value | String; blank `''`. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | String required; no max in caller/schema. |
| Errors | Yup required via FormError. |
| Lifecycle | Stored/default → raw text → persists; interpolated with Q10 using `|| ''`. |
| Summary | Drivers heading per row: `firstName + ' ' + surname`, before DOB and relationship. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:firstName`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:firstName`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | —. |

#### MTS-06-Q10 — `surname`

| Property | Exact contract |
|---|---|
| Position | After Q09. |
| Visible copy | Inline `Surname:`. |
| Control | CTL-MT-08. |
| Stored/emitted value | String; blank `''`. |
| Options | None. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | String required; no max. |
| Errors | Yup required via FormError. |
| Lifecycle | Stored/default → raw text → persists; used in dynamic young/experience copy. |
| Summary | Same row heading concatenation as Q09. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:surname`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:surname`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | —. |

#### MTS-06-Q11 — `dateOfBirth`

| Property | Exact contract |
|---|---|
| Position | After surname, before relationship. |
| Visible copy | `Date of Birth:`; placeholder `dd/mm/yyyy`; truthy computed age displays `N years old`. |
| Control | CTL-MT-14 `DatepickerBirthDate`; min 1900-01-01, max `dayjs()`. |
| Stored/emitted value | Date/`undefined`; picker uses UTC-preserving conversion. |
| Options | Calendar/manual masked date. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Min 01/01/1900; policy-start age must be at least 17 and not greater than 85 (message says at most 84). |
| Errors | `Date cannot be earlier than 01/01/1900.`; `Driver must be at least 17 years old`; `Driver must be at most 84 years old`; required/type channel. |
| Lifecycle | Any change sets five young/experience fields to `null` with validation; render age uses policy start. |
| Summary | First value row label `Date of Birth:`; `DD/MM/YYYY (N yrs old)`, but summary age uses `dayjs()` current time, not policy start. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:dateOfBirth/driverAge`; `CleggGifford.CoverX.UI/src/components/fields/DatepickerBirthDate.tsx:ageGiven`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:dateOfBirth`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:driverAge`. |
| Clarification | —. |

#### MTS-06-Q12 — `relationshipPolicyholderID`

| Property | Exact contract |
|---|---|
| Position | After Q11. |
| Visible copy | `Driver Relationship to Policyholder:`. |
| Control | CTL-MT-01, `id="Rel Policyholder"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-25 filtered by strict inclusion in selected OPT-MT-03/50 `relationshipOptions`. |
| Visible when | Always; options may be empty. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric; ID5 forbidden below age25; only one ID3 policyholder, except edited row with matching `guid`. |
| Errors | Exact spouse-under-25 and existing-policyholder messages from schema; required channel. |
| Lifecycle | Stored/default → filtered selection → persists; driver `guid` protects self-edit uniqueness. |
| Summary | Label `Relationship to Policyholder:`; loose OPT-MT-25 lookup; third Drivers row. |
| Evidence | Unresolved — Unresolved scope (rows/membership): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:relationshipToPolicyHolderOptions`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:relationshipPolicyholderID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | CLR-001. |

#### MTS-06-Q13 — `postCode`

| Property | Exact contract |
|---|---|
| Position | After relationship; DriverPostCode address block. |
| Visible copy | `Postcode:`; placeholder `eg. SL4 1PD`; `Lookup`; conditional `Enter Manually`. |
| Control | CTL-MT-19 `DriverPostCode`. |
| Stored/emitted value | Uppercased, non-alphanumeric stripped, `fixPostcodeValue` string; empty `''`. |
| Options | Runtime lookup rows `{value,text}`; no fixed values. |
| Visible when | Always; result/manual subviews follow CTL-MT-19 state. |
| Enabled when | No disabled prop. |
| Required when | Always. |
| Constraints | Max10; exact postcode regex; test requires truthy `showAddress`, though source calls `createError` without `return`. |
| Errors | `Postcode is not valid.`; translated `You must either lookup your address or click Enter manually`; lookup failure `Address not found`. |
| Lifecycle | Defaults open manual mode when any default values exist; change clears postcode error; lookup sets `showAddress=false`; select/manual sets it true. |
| Summary | Postcode and address fields are omitted from Drivers summary. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:postCode`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:DriverPostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:postCode`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | CLR-008 |

#### MTS-06-Q14 — `houseNo`

| Property | Exact contract |
|---|---|
| Position | DriverPostCode manual/result block, first address field. |
| Visible copy | `House Number:` from `label.houseNo`. |
| Control | CTL-MT-19 native text, maxLength50. |
| Stored/emitted value | String; lookup may write returned `address1`/`undefined`. |
| Options | None. |
| Visible when | DriverPostCode manual mode. |
| Enabled when | Enabled. |
| Required when | Always in schema, even when manual fields are not rendered. |
| Constraints | String max50 required. |
| Errors | Yup max/required through manual FormError. |
| Lifecycle | Stored/default or lookup write → native string → persists. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:areas/setChosenAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:houseNo`. |
| Clarification | —. |

#### MTS-06-Q15 — `street`

| Property | Exact contract |
|---|---|
| Position | Manual address second. |
| Visible copy | `Street:`. |
| Control | CTL-MT-19 native text, maxLength50. |
| Stored/emitted value | String; lookup may write `address2`/`undefined`. |
| Options | None. |
| Visible when | Manual mode. |
| Enabled when | Enabled. |
| Required when | Always in schema. |
| Constraints | Max50 required. |
| Errors | Yup channel. |
| Lifecycle | Lookup/manual string persists. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:street`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:street`. |
| Clarification | —. |

#### MTS-06-Q16 — `town`

| Property | Exact contract |
|---|---|
| Position | Manual address third. |
| Visible copy | `Town:`. |
| Control | CTL-MT-19 native text, maxLength50. |
| Stored/emitted value | String/lookup value/`undefined`. |
| Options | None. |
| Visible when | Manual mode. |
| Enabled when | Enabled. |
| Required when | Never; `.notRequired()`. |
| Constraints | Max50. |
| Errors | Yup max channel. |
| Lifecycle | Lookup/manual value persists. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:town`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:town`. |
| Clarification | —. |

#### MTS-06-Q17 — `city`

| Property | Exact contract |
|---|---|
| Position | Manual address fourth. |
| Visible copy | `City:`. |
| Control | CTL-MT-19 native text, maxLength50. |
| Stored/emitted value | String/lookup value/`undefined`. |
| Options | None. |
| Visible when | Manual mode. |
| Enabled when | Enabled. |
| Required when | Never; `.notRequired()`. |
| Constraints | Max50. |
| Errors | Yup max channel. |
| Lifecycle | Lookup/manual value persists. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:city`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:city`. |
| Clarification | —. |

#### MTS-06-Q18 — `county`

| Property | Exact contract |
|---|---|
| Position | Manual address fifth/final. |
| Visible copy | `County:`. |
| Control | CTL-MT-19 native text, maxLength50. |
| Stored/emitted value | String/lookup value/`undefined`. |
| Options | None. |
| Visible when | Manual mode. |
| Enabled when | Enabled. |
| Required when | Always in schema. |
| Constraints | Max50 required. |
| Errors | Yup max/required channel. |
| Lifecycle | Lookup/manual value persists. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:county`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:county`. |
| Clarification | —. |

#### MTS-06-Q19 — `usageID`

| Property | Exact contract |
|---|---|
| Position | After postcode/address block. |
| Visible copy | `Vehicle Usage Required:`. |
| Control | CTL-MT-04 `RadioList`, size12. |
| Stored/emitted value | Strict option primitive; unmatched value leaves all unchecked. |
| Options | OPT-MT-26/55 source order and metadata unresolved. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric required; exact ID1 drives personal/other-vehicle prohibitions. |
| Errors | Yup required via FormError. |
| Lifecycle | Stored/default → click primitive → persists; affects Q31/Q32. |
| Summary | Omitted from Drivers summary. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:usageID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:usageID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`. |
| Clarification | CLR-001. |

#### MTS-06-Q20 — `gvwLimitID`

| Property | Exact contract |
|---|---|
| Position | After Q19. |
| Visible copy | `Gross vehicle weight limit:`. |
| Control | CTL-MT-01, `id="Gross Weight Limit"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-27/72; non-null producer GVW multiplied by 1000. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric required. |
| Errors | Yup required channel. |
| Lifecycle | Persists; SetValidators takes max raw selected ID then strict lookup to `gvwLimitDecimal`. |
| Summary | Omitted; feeds derived validator state. |
| Evidence | Unresolved — Unresolved scope (rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:gvwLimitID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverMaxGvw/driverListGvw`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:gvwLimitID`. |
| Clarification | CLR-001. |

#### MTS-06-Q21 — `isUKResidentSinceBirth`

| Property | Exact contract |
|---|---|
| Position | After Q20; parent of Q22. |
| Visible copy | `Have you been a UK resident since birth?`. |
| Control | CTL-MT-04; inline Yes=`true`, No=`false`. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed Yes then No. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required channel. |
| Lifecycle | Positive callback sets Q22 `null`; false mounts Q22. |
| Summary | Omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:isUKResidentSinceBirth`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:isUKResidentSinceBirth`. |
| Clarification | —. |

#### MTS-06-Q22 — `ukResidenceSince`

| Property | Exact contract |
|---|---|
| Position | Immediately after Q21 when visible. |
| Visible copy | `Length of UK residency:`; `dd/mm/yyyy`. |
| Control | CTL-MT-13; min1900-01-01, max today. |
| Stored/emitted value | Date/`undefined`; Q21 positive writes `null`. |
| Options | Calendar/manual. |
| Visible when | Q21 is not undefined and strict false. |
| Enabled when | Enabled. |
| Required when | Q21 strict false. |
| Constraints | Min1900; max now; cannot precede Q11 by day. |
| Errors | Min text; `Date you've moved to UK cannot be in the future`; `Entered date cannot be earlier than Date of Birth`; required channel. |
| Lifecycle | Conditional date → persists; hidden value only explicitly nulled by selecting Yes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ukResidenceSince`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:ukResidenceSince`. |
| Clarification | —. |

#### MTS-06-Q23 — `licenceTypeID`

| Property | Exact contract |
|---|---|
| Position | After residence group. |
| Visible copy | `Type of Licence:`. |
| Control | CTL-MT-01, `id="type_of_licence"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-28. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric; exact ID3 forbidden. |
| Errors | `We do not cover Provisional UK licences`; required channel. |
| Lifecycle | Selection persists; no callback clear. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:licenceTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:licenceTypeID`. |
| Clarification | CLR-001. |

#### MTS-06-Q24 — `licenseIssueDate`

| Property | Exact contract |
|---|---|
| Position | After Q23. |
| Visible copy | `Driving Licence Issue:`. |
| Control | CTL-MT-13, min1900-01-01, no max prop. |
| Stored/emitted value | Date/`undefined`. |
| Options | Calendar/manual. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Not before 17th birthday; policy-start experience floor; a driver below25 with experience below1 is forbidden. |
| Errors | Min text; dynamic `Driving Licence Issue Date cannot be earlier than DD/MM/YYYY`; `Young Drivers must have a UK Licence longer than 1 year.`; required. |
| Lifecycle | Change sets Q61/Q62 `null`; `hadLicense` uses floored policy-start diff. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:licenseIssueDate/hadLicense`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:licenseIssueDate`. |
| Clarification | —. |

#### MTS-06-Q25 — `motorcycleCoverID`

| Property | Exact contract |
|---|---|
| Position | After licence date; parent of Q26. |
| Visible copy | `Is Motorcycle Cover Required?`. |
| Control | CTL-MT-01, `id="Motorcycle Cover"`; callback. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-29/62. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Exact ID6 forbidden if age<30 or truthy motorcycle date yields held period<2. |
| Errors | Exact over-1000cc message; required channel. |
| Lifecycle | Selecting exact ID1 writes Q26 `null`; otherwise value persists and may mount Q26. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows/metadata): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:motorcycleCoverID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:motorcycleCoverID`. |
| Clarification | CLR-001. |

#### MTS-06-Q26 — `motorcycleLicenceIssueDate`

| Property | Exact contract |
|---|---|
| Position | Immediately after Q25 when visible. |
| Visible copy | `Motorcycle Licence Issue Date:`. |
| Control | CTL-MT-13, min1900-01-01, no max prop. |
| Stored/emitted value | Date/`undefined`; ID1 callback writes `null`. |
| Options | Calendar/manual. |
| Visible when | Q25 truthy and not strict ID1. |
| Enabled when | Enabled. |
| Required when | Q25 truthy and not ID1. |
| Constraints | Min1900 and not before Q24 by day. |
| Errors | Min text; `Motorcycle Licence Issue Date cannot be earlier than Driving Licence Issue Date`; type error `This field is required`; required. |
| Lifecycle | Conditional date persists; explicit null only on exact Q25 ID1 selection. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:motorcycleLicenceIssueDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:motorcycleLicenceIssueDate`. |
| Clarification | —. |

#### MTS-06-Q27 — `maxABIGroupID`

| Property | Exact contract |
|---|---|
| Position | After motorcycle group. |
| Visible copy | `What is the maximum ABI Group cover required for this driver?`. |
| Control | CTL-MT-01, `id="Max ABI Group Cover"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-30 source order. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Schema branches: age17–20/value>2 and age21–24/value>4 call `createError` without returning it; preserve source shape. |
| Errors | Declared `Chosen ABI Group is not valid for this driver.` plus required channel. |
| Lifecycle | Persists; SetValidators finds maximum stored ID, strict-lookups option text, slices last two characters, then `Number(...)`. |
| Summary | Omitted; validator-only projection. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:maxABIGroupID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:maxABIGroupID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:driverMaxAbi`. |
| Clarification | CLR-001; CLR-008 |

#### MTS-06-Q28 — `tradeEmploymentBasisID`

| Property | Exact contract |
|---|---|
| Position | After Q27; parent of occupation rows. |
| Visible copy | `Is the driver in the motor trade on a full time or part time basis? `. |
| Control | CTL-MT-04. |
| Stored/emitted value | Strict option primitive/undefined. |
| Options | OPT-MT-31 source order. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Numeric required; exact ID2 mounts occupations; selecting exact ID1 removes all occupation rows. |
| Errors | Yup required channel. |
| Lifecycle | Exact ID2 with empty array auto-appends one row; ID1 onChange removes array; persisted with driver. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:tradeEmploymentBasisID/fullTimeDriver`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:tradeEmploymentBasisID`. |
| Clarification | CLR-001. |

#### MTS-06-Q29 — `driverOccupations[].motortradeRoadRisksOccupationID`

| Property | Exact contract |
|---|---|
| Position | Each `Occupation N` row, first field. |
| Visible copy | `Additional Occupation`; heading `Occupation {index+1}`. |
| Control | CTL-MT-01, repeated `id="Occupation"`. |
| Stored/emitted value | Option primitive/`undefined`. |
| Options | OPT-MT-32 source order. |
| Visible when | Q28 strict ID2 and row exists. |
| Enabled when | Enabled. |
| Required when | Every existing row. |
| Constraints | Numeric required; array-wide strict-ID uniqueness. |
| Errors | Field required plus root error `Some occupations have been chosen multiple times.` at `customOccupationsError`. |
| Lifecycle | Auto/add defaults undefined; selection callback clears custom error; row persists/removes per MTS-06-R08. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverOccupations`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverOccupations/UniqueOccupations`. |
| Clarification | CLR-001. |

#### MTS-06-Q30 — `driverOccupations[].isBusinessUseRequired`

| Property | Exact contract |
|---|---|
| Position | Each Occupation row, second field. |
| Visible copy | `Business Use Required`. |
| Control | CTL-MT-04, Yes then No. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Q28 strict ID2 and row exists. |
| Enabled when | Enabled. |
| Required when | Every existing row. |
| Constraints | Boolean required. |
| Errors | Yup required channel. |
| Lifecycle | Defaults undefined; persists/removes with row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:isBusinessUseRequired`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverOccupations`. |
| Clarification | —. |

#### MTS-06-U03 — `customOccupationsError`

- Position and mount condition: after Q28 when Q28 strict ID2, before occupation rows.
- Kind: disabled custom root-error renderer.
- Exact observable contract: registered with `shouldUnregister` and `disabled`; renders `CustomError` for the array uniqueness message, which occupation selection/removal explicitly clears when present.
- Related questions/rules: MTS-06-Q29/Q30; MTS-06-R08.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:customOccupationsError`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:UniqueOccupations`.
- Clarification: —.

#### MTS-06-Q31 — `coverPersonalVehicle`

| Property | Exact contract |
|---|---|
| Position | After occupation block. |
| Visible copy | `Does this driver require cover for Personally Owned Vehicles? `. |
| Control | CTL-MT-04, Yes/No. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | True forbidden when Q19 strict ID1; false forbidden for relationship IDs1/4/3/5 when Q19 is not ID1. |
| Errors | Exact Motor-Trade-only prohibition and exact automatic-inclusion message. |
| Lifecycle | Boolean persists; no auto-correction. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:coverPersonalVehicle`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverPersonalVehicle`. |
| Clarification | —. |

#### MTS-06-Q32 — `coverDrivingOtherVehicles`

| Property | Exact contract |
|---|---|
| Position | After Q31. |
| Visible copy | `Does this driver require cover to drive other vehicles? `. |
| Control | CTL-MT-04, Yes/No. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | True forbidden for Q19 ID1 and age<21; false forbidden at age>=21 for relationship IDs1/4/3 when usage is not ID1. |
| Errors | Exact three schema messages; the free-cover branch calls `createError` without an explicit path. |
| Lifecycle | Boolean persists; no auto-correction. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:coverDrivingOtherVehicles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:coverDrivingOtherVehicles`. |
| Clarification | —. |

#### MTS-06-Q33 — `hasMotoringConvictions`

| Property | Exact contract |
|---|---|
| Position | After Q32; parent of motor-trading convictions. |
| Visible copy | `Has this driver been convicted of ANY motoring offences (other than parking) in the last 5 years, or have prosecutions or inquiries pending? `. |
| Control | CTL-MT-04, Yes/No; negative callback. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required channel. |
| Lifecycle | Truthy with empty array auto-appends default row; No removes all rows; deleting last row writes false. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasMotoringConvictions`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverMotortradingConvictions`. |
| Clarification | —. |

#### MTS-06-Q34 — `driverMotortradingConvictions[].convictionDate`

| Property | Exact contract |
|---|---|
| Position | `Conviction N`, first field. |
| Visible copy | `Conviction Date:`. |
| Control | CTL-MT-13, min1900. |
| Stored/emitted value | Date/undefined; new row `null`. |
| Options | Calendar/manual. |
| Visible when | Q33 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Min 01/01/1900. |
| Errors | Min text and required channel. |
| Lifecycle | Default null → date → row persistence/removal. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:convictionDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverMotortradingConvictions`. |
| Clarification | —. |

#### MTS-06-Q35 — `driverMotortradingConvictions[].driverMotortradingConvictionCodeID`

| Property | Exact contract |
|---|---|
| Position | Conviction row second. |
| Visible copy | `Conviction Code:`. |
| Control | CTL-MT-01, repeated `id="Conviction Code"`. |
| Stored/emitted value | Primitive/undefined; new row `''`. |
| Options | OPT-MT-33. |
| Visible when | Q33 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup required/type channel. |
| Lifecycle | Empty string → option primitive → row persists. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverMotortradingConvictionCodeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverMotortradingConvictions`. |
| Clarification | CLR-001. |

#### MTS-06-Q36 — `driverMotortradingConvictions[].fineAmount`

| Property | Exact contract |
|---|---|
| Position | Conviction row third. |
| Visible copy | `Fine Amount:` with £ prefix. |
| Control | CTL-MT-10 `TextFieldCurrency`. |
| Stored/emitted value | Number/undefined; new row `''`. |
| Options | None. |
| Visible when | Q33 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required; no range. |
| Errors | Yup number/required channel. |
| Lifecycle | Empty → masked number → row persists. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:fineAmount`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:fineAmount`. |
| Clarification | —. |

#### MTS-06-Q37 — `driverMotortradingConvictions[].points`

| Property | Exact contract |
|---|---|
| Position | Conviction row fourth. |
| Visible copy | `Points:`. |
| Control | CTL-MT-09. |
| Stored/emitted value | Number or `''`; new row `''`. |
| Options | None. |
| Visible when | Q33 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Digits/numeric required; no range. |
| Errors | Yup number/required channel. |
| Lifecycle | Empty → digits-as-number → persists. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:points`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:points`. |
| Clarification | —. |

#### MTS-06-Q38 — `driverMotortradingConvictions[].disqualified`

| Property | Exact contract |
|---|---|
| Position | Conviction row fifth; parent of Q39. |
| Visible copy | `Disqualified`. |
| Control | CTL-MT-04, Yes/No. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Q33 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | If true and conviction date + truthy ban length end after policy start, driver is ineligible. |
| Errors | `Driver can not be added to policy whilst on a ban.`; required. |
| Lifecycle | Selecting false writes Q39 `undefined`; value persists with row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:disqualified`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:disqualified`. |
| Clarification | —. |

#### MTS-06-Q39 — `driverMotortradingConvictions[].banLength`

| Property | Exact contract |
|---|---|
| Position | Conviction row sixth when visible. |
| Visible copy | `Ban Length (months):`. |
| Control | CTL-MT-09, maxLength4. |
| Stored/emitted value | Number or `''`; false Q38 writes `undefined`. |
| Options | None. |
| Visible when | Q38 truthy. |
| Enabled when | Enabled. |
| Required when | Q38 truthy. |
| Constraints | Digits, max four input characters; schema numeric. |
| Errors | Type error `This field is required`; required channel. |
| Lifecycle | New row `''`; false parent clears undefined; used as months in ban-end calculation. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:banLength`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:banLength`. |
| Clarification | —. |

#### MTS-06-Q40 — `hasClaimsOrAccidents`

| Property | Exact contract |
|---|---|
| Position | After conviction family. |
| Visible copy | `Has the driver had any accidents or claims in the past 5 years, regardless of fault or whether a claim was made? `. |
| Control | CTL-MT-04; negative callback. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed Yes/No. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required channel. |
| Lifecycle | Truthy empty array auto-appends; No removes all; last-row delete writes false. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasClaimsOrAccidents`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | —. |

#### MTS-06-Q41 — `driverClaims[].claimDate`

| Property | Exact contract |
|---|---|
| Position | `Claim N`, first. |
| Visible copy | `Claim Date:`. |
| Control | CTL-MT-13, min1900. |
| Stored/emitted value | Date/undefined; default null. |
| Options | Calendar/manual. |
| Visible when | Q40 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Min1900. |
| Errors | Min text/required. |
| Lifecycle | Default null → date → persists/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverClaims.claimDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | —. |

#### MTS-06-Q42 — `driverClaims[].claimTypeID`

| Property | Exact contract |
|---|---|
| Position | Claim row second. |
| Visible copy | `Claim Type:`. |
| Control | CTL-MT-01, repeated `id="Claim Type"`. |
| Stored/emitted value | Primitive/undefined; default `''`. |
| Options | OPT-MT-34. |
| Visible when | Q40 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup number/required. |
| Lifecycle | Empty → selection → persists. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:claimTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | CLR-001. |

#### MTS-06-Q43 — `driverClaims[].description`

| Property | Exact contract |
|---|---|
| Position | Claim row third. |
| Visible copy | `Description:`. |
| Control | CTL-MT-08. |
| Stored/emitted value | String; default `''`. |
| Options | None. |
| Visible when | Q40 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | String required; no max. |
| Errors | Yup required. |
| Lifecycle | Text persists/removes with row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:description`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | —. |

#### MTS-06-Q44 — `driverClaims[].totalCost`

| Property | Exact contract |
|---|---|
| Position | Claim row fourth. |
| Visible copy | `Total Cost:` with £ prefix. |
| Control | CTL-MT-10. |
| Stored/emitted value | Number/undefined; default `''`. |
| Options | None. |
| Visible when | Q40 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required; no range. |
| Errors | Yup number/required. |
| Lifecycle | Masked numeric persists. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:totalCost`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | —. |

#### MTS-06-Q45 — `driverClaims[].claimStatusID`

| Property | Exact contract |
|---|---|
| Position | Claim row fifth/final. |
| Visible copy | `Claim Status:`. |
| Control | CTL-MT-01, repeated `id="claim_status"`. |
| Stored/emitted value | Primitive/undefined; default null. |
| Options | OPT-MT-35. |
| Visible when | Q40 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup number/required. |
| Lifecycle | Null → selection → persists. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:claimStatusID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`. |
| Clarification | CLR-001. |

#### MTS-06-Q46 — `hasReportedDisability`

| Property | Exact contract |
|---|---|
| Position | After claims family; parent of Q47. |
| Visible copy | `Does the driver have any disability that has been reported to the DVLA and/or hold a restricted licence? `. |
| Control | CTL-MT-04; negative callback. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required. |
| Lifecycle | False selection sets Q47 null; truthy mounts Q47. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasReportedDisability`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:hasReportedDisability`. |
| Clarification | —. |

#### MTS-06-Q47 — `hasReportedDisabilityDetails`

| Property | Exact contract |
|---|---|
| Position | Immediately after Q46 when truthy. |
| Visible copy | `Please provide details:`. |
| Control | CTL-MT-08, maxLength50. |
| Stored/emitted value | String; parent No writes null. |
| Options | None. |
| Visible when | Q46 truthy. |
| Enabled when | Enabled. |
| Required when | Schema watches misspelled `driverPlahasReportedDisabilitynId`, not Q46; only truthy misspelled value requires it. |
| Constraints | Max50. |
| Errors | Yup max and conditional required channel. |
| Lifecycle | Visible text may be blank without schema requirement; false Q46 explicitly nulls. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasReportedDisabilityDetails`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverPlahasReportedDisabilitynId`. |
| Clarification | —. |

#### MTS-06-Q48 — `hasCriminalConvictions`

| Property | Exact contract |
|---|---|
| Position | After disability group. |
| Visible copy | `Does this driver have any criminal conviction not spent under the Rehabilitation of Offenders Act or have any prosecutions pending? `. |
| Control | CTL-MT-04; negative callback. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required. |
| Lifecycle | Truthy empty array auto-appends; No removes all; last-row delete writes false. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasCriminalConvictions`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`. |
| Clarification | —. |

#### MTS-06-Q49 — `criminalConvictions[].convictionDate`

| Property | Exact contract |
|---|---|
| Position | Criminal `Conviction N`, first. |
| Visible copy | `Conviction Date:`. |
| Control | CTL-MT-13, min1900. |
| Stored/emitted value | Date/undefined; default null. |
| Options | Calendar/manual. |
| Visible when | Q48 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Min1900. |
| Errors | Min/required channel. |
| Lifecycle | Date persists/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:criminalConvictions.convictionDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`. |
| Clarification | —. |

#### MTS-06-Q50 — `criminalConvictions[].criminalConvictionCodeID`

| Property | Exact contract |
|---|---|
| Position | Criminal row second. |
| Visible copy | `Conviction Code:`. |
| Control | CTL-MT-01, repeated `id="Conviction Code2"`. |
| Stored/emitted value | Primitive/undefined; default `''`. |
| Options | OPT-MT-36. |
| Visible when | Q48 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup number/required. |
| Lifecycle | Empty → selection → persists. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:criminalConvictionCodeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`. |
| Clarification | CLR-001. |

#### MTS-06-Q51 — `criminalConvictions[].sentenceLengthYear`

| Property | Exact contract |
|---|---|
| Position | Criminal row third. |
| Visible copy | `Sentence Length (years):`. |
| Control | CTL-MT-09. |
| Stored/emitted value | Number or `''`; default `''`. |
| Options | None. |
| Visible when | Q48 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required, no range. |
| Errors | Yup number/required. |
| Lifecycle | Digits persist/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:sentenceLengthYear`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`. |
| Clarification | —. |

#### MTS-06-Q52 — `criminalConvictions[].sentenceLengthMonth`

| Property | Exact contract |
|---|---|
| Position | Criminal row fourth/final. |
| Visible copy | `Sentence Length (months):`. |
| Control | CTL-MT-09. |
| Stored/emitted value | Number or `''`; default `''`. |
| Options | None. |
| Visible when | Q48 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required, no range. |
| Errors | Yup number/required. |
| Lifecycle | Digits persist/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:sentenceLengthMonth`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`. |
| Clarification | —. |

#### MTS-06-Q53 — `hasCCJs`

| Property | Exact contract |
|---|---|
| Position | After criminal family; parent of CCJ rows. |
| Visible copy | `Has the driver ever been the subject of a County Court Judgement and/or ever been cited in any unsatisfied court judgments (or the Scottish equivalent)? `. |
| Control | CTL-MT-04; negative callback. |
| Stored/emitted value | Boolean/undefined. |
| Options | Fixed. |
| Visible when | Always. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean required. |
| Errors | Yup required. |
| Lifecycle | Truthy empty array auto-appends; No removes all; deleting the last row writes `ccj=false`, not `hasCCJs`. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:hasCCJs/handleRemoveCCJ`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`. |
| Clarification | —. |

#### MTS-06-Q54 — `countyCourtJudgements[].ccjDate`

| Property | Exact contract |
|---|---|
| Position | `CCJ N`, first. |
| Visible copy | `Date:`. |
| Control | CTL-MT-13, min1900. |
| Stored/emitted value | Date/undefined; default null. |
| Options | Calendar/manual. |
| Visible when | Q53 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Min1900. |
| Errors | Min/required. |
| Lifecycle | Date persists/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ccjDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`. |
| Clarification | —. |

#### MTS-06-Q55 — `countyCourtJudgements[].countyCourtJudgementStatusID`

| Property | Exact contract |
|---|---|
| Position | CCJ row second. |
| Visible copy | `Status:`. |
| Control | CTL-MT-01, repeated `id="CCJ Status"`. |
| Stored/emitted value | Primitive/undefined; default `''`. |
| Options | OPT-MT-37. |
| Visible when | Q53 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup number/required. |
| Lifecycle | Empty → selection → persists. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:countyCourtJudgementStatusID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`. |
| Clarification | CLR-001. |

#### MTS-06-Q56 — `countyCourtJudgements[].amount`

| Property | Exact contract |
|---|---|
| Position | CCJ row third. |
| Visible copy | `Amount:` with £ prefix. |
| Control | CTL-MT-10. |
| Stored/emitted value | Number/undefined; default `''`. |
| Options | None. |
| Visible when | Q53 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | Numeric required. |
| Errors | Yup number/required. |
| Lifecycle | Masked numeric persists. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:countyCourtJudgements.amount`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`. |
| Clarification | —. |

#### MTS-06-Q57 — `countyCourtJudgements[].circumstances`

| Property | Exact contract |
|---|---|
| Position | CCJ row fourth/final. |
| Visible copy | `Circumstances:`. |
| Control | CTL-MT-08. |
| Stored/emitted value | String; default `''`. |
| Options | None. |
| Visible when | Q53 truthy and row exists. |
| Enabled when | Enabled. |
| Required when | Each row. |
| Constraints | String required; no max. |
| Errors | Yup required. |
| Lifecycle | Text persists/removes. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:circumstances`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`. |
| Clarification | —. |

#### MTS-06-Q58 — `ageAdditionalExcess`

| Property | Exact contract |
|---|---|
| Position | `Young Driver Details`, first field. |
| Visible copy | `An additional excess of {{additionalExcess}} will apply to {{firstName || ''}} {{surname || ''}} due to their age.  Do you wish to remove this excess for an additional premium? `. |
| Control | CTL-MT-04, Yes/No. |
| Stored/emitted value | Boolean; DOB change writes null. |
| Options | Fixed; interpolated excess from OPT-MT-22/66. |
| Visible when | Truthy coercion of `driverAge < 25`, and cover level not strict ID3. |
| Enabled when | Enabled. |
| Required when | Truthy DOB, policy-start age<25, cover level not ID3, and value null/undefined. |
| Constraints | Custom `bandValid`; no forced value. |
| Errors | Exact `This is a required field`. |
| Lifecycle | DOB edit nulls; visible answer persists only when young/non-top; submit otherwise writes null. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (formatted excess): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ageAdditionalExcess/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:ageAdditionalExcess`; `OPT-MT-66`. |
| Clarification | CLR-001. |

#### MTS-06-Q59 — `ageIndemnityLimitID`

| Property | Exact contract |
|---|---|
| Position | Young Driver Details, second field when options exist. |
| Visible copy | Standard policy limit `{{excessLimit}}`, restriction `{{defaultAdditionalIndemnity}}`, full name, and increase-for-premium prompt exactly as `mtlabel.young_q2`. |
| Control | CTL-MT-04 with dynamic OPT-MT-67 rows. |
| Stored/emitted value | Option primitive; DOB change writes null. |
| Options | Age band via ageFrom||0/ageTo||1000; `indemnities` filtered to truthy numericValue `<= policyIndemnityLimit`. |
| Visible when | Age<25, cover not ID3, filtered length>=1. |
| Enabled when | Enabled. |
| Required when | Age<=24, cover not ID3, and allowed length>0. |
| Constraints | Required and `Number`-normalized membership in allowed values. |
| Errors | `This is a required field`; `Selected Age Indemnity Limit is not valid for this age`. |
| Lifecycle | DOB nulls; selection persists; submit writes null unless young/non-top/options exist. |
| Summary | Omitted; `driversFlatten` may omit stored key when selected numeric limit exceeds policy limit. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:youngDriverOptions/ageIndemnityLimitID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:ageIndemnityLimitID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`. |
| Clarification | CLR-001. |

#### MTS-06-Q60 — `ageIncreaseVehicleCCID`

| Property | Exact contract |
|---|---|
| Position | Young Driver Details final field. |
| Visible copy | `{{fullName}} is restricted to drive vehicles up to a maximum of {{defaultCc}}. Do you wish to increase this restriction for an additional premium?`. |
| Control | CTL-MT-04 with OPT-MT-68 rows. |
| Stored/emitted value | Option primitive; DOB change writes null. |
| Options | Selected young age-band `cCs || []`. |
| Visible when | Truthy coercion of age<25, including cover ID3. |
| Enabled when | Enabled. |
| Required when | Truthy DOB and age<25. |
| Constraints | Required; if allowed length>0, `Number`-normalized membership. |
| Errors | `This is a required field`; `Vehicle CC limit is not valid for this driver's age`. |
| Lifecycle | DOB nulls; submit keeps only while young, otherwise null. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows/label): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ageIncreaseVehicleCCID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:ageIncreaseVehicleCCID`; `OPT-MT-68/70`. |
| Clarification | CLR-001. |

#### MTS-06-Q61 — `experienceBasedExcessID`

| Property | Exact contract |
|---|---|
| Position | `UK Licence for less than 1 year`, first field when options exist. |
| Visible copy | Exact `mtlabel.uk_licence_q1`, interpolating full name, first source-order OPT-MT-38 text as `indemnity`, and selected policy `excessLimit`. |
| Control | CTL-MT-04. |
| Stored/emitted value | Option primitive; DOB/licence change writes null. |
| Options | OPT-MT-38/71 filtered to truthy numericValue `<= policyIndemnityLimit` (DriverPlan revalidation uses strict `<`). |
| Visible when | Floored policy-start licence experience<1, driver age>24, cover not ID3, and filtered length>=1. |
| Enabled when | Enabled. |
| Required when | Same age/experience/non-top path when options length>=1. |
| Constraints | Custom required only; schema does not membership-check selected value. |
| Errors | Exact `This is a required field`. |
| Lifecycle | DOB/licence edits null; submit keeps only for inexperienced age>24/non-top/options, otherwise null. |
| Summary | Omitted; driversFlatten may omit if selected numeric value exceeds policy limit. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:experienceExcessOptions/experienceBasedExcessID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:experienceExcessOptions`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:experienceBasedExcessID`. |
| Clarification | CLR-001. |

#### MTS-06-Q62 — `experienceIncreaseVehicleCCLimitID`

| Property | Exact contract |
|---|---|
| Position | UK Licence for less than 1 year, final field. |
| Visible copy | Exact `mtlabel.uk_licence_q2`, full name and first source-order option text. |
| Control | CTL-MT-04. |
| Stored/emitted value | Option primitive; DOB/licence change writes null. |
| Options | OPT-MT-39 source order. |
| Visible when | Floored licence experience<1 and driver age>24, including cover ID3. |
| Enabled when | Enabled. |
| Required when | Age>24, experience<1, and value falsey. |
| Constraints | Custom required; no membership test. |
| Errors | Exact `This is a required field`. |
| Lifecycle | DOB/licence edits null; submit keeps only while inexperienced age>24, otherwise null. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:experienceIncreaseVehicleCCLimitID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:experienceIncreaseVehicleCCLimitID`. |
| Clarification | CLR-001. |

#### MTS-06-U04 — Young and inexperienced headings

- Position and mount condition: after CCJs. `Young Driver Details` mounts for truthy `(driverAge < 25)`; `UK Licence for less than 1 year` mounts for truthy `(hadLicense < 1) && driverAge > 24`; each is preceded by the mounted primary border.
- Kind: conditional section headings.
- Exact observable contract: h4 headings with the exact translated text; no field error belongs to the heading.
- Related questions/rules: MTS-06-Q58–Q62; MTS-06-R03.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:young_driver/uk_licence_less`.
- Clarification: —.

#### MTS-06-R03 — Age, licence experience, and derived young-driver band

- Trigger: `driverAge` and `hadLicense` are floored fractional year differences from `proposerPolicyStartDate` after each watched date is formatted `YYYY-MM-DD`; birth control also displays policy-start age without the detail component's separate truthy guards.
- Evaluation point: render, DOB/licence callbacks, DriverDetailSchema, submit clean, and StepSummary.
- Affected fields: Q11, Q24, Q58–Q62.
- Raw-state effect: date edits set all dependent fields named in Q11/Q24 to null; submit keeps each only under its field-specific predicate and otherwise writes null.
- Projection effect: young configuration uses the first band satisfying `(ageFrom || 0) <= age <= (ageTo || 1000)`; summary ignores that age and recomputes displayed age against `dayjs()`.
- User-visible result/error: exact field copy/errors are in Q11/Q24/Q58–Q62; no culture-specific excess or unresolved option label is invented.
- Evidence: Unresolved — Direct and bounded-dependency sources establish the known behavior; CLR-linked inputs remain unavailable: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:driverAge/hadLicense/youngDriverOptions/cleaned`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:ageAt/findAgeRange`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:driverAge`; OPT-MT-22/64–70.
- Clarification: CLR-001 only for option text/currency rendering.

#### MTS-06-R04 — Relationship, usage, and personal/other-vehicle conditions

- Trigger: exact relationship IDs 1/3/4/5, usage ID1, and floored policy-start ages 21/25.
- Evaluation point: relationship schema tests and Q31/Q32 custom tests.
- Affected fields: Q12, Q19, Q31, Q32.
- Raw-state effect: validation does not auto-correct; accepted primitives persist.
- Projection effect: only Q12 is shown in summary through loose option lookup.
- User-visible result/error: preserve every exact message stated on the four question records, including the schema's differing spouse test name/message and missing explicit path on one Q32 branch.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:relationshipPolicyholderID/coverPersonalVehicle/coverDrivingOtherVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: CLR-001 for relationship/usage rows.

#### MTS-06-R05 — Residence, licence, motorcycle, ABI, GVW, and CC conditions

- Trigger: Q21 false, Q23 ID3, Q25 IDs1/6, policy-start ages/held periods, Q27 age thresholds, plus selected dynamic metadata.
- Evaluation point: render/callback/schema, later `SetValidators`, and downstream vehicle validators.
- Affected fields: Q20–Q27 plus Q05–Q07.
- Raw-state effect: positive residence and motorcycle ID1 callbacks null dependent dates; other accepted values persist.
- Projection effect: `SetValidators` derives list/plan ABI and GVW only; OPT-MT-21/29 `maxCC` remains a downstream comparison input rather than a summary value.
- User-visible result/error: all source-declared field errors remain on their question records; Q27's non-returned createError branches are not repaired.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; OPT-MT-19–21/27/29/30/51/52/62/72.
- Clarification: CLR-001 for option rows/metadata values.

#### MTS-06-R06 — Disability schema identifier mismatch

- Trigger: render watches `hasReportedDisability`, while schema requiredness watches exact absent/misspelled sibling `driverPlahasReportedDisabilitynId`.
- Evaluation point: render, negative callback, validation.
- Affected fields: Q46/Q47.
- Raw-state effect: negative answer writes details null; a truthy Q46 alone does not satisfy the schema's named dependency.
- Projection effect: neither field is summarized.
- User-visible result/error: Q47 is visible for truthy Q46 but its required rule is attached to the misspelled identifier; no correction or external Yup result is asserted.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:anyDisability`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:hasReportedDisabilityDetails/driverPlahasReportedDisabilitynId`.
- Clarification: —.

#### MTS-06-R07 — Detail create/edit/revalidation and navigation

- Trigger: valid Next, classified as existing raw index, first ever driver (`!formData.drivers`), or append (`drivers` exists but no row at index).
- Evaluation point: `onSubmit` after field-specific cleaning.
- Affected fields: Q08–Q62, generated `guid`, stored drivers, and MTS-06 route state.
- Raw-state effect: edit maps/replaces one raw index; first/append adds UUID `guid`; later-row revalidation uses the pre-existing `formData` closure after `setData`. A last edited row returns immediately to C; another row recursively validates from `editingDriver+1`.
- Projection effect: normal success opens C; a later failure scrolls, clears loading, briefly opens L, then after 50ms opens the failing raw index in B with `navigateList:true`.
- User-visible result/error: Next is native submit; Back saves nothing and routes to A for `navigateList` or no drivers, otherwise C.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:onSubmit/goBackToDriverPlan`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`.
- Clarification: —.

#### MTS-06-R08 — Driver occupation repeated-row contract

- Trigger: Q28 strict ID2; effect sees zero rows; add requires length>0 and `<5`; X mounts only index>0.
- Evaluation point: effect, selection/removal, validation, submit.
- Affected fields: Q29/Q30 and U03.
- Raw-state effect: auto/add row is `{motortradeRoadRisksOccupationID:undefined,isBusinessUseRequired:undefined}`; selecting Q28 ID1 removes all rows; X removes only selected index and clears custom error if present.
- Projection effect: none; stored array is omitted from Drivers summary.
- User-visible result/error: indexed `Occupation N`, first row cannot be individually removed, `Add another occupation`, max five; strict duplicate IDs produce exact custom error.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:occupationFields`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverOccupations/UniqueOccupations`.
- Clarification: CLR-001 for occupation rows only.

#### MTS-06-U05 — MTS-06B navigation

- Position and mount condition: final detail block, always in B.
- Kind: buttons.
- Exact observable contract: native primary `Next`, then native link-styled `Go Back`; Back performs no form write.
- Related questions/rules: MTS-06-R07.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:detail navigation`; `CleggGifford.CoverX.UI/src/i18n/en/common.json:next`; `CleggGifford.CoverX.UI/src/i18n/en/label.json:go_back`.
- Clarification: —.

#### MTS-06-R09 — Driver detail condition-family matrix

- Trigger: any Driver Details render, schema validation, callback, submit-clean, list projection, or Summary projection that consults one of the ten condition families in the matrix.
- Evaluation point: the exact React/Yup/store/projection expressions named by each matrix row; the matrix groups them but does not replace their owning Q/R records.
- Affected fields: Q05–Q07, Q09–Q13, Q19–Q32, Q33–Q62 and their repeated history arrays.
- Raw-state effect: none by this matrix itself; the owning records specify every clear, append, removal, derivation, and retained value.
- Projection effect: routes each dependency family to its list, `SetValidators`, `driversFlatten`, or MTS-14 outcome exactly as the matrix states.
- User-visible result/error: no separate UI or error; the affected Q records own copy, visibility, controls, and error channels.
- Evidence: Unresolved — direct Driver Details/Yup/projection sources establish the predicates while CLR-001 bounds unavailable option rows: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: CLR-001.

| Family | Exact trigger/dependency | Mounted/raw/projection result | Records |
|---|---|---|---|
| Identity and age | Policy-start DOB diff; ages 17, 21, 25, 30, 85 and summary-now age are distinct expressions. | Drives relationship/use/licence/motorcycle/young/experience rules; DOB summary only. | Q09–Q12, Q24–Q25, Q58–Q62; R03/R04. |
| Relationship and company | Strict company-type relationship membership; exact relationship IDs 1/3/4/5. | Filters options, enforces uniqueness/spouse/use rules; loose summary lookup. | Q12/Q31/Q32; OPT-MT-03/25/50. |
| Address and residence | DriverPostCode `showAddress`; Q21 strict false; birth/residence date order. | Lookup/manual writes raw address; summary omits all address/residence fields. | Q13–Q22. |
| Licence and motorcycle | Q23 ID3; issue date vs 17th birthday; Q25 truthy/not1 and ID6 age/held test. | Conditional motorcycle date, exact errors, raw date retention/nulling. | Q23–Q26. |
| ABI/GVW/CC | Raw max option IDs, text suffix parsing, selected metadata and young/experience CC lists. | SetValidators writes ABI/GVW stores; CC stays raw/downstream; summary omits. | Q05–Q07/Q20/Q25/Q27/Q60/Q62; R05. |
| Employment/occupations | Q28 exact ID2/ID1 and strict duplicate occupation IDs. | Repeated raw array with max5/custom error; no summary. | Q28–Q30; R08. |
| Personal/other use | Q19 ID1, relationship IDs, age21. | Validation only; no automatic normalization or summary row. | Q19/Q31/Q32; R04. |
| Histories | Parent booleans plus per-array effects/removers. | Separate conviction/claim/criminal/CCJ arrays; task-specific raw mutations; no summary. | Q33–Q57; MTS-06-R10–R13. |
| Disability | Q46 render versus misspelled schema dependency. | Visible-but-not-required path preserved; false clears details. | Q46/Q47; R06. |
| Young/experience | Age<25; age>24 plus licence<1; cover ID3 and dynamic-option-length gates. | Field-specific nulling, requiredness and allowed-value tests; no summary. | Q58–Q62; R03. |

#### MTS-06-U06 — Driver summary projection

- Position and mount condition: MTS-14 `Drivers` `SummaryCollapser`, always as the section component; zero/absent drivers yield no child rows.
- Kind: summary projection.
- Exact observable contract: source-order raw `formData.drivers.map`; each row shows `firstName + ' ' + surname`, then `Date of Birth:` as `DD/MM/YYYY (Math.floor(dayjs().diff(dateOfBirth,'years',true)) yrs old)`, then `Relationship to Policyholder:` from loose OPT-MT-25 lookup. A blue divider follows every row except the last. All other MTS-06 questions/arrays/plan values are omitted.
- Related questions/rules: MTS-06-Q09–Q12; MTS-06-R03/R04/R07.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: CLR-001 only for relationship label.

#### AUD-MT-01 — MTS-06 option-consumer backlinks

- Audit position: documentation-only ledger after MTS-06-R09; it has no mounted React node.
- Purpose: option-consumer traceability ledger.
- Assertion: no independent user-visible output; the table maps every MTS-06 dynamic option dependency to its stable consumer without supplying unavailable row values.
- Coverage: MTS-06 Q01–Q62, R01–R09, OPT-MT-03/09/10/16–39/50–52/62/64–72.
- Evidence: Unresolved — mounted consumers are direct, while option rows/metadata remain CLR-001: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:DriverPlan`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`.
- Clarification: CLR-001.

This ledger supplements the canonical OPT-MT records above with stable MTS-06 consumers; unresolved dynamic rows remain under CLR-001 rather than being copied here.

| OPT record | MTS-06 consumers |
|---|---|
| OPT-MT-03/50 | Q12, R04/R09 |
| OPT-MT-09/10/71 | Q58/Q59/Q61, R03; policy-limit derivation |
| OPT-MT-16 | Q01, R01 |
| OPT-MT-17 | Q03 |
| OPT-MT-18 | Q04 |
| OPT-MT-19/51 | Q05, R05 |
| OPT-MT-20/52 | Q06, R05 |
| OPT-MT-21/62 | Q07/Q25, R05 |
| OPT-MT-22/64–70 | Q58–Q60, R03 |
| OPT-MT-23 | Q59 and downstream omission |
| OPT-MT-24 | Q08 |
| OPT-MT-25 | Q12, U06 |
| OPT-MT-26/55 | Q19, R04 |
| OPT-MT-27/72 | Q20, R05 |
| OPT-MT-28 | Q23 |
| OPT-MT-29/62 | Q25, R05 |
| OPT-MT-30 | Q27, R05 |
| OPT-MT-31 | Q28/R08 |
| OPT-MT-32 | Q29/R08 |
| OPT-MT-33 | Q35 |
| OPT-MT-34 | Q42 |
| OPT-MT-35 | Q45 |
| OPT-MT-36 | Q50 |
| OPT-MT-37 | Q55 |
| OPT-MT-38/71 | Q61/R03 |
| OPT-MT-39 | Q62/R03 |

#### MTS-06-R10 — MTS-06A/B bidirectional reconciliation

- Trigger: Task 1 source-ledger audit.
- Evaluation point: documentation verification.
- Affected fields: Q01–Q62, U01–U06, R01–R09, and AUD-MT-01.
- Raw-state effect: none; documentation only.
- Projection effect: UI→schema maps every mounted Controller/native address field to Q01–Q62; schema→UI maps every `DriverPlanSchema`/`DriverDetailSchema` path to a mounted Q record, except state-only `showAddress`, generated `guid`, and exact misspelled dependency `driverPlahasReportedDisabilitynId`, which are explicit in Q13/R06/R07. Field→summary and summary→field map only Q09–Q12 to U06. Option→consumer and consumer→option map through AUD-MT-01.
- User-visible result/error: no source item is assigned invented copy, option rows, or summary output.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:DriverPlan`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:DriverPostCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema/DriverDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: CLR-001/CLR-007 remain localized.

#### MTS-06-R11 — Motor-trading-conviction repeated-row contract

- Trigger: Q33 truthy; effect sees zero rows. Add mounts while truthy, length>0 and `< driverFieldLimits` where the constant is 100; X mounts only for index>0.
- Evaluation point: effect, Add/X, parent No, disqualified change, validation and driver submit.
- Affected fields: Q33–Q39.
- Raw-state effect: auto/add defaults are `{convictionDate:null,driverMotortradingConvictionCodeID:'',fineAmount:'',points:'',disqualified:undefined,banLength:''}`. Parent No removes all. X removes only its index; if pre-removal length is one, handler also writes Q33 false. False Q38 writes its row's ban length `undefined`.
- Projection effect: stored array is neither DriverCard nor MTS-14 summary content.
- User-visible result/error: indexed `Conviction N`; first row cannot be individually removed; Add copy `Add another conviction`; field/schema errors are Q34–Q39. No array min/max schema exists beyond mounted effect/Add guard.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:convictionFields/handleRemoveConviction`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverMotortradingConvictions`.
- Clarification: CLR-001 for conviction-code rows only.

#### MTS-06-R12 — Claim repeated-row contract

- Trigger: Q40 truthy; effect sees zero rows. Add while truthy, length>0 and `<100`; X only index>0.
- Evaluation point: effect, Add/X, parent No, validation and submit.
- Affected fields: Q40–Q45.
- Raw-state effect: auto/add defaults `{claimDate:null,claimTypeID:'',totalCost:'',description:'',claimStatusID:null}`; parent No removes all; X removes its index and last-row handler writes Q40 false.
- Projection effect: entire raw array is omitted from DriverCard and MTS-14 Drivers summary.
- User-visible result/error: indexed `Claim N`; first row cannot be individually removed; Add `Add another claim / accident`; no array min/max schema.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:claimFields/handleRemoveClaim`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:driverClaims`.
- Clarification: CLR-001 for type/status rows.

#### MTS-06-R13 — Disability-detail non-array contract

- Trigger: Q46 truthy/false.
- Evaluation point: render, negative callback, validation.
- Affected fields: Q46/Q47.
- Raw-state effect: Q47 is a single string, not an array-backed structure; Q46 false writes it null.
- Projection effect: both are omitted from card/summary.
- User-visible result/error: no indexed heading, add/remove/min/max/uniqueness contract exists; the schema mismatch remains R06.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:anyDisability`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:hasReportedDisabilityDetails`.
- Clarification: —.

#### MTS-06-R14 — Criminal-conviction repeated-row contract

- Trigger: Q48 truthy; effect sees zero rows. Add while truthy, length>0 and `<100`; X only index>0.
- Evaluation point: effect, Add/X, parent No, validation/submit.
- Affected fields: Q48–Q52.
- Raw-state effect: defaults `{convictionDate:null,criminalConvictionCodeID:'',sentenceLengthYear:'',sentenceLengthMonth:''}`; No removes all; X removes its index and last-row handler writes Q48 false.
- Projection effect: array omitted from DriverCard/summary.
- User-visible result/error: indexed `Conviction N` (same copy as motor-trading rows); first cannot be individually removed; Add reuses `Add another conviction`; no array cardinality schema.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:criminalFields/handleRemoveCriminal`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:criminalConvictions`.
- Clarification: CLR-001 for criminal-code rows.

#### MTS-06-R15 — CCJ repeated-row contract and `ccj` write

- Trigger: Q53 truthy; effect sees zero rows. Add while truthy, length>0 and `<100`; X only index>0.
- Evaluation point: effect, Add/X, parent No, validation/submit.
- Affected fields: Q53–Q57 plus state-only `ccj`.
- Raw-state effect: defaults `{ccjDate:null,countyCourtJudgementStatusID:'',amount:'',circumstances:''}`; parent No removes all. X removes its index; when pre-removal length is one, the handler writes exact field `ccj=false` rather than Q53 `hasCCJs=false`, so Q53 can remain truthy and the empty-array effect can append a replacement row.
- Projection effect: array and stray `ccj` are omitted from DriverCard/summary.
- User-visible result/error: indexed `CCJ N`; first cannot be individually removed; Add `Add another CCJ`; no array cardinality schema.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:ccjFields/handleRemoveCCJ`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:countyCourtJudgements`.
- Clarification: —.

#### MTS-06-R16 — `SetValidators` raw-driver projection

- Trigger: called after non-named DriverPlan exit and after MTS-06C `data.valid`.
- Evaluation point: immediately before numbered-step `next()`.
- Affected fields: Q05/Q06/Q20/Q27; persisted `abiDetail` and `gvwDetail` stores.
- Raw-state effect: no driver/form rewrite. Both validator stores reset, then receive new objects. `driverMaxGvw=max(drivers[].gvwLimitID)` and strict OPT-MT-27 lookup yields `driverListGvw`; Q06 strict OPT-MT-20 lookup yields `driverPlanGvw`. With drivers, `driverMaxAbi` finds the option for `max(drivers[].maxABIGroupID)`, takes option text's last two characters with `.slice(-2)`, then applies `Number`; without drivers it is undefined. Plan ABI is OPT-MT-19 `abiGroup` only for plan ID3 or ID2, otherwise null.
- Projection effect: writes `{driverMaxAbi,driverPlanMaxAbi}` and `{driverListGvw,driverPlanGvw}` for later vehicle validators.
- User-visible result/error: no Step 6 copy/error; dynamic labels/metadata are not inferred.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:abiValidatorStore/gvwValidatorStore`.
- Clarification: CLR-001 for option text/metadata.

#### MTS-06-R17 — `driversFlatten` stored-versus-projected omission

- Trigger: cross-step Step 5 successful submit supplies raw drivers, `policyIndemnityLimit`, and `coverLevelID`.
- Evaluation point: Step 5 projection, not Driver Details submit and not MTS-06C display.
- Affected fields: Q58/Q59/Q61 on each raw driver.
- Raw-state effect: Step 5 writes the returned mapped drivers array back into the form store. Cover ID3 omits exact keys `ageAdditionalExcess`, `ageIndemnityLimitID`, and `experienceBasedExcessID`. Other covers retain raw keys unless selected OPT-MT-23/38 strict-value lookup yields truthy numericValue greater than truthy policy limit, in which case the corresponding indemnity/excess key is omitted. Q60/Q62 are never removed by this helper.
- Projection effect: Lodash `omit` removes properties rather than assigning null. Step 6's own `cleaned` object separately assigns null based on age/cover/options; keep these mechanisms distinct.
- User-visible result/error: none at projection time; later forms/summary receive the resulting objects.
- Evidence: Unresolved — Source qualifier (React/Lodash): `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:cleaned`.
- Clarification: CLR-001 for numeric metadata only.

### MTS-06C — Driver List

MTS-06C mounts when `location.state.showCards` is truthy. The view owns display ordering only: each raw driver is first copied with its raw `driverIndex`, then `DriversSorted` produces a filtered/sorted display list; edit/delete always use the restored raw index.

#### MTS-06-U08 — Driver heading and validation-error panel

- Position and mount condition: `Drivers` heading always first; error panel follows only while `errorList.length > 0`.
- Kind: heading/error state.
- Exact observable contract: red panel with exact bold heading `Please review the following:` then each `errorMessages` string as a source-order `<li>`. `setErrorList` replaces the array only on invalid response; a later valid response does not explicitly clear it before navigation.
- Related questions/rules: MTS-06-R20.
- Evidence: Direct React — Source qualifier (React/runtime channel): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:errorList`.
- Clarification: —.

#### MTS-06-R18 — `DriversSorted` grouping, alphabetization, and raw index

- Trigger: every MTS-06C render maps raw `formData.drivers` to copies with `driverIndex:index`, then calls `DriversSorted`.
- Evaluation point: render before pagination.
- Affected fields: Q09/Q12 and all edit/delete actions.
- Raw-state effect: none; sorting/filtering uses copies.
- Projection effect: concatenated groups are exact relationship IDs: policyholder 3, directors 1, business partners 4, spouse 5, employees 2. Each group uses Lodash `sortBy(driver.firstName)` ascending. Drivers with any other/missing relationship ID are excluded from display. Each displayed row retains its original raw `driverIndex`.
- User-visible result/error: cards and pagination follow sorted display order; identical/missing first-name ordering follows Lodash behavior and is not redefined.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:driversIndexed/existingDrivers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriversSorter.ts:DriversSorted`.
- Clarification: —.

#### MTS-06-U09 — Driver card compact and expanded content

- Position and mount condition: one card per paginated displayed driver, keyed by `guid`; blue divider between displayed cards except after last.
- Kind: card/buttons/disclosure.
- Exact observable contract: heading `firstName + ' ' + surname`; icon buttons `Edit`, `Delete`; compact rows `Date of Birth:` with `DD/MM/YYYY (N yrs old)` using policy-start age and `Relationship to Policyholder:` using strict OPT-MT-25 lookup; collapsed action `Show more`; expanded rows `Vehicle Usage :` (space before colon) via strict OPT-MT-26 lookup and `Gross Vehicle Weight Limit ` (trailing space) via strict OPT-MT-27 lookup; expanded action `Show less`.
- Related questions/rules: Q09–Q12/Q19/Q20; R18/R19.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/components/widgets/DriverCard.tsx:DriverCard`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:displayedDrivers`.
- Clarification: CLR-001 for displayed option texts.

#### MTS-06-R19 — Edit, Add, Delete, owner block, and sole-driver transition

- Trigger: card Edit/Delete or `Add another driver`.
- Evaluation point: click.
- Affected fields: raw drivers and MTS-06 route state.
- Raw-state effect: Edit opens B with raw `driverIndex`. Add opens B with `editDriver:existingDrivers.length` (sorted/displayed count, not raw next-index derivation). Delete resolves raw row and blocks if any vehicle `.find(vehicle.ownerGuid === driver.guid)`. Allowed multi-row delete immediately writes `formData.drivers.toSpliced(rawIndex,1).map(identity)`; if displayed page had one row, active page decrements by one. Sole raw driver deletion writes `drivers:[]` and opens B at index0.
- Projection effect: none beyond immediate stored-array mutation and sorted rerender.
- User-visible result/error: blocked delete opens bottom-center Snackbar 3500ms with exact `This driver is a vehicle owner, can't be deleted.` through FormError; no delete confirmation. Add is disabled unless `existingDrivers.length < VITE_COVERX_DRIVER_LIMIT`; the 125 comments do not establish the value (CLR-007).
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:onDriverEdit/addNewDriver/onDriverDelete`; `CleggGifford.CoverX.UI/src/components/widgets/DriverCard.tsx:Edit/Delete`.
- Clarification: CLR-007 for configured literal.

#### MTS-06-R20 — Pagination and empty/disabled display states

- Trigger: sorted `existingDrivers.length`, configured `VITE_COVERX_PAGE_SIZE`, `activePage`.
- Evaluation point: render and pagination change.
- Affected fields: card slice and Add button.
- Raw-state effect: no driver mutation on page change; page control scrolls to top and writes selected page number.
- Projection effect: when length `< pageSize`, all displayed; otherwise slice `[(activePage-1)*pageSize, activePage*pageSize)`. Pagination mounts only when length `> pageSize`; count is `Math.ceil(total/pageSize)`. Equality at page size uses the slice branch but no pagination.
- User-visible result/error: zero sorted drivers mount no card and no pagination, but Add plus Next/Go Back remain; Add disabled at/above configured limit. No empty-state instruction is mounted. Config literals remain CLR-007; do not use the comment 125.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:displayedDrivers/Pagination/Add`; `CleggGifford.CoverX.UI/src/components/widgets/Pagination.tsx:Pagination`.
- Clarification: CLR-007.

#### MTS-06-R21 — `validateDrivers` caller boundary and returned fields

- Trigger: valid wrapper `useForm` submission from MTS-06C `Next` (the wrapper declares no field schema).
- Evaluation point: `onSubmit` promise.
- Affected fields: loading, errorList, derived validators and numbered movement.
- Raw-state effect: request caller passes `{data:MotorTradeConverter(formData)}`; `validateDrivers` spreads `params.data` into its POST body. This specification stops at that caller boundary and does not define an API contract.
- Projection effect: returned `{valid,errorMessages}` is consumed only: truthy `data.valid` calls SetValidators then manager `next()` to MTS-07; false writes `data.errorMessages` and scrolls top. `finally` clears loading.
- User-visible result/error: loading overlays only the navigation block with translucent white and 150×150 looping/autoplay Lottie; invalid stays in C and U08 renders strings in received order. Supporting producer confirms front-end-visible fields `Valid` and `ErrorMessages`; it can produce source-ordered driver messages of the form `FirstName Surname: Personal Business cover is not available for ...` from business-use occupations, but actual names/rows/messages are runtime data and no endpoint/business contract is created.
- Evidence: Direct React — React and bounded producer sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:onSubmit/loading`; `CleggGifford.CoverX.UI/src/api/motorTrade.ts:validateDrivers`; `CleggGifford.CoverX/CgLloyds20.WebApi/ApiControllers/FunnelMotortradeRoadRisksController.cs:ValidateDrivers`; `CleggGifford.CoverX/CgLloyds20.WebApi/ViewModels/MotortradeRoadRisksValidateDriversViewModel.cs:Valid/ErrorMessages`.
- Clarification: —.

#### MTS-06-U10 — MTS-06C actions and navigation

- Position and mount condition: after cards/pagination: `Add another driver`; divider; form with `Next`, then `Go Back`.
- Kind: buttons/loading state.
- Exact observable contract: Add is React Bootstrap Button with configured disable guard; Next is native submit; Go Back is native button opening MTS-06A with `{editing:false,editDriver:null,showCards:false}`. Neither Add/Edit/Back changes the persisted numbered step.
- Related questions/rules: R19–R21.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:addNewDriver/navigate`.
- Clarification: CLR-007 for Add limit.

### MTS-06L — Empty Loading State

#### MTS-06-U11 — Empty driver-loading container

- Position and mount condition: entire MTS-06 body when `location.state?.driverLoading` is truthy; tested before every other Step 6 route-local flag.
- Kind: empty loading state.
- Exact observable contract: `Container` with `bsPrefix="container container-body-md no-border-radius"` containing only an empty fragment. No heading, copy, Lottie, progress indication, action, form, card, or recovery control mounts. The redundant `driverLoading && <></>` inside the later return is unreachable for this truthy branch.
- Related questions/rules: MTS-06-R07 later-row revalidation can navigate here and replace it after 50ms with MTS-06B.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:driverLoading`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:revalidate catch`.
- Clarification: —.

#### MTS-06-R22 — Complete MTS-06 projection and reconciliation audit

- Trigger: Task 2 UI→schema→state→list→summary audit.
- Evaluation point: documentation verification only.
- Affected fields: Q01–Q62, R01–R21, U01–U06/U08–U11, AUD-MT-01, and OPT-MT-03/09/10/16–39/50–52/62/64–72.
- Raw-state effect: none; this is a documentation ledger. Every mounted DriverPlan/DriverDetails field has a Q record; `showAddress`, `customOccupationsError`, generated `guid`, `driverIndex`, route flags, loading/error/Snackbar/page state and misspelled schema dependency are state-only records/rules. Every DriverDetailSchema path maps to a Q record; the schema-only dependency name is R06.
- Projection effect: field→summary and summary→field reconcile only firstName, surname, dateOfBirth and relationshipPolicyholderID for MTS-14 U06; MTS-06C U09 additionally consumes usageID/gvwLimitID. Every remaining raw field/array is explicitly omitted. R16 distinguishes derived validator-store projection; R17 distinguishes property omission from null writes.
- User-visible result/error: every mounted heading, instruction, field error, custom occupation error, returned validation list, owner Snackbar, button, card disclosure, blank/list/loading state is assigned a U/Q/R record; runtime/config values remain localized to CLR-001/CLR-007.
- Evidence: Unresolved — Source qualifier (React/Yup/bounded producer): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:DriverPlan`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPostCode.tsx:DriverPostCode`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:DriverList`; `CleggGifford.CoverX.UI/src/components/widgets/DriverCard.tsx:DriverCard`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriversSorter.ts:DriversSorted`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema/DriverDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: CLR-001 and CLR-007 only.

#### AUD-MT-02 — MTS-06 completeness ledger

- Audit position: documentation-only completeness ledger after the MTS-06 loading record; it has no mounted React node.
- Purpose: bidirectional source/record audit ledger.
- Assertion: no user-visible output; each row checks a named MTS-06 source partition against stable destinations, including explicit CLR-bounded dependencies.
- Coverage: MTS-06 Q01–Q62, R01–R22, U01–U11.
- Evidence: Unresolved — mounted source partitions are direct, while dynamic option rows and environment list size remain bounded by CLR-001/CLR-007: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6/driverLoading`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:DriverList`.
- Clarification: CLR-001; CLR-007.

| Audit direction | Source set | Documentation destination | Result |
|---|---|---|---|
| UI → schema/records | DriverPlan, DriverDetails, DriverPostCode, DriverList, DriverCard, Step6 | Q01–Q62, U01–U11, R01–R22 | PASS |
| Schema → UI/state | DriverPlanSchema and DriverDetailSchema | Mounted Q records plus R06 state-only misspelled dependency | PASS |
| Field → summary | Every Q01–Q62 | U06 explicit inclusion/omission contract | PASS |
| Summary → field | MTS-14 Drivers name/DOB/relationship rows | Q09–Q12 | PASS |
| Option → consumer | OPT-MT-03/09/10/16–39/50–52/62/64–72 | AUD-MT-01 plus field/rule backlinks | PASS |
| Consumer → option | Every dynamic MTS-06 control/derivation | Canonical OPT record and AUD-MT-01 | PASS |
| Repeated rows | Occupation, motor-trading conviction, claim, disability non-array, criminal conviction, CCJ | R08/R11–R15 | PASS |
| Raw → derived/omitted | SetValidators and driversFlatten | R16/R17 | PASS |

## MTS-07 — Trade Plates

MTS-07 mounts inside `container container-body-md no-border-radius` under the exact heading `Trade Plates`. Its `MTStep7Schema` contract deliberately has different UI-add, declared-count, displayed-row and uniqueness rules.

#### MTS-07-Q01 — `tradePlateCovered`

| Property | Exact contract |
|---|---|
| Position | First question after the MTS-07 heading. |
| Visible copy | `Do you require Trade Plates to be covered?` |
| Control | `RadioList` / CTL-MT-04; fixed Yes=`true`, No=`false`, in that order. |
| Stored/emitted value | Boolean `tradePlateCovered`; initially whatever is in `formData`, with `null` omitted from form defaults. |
| Options | Inline/static Yes/No boolean options. |
| Visible when | Always. |
| Enabled when | Disabled only when `formData.isMta && existingTradePlates` is truthy. |
| Required when | Always required by `MTStep7Schema`. |
| Constraints | Boolean; no additional test. |
| Errors | Yup `.required().label('This')`, rendered by `RadioList` as its field error. |
| Lifecycle | No writes Q02=`0` through `resetField` and removes all Q03 rows; valid Next and Go Back merge current form values into the persisted store. |
| Summary | Always in `Trade Plates` as the same question text and `common.${!!value}` (`Yes`/`No`). |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:tradePlateCovered`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Trade Plates`. |
| Clarification | — |

#### MTS-07-Q02 — `tradePlateMaxNumber`

| Property | Exact contract |
|---|---|
| Position | Second question, mounted immediately after Q01 only while Q01 is truthy. |
| Visible copy | `How Many?` |
| Control | `FormTextBoxNumber` / CTL-MT-09; digit-only numeric emission, blank emits `''`. |
| Stored/emitted value | Number or `''`; No callback explicitly resets it to numeric `0`. |
| Options | None. |
| Visible when | `!!watch('tradePlateCovered')`. |
| Enabled when | No disabled prop, including MTA. |
| Required when | Required only when Q01 is exactly `true`; otherwise not required. |
| Constraints | Type must be numeric; minimum `1`; maximum `999`; when truthy and Q03 has rows, value must be at least the displayed-row count. These schema limits are independent of the 150-row UI add guard. |
| Errors | Exact custom messages: `This is a required field`; `This field must be greater than 0`; `This field must be less than or equal to 999`; `Indicated number of trade plate numbers must be greater than or equal to the number of trade plates below`. Field `FormError` channel. |
| Lifecycle | Defaults from raw store unless null; Q01 No writes `0`; Next/Back persist current value. |
| Summary | Conditionally follows Q01 only when Q01 is truthy; label `How Many?`; raw value, no formatting. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:tradePlateMaxNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema.tradePlateMaxNumber`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradePlateMaxNumber`. |
| Clarification | — |

#### MTS-07-Q03 — `tradePlateNumbers[].plateNumber`

| Property | Exact contract |
|---|---|
| Position | Repeated rows after Q02, in field-array order; each row heading is `Trade Plate ${index + 1}` and label is `Trade Plate Number:`. |
| Visible copy | Indexed heading and label above; row remove button is exact `X`; divider follows every row except the last. |
| Control | `FormTextBox` / CTL-MT-08 for each string; `useFieldArray` add/remove lifecycle. |
| Stored/emitted value | Raw array of `{plateNumber:string}`; initial fallback is `[]`; Add appends `{plateNumber:''}`. |
| Options | None. |
| Visible when | Existing rows render regardless of Q01; Add is separately gated by Q01 and length. |
| Enabled when | Row input, X, and Add are disabled when `isMTA && existingTradePlates`; rows are not hidden. |
| Required when | Every existing row's `plateNumber` is required even though the containing array is `.notRequired()`. |
| Constraints | Array uniqueness lowercases each plate and removes spaces before comparison. There is no other string length/format constraint. |
| Errors | Row required error from `.required().label('This')`; array root error exact `The trade plates need to be unique`, mounted below rows through `FormError`. |
| Lifecycle | Initial raw array or `[]`; Add only while length `<150` and Q01 truthy; any X removes that index, including first/last/only; Q01 No calls `remove()` with no index and removes all; Next/Back persist the raw order/strings. |
| Summary | All raw rows map after the Q01/Q02 rows regardless of Q01, labelled `Trade Plate N`, displaying the exact raw `plateNumber`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:tradePlateNumbers/onAppendNew/onRemovePlate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema.tradePlateNumbers`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:tradePlateNumbers`. |
| Clarification | — |

#### MTS-07-R01 — Layered trade-plate cardinality and uniqueness

- Trigger: Q01/Q02/Q03 render, Add/X/No, and schema validation.
- Evaluation point: render, click, radio callback and submit.
- Affected fields: Q01–Q03.
- Raw-state effect: UI Add appends only while current field count is `<150`; No writes Q02=`0` and removes all rows; X removes any chosen row. The schema separately allows Q02 only from 1 through 999, requires Q02 to cover the current row count, and compares row strings after lowercasing and removing spaces.
- Projection effect: raw values are persisted; summary renders the raw row order without uniqueness normalization.
- User-visible result/error: exact errors are recorded in Q02/Q03; no minimum row count is imposed when Q01 is true.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:fields/onAppendNew/RadioList`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema`.
- Clarification: —.

#### MTS-07-R02 — MTA/existing-plate disablement

- Trigger: `formData.isMta && existingTradePlates`.
- Evaluation point: render.
- Affected fields: Q01 and each Q03 input/X/Add; Q02 remains enabled.
- Raw-state effect: no automatic rewrite.
- Projection effect: none.
- User-visible result/error: affected controls remain visible but disabled; no explanatory copy is mounted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:isMTA/existingTradePlates`.
- Clarification: —.

#### MTS-07-R03 — Submit, vehicle revalidation and Back

- Trigger: valid Next or `Go Back`.
- Evaluation point: form submit/click.
- Affected fields: Q01–Q03 and existing ordinary vehicles.
- Raw-state effect: both paths first merge current Step 7 values. Next with no/empty raw vehicles goes to MTS-08B. Otherwise it revalidates stored vehicles sequentially with the MTS-08A parameter contract; all valid goes to MTS-08B, first invalid goes to MTS-08A with its raw index and `navigateList:true`. Back goes to MTS-06A for `driverPlanId === 3`, otherwise MTS-06C.
- Projection effect: summary uses the persisted Q values; vehicle validation does not rewrite rows here.
- User-visible result/error: buttons are exact `Next` and `Go Back`; revalidation errors are not surfaced on MTS-07.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:onSubmit/prev`.
- Clarification: CLR-001 for the unavailable plan label behind ID 3.

#### MTS-07-U01 — Heading, actions and Summary projection

- Position and mount condition: heading first; Next then Go Back after all fields; `Trade Plates` summary section always mounts with Edit to standard-family MTS-07.
- Kind: heading/buttons/summary.
- Exact observable contract: `Trade Plates`; `Next`; `Go Back`; summary ordering and conditions are Q01–Q03.
- Related questions/rules: Q01–Q03; R01–R03.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Trade Plates`.
- Clarification: —.

## MTS-08 — Vehicles

### MTS-08A — Vehicle Details

MTS-08A mounts when `location.state.editing` is truthy. Lookup and manual modes share one form but do not share a single field inventory: registration is the entry control; a successful lookup mounts a read-only result card plus custom ABI/GVW errors, while manual entry mounts Q02–Q16.

#### MTS-08-Q01 — `regNumber`

| Property | Exact contract |
|---|---|
| Position | First detail control when local `showLookup` is true. |
| Visible copy | Label `Vehicle Registration`; action `Search`; link `Enter Manually`; lookup errors are listed below. |
| Control | Custom native text/search control `VehicleRegistration`; value displays `field.value || ''`. |
| Stored/emitted value | String. Input is uppercased then every character outside ASCII letters, digits and spaces is removed before `field.onChange`. |
| Options | Runtime/input-dependent lookup result; no returned vehicle fixture is fixed. |
| Visible when | `showLookup`; after successful lookup it becomes false. Converting the retrieved card to manual makes it true again. |
| Enabled when | Always enabled while mounted. |
| Required when | Always required by `VehicleDetailSchema`. |
| Constraints | Schema rejects special characters if one reaches validation. Duplicate comparison combines raw ordinary and specified arrays, removes spaces only, and permits the current editing row's prior registration. It does not case-normalize stored arrays during comparison. |
| Errors | Exact field errors: `Please enter a valid Vehicle Registration.`; `Reg number has been previously entered.`; `Registration plate is outside of criteria.`; `Motorcycle type is not allowed.`; `Vehicle Not Found, if you believe this is incorrect, please contact your broker so this update can be completed`; plus required label error. All mount through this field's `FormError`. |
| Lifecycle | Search with blank only triggers validation. Search sets a local full-cover Lottie loading overlay. Success clears all form errors, writes lookup fields Q02–Q16 plus `isManualEntry:false` and selected-category state, hides lookup, sets retrieved card. Failure `reset()`s the ordinary form, clears retrieved state, then sets the not-found error. `Enter Manually` writes `isManualEntry:true`; editing a retrieved card does the same without clearing populated values. |
| Summary | Sanitized ordinary rows use Q01 as each summary subsection heading. List cards also use it as card heading. |
| Evidence | Direct React — Source qualifier (React/Yup/runtime boundary): `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:VehicleRegistration`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:regNumber`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.regNumber`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`. |
| Clarification | — |

#### MTS-08-Q02 — `make`

| Property | Exact contract |
|---|---|
| Position | First manual field; lookup-populated card field otherwise. |
| Visible copy | `Make:` in manual mode; result-card/list/summary wording differs by surface. |
| Control | Manual `FormTextBox` / CTL-MT-08; otherwise populated from lookup and shown by `VehicleCard`. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual input only when `manualEnter`; lookup value is visible when a result card is mounted. |
| Enabled when | Manual input enabled. |
| Required when | Required only when `manualEnter`; otherwise not required. |
| Constraints | No additional schema constraint. |
| Errors | Required `.label('This')` field error in manual mode. |
| Lifecycle | Empty form/default row → manual input or lookup `data.make` → raw vehicle row. |
| Summary | Included after registration as label `Make ` (trailing JSX space), raw string. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:make`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('make')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.make`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`. |
| Clarification | — |

#### MTS-08-Q03 — `model`

| Property | Exact contract |
|---|---|
| Position | Second manual field; lookup card otherwise. |
| Visible copy | `Model:`. |
| Control | Manual `FormTextBox` / CTL-MT-08; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual input when `manualEnter`; lookup card after a result. |
| Enabled when | Enabled. |
| Required when | Required only when manual. |
| Constraints | None beyond requiredness. |
| Errors | Required `.label('This')` field error. |
| Lifecycle | Manual string or lookup `data.model` → raw row. |
| Summary | Included after Make as label `Model`, raw string. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:model`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('model')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.model`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`. |
| Clarification | — |

#### MTS-08-Q04 — `abiCode`

| Property | Exact contract |
|---|---|
| Position | Third manual field; lookup result field otherwise. |
| Visible copy | `ABI Code:`. |
| Control | Manual `FormTextBox` / CTL-MT-08; lookup result card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual input, or result card. |
| Enabled when | Enabled in manual mode. |
| Required when | Always required, including lookup mode. |
| Constraints | No additional test. |
| Errors | Required `.label('This')`; lookup failure can therefore invalidate a populated result. |
| Lifecycle | Manual or `data.abiCode`; retained in raw row. |
| Summary | Omitted from MTS-14 ordinary summary; present in expanded MTS-08B card. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:abiCode`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('abiCode')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.abiCode`. |
| Clarification | — |

#### MTS-08-Q05 — `abiGroup`

| Property | Exact contract |
|---|---|
| Position | Fourth manual field; lookup result plus disabled `customAbiError` channel otherwise. |
| Visible copy | `ABI Group:`. |
| Control | Manual `FormTextBoxNumber` with `makeNull`; lookup card and `CustomError` otherwise. |
| Stored/emitted value | Number or `null`; lookup uses `data.abiGroup`. |
| Options | Depends on derived maximum ABI and OPT-MT-40/59 vehicle category/metadata. |
| Visible when | Manual input, or lookup card/custom error after result. |
| Enabled when | Manual enabled; lookup custom error controller is disabled but renders validation. |
| Required when | Required unless `chosenVehicleType` is `Motorcycle`, `Commercial`, or `Other`; represented as custom test over an otherwise optional schema. |
| Constraints | Commercial type rows whose consumed `requiresABICheckForCommercialVehicle === false` are exempt from max check. Otherwise a truthy numeric value over numeric `maxAbi` fails. |
| Errors | Manual max `ABI Group must be less than or equal to ${maxAbi}` at Q05; lookup routes it to `customAbiError`. Missing error is `This field is required.` manually or `ABI Group is required.` through lookup custom error. |
| Lifecycle | Manual/lookup value; validator maximum derives in R02; raw value persists. |
| Summary | Omitted from MTS-14; expanded list card displays raw number. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:abiGroup/customAbiError`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('abiGroup')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.abiGroup`. |
| Clarification | CLR-001 for vehicle-type rows/metadata. |

#### MTS-08-Q06 — `vehicleTypeID`

| Property | Exact contract |
|---|---|
| Position | Fifth manual field; lookup result otherwise. |
| Visible copy | `Vehicle Type:`. |
| Control | Manual `AutoComplete` / CTL-MT-01; lookup card otherwise. |
| Stored/emitted value | Option primitive ID; callback writes state-only `chosenVehicleType=matched.category`. |
| Options | OPT-MT-40 in source order; category metadata OPT-MT-59. |
| Visible when | Manual input or lookup result. |
| Enabled when | Enabled. |
| Required when | Required only in manual mode; not required for lookup. |
| Constraints | Motorcycle selection fails when no driver has `motorcycleLicenceIssueDate` and the alternative plan expression is false: `(driverPlanId !== 1 && aadMaxMotorcycleCcID !== 1)`. |
| Errors | `Motorcycle type is not allowed.` or required `.label('This')`. |
| Lifecycle | Manual selection/category callback or lookup `data.vehicleTypeID` plus matched category → raw row. |
| Summary | MTS-14 omits; MTS-08B expanded card resolves text by strict option value comparison. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleTypeID`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('vehicleTypeID')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.vehicleTypeID`. |
| Clarification | CLR-001 |

#### MTS-08-Q07 — `bodyType`

| Property | Exact contract |
|---|---|
| Position | Sixth manual field; lookup card otherwise. |
| Visible copy | `Body Type:`. |
| Control | Manual `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual or retrieved card. |
| Enabled when | Enabled manually. |
| Required when | Required only in manual mode. |
| Constraints | None beyond requiredness. |
| Errors | Required `.label('This')`. |
| Lifecycle | Manual or `data.bodyType` → raw row. |
| Summary | Omitted from MTS-14; expanded list card displays raw string. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:bodyType`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('bodyType')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.bodyType`. |
| Clarification | — |

#### MTS-08-Q08 — `gvw`

| Property | Exact contract |
|---|---|
| Position | Seventh manual field; lookup value/custom-error otherwise. |
| Visible copy | `Gross Vehicle Weight:`. |
| Control | Manual `FormTextBoxNumber` with `makeNull`; lookup card plus disabled `customGvwError`. |
| Stored/emitted value | Number/null manually; lookup converts numeric-like `data.gvw` with `Number`, retaining original only when conversion is NaN. |
| Options | Derived maximum array in R02. |
| Visible when | Manual or retrieved card. |
| Enabled when | Manual enabled. |
| Required when | Manual value required except categories `Car` or `Other`; `0` counts as present. |
| Constraints | Category `Car` bypasses all GVW checks; any `null` in max array means unlimited; otherwise numeric value cannot exceed `max(maxGvw)`. |
| Errors | `This is a required field`; `This field is required.`; `Gross Vehicle Weight must be less or equal to ${maxLimit}`, routed to Q08 manually or `customGvwError` after lookup. |
| Lifecycle | Manual or converted lookup value → raw row. |
| Summary | Omitted from MTS-14; expanded list card shows raw value. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:gvw/customGvwError`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:numberValue`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.gvw`. |
| Clarification | CLR-001 for limits. |

#### MTS-08-Q09 — `seats`

| Property | Exact contract |
|---|---|
| Position | Eighth manual field. |
| Visible copy | `Seats:`; exact adjacent manual message `MT only usage` when numeric seats `>= 9`. |
| Control | `FormTextBoxNumber`; lookup card otherwise. |
| Stored/emitted value | Number or `''`; lookup `data.seats`. |
| Options | None. |
| Visible when | Manual or result card; message only for manual numeric value at least 9. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None from schema. |
| Lifecycle | Manual/lookup raw value persists. |
| Summary | Omitted from MTS-14; MTS-08B expanded card appends `(MT Only usage)` only when numeric seats `> 9`, a distinct threshold/capitalization. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:seats`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('seats')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.seats`. |
| Clarification | — |

#### MTS-08-Q10 — `doors`

| Property | Exact contract |
|---|---|
| Position | Ninth manual field. |
| Visible copy | `Doors:`. |
| Control | `FormTextBoxNumber`; lookup card otherwise. |
| Stored/emitted value | Number/`''`; lookup `data.doors`. |
| Options | None. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/lookup → raw row. |
| Summary | Omitted from MTS-14; expanded list card only. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:doors`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('doors')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.doors`. |
| Clarification | — |

#### MTS-08-Q11 — `fuelType`

| Property | Exact contract |
|---|---|
| Position | Tenth manual field. |
| Visible copy | `Fuel Type:`. |
| Control | `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/`data.fuelType` → raw row. |
| Summary | Omitted from MTS-14; expanded list card only. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:fuelType`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('fuelType')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.fuelType`. |
| Clarification | — |

#### MTS-08-Q12 — `transmission`

| Property | Exact contract |
|---|---|
| Position | Eleventh manual field. |
| Visible copy | `Transmission:`. |
| Control | `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/`data.transmission` → raw row. |
| Summary | Omitted from MTS-14; expanded list card only. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:transmission`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('transmission')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.transmission`. |
| Clarification | — |

#### MTS-08-Q13 — `engineSize`

| Property | Exact contract |
|---|---|
| Position | Twelfth manual field. |
| Visible copy | `Engine Size:`. |
| Control | `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String from manual input or lookup `data.engineSize`; numeric comparisons use `Number(value)`. |
| Options | Motorcycle category/CC metadata OPT-MT-40/59/62. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Category `Car` bypasses; manual non-Car requires a truthy value. Lookup can still reach the second custom test. |
| Constraints | Non-motorcycle vehicle IDs bypass limit checks when value truthy. `anyDriverCC === null` or `driversCC === null` bypasses. Otherwise cannot exceed numeric driver or any-driver CC limits, checked in that order. |
| Errors | `This field is required.`; `Engine size can not be greater than ${driversCC}`; `Engine size can not be greater than ${anyDriverCC}`. |
| Lifecycle | Manual/lookup → raw row. |
| Summary | Omitted from MTS-14; expanded list card only. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:engineSize`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('engineSize')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.engineSize`. |
| Clarification | CLR-001 for option metadata. |

#### MTS-08-Q14 — `registrationYear`

| Property | Exact contract |
|---|---|
| Position | Thirteenth manual field. |
| Visible copy | `Registration Year:`. |
| Control | `FormTextBoxNumber`; lookup card otherwise. |
| Stored/emitted value | Number/`''`; lookup `data.registrationYear`. |
| Options | None. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Required only in manual mode. |
| Constraints | Manual minimum 1900; no custom message. |
| Errors | Yup minimum/default required message with label `This`. |
| Lifecycle | Manual/lookup → raw row. |
| Summary | Omitted from MTS-14; expanded list card only. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:registrationYear`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('registrationYear')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.registrationYear`. |
| Clarification | — |

#### MTS-08-Q15 — `registrationDate`

| Property | Exact contract |
|---|---|
| Position | Fourteenth manual field. |
| Visible copy | `Registration Date:`. |
| Control | `DatePicker` / CTL-MT-14; caller minimum 1900-01-01. |
| Stored/emitted value | Date-compatible value; lookup `data.registrationDate`. |
| Options | None. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Required only in manual mode. |
| Constraints | Minimum 1900-01-01. |
| Errors | Exact minimum `Date cannot be earlier than 01/01/1900.` plus required `.label('This')`. |
| Lifecycle | Manual picker/lookup → raw row. |
| Summary | Omitted from MTS-14; MTS-08B card formats `DD/MM/YYYY`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:registrationDate`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('registrationDate')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.registrationDate`. |
| Clarification | — |

#### MTS-08-Q16 — `isImported`

| Property | Exact contract |
|---|---|
| Position | Fifteenth/final manual-only attribute before shared fields. |
| Visible copy | `Imported:`. |
| Control | `RadioList`, Yes=true then No=false; lookup card otherwise. |
| Stored/emitted value | Boolean; lookup `data.isImported`. |
| Options | Inline/static booleans. |
| Visible when | Manual or result card. |
| Enabled when | Enabled. |
| Required when | Required only in manual mode. |
| Constraints | Boolean. |
| Errors | Required `.label('This')`. |
| Lifecycle | Manual/lookup → raw row. |
| Summary | Omitted from MTS-14; card renders `common.${!!value}`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:isImported`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('isImported')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.isImported`. |
| Clarification | — |

#### MTS-08-Q17 — `vehicleValue`

| Property | Exact contract |
|---|---|
| Position | First shared field after manual attributes or retrieved card. |
| Visible copy | `Vehicle Value:` with separate £ prefix. |
| Control | `TextFieldCurrency` / CTL-MT-10. |
| Stored/emitted value | Number or `undefined`. |
| Options | Selected own-vehicle indemnity numeric metadata OPT-MT-09. |
| Visible when | `retrievedVehicle || manualEnter`. |
| Enabled when | Enabled. |
| Required when | Always while the full detail schema is used. |
| Constraints | Intended max is numeric `maxVehicleValue`; source calls `this.createError(...)` without returning it, so the over-limit test has no explicit success return and must be preserved rather than rewritten as a confirmed valid/invalid boolean. |
| Errors | Intended exact `Vehicle Value must be less or equal to ${currencyFormat(maxVehicleValue, 0)}.` plus required label error; current test-return behavior is as stated. |
| Lifecycle | Input → raw row; max parameter derives in R02. |
| Summary | Omitted from MTS-14; list card formats currency with zero decimals. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleValue`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.vehicleValue`. |
| Clarification | CLR-001; CLR-008 |

#### MTS-08-Q18 — `purchaseDate`

| Property | Exact contract |
|---|---|
| Position | Second shared field. |
| Visible copy | `Purchase Date:`. |
| Control | `DatePicker`; min 1900-01-01, max today. |
| Stored/emitted value | Date-compatible value. |
| Options | None. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always in full schema. |
| Constraints | Not before 1900-01-01 and not after current day. |
| Errors | `Date cannot be earlier than 01/01/1900.`; `Purchase date cannot be in the future.`; required label error. |
| Lifecycle | Picker/default → raw row. |
| Summary | Omitted from MTS-14; list card formats `DD/MM/YYYY`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:purchaseDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.purchaseDate`. |
| Clarification | — |

#### MTS-08-Q19 — `ownerTypeID` and `ownerGuid`

| Property | Exact contract |
|---|---|
| Position | Third shared field. |
| Visible copy | `Vehicle Owner:`. |
| Control | `AutoComplete` / CTL-MT-01 with generated R03 options; display substitutes `ownerGuid` when stored owner type is 4. |
| Stored/emitted value | Static selection writes owner type 1/2/3 and `ownerGuid=null`; any other selected primitive (driver guid) writes `ownerTypeID=4`, `ownerGuid=guid`. |
| Options | Generated owner options R03; dynamic driver names plus inline static entries. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | `ownerTypeID` required; `ownerGuid` has no standalone schema. |
| Constraints | When owner type is 4, matching raw driver must have truthy `coverPersonalVehicle`; otherwise exact error. |
| Errors | `Chosen driver is not eligible to be the owner of a vehicle.` plus required label error. |
| Lifecycle | Existing type4 displays guid; selection normalizes guid/type; dependency changes do not automatically clear a stale choice, but validation rejects an ineligible/missing driver. |
| Summary | MTS-14 omits owner. MTS-08B card derives display: type1 proposer name; type2 or 3 partnership/company name; type4+guid driver name; type4 without guid `ownerDescription`; otherwise null. Sanitizer can omit a type4 row whose driver is no longer eligible. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:ownerTypesOptions/ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:vehicleOwner`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:isValid`. |
| Clarification | — |

#### MTS-08-Q20 — `keptOvernightTypeID`

| Property | Exact contract |
|---|---|
| Position | Fourth shared field. |
| Visible copy | `Where is the vehicle kept overnight?` |
| Control | `AutoComplete` / CTL-MT-01. |
| Stored/emitted value | Numeric option ID or `undefined`. |
| Options | OPT-MT-41 in source order. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always in full schema. |
| Constraints | Numeric. |
| Errors | Required `.label('This')`. |
| Lifecycle | Selection/default → raw row; no dependency clear. |
| Summary | Omitted from MTS-14; expanded list card resolves text using loose equality. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:keptOvernightTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.keptOvernightTypeID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:vehicleKeptOvernightType`. |
| Clarification | CLR-001 |

#### MTS-08-Q21 — `vehicleKeptAddress`

| Property | Exact contract |
|---|---|
| Position | Fifth shared field. |
| Visible copy | `Vehicle Overnight Address:`. |
| Control | `AutoComplete` / CTL-MT-01 with generated postcode options R04. |
| Stored/emitted value | Selected normalized postcode string or `undefined`. |
| Options | Generated from proposer, premises, and eligible driver postcodes. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always in full schema. |
| Constraints | String; no postcode schema here. |
| Errors | Required `.label('This')`. |
| Lifecycle | Dependency-derived options rerender; a stored selection is not cleared when dependencies change, so CTL-MT-01 displays no selected option if it no longer matches and schema still sees the stale string until changed/submitted. |
| Summary | Omitted from MTS-14; expanded list card labels it `Postcode:` and shows raw string. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:overnightAddressOptions/vehicleKeptAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.vehicleKeptAddress`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:vehicleKeptAddress`. |
| Clarification | — |

#### MTS-08-Q22 — `isPartLeaseAgreement`

| Property | Exact contract |
|---|---|
| Position | Sixth shared field. |
| Visible copy | `Is this vehicle part of a lease agreement?` |
| Control | `RadioList`; Yes=true then No=false. |
| Stored/emitted value | Boolean. |
| Options | Inline/static booleans. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | Boolean. |
| Errors | Required `.label('This')`. |
| Lifecycle | No callback writes Q23=`null`; Yes retains/reveals it. |
| Summary | Omitted from MTS-14; list card renders boolean text and gates Q23 row. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:isPartLeaseAgreement`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.isPartLeaseAgreement`. |
| Clarification | — |

#### MTS-08-Q23 — `leaseLengthYears`

| Property | Exact contract |
|---|---|
| Position | Immediately after Q22 when Q22 truthy. |
| Visible copy | `Length of Lease (years):`. |
| Control | `FormTextBoxNumber`. |
| Stored/emitted value | Number or `''`; Q22 No writes `null`. |
| Options | None. |
| Visible when | `watch('isPartLeaseAgreement')` truthy. |
| Enabled when | Enabled. |
| Required when | Required only when Q22 is exactly true. |
| Constraints | No range. |
| Errors | Required `.label('This')`. |
| Lifecycle | Revealed/retained on Yes; nulled on No; raw persisted. |
| Summary | Omitted from MTS-14; list card only when Q22 truthy. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:leaseLengthYears`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.leaseLengthYears`. |
| Clarification | — |

#### MTS-08-Q24 — `isCustomerLoan`

| Property | Exact contract |
|---|---|
| Position | After lease group. |
| Visible copy | `Is this a Customer Loan Vehicle?` |
| Control | `RadioList`; Yes=true then No=false. |
| Stored/emitted value | Boolean. |
| Options | Inline/static booleans. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | A truthy answer requires raw `formData.requireCustomerLoanCover` truthy. |
| Errors | Exact `To add a customer loan vehicle, you must select 'Yes' for 'Customer Loan Cover Required' in Step 5`; plus required label error. |
| Lifecycle | Raw answer persists; MTS-08B performs a separate inverse list-level coverage gate. |
| Summary | Omitted from MTS-14; expanded list card renders `common.${!!value}`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:isCustomerLoan`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.isCustomerLoan`. |
| Clarification | — |

#### MTS-08-Q25 — `hasModification`

| Property | Exact contract |
|---|---|
| Position | After customer-loan question. |
| Visible copy | `Is this vehicle modified?` |
| Control | `RadioList`; Yes=true then No=false. |
| Stored/emitted value | Boolean. |
| Options | Inline/static booleans. |
| Visible when | Retrieved or manual vehicle. |
| Enabled when | Enabled. |
| Required when | Always. |
| Constraints | None beyond boolean requiredness. |
| Errors | Required `.label('This')`. |
| Lifecycle | Yes with zero rows appends Q26 default; No with rows calls `remove()` and clears all rows. |
| Summary | Omitted from MTS-14; expanded list card renders boolean and gates modification rows. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:hasModification`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.hasModification`. |
| Clarification | — |

#### MTS-08-Q26 — `vehicleModifications[].modificationId`

| Property | Exact contract |
|---|---|
| Position | Repeated group after Q25 and disabled `customModificationError`; headings `Modification N`. |
| Visible copy | `What modifications have been made?`; X on rows after the first; Add ` Add another modification`. |
| Control | `AutoComplete` / CTL-MT-01 per row; field-array Add/X. |
| Stored/emitted value | Array of `{modificationId:number|undefined}`; default append uses `undefined`. |
| Options | OPT-MT-42 in source order. |
| Visible when | Q25 truthy and `fields` exists; Add while length `<10`. |
| Enabled when | Enabled; first row has no X. |
| Required when | Every mounted row ID required; array itself has no conditional `.when`. |
| Constraints | Selected truthy IDs must be unique; maximum is UI-only 10; no schema min/max. |
| Errors | Row required label error; exact duplicate error `Some modifications have been chosen multiple times.` is routed to disabled `customModificationError` and cleared on selection/removal. |
| Lifecycle | Q25 Yes ensures first row; Add appends; X index>0 removes; Q25 No clears all; raw array persists in insertion order. |
| Summary | Omitted from MTS-14; MTS-08B expands and resolves each ID with loose equality, labels `Modification N`. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleModifications`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.vehicleModifications`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:vehicleModifications`. |
| Clarification | CLR-001 |

#### MTS-08-R01 — Lookup/manual population boundary

- Trigger: Q01 Search, Enter Manually, retrieved-card Edit, lookup resolution/rejection.
- Evaluation point: input/click/promise settlement.
- Affected fields: Q01–Q16 and state-only `isManualEntry`, `chosenVehicleType`, `retrievedVehicle`, `showLookup`, `manualEnter`, `loading`.
- Raw-state effect: form-only writes occur until valid detail submit. Success consumes exactly `make`, `model`, `abiCode`, `abiGroup`, `vehicleTypeID`, `bodyType`, `isImported`, `gvw`, `seats`, `doors`, `fuelType`, `transmission`, `engineSize`, `registrationYear`, `registrationDate`; Q01 uses searched registration. Failure resets the ordinary form.
- Projection effect: none until submit; returned runtime records are not enumerated.
- User-visible result/error: Search/Lottie/card/manual link and exact Q01 errors; success hides Q01 and manual attributes behind the card until Edit.
- Evidence: Direct React — Source qualifier (React/runtime boundary): `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:onSearchVehicle`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:showLookup/manualEnter/retrievedVehicle`.
- Clarification: —.

#### MTS-08-R02 — `VehicleDetailSchema` parameter derivation

- Trigger: initial resolver, Step 7 revalidation, or later-vehicle revalidation.
- Evaluation point: form creation and sequential validation.
- Affected fields: Q01–Q26.
- Raw-state effect: no write from parameter calculation. `editingIndex` is the route/raw row index; `manualEnter` is local state or the stored row flag; `formData` is the raw store; `maxAbi=max([abiVariables.driverMaxAbi,abiVariables.driverPlanMaxAbi])`; `maxGvw=[gvwVariables.driverListGvw,gvwVariables.driverPlanGvw]`; `maxVehicleValue` is strict selected OPT-MT-09 `.numericValue` or null; `motorCycleType` is OPT-MT-40 filtered to category `Motorcycle`; `anyDriverCC` is selected OPT-MT-21 `.maxCC`; `driversCC` is OPT-MT-29 `.maxCC` for the maximum raw `drivers[].motorcycleCoverID`; `vehicleTypes` is OPT-MT-40.
- Projection effect: parameters control errors/requiredness but do not normalize raw rows.
- User-visible result/error: field/custom errors specified in Q01–Q26.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:VehicleDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`.
- Clarification: CLR-001 for option rows/metadata.

#### MTS-08-R03 — Generated vehicle-owner option order and normalization

- Trigger: render from proposer company type and raw drivers.
- Evaluation point: render/selection/validation.
- Affected fields: Q19.
- Raw-state effect: driver option entries always precede static entries. Sole trader ID1 filters out drivers whose relationship ID is 3, then appends proposer full name/value1. Company IDs2/3 include all drivers, then company/partnership name/value2, then `Other Company Director`/value3. Partnership ID4 includes all drivers then partnership name/value2. Other company types yield `[]`. Driver text is `${firstName} ${surname}`, value guid. Selection normalizes driver guid to owner type4 plus guid; schema, rather than option filtering, enforces `coverPersonalVehicle`.
- Projection effect: sanitizer filters type4-owned vehicles when no matching eligible driver remains; no raw rewrite. MTS-08B owner display follows Q19.
- User-visible result/error: invalid driver owner error is exact in Q19; dependency removal can make the selection undisplayable/invalid without automatically clearing raw state.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:driverOwners/ownerTypesOptions/ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:isValid`.
- Clarification: CLR-001 applies only to unrelated database option rows, not these generated labels.

#### MTS-08-R04 — Generated overnight-address option order and invalidation

- Trigger: render from `proposerPostcode`, `tradingPremises[].tradingPremisePostcode`, and only drivers with truthy `coverPersonalVehicle` mapped to `postCode`.
- Evaluation point: render and Q21 selection.
- Affected fields: Q21.
- Raw-state effect: sources concatenate proposer first, premises in raw order, eligible drivers in raw order. Each postcode has spaces removed before Lodash `uniq`, preserving first occurrence. Option `value` is that space-free string; `text` uppercases, removes every non-alphanumeric character and passes it through `fixPostcodeValue`, falling back to `''`.
- Projection effect: none; changes recompute options but do not clear raw Q21.
- User-visible result/error: a stale raw selection can cease to match/display while remaining a required nonempty string in the form state.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:overnightAddressOptions`; `CleggGifford.CoverX.UI/src/utils/FixPostCodeValue.ts:fixPostcodeValue`; CTL-MT-01.
- Clarification: —.

#### MTS-08-R05 — Modification row lifecycle

- Trigger: Q25 change, Q26 Add/X/selection, schema validation.
- Evaluation point: click/change/submit.
- Affected fields: Q25/Q26.
- Raw-state effect: exact defaults, 10-row UI guard, first-row non-removability, clear-all and uniqueness behavior are in Q25/Q26.
- Projection effect: MTS-08B resolves IDs; MTS-14 omits them.
- User-visible result/error: indexed headings, exact Add and duplicate error; no confirmation.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:vehicleModifications`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema.vehicleModifications`.
- Clarification: CLR-001 for option rows.

#### MTS-08-R06 — Detail create/edit/revalidation, Back and summary sanitizer

- Trigger: valid Next, later-row validation, or Go Back.
- Evaluation point: submit/promise/click/summary render.
- Affected fields: Q01–Q26 and raw `vehicles`.
- Raw-state effect: submit omits state-only custom/category keys; existing row is replaced at raw index, first vehicle writes `[data]`, later new vehicle appends. When an edited row has a later row, later rows validate sequentially; first invalid passes through MTS-08L for 500ms then opens that raw index with `navigateList:true`. Back performs no detail save: `navigateList` truthy or absent/empty vehicles goes MTS-07; otherwise MTS-08B.
- Projection effect: `sanitizeMotorTradeVehicles` filters any ownerType4 row lacking a matching raw driver with `coverPersonalVehicle === true`, without rewriting raw store. MTS-14 mounts `Vehicles` when the returned `summaryVehicles` value is truthy and renders only registration, Make, Model in raw surviving order.
- User-visible result/error: Next/Go Back; no save-error banner on detail surface.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:onSubmit/goBackToVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`.
- Clarification: —.

#### MTS-08-U01 — MTS-08A heading, lookup card, custom errors and actions

- Position and mount condition: `Vehicles` heading always first; Q01 lookup, then retrieved card/custom ABI/GVW errors or manual Q02–Q16, then Q17–Q26 when retrieved/manual; Next and Go Back last.
- Kind: heading/card/loading/error/buttons.
- Exact observable contract: lookup loading is a full-control translucent overlay with 150×150 looping/autoplay Lottie; successful lookup mounts `VehicleCard` with Edit; `customAbiError`, `customGvwError`, and `customModificationError` have no independent label; actions are `Next`, `Go Back`.
- Related questions/rules: Q01–Q26; R01–R06.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:loading`.
- Clarification: —.

#### AUD-MT-03 — MTS-07/MTS-08A option-consumer backlinks

- Audit position: documentation-only option backlink ledger after the MTS-08 detail/list rules; it has no mounted React node.
- Purpose: option-consumer traceability ledger.
- Assertion: no independent visible output; the table maps trade-plate and ordinary-vehicle consumers to canonical OPT records without inventing database rows or metadata.
- Coverage: MTS-07-R03; MTS-08 Q05/Q06/Q08/Q13/Q17/Q20/Q26 and R02; OPT-MT-09/19–21/27/29/30/40–42/59/62/72.
- Evidence: Unresolved — consumer code is direct and database rows/metadata remain CLR-001: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`.
- Clarification: CLR-001.

| OPT record | MTS-07/MTS-08A consumer |
|---|---|
| OPT-MT-09 | MTS-07-R03; MTS-08-Q17/R02 maximum value and later Step 9 predicate |
| OPT-MT-19/30/72 | MTS-08-Q05/R02 ABI and GVW derivation |
| OPT-MT-20/27/72 | MTS-08-Q08/R02 GVW derivation |
| OPT-MT-21/29/62 | MTS-08-Q06/Q13 and lookup eligibility; R02 |
| OPT-MT-40/59 | MTS-08-Q05/Q06/Q08/Q13; lookup population; R02 |
| OPT-MT-41 | MTS-08-Q20 and MTS-08B display |
| OPT-MT-42 | MTS-08-Q26 and MTS-08B display |

#### MTS-08-R07 — MTS-07/MTS-08A bidirectional reconciliation

- Trigger: Task 1 UI→schema→state→summary audit.
- Evaluation point: documentation verification only.
- Affected fields: MTS-07 Q01–Q03/U01/R01–R03; MTS-08 Q01–Q26/U01/R01–R06; and AUD-MT-03.
- Raw-state effect: none. Every mounted Step7/VehicleDetails Controller and state-only custom/category field maps to a record; every `MTStep7Schema` and `VehicleDetailSchema` path maps back to a Q record or named state-only custom error/category in U01/R01–R02.
- Projection effect: field→summary and summary→field reconcile MTS-07 Q01–Q03 and ordinary-vehicle Q01–Q03; all other detail fields are explicitly omitted from MTS-14 while their MTS-08B card projection is reserved below. Option consumers map through AUD-MT-03.
- User-visible result/error: no lookup result, database option row, environment value, or summary field is invented.
- Evidence: Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:VehicleRegistration`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema/VehicleDetailSchema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Trade Plates/summaryVehicles`.
- Clarification: CLR-001 only.

### MTS-08B — Vehicle List

MTS-08B mounts when `location.state.showVehicles` is truthy. It derives a display array with each raw row's original `vehicleIndex`; list actions use that raw index, not the paginated display index.

#### MTS-08-U03 — List heading, empty instruction and card sequence

- Position and mount condition: `Vehicles` heading first; exact empty instruction `Please click the button below to add a vehicle` only when `displayedVehicles.length === 0`; otherwise paginated cards in display order with a blue divider except after the last.
- Kind: heading/instruction/cards.
- Exact observable contract: each card heading is raw `regNumber`. Compact rows are `Make / Model:` as `${make} ${model}` and `Owner:` using R08, followed by `Show more`. Expanded order is `Make:`, `Model:`, `ABI Code:`, `ABI Group:`, `Vehicle Type:`, `Body Type:`, `Gross Vehicle Weight:`, `Seats:`, `Doors:`, `Fuel Type:`, `Transmission:`, `Engine Size:`, `Registration Year:`, `Registration Date:`, `Imported:`, divider, `Vehicle Value:`, `Purchase Date:`, `Owner of the Vehicle:`, `Where is the vehicle kept overnight?`, `Postcode:`, `Is this vehicle part of a lease agreement?`, conditional `Length of Lease (years):`, `Is this a Customer Loan Vehicle?`, `Is this vehicle modified?`, conditional `Vehicle Modifications` and `Modification N`, divider, `Show less`.
- Related questions/rules: MTS-08-Q01–Q26; R08–R12.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:VehicleSummaryCard`.
- Clarification: CLR-001 for option text lookups.

#### MTS-08-R08 — Card values, formatting and disclosure

- Trigger: card render and Show more/less click.
- Evaluation point: render/local toggle.
- Affected fields: Q01–Q26.
- Raw-state effect: disclosure only changes local `isExpanded`; no form write. Vehicle type and modifications resolve OPT-MT-40/42 text; overnight type uses loose `==`; imported/customer-loan/modification booleans use `common.${...}`; registration/purchase dates format `DD/MM/YYYY`; value uses `currencyFormat(value,0)`. Seats appends exact `(MT Only usage)` only when numeric `> 9`, unlike MTS-08A's `>= 9` message.
- Projection effect: card display only; it is not the MTS-14 summary projection.
- User-visible result/error: exact labels/order are U03; unresolved option rows can display no text.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:VehicleSummaryCard`.
- Clarification: CLR-001.

#### MTS-08-R09 — Generated owner display on cards

- Trigger: each card render.
- Evaluation point: render.
- Affected fields: Q19.
- Raw-state effect: none. Type1 displays proposer first/surname; type2 or type3 displays `proposerCompanyPartnershipName`; type4 with guid finds driver and concatenates first/surname; type4 without guid uses `ownerDescription`; otherwise null.
- Projection effect: compact and expanded card owner only; MTS-14 omits owner.
- User-visible result/error: missing driver can produce concatenated undefined values exactly as JavaScript evaluation permits; no fallback/error is mounted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:vehicleOwner`.
- Clarification: —.

#### MTS-08-R10 — Add, Edit and Delete mutations

- Trigger: `Add Vehicle`, card `Edit`, or card `Delete`.
- Evaluation point: click.
- Affected fields: raw `vehicles`, route state and local page/notification.
- Raw-state effect: Add opens MTS-08A at `editingVehicle:existingVehicles.length` with no array write. Edit opens the selected raw `vehicleIndex`. Delete has no confirmation: if raw length is 1 it writes `vehicles:[]`; otherwise it writes `formData.vehicles.toSpliced(rawIndex,1)`. When the current displayed slice had exactly one row, it first writes `activePage-1`. Delete also sets notification false.
- Projection effect: immediate list rerender; later summary uses sanitized rows.
- User-visible result/error: Edit/Delete are disabled in MTA; Add is also disabled in MTA. No delete success/error copy.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:addNewVehicle/onVehicleEdit/onVehicleDelete`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:Edit/Delete`.
- Clarification: —.

#### MTS-08-R11 — Add capacity guard and exact timed error

- Trigger: enabled Add click.
- Evaluation point: click.
- Affected fields: raw vehicle length, `businessNumberOfVehicleCapacity`, local notification.
- Raw-state effect: no vehicle write when `businessMaxVehicleCapacity === 0` OR `(vehicles.length === businessMaxVehicleCapacity && capacity !== 0)`. It does not use `>=`; absent lengths/capacity follow the exact JavaScript comparisons. Notification becomes true and a 4000ms timeout sets it false.
- Projection effect: none.
- User-visible result/error: exact `FormError` text `Number of vehicles cannot be greater than Maximum number of vehicles held.`; remains on MTS-08B.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:unableToAddVehicles/Add`.
- Clarification: —.

#### MTS-08-R12 — Pagination by `VITE_COVERX_PAGE_SIZE`

- Trigger: raw indexed vehicle length, `activePage`, and `VITE_COVERX_PAGE_SIZE`.
- Evaluation point: render/page selection/delete.
- Affected fields: displayed card slice and page control.
- Raw-state effect: page changes do not mutate vehicles; delete may decrement page as R10.
- Projection effect: if length `< pageSize`, display all; otherwise slice `[(activePage-1)*pageSize, activePage*pageSize)`. Pagination mounts only when length `> pageSize`; equality takes slice branch without mounting pagination.
- User-visible result/error: page-size literal is not fixed here; implement the variable-controlled formulas exactly.
- Evidence: Unresolved — Source qualifier (React/config boundary): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:pageSize/displayedVehicles/Pagination`.
- Clarification: CLR-007.

#### MTS-08-R13 — Continue customer-loan and capacity gates

- Trigger: list form submission.
- Evaluation point: MTS-08B Continue before manager movement.
- Affected fields: raw vehicles, `requireCustomerLoanCover`, business capacity, local alert/notification.
- Raw-state effect: first, if customer-loan cover is truthy and no raw vehicle has truthy `isCustomerLoan`, writes only `showAlert=true` and returns. Otherwise, if raw vehicles exists and its length is `> businessMaxVehicleCapacity`, invokes the same 4000ms notification and returns. These checks also catch capacity reduced after vehicles were added. Successful Continue with absent/falsy raw vehicles writes exact `vehicles:[]`; existing arrays are unchanged.
- Projection effect: because `[]` is truthy, the later `summaryVehicles &&` MTS-14 guard mounts an empty Vehicles collapser after this normalization. Successful movement follows R14.
- User-visible result/error: customer-loan error uses exact translated `mtlabel.force_loan_vehicle`: `If 'Yes' is selected for 'Customer Loan Cover Required' in Cover Required step, at least one vehicle must be designated as a customer loan vehicle`; capacity error is R11. Both remain on MTS-08B.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:force_loan_vehicle`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`.
- Clarification: —.

#### MTS-08-R14 — Step 9 inclusion branch and stale raw state

- Trigger: accepted MTS-08B Continue, and reverse navigation from MTS-10.
- Evaluation point: manager forward/reverse logic.
- Affected fields: selected `coverLevelID`, `coverIndemnityLimitOwnVehiclesID`, OPT-MT-09 `numericValue`, Step 9 raw values.
- Raw-state effect: resolve the selected own-indemnity by strict value equality. Include/reverse to MTS-09 only when `coverLevelID === 1 && indemnityNumericValue && indemnityNumericValue <= 15000`; otherwise go between MTS-08B and MTS-10. Skipping MTS-09 does not clear or rewrite existing raw `specifiedVehicles`/`addSpecifiedVehicle`.
- Projection effect: R18 sanitizer can project stale/ineligible Step 9 state as false/`[]` without raw write.
- User-visible result/error: no branch explanation is mounted; labels behind IDs/metadata remain unavailable.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerLogic/motorTradeManagerPrevLogic`; manually verified across the source line breaks rather than the formatting-sensitive `numericValue.*15000` preflight pattern.
- Clarification: CLR-001.

#### MTS-08-U04 — List actions and MTS-14 summary projection

- Position and mount condition: after cards/pagination: Add Vehicle, divider, capacity error when active, form loan error when active, then shared `NavigatorButton` (`Next`/`Go Back`). MTS-14 Vehicles mounts when sanitized `summaryVehicles` is truthy.
- Kind: buttons/errors/summary.
- Exact observable contract: Add/Edit/Delete/pagination are R10–R12; Continue gates R13; Go Back uses manager to MTS-07. MTS-14 renders only each surviving registration heading, `Make ` and `Model`, with dividers between rows; Edit opens active-family MTS-08B with `{showVehicles:true}`.
- Related questions/rules: Q01–Q26; R08–R14.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`.
- Clarification: CLR-007 for page size only.

### MTS-08L — Empty Loading State

#### MTS-08-U05 — Empty vehicle-loading container

- Position and mount condition: entire numbered MTS-08 body when `location.state?.vehicleLoading` is truthy, tested before list/detail flags.
- Kind: empty loading state.
- Exact observable contract: `Container` with `container container-body-md no-border-radius` containing only an empty fragment. No heading, copy, Lottie, progress, field, card, action or recovery control mounts.
- Related questions/rules: MTS-08-R06 later-row revalidation may replace it after 500ms with MTS-08A.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:vehicleLoading`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:revalidate catch`.
- Clarification: —.

### MTS-08Ø — Blank Fallback

#### MTS-08-U06 — No-flag blank fallback

- Position and mount condition: Step 8 route when `vehicleLoading`, `location.state.showVehicles`, and `location.state.editing` are all falsey/absent.
- Kind: blank state.
- Exact observable contract: the same container mounts, but neither `VehicleList` nor `VehicleDetails` renders. No heading, copy, action, redirect, default selection, reset or recovery is evidenced.
- Related questions/rules: none; raw vehicle data and persisted step are not changed merely by this render.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`.
- Clarification: —.

#### MTS-08-R15 — Complete MTS-08 list/state reconciliation

- Trigger: Task 2 detail→list→route-state→summary audit.
- Evaluation point: documentation verification only.
- Affected fields: Q01–Q26, U01/U03–U06, R01–R14, and AUD-MT-03.
- Raw-state effect: none. Every VehicleDetails field maps to the list card inclusion/omission in U03/R08; Add/Edit/Delete/page/Continue state maps to R10–R14; loading and no-flag render states remain separate.
- Projection effect: MTS-14 consumes only sanitized registration/make/model rows; raw absent vehicles normalize to `[]` only on accepted list Continue.
- User-visible result/error: all list copy, errors, controls, empty instruction, empty loading and blank fallback have records; page size remains only CLR-007.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:VehicleSummaryCard`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`.
- Clarification: CLR-001/CLR-007.

## MTS-09 — Specified Vehicle

MTS-09 is entered only through R14. It holds at most one specified row and uses `MTStep9SchemaLean` when No/empty and `MTStep9Schema` when the local full-mode state is active. Fields below are separate records from MTS-08 even where copy is identical.

#### MTS-09-Q01 — `addSpecifiedVehicle`

| Property | Exact contract |
|---|---|
| Position | First question after heading `Specified Vehicle`. |
| Visible copy | `Do you want to add specified vehicle?` |
| Control | `RadioList`; Yes=true then No=false. |
| Stored/emitted value | Boolean. |
| Options | Inline/static booleans. |
| Visible when | Always on MTS-09. |
| Enabled when | Enabled. |
| Required when | `MTStep9SchemaLean` requires it; full `MTStep9Schema` marks it not required. |
| Constraints | Boolean. |
| Errors | Lean required `.label('This')`. |
| Lifecycle | Defaults true when a raw specified row exists, false when raw array exists and is empty, otherwise unset. Yes sets local `specified=true` and lookup visible; No clears errors and sets local false. Valid No writes `specifiedVehicles:[]` and `addSpecifiedVehicle:false`; valid Yes writes one row and true. |
| Summary | No direct row. Sanitized specified section mounts only when projected array length >0. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:addSpecifiedVehicle/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9SchemaLean/MTStep9Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles`. |
| Clarification | — |

#### MTS-09-Q02 — `regNumber`

| Property | Exact contract |
|---|---|
| Position | First full-mode vehicle control. |
| Visible copy | `Vehicle Registration`; `Search`; `Enter Manually`. |
| Control | `VehicleRegistration` with `specifiedVehicleCase`; same uppercase and ASCII letter/digit/space input normalization as MTS-08-Q01. |
| Stored/emitted value | String. |
| Options | Runtime/input-dependent lookup result. |
| Visible when | Q01 truthy and lookup visible; retrieved card replaces it until card Edit. |
| Enabled when | Enabled. |
| Required when | Always in full schema. |
| Constraints | Duplicate comparison removes spaces across ordinary+specified arrays and permits the current specified row; schema special-character test is identical to ordinary. |
| Errors | Same exact required/special/duplicate/criteria/motorcycle/not-found messages as MTS-08-Q01. |
| Lifecycle | Same lookup field population as R01, except failure resets exact `{addSpecifiedVehicle:true, modifications:[]}` before restoring retrieved null and not-found error. |
| Summary | Projected specified row registration is subsection heading. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:regNumber`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:specifiedVehicleCase`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.regNumber`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles`. |
| Clarification | — |

#### MTS-09-Q03 — `make`

| Property | Exact contract |
|---|---|
| Position | First manual field. |
| Visible copy | `Make:`. |
| Control | Manual `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Q01+manual, or result card. |
| Enabled when | Enabled. |
| Required when | Required only when manual. |
| Constraints | None. |
| Errors | Required label error. |
| Lifecycle | Manual or lookup `data.make` → sole raw row. |
| Summary | Included as `Make ` after registration. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:make`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:setValue('make')`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.make`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles`. |
| Clarification | — |

#### MTS-09-Q04 — `model`

| Property | Exact contract |
|---|---|
| Position | Second manual field. |
| Visible copy | `Model:`. |
| Control | Manual `FormTextBox`; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Q01+manual, or card. |
| Enabled when | Enabled. |
| Required when | Required only when manual. |
| Constraints | None. |
| Errors | Required label error. |
| Lifecycle | Manual or lookup `data.model` → row. |
| Summary | Included as `Model`. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:model`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.model`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles`. |
| Clarification | — |

#### MTS-09-Q05 — `abiCode`

| Property | Exact contract |
|---|---|
| Position | Third manual field. |
| Visible copy | `ABI Code:`. |
| Control | Manual text; lookup card otherwise. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled manually. |
| Required when | Always in full schema. |
| Constraints | None. |
| Errors | Required label error. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:abiCode`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.abiCode`. |
| Clarification | — |

#### MTS-09-Q06 — `abiGroup`

| Property | Exact contract |
|---|---|
| Position | Fourth manual field; custom lookup error otherwise. |
| Visible copy | `ABI Group:`. |
| Control | Manual numeric `makeNull`; lookup card plus `customAbiError`. |
| Stored/emitted value | Number/null or lookup value. |
| Options | Derived ABI and OPT-MT-40/59 metadata. |
| Visible when | Full manual/card. |
| Enabled when | Manual enabled; custom error controller disabled. |
| Required when | Required unless chosen category Motorcycle/Commercial/Other. |
| Constraints | Same commercial ABI exemption and numeric max test as MTS-08-Q05. |
| Errors | In this schema missing is exact `This field is required.` in both manual and custom channel; max is `ABI Group must be less than or equal to ${maxAbi}`. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:abiGroup/customAbiError`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.abiGroup`. |
| Clarification | CLR-001 |

#### MTS-09-Q07 — `vehicleTypeID`

| Property | Exact contract |
|---|---|
| Position | Fifth manual field. |
| Visible copy | `Vehicle Type:`. |
| Control | Manual `AutoComplete`; lookup card otherwise. |
| Stored/emitted value | Option primitive; callback sets `chosenVehicleType`. |
| Options | OPT-MT-40/59. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Manual only. |
| Constraints | Same motorcycle-driver/plan predicate as MTS-08-Q06. |
| Errors | `Motorcycle type is not allowed.` plus required label error. |
| Lifecycle | Manual/lookup → row/category state. |
| Summary | Omitted. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:vehicleTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.vehicleTypeID`. |
| Clarification | CLR-001 |

#### MTS-09-Q08 — `bodyType`

| Property | Exact contract |
|---|---|
| Position | Sixth manual field. |
| Visible copy | `Body Type:`. |
| Control | Manual text; lookup card. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Manual only. |
| Constraints | None. |
| Errors | Required label error. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:bodyType`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.bodyType`. |
| Clarification | — |

#### MTS-09-Q09 — `gvw`

| Property | Exact contract |
|---|---|
| Position | Seventh manual field. |
| Visible copy | `Gross Vehicle Weight:`. |
| Control | Manual numeric `makeNull`; lookup card/custom error. |
| Stored/emitted value | Number/null; lookup numeric normalization is shared VehicleRegistration behavior. |
| Options | Derived max array. |
| Visible when | Full manual/card. |
| Enabled when | Enabled manually. |
| Required when | Manual except Car/Other; zero counts as present. |
| Constraints | Same Car bypass, null-unlimited and maximum comparison as MTS-08-Q08. |
| Errors | Same required/GVW maximum copy as MTS-08-Q08. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:gvw/customGvwError`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.gvw`. |
| Clarification | CLR-001 |

#### MTS-09-Q10 — `seats`

| Property | Exact contract |
|---|---|
| Position | Eighth manual field. |
| Visible copy | `Seats:`; unlike MTS-08A, no adjacent `MT only usage` message. |
| Control | Manual numeric; lookup card. |
| Stored/emitted value | Number/blank or lookup value. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:seats`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.seats`. |
| Clarification | — |

#### MTS-09-Q11 — `doors`

| Property | Exact contract |
|---|---|
| Position | Ninth manual field. |
| Visible copy | `Doors:`. |
| Control | Manual numeric; lookup card. |
| Stored/emitted value | Number/blank or lookup. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:doors`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.doors`. |
| Clarification | — |

#### MTS-09-Q12 — `fuelType`

| Property | Exact contract |
|---|---|
| Position | Tenth manual field. |
| Visible copy | `Fuel Type:`. |
| Control | Manual text; lookup card. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:fuelType`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.fuelType`. |
| Clarification | — |

#### MTS-09-Q13 — `transmission`

| Property | Exact contract |
|---|---|
| Position | Eleventh manual field. |
| Visible copy | `Transmission:`. |
| Control | Manual text; lookup card. |
| Stored/emitted value | String. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Not required. |
| Constraints | None. |
| Errors | None. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:transmission`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.transmission`. |
| Clarification | — |

#### MTS-09-Q14 — `engineSize`

| Property | Exact contract |
|---|---|
| Position | Twelfth manual field. |
| Visible copy | `Engine Size:`. |
| Control | Manual text; lookup card. |
| Stored/emitted value | String; comparisons use Number. |
| Options | OPT-MT-40/59/62. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Same Car/manual test as ordinary. |
| Constraints | Same non-motorcycle bypass, null limits and driver-before-any-driver CC comparisons as ordinary. |
| Errors | Same required and `Engine size can not be greater than ...` messages. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Unresolved — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:engineSize`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.engineSize`. |
| Clarification | CLR-001 |

#### MTS-09-Q15 — `registrationYear`

| Property | Exact contract |
|---|---|
| Position | Thirteenth manual field. |
| Visible copy | `Registration Year:`. |
| Control | Manual numeric; lookup card. |
| Stored/emitted value | Number/blank or lookup. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Manual only. |
| Constraints | Manual minimum 1900. |
| Errors | Yup minimum/required label error. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:registrationYear`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.registrationYear`. |
| Clarification | — |

#### MTS-09-Q16 — `registrationDate`

| Property | Exact contract |
|---|---|
| Position | Fourteenth manual field. |
| Visible copy | `Registration Date:`. |
| Control | DatePicker with min 1900-01-01. |
| Stored/emitted value | Date-compatible. |
| Options | None. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Manual only. |
| Constraints | Not before 1900-01-01. |
| Errors | `Date cannot be earlier than 01/01/1900.` plus required label. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:registrationDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.registrationDate`. |
| Clarification | — |

#### MTS-09-Q17 — `isImported`

| Property | Exact contract |
|---|---|
| Position | Final manual vehicle attribute. |
| Visible copy | `Imported:`. |
| Control | Radio Yes/No; lookup card. |
| Stored/emitted value | Boolean. |
| Options | Inline/static. |
| Visible when | Full manual/card. |
| Enabled when | Enabled. |
| Required when | Manual only. |
| Constraints | Boolean. |
| Errors | Required label error. |
| Lifecycle | Manual/lookup → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:isImported`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.isImported`. |
| Clarification | — |

#### MTS-09-Q18 — `vehicleValue`

| Property | Exact contract |
|---|---|
| Position | First shared field after manual/card. |
| Visible copy | `Vehicle Value:` with £ prefix. |
| Control | `TextFieldCurrency`. |
| Stored/emitted value | Number/undefined. |
| Options | None. |
| Visible when | Q01 and retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always in full schema. |
| Constraints | Minimum exactly `50000`; unlike MTS-08-Q17 there is no selected-indemnity maximum test. |
| Errors | Yup minimum/default required messages; no custom 50000 copy. |
| Lifecycle | Input → sole specified row. |
| Summary | Omitted; only reg/make/model are projected. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:vehicleValue`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.vehicleValue`. |
| Clarification | — |

#### MTS-09-Q19 — `purchaseDate`

| Property | Exact contract |
|---|---|
| Position | Second shared field. |
| Visible copy | `Purchase Date:`. |
| Control | DatePicker with min 1900-01-01; no UI maxDate. |
| Stored/emitted value | Date-compatible. |
| Options | None. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always full. |
| Constraints | Minimum 1900-01-01 only; unlike ordinary, no future-date maximum. |
| Errors | `Date cannot be earlier than 01/01/1900.` plus required label. |
| Lifecycle | Input → row. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:purchaseDate`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.purchaseDate`. |
| Clarification | — |

#### MTS-09-Q20 — `ownerTypeID` and `ownerGuid`

| Property | Exact contract |
|---|---|
| Position | Third shared field. |
| Visible copy | `Vehicle Owner:`. |
| Control | Generated `AutoComplete`; type4 displays guid. |
| Stored/emitted value | Static values 1/2/3 clear guid; driver guid normalizes to type4+guid. |
| Options | R17 generated options. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | ownerTypeID required. |
| Constraints | Type4 checks matching driver's `coverPersonalVehicle`; this schema calls `this.createError(...)` without returning it, so the exact test-return behavior must be preserved rather than assumed fixed. |
| Errors | Intended `Chosen driver is not eligible to be the owner of a vehicle.` plus required label. |
| Lifecycle | Selection normalization; no automatic dependency clear. |
| Summary | Owner omitted; sanitizer can omit entire row if driver ineligible. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:ownerTypes/ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.ownerTypeID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:isValid`. |
| Clarification | CLR-008 |

#### MTS-09-Q21 — `keptOvernightTypeID`

| Property | Exact contract |
|---|---|
| Position | Fourth shared field. |
| Visible copy | `Where is the vehicle kept overnight?` |
| Control | AutoComplete. |
| Stored/emitted value | Numeric option ID/undefined. |
| Options | OPT-MT-41. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always full. |
| Constraints | Numeric. |
| Errors | Required label error. |
| Lifecycle | Selection → row. |
| Summary | Omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:keptOvernightTypeID`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.keptOvernightTypeID`. |
| Clarification | CLR-001 |

#### MTS-09-Q22 — `vehicleKeptAddress`

| Property | Exact contract |
|---|---|
| Position | Fifth shared field. |
| Visible copy | `Vehicle Overnight Address:`. |
| Control | Generated AutoComplete. |
| Stored/emitted value | Raw selected postcode string. |
| Options | R17: proposer, premises and eligible-driver postcodes, raw uniqueness/order. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always full. |
| Constraints | String only. |
| Errors | Required label error. |
| Lifecycle | Options recompute without clearing stale raw value. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:overnightAddressOptions/vehicleKeptAddress`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.vehicleKeptAddress`. |
| Clarification | — |

#### MTS-09-Q23 — `isPartLeaseAgreement`

| Property | Exact contract |
|---|---|
| Position | Sixth shared field. |
| Visible copy | `Is this vehicle part of a lease agreement?` |
| Control | Radio Yes/No. |
| Stored/emitted value | Boolean. |
| Options | Inline/static. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always full. |
| Constraints | Boolean. |
| Errors | Required label error. |
| Lifecycle | No writes Q24 null; Yes reveals/retains. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:isPartLeaseAgreement`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.isPartLeaseAgreement`. |
| Clarification | — |

#### MTS-09-Q24 — `leaseLengthYears`

| Property | Exact contract |
|---|---|
| Position | After Q23 when truthy. |
| Visible copy | `Length of Lease (years):`. |
| Control | Numeric text. |
| Stored/emitted value | Number/blank; Q23 No writes null. |
| Options | None. |
| Visible when | `watch('isPartLeaseAgreement')`. |
| Enabled when | Enabled. |
| Required when | Q23 exactly true. |
| Constraints | No range. |
| Errors | Required label error. |
| Lifecycle | Reveal/retain or null on No. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:leaseLengthYears`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.leaseLengthYears`. |
| Clarification | — |

#### MTS-09-Q25 — `hasModification`

| Property | Exact contract |
|---|---|
| Position | After lease group; there is no specified-vehicle customer-loan question. |
| Visible copy | `Is this vehicle modified?` |
| Control | Radio Yes/No. |
| Stored/emitted value | Boolean. |
| Options | Inline/static. |
| Visible when | Full retrieved/manual. |
| Enabled when | Enabled. |
| Required when | Always full. |
| Constraints | Boolean. |
| Errors | Required label error. |
| Lifecycle | Yes ensures Q26 row; No clears all. |
| Summary | Omitted. |
| Evidence | Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:hasModification`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.hasModification`. |
| Clarification | — |

#### MTS-09-Q26 — `modifications[].modificationID`

| Property | Exact contract |
|---|---|
| Position | Repeated group after Q25/custom error; headings `Modification N`. |
| Visible copy | `What modifications have been made?`; X after first; ` Add another modification`. |
| Control | AutoComplete rows and field-array actions. |
| Stored/emitted value | Distinct specified shape `{modificationID:number|undefined}` under `modifications`, not ordinary `vehicleModifications[].modificationId`. |
| Options | OPT-MT-42. |
| Visible when | Q25 truthy; Add while length `<10`. |
| Enabled when | Enabled; first no X. |
| Required when | Each row ID required. |
| Constraints | Truthy IDs unique; UI maximum 10; no schema cardinality. |
| Errors | Exact duplicate `Some modifications have been chosen multiple times.` routed to `customModificationError`; row required label error. |
| Lifecycle | Add default `{modificationID:undefined}`; indexed remove/clear-all; lookup failure resets `modifications:[]`. |
| Summary | Entirely omitted. |
| Evidence | Unresolved — Unresolved scope (rows): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:modifications`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema.modifications`. |
| Clarification | CLR-001 |

#### MTS-09-R16 — Lean/full resolver and one-row submit writes

- Trigger: initial raw specified array, Q01 callbacks, and valid submit.
- Evaluation point: form creation/rerender/submit.
- Affected fields: Q01–Q26.
- Raw-state effect: no/empty rows with local false use `MTStep9SchemaLean`; local true uses `MTStep9Schema` with derived parameters equivalent to R02 except no maxVehicleValue. If local false while a pre-existing raw row remains, the source resolver expression can evaluate to `undefined` until submit. No submit writes exact false/`[]`; Yes omits Q01/custom/category state and writes a single-element `specifiedVehicles` array plus true.
- Projection effect: next movement is MTS-10; sanitizer later governs eligibility.
- User-visible result/error: full fields mount only for Q01 truthy and retrieved/manual submodes; validation follows Q records.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:methods/onSubmit`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9SchemaLean/MTStep9Schema`.
- Clarification: —.

#### MTS-09-R17 — Specified generated owner/address differences

- Trigger: render from proposer/company/premises/drivers.
- Evaluation point: render/selection.
- Affected fields: Q20/Q22.
- Raw-state effect: owner option ordering mirrors R03 (drivers first, then static entries), but Step 9 maps **all** drivers for every company type; it does not apply ordinary sole-trader relationship filtering. Owner normalization is type4+guid. Address sources are proposer, premises, then only drivers with truthy `coverPersonalVehicle`; Lodash `uniq` applies to the raw postcode strings, and each option uses identical raw postcode for `value` and `text`. Unlike MTS-08A, Step 9 does not remove spaces, uppercase, strip characters or call `fixPostcodeValue`.
- Projection effect: dependency changes recompute options without raw clears; sanitizer filters invalid driver-owned row.
- User-visible result/error: a stale selected value can stop displaying; schema behavior is Q20/Q22.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:driverOwners/ownerTypes/overnightAddressOptions`.
- Clarification: —.

#### MTS-09-R18 — Raw stale values versus `sanitizeMotorTradeVehicles`

- Trigger: summary/terminal projection and any MTS-09 skip under R14.
- Evaluation point: sanitizer invocation, not manager navigation and not raw store mutation.
- Affected fields: raw ordinary/specified arrays and Q01.
- Raw-state effect: none. Skipped Step 9 values remain raw. Sanitizer repeats exact eligibility `coverLevelID === 1 && !!ownNumeric && ownNumeric <= 15000`. Each type4-owned row also requires some matching driver guid with `coverPersonalVehicle === true`.
- Projection effect: ordinary rows are filtered only for owner eligibility. Specified rows become `[]` when Step 9 is ineligible, otherwise owner-filtered. When raw `specifiedVehicles` is truthy (including `[]`), projected `addSpecifiedVehicle` is `cleanedSpecified.length > 0`; otherwise the raw flag is retained. Returned values are not written back.
- User-visible result/error: MTS-14 omits the specified section unless projected length >0; no warning explains stale/filtered data.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles/summarySpecifiedVehicles`.
- Clarification: CLR-001 for option metadata rows.

#### MTS-09-R19 — Back without save and Summary projection

- Trigger: Go Back or MTS-14 projection/edit.
- Evaluation point: click/render.
- Affected fields: Q01–Q26.
- Raw-state effect: Go Back performs no Step 9 `setData`; pending edits are lost and prior persisted Step 9 values remain. It writes step8 and opens MTS-08B with `{showVehicles:true}`.
- Projection effect: when projected specified array length >0, MTS-14 section `Specified Vehicle` renders only first row registration heading, `Make ` and `Model`; Edit uses the hard-coded standard-family MTS-09 href with no route state.
- User-visible result/error: buttons `Next` and `Go Back`; no save/discard warning.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:Go Back`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles/goToStepForEdit`.
- Clarification: —.

#### MTS-09-U01 — Heading, lookup/manual states and actions

- Position and mount condition: `Specified Vehicle` heading; Q01; then Q02 lookup, retrieved card/custom errors, or manual Q03–Q17; then Q18–Q26; Next and Go Back.
- Kind: heading/card/loading/errors/buttons.
- Exact observable contract: lookup uses the same `Search`, `Enter Manually`, overlay and result-card behavior as MTS-08A with the specified failure reset; no list/card surface exists for Step 9.
- Related questions/rules: Q01–Q26; R16–R19.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:specifiedVehicleCase`.
- Clarification: —.

#### AUD-MT-04 — Ordinary-versus-specified difference matrix

- Audit position: documentation-only comparison immediately after MTS-09-U01; it has no mounted React node.
- Purpose: ordinary-versus-specified vehicle behavior comparison.
- Assertion: no independent visible output; each row contrasts the mounted MTS-08A and MTS-09 control, validation, lifecycle, and Summary behavior without merging the two shapes.
- Coverage: MTS-08 Q01–Q26/R01–R14; MTS-09 Q01–Q26/R16–R20.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema/MTStep9Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: —.

| Concern | MTS-08A ordinary | MTS-09 specified |
|---|---|---|
| Cardinality | zero or more raw `vehicles`; list-managed | exactly one row on Yes; `[]` on No |
| Mode schema | `VehicleDetailSchema` | lean `MTStep9SchemaLean` or full `MTStep9Schema` |
| Vehicle value | selected-indemnity maximum test with source return behavior | minimum `50000`; no maximum test |
| Purchase date | min 1900 and max today | min 1900 only |
| Seats copy | manual `>=9` displays `MT only usage` | no adjacent manual message |
| Customer loan | Q24 mounted and validated | no field |
| Owner driver options | sole trader filters relationship ID3; other types all drivers | all drivers for every company type |
| Overnight options | spaces removed before uniq; normalized/formatted text | uniq raw strings; raw value/text |
| Modifications | `vehicleModifications[].modificationId` | `modifications[].modificationID` |
| Lookup failure reset | `reset()` | reset Q01 true plus `modifications:[]` |
| Summary | section truthy even for normalized empty array; all surviving rows | only when surviving projected length >0; first row only |

#### AUD-MT-05 — Option-consumer backlinks

- Audit position: documentation-only option backlink ledger after AUD-MT-04; it has no mounted React node.
- Purpose: option-consumer traceability ledger.
- Assertion: no independent visible output; the table maps every specified-vehicle dynamic choice/metadata predicate to its canonical OPT record.
- Coverage: MTS-09 Q06/Q07/Q09/Q14/Q21/Q26 and R14/R18; OPT-MT-09/19–21/27/29/30/40–42/59/62/72.
- Evidence: Unresolved — mounted consumers are direct, while option rows/metadata remain CLR-001: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`.
- Clarification: CLR-001.

| OPT record | MTS-09 consumer |
|---|---|
| OPT-MT-09 | R14/R18 `numericValue` eligibility |
| OPT-MT-19/20/21/27/29/30/62/72 | Q06/Q09/Q14 and full-schema derived parameters |
| OPT-MT-40/59 | Q06/Q07/Q09/Q14 and lookup/category behavior |
| OPT-MT-41 | Q21 |
| OPT-MT-42 | Q26 |

#### MTS-09-R20 — MTS-07..09 final bidirectional reconciliation

- Trigger: final Task 2 UI↔schema↔state↔summary↔option audit.
- Evaluation point: documentation verification only.
- Affected fields: every mounted MTS-07 Q/R/U and MTS-08 Q/R/U; MTS-09 Q01–Q26/R16–R19/U01; and AUD-MT-03–AUD-MT-05.
- Raw-state effect: none. Every mounted Step9 Controller maps to Q01–Q26; every lean/full schema path maps to those records or the named state-only custom/category channels. Ordinary and specified fields remain separate despite shared labels. R14 and R18 distinguish manager non-write/stale raw data from sanitizer false/`[]` projection.
- Projection effect: field→summary and summary→field reconcile trade-plate Q01–Q03, ordinary Q01–Q03, and specified Q02–Q04; all other fields are explicitly omitted. Every dynamic/config option consumer links to a canonical OPT/CLR record.
- User-visible result/error: all headings, lookup/manual/card/list/loading/blank controls, fixed errors and exact copy are assigned; no returned vehicle fixture, environment assignment, API contract, quote/result/payment/checkout behavior or legacy edit was introduced.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:VehicleSummaryCard`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; `CleggGifford.CoverX.UI/src/components/fields/VehicleRegistration.tsx:VehicleRegistration`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema/VehicleDetailSchema/MTStep9Schema`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerLogic`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerPrevLogic`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: CLR-001 and CLR-007 only.

#### AUD-MT-06 — MTS-07..09 completeness ledger

- Audit position: documentation-only completeness ledger closing the MTS-07–09 family; it has no mounted React node.
- Purpose: bidirectional source/record audit ledger.
- Assertion: no user-visible output; each row validates a named Step 7–9 source partition against stable records and preserves CLR-bounded option dependencies.
- Coverage: MTS-07 Q01–Q03/R01–R03/U01; MTS-08 Q01–Q26/R01–R15/U01/U03–U06; MTS-09 Q01–Q26/R16–R20/U01; AUD-MT-03–AUD-MT-05.
- Evidence: Unresolved — mounted partitions are direct, while option rows/metadata remain CLR-001: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`.
- Clarification: CLR-001.

| Audit direction | Source set | Documentation destination | Result |
|---|---|---|---|
| UI → schema/records | Step7, Step8, VehicleDetails/List/Card, Step9, VehicleRegistration | MTS-07 Q01–Q03/U01/R01–R03; MTS-08 Q01–Q26/U01/U03–U06/R01–R15; MTS-09 Q01–Q26/U01/R16–R20 | PASS |
| Schema → UI/state | MTStep7Schema, VehicleDetailSchema, MTStep9SchemaLean/full | Mounted Q records plus named custom/category state | PASS |
| Field → summary | Every MTS-07..09 Q | R03/R06/U04/R19 explicit inclusion/omission | PASS |
| Summary → field | Trade Plates, Vehicles, Specified Vehicle | MTS-07 Q01–Q03; MTS-08 Q01–Q03; MTS-09 Q02–Q04 | PASS |
| Option → consumer | OPT-MT-09/19–21/27/29/30/40–42/59/62/72 | AUD-MT-03; AUD-MT-05 | PASS |
| Consumer → option | Every vehicle dynamic choice/metadata predicate | Canonical OPT records and CLR-001 | PASS |
| Repeated/list state | plates, ordinary/spec modifications, vehicle list/pagination | MTS-07-R01; MTS-08-R05/R10–R13; MTS-09-Q26 | PASS |
| Raw → sanitized | manager Step 9 skip and sanitizeMotorTradeVehicles | MTS-08-R14; MTS-09-R18 | PASS |

## MTS-10 — Vehicles to be Driven

### Context, order, and category matrix

`MotorTradeStep10` mounts the translated heading `Vehicles to be Driven`, then maps the exported `collapserTitles` array in the exact order below. Each ordinary row is a `DetailCollapser`; a row whose force predicate is true is replaced by a bare percentage control, so its added flag cannot be toggled on this surface. No Step 10 call supplies `DetailCollapser.disabled`; every non-forced add/remove button therefore receives the shared default `disabled=false`. All dynamic vehicle-type row labels and metadata remain `CLR-001`; the code-resident strings and predicates below are confirmed.

| # | Exact `collapserTitles` label | Added flag / percentage Q | Forced bare-percentage predicate | Disabled | Extra detail Q | Close/reset and valid-submit projection | Raw / MTS-14 projection |
|---|---|---|---|---|---|---|---|
| 1 | `Standard Cars` | MTS-10-Q01 `standardCars`; MTS-10-Q02 `percentageOfStandardCars` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Truthy flag includes the source label and raw percentage in `vehiclesToBeDriven` |
| 2 | `Sport Performance Cars` | MTS-10-Q03 `sportsPerformanceVehicles`; MTS-10-Q04 `percentageOfSportsPerformanceVehicles` | `typeof max([driverMaxAbi, driverPlanMaxAbi]) === 'number' && value > 28` | Never disabled; the forbidden branch is schema validation, not a disabled control | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 3 | `Commercial Vehicles` | MTS-10-Q05 `commercialVehicles`; MTS-10-Q06 `percentageOfCommercialVehicles` | Some ordinary or specified vehicle has a truthy `vehicleTypeID` in `OPT-MT-40` rows whose `category === 'Commercial'`, and that vehicle's `gvw > 3500` | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 4 | `Motorcycles` | MTS-10-Q07 `motorcycles`; MTS-10-Q08 `percentageOfMotorcycles` | Some driver has truthy `motorcycleLicenceIssueDate`, OR `driverPlanId !== 1 && aadMaxMotorcycleCcID !== 1` | Never disabled; the forbidden branch is schema validation | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 5 | `Classics over 25 years` | MTS-10-Q09 `classicsOver25Years`; MTS-10-Q10 `percentageOfClassicsOver25Years` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 6 | `Imported Vehicles` | MTS-10-Q11 `importedVehicles`; MTS-10-Q12 `percentageOfImportedVehicles` | Some ordinary or specified vehicle has truthy `isImported` | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 7 | `Modified Vehicles` | MTS-10-Q13 `modifiedVehicles`; MTS-10-Q14 `percentageOfModifiedVehicles` | Some **ordinary** `formData.vehicles` row has truthy `vehicleModifications` with `length > 0`; specified-vehicle `modifications` do not enter this predicate | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 8 | `Horseboxes / Agricultural / Plan Machinery` | MTS-10-Q15 `horseboxesAgriculturalPlantMachinery`; MTS-10-Q16 `percentageOfHorseboxesAgriculturalPlantMachinery` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Preserve `Plan`, not `Plant`; same source-order label/percentage projection |
| 9 | `Rally / Track / Kit Cars / Trikes ` | MTS-10-Q17 `rallyTrackKitCarsTrikes`; MTS-10-Q18 `percentageOfRallyTrackKitCarsTrikes` | Some ordinary or specified vehicle has a truthy `vehicleTypeID` in `OPT-MT-40` rows whose `requiresRallyTrackKitCarsTrikes` is truthy | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Preserve the trailing space; same source-order label/percentage projection |
| 10 | `Transporters carrying more than 2 vehicles` | MTS-10-Q19 `transportersCarryingMoreThan2Vehicles`; MTS-10-Q20 `percentageOfTransportersCarryingMoreThan2Vehicles` | Never forced | Never disabled | MTS-10-Q21 `maxVehiclesCarriedByTransporter` | Close writes percentage `0` and `resetField` for Q21; valid submit writes Q21 `undefined` when Q19 is false | Truthy flag projects label/percentage and truthy Q21 as the `max` summary row |
| 11 | `Quad Bikes` | MTS-10-Q22 `quadBikes`; MTS-10-Q23 `percentageOfQuadBikes` | Some ordinary or specified vehicle has a truthy `vehicleTypeID` in `OPT-MT-40` rows whose `requiresQuadBikes` is truthy | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 12 | `Motorhomes` | MTS-10-Q24 `motorhomes`; MTS-10-Q25 `percentageOfMotorhomes` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 13 | `Vehicles with more than 7 seats` | MTS-10-Q26 `vehiclesWithMoreThan7Seats`; MTS-10-Q27 `percentageOfVehiclesWithMoreThan7Seats` | Some ordinary or specified vehicle has truthy `seats && seats > 7` | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 14 | `Taxis` | MTS-10-Q28 `taxis`; MTS-10-Q29 `percentageOfTaxis` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |
| 15 | `Vehicles carrying corrosive, toxic, explosive or flammable goods/substances` | MTS-10-Q30 `vehiclesCarryingCorrosiveToxicExplosiveFlammableGoods`; MTS-10-Q31 `percentageOfVehiclesCarryingCorrosiveToxicExplosiveFlammableGoods` | Never forced | Never disabled | MTS-10-Q32 `corrosiveToxicExplosiveFlammableGoodsDetails` | Close writes percentage `0` and resets Q32; valid submit writes Q32 `undefined` when Q30 is false | Label/percentage project, but summary looks for `${key}Details`, i.e. the absent `vehiclesCarryingCorrosiveToxicExplosiveFlammableGoodsDetails`, so Q32 is not displayed |
| 16 | `Airside or Hazardous Locations` | MTS-10-Q33 `airsideOrHazardousLocations`; MTS-10-Q34 `percentageOfAirsideOrHazardousLocations` | Never forced | Never disabled | MTS-10-Q35 `airsideOrHazardousLocationsDetails` | Close writes percentage `0` and resets Q35; valid submit writes Q35 `undefined` when Q33 is false | Truthy flag projects label/percentage and truthy Q35 as `Detail:` |
| 17 | `Tankers` | MTS-10-Q36 `tankers`; MTS-10-Q37 `percentageOfTankers` | Never forced | Never disabled | — | Close writes percentage `0`; valid submit preserves both values | Same source-order label/percentage projection |

### Editable-value records

The following records use Direct React/Yup evidence from `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:collapserTitles/defaultObject/MotorTradeStep10` and `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`. Every percentage uses CTL-MT-11 with `numberFormat`, label ``Percentage of ${item.label}:``, and re-triggers only `totalPercentage` after a change when that error is already present. Unless a record states otherwise, a category flag is an optional boolean controlled by CTL-MT-16, a percentage is a Yup number required with `.min(1).required().label('This')` only while its flag is exactly true, closing writes the percentage to numeric `0`, and MTS-14 includes it only when the persisted flag is truthy.

#### MTS-10-Q01 — `standardCars`

| Property | Exact contract |
|---|---|
| Position | Category 1 of 17 in the mounted `collapserTitles` order, owning Q02. |
| Visible copy | Card title `Standard Cars`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw value retained by `defaultObject`; no force predicate; close toggles false and invokes Q02 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw value retained by `defaultObject`; no force predicate; close toggles false and invokes Q02 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 1. A truthy persisted flag emits `Standard Cars` and Q02 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q02 — `percentageOfStandardCars`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 1, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Standard Cars:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw value retained except exact `null` is omitted from form defaults; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q01 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q01 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw value retained except exact `null` is omitted from form defaults; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q01, at source-order category 1. The bold category label `Standard Cars` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q03 — `sportsPerformanceVehicles`

| Property | Exact contract |
|---|---|
| Position | Category 2 of 17 in the mounted `collapserTitles` order, owning Q04. |
| Visible copy | Card title `Sport Performance Cars`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR numeric `sportVehiclesAllowed > 28` becomes form-default true; close is available only in the non-forced render. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When `typeof max([driverMaxAbi, driverPlanMaxAbi]) === 'number' && value > 28`. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR numeric `sportVehiclesAllowed > 28` becomes form-default true; close is available only in the non-forced render. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 2. A truthy persisted flag emits `Sport Performance Cars` and Q04 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q04 — `percentageOfSportsPerformanceVehicles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 2, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Sport Performance Cars:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw value retained except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q03 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | No generic conditional required rule. The `SportsCards` test requires a truthy value only when the category flag is true, sports are not forbidden, and the numeric ABI maximum is greater than 28. |
| Constraints | `SportsCards` and `SportsCars` are explicit custom tests; no `.min(1)` applies to this percentage. |
| Errors | CTL-MT-11/FormError shows `This is a required field.` for the `SportsCards` failure or `To have a Sport Performance Cars cover, policy must meet the criteria` for the forbidden branch. |
| Lifecycle | raw value retained except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q03, at source-order category 2. The bold category label `Sport Performance Cars` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q05 — `commercialVehicles`

| Property | Exact contract |
|---|---|
| Position | Category 3 of 17 in the mounted `collapserTitles` order, owning Q06. |
| Visible copy | Card title `Commercial Vehicles`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR computed `commercialForce` becomes form-default true; ordinary close invokes Q06 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary or specified vehicle has a truthy `vehicleTypeID` whose OPT-MT-40 row has `category === 'Commercial'`, and that vehicle has `gvw > 3500`. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR computed `commercialForce` becomes form-default true; ordinary close invokes Q06 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 3. A truthy persisted flag emits `Commercial Vehicles` and Q06 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q06 — `percentageOfCommercialVehicles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 3, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Commercial Vehicles:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q05 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q05 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q05, at source-order category 3. The bold category label `Commercial Vehicles` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q07 — `motorcycles`

| Property | Exact contract |
|---|---|
| Position | Category 4 of 17 in the mounted `collapserTitles` order, owning Q08. |
| Visible copy | Card title `Motorcycles`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR either force branch becomes form-default true; ordinary close invokes Q08 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When a driver has a truthy `motorcycleLicenceIssueDate`, or `driverPlanId !== 1 && aadMaxMotorcycleCcID !== 1`. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR either force branch becomes form-default true; ordinary close invokes Q08 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 4. A truthy persisted flag emits `Motorcycles` and Q08 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q08 — `percentageOfMotorcycles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 4, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Motorcycles:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q07 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required by the custom test when MTS-10-Q07 is true and motorcycles are not forbidden; otherwise the test passes unless the forbidden branch applies. |
| Constraints | The true branch applies `motorCycleAllowed` and label `This`; it does not apply `.min(1)`. |
| Errors | CTL-MT-11/FormError shows `To have a Motorcycles cover, policy must meet the criteria` when forbidden, otherwise `This is a required field.` for a falsey percentage; all other callback branches return true. |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q07, at source-order category 4. The bold category label `Motorcycles` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q09 — `classicsOver25Years`

| Property | Exact contract |
|---|---|
| Position | Category 5 of 17 in the mounted `collapserTitles` order, owning Q10. |
| Visible copy | Card title `Classics over 25 years`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false and invokes Q10 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false and invokes Q10 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 5. A truthy persisted flag emits `Classics over 25 years` and Q10 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q10 — `percentageOfClassicsOver25Years`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 5, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Classics over 25 years:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q09 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q09 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q09, at source-order category 5. The bold category label `Classics over 25 years` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q11 — `importedVehicles`

| Property | Exact contract |
|---|---|
| Position | Category 6 of 17 in the mounted `collapserTitles` order, owning Q12. |
| Visible copy | Card title `Imported Vehicles`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR force predicate becomes form-default true; ordinary close invokes Q12 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary or specified vehicle has truthy `isImported`. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR force predicate becomes form-default true; ordinary close invokes Q12 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 6. A truthy persisted flag emits `Imported Vehicles` and Q12 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q12 — `percentageOfImportedVehicles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 6, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Imported Vehicles:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q11 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q11 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q11, at source-order category 6. The bold category label `Imported Vehicles` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q13 — `modifiedVehicles`

| Property | Exact contract |
|---|---|
| Position | Category 7 of 17 in the mounted `collapserTitles` order, owning Q14. |
| Visible copy | Card title `Modified Vehicles`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR force predicate becomes form-default true; ordinary close invokes Q14 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary `vehicles` row has a truthy non-empty `vehicleModifications` array; specified `modifications` do not count. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | When the ordinary-vehicle modification predicate is true, the schema marks the boolean required; otherwise it is optional. The required rule does not assert that the value is true. |
| Constraints | `yup.boolean().required().label('This')` under the modification predicate; otherwise `yup.boolean().notRequired()`. |
| Errors | If the required branch receives no boolean, CTL-MT-04/FormError renders the result of `.required().label('This')`; Step 10 supplies no custom boolean error literal, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw true OR force predicate becomes form-default true; ordinary close invokes Q14 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 7. A truthy persisted flag emits `Modified Vehicles` and Q14 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-009 |

#### MTS-10-Q14 — `percentageOfModifiedVehicles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 7, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Modified Vehicles:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q13 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q13 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q13, at source-order category 7. The bold category label `Modified Vehicles` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q15 — `horseboxesAgriculturalPlantMachinery`

| Property | Exact contract |
|---|---|
| Position | Category 8 of 17 in the mounted `collapserTitles` order, owning Q16. |
| Visible copy | Card title `Horseboxes / Agricultural / Plan Machinery`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false and invokes Q16 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false and invokes Q16 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 8. A truthy persisted flag emits `Horseboxes / Agricultural / Plan Machinery` and Q16 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q16 — `percentageOfHorseboxesAgriculturalPlantMachinery`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 8, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Horseboxes / Agricultural / Plan Machinery:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q15 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q15 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q15, at source-order category 8. The bold category label `Horseboxes / Agricultural / Plan Machinery` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q17 — `rallyTrackKitCarsTrikes`

| Property | Exact contract |
|---|---|
| Position | Category 9 of 17 in the mounted `collapserTitles` order, owning Q18. |
| Visible copy | Card title `Rally / Track / Kit Cars / Trikes `, preserving its trailing space. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR force predicate becomes form-default true; ordinary close invokes Q18 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary or specified vehicle type has truthy `requiresRallyTrackKitCarsTrikes` metadata. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR force predicate becomes form-default true; ordinary close invokes Q18 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 9. A truthy persisted flag emits `Rally / Track / Kit Cars / Trikes ` and Q18 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-001 |

#### MTS-10-Q18 — `percentageOfRallyTrackKitCarsTrikes`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 9, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Rally / Track / Kit Cars / Trikes :`; the label’s trailing space remains before the colon. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q17 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q17 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q17, at source-order category 9. The bold category label `Rally / Track / Kit Cars / Trikes ` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q19 — `transportersCarryingMoreThan2Vehicles`

| Property | Exact contract |
|---|---|
| Position | Category 10 of 17 in the mounted `collapserTitles` order, owning Q20 and Q21. |
| Visible copy | Card title `Transporters carrying more than 2 vehicles`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false, writes Q20 `0`, and resets Q21. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false, writes Q20 `0`, and resets Q21. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 10. A truthy persisted flag emits `Transporters carrying more than 2 vehicles` and Q20 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. A truthy Q21 follows as the `Maximum number of vehicles that can be carried by transporter: ` row. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q20 — `percentageOfTransportersCarryingMoreThan2Vehicles`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 10, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Transporters carrying more than 2 vehicles:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q19 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q19 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q19, at source-order category 10. The bold category label `Transporters carrying more than 2 vehicles` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign. A truthy Q21 then follows as the `Maximum number of vehicles that can be carried by transporter: ` row; otherwise this category and its values are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q21 — `maxVehiclesCarriedByTransporter`

| Property | Exact contract |
|---|---|
| Position | Final dependent value inside category 10, after its percentage input. |
| Visible copy | `Maximum number of vehicles that can be carried by transporter: `, preserving its trailing space. |
| Control | CTL-MT-09 number input with an empty placeholder. |
| Stored/emitted value | raw except exact `null`; close uses `resetField`; valid submit writes `undefined` when Q19 is false; Back does neither normalization. |
| Options | No options; this is an editable number/text value. |
| Visible when | Mounted inside the open MTS-10-Q19 category; a forced branch does not apply to this category. |
| Enabled when | Always enabled while mounted; no disabled prop is supplied. |
| Required when | Required only when MTS-10-Q19 is exact `true`; otherwise optional. |
| Constraints | True branch: `yup.number().required().min(3).typeError('This is a required field').label('This')`; false branch: `notRequired()`. |
| Errors | CTL-MT-09/FormError can render source literal type error `This is a required field`; the active branch also applies `.required().min(3).label('This')`, whose dependency-generated required/minimum text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close uses `resetField`; valid submit writes `undefined` when Q19 is false; Back does neither normalization. |
| Summary | When Q19 and this value are truthy, it follows the category percentage under the same trailing-space label and renders the raw number; otherwise it is omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-009 |

#### MTS-10-Q22 — `quadBikes`

| Property | Exact contract |
|---|---|
| Position | Category 11 of 17 in the mounted `collapserTitles` order, owning Q23. |
| Visible copy | Card title `Quad Bikes`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR force predicate becomes form-default true; ordinary close invokes Q23 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary or specified vehicle type has truthy `requiresQuadBikes` metadata. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR force predicate becomes form-default true; ordinary close invokes Q23 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 11. A truthy persisted flag emits `Quad Bikes` and Q23 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-001 |

#### MTS-10-Q23 — `percentageOfQuadBikes`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 11, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Quad Bikes:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q22 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q22 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q22, at source-order category 11. The bold category label `Quad Bikes` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q24 — `motorhomes`

| Property | Exact contract |
|---|---|
| Position | Category 12 of 17 in the mounted `collapserTitles` order, owning Q25. |
| Visible copy | Card title `Motorhomes`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false and invokes Q25 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false and invokes Q25 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 12. A truthy persisted flag emits `Motorhomes` and Q25 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q25 — `percentageOfMotorhomes`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 12, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Motorhomes:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q24 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q24 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q24, at source-order category 12. The bold category label `Motorhomes` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q26 — `vehiclesWithMoreThan7Seats`

| Property | Exact contract |
|---|---|
| Position | Category 13 of 17 in the mounted `collapserTitles` order, owning Q27. |
| Visible copy | Card title `Vehicles with more than 7 seats`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw true OR force predicate becomes form-default true; ordinary close invokes Q27 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: When an ordinary or specified vehicle has truthy `seats && seats > 7`. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw true OR force predicate becomes form-default true; ordinary close invokes Q27 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 13. A truthy persisted flag emits `Vehicles with more than 7 seats` and Q27 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q27 — `percentageOfVehiclesWithMoreThan7Seats`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 13, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Vehicles with more than 7 seats:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; ordinary close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q26 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q26 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; ordinary close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q26, at source-order category 13. The bold category label `Vehicles with more than 7 seats` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q28 — `taxis`

| Property | Exact contract |
|---|---|
| Position | Category 14 of 17 in the mounted `collapserTitles` order, owning Q29. |
| Visible copy | Card title `Taxis`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false and invokes Q29 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false and invokes Q29 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 14. A truthy persisted flag emits `Taxis` and Q29 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q29 — `percentageOfTaxis`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 14, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Taxis:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q28 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q28 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q28, at source-order category 14. The bold category label `Taxis` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q30 — `vehiclesCarryingCorrosiveToxicExplosiveFlammableGoods`

| Property | Exact contract |
|---|---|
| Position | Category 15 of 17 in the mounted `collapserTitles` order, owning Q31 and Q32. |
| Visible copy | Card title `Vehicles carrying corrosive, toxic, explosive or flammable goods/substances`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false, writes Q31 `0`, and resets Q32. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false, writes Q31 `0`, and resets Q32. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 15. A truthy persisted flag emits `Vehicles carrying corrosive, toxic, explosive or flammable goods/substances` and Q31 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. Q32 is never displayed because the generic lookup asks for the different, absent derived property recorded by Q32. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q31 — `percentageOfVehiclesCarryingCorrosiveToxicExplosiveFlammableGoods`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 15, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Vehicles carrying corrosive, toxic, explosive or flammable goods/substances:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q30 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q30 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q30, at source-order category 15. The bold category label `Vehicles carrying corrosive, toxic, explosive or flammable goods/substances` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign. Q32 is never displayed because the generic lookup asks for the different, absent derived property recorded by Q32; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q32 — `corrosiveToxicExplosiveFlammableGoodsDetails`

| Property | Exact contract |
|---|---|
| Position | Final dependent value inside category 15, after its percentage input. |
| Visible copy | `Please provide details for Vehicles carrying corrosive, toxic, explosive or flammable goods/substances`. |
| Control | CTL-MT-08 textarea with placeholder `Please provide details:`. |
| Stored/emitted value | raw except exact `null`; close resets the field; valid submit writes `undefined` when Q30 is false; Back preserves the current pending value without that clear. |
| Options | No options; this is an editable number/text value. |
| Visible when | Mounted inside the open MTS-10-Q30 category; a forced branch does not apply to this category. |
| Enabled when | Always enabled while mounted; no disabled prop is supplied. |
| Required when | Required only when MTS-10-Q30 is exact `true`; otherwise optional. |
| Constraints | True branch: `yup.string().required().label('This')`; false branch: `notRequired()`. No Yup maximum is declared. |
| Errors | CTL-MT-08/FormError renders the result of `.required().label('This')`; Step 10 supplies no custom detail error literal, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close resets the field; valid submit writes `undefined` when Q30 is false; Back preserves the current pending value without that clear. |
| Summary | Never rendered: Summary derives `vehiclesCarryingCorrosiveToxicExplosiveFlammableGoodsDetails`, which is not this stored path. Q30 still emits its label/percentage; this detail is omitted even when truthy. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-009 |

#### MTS-10-Q33 — `airsideOrHazardousLocations`

| Property | Exact contract |
|---|---|
| Position | Category 16 of 17 in the mounted `collapserTitles` order, owning Q34 and Q35. |
| Visible copy | Card title `Airside or Hazardous Locations`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false, writes Q34 `0`, and resets Q35. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false, writes Q34 `0`, and resets Q35. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 16. A truthy persisted flag emits `Airside or Hazardous Locations` and Q34 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. A truthy Q35 follows as `Detail:`. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q34 — `percentageOfAirsideOrHazardousLocations`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 16, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Airside or Hazardous Locations:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q33 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q33 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q33, at source-order category 16. The bold category label `Airside or Hazardous Locations` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign. A truthy Q35 then follows as `Detail:`; otherwise this category and its values are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

#### MTS-10-Q35 — `airsideOrHazardousLocationsDetails`

| Property | Exact contract |
|---|---|
| Position | Final dependent value inside category 16, after its percentage input. |
| Visible copy | `Please provide details for Airside or Hazardous Locations`. |
| Control | CTL-MT-08 textarea with placeholder `Please provide details:`. |
| Stored/emitted value | raw except exact `null`; close resets; valid submit writes `undefined` when Q33 is false; Back preserves pending state without that clear. |
| Options | No options; this is an editable number/text value. |
| Visible when | Mounted inside the open MTS-10-Q33 category; a forced branch does not apply to this category. |
| Enabled when | Always enabled while mounted; no disabled prop is supplied. |
| Required when | Required only when MTS-10-Q33 is exact `true`; otherwise optional. |
| Constraints | True branch: `yup.string().required().label('This')`; false branch: `notRequired()`. No Yup maximum is declared. |
| Errors | CTL-MT-08/FormError renders the result of `.required().label('This')`; Step 10 supplies no custom detail error literal, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close resets; valid submit writes `undefined` when Q33 is false; Back preserves pending state without that clear. |
| Summary | When Q33 and this value are truthy, Summary appends a `Detail:` row with the raw string after category 16; otherwise it is omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-009 |

#### MTS-10-Q36 — `tankers`

| Property | Exact contract |
|---|---|
| Position | Category 17 of 17 in the mounted `collapserTitles` order, owning Q37. |
| Visible copy | Card title `Tankers`. |
| Control | `DetailCollapser`/CTL-MT-16 owns the boolean added state. In the ordinary branch its enabled Add/remove control writes this field; in the forced branch the boolean control is absent and only the bare percentage control mounts. |
| Stored/emitted value | raw except exact `null`; close toggles false and invokes Q37 reset. |
| Options | No option collection. The ordinary Add/remove affordance represents boolean true/false; it is not a Yes/No radio group. |
| Visible when | The category slot is always processed. The boolean Add/remove control mounts only when the force predicate is false. Force predicate: Never; this category always uses the ordinary collapsible-card branch. |
| Enabled when | Every mounted Add/remove control is enabled because Step 10 supplies no `DetailCollapser.disabled` prop. A forced toggle is absent, not disabled. |
| Required when | Never; the schema declares this boolean optional. |
| Constraints | `yup.boolean().notRequired()`; percentage and aggregate constraints belong to the percentage field and MTS-10-R04/R05. |
| Errors | No field-specific schema error. The empty-card error is owned by `atLeastOneType`, not this boolean. |
| Lifecycle | raw except exact `null`; close toggles false and invokes Q37 reset. |
| Summary | In the `Vehicles to be Driven` section, this is source-order category 17. A truthy persisted flag emits `Tankers` and Q37 as the raw numeric percentage with no percent sign; a falsey flag omits the category completely. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | — |

#### MTS-10-Q37 — `percentageOfTankers`

| Property | Exact contract |
|---|---|
| Position | Percentage input for category 17, immediately inside its ordinary card or replacing that card in the forced branch. |
| Visible copy | `Percentage of Tankers:`. |
| Control | CTL-MT-11 numeric input with `numberFormat`, its `fieldState`, and an `onChangeCallBack` that re-triggers only `totalPercentage` when that aggregate error already exists. |
| Stored/emitted value | raw except exact `null`; close writes `0`. |
| Options | No options; this is a numeric editable value. |
| Visible when | Mounted while MTS-10-Q36 is added, and also mounted as a bare input whenever the category force predicate is true. |
| Enabled when | Always enabled while mounted; Step 10 passes no disabled prop. |
| Required when | Required only when MTS-10-Q36 is exact `true`; otherwise optional. |
| Constraints | The true branch is `yup.number().min(1).required().label('This')`; the false branch is `notRequired()`. The separate `totalPercentage` test sums every numeric percentage. |
| Errors | CTL-MT-11 renders `fieldState.error` through `FormError`. The active branch applies `.min(1).required().label('This')`; the exact dependency-generated required/minimum text is unresolved under CLR-009. The aggregate channel separately has source literal `The total of all occupations must equal 100%.` when its non-returned `createError` path is effective (CLR-008). |
| Lifecycle | raw except exact `null`; close writes `0`. |
| Summary | In `Vehicles to be Driven`, emitted only with truthy MTS-10-Q36, at source-order category 17. The bold category label `Tankers` is followed by a separate flex row whose literal left-hand label is `Percentage:` and whose bold right-hand value is the raw number without a percent sign; otherwise this category and value are omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10/collapserTitles`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Vehicles to be Driven`. |
| Clarification | CLR-008; CLR-009 |

### Cross-category rules and mounted state

#### MTS-10-R01 — `defaultObject`, raw defaults, and exact-null omission

- Trigger: MTS-10 form construction.
- Evaluation point: component render passed to `useForm.defaultValues`; React Hook Form owns the resulting form state afterward.
- Affected fields: Q01–Q37.
- Raw-state effect: `defaultObject` enumerates the fields in reverse category order from Tankers through Standard Cars, combines raw flags with the eight force predicates, then `omitBy(value => value === null)`. Exact `null` properties are absent from defaults; `undefined`, false, zero, empty strings, and other values are retained.
- Projection effect: force flags can open as bare percentages; ordinary truthy flags initialize their collapser open. No store write occurs at construction.
- User-visible result/error: force flags can open as bare percentages; ordinary truthy flags initialize their collapser open. No store write occurs at construction.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:defaultObject/methods`.
- Clarification: CLR-001 only for option row metadata.

#### MTS-10-R02 — Eight forced-category predicates and bare-percentage rendering

- Trigger: current vehicles, specified vehicles, drivers, driver plan, AAD motorcycle selection, ABI validator state, and OPT-MT-40/56/57/59 metadata.
- Evaluation point: form-default construction and render; `allVehicles = concat(formData?.vehicles, formData?.specifiedVehicles)`.
- Affected fields: Q03/Q05/Q07/Q11/Q13/Q17/Q22/Q26 and their percentages.
- Raw-state effect: defaults OR the raw flag with each force predicate. Forced rendering itself supplies no added-toggle callback and makes no immediate store write.
- Projection effect: the matching `DetailCollapser` is replaced with a `<div className="my-4">` containing only the percentage. Forces are: sports numeric max `>28`; Commercial metadata plus GVW `>3500`; motorcycle-driver/plan expression; any imported vehicle; ordinary modified vehicle only; Rally metadata; Quad metadata; seats truthy and `>7`. No field is disabled.
- User-visible result/error: the matching `DetailCollapser` is replaced with a `<div className="my-4">` containing only the percentage. Forces are: sports numeric max `>28`; Commercial metadata plus GVW `>3500`; motorcycle-driver/plan expression; any imported vehicle; ordinary modified vehicle only; Rally metadata; Quad metadata; seats truthy and `>7`. No field is disabled.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:commercialVehicles/motorCycleForbidden/sportsVehicleForbidden/defaultObject`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:abiValidatorStore`.
- Clarification: CLR-001 for OPT-MT-40 metadata row values.

#### MTS-10-R03 — Sports and motorcycle forbidden criteria

- Trigger: Q03/Q07 true during MTStep10Schema validation.
- Evaluation point: resolver validation.
- Affected fields: Q04/Q08.
- Raw-state effect: none. `sportsVehicleForbidden` is true unless ABI maximum is a number above 28. `motorCycleForbidden` is true when no driver has a truthy motorcycle-licence date AND (`driverPlanId === 1` OR (`driverPlanId !== 1` AND `aadMaxMotorcycleCcID === 1`)).
- Projection effect: exact errors and explicit-return branches are documented in Q04/Q08. These conditions do not disable or hide the ordinary cards.
- User-visible result/error: exact errors and explicit-return branches are documented in Q04/Q08. These conditions do not disable or hide the ordinary cards.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:sportsVehicleForbidden/motorCycleForbidden`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`.
- Clarification: —.

#### MTS-10-R04 — Strict total-percentage custom test and occupations wording

- Trigger: resolver validates state-only `totalPercentage`.
- Evaluation point: `MTStep10Schema` custom test `TotalPercentage`; every mounted percentage callback re-triggers this path only when it already has an error.
- Affected fields: every percentage and every category flag.
- Raw-state effect: none. The callback initializes `total=0`, adds only parent values whose JavaScript type is `number` and which are not `NaN`, and finds the first truthy category flag.
- Projection effect: if at least one card is open and total is not strict numeric `100`, it calls `this.createError` with exact message `The total of all occupations must equal 100%.` and the current path. The test does **not explicitly return** that `createError` call. Otherwise it explicitly returns true. The outer declared test message `The total of all vehicles must equal 100%.` is not the message supplied by the failing branch.
- User-visible result/error: if at least one card is open and total is not strict numeric `100`, it calls `this.createError` with exact message `The total of all occupations must equal 100%.` and the current path. The test does **not explicitly return** that `createError` call. Otherwise it explicitly returns true. The outer declared test message `The total of all vehicles must equal 100%.` is not the message supplied by the failing branch.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema.totalPercentage`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:onChangeCallBack/FormError`.
- Clarification: CLR-008.

#### MTS-10-R05 — No-category custom test with empty string

- Trigger: resolver validates state-only `atLeastOneType`.
- Evaluation point: `MTStep10Schema` custom test `OneTypeForce`.
- Affected fields: all seventeen category flags.
- Raw-state effect: none; the test finds the first truthy flag.
- Projection effect: no truthy flag returns `this.createError({ message: '', path: this.path })`. The exact empty string is mandatory; CTL-MT-21 renders nothing for a falsey message even though the Step 10 JSX reaches its message-type guard. With a truthy flag the callback returns true. The outer test text `At least one vehicle type must be added` is not passed by the failing branch.
- User-visible result/error: no truthy flag returns `this.createError({ message: '', path: this.path })`. The exact empty string is mandatory; CTL-MT-21 renders nothing for a falsey message even though the Step 10 JSX reaches its message-type guard. With a truthy flag the callback returns true. The outer test text `At least one vehicle type must be added` is not passed by the failing branch.
- Evidence: Direct React — Yup and React sources: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema.atLeastOneType`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:atLeastOneType FormError`; `CleggGifford.CoverX.UI/src/components/ui/FormError.tsx:FormError`.
- Clarification: —.

#### MTS-10-R06 — DetailCollapser close mutation versus force state

- Trigger: user activates a non-forced open category's Remove button.
- Evaluation point: CTL-MT-16 click handler.
- Affected fields: corresponding flag, percentage, and Q21/Q32/Q35 where present.
- Raw-state effect: form-local only: `setValue(added, !isOpen)` first; if open, callback writes percentage `0`, resets the optional max/detail, then local `isOpen` becomes false. Store persists only on submit or Back.
- Projection effect: children collapse. Forced branches have no collapser and cannot invoke these writes. Recomputed force predicates can still determine the next form default/render independently of an earlier raw flag.
- User-visible result/error: children collapse. Forced branches have no collapser and cannot invoke these writes. Recomputed force predicates can still determine the next form default/render independently of an earlier raw flag.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/components/fields/DetailCollapser.tsx:onClick`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:callBack`.
- Clarification: —.

#### MTS-10-R07 — Valid-submit clearing and shallow persistence

- Trigger: resolver-accepted `Save and Continue`.
- Evaluation point: `onSubmit`, in transporter, corrosive, then airside order.
- Affected fields: Q01–Q37.
- Raw-state effect: each false controlling flag replaces its detail/max with `undefined`; true branches preserve submitted values. `setData({...data})` shallow-merges all submitted Step 10 keys into `formData`, then `next()` moves to MTS-11.
- Projection effect: no clear runs after validation failure. MTS-14 later reads persisted state through R09.
- User-visible result/error: no clear runs after validation failure. MTS-14 later reads persisted state through R09.
- Evidence: Direct React — React and store sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`.
- Clarification: —.

#### MTS-10-R08 — Back persistence without submit normalization

- Trigger: shared `Go Back` invokes `prev`.
- Evaluation point: click before the manager's conditional previous-step routing.
- Affected fields: Q01–Q37.
- Raw-state effect: `getValues()` is shallow-merged exactly as held; the three valid-submit `undefined` clears do not run and forward validation is not required.
- Projection effect: manager returns to MTS-09 only for `coverLevelID === 1` plus a resolved truthy own-indemnity `numericValue <=15000`; otherwise it returns to MTS-08B. CLR-001 applies to the unavailable option row, not to the expression.
- User-visible result/error: manager returns to MTS-09 only for `coverLevelID === 1` plus a resolved truthy own-indemnity `numericValue <=15000`; otherwise it returns to MTS-08B. CLR-001 applies to the unavailable option row, not to the expression.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:prev`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerPrevLogic`; Phase 2 EDGE-10A/B.
- Clarification: CLR-001.

#### MTS-10-R09 — `vehiclesToBeDriven` derivation and Summary rendering

- Trigger: MTS-14 render.
- Evaluation point: `StepSummary` builds the array before JSX.
- Affected fields: all category flags, all percentages, Q21/Q32/Q35.
- Raw-state effect: none. `collapserTitles.map` returns an object only for truthy `formData[title.key]`, then a truthiness filter removes nulls; order stays the source array order.
- Projection effect: section is always mounted as `Vehicles to be Driven`. Each object has source `label`, raw key as `text` (not rendered), raw percentage, generic ``formData[`${title.key}Details`]``, and the configured transporter max. It renders the label, `Percentage:` and raw value with no `%`; truthy detail renders `Detail:`; truthy max renders the transporter label. Q32's non-generic stored name therefore never matches; Q35 does. Edit uses standard-family MTS-10.
- User-visible result/error: section is always mounted as `Vehicles to be Driven`. Each object has source `label`, raw key as `text` (not rendered), raw percentage, generic ``formData[`${title.key}Details`]``, and the configured transporter max. It renders the label, `Percentage:` and raw value with no `%`; truthy detail renders `Detail:`; truthy max renders the transporter label. Q32's non-generic stored name therefore never matches; Q35 does. Edit uses standard-family MTS-10.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:vehiclesToBeDriven/Vehicles to be Driven`.
- Clarification: —.

#### MTS-10-U01 — Error channels and navigation

- Position and mount condition: after all category rows, `totalPercentage` CTL-MT-21 then `atLeastOneType` CTL-MT-21, each only when its error exists and message type is string; shared navigation follows in `mt-4`.
- Kind: root-form errors and native navigation controls.
- Exact observable contract: errors use R04/R05; the empty-string error results in no visible CTL-MT-21 content. Forward label is shared default `Save and Continue`; Back is `Go Back`.
- Related questions/rules: Q01–Q37; R04–R08.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:FormError/NavigatorButton`.
- Clarification: —.

#### AUD-MT-07 — Option-consumer backlinks

- Audit position: Documentation-only closure record immediately after the owning surface records; not mounted by the legacy UI.
- Purpose: Documentation audit; no legacy UI element is introduced.
- Assertion: The table below reconciles the exact source-backed records and does not add runtime behavior.
- Coverage: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Unresolved — Unresolved scope: database row facts. canonical OPT records and `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10`/manager consumers.
- Clarification: CLR-001.

| OPT record | MTS-10 consumer |
|---|---|
| OPT-MT-40 | R02 vehicle-type IDs and source collection |
| OPT-MT-56 | Q22/R02 `requiresQuadBikes` force |
| OPT-MT-57 | Q17/R02 `requiresRallyTrackKitCarsTrikes` force |
| OPT-MT-59 | Q05/R02 exact `category === 'Commercial'` force |
| OPT-MT-71 | R08 reverse navigation own-indemnity `numericValue` |

#### MTS-10-R10 — UI, schema, lifecycle, and summary reconciliation

- Trigger: final MTS-10 audit.
- Evaluation point: documentation verification only.
- Affected fields: Q01–Q37 plus state-only `totalPercentage` and `atLeastOneType`.
- Raw-state effect: none. Every `collapserTitles` flag and derived percentage name maps to a Q record; all three extra Controllers map to Q21/Q32/Q35; every MTStep10Schema path maps to those questions or R04/R05. Force, forbidden, close, valid-submit, Back and exact-null-default behavior map to R01–R08.
- Projection effect: R09 maps every included Summary value back to its source and explicitly accounts for the Q32 naming mismatch and all omitted falsey fields. OPT-MT-40/56/57/59/71 consumers map back through AUD-MT-07 and CLR-001.
- User-visible result/error: R09 maps every included Summary value back to its source and explicitly accounts for the Q32 naming mismatch and all omitted falsey fields. OPT-MT-40/56/57/59/71 consumers map back through AUD-MT-07 and CLR-001.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10`; `CleggGifford.CoverX.UI/src/components/fields/DetailCollapser.tsx:DetailCollapser`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: CLR-001 only.

## MTS-11 — Extras

### Context and mounted extras matrix

`MotorTradeStep11` mounts the translated heading `Extras`, then the groups below in this order. The inline `testOptions` are always `{ text: 'Yes', value: true }`, then `{ text: 'No', value: false }`. Database-backed option rows remain under CLR-001; their collection shape, metadata predicates and consumer mappings are fixed here.

| Mounted group | Stable values | Added / visible / disabled condition | Options and metadata | Close, clear, validation, and Summary |
|---|---|---|---|---|
| `Demonstration cover` | MTS-11-Q01–Q03 | CTL-MT-16 always mounts; initial open is raw Q01; no disabled prop. Q03 mounts only when some raw driver has truthy `motorcycleLicenceIssueDate` | Q02 uses OPT-MT-43 unfiltered; its `isComprehensive` metadata participates in validation. Q03 uses Yes/No | Close toggles Q01 and clears Q02/Q03; valid submit also clears Q03 without a motorcycle driver and clears both dependants when Q01 false. Summary shows both rows only if Q01 truthy, and coerces Q03 with `!!` even when absent |
| `Windscreen cover` | MTS-11-Q04–Q06; MTS-11-U01 | CTL-MT-16 always mounts; initial open is raw Q04; no disabled prop | Q05 uses OPT-MT-44 unfiltered; Q06 uses Yes/No | Close triggers `customWindscreenError`, then clears Q05/Q06. Q04 on non-cover-level-1 routes its exact error to U01. Valid submit clears dependants when false. Summary shows Q05/Q06 only if Q04 truthy |
| Loss of use | MTS-11-Q07 | Always mounted; not collapsible or disabled | Yes/No | Required boolean; Summary always renders `!!` as Yes/No |
| Vehicles at subcontractor’s cover | MTS-11-Q08 | Always mounted; not collapsible or disabled | Yes/No | Required boolean; Summary always renders `!!` as Yes/No |
| Third-party property damage | MTS-11-Q09 | Always mounted; not collapsible or disabled | OPT-MT-45 unfiltered | Required number; form default uses raw value OR numeric `1`; Summary uses loose lookup in OPT-MT-45 |
| `European cover` | MTS-11-Q10–Q20; MTS-11-U02–U04 | CTL-MT-16 always mounts, initially open when raw annual OR temporary flag truthy. Its toggle is disabled when default temporary rows contain an `isDraft === false` row. No `added` prop is supplied, so opening alone writes no boolean | Annual Q12 and temporary Q20 consume OPT-MT-46; temporary Q17/Q19 additionally consume OPT-MT-47/48; Summary usage/cover mismatches read OPT-MT-26/07, as specified in R01–R05/R11 | Close sets both flags false and removes both arrays. Annual and temporary controls remain independent and have the separate contracts below |

### Base extras question records

#### MTS-11-Q01 — `demonstrationCover`

| Property | Exact contract |
|---|---|
| Position | First Extras card. |
| Visible copy | `Demonstration cover`. |
| Control | `DetailCollapser`/CTL-MT-16 added-state boolean; no disabled prop. |
| Stored/emitted value | raw value retained unless exact `null`; shared toggle writes the boolean; close callback clears Q02/Q03. |
| Options | No option collection; card Add/remove represents the boolean. |
| Visible when | Always mounted; dependants mount only when truthy. |
| Enabled when | Always enabled. |
| Required when | Never; optional boolean. |
| Constraints | `yup.boolean().notRequired()`. |
| Errors | No field-level error. |
| Lifecycle | raw value retained unless exact `null`; shared toggle writes the boolean; close callback clears Q02/Q03. |
| Summary | In the `Extras` section: No separate row; truthy gates Q02 then Q03, falsey omits both. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | — |

#### MTS-11-Q02 — `demonstrationCoverTypeID`

| Property | Exact contract |
|---|---|
| Position | First control inside Demonstration cover. |
| Visible copy | `What level of demonstration cover is required?` |
| Control | CTL-MT-01 `AutoComplete`, repeated `id="demonstration"`, OPT-MT-43. |
| Stored/emitted value | raw except exact `null`; close and a valid submit with Q01 false write `undefined`; Back does not normalize. |
| Options | OPT-MT-43 in producer order; loose Summary lookup and `isComprehensive` metadata. |
| Visible when | Only while Q01 is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Only when Q01 is exact true. |
| Constraints | Conditional required number labeled `This`, plus comprehensive metadata test. |
| Errors | The field channel renders the result of `.required().label('This')`, whose exact dependency-generated text is unresolved under CLR-009; source literal `Chosen demonstration cover is not valid.` belongs to the non-returned custom-error path governed by CLR-008. |
| Lifecycle | raw except exact `null`; close and a valid submit with Q01 false write `undefined`; Back does not normalize. |
| Summary | In the `Extras` section: First row under truthy Q01; exact label and loose OPT-MT-43 text; falsey Q01 omits it. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-008; CLR-009 |

#### MTS-11-Q03 — `demonstrationCoverForMotorcycles`

| Property | Exact contract |
|---|---|
| Position | Second control inside Demonstration cover. |
| Visible copy | `Do you want to add demonstration cover for motorcycles?` |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`; close clears; valid submit clears when no qualifying driver or Q01 false; Back preserves pending state. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Only while Q01 is truthy and some raw driver has truthy `motorcycleLicenceIssueDate`. |
| Enabled when | Always enabled while mounted. |
| Required when | Only when Q01 and the same driver search are truthy. |
| Constraints | Conditional required boolean labeled `This`; false is valid. |
| Errors | CTL-MT-04/FormError renders the result of `.required().label('This')`; no custom message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close clears; valid submit clears when no qualifying driver or Q01 false; Back preserves pending state. |
| Summary | In the `Extras` section: Second row under truthy Q01 even when the control was absent; exact label and `!!value` Yes/No, so absent is No. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q04 — `windscreenCover`

| Property | Exact contract |
|---|---|
| Position | Second Extras card. |
| Visible copy | `Windscreen cover`. |
| Control | `DetailCollapser`/CTL-MT-16 added-state boolean; no disabled prop. |
| Stored/emitted value | raw except exact `null`; close toggles false and runs the U01 trigger/clears. |
| Options | No option collection; card Add/remove represents the boolean. |
| Visible when | Always mounted; dependants mount only when truthy. |
| Enabled when | Always enabled. |
| Required when | Optional, but its cover-level custom test always evaluates. |
| Constraints | `yup.boolean().notRequired()` plus strict non-Comprehensive cover test. |
| Errors | Truthy with raw `coverLevelID !== 1` returns `You can only add windscreen cover if your cover level is Comprehensive` at U01. |
| Lifecycle | raw except exact `null`; close toggles false and runs the U01 trigger/clears. |
| Summary | In the `Extras` section: No separate row; truthy gates Q05 then Q06, falsey omits both. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | — |

#### MTS-11-Q05 — `windscreenCoverTypeID`

| Property | Exact contract |
|---|---|
| Position | First control inside Windscreen cover. |
| Visible copy | `Cover Limit:` |
| Control | CTL-MT-01 `AutoComplete`, repeated `id="demonstration"`, OPT-MT-44. |
| Stored/emitted value | raw except exact `null`; close and valid submit when Q04 false write `undefined`; Back does not normalize. |
| Options | OPT-MT-44 in producer order; loose Summary lookup. |
| Visible when | Only while Q04 is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Only when Q04 is exact true. |
| Constraints | Conditional required number labeled `This`. |
| Errors | The mounted field `FormError` renders the result of `.required().label('This')`; no custom required message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close and valid submit when Q04 false write `undefined`; Back does not normalize. |
| Summary | In the `Extras` section: First row under truthy Q04; `Cover Limit:` and loose OPT-MT-44 text; otherwise omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-009 |

#### MTS-11-Q06 — `isAdditionalWindscreenCoverRequired`

| Property | Exact contract |
|---|---|
| Position | Second control inside Windscreen cover. |
| Visible copy | `Is additional windscreen cover required for stock and customer vehicles?` |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`; close and valid submit when Q04 false write `undefined`; Back does not normalize. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Only while Q04 is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Only when Q04 is exact true. |
| Constraints | Conditional required boolean labeled `This`; false is valid. |
| Errors | CTL-MT-04/FormError renders the result of `.required().label('This')`; no custom message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; close and valid submit when Q04 false write `undefined`; Back does not normalize. |
| Summary | In the `Extras` section: Second row under truthy Q04; exact label and `!!value` Yes/No, so absent is No. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q07 — `lossOfUseCover`

| Property | Exact contract |
|---|---|
| Position | Standalone row after Windscreen/U01. |
| Visible copy | `Is loss of use cover required? `, preserving input trailing space. |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`; no callback clear. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required; false is valid. |
| Constraints | Required boolean labeled `This`. |
| Errors | CTL-MT-04/FormError renders the result of `.required().label('This')`; no custom message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; no callback clear. |
| Summary | In the `Extras` section: Always rendered after windscreen rows as `Is loss of use cover required?` (no trailing space), `!!value` Yes/No. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q08 — `vehiclesAtSubcontractorsCover`

| Property | Exact contract |
|---|---|
| Position | Standalone row after Q07. |
| Visible copy | `Vehicles at subcontractor’s cover:` |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`; no callback clear. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required; false is valid. |
| Constraints | Required boolean labeled `This`. |
| Errors | CTL-MT-04/FormError renders the result of `.required().label('This')`; no custom message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | raw except exact `null`; no callback clear. |
| Summary | In the `Extras` section: Always rendered after Q07 with the same label and `!!value` Yes/No. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q09 — `thirdPartyPropertyDamageCoverTypeID`

| Property | Exact contract |
|---|---|
| Position | Standalone row after Q08. |
| Visible copy | `Third party property damage limit:` |
| Control | CTL-MT-01 `AutoComplete`, `id="damageLimit"`, OPT-MT-45. |
| Stored/emitted value | `formData?.thirdPartyPropertyDamageCoverTypeID \|\| 1`; undefined, null, falsey zero, and other falsey raw values therefore default to numeric 1 before exact-null omission. No callback clear. |
| Options | OPT-MT-45 in producer order; loose Summary lookup. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | Required number labeled `This`. |
| Errors | The mounted field `FormError` renders the result of `.required().label('This')`; no custom required message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | `formData?.thirdPartyPropertyDamageCoverTypeID \|\| 1`; undefined, null, falsey zero, and other falsey raw values therefore default to numeric 1 before exact-null omission. No callback clear. |
| Summary | In the `Extras` section: Always rendered after Q08; same label, loose OPT-MT-45 text, then literal JSX space. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-009 |

### Annual and temporary European cover flags

#### MTS-11-Q10 — `annualEuropeanCover`

| Property | Exact contract |
|---|---|
| Position | First question in `European cover`. |
| Visible copy | `Do you require Annual Green Card?` |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`. Every Yes click writes true and appends `{ regNumber: '', europeanCoverUsageTypeID: undefined }`; every No click writes false and removes all annual rows. A truthy flag with an empty array mounts neither rows nor `Add Another Vehicle` until another Yes callback appends. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Whenever the European card is open. |
| Enabled when | Enabled; no annual draft lock. |
| Required when | Never; optional boolean. |
| Constraints | `yup.boolean().notRequired()`; no cardinality rule. |
| Errors | No field-level error. |
| Lifecycle | raw except exact `null`. Every Yes click writes true and appends `{ regNumber: '', europeanCoverUsageTypeID: undefined }`; every No click writes false and removes all annual rows. A truthy flag with an empty array mounts neither rows nor `Add Another Vehicle` until another Yes callback appends. |
| Summary | In the `Extras` section: Truthy starts the annual group with exact label/Yes, then every Q11/Q12 row in raw order; falsey omits the group. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | — |

### Annual European cover repeated-row contract

The annual European array is not a trip/date/area/driver/cover record. It is a source-order vehicle list with only registration and purpose.

#### MTS-11-Q11 — `europeanCoverAnnualExtras[].regNumber`

| Property | Exact contract |
|---|---|
| Position | First control in each annual `Vehicle {idx + 1}` row. |
| Visible copy | `Vehicle Registration:` |
| Control | CTL-MT-01 `AutoComplete`, repeated `id="demonstration"`, R01 registrations. |
| Stored/emitted value | first Yes/add draft uses empty string; raw rows persist. Change clears U02 if present. Rows after index 0 have red `X`; removal also clears U02; index 0 cannot be removed independently. |
| Options | `regNumberOptions`, generated in current `formData.vehicles` source order as `{ value: vehicle?.regNumber, text: vehicle?.regNumber }`; falsey `formData.vehicles` yields `[]`. CTL-MT-01 selects by loose `option.value == field.value` and emits the selected primitive or `undefined`. |
| Visible when | For every present annual row while Q10 is truthy. |
| Enabled when | Enabled; annual rows have no draft lock. |
| Required when | Every present row requires a string. |
| Constraints | Required string labeled `This`; array-level exact-value uniqueness. |
| Errors | The field channel renders the result of `.required().label('This')`, whose exact dependency-generated text is unresolved under CLR-009; duplicate source literal `Registration number must be unique` routes to U02. |
| Lifecycle | first Yes/add draft uses empty string; raw rows persist. Change clears U02 if present. Rows after index 0 have red `X`; removal also clears U02; index 0 cannot be removed independently. |
| Summary | In the `Extras` section: Under truthy Q10: `Vehicle {idx+1}`, same label, raw registration, source order, no value guard. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q12 — `europeanCoverAnnualExtras[].europeanCoverUsageTypeID`

| Property | Exact contract |
|---|---|
| Position | Second control in each annual vehicle row. |
| Visible copy | `What is the purpose for the requirement of the Annual Green Card?` |
| Control | CTL-MT-01 `AutoComplete`, OPT-MT-46. |
| Stored/emitted value | first Yes/add draft uses `undefined`; no field-specific clear. |
| Options | OPT-MT-46 in producer order; Summary instead uses OPT-MT-26. |
| Visible when | With every present annual row while Q10 is truthy. |
| Enabled when | Enabled; annual rows have no draft lock. |
| Required when | Required number under both row-type branches. |
| Constraints | Non-number branch also applies R05 `TripUsage` metadata compatibility. |
| Errors | The required path uses `.required().label('This')`, whose exact dependency-generated text is unresolved under CLR-009; returned source literal `Chosen usage type is not valid for the chosen drivers for this trip.` and the non-returned double-space fallback remain governed by CLR-008. |
| Lifecycle | first Yes/add draft uses `undefined`; no field-specific clear. |
| Summary | In the `Extras` section: After Q11 for every annual row; same label, but loose lookup in OPT-MT-26 `driverUsages`, not OPT-MT-46. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-008; CLR-009 |

#### MTS-11-R01 — Annual row initialization, registration options, add/remove, and persistence

- Trigger: Q10 callbacks and annual add/remove controls.
- Evaluation point: click/render/submit or Back.
- Affected fields: Q10–Q12 and U02.
- Raw-state effect: registration options are source-order raw `formData.vehicles` only, each `{value: vehicle.regNumber, text: vehicle.regNumber}`; specified vehicles are excluded and no filtering/normalization occurs. Yes and `Add Another Vehicle` append the same two-field draft. There is no minimum or maximum array rule, add guard, date, driver, area, cover, `isDraft`, or locked-row behavior. First row lacks X; later X removes by index. Q10 No or outer close removes all.
- Projection effect: rows render in field-array order with separators between rows. Valid submit shallow-persists the array; Back shallow-persists without onSubmit omission. Summary preserves raw order.
- User-visible result/error: rows render in field-array order with separators between rows. Valid submit shallow-persists the array; Back shallow-persists without onSubmit omission. Summary preserves raw order.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:regNumberOptions/euAnnualExtras`.
- Clarification: —.

#### MTS-11-R02 — Annual registration uniqueness and empty-array behavior

- Trigger: MTStep11Schema validation of the annual array.
- Evaluation point: resolver submit regardless of Q10; the array is not wrapped in a Q10 `.when`.
- Affected fields: Q11 and U02.
- Raw-state effect: maps raw registration strings and compares `uniq(regNumbers).length` with row count. Equality is exact: no case folding, trimming, or space removal.
- Projection effect: duplicate present values return `Some registration numbers have been chosen multiple times.` at path `customRegNumberError`. The array is `.notRequired()` and has no cardinality test; Q10 true with absent/empty array can pass. Any present row still validates its required fields even when Q10 is false and stale rows remain.
- User-visible result/error: duplicate present values return `Some registration numbers have been chosen multiple times.` at path `customRegNumberError`. The array is `.notRequired()` and has no cardinality test; Q10 true with absent/empty array can pass. Any present row still validates its required fields even when Q10 is false and stale rows remain.
- Evidence: Direct React — Yup and React sources: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.europeanCoverAnnualExtras`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:CustomError`.
- Clarification: —.

#### MTS-11-Q13 — `temporaryEuropeanCover`

| Property | Exact contract |
|---|---|
| Position | After the complete annual group. |
| Visible copy | `Do you require Temporary Green Card?` |
| Control | CTL-MT-04 inline Yes/No radio list. |
| Stored/emitted value | raw except exact `null`. Every Yes click appends the R03 draft; every No click removes all temporary rows. A truthy flag with an empty array mounts neither rows nor `Add Another Trip` until another Yes callback appends. |
| Options | Inline source order `Yes` → true, then `No` → false; strict checked equality. |
| Visible when | Whenever the European card is open. |
| Enabled when | Disabled when any initial temporary row has `isDraft === false`. |
| Required when | Never; optional boolean. |
| Constraints | `yup.boolean().notRequired()`; no cardinality rule. |
| Errors | No field-level error. |
| Lifecycle | raw except exact `null`. Every Yes click appends the R03 draft; every No click removes all temporary rows. A truthy flag with an empty array mounts neither rows nor `Add Another Trip` until another Yes callback appends. |
| Summary | In the `Extras` section: Truthy starts the temporary group with exact label/Yes, then every Q14–Q20 trip in raw order; falsey omits it. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | — |

### Temporary European cover repeated-row contract

The temporary European array independently owns registration, dates, area, drivers, cover, usage and draft/locked state. It has no registration-uniqueness test.

#### MTS-11-Q14 — `europeanCoverTemporaryExtras[].regNumber`

| Property | Exact contract |
|---|---|
| Position | First control in each `Trip {idx + 1}`. |
| Visible copy | `Vehicle Registration:` |
| Control | CTL-MT-01 `AutoComplete`, R01 registrations. |
| Stored/emitted value | new draft empty string; disabled for R03 non-draft rows; no change callback or normalization. Only rows after index 0 have X, and it is disabled when locked. |
| Options | `regNumberOptions`, generated in current `formData.vehicles` source order as `{ value: vehicle?.regNumber, text: vehicle?.regNumber }`; falsey `formData.vehicles` yields `[]`. CTL-MT-01 selects by loose `option.value == field.value` and emits the selected primitive or `undefined`. |
| Visible when | For every present temporary row while Q13 is truthy. |
| Enabled when | Disabled when that row has `isDraft === false`. |
| Required when | Every present row requires a string. |
| Constraints | Required string labeled `This`; no temporary uniqueness test. |
| Errors | CTL-MT-01/FormError renders the result of `.required().label('This')`; no custom required message or duplicate-registration test is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | new draft empty string; disabled for R03 non-draft rows; no change callback or normalization. Only rows after index 0 have X, and it is disabled when locked. |
| Summary | In the `Extras` section: Under truthy Q13: `Trip {idx+1}`, same label, raw registration, source order, no value guard. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-009 |

#### MTS-11-Q15 — `europeanCoverTemporaryExtras[].startDateEuropeanTrip`

| Property | Exact contract |
|---|---|
| Position | Second temporary-trip control. |
| Visible copy | `Start Date of Trip:` |
| Control | CTL-MT-13 DatePicker, UI minimum `proposerPolicyStartDate`, no mounted maximum. |
| Stored/emitted value | new draft `undefined`; Datepicker supplies its shared Date/undefined normalization. |
| Options | No options. |
| Visible when | With every present trip while Q13 is truthy. |
| Enabled when | Disabled for `isDraft === false`. |
| Required when | R04 date contract applies to every row. |
| Constraints | R04 owns required/order tests; UI minimum is policy start. |
| Errors | CTL-MT-13/FormError uses R04; equal-date fallthrough remains CLR-008. |
| Lifecycle | new draft `undefined`; Datepicker supplies its shared Date/undefined normalization. |
| Summary | In the `Extras` section: Second trip row: same label and `dayjs(raw).format('DD/MM/YYYY')`, no presence guard. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-008 |

#### MTS-11-Q16 — `europeanCoverTemporaryExtras[].endDateEuropeanTrip`

| Property | Exact contract |
|---|---|
| Position | Third temporary-trip control. |
| Visible copy | `End Date of Trip:` |
| Control | CTL-MT-13 DatePicker, UI minimum `dayjs()` and maximum policy end. |
| Stored/emitted value | new draft `undefined`. |
| Options | No options. |
| Visible when | With every present trip while Q13 is truthy. |
| Enabled when | Disabled for `isDraft === false`. |
| Required when | R04 date contract applies to every row. |
| Constraints | R04 owns required/order tests; UI bounds are render-today/policy-end. |
| Errors | CTL-MT-13/FormError uses R04; equal-date fallthrough remains CLR-008. |
| Lifecycle | new draft `undefined`. |
| Summary | In the `Extras` section: Third trip row: same label and `dayjs(raw).format('DD/MM/YYYY')`, no presence guard. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-008 |

#### MTS-11-Q17 — `europeanCoverTemporaryExtras[].europeanAreaID`

| Property | Exact contract |
|---|---|
| Position | Fourth temporary-trip control. |
| Visible copy | `Countries being visited:` plus conditional lavender `Countries: {raw countries}`. |
| Control | CTL-MT-12 `FormSelect` with `numberFormat`, OPT-MT-47. |
| Stored/emitted value | new draft `undefined`; native selection is numerically coerced. |
| Options | OPT-MT-47 in producer order with `countries` metadata. |
| Visible when | With every present trip while Q13 is truthy. |
| Enabled when | Disabled for `isDraft === false`. |
| Required when | Every row requires a number. |
| Constraints | Required number labeled `This`; loose metadata lookup controls lavender copy. |
| Errors | The mounted field `FormError` renders the result of `.required().label('This')`; no custom required message is supplied, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | new draft `undefined`; native selection is numerically coerced. |
| Summary | In the `Extras` section: Fourth trip row: same label and loose OPT-MT-47 text only; lavender countries metadata is omitted. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-009 |

#### MTS-11-Q18 — `europeanCoverTemporaryExtras[].europeanCoverDriverGuids`

| Property | Exact contract |
|---|---|
| Position | Fifth temporary-trip value under `Drivers:`. |
| Visible copy | Plan 3: ``Any driver between the ages of ${youngestDriver?.text} and ${oldestDriver?.text}``; otherwise `Drivers:`. |
| Control | Plan 3 has no Controller; editable drafts use CTL-MT-03; locked rows display stored names. |
| Stored/emitted value | new plan-ID-3 draft is `[]`; other new drafts use `undefined`. Editable options map every raw driver in source order to `{text: firstName + ' ' + surname, value: guid}`. No mounted callback derives `europeanCoverDriverNames` from selected GUIDs. |
| Options | Editable branch maps raw drivers in source order to name/`guid`; plan-3 branch has no choices. |
| Visible when | With every present trip while Q13 is truthy; branch uses exact plan ID 3. |
| Enabled when | Draft MultiSelect editable; locked row is text, not a disabled Controller. |
| Required when | Nullable array passes for locked rows and plan 3; otherwise non-empty required. |
| Constraints | `driversNeeded` custom test; no schema `.min`. |
| Errors | Editable CTL-MT-03/FormError shows literal `This is a required field.`. |
| Lifecycle | new plan-ID-3 draft is `[]`; other new drafts use `undefined`. Editable options map every raw driver in source order to `{text: firstName + ' ' + surname, value: guid}`. No mounted callback derives `europeanCoverDriverNames` from selected GUIDs. |
| Summary | In the `Extras` section: Fifth trip row: `Drivers:` and raw `europeanCoverDriverNames?.join(', ')`; no GUID or plan-age resolution. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | — |

#### MTS-11-Q19 — `europeanCoverTemporaryExtras[].europeanCoverTypeID`

| Property | Exact contract |
|---|---|
| Position | Sixth temporary-trip control. |
| Visible copy | `Cover requested:` |
| Control | CTL-MT-01 `AutoComplete`, OPT-MT-48. |
| Stored/emitted value | new draft `undefined`; no clear. |
| Options | OPT-MT-48 in producer order; Summary instead uses OPT-MT-07. |
| Visible when | With every present trip while Q13 is truthy. |
| Enabled when | Disabled for `isDraft === false`. |
| Required when | Row `type === 'number'` is optional; otherwise required. |
| Constraints | Non-number branch tests OPT-MT-48 `isComprehensive` against raw cover. |
| Errors | The required path uses `.required().label('This')`, whose exact dependency-generated text is unresolved under CLR-009; source literal `Chosen cover level is not valid for this trip.` belongs to the non-returned custom-error path governed by CLR-008. |
| Lifecycle | new draft `undefined`; no clear. |
| Summary | In the `Extras` section: Sixth trip row: same label, loose lookup in OPT-MT-07 `coverLevels` (not OPT-MT-48), literal space. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-008; CLR-009 |

#### MTS-11-Q20 — `europeanCoverTemporaryExtras[].europeanCoverUsageTypeID`

| Property | Exact contract |
|---|---|
| Position | Seventh/final temporary-trip control. |
| Visible copy | `Usage for Trip:` |
| Control | CTL-MT-01 `AutoComplete`, OPT-MT-46. |
| Stored/emitted value | new draft `undefined`; no clear. |
| Options | OPT-MT-46 in producer order; Summary instead uses OPT-MT-26. |
| Visible when | With every present trip while Q13 is truthy. |
| Enabled when | Disabled for `isDraft === false`. |
| Required when | Row `type === 'number'` is optional; otherwise required. |
| Constraints | Non-number branch also applies R05 `TripUsage` compatibility. |
| Errors | The required path uses `.required().label('This')`, whose exact dependency-generated text is unresolved under CLR-009; the R05 compatibility error remains the exact repository-source literal recorded there. |
| Lifecycle | new draft `undefined`; no clear. |
| Summary | In the `Extras` section: Final trip row: same label, loose lookup in OPT-MT-26 `driverUsages` (not OPT-MT-46), literal space. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`. |
| Clarification | CLR-001; CLR-009 |

#### MTS-11-R03 — Temporary draft, locked rows, add/remove, and no local finalization

- Trigger: Q13 Yes, `Add Another Trip`, existing persisted rows, and row X.
- Evaluation point: callback/render.
- Affected fields: Q13–Q20 plus row `isDraft` and `europeanCoverDriverNames` state.
- Raw-state effect: both add paths append `{regNumber:'', startDateEuropeanTrip:undefined, endDateEuropeanTrip:undefined, europeanAreaID:undefined, europeanCoverDriverGuids: driverPlanId === 3 ? [] : undefined, europeanCoverTypeID:undefined, europeanCoverUsageTypeID:undefined, isDraft:true}`. There is no min/max or add guard. The component never writes `isDraft:false` or derives driver names. Existing `isDraft === false` is therefore persisted input, not a local completion action.
- Projection effect: a non-draft row disables Q14–Q17/Q19/Q20 and its X; for non-plan-3 it replaces Q18 with opacity-50 joined persisted names. Row 0 never has X. Later draft rows can be removed; add remains enabled. Q13 No or outer close removes all rows.
- User-visible result/error: a non-draft row disables Q14–Q17/Q19/Q20 and its X; for non-plan-3 it replaces Q18 with opacity-50 joined persisted names. Row 0 never has X. Later draft rows can be removed; add remains enabled. Q13 No or outer close removes all rows.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:appendTemporary/fieldDisabled`.
- Clarification: —.

#### MTS-11-R04 — Six/twelve-month policy end and date tests

- Trigger: component render and validation of Q15/Q16.
- Evaluation point: UI props and MTStep11Schema row validation.
- Affected fields: raw `proposerPolicyStartDate`, raw `isShortTerm`, Q15/Q16.
- Raw-state effect: none. UI derives ISO `policyEndDate = dayjs(policyStartDate).add(isShortTerm ? 6 : 12, 'month').toISOString()`; schema independently derives a Date with the same six- or twelve-month add. The derived policy end is display/validation state, never a stored answer.
- Projection effect: UI bounds are recorded in Q15/Q16. Schema `.when('type')` uses required date only when row `type === 'date'`; otherwise its custom test runs, while still required. `isDraft === false` explicitly bypasses each custom interval test but not requiredness. Start compares day-formatted value against policy start: before gives `Start Date of Trip must be later than policy start date.`; absent end returns true; after end gives `Start Date of Trip must be earlier than the end date of trip.`; before end returns true; equality has no explicit return. End: absent start returns true; after policy end gives `End Date of Trip must be earlier than the policy end date.`; before start gives `End Date of Trip must be later than the start date of the trip.`; after start returns true; equality has no explicit return. Equality to policy bounds is not rejected by the coded `isBefore`/`isAfter` checks.
- User-visible result/error: UI bounds are recorded in Q15/Q16. Schema `.when('type')` uses required date only when row `type === 'date'`; otherwise its custom test runs, while still required. `isDraft === false` explicitly bypasses each custom interval test but not requiredness. Start compares day-formatted value against policy start: before gives `Start Date of Trip must be later than policy start date.`; absent end returns true; after end gives `Start Date of Trip must be earlier than the end date of trip.`; before end returns true; equality has no explicit return. End: absent start returns true; after policy end gives `End Date of Trip must be earlier than the policy end date.`; before start gives `End Date of Trip must be later than the start date of the trip.`; after start returns true; equality has no explicit return. Equality to policy bounds is not rejected by the coded `isBefore`/`isAfter` checks.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.startDateEuropeanTrip/endDateEuropeanTrip`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:policyStartDate/policyEndDate`.
- Clarification: CLR-008.

#### MTS-11-R05 — Temporary driver-plan and usage metadata validation

- Trigger: Q20 validation in a row whose `type !== 'number'`.
- Evaluation point: resolver submit.
- Affected fields: Q18/Q20; raw drivers; OPT-MT-26/46 metadata.
- Raw-state effect: none. Selected Q18 GUIDs strictly find raw drivers and map their `usageID`s. `motorTradeOnlyExist` tests inclusion of the first OPT-MT-26 value whose `isSocialDomesticPleasure` is false. `socialTrip` is the first OPT-MT-46 value whose flag is true.
- Projection effect: strict equality of Q20 to `socialTrip` errors for exact plan ID 3; it also errors when Q20 is truthy and selected drivers include the derived Motor-Trade-only usage. Both use `Chosen usage type is not valid for the chosen drivers for this trip.`; otherwise true.
- User-visible result/error: strict equality of Q20 to `socialTrip` errors for exact plan ID 3; it also errors when Q20 is truthy and selected drivers include the derived Motor-Trade-only usage. Both use `Chosen usage type is not valid for the chosen drivers for this trip.`; otherwise true.
- Evidence: Unresolved — Yup schema source: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.europeanCoverUsageTypeID`.
- Clarification: CLR-001 for current metadata row values/order.

### Shared Step 11 lifecycle, state, and projection

#### MTS-11-R06 — Exact-null defaults and third-party default

- Trigger: form construction.
- Evaluation point: `defaultObj` before `useForm`.
- Affected fields: Q01–Q20 arrays/flags plus Q07–Q09.
- Raw-state effect: enumerated top-level values are passed through `omitBy(value => value === null)`, preserving undefined, false, zero, empty arrays/strings and objects. Q09 is first resolved with `raw \|\| 1`, so exact null/undefined/zero become 1 rather than being omitted.
- Projection effect: raw annual/temporary arrays become field-array defaults; raw flags determine initial group visibility.
- User-visible result/error: raw annual/temporary arrays become field-array defaults; raw flags determine initial group visibility.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:defaultObj/methods`.
- Clarification: —.

#### MTS-11-R07 — Demonstration and windscreen cover-level dependencies

- Trigger: resolver submit.
- Evaluation point: MTStep11Schema using raw `formData.coverLevelID`, not a Step 11 editable field.
- Affected fields: Q02/Q04 and U01.
- Raw-state effect: none; no option list is UI-filtered. Demonstration rejects only matching comprehensive metadata on non-1 cover level through its non-returned `createError` expression; windscreen truthy on non-1 returns the exact U01 error.
- Projection effect: no card is pre-disabled or hidden by cover level. These are validation channels, not enablement predicates.
- User-visible result/error: no card is pre-disabled or hidden by cover level. These are validation channels, not enablement predicates.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.demonstrationCoverTypeID`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:demonstrationCoverTypeID`.
- Clarification: CLR-001; CLR-008.

#### MTS-11-R08 — Valid-submit omission and dependent clears

- Trigger: resolver-accepted `Save and Continue`.
- Evaluation point: `onSubmit`.
- Affected fields: all Step 11 form values and U01/U02.
- Raw-state effect: first Lodash `omit` removes `customRegNumberError` and `customWindscreenError`; absent motorcycle driver writes Q03 undefined; Q04 false writes Q05/Q06 undefined; Q01 false writes Q02/Q03 undefined. No submit-time annual/temporary clear, draft finalization, driver-name derivation, or row transformation occurs. The result is shallow-merged, then Next moves to MTS-12.
- Projection effect: MTS-14 consumes the persisted raw values through R11.
- User-visible result/error: MTS-14 consumes the persisted raw values through R11.
- Evidence: Direct React — React and store sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`.
- Clarification: —.

#### MTS-11-R09 — Back persistence differs from valid submit

- Trigger: `Go Back`.
- Evaluation point: shared navigator calls `prev` before Previous moves to MTS-10.
- Affected fields: all Step 11 form values including state-only custom paths if registered.
- Raw-state effect: `getValues()` is shallow-merged exactly. It does not omit U01/U02, clear Q02/Q03/Q05/Q06, remove false-flag Europe arrays, or require validation.
- Projection effect: destination is MTS-10; later Summary reflects whatever raw values survive its own conditions/lookups.
- User-visible result/error: destination is MTS-10; later Summary reflects whatever raw values survive its own conditions/lookups.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:prev`; Phase 2 EDGE-11-BACK.
- Clarification: —.

#### MTS-11-R10 — European collapser and temporary-control lock predicate

- Trigger: form render from default temporary rows.
- Evaluation point: props use `formState.defaultValues`, not watched/current arrays.
- Affected fields: European CTL-MT-16 and Q13.
- Raw-state effect: none. Predicate is default temporary array truthy AND truthy length AND `.find(row => row.isDraft === false)`; the expression can supply the found object as the truthy disabled prop. Removing/current edits do not recompute the default-values predicate.
- Projection effect: outer add/remove button and Q13 RadioList are disabled. Q10 Annual RadioList does **not** receive that disabled prop, and already-open children remain mounted. Outer close, when enabled, writes both flags false and removes both arrays; because no `added` prop exists, opening does not set a common `europeanCover` flag.
- User-visible result/error: outer add/remove button and Q13 RadioList are disabled. Q10 Annual RadioList does **not** receive that disabled prop, and already-open children remain mounted. Outer close, when enabled, writes both flags false and removes both arrays; because no `added` prop exists, opening does not set a common `europeanCover` flag.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:European cover DetailCollapser/temporaryEuropeanCover`.
- Clarification: —.

#### MTS-11-U01 — `customWindscreenError`

- Position and mount condition: disabled, `shouldUnregister` Controller after the Windscreen card; CTL-style `CustomError` scrolls `id="customError"` into view only when its message is truthy.
- Kind: schema-targeted state-only error; not a user answer and omitted by valid submit.
- Exact observable contract: Q04's non-comprehensive error uses this path. Closing an open card calls `trigger('customWindscreenError')` without awaiting it, then clears Q05/Q06; no runtime ordering beyond that expression sequence is asserted.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.windscreenCover`; `CleggGifford.CoverX.UI/src/components/fields/CustomError.tsx:CustomError`.
- Clarification: —.

#### MTS-11-U02 — `customRegNumberError`

- Position and mount condition: disabled, `shouldUnregister` CustomError before annual rows, only while Q10 truthy and annual row count >0.
- Kind: annual array-level uniqueness error; not a user answer and omitted by valid submit.
- Exact observable contract: R02 targets this path; annual registration change or later-row removal clears it when present. `CustomError` uses the same repeated `id="customError"` and truthy-message scroll behavior as U01.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:UniqueRegNumber`; `CleggGifford.CoverX.UI/src/components/fields/CustomError.tsx:CustomError`.
- Clarification: —.

#### MTS-11-U03 — Schema-only `europeanCover`

- Position and mount condition: not mounted by Step 11 and not included in `defaultObj`; no Step 11 Controller or toggle writes it.
- Kind: optional boolean schema path only.
- Exact observable contract: `MTStep11Schema` declares `.boolean().notRequired()`. The visible outer card is local CTL-MT-16 state initialized from Q10 OR Q13; it is not this field.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React/Yup source reconciliation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema.europeanCover`.
- Clarification: —.

#### MTS-11-U04 — Repeated-row non-question fields

- Position and mount condition: temporary field-array snapshots may carry `isDraft`; raw persisted rows may carry `europeanCoverDriverNames` and a schema-discriminating `type`.
- Kind: lifecycle/display/schema state, not mounted editable questions.
- Exact observable contract: new UI rows set `isDraft:true` and do not set `type` or names. `isDraft:false` drives R03/R10 locks and selected custom-test bypasses; `type` chooses schema branches; stored names are shown only for locked non-plan-3 rows and used by Summary. Their producer/runtime values are not invented.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: —.

#### MTS-11-R11 — Extras and European Summary projection

- Trigger: MTS-14 render; `Extras` SummaryCollapser is always mounted and Edit uses standard-family MTS-11.
- Evaluation point: JSX in source order.
- Affected fields: Q01–Q20 plus persisted driver names.
- Raw-state effect: none.
- Projection effect: Q01 truthy adds demonstration type via loose OPT-MT-43 lookup and always adds motorcycle Yes/No via `!!Q03`; Q04 truthy similarly adds Q05 OPT-MT-44 text and `!!Q06`. Q07, Q08 and Q09 always render. Q10 truthy adds `Do you require Annual Green Card?` Yes plus each raw annual row in order; its purpose lookup uses OPT-MT-26 rather than the input OPT-MT-46. Q13 truthy adds Temporary Yes plus each raw row in order: dates format `DD/MM/YYYY`; area uses OPT-MT-47 text; Drivers joins `europeanCoverDriverNames`; cover uses OPT-MT-07 rather than input OPT-MT-48; usage uses OPT-MT-26 rather than input OPT-MT-46. No `isDraft` filter, registration uniqueness normalization, GUID-to-name mapping, or countries metadata is applied in Summary.
- User-visible result/error: Q01 truthy adds demonstration type via loose OPT-MT-43 lookup and always adds motorcycle Yes/No via `!!Q03`; Q04 truthy similarly adds Q05 OPT-MT-44 text and `!!Q06`. Q07, Q08 and Q09 always render. Q10 truthy adds `Do you require Annual Green Card?` Yes plus each raw annual row in order; its purpose lookup uses OPT-MT-26 rather than the input OPT-MT-46. Q13 truthy adds Temporary Yes plus each raw row in order: dates format `DD/MM/YYYY`; area uses OPT-MT-47 text; Drivers joins `europeanCoverDriverNames`; cover uses OPT-MT-07 rather than input OPT-MT-48; usage uses OPT-MT-26 rather than input OPT-MT-46. No `isDraft` filter, registration uniqueness normalization, GUID-to-name mapping, or countries metadata is applied in Summary.
- Evidence: Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`.
- Clarification: CLR-001 for absent option rows; dynamic names/rows are not fabricated.

#### AUD-MT-08 — Option-consumer backlinks

- Audit position: Documentation-only closure record immediately after the owning surface records; not mounted by the legacy UI.
- Purpose: Documentation audit; no legacy UI element is introduced.
- Assertion: The table below reconciles the exact source-backed records and does not add runtime behavior.
- Coverage: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Unresolved — Unresolved scope: database rows/metadata. `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Extras`; canonical OPT records above.
- Clarification: CLR-001.

| OPT record | MTS-11 consumer |
|---|---|
| OPT-MT-07 | R11 temporary cover Summary lookup (different from input collection) |
| OPT-MT-17/18 | Q18 plan-ID-3 age-range display |
| OPT-MT-26/55 | R05 selected-driver usage test and R11 annual/temporary usage Summary lookups |
| OPT-MT-43 | Q02/R07 demonstration options and metadata; R11 Summary |
| OPT-MT-44 | Q05 and R11 windscreen Summary |
| OPT-MT-45 | Q09 and R11 third-party Summary |
| OPT-MT-46 | Q12 annual and Q20 temporary-trip input choices plus R05 social metadata; no Summary consumer |
| OPT-MT-47/63 | Q17 temporary-trip area options/countries display; OPT-MT-47 alone is read by R11 area Summary |
| OPT-MT-48 | Q19 temporary input choice and comprehensive metadata |

#### MTS-11-R12 — MTS-10/11 final bidirectional reconciliation

- Trigger: final Task 2 UI↔schema↔state↔summary↔option audit.
- Evaluation point: documentation verification only.
- Affected fields: every mounted MTS-10 and MTS-11 Q/R/U record plus AUD-MT-07/AUD-MT-08.
- Raw-state effect: none. All Step 11 Controllers map to Q01–Q20 or U01/U02; every MTStep11Schema path maps to those records or U03/U04. R01–R10 account for defaults, callbacks, clears, arrays, plan ID 3, exact-value annual registration uniqueness, no temporary uniqueness, six/twelve-month policy end, date fall-through, lock/draft state, and valid-submit/Back differences.
- Projection effect: R11 accounts for every Extras Summary row and the three mismatched option collection lookups plus absent local driver-name derivation. AUD-MT-08 maps every dynamic option/metadata consumer to its canonical OPT record and CLR-001. MTS-10 remains fully reconciled by MTS-10-R10; no API, rating, quotation/result, checkout, payment, or legacy-source behavior enters either contract.
- User-visible result/error: R11 accounts for every Extras Summary row and the three mismatched option collection lookups plus absent local driver-name derivation. AUD-MT-08 maps every dynamic option/metadata consumer to its canonical OPT record and CLR-001. MTS-10 remains fully reconciled by MTS-10-R10; no API, rating, quotation/result, checkout, payment, or legacy-source behavior enters either contract.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; `CleggGifford.CoverX.UI/src/components/fields/DetailCollapser.tsx:DetailCollapser`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema/MTStep11Schema`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`.
- Clarification: CLR-001 only for database-backed row facts.

#### AUD-MT-09 — MTS-10/11 completeness ledger

- Audit position: Documentation-only closure record immediately after the owning surface records; not mounted by the legacy UI.
- Purpose: Documentation audit; no legacy UI element is introduced.
- Assertion: The table below reconciles the exact source-backed records and does not add runtime behavior.
- Coverage: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React source and documentation reconciliation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`.
- Clarification: —.

| Audit direction | Source set | Documentation destination | Result |
|---|---|---|---|
| UI → schema/records | Step10, Step11, DetailCollapser | MTS-10 Q01–Q37/U01/R01–R10; MTS-11 Q01–Q20/U01–U04/R01–R12 | PASS |
| Schema → UI/state | MTStep10Schema, MTStep11Schema | Mounted Q records plus total/one-type and custom/schema-only state records | PARTIAL — CLR-008/CLR-009 preserve unresolved custom-test outcomes and dependency-generated default text |
| Field → Summary | Every MTS-10/11 Q | MTS-10-R09 and MTS-11-R11 explicit inclusion/omission/mismatch | PASS |
| Summary → field | Vehicles to be Driven and Extras sections | All rendered values map to named Q/raw-state records | PASS |
| Option → consumer | OPT-MT-07/17/18/26/40/43–48/55–57/59/63/71 | AUD-MT-07 and AUD-MT-08 | PASS |
| Consumer → option | Every Step 10/11 dynamic choice and metadata predicate | Canonical OPT records and CLR-001 | PASS |
| Repeated state | annual European and temporary European arrays | R01–R05 and U02/U04 | PASS |
| Raw → projection | category derivation, extras flags/rows | MTS-10-R09 and MTS-11-R11 | PASS |

## MTS-12 — Declaration

### Context, order, and exact ten-declaration matrix

`MotorTradeStep12` mounts the translated heading `Declaration`, followed by exactly ten declaration groups in the JSX order below. Every declaration uses CTL-MT-04 with the inline options `{ text: 'Yes', value: true }`, then `{ text: 'No', value: false }`; there is no preselected fallback. Every paired detail uses CTL-MT-08 as a six-row textarea with `maxLength={500}` beneath the exact label `Please provide details`. The table distinguishes the declaration question from its dependent detail, its exact false-answer assignment, and its Summary projection.

| Order | Declaration Q ID / boolean field | Exact question | Yes/No label, value, order, default | Detail Q ID / field and copy/control | Visibility | Requiredness, constraints, and errors | Negative-answer clear | Raw state | Summary mapping |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | MTS-12-Q01 `haveAnyOfDriversHadSpecialTermsApplied` | `Has anyone on this policy, or any company director ever had insurance declined, cancelled, avoided or special terms imposed?` | `Yes`/`true`, then `No`/`false`; raw value except exact `null`, otherwise no selected default | MTS-12-Q02 `anyOfDriversHadSpecialTermsAppliedDetails`; `Please provide details`; six-row CTL-MT-08, maximum 500 | `!!watch('haveAnyOfDriversHadSpecialTermsApplied')` | Boolean required; detail string required only for exact `true`; both labeled `This`; their exact dependency-generated required text is unresolved under CLR-009; control truncates at 500 CRLF-aware characters | MTS-12-R02 writes Q02 `null` in Q01 `onNegativeCallback` | Submit/Back shallow-persist current values; false and cleared `null` remain distinct | `declarationArray[0]`; only truthy Q01 renders the exact question then raw Q02; false is omitted |
| 2 | MTS-12-Q03 `haveAnyOfDriversHadClaimRefused` | `Has anyone on this policy, or any company director ever had a claim repudiated or refused?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q04 `anyOfDriversHadClaimRefusedDetails`; same exact detail label and control | `!!watch('haveAnyOfDriversHadClaimRefused')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R04 writes Q04 `null` in Q03 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[1]`; truthy-only exact question and raw detail |
| 3 | MTS-12-Q05 `haveAnyOfNotListedDriversHaveCCJS` | `Has anyone on this policy, or any company director been the subject of a County Court Judgement and/or ever been cited in any unsatisfiled court judgements (or the Scottish equivalent)` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q06 `anyOfNotListedDriversHaveCCJSDetails`; same exact detail label and control | `!!watch('haveAnyOfNotListedDriversHaveCCJS')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R06 writes Q06 `null` in Q05 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[2]`; truthy-only exact source typo `unsatisfiled` and raw detail |
| 4 | MTS-12-Q07 `haveAnyOfDriversOrPartnerDirectorBankrupted` | `Has anyone on this policy, or any company director been the subject of an individual voluntary arrangement with creditors, voluntary liquidation, a winding up or administrative proceeding or declared bankrupt?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q08 `anyOfDriversOrPartnerDirectorBankruptedDetails`; same exact detail label and control | `!!watch('haveAnyOfDriversOrPartnerDirectorBankrupted')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R08 writes Q08 `null` in Q07 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[3]`; truthy-only exact question and raw detail |
| 5 | MTS-12-Q09 `haveAnyOfDriversHadDisabilitiesNotReported` | `Has anyone on this policy, or any company director suffered a disability that has a requirement to contact the DVLA but which has not been reported to the DVLA?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q10 `anyOfDriversHadDisabilitiesNotReportedDetails`; same exact detail label and control | `!!watch('haveAnyOfDriversHadDisabilitiesNotReported')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R10 writes Q10 `null` in Q09 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[4]`; truthy-only exact question and raw detail |
| 6 | MTS-12-Q11 `haveAnyOfPartnerDirectorHadCriminalConviction` | `Has anyone on this policy, or any company director been convicted of any criminal conviction not spent under the Rehabilitation of Offenders Act or have any prosecutions pending?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q12 `anyOfPartnerDirectorHadCriminalConvictionDetails`; same exact detail label and control | `!!watch('haveAnyOfPartnerDirectorHadCriminalConviction')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R12 writes Q12 `null` in Q11 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[5]`; truthy-only exact question and raw detail |
| 7 | MTS-12-Q13 `hasAnyoneBeenDirectorOrPartnerOtherThanMotortrade` | `Has anyone on this policy, or any company director been a director or business partner of a business or company other than the motor trade business proposed here?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q14 `anyoneBeenDirectorOrPartnerOtherThanMotortradeDetails`; same exact detail label and control | `!!watch('hasAnyoneBeenDirectorOrPartnerOtherThanMotortrade')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R14 writes Q14 `null` in Q13 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[6]`; truthy-only exact question and raw detail |
| 8 | MTS-12-Q15 `hasAnyoneBeenVehicleRentalHireLeasingCompany` | `Has anyone on this policy, or any company director been involved in a vehicle rental, self drive hire, vehicle leasing, vehicle broking or accident claims management?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q16 `anyoneBeenVehicleRentalHireLeasingCompanyDetails`; same exact detail label and control | `!!watch('hasAnyoneBeenVehicleRentalHireLeasingCompany')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R16 writes Q16 `null` in Q15 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[7]`; truthy-only exact question and raw detail |
| 9 | MTS-12-Q17 `haveAnyoneBeenDisqualifiedForActingAsDirector` | `Has anyone on this policy, or any company director been disqualified from acting as a company director for any period of time?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q18 `anyoneBeenDisqualifiedForActingAsDirectorDetails`; same exact detail label and control | `!!watch('haveAnyoneBeenDisqualifiedForActingAsDirector')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R18 writes Q18 `null` in Q17 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[8]`; truthy-only exact question and raw detail |
| 10 | MTS-12-Q19 `haveAnyOfDirectorGoneIntoLiquidation` | `Has anyone on this policy, or any company director been a director of a company that has gone into liquidation or dissolved within the last ten years?` | `Yes`/`true`, then `No`/`false`; raw except exact `null`; no selected fallback | MTS-12-Q20 `anyOfDirectorGoneIntoLiquidationDetails`; same exact detail label and control | `!!watch('haveAnyOfDirectorGoneIntoLiquidation')` | Same boolean/detail required contract and 500-character control constraint | MTS-12-R20 writes Q20 `null` in Q19 `onNegativeCallback` | Submit/Back shallow-persist | `declarationArray[9]`; truthy-only exact question and raw detail |

Sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12/defaultObject`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json`; `CleggGifford.CoverX.UI/src/i18n/en/common.json`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray/Declaration`.

### Declaration and detail question records

The records below expand the matrix without changing its common contracts. `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:testOptions/MotorTradeStep12` defines the inline static source-order pair `Yes` boolean `true`, then `No` boolean `false`; CTL-MT-04 uses strict equality for checked state and invokes `onNegativeCallback` for the exact boolean false choice. Every field is always enabled while mounted. Each detail's Summary mapping is coupled to its declaration and is not a separately labeled Summary row.

#### MTS-12-Q01 — `haveAnyOfDriversHadSpecialTermsApplied`

| Property | Exact contract |
|---|---|
| Position | Declaration 1 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q02. |
| Visible copy | `Has anyone on this policy, or any company director ever had insurance declined, cancelled, avoided or special terms imposed?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R02 and writes MTS-12-Q02 to exact `null`. |
| Summary | Declaration section entry 1, via `declarationArray[0]`. Only truthy stored MTS-12-Q01 renders; it prints the exact question followed by raw MTS-12-Q02. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q02 — `anyOfDriversHadSpecialTermsAppliedDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q01, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfDriversHadSpecialTermsApplied')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q01 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q01 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 1, a truthy MTS-12-Q01 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q01 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q03 — `haveAnyOfDriversHadClaimRefused`

| Property | Exact contract |
|---|---|
| Position | Declaration 2 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q04. |
| Visible copy | `Has anyone on this policy, or any company director ever had a claim repudiated or refused?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R04 and writes MTS-12-Q04 to exact `null`. |
| Summary | Declaration section entry 2, via `declarationArray[1]`. Only truthy stored MTS-12-Q03 renders; it prints the exact question followed by raw MTS-12-Q04. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q04 — `anyOfDriversHadClaimRefusedDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q03, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfDriversHadClaimRefused')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q03 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q03 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 2, a truthy MTS-12-Q03 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q03 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q05 — `haveAnyOfNotListedDriversHaveCCJS`

| Property | Exact contract |
|---|---|
| Position | Declaration 3 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q06. |
| Visible copy | `Has anyone on this policy, or any company director been the subject of a County Court Judgement and/or ever been cited in any unsatisfiled court judgements (or the Scottish equivalent)` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R06 and writes MTS-12-Q06 to exact `null`. |
| Summary | Declaration section entry 3, via `declarationArray[2]`. Only truthy stored MTS-12-Q05 renders; it prints the exact question followed by raw MTS-12-Q06. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q06 — `anyOfNotListedDriversHaveCCJSDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q05, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfNotListedDriversHaveCCJS')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q05 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q05 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 3, a truthy MTS-12-Q05 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q05 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q07 — `haveAnyOfDriversOrPartnerDirectorBankrupted`

| Property | Exact contract |
|---|---|
| Position | Declaration 4 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q08. |
| Visible copy | `Has anyone on this policy, or any company director been the subject of an individual voluntary arrangement with creditors, voluntary liquidation, a winding up or administrative proceeding or declared bankrupt?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R08 and writes MTS-12-Q08 to exact `null`. |
| Summary | Declaration section entry 4, via `declarationArray[3]`. Only truthy stored MTS-12-Q07 renders; it prints the exact question followed by raw MTS-12-Q08. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q08 — `anyOfDriversOrPartnerDirectorBankruptedDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q07, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfDriversOrPartnerDirectorBankrupted')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q07 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q07 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 4, a truthy MTS-12-Q07 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q07 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q09 — `haveAnyOfDriversHadDisabilitiesNotReported`

| Property | Exact contract |
|---|---|
| Position | Declaration 5 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q10. |
| Visible copy | `Has anyone on this policy, or any company director suffered a disability that has a requirement to contact the DVLA but which has not been reported to the DVLA?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R10 and writes MTS-12-Q10 to exact `null`. |
| Summary | Declaration section entry 5, via `declarationArray[4]`. Only truthy stored MTS-12-Q09 renders; it prints the exact question followed by raw MTS-12-Q10. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q10 — `anyOfDriversHadDisabilitiesNotReportedDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q09, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfDriversHadDisabilitiesNotReported')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q09 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q09 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 5, a truthy MTS-12-Q09 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q09 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q11 — `haveAnyOfPartnerDirectorHadCriminalConviction`

| Property | Exact contract |
|---|---|
| Position | Declaration 6 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q12. |
| Visible copy | `Has anyone on this policy, or any company director been convicted of any criminal conviction not spent under the Rehabilitation of Offenders Act or have any prosecutions pending?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R12 and writes MTS-12-Q12 to exact `null`. |
| Summary | Declaration section entry 6, via `declarationArray[5]`. Only truthy stored MTS-12-Q11 renders; it prints the exact question followed by raw MTS-12-Q12. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q12 — `anyOfPartnerDirectorHadCriminalConvictionDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q11, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfPartnerDirectorHadCriminalConviction')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q11 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q11 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 6, a truthy MTS-12-Q11 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q11 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q13 — `hasAnyoneBeenDirectorOrPartnerOtherThanMotortrade`

| Property | Exact contract |
|---|---|
| Position | Declaration 7 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q14. |
| Visible copy | `Has anyone on this policy, or any company director been a director or business partner of a business or company other than the motor trade business proposed here?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R14 and writes MTS-12-Q14 to exact `null`. |
| Summary | Declaration section entry 7, via `declarationArray[6]`. Only truthy stored MTS-12-Q13 renders; it prints the exact question followed by raw MTS-12-Q14. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q14 — `anyoneBeenDirectorOrPartnerOtherThanMotortradeDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q13, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('hasAnyoneBeenDirectorOrPartnerOtherThanMotortrade')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q13 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q13 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 7, a truthy MTS-12-Q13 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q13 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q15 — `hasAnyoneBeenVehicleRentalHireLeasingCompany`

| Property | Exact contract |
|---|---|
| Position | Declaration 8 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q16. |
| Visible copy | `Has anyone on this policy, or any company director been involved in a vehicle rental, self drive hire, vehicle leasing, vehicle broking or accident claims management?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R16 and writes MTS-12-Q16 to exact `null`. |
| Summary | Declaration section entry 8, via `declarationArray[7]`. Only truthy stored MTS-12-Q15 renders; it prints the exact question followed by raw MTS-12-Q16. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q16 — `anyoneBeenVehicleRentalHireLeasingCompanyDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q15, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('hasAnyoneBeenVehicleRentalHireLeasingCompany')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q15 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q15 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 8, a truthy MTS-12-Q15 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q15 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q17 — `haveAnyoneBeenDisqualifiedForActingAsDirector`

| Property | Exact contract |
|---|---|
| Position | Declaration 9 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q18. |
| Visible copy | `Has anyone on this policy, or any company director been disqualified from acting as a company director for any period of time?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R18 and writes MTS-12-Q18 to exact `null`. |
| Summary | Declaration section entry 9, via `declarationArray[8]`. Only truthy stored MTS-12-Q17 renders; it prints the exact question followed by raw MTS-12-Q18. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q18 — `anyoneBeenDisqualifiedForActingAsDirectorDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q17, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyoneBeenDisqualifiedForActingAsDirector')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q17 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q17 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 9, a truthy MTS-12-Q17 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q17 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q19 — `haveAnyOfDirectorGoneIntoLiquidation`

| Property | Exact contract |
|---|---|
| Position | Declaration 10 of 10 in mounted Step 12 JSX order; its detail is MTS-12-Q20. |
| Visible copy | `Has anyone on this policy, or any company director been a director of a company that has gone into liquidation or dissolved within the last ten years?` |
| Control | CTL-MT-04 radio list; no disabled prop and no preselected fallback. |
| Stored/emitted value | Raw boolean is retained; exact `null` is omitted from `defaultObject`, leaving `undefined` until answered. Yes writes boolean `true`; No writes boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; CTL-MT-04 checked state uses strict equality. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Always required. |
| Constraints | `yup.boolean().required().label('This')`; both true and false satisfy the boolean requirement. |
| Errors | CTL-MT-04 renders the resolver result through `fieldState.error`/`FormError`. The declaration boolean uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | Submit and Back shallow-persist the current boolean. Choosing No invokes the negative callback in MTS-12-R20 and writes MTS-12-Q20 to exact `null`. |
| Summary | Declaration section entry 10, via `declarationArray[9]`. Only truthy stored MTS-12-Q19 renders; it prints the exact question followed by raw MTS-12-Q20. False/null/undefined omit both question and detail, and the boolean word itself is never shown. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

#### MTS-12-Q20 — `anyOfDirectorGoneIntoLiquidationDetails`

| Property | Exact contract |
|---|---|
| Position | Dependent detail beneath MTS-12-Q19, inside that declaration’s React Bootstrap Collapse. |
| Visible copy | `Please provide details`. |
| Control | CTL-MT-08 textarea with `rows={6}`, `size={12}`, and `maxLength={500}`; no disabled prop. |
| Stored/emitted value | Raw string is retained; exact `null` is omitted from `defaultObject`. The paired No callback writes exact `null`; text input emits the CRLF-normalized/truncated string. |
| Options | No options. |
| Visible when | Mounted only when `!!watch('haveAnyOfDirectorGoneIntoLiquidation')` is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when MTS-12-Q19 is exact boolean `true`; otherwise optional. |
| Constraints | The true branch is `yup.string().required().label('This')`; otherwise `notRequired()`. CTL-MT-08 normalizes line endings and truncates without splitting a CRLF pair at 500 JavaScript code units; no Yup `.max(500)` exists. |
| Errors | CTL-MT-08 renders the resolver result through `fieldState.error`/`FormError`. The conditional detail string uses `.required().label('This')` when active; Step 12 supplies no custom message, so the exact dependency-generated text is unresolved under CLR-009. |
| Lifecycle | MTS-12-Q19 No writes this field to exact `null`; Submit and Back otherwise shallow-persist its current raw value. |
| Summary | Has no independent row. At Declaration entry 10, a truthy MTS-12-Q19 prints the exact declaration question then this raw detail; false/null/undefined MTS-12-Q19 omits both. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`. |
| Clarification | CLR-009 |

### Independent visibility and negative-answer mutation rules

Each pair has two records because rendering a Collapse and assigning a dependent value are different effects. Every visibility rule is evaluated during render from the current watched boolean and performs no write. Every clear rule is evaluated by CTL-MT-04 only when the exact `false` option is chosen and writes the named detail path to exact `null`; hiding by itself is not documented as a clear.

#### MTS-12-R01 — Q01 controls Q02 visibility and requiredness

- Trigger: render `!!watch(Q01)`; resolver exact `Q01 === true`.
- Evaluation point: render `!!watch(Q01)`; resolver exact `Q01 === true`.
- Affected fields: mounts Q02 Collapse and makes Q02 required only for exact true; no raw write or independent projection change.
- Raw-state effect: mounts Q02 Collapse and makes Q02 required only for exact true; no raw write or independent projection change.
- Projection effect: mounts Q02 Collapse and makes Q02 required only for exact true; no raw write or independent projection change.
- User-visible result/error: mounts Q02 Collapse and makes Q02 required only for exact true; no raw write or independent projection change.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q01]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q02.when`; —.
- Clarification: —.

#### MTS-12-R02 — Q01 false clears Q02

- Trigger: choose boolean `false` in Q01; CTL-MT-04 `onNegativeCallback` after the choice change.
- Evaluation point: choose boolean `false` in Q01; CTL-MT-04 `onNegativeCallback` after the choice change.
- Affected fields: Q01 and Q02.
- Raw-state effect: `setValue('anyOfDriversHadSpecialTermsAppliedDetails', null)`; Q02 hides because Q01 is false and the declaration is later Summary-omitted.
- Projection effect: `setValue('anyOfDriversHadSpecialTermsAppliedDetails', null)`; Q02 hides because Q01 is false and the declaration is later Summary-omitted.
- User-visible result/error: `setValue('anyOfDriversHadSpecialTermsAppliedDetails', null)`; Q02 hides because Q01 is false and the declaration is later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfDriversHadSpecialTermsApplied.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R03 — Q03 controls Q04 visibility and requiredness

- Trigger: render `!!watch(Q03)`; resolver exact `Q03 === true`.
- Evaluation point: render `!!watch(Q03)`; resolver exact `Q03 === true`.
- Affected fields: Q04 mounts/is required only for true; no write.
- Raw-state effect: Q04 mounts/is required only for true; no write.
- Projection effect: Q04 mounts/is required only for true; no write.
- User-visible result/error: Q04 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q03]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q04.when`; —.
- Clarification: —.

#### MTS-12-R04 — Q03 false clears Q04

- Trigger: choose boolean false in Q03 callback.
- Evaluation point: choose boolean false in Q03 callback.
- Affected fields: Q03 and Q04.
- Raw-state effect: `setValue('anyOfDriversHadClaimRefusedDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfDriversHadClaimRefusedDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfDriversHadClaimRefusedDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfDriversHadClaimRefused.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R05 — Q05 controls Q06 visibility and requiredness

- Trigger: render `!!watch(Q05)`; resolver exact `Q05 === true`.
- Evaluation point: render `!!watch(Q05)`; resolver exact `Q05 === true`.
- Affected fields: Q06 mounts/is required only for true; no write.
- Raw-state effect: Q06 mounts/is required only for true; no write.
- Projection effect: Q06 mounts/is required only for true; no write.
- User-visible result/error: Q06 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q05]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q06.when`; —.
- Clarification: —.

#### MTS-12-R06 — Q05 false clears Q06

- Trigger: choose boolean false in Q05 callback.
- Evaluation point: choose boolean false in Q05 callback.
- Affected fields: Q05 and Q06.
- Raw-state effect: `setValue('anyOfNotListedDriversHaveCCJSDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfNotListedDriversHaveCCJSDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfNotListedDriversHaveCCJSDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfNotListedDriversHaveCCJS.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R07 — Q07 controls Q08 visibility and requiredness

- Trigger: render `!!watch(Q07)`; resolver exact `Q07 === true`.
- Evaluation point: render `!!watch(Q07)`; resolver exact `Q07 === true`.
- Affected fields: Q08 mounts/is required only for true; no write.
- Raw-state effect: Q08 mounts/is required only for true; no write.
- Projection effect: Q08 mounts/is required only for true; no write.
- User-visible result/error: Q08 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q07]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q08.when`; —.
- Clarification: —.

#### MTS-12-R08 — Q07 false clears Q08

- Trigger: choose boolean false in Q07 callback.
- Evaluation point: choose boolean false in Q07 callback.
- Affected fields: Q07 and Q08.
- Raw-state effect: `setValue('anyOfDriversOrPartnerDirectorBankruptedDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfDriversOrPartnerDirectorBankruptedDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfDriversOrPartnerDirectorBankruptedDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfDriversOrPartnerDirectorBankrupted.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R09 — Q09 controls Q10 visibility and requiredness

- Trigger: render `!!watch(Q09)`; resolver exact `Q09 === true`.
- Evaluation point: render `!!watch(Q09)`; resolver exact `Q09 === true`.
- Affected fields: Q10 mounts/is required only for true; no write.
- Raw-state effect: Q10 mounts/is required only for true; no write.
- Projection effect: Q10 mounts/is required only for true; no write.
- User-visible result/error: Q10 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q09]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q10.when`; —.
- Clarification: —.

#### MTS-12-R10 — Q09 false clears Q10

- Trigger: choose boolean false in Q09 callback.
- Evaluation point: choose boolean false in Q09 callback.
- Affected fields: Q09 and Q10.
- Raw-state effect: `setValue('anyOfDriversHadDisabilitiesNotReportedDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfDriversHadDisabilitiesNotReportedDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfDriversHadDisabilitiesNotReportedDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfDriversHadDisabilitiesNotReported.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R11 — Q11 controls Q12 visibility and requiredness

- Trigger: render `!!watch(Q11)`; resolver exact `Q11 === true`.
- Evaluation point: render `!!watch(Q11)`; resolver exact `Q11 === true`.
- Affected fields: Q12 mounts/is required only for true; no write.
- Raw-state effect: Q12 mounts/is required only for true; no write.
- Projection effect: Q12 mounts/is required only for true; no write.
- User-visible result/error: Q12 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q11]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q12.when`; —.
- Clarification: —.

#### MTS-12-R12 — Q11 false clears Q12

- Trigger: choose boolean false in Q11 callback.
- Evaluation point: choose boolean false in Q11 callback.
- Affected fields: Q11 and Q12.
- Raw-state effect: `setValue('anyOfPartnerDirectorHadCriminalConvictionDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfPartnerDirectorHadCriminalConvictionDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfPartnerDirectorHadCriminalConvictionDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfPartnerDirectorHadCriminalConviction.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R13 — Q13 controls Q14 visibility and requiredness

- Trigger: render `!!watch(Q13)`; resolver exact `Q13 === true`.
- Evaluation point: render `!!watch(Q13)`; resolver exact `Q13 === true`.
- Affected fields: Q14 mounts/is required only for true; no write.
- Raw-state effect: Q14 mounts/is required only for true; no write.
- Projection effect: Q14 mounts/is required only for true; no write.
- User-visible result/error: Q14 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q13]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q14.when`; —.
- Clarification: —.

#### MTS-12-R14 — Q13 false clears Q14

- Trigger: choose boolean false in Q13 callback.
- Evaluation point: choose boolean false in Q13 callback.
- Affected fields: Q13 and Q14.
- Raw-state effect: `setValue('anyoneBeenDirectorOrPartnerOtherThanMotortradeDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyoneBeenDirectorOrPartnerOtherThanMotortradeDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyoneBeenDirectorOrPartnerOtherThanMotortradeDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:hasAnyoneBeenDirectorOrPartnerOtherThanMotortrade.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R15 — Q15 controls Q16 visibility and requiredness

- Trigger: render `!!watch(Q15)`; resolver exact `Q15 === true`.
- Evaluation point: render `!!watch(Q15)`; resolver exact `Q15 === true`.
- Affected fields: Q16 mounts/is required only for true; no write.
- Raw-state effect: Q16 mounts/is required only for true; no write.
- Projection effect: Q16 mounts/is required only for true; no write.
- User-visible result/error: Q16 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q15]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q16.when`; —.
- Clarification: —.

#### MTS-12-R16 — Q15 false clears Q16

- Trigger: choose boolean false in Q15 callback.
- Evaluation point: choose boolean false in Q15 callback.
- Affected fields: Q15 and Q16.
- Raw-state effect: `setValue('anyoneBeenVehicleRentalHireLeasingCompanyDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyoneBeenVehicleRentalHireLeasingCompanyDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyoneBeenVehicleRentalHireLeasingCompanyDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:hasAnyoneBeenVehicleRentalHireLeasingCompany.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R17 — Q17 controls Q18 visibility and requiredness

- Trigger: render `!!watch(Q17)`; resolver exact `Q17 === true`.
- Evaluation point: render `!!watch(Q17)`; resolver exact `Q17 === true`.
- Affected fields: Q18 mounts/is required only for true; no write.
- Raw-state effect: Q18 mounts/is required only for true; no write.
- Projection effect: Q18 mounts/is required only for true; no write.
- User-visible result/error: Q18 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q17]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q18.when`; —.
- Clarification: —.

#### MTS-12-R18 — Q17 false clears Q18

- Trigger: choose boolean false in Q17 callback.
- Evaluation point: choose boolean false in Q17 callback.
- Affected fields: Q17 and Q18.
- Raw-state effect: `setValue('anyoneBeenDisqualifiedForActingAsDirectorDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyoneBeenDisqualifiedForActingAsDirectorDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyoneBeenDisqualifiedForActingAsDirectorDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyoneBeenDisqualifiedForActingAsDirector.onNegativeCallback`; —.
- Clarification: —.

#### MTS-12-R19 — Q19 controls Q20 visibility and requiredness

- Trigger: render `!!watch(Q19)`; resolver exact `Q19 === true`.
- Evaluation point: render `!!watch(Q19)`; resolver exact `Q19 === true`.
- Affected fields: Q20 mounts/is required only for true; no write.
- Raw-state effect: Q20 mounts/is required only for true; no write.
- Projection effect: Q20 mounts/is required only for true; no write.
- User-visible result/error: Q20 mounts/is required only for true; no write.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:Collapse[Q19]`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:Q20.when`; —.
- Clarification: —.

#### MTS-12-R20 — Q19 false clears Q20

- Trigger: choose boolean false in Q19 callback.
- Evaluation point: choose boolean false in Q19 callback.
- Affected fields: Q19 and Q20.
- Raw-state effect: `setValue('anyOfDirectorGoneIntoLiquidationDetails', null)`; hidden and later Summary-omitted.
- Projection effect: `setValue('anyOfDirectorGoneIntoLiquidationDetails', null)`; hidden and later Summary-omitted.
- User-visible result/error: `setValue('anyOfDirectorGoneIntoLiquidationDetails', null)`; hidden and later Summary-omitted.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:haveAnyOfDirectorGoneIntoLiquidation.onNegativeCallback`; —.
- Clarification: —.

### Shared MTS-12 lifecycle, navigation, and Summary audit

#### MTS-12-R21 — Defaults, valid submit, and Back persistence

- Trigger: form construction, resolver-accepted `Save and Continue`, or shared `Go Back`.
- Evaluation point: `defaultObject`, `onSubmit`, or `prev` before manager movement.
- Affected fields: Q01–Q20.
- Raw-state effect: `defaultObject` enumerates all twenty paths and uses `omitBy(value => value === null)`, so exact `null` properties are omitted while `undefined`, `false`, empty string, and other values remain. Valid submit shallow-merges the resolver data and moves to MTS-13. Back uses unvalidated `getValues()`, shallow-merges all current values, then moves to MTS-11. Neither handler performs an additional generic dependent-detail clear.
- Projection effect: declaration rendering follows R22; `Save and Continue` and `Go Back` are supplied by `NavigatorButton`, with Back evaluated before manager Previous.
- User-visible result/error: declaration rendering follows R22; `Save and Continue` and `Go Back` are supplied by `NavigatorButton`, with Back evaluated before manager Previous.
- Evidence: Direct React — React and store sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:defaultObject/onSubmit/prev`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`; Phase 2 EDGE-12-NEXT/EDGE-12-BACK.
- Clarification: —.

#### MTS-12-R22 — `declarationArray` one-to-one Summary projection

- Trigger: MTS-14 `Declaration` SummaryCollapser render, source-order `.map` over `declarationArray`.
- Evaluation point: MTS-14 `Declaration` SummaryCollapser render, source-order `.map` over `declarationArray`.
- Affected fields: Q01–Q20 and the ten translated question labels.
- Raw-state effect: none.
- Projection effect: each declaration entry uses the exact boolean field as `value` and its paired detail path as `detail`. If the raw boolean is truthy, Summary renders the same `mtlabel.<value>` question in bold, a line break, and the raw detail string; it does not render the word `Yes`. If false, null, undefined, or otherwise falsey, the whole entry returns `null`; it does not render `No` or retained detail text. The collapser itself is always mounted and may therefore be empty.
- User-visible result/error: each declaration entry uses the exact boolean field as `value` and its paired detail path as `detail`. If the raw boolean is truthy, Summary renders the same `mtlabel.<value>` question in bold, a line break, and the raw detail string; it does not render the word `Yes`. If false, null, undefined, or otherwise falsey, the whole entry returns `null`; it does not render `No` or retained detail text. The collapser itself is always mounted and may therefore be empty.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray/Declaration`.
- Clarification: —.

#### MTS-12-U01 — Heading, layout, error channels, and navigation

- Position and mount condition: `container container-body-md`; translated `Declaration` heading; one `d-flex flex-column` wrapper per declaration/detail pair; React Bootstrap Collapse per detail; shared navigator after pair ten.
- Kind: Heading, layout, error-channel, and navigation state.
- Exact observable contract: each boolean is a CTL-MT-04 Yes/No group with its full translated declaration question; each visible detail has `Please provide details`; CTA `Save and Continue`, then `Go Back` because persisted step is 12. CTL-MT-04 and CTL-MT-08 own their mounted field-level error behavior. React Bootstrap Collapse uses the truthy watched value; Step 12 adds no separate alert, dialog, hint, or error summary and no field-specific accessibility attribute beyond the shared controls.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:declaration`; `CleggGifford.CoverX.UI/src/i18n/en/common.json:please_details`.
- Clarification: —.

#### AUD-MT-10 — MTS-12 completeness ledger

- Audit position: Documentation-only closure record immediately after the owning surface records; not mounted by the legacy UI.
- Purpose: Documentation audit; no legacy UI element is introduced.
- Assertion: The table below reconciles the exact source-backed records and does not add runtime behavior.
- Coverage: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React source and documentation reconciliation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`.
- Clarification: —.

| Audit direction | Source set | Documentation destination | Result |
|---|---|---|---|
| UI → records/schema | 20 Step12 Controllers, 10 Collapse predicates, heading, detail labels and navigator | Q01–Q20, R01–R22, U01 | PASS |
| Schema → UI/state | 10 required booleans and 10 conditional strings in `MTStep12Schema` | Q01–Q20 and R01/R03/R05/R07/R09/R11/R13/R15/R17/R19 | PASS |
| Negative callback → exact mutation | Ten `onNegativeCallback` assignments | R02/R04/R06/R08/R10/R12/R14/R16/R18/R20 | PASS |
| Field → Summary | Every declaration/detail pair | R22 and the ten-row array audit | PASS |
| Summary → field | All ten `declarationArray` entries | Unique declaration and detail Q mappings in identical order | PASS |
| Copy/options/defaults | mounted locale calls, inline `testOptions`, `defaultObject` | matrix, Q records, R21 and U01 | PASS |
| Legacy/scope | Read-only React/schema/store/locale/Summary evidence | Documentation only; no transport, quotation/result, checkout or payment behavior | PASS |

## MTS-13 — Additional Information

`MotorTradeStep13` mounts translated heading `Additional Information`, then the essential-risk textarea, the conditionally mounted car-jockey radius group, the conditionally mounted shunter-radius group, and the shared navigator in that order. Dynamic option labels and metadata row values remain unresolved under CLR-001; the repository-visible collection shapes, predicates, primitive comparisons, form lifecycle, and Summary behavior are fixed below.

| Mounted order | Stable ID / field | Exact prompt | Control, choices, value order, and empty/default | Mounted predicate | `MTStep13Schema` | Submit / Back and Summary |
|---:|---|---|---|---|---|---|
| 1 | MTS-13-Q01 `essentialRiskInformation` | `Please provide any information that you think is essential to the risk: ` (resource includes a trailing space) | CTL-MT-08 textarea; four rows by shared default; `size={12}`; `maxLength={1000}`; raw string; `formData?.essentialRiskInformation`, with absent/falsey display `''`; enabled | Always | `yup.string().notRequired()`; no Yup maximum rule | Both paths retain the current emitted value. Summary always mounts its row and raw value, including a blank value. |
| 2 | MTS-13-Q02 `carJockeyRadiusID` | `What is the maximum radius you require to operate within?` | CTL-MT-04 `RadioList`; OPT-MT-49 source order and raw number-or-string option values; raw form default; unmatched/undefined has no checked radio; enabled | Exact R01 `areJockeyAsked` truthy | Required number with label `This` only when the boolean passed into `MTStep13Schema({ isJockeyAsked })` is true; otherwise not required | R04/R05 assign `null` when unasked. StepSummary has no car-jockey row, so even an asked/selected value is omitted. |
| 3 | MTS-13-Q03 `restrictShuntersPolicyRadius` | `Do you wish to restrict the policy to a 100 metre radius? ` (resource includes a trailing space) | CTL-MT-04; `{text:'Yes', value:true}` then `{text:'No', value:false}`; raw form default; unmatched/undefined has no checked radio; enabled | Exact R02 `areShuntersAsked` truthy | `yup.boolean().notRequired()` in every case: the visible shunter field has **no Yup required rule** | R04/R05 assign `null` when unasked. If asked, true/false persists; Summary renders only truthy, as `Yes`, with different literal spelling `100 meter`. |

### MTS-13 question records

#### MTS-13-Q01 — `essentialRiskInformation`

| Property | Exact contract |
|---|---|
| Position | First mounted field beneath the Step 13 heading. |
| Visible copy | `Please provide any information that you think is essential to the risk: `, preserving the resource trailing space. |
| Control | CTL-MT-08 textarea with inherited four rows, `size={12}`, `maxLength={1000}`, and no disabled or placeholder prop. |
| Stored/emitted value | `useForm.defaultValues` takes `formData?.essentialRiskInformation` without `omitBy`. An absent/undefined, null, empty, or other falsey field displays as `''` because CTL-MT-08 uses `field.value \|\| ''`; textarea changes emit a string. on every textarea change with the limit present, CTL-MT-08 converts CRLF to LF, lone CR to LF, then every LF to CRLF. Its loop counts each CRLF pair as two and each other JavaScript string code unit as one, stops before `used + charSize` would exceed 1000, never splits a CRLF pair, and emits the resulting truncated CRLF string. The native textarea also receives `maxLength={1000}`. `MTStep13Schema` adds no `.max(1000)` test. |
| Options | No options. |
| Visible when | Always mounted. |
| Enabled when | Always enabled. |
| Required when | Never; `yup.string().notRequired()` accepts blank. |
| Constraints | CTL-MT-08 converts CRLF and lone CR to normalized CRLF, counts each CRLF as two JavaScript code units, truncates before exceeding 1000 without splitting a pair, and also supplies native `maxLength={1000}`. The schema has no `.max(1000)`. |
| Errors | No Step 13 validation error is defined for this optional field; any resolver error would use CTL-MT-08 `fieldState.error`/`FormError`. |
| Lifecycle | `useForm.defaultValues` takes the raw value without `omitBy`; falsey display becomes `''`, edits emit the normalized/truncated string, and neither R04 nor R05 rewrites this path. Submit and Back persist the current value. |
| Summary | In `Additional Information`, always renders the first two-column row with literal label `Please provide any information that you think is essential to the risk:` and the raw stored value; undefined/null/empty does not omit the row. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Additional Information`. |
| Clarification | — |

#### MTS-13-Q02 — `carJockeyRadiusID`

| Property | Exact contract |
|---|---|
| Position | Second possible field, after Q01 and before Q03. |
| Visible copy | `What is the maximum radius you require to operate within?` |
| Control | CTL-MT-04 radio list with `options?.carJockeyRadii` (OPT-MT-49), no disabled prop. |
| Stored/emitted value | mounted only when R01 produces truthy `areJockeyAsked`. Default is the raw `formData?.carJockeyRadiusID`; undefined or an unmatched primitive leaves every radio unchecked. Selection emits the chosen option primitive without coercion. |
| Options | OPT-MT-49 in producer order; each label and raw `number \| string` value is passed through without coercion, and strict equality determines the checked item. |
| Visible when | Mounted only when MTS-13-R01 derives truthy `areJockeyAsked` from selected occupation metadata. |
| Enabled when | Always enabled while mounted. |
| Required when | Required only when the same render-derived `areJockeyAsked` boolean is true; unasked branch is optional. |
| Constraints | Asked branch: `yup.number().required().label('This')`; unasked branch: `yup.number().notRequired()`. |
| Errors | While asked, CTL-MT-04 renders the resolver result of `.required().label('This')`; no custom message is supplied, so the exact dependency-generated text is unresolved under CLR-009. No error is produced by this field while unasked. |
| Lifecycle | Raw default is retained while asked and selection emits the option primitive without coercion. R04 and R05 assign `null` when R01 is false; Submit and Back otherwise persist the selected/raw value. |
| Summary | `StepSummary` has no `carJockeyRadiusID` reference: the field is omitted from `Additional Information` in all states. R04/R05 write `null` when unasked; that lifecycle does not create a Summary row. |
| Evidence | Unresolved — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Additional Information`. |
| Clarification | CLR-001; CLR-009 |

#### MTS-13-Q03 — `restrictShuntersPolicyRadius`

| Property | Exact contract |
|---|---|
| Position | Third possible field, after Q01 and conditional Q02. |
| Visible copy | `Do you wish to restrict the policy to a 100 metre radius? `, preserving the input label’s trailing space. |
| Control | CTL-MT-04 radio list with no disabled prop. |
| Stored/emitted value | mounted only when the full R02 `areShuntersAsked` expression is truthy. Default is raw `formData?.restrictShuntersPolicyRadius`; undefined/null leaves both radios unchecked. Yes emits boolean `true`; No emits boolean `false`. |
| Options | Inline source order: `Yes` → boolean `true`, then `No` → boolean `false`; strict equality determines checked state. |
| Visible when | Mounted only when the complete MTS-13-R02 `areShuntersAsked` expression is truthy. |
| Enabled when | Always enabled while mounted. |
| Required when | Never; the schema always declares `yup.boolean().notRequired()` and receives no visibility argument. |
| Constraints | Optional boolean; true, false, null, and undefined do not block navigation through this field. |
| Errors | No field-specific schema error or Step 13 custom message. |
| Lifecycle | Raw default remains while asked; Yes emits true and No emits false. R04/R05 assign `null` only when unasked; Submit and Back otherwise persist true, false, or unanswered undefined without this optional field blocking navigation. |
| Summary | In `Additional Information`, renders only for truthy stored Q03, after Q01, with literal label `Do you wish to restrict the policy to a 100 meter radius?` (source `meter`) and `common.true` → `Yes`. False/null/undefined omit the row; `No` is never displayed. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Additional Information`. |
| Clarification | — |

### Conditional-question predicate truth table

All inputs are recomputed synchronously on each `MotorTradeStep13` render before `useForm` and resolver creation. Optional chaining is preserved; no database/runtime label is inferred from an ID or metadata flag.

| Question / case | Occupation metadata | Driver plan / usage | Cover level | Indemnity | Result |
|---|---|---|---|---|---|
| Q02 car jockey — qualifying | From OPT-MT-06/54, filter rows by truthy `requireCarJockeyRadius`, map raw `OptionItem.value` (`number | string`) to `jockeyIDs`; existential `formData?.occupations?.find(...)` tests `jockeyIDs?.includes(Number(customerOccupation?.occupationId))`. `includes` is strict/SameValueZero after only the selected occupation ID is numerically coerced. | Not read. | Not read. | Not read. | `!!find(...)` is `true`; Q02 mounts and its schema branch is required. |
| Q02 car jockey — nonqualifying/missing | No selected occupation satisfies that existential test, or the selected/options collections do not produce a truthy match. | Not read. | Not read. | Not read. | Boolean coercion yields `false`; Q02 is unmounted, schema branch is optional, and R04/R05 assign Q02 `null`. |
| Q03 shunter — qualifying | `formData?.occupations?.length === 1`, then OPT-MT-06/53 is filtered by truthy `requireShunterRadius`, maps raw `OptionItem.value` to `valetteIDs`, and `valetteIDs?.includes(formData?.occupations[0]?.occupationId)` strictly includes the sole raw numeric `occupationId`; unlike Q02, no `Number(...)` conversion is applied here. | Raw numeric `driverPlanId === 3` **or** `!formData?.drivers?.some(driver => driver?.usageID !== motorTradeOnlyChoice)`. `motorTradeOnlyChoice` is the first source-order OPT-MT-26/55 raw `value` whose `isSocialDomesticPleasure` is falsey. The `.some` inequality is strict, so the negation means no driver has a nonmatching usage; absent/empty drivers also make the negation true. | Raw numeric `coverLevelID === 3` **or** the Indemnity condition. | Raw numeric `coverIndemnityLimitOwnVehiclesID === 1` **or** the Cover-level condition. No OPT-MT-09 label, row, or `numericValue` metadata is consulted by this predicate. | Every `&&` group is truthy; Q03 mounts. It remains optional because schema has no corresponding visibility input or required branch. |
| Q03 shunter — nonqualifying/missing | Occupation count is not exactly one, or the sole ID is not strictly included in `valetteIDs`, or the option values/flags are unavailable/nonmatching. | Or plan is not strict ID 3 and at least one driver usage is strictly different from the derived first falsey-metadata usage value. | Or cover is not strict ID 3 and indemnity is not strict ID 1. | Or indemnity is not strict ID 1 and cover is not strict ID 3. | The `&&` chain is false/falsey; Q03 is unmounted and R04/R05 assign Q03 `null`. |

#### MTS-13-R01 — Derive car-jockey visibility and schema requiredness

- Trigger: every Step 13 render; derive `jockeyIDs`, evaluate the optional selected-occupation `.find`, then coerce its result with `!!`; pass the resulting boolean to `MTStep13Schema` during `useForm` construction.
- Evaluation point: every Step 13 render; derive `jockeyIDs`, evaluate the optional selected-occupation `.find`, then coerce its result with `!!`; pass the resulting boolean to `MTStep13Schema` during `useForm` construction.
- Affected fields: Q02.
- Raw-state effect: none at render. A selected occupation ID is converted with `Number`; option values are not converted; `includes` is strict/SameValueZero.
- Projection effect: true mounts Q02 and selects its required-number schema; false unmounts it and selects its optional-number schema. Hiding alone does not clear it; R04/R05 perform the writes.
- User-visible result/error: true mounts Q02 and selects its required-number schema; false unmounts it and selects its optional-number schema. Hiding alone does not clear it; R04/R05 perform the writes.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:jockeyIDs/areJockeyAsked/useForm`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; OPT-MT-06/49/54; CLR-001.
- Clarification: CLR-001.

#### MTS-13-R02 — Derive shunter visibility without requiredness

- Trigger: every Step 13 render; evaluate the full left-to-right `areShuntersAsked` `&&` expression shown in the truth table.
- Evaluation point: every Step 13 render; evaluate the full left-to-right `areShuntersAsked` `&&` expression shown in the truth table.
- Affected fields: Q03; inputs are selected occupations, raw drivers, `driverPlanId`, `coverLevelID`, `coverIndemnityLimitOwnVehiclesID`, and OPT-MT-06/26/53/55.
- Raw-state effect: none at render. The exact driver quantifier is “no driver has a `usageID` strictly unequal to the first falsey-`isSocialDomesticPleasure` option value,” not a label comparison. Cover and indemnity use literal strict IDs 3 and 1; OPT-MT-07/09 metadata is not looked up.
- Projection effect: a truthy result mounts Q03; a falsey result hides it. `MTStep13Schema` is unchanged and Q03 remains optional in both cases. Hiding alone does not clear it; R04/R05 perform the writes.
- User-visible result/error: a truthy result mounts Q03; a falsey result hides it. `MTStep13Schema` is unchanged and Q03 remains optional in both cases. Hiding alone does not clear it; R04/R05 perform the writes.
- Evidence: Unresolved — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:valetteIDs/motorTradeOnlyChoice/areShuntersAsked`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; CLR-001 for dynamic occupation and usage rows.
- Clarification: CLR-001.

#### MTS-13-R03 — Form defaults and resolver boundary

- Trigger: Step 13 form construction and a submit attempt.
- Evaluation point: Step 13 form construction and a submit attempt.
- Affected fields: Q01–Q03.
- Raw-state effect: all three `defaultValues` are direct optional-chain reads from `formData`; Step 13 does not apply `omitBy`, force a choice, or replace an absent value at construction. The resolver receives R01's boolean only for Q02. Q01 is optional string, Q03 optional boolean, and Q02 is required number only while asked.
- Projection effect: valid submit can proceed with Q01 blank and with an asked Q03 unanswered. A visible unanswered Q02 blocks submit through the shared required-error channel. Back is not resolver-gated.
- User-visible result/error: valid submit can proceed with Q01 blank and with an asked Q03 unanswered. A visible unanswered Q02 blocks submit through the shared required-error channel. Back is not resolver-gated.
- Evidence: Direct React — React and Yup sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:useForm`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; —.
- Clarification: —.

#### MTS-13-R04 — Valid-submit nulling precedes persistence and Next

- Trigger: `handleSubmit(onSubmit)` after `MTStep13Schema` accepts the form.
- Evaluation point: `handleSubmit(onSubmit)` after `MTStep13Schema` accepts the form.
- Affected fields: Q02 and Q03; Q01 is untouched.
- Raw-state effect: begin with resolver data; if `!areShuntersAsked`, shallow-copy and assign `restrictShuntersPolicyRadius: null`; then if `!areJockeyAsked`, shallow-copy that result and assign `carJockeyRadiusID: null`; then `setData({ ...data })` shallow-merges into the persisted store; only afterward `next()` performs EDGE-13-NEXT to MTS-14.
- Projection effect: unasked values become explicit raw nulls rather than merely hidden. Q02 is absent from Summary in all states; null/false Q03 is omitted; Q01 remains the always-mounted Summary row.
- User-visible result/error: unasked values become explicit raw nulls rather than merely hidden. Q02 is absent from Summary in all states; null/false Q03 is omitted; Q01 remains the always-mounted Summary row.
- Evidence: Direct React — React, store, and navigation sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`; EDGE-13-NEXT; —.
- Clarification: —.

#### MTS-13-R05 — Back nulling precedes persistence and Previous

- Trigger: shared `Go Back` button invokes `NavigatorButton.onNavigateBack`; no resolver gate.
- Evaluation point: shared `Go Back` button invokes `NavigatorButton.onNavigateBack`; no resolver gate.
- Affected fields: Q01–Q03.
- Raw-state effect: `prev()` first reads `getValues()`; applies the same ordered shunter-null assignment followed by jockey-null assignment when each predicate is false; then calls `setData({ ...data })`. After `prev()` returns, `NavigatorButton` calls manager `previous()`, which performs EDGE-13-BACK to MTS-12.
- Projection effect: current Q01 and any asked Q02/Q03 values persist even though Back bypasses schema; unasked Q02/Q03 are explicit null. Later Summary consequences are the same as R04.
- User-visible result/error: current Q01 and any asked Q02/Q03 values persist even though Back bypasses schema; unasked Q02/Q03 are explicit null. Later Summary consequences are the same as R04.
- Evidence: Direct React — React, store, and navigation sources: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:prev`; `CleggGifford.CoverX.UI/src/components/ui/MotorTrade/NavigatorButton.tsx:onNavigateBack`; EDGE-13-BACK; —.
- Clarification: —.

#### MTS-13-R06 — Additional Information Summary projection

- Trigger: MTS-14 always-mounted `SummaryCollapser text="Additional Information"` render.
- Evaluation point: MTS-14 always-mounted `SummaryCollapser text="Additional Information"` render.
- Affected fields: Q01–Q03.
- Raw-state effect: none.
- Projection effect: Q01 always gets a row and raw value, even blank. Q02 has no Summary reference and is always omitted. Q03 gets a row only when its raw value is truthy; that row uses literal `100 meter` rather than input `100 metre` and renders `common.${!!value}` (`Yes`). False/null/undefined Q03 produces no row and never displays `No`. The section Edit action returns directly to MTS-13.
- User-visible result/error: Q01 always gets a row and raw value, even blank. Q02 has no Summary reference and is always omitted. Q03 gets a row only when its raw value is truthy; that row uses literal `100 meter` rather than input `100 metre` and renders `common.${!!value}` (`Yes`). False/null/undefined Q03 produces no row and never displays `No`. The section Edit action returns directly to MTS-13.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Additional Information`; —.
- Clarification: —.

### MTS-13 option-consumer backlinks

| Option record | Exact MTS-13 consumer |
|---|---|
| OPT-MT-06 / OPT-MT-54 | R01 filters `mtOccupations` by truthy `requireCarJockeyRadius` and matches selected occupation IDs. |
| OPT-MT-49 | Q02 supplies source-order car-jockey radius label/value rows; current rows remain CLR-001. |
| OPT-MT-06 / OPT-MT-53 | R02 filters `mtOccupations` by truthy `requireShunterRadius` and strictly matches the sole selected occupation ID. |
| OPT-MT-26 / OPT-MT-55 | R02 finds the first falsey-`isSocialDomesticPleasure` usage row and compares every driver usage strictly to its raw value. |
| OPT-MT-07 | R02 consumes only the earlier raw `coverLevelID === 3` selection; it does not inspect the selected row or metadata. |
| OPT-MT-09 | R02 consumes only the earlier raw `coverIndemnityLimitOwnVehiclesID === 1` selection; it does not inspect `numericValue` or any other indemnity metadata. |

#### MTS-13-U01 — Heading, layout, error channels, and navigation

- Position and mount condition: `container container-body-md`; `<form>` with translated `Additional Information` heading; Q01 always, Q02 under R01, Q03 under R02, then shared navigator.
- Kind: Heading, layout, error-channel, and navigation state.
- Exact observable contract: Q01 CTL-MT-08 textarea; Q02/Q03 CTL-MT-04 radio groups; Q03's inline order is Yes then No. CTA is `Save and Continue`; persisted step 13 also mounts `Go Back`. shared CTL-MT-08/04 contracts apply. Q02 may receive the label-based required error; Q01/Q03 have no field-specific Yup failure in `MTStep13Schema`. Step 13 adds no alert, dialog, hint, error summary, loading state, or disabled state.
- Related questions/rules: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:add_info`; `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:risk_info/max_radius/restrict_radius`
- Clarification: —.

#### AUD-MT-11 — MTS-12/MTS-13 bidirectional completeness ledger

- Audit position: Documentation-only closure record immediately after the owning surface records; not mounted by the legacy UI.
- Purpose: Documentation audit; no legacy UI element is introduced.
- Assertion: The table below reconciles the exact source-backed records and does not add runtime behavior.
- Coverage: The owning MTS surface Q/R/U records named in this record or the table below.
- Evidence: Direct React — React source and documentation reconciliation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`.
- Clarification: —.

| Audit direction | Source set | Documentation destination | Result |
|---|---|---|---|
| Step 13 UI → records | Heading, three Controllers, two render predicates, navigator | Q01–Q03, R01–R05, U01 | PASS |
| `MTStep13Schema` → UI/state | Optional Q01, optional Q03, conditional Q02 | Q01–Q03 and R01/R03 | PARTIAL — CLR-009 leaves Q02's dependency-generated required text unresolved |
| Render predicate → raw inputs/options | Occupation flags/IDs, driver plan/usages, cover and indemnity IDs | Predicate truth table, R01/R02 and option backlinks | PASS |
| Submit/Back → mutation/navigation | Two ordered null assignments on each path, `setData`, Next/Previous | R04/R05 | PASS |
| Step 13 field → Summary | Q01 always; Q02 absent; Q03 truthy-only | Q01–Q03 and R06 | PASS |
| Summary → Step 13 field | Both mounted Additional Information rows plus absent Q02 | R06; unique Q01/Q03 mappings and explicit Q02 omission | PASS |
| MTS-12 declaration UI/schema/Summary | Ten booleans, ten details, ten callbacks, `declarationArray` | MTS-12 Q01–Q20, R01–R22, U01, and AUD-MT-10 | PARTIAL — CLR-009 leaves dependency-generated required text unresolved |
| Options → consumers | OPT-MT-06/07/09/26/49/53–55 | MTS-13 option-consumer backlinks | PASS |
| Legacy/scope | Read-only React/schema/control/store/locale/Summary evidence | Documentation only; no transport, quotation/result, checkout or payment behavior | PASS |

## MTS-14 — Summary and Terminal Gate

`StepSummary` mounts the translated page heading `Summary`, the policy-start date/time card, thirteen potential `SummaryCollapser` sections, and the shared navigator in that order. This surface is the last in-scope questionnaire surface. Its contract includes the local `MotorTradeConverter` evaluation(s) required to prepare the selected branch's call argument and ends immediately after that argument is evaluated but before the transport callee executes; no transport function contract, request/response contract, quotation/referral result, redirect, checkout, payment, API behavior, or post-invocation processing is specified here.

#### MTS-14-Q01 — `proposerPolicyStartTime`

| Property | Exact contract |
|---|---|
| Position | First editable value on MTS-14, in the uncollapsible policy-start card after the read-only policy-start-date row and before all thirteen disclosure sections. |
| Visible copy | Page heading `Summary`; adjacent date-row label `When do you want the policy to start?`; input-row label `Please specify the time (hh:mm):`. No help, hint, disclaimer, placeholder, suffix, or prefix is supplied. |
| Control | `Controller` mounts CTL-MT-15 `FormHourBox`, whose effective element is enabled native `<input type="time">` inside `mb-4 col-12`; the surrounding value column has inline `width: '50%'`. No composed date-time control is mounted. |
| Stored/emitted value | Path `proposerPolicyStartTime`; raw string emitted from `e.currentTarget.value`; absent/null/empty/other falsey control values display as `''` through `field.value || ''`. The adjacent date is the separate `formData.proposerPolicyStartDate` value. |
| Options | Native browser time-entry surface; no repository option array, custom increment, minimum, maximum, step, or placeholder prop is supplied. |
| Visible when | Always while MTS-14 is mounted. |
| Enabled when | Always enabled by this caller; no `disabled` prop is supplied. |
| Required when | Always: `MTStepSummarySchema(...).proposerPolicyStartTime` ends with `.required().label('This')`; neither MTA nor back-office state removes requiredness. |
| Constraints | R01 combines the separate start date and raw time string, checks the optional MTA minimum to minute granularity, then applies the back-office current-time bypass, otherwise checks the submission-time comparison. The native control constrains the browser editing surface to a time value; no separate schema regex or time-format test exists. |
| Errors | Custom minimum error `Specified time and date must be later than {DD/MM/YYYY HH:mm}`; ordinary custom error `Specified time and date must be later than form submission.`; label-based Yup required error is rendered by `FormHourBox` through CTL-MT-21 `FormError`. Errors appear at the field after submit validation; there is no MTS-14 validation-error summary for this field. |
| Lifecycle | Store value → direct `useForm.defaultValues` read → falsey-to-blank display → raw time-string change → R01 validation → valid R02 preparation. Back invokes R03, reads the current form value and shallow-merges it into the store without validation. |
| Summary | The value is itself edited on Summary rather than projected in a disclosure. The separate start date is always rendered as `dayjs(formData.proposerPolicyStartDate).format('DD/MM/YYYY')`; no guard suppresses `Invalid Date`. R02 replaces the time field in the prepared terminal object with an ISO string, but the displayed control remains the raw time string. |
| Evidence | Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:useForm/policy-start card/onSubmit`; `CleggGifford.CoverX.UI/src/components/fields/FormHourBox.tsx:FormHourBox`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStepSummarySchema`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:summary`. |
| Clarification | — |

#### MTS-14-R01 — `MTStepSummarySchema` start-date/time gate

- Trigger: a `handleSubmit(onSubmit)` attempt validates Q01 using `MTStepSummarySchema(formData.proposerPolicyStartDate, !!backoffice, minPolicyDateSet)`, where `minPolicyDateSet` is `formData.minPolicyStartDate` only when `formData.isMta && !!formData.minPolicyStartDate`, otherwise `null`.
- Evaluation point: MTS-14 submit validation, before R02 local state/argument preparation and before the selected transport invocation.
- Affected fields: MTS-14-Q01; the separate stored `proposerPolicyStartDate`, role-derived boolean, and optional MTA minimum are validation inputs but are not edited by this schema.
- Raw-state effect: no write. The test formats `startDate` as `YYYY-MM-DD`, concatenates `'T' + value`, computes `now` from `dayjs().format('YYYY-MM-DDTHH:mm')`, and, when a minimum exists, formats that minimum to `YYYY-MM-DDTHH:mm`. Undefined Q01 therefore participates in a string ending `Tundefined` before `.required()` supplies the required failure; the custom test does not cast or normalize the stored value.
- Projection effect: none; validation only. The MTA-minimum branch executes first and rejects when `then.isAfter(timedDateDay, 'minute')`; equality is accepted despite the word `later`. Only after that check, truthy `isBackoffice` returns `true` and bypasses the current-time test. Otherwise `now.isAfter(timedDateDay, 'minute')` rejects; equality is again accepted. Any remaining value returns true, then `.required().label('This')` applies.
- User-visible result/error: the minimum error interpolates `dayjs(minPolicyStartDateSet).format('DD/MM/YYYY HH:mm')`; the ordinary error is `Specified time and date must be later than form submission.`; the required channel is the Yup label-based message for `This`, all through the field's CTL-MT-21 alert.
- Evidence: Direct React — Source qualifier (React/Yup): `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:minPolicyDateSet/useForm`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStepSummarySchema`.
- Clarification: —.

#### MTS-14-R02 — Pre-invocation UTC-preserving ISO and local argument preparation

- Trigger: R01 accepts Q01 and calls `StepSummary.onSubmit(value)`.
- Evaluation point: valid MTS-14 submit. JavaScript evaluates the selected transport call's argument expression before invoking that callee, so the applicable local conversion sequence remains in scope and the boundary follows it.
- Affected fields: all `formData` fields, including MTS-01-Q04 `proposerPolicyStartDate` and MTS-14-Q01 `value.proposerPolicyStartTime`; converter-owned premise/driver address-display flags, trade-plate shape, and sanitized vehicle fields; branch context values used only to construct the argument.
- Raw-state effect: no `setData` write. The handler formats the stored date through nested `dayjs` as `YYYY-MM-DD`, concatenates `dateDay + 'T' + value?.proposerPolicyStartTime`, then creates `submitData` by spreading all `formData` and replacing `proposerPolicyStartTime` with `dayjs(timedDateDay).utc(true).toISOString()`. It then clears `errorList`, enables quote loading, initializes `isRedirecting=false`, and selects a branch without changing the persisted form store.
- Projection effect: `MotorTradeConverter(submitData)` first applies `sanitizeMotorTradeVehicles`, removes `showAddress` from every premise/driver when its array is truthy, maps a truthy `tradePlateNumbers` array to its `plateNumber` strings, omits top-level `proposershowAddress`, and returns the converted object containing the prepared ISO time. The back-office-new-quote, broker-new-quote, and back-office-adjustment predicates each evaluate that converter once as the argument's `data`; the final ordinary-submit predicate evaluates it once and spreads the result directly into the argument. The broker-adjustment predicate evaluates the inner conversion once, constructs `{ data: <inner result>, guid }`, then evaluates `MotorTradeConverter` again on that wrapper and spreads the outer result; because the wrapper has no top-level vehicle inputs, the sanitizer adds `vehicles`, `specifiedVehicles`, and `addSpecifiedVehicle` with `undefined` values to that outer result. The terminal boundary is after the selected argument expression has been completely evaluated and immediately before its transport callee is invoked.
- User-visible result/error: valid activation clears any currently rendered MTS-14 error-list panel and enters the shared loading state; local converter evaluation mounts no additional UI. This document makes no claim about the selected transport invocation or any later response, error, result, or destination.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:onSubmit`; `CleggGifford.CoverX.UI/src/managers/MotorTradeQuotes.ts:MotorTradeConverter`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`.
- Clarification: —.

> **TERMINAL SCOPE BOUNDARY:** Phase 3 proves Q01 validation plus R02 state preparation and the selected branch's complete local `MotorTradeConverter` argument evaluation sequence. The boundary is the point after that argument exists and immediately before the transport callee is invoked. The invocation itself and all API, quotation/referral, result, redirect, checkout, payment, and post-submit behavior are excluded.

#### MTS-14-R03 — Back persists the raw time without validation

- Trigger: shared `Go Back` activation calls `prev`, then the Phase 2 MTS-14 Back route.
- Evaluation point: Back, outside `handleSubmit` and therefore outside R01.
- Affected fields: MTS-14-Q01.
- Raw-state effect: `getValues()` reads the current raw time string and `setData({ ...data })` shallow-merges it into the persisted form store; no ISO transform occurs.
- Projection effect: none.
- User-visible result/error: Back is not blocked by missing/invalid Q01 and creates no new message. The already-fixed Back destination is authoritative in Phase 2; this section does not restate or alter that route graph.
- Evidence: Direct React — Source qualifier (React/store/navigation): `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:prev`; `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:setData`; `docs/motor-trade-funnel/02-journey-and-navigation.md:MTS-14`.
- Clarification: —.

### Thirteen-section Summary projection inventory

The table order is literal JSX order. Eleven `SummaryCollapser` instances always mount: 1–7 and 10–13. Section 8 mounts on `summaryVehicles` truthiness, which means a sanitized empty array remains truthy and can mount an empty disclosure; an absent source array stays absent/falsey. Section 9 mounts only when sanitized `summarySpecifiedVehicles` is truthy **and** its length is greater than zero. Every Edit destination is the corresponding Phase 2 MTS step; MTS-06 and MTS-08 retain their Phase 2 list-state route handling.

| # | Section / guard / Edit | Rows in visible source order; value, formatter, empty/omission behavior and origin |
|---:|---|---|
| 1 | `Proposer Details`; unconditional; Edit MTS-01 | `The standard policy term is 12 months. Do you wish to change this to 6 months?` → `common.${!!isShortTerm}` (`Yes`/`No`, MTS-01-Q05); `What type of company / legal entity is used?` → loose-equality text lookup in OPT-MT-03 `companyTypes` from MTS-01-Q06, blank if no row; `Email Address` → raw MTS-01-Q12 with 45% wrapping value column; `Telephone Number` → raw Q13; `Mobile Number` → raw Q14; `Postcode` → raw Q15. All six rows render even when their values are blank/undefined; all other MTS-01 captured values are omitted. |
| 2 | `Premises Details`; unconditional; Edit MTS-02 | `Where are you trading from?` → loose-equality OPT-MT-04 `tradingFroms` text for MTS-02-Q01, blank if unresolved. Only raw numeric `tradingFromId === 3 || === 4` maps `tradingPremises` in stored order: heading `Premise {index+1}`, then `Postcode` raw Q02, `What type of premises are you trading from?` loose-equality OPT-MT-05 text for Q03, `How long have you been trading from these premises? (years)` raw Q04, `Is this a shared worksite?` boolean-coerced `Yes`/`No` Q05. Address Q06–Q10 are omitted; separators appear between rows. |
| 3 | `Business Details`; unconditional; Edit MTS-03 | `Date Business Started Trading` → Q01 as `DD/MM/YYYY` with no guard; `Annual Turnover` → raw Q02 (no currency formatter); `Annual Wage Roll` → raw Q03; `Are you a member of any trade associations?` → boolean `Yes`/`No` Q04; truthy Q04 additionally renders `Trade Association` raw Q05; `Is the company VAT registered?` → boolean `Yes`/`No` Q06; truthy Q06 additionally renders `VAT Number ` raw Q07; `Number of vehicles handled per year` → raw Q08; `Maximum Vehicle Capacity` → raw Q09. Conditional false values omit only their detail rows. |
| 4 | `Occupations`; unconditional; Edit MTS-04 | Maps `occupations` in raw stored order. Heading `Occupation {index+1}: {occupationTitle}` resolves Q01 by comparing ```${option.value}` == occupationId`` against OPT-MT-06; row `Occupation Percentage` appends `%` to raw Q02. Missing/empty array yields an empty disclosure; separators appear between items. |
| 5 | `Cover Required`; unconditional; Edit MTS-05 | Ordered rows: `Cover Level` → loose OPT-MT-07 lookup Q01; `Own vehicles` → loose lookup in full OPT-MT-09 Q02 (not the cover-level-sliced render list); `Customer vehicles` → loose OPT-MT-10 Q03; translated `Excess Required:` → loose lookup Q04 in OPT-MT-58 `excessOptions`, derived from the selected own-indemnity row's nested `excesses` after slicing own options to six only when raw `coverLevelID === 2`; translated all-sections question → boolean `Yes`/`No` Q05; translated late-notification question → OPT-MT-11 text Q06; translated delete-co-insurance question → boolean `Yes`/`No` Q07; translated NCB-held label → OPT-MT-12 text Q10; translated NCB-earned label → OPT-MT-13 text Q11; translated expiry label → Q12 `DD/MM/YYYY` unguarded; translated previous-insurer label → OPT-MT-14 text Q13; raw numeric Q13 `=== 21` additionally renders `Other Insurer Details` raw Q16; translated protect-bonus label → boolean `Yes`/`No` Q17. Q08/Q09/Q14/Q15 are omitted. Unresolved lookups display blank. |
| 6 | `Drivers`; unconditional; Edit MTS-06C list state | Maps raw `formData.drivers` in stored order, not `DriversSorted` order and not `driversFlatten` output. Each heading concatenates raw MTS-06-Q09 `firstName`, a space, and Q10 `surname`; `Date of Birth:` renders Q11 as `DD/MM/YYYY` plus runtime `Math.floor(dayjs().diff(dayjs(dayjs(date).format('YYYY-MM-DD')), 'years', true))` in `({age} yrs old)`; `Relationship to Policyholder:` loose-lookups OPT-MT-25 text for Q12 with a wrapping value column. All other driver fields are omitted; missing/empty drivers gives an empty disclosure; separators follow raw indices. |
| 7 | `Trade Plates`; unconditional; Edit MTS-07 | Translated trade-plate question → boolean `Yes`/`No` MTS-07-Q01. Truthy Q01 adds translated `How Many?` → raw Q02. `tradePlateNumbers` is then mapped regardless of Q01 in raw order as `Trade Plate {index+1}` → template-string Q03 `plateNumber`; missing/empty array produces no plate rows. |
| 8 | `Vehicles`; only `summaryVehicles` truthy; Edit MTS-08B list state | `sanitizeMotorTradeVehicles` first filters raw ordinary vehicles whose `ownerTypeID === 4` unless some raw driver has the same `guid` and `coverPersonalVehicle === true`. Each surviving row stays in source order: heading raw Q01 `regNumber`, `Make ` raw Q02, `Model` raw Q03. All remaining vehicle fields are omitted. An empty sanitized array is truthy and mounts an empty section; absent raw `vehicles` leaves `summaryVehicles` absent and omits the section. |
| 9 | translated `Specified Vehicle`; only `summarySpecifiedVehicles && summarySpecifiedVehicles.length > 0`; Edit MTS-09 | The sanitizer first allows specified vehicles only when raw `coverLevelID === 1`, selected own-indemnity metadata `numericValue` is truthy and `<= 15000`, and the same owner eligibility filter passes. Summary projects **only index 0**: heading raw MTS-09-Q02 `regNumber`, `Make ` raw Q03, `Model` raw Q04. Additional surviving specified rows and all remaining fields are omitted. |
| 10 | `Vehicles to be Driven`; unconditional; Edit MTS-10 | Renders `collapserTitles` source order only where the category's raw boolean is truthy. Per item: source label, `Percentage:` → corresponding `percentageOf{PascalKey}` raw Q02/Q04/...; truthy derived `detail` adds `Detail:`; truthy derived `max` adds `Maximum number of vehicles that can be carried by transporter:`. Falsey category, detail, max, and zero values are omitted by truthiness; the mounted property mismatches and source ordering remain as recorded in MTS-10-R records. |
| 11 | `Extras`; unconditional; Edit MTS-11 | Truthy `demonstrationCover` mounts `What level of demonstration cover is required?` → loose OPT-MT-43 `demonstrationCovers` text and `Do you want to add demonstration cover for motorcycles?` → boolean `Yes`/`No`; truthy `windscreenCover` mounts `Cover Limit:` → loose OPT-MT-44 `windScreenCovers` text and `Is additional windscreen cover required for stock and customer vehicles?` → boolean `Yes`/`No`. Always renders `Is loss of use cover required?`, `Vehicles at subcontractor’s cover:`, and `Third party property damage limit:` using two boolean projections then loose OPT-MT-45 `thirdPartyDamageLimits` text. Truthy annual cover renders `Do you require Annual Green Card?` as `Yes`, then each annual row as `Vehicle {n}`, raw `Vehicle Registration:`, and driver-usage lookup for `What is the purpose for the requirement of the Annual Green Card?`. Truthy temporary cover renders `Do you require Temporary Green Card?` as `Yes`, then each trip as `Trip {n}` with raw registration, `DD/MM/YYYY` start/end, OPT-MT-47 `europeanArea` text, driver-name array joined `, `, OPT-MT-07 cover-level text, and OPT-MT-26 driver-usage text. False cover booleans omit their dependent blocks rather than display `No`; the three always-mounted base rows do display `No`. |
| 12 | `Declaration`; unconditional; Edit MTS-12 | Iterates the ten-entry `declarationArray` in MTS-12 source order. Only truthy boolean Q01/Q03/.../Q19 produces an item; its translated boolean label is shown bold, then the corresponding raw detail Q02/Q04/.../Q20 on a new line. The actual boolean word `Yes` is not rendered. False/null/undefined booleans omit both question and detail; empty disclosure remains mounted when no entry is truthy. |
| 13 | `Additional Information`; unconditional; Edit MTS-13 | Always renders `Please provide any information that you think is essential to the risk:` → raw MTS-13-Q01 even blank. Truthy MTS-13-Q03 additionally renders `Do you wish to restrict the policy to a 100 meter radius?` → boolean-coerced `Yes`; false/null/undefined omits that row. MTS-13-Q02 car-jockey radius is never projected. |

#### MTS-14-R04 — Summary lookup, boolean, date, array, and empty-value conventions

- Trigger: every MTS-14 render and each disclosure opening.
- Evaluation point: summary projection; collapsed children remain declared under their mounted `SummaryCollapser` and become visible when that disclosure opens.
- Affected fields: all origins listed in the thirteen-section inventory plus the read-only MTS-01-Q04 date row.
- Raw-state effect: none; projection reads the persisted Zustand object and option store. Option text uses loose `==` in `find` unless the inventory states another comparison. Boolean copy resolves `common.true`/`common.false` to `Yes`/`No` after `!!`. Dates use `dayjs(...).format('DD/MM/YYYY')`; no validity guard is added. Arrays preserve stored order except where an earlier owning MTS rule explicitly changed the stored/projection array.
- Projection effect: missing option collection/row yields no text; raw missing values interpolate/render as React permits; conditional truthiness removes only the stated row/item/section. The projection neither fills absent data nor repairs inconsistent labels, source fields, ordering, or spelling.
- User-visible result/error: exactly the labels and omission behavior in the inventory. Empty unconditional sections remain expandable; no generic empty-state message is mounted.
- Evidence: Unresolved — Source qualifier (React/translation): `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:return`; `CleggGifford.CoverX.UI/src/i18n/en/common.json:true/false`; `CleggGifford.CoverX.UI/src/i18n/en/mtheading.json:summary/specified_vehicles`; representative mounted key `CleggGifford.CoverX.UI/src/i18n/en/mtlabel.json:risk_info`.
- Clarification: CLR-001 for database-backed option rows and labels.

#### MTS-14-R05 — Vehicle sanitizer changes the two vehicle disclosures

- Trigger: every MTS-14 render calls `sanitizeMotorTradeVehicles(formData)` before JSX render.
- Evaluation point: summary sanitizer, also shared with the terminal converter outside this document's transport scope.
- Affected fields: MTS-08 ordinary `vehicles`, MTS-09 `specifiedVehicles`, `addSpecifiedVehicle`, driver `guid`/`coverPersonalVehicle`, cover level, and own-indemnity selection.
- Raw-state effect: none; raw arrays and stale Step 9 values remain persisted.
- Projection effect: ordinary and specified entries owned by owner type 4 survive only for an eligible matching driver; specified entries additionally require strict cover ID 1 and truthy own-indemnity `numericValue <= 15000`. Source order survives filtering. Absent arrays remain absent; present arrays return arrays, including empty arrays. `addSpecifiedVehicle` is recalculated only in the returned projection and is not itself rendered on MTS-14.
- User-visible result/error: R05 controls section 8/9 membership and their distinct guards; no sanitizer error is rendered.
- Evidence: Unresolved — Direct and bounded-dependency sources establish the known behavior; CLR-linked inputs remain unavailable: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles/summarySpecifiedVehicles`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`.
- Clarification: CLR-001 only for the absent indemnity rows/labels; the comparison and omission behavior are confirmed.

#### MTS-14-R06 — Formatter, driver omission, and sorting boundaries

- Trigger: inspection of every visible MTS-14 projection and the named helper call sites.
- Evaluation point: summary projection audit.
- Affected fields: vehicle-value rendering outside MTS-14; raw MTS-14 drivers and their omitted indemnity/excess fields.
- Raw-state effect: none. `currencyFormat(value, decimalCases=2)` uses `Intl.NumberFormat('en-GB', { style:'currency', currency:'GBP', minimumFractionDigits: decimalCases }).format(value || 0)`, so `0`, `null`, and `undefined` all format the falsey substitute zero; it is used by the MTS-08 list card with zero fraction digits but is **not called by `StepSummary`**. `driversFlatten` can omit TPO or over-limit driver fields during Step 5 persistence, but MTS-14 does not call it. `DriversSorted` groups relationship IDs 3,1,4,5,2 and sorts each group by first name for MTS-06C, but MTS-14 does not call it.
- Projection effect: MTS-14 vehicle disclosures show only registration/make/model and therefore have no currency value. MTS-14 maps the raw persisted driver array order and displays only name, derived age/date, and relationship; any earlier `driversFlatten` changes are already embodied in stored drivers and no Summary-time omission/sort occurs.
- User-visible result/error: preserves the counterintuitive distinction between MTS-06C sorted cards, MTS-08B formatted value, and MTS-14 raw-order/minimal projections; no helper-generated error exists.
- Evidence: Dependency-resolved — `CleggGifford.CoverX.UI/src/utils/Currency.ts:currencyFormat`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleSumaryCard.tsx:currencyFormat`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriversSorter.ts:DriversSorted`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:Drivers`.
- Clarification: —.

#### MTS-14-U01 — `SummaryCollapser` disclosure and Edit primitive

- Position and mount condition: repeated for each mounted section in inventory order; every instance owns independent local state initialized `isOpen=false`.
- Kind: disclosure layout, Edit button, collapse button, and accessibility facts.
- Exact observable contract: bordered rounded `p-4 mt-3` card; text rendered as an `h6`-class `div`; Edit is a React-Bootstrap `<Button>` with pencil icon and visible `Edit`, fixed `height:'44px'`, explicit padding and border styling; the sibling icon-only `<Button>` also has fixed 44px height and toggles local state, down icon closed/up icon open. Both inherit native button keyboard activation. The toggle exposes `aria-expanded={isOpen}` and repeated `aria-controls="example-collapse-text"`; every collapsed content root repeats `id="example-collapse-text"`, so the relationship is not unique. Edit has no explicit accessible name beyond its visible text; toggle has no explicit text/`aria-label`. `<Collapse in={isOpen}>` controls child visibility. The 44px source-backed height satisfies the UI-SPEC's source-specific summary-control dimension; no broader token is inferred.
- Related questions/rules: MTS-14-R04–R06 and all thirteen owning MTS projection records; Phase 2 supplies each exact Edit route and the special MTS-06/MTS-08 list-state navigation.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/SummaryCards/SummaryCollapser.tsx:SummaryCollapser`; `.planning/phases/03-questions-and-business-rules/03-UI-SPEC.md:Spacing System/Question Grouping and Interaction Contract`.
- Clarification: —.

#### MTS-14-U02 — Error-list panel

- Position and mount condition: immediately after the `Summary` page heading and before the `<form>`; mounts only when initialized-local `errorList` is truthy and `errorList.length > 0`.
- Kind: error state.
- Exact observable contract: a 16px/24px padded `#FDE8E8` panel with radius 5; bold red 16px/19.5px heading `Please contact the system administrator regarding the following errors;`, horizontal rule, then each supplied string in a red 16px/19.5px paragraph in array order. The panel has no mounted alert role, `aria-live`, focus move, or list semantics. The repository statements that can populate the array occur only after the terminal boundary; their causes and semantics are excluded rather than inferred.
- Related questions/rules: MTS-14-R02 clears the list before the boundary; otherwise none in scope.
- Evidence: Direct React — `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:errorList/rendered error panel`.
- Clarification: —.

#### MTS-14-U03 — Terminal actions and complete MTS-14 reconciliation

- Position and mount condition: after all thirteen potential disclosures, inside `my-5`; always mounted with the form.
- Kind: Back and terminal Submit buttons plus scope boundary.
- Exact observable contract: shared navigator renders `Go Back` for persisted step 14 and primary translated `Submit`. Back applies R03; Submit uses `handleSubmit`, so Q01 errors remain at the field and valid input applies R02, including the applicable local converter evaluation(s). Exact destinations and shared-button accessibility/layout are inherited from Phase 2 and CTL contracts. Behavioral specification stops after the selected call argument is evaluated and before its transport callee executes.
- Related questions/rules: MTS-14-Q01 and R01–R03; section inventory and R04–R06; U01/U02.
- Evidence: Direct React — Source qualifier (React/translation/navigation): `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:form/NavigatorButton`; `CleggGifford.CoverX.UI/src/i18n/en/common.json:submit`; `docs/motor-trade-funnel/02-journey-and-navigation.md:MTS-14`.
- Clarification: —.

## Cross-Step Value Lifecycle and Projection Ledger

This ledger is normative together with the complete Q/R/U records above. A Q range means every field path individually enumerated by that range; it is not permission to collapse fields in an implementation. `Raw` means the persisted/session value, while `projection` means a derived, sanitized, omitted, sorted, formatted, flattened, or terminal-prepared value that does not imply the raw value was erased. Each Status cell cites the behavior owners used across all four cells of that row: mounted component and active schema, persistence/navigation module, and omission or Summary projection module where applicable.

| Origin and field paths | Captured shape and initial/default source | Mutations, normalization, validation, and navigation lifecycle | Summary/terminal projection | Status |
|---|---|---|---|---|
| MTS-01 Q01–Q20: consent/marketing, policy date/term, company/person/contact/address | Booleans, primitive IDs, strings, date; store values flow to form defaults, with RTL-only groups and company-type layout | R01–R07 cover non-RTL consent projection, marketing clears, company-field clears, sibling telephone validation, date bounds, postcode population/manual writes, submit persistence; Step 1 has no Back | MTS-14 date is `DD/MM/YYYY`; term is boolean copy; company is OPT-MT-03 text; email/telephone/mobile/postcode raw; remaining fields omitted; MTS-01-Q04 supplies the stored policy start date used by MTS-14-R02 ISO preparation | Direct React — component/defaults/effects: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step1.tsx:MotorTradeStep1`; postcode writes: `CleggGifford.CoverX.UI/src/components/fields/CapitalPostCode.tsx:CapitalPostCode`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep1Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary/terminal projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 only for dynamic rows |
| MTS-02 Q01–Q10: `tradingFromId`, `tradingPremises[]` | Primitive ID plus ordered objects; row defaults and array state originate in stored form data | R01–R04 cover branch, append/remove, postcode/manual-address writes, row validation, submit/Back persistence | OPT-MT-04 label always; rows only for strict IDs 3/4, projecting postcode/type/years/shared and omitting address details | Direct React — component/defaults/array lifecycle: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step2.tsx:MotorTradeStep2`; postcode writes: `CleggGifford.CoverX.UI/src/components/fields/PremisePostCode.tsx:PremisePostCode`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep2Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 |
| MTS-03 Q01–Q09: business values | Date, numbers/strings, booleans and dependent strings from raw defaults | R01/R02 clear hidden association/VAT details; R03 is the £90,000 dialog gate with CLR-004 event-order uncertainty; R04 persists on submit/Back | Date formatted; numbers raw; booleans Yes/No; dependent detail rows truthy-only | Direct React — component/defaults/effects/dialog: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step3.tsx:MotorTradeStep3`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep3Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-004 |
| MTS-04 Q01–Q02: `occupations[]` | Ordered `{occupationId, percentage}` rows; at least one initialized | R01–R05 append/remove/reset percentage, enforce min cardinality, source-defined uniqueness, car-jockey singularity and exact 100 total, then persist on submit/Back | Raw row order; OPT-MT-06 title plus percentage `%`; blank array remains an empty disclosure | Direct React — component/defaults/array lifecycle: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step4.tsx:MotorTradeStep4`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep4Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 |
| MTS-05 Q01–Q17: cover, indemnity, excess, loan and NCB | IDs/booleans/date/detail string from store, with explicit component defaults and disabled retained values | R01–R08 cover/metadata branches, dependent nulls/clears, option filtering, customer-loan and NCB conditions; submit calls `driversFlatten` and persists its returned driver objects; Back follows the recorded non-equivalent path | MTS-14 renders the exact subset and option lookups in section 5; fields removed by `driversFlatten` stay absent in stored drivers; Q02 plus Q01 also controls MTS-09 sanitizer | Direct React — component/defaults/effects: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:MotorTradeStep5`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep5Schema`; driver omission: `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; vehicle-branch/sanitizer owners: `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerLogic`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 |
| MTS-06A Q01–Q07: driver plan and any-driver bounds | Primitive plan/count/limit IDs from store | R01/R02 branch and sequential existing-driver revalidation; submit chooses detail/list movement; Back persists as specified | Driver-plan answers are not directly summarized | Direct React — component/defaults/revalidation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverPlan.tsx:DriverPlan`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverPlanSchema`; validator projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary omission context: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 |
| MTS-06B Q08–Q62: driver object and repeated subarrays | One driver object with strings, dates, IDs, booleans, derived bands and arrays; create/edit defaults preserve malformed source property names | R03–R17 and matrix cover relationship/usage/licence/vehicle conditions; effects/callbacks clear, force, derive, append/remove and revalidate; `SetValidators` projects raw values; create/edit replaces/appends; `driversFlatten` can omit keys on later Step 5 submit | MTS-14 maps raw persisted driver order and only name, formatted DOB/runtime age, and relationship text; no Summary-time sort/flatten | Direct React — component/defaults/effects/repeated arrays: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverDetails.tsx:DriverDetails`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:DriverDetailSchema`; validator projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; persistence: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; later omission owner/caller: `CleggGifford.CoverX.UI/src/steps/MotorTrade/driversOmission.ts:driversFlatten`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step5.tsx:onSubmit`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001 |
| MTS-06C/L: stored `drivers[]` list state | Raw array copied with `driverIndex`; loader surface has no data source of its own | `DriversSorted` groups IDs 3/1/4/5/2 and sorts within groups; add is environment-limit controlled; edit/delete restore raw index; owner deletion blocks; pagination uses unavailable runtime size; validation results remain strings | MTS-14 does **not** reuse display sorting or list cards | Direct React — list lifecycle/gates/pagination: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriverList.tsx:DriverList`; display sorting: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/DriversSorter.ts:DriversSorted`; loading selection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step6.tsx:MotorTradeStep6`; validator projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Drivers/SetValidators.ts:setValidators`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; Summary raw-order projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-007 |
| MTS-07 Q01–Q03: trade-plate boolean/count/rows | Boolean, numeric count and ordered `{plateNumber}` array | R01–R03 separate UI add count, schema count, normalized uniqueness, MTA disablement, submit revalidation and Back persistence | Boolean always; count truthy-cover-only; rows map regardless of cover boolean | Direct React — component/defaults/array lifecycle/vehicle revalidation: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step7.tsx:MotorTradeStep7`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep7Schema`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary` |
| MTS-08A Q01–Q26: ordinary vehicle object | Lookup/manual strings, IDs, booleans, dates, values and primitive modification array | R01–R07 lookup population, generated owner/address options, effects/invalidation, modification add/remove, create/edit and validator context | `sanitizeMotorTradeVehicles` filters ineligible owner type 4 entries; MTS-14 shows registration/make/model only | Direct React — component/defaults/effects/modification lifecycle: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleDetails.tsx:VehicleDetails`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:VehicleDetailSchema`; persistence: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; sanitizer: `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`; CLR-001 |
| MTS-08B/L/Ø: `vehicles[]` list state | Stored ordered ordinary vehicles; list derives display pages without reordering | Add/edit/delete and customer-loan/capacity gates; pagination runtime size unavailable; loading and blank fallback mount no recovery copy | Present array, including `[]`, remains truthy after sanitizer and mounts section 8; list-only `currencyFormat` is absent from MTS-14 | Direct React — list lifecycle/gates/pagination: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Vehicles/VehicleList.tsx:VehicleList`; loading/blank selection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step8.tsx:MotorTradeStep8`; branch navigation: `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerLogic`; persistence: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; sanitizer: `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; Summary mount/projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summaryVehicles`; CLR-007 |
| MTS-09 Q01–Q26: specified toggle/object | Boolean plus one specified-vehicle object; lean/full schema branch; ordinary/specified modification shapes remain distinct | R16–R20 resolve lean/full, write one row, preserve Back-without-save and stale raw state; sanitizer can return false/empty projection without clearing raw | Sanitizer requires cover 1, truthy own limit `<=15000`, eligible owner; only projected index 0 registration/make/model renders | Direct React — component/defaults/effects/lifecycle: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step9.tsx:MotorTradeStep9`; validation branches: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9SchemaLean`; `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep9Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; sanitizer: `CleggGifford.CoverX.UI/src/steps/MotorTrade/vehiclesOmission.ts:sanitizeMotorTradeVehicles`; Summary first-row projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:summarySpecifiedVehicles`; CLR-001 |
| MTS-10 Q01–Q37: 17 category booleans, percentages and detail/max values | `defaultObject` keeps raw values except documented null omissions and ORs force predicates into selected form defaults | R01–R10 distinguish forced, added and disabled states; closes write zero/reset details; effects derive eligibility; schema validates individual and total percentage; submit normalizes recorded fields while Back retains raw form values | Truthy categories only, source order; raw percentage; truthy detail/max rows; property mismatches and falsey-zero omissions preserved | Direct React — component/defaults/effects/normalization: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step10.tsx:MotorTradeStep10`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep10Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:motorTradeManagerPrevLogic`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:collapserTitles`; CLR-001 for metadata rows; CLR-008/CLR-009 for unresolved validation outcomes/copy |
| MTS-11 Q01–Q20: extras and annual/temporary Europe arrays | Booleans, IDs, strings plus ordered annual vehicle and temporary trip objects | R01–R12 cover-level forced/disabled behavior; callbacks clear dependents; annual rows have exact-value registration uniqueness and no draft lock; temporary rows have persisted draft locks and no registration-uniqueness test; submit/Back lifecycle preserves their documented differences | Section 11 uses exact truthy guards, lookups, raw registrations, date formats, joined driver names and known property/collection mismatches | Direct React — component/defaults/effects/repeated arrays: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step11.tsx:MotorTradeStep11`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep11Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001/CLR-008/CLR-009 |
| MTS-12 Q01–Q20: ten declaration boolean/detail pairs | Ten booleans and ten nullable/raw detail strings from store | Each watched truthy boolean mounts/requires its detail; each false callback clears only its own detail; submit/Back persistence follows R21; `declarationArray` fixes projection order | Truthy pairs only; translated question then raw detail; boolean word omitted | Direct React — component/defaults/effects: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step12.tsx:MotorTradeStep12`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep12Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous`; Summary projection order/content: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:declarationArray`; CLR-009 for dependency-generated validation copy |
| MTS-13 Q01–Q03: risk text, jockey ID, shunter boolean | Optional CRLF-normalized string, dynamic ID, optional boolean from raw defaults | R01/R02 derive predicates; R03 schema; submit and Back apply ordered explicit nulls to unasked fields before persistence | Risk row always; jockey always omitted; truthy shunter only with `meter` spelling | Direct React — component/defaults/effects/normalization: `CleggGifford.CoverX.UI/src/steps/MotorTrade/Step13.tsx:MotorTradeStep13`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStep13Schema`; persistence/navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:next`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous`; Summary projection: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; CLR-001; CLR-009 for Q02 dependency-generated validation copy |
| MTS-14 Q01: policy-start time | Raw time string direct from store; falsey display becomes `''` | R01 validates separate date+time and MTA/back-office branches; R03 Back persists raw without validation | R02 builds `YYYY-MM-DDT{time}`, applies `dayjs(...).utc(true).toISOString()`, then evaluates the selected branch's one or two local `MotorTradeConverter` calls; boundary follows argument evaluation and precedes transport invocation | Direct React — component/default/display/submit/Back: `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:StepSummary`; `CleggGifford.CoverX.UI/src/steps/MotorTrade/StepSummary.tsx:onSubmit`; validation: `CleggGifford.CoverX.UI/src/steps/validationSchemas/MotorTrade.ts:MTStepSummarySchema`; persistence/Back navigation: `CleggGifford.CoverX.UI/src/store/MotorTradeFormStore.ts:motorTradeFormStore.setData`; `CleggGifford.CoverX.UI/src/managers/MotorTradeManager.tsx:previous`; terminal projection: `CleggGifford.CoverX.UI/src/managers/MotorTradeQuotes.ts:MotorTradeConverter` |

### Repeated-collection closure audit

| Collection | Add/remove/edit/order/limit/re-entry and flatten/projection closure | Destination | Result |
|---|---|---|---|
| Premises | Conditional ordered rows; append/remove and postcode/manual population; no separate array-card edit; summary keeps raw order and four values | MTS-02 Q02–Q10, R01–R04 | PASS |
| Occupations | Initialize/add/remove, min one, unique occupation, exact total; summary source order | MTS-04 Q01/Q02, R01–R05 | PASS |
| Additional driver occupations | Add/remove/re-enter within driver detail, uniqueness and business-use companion value; persisted inside driver, omitted from MTS-14 | MTS-06 Q29/Q30, R08/R10 | PASS |
| Drivers, business partners and company directors | Create/edit/raw-index delete, relationship-group display sorting, environment limit, owner delete guard, pagination and re-entry; terminal projection retains raw order | MTS-06 Q08–Q62, R07/R18–R22, U08–U11, AUD-MT-02 | PARTIAL — CLR-007 leaves the observable Add threshold and pagination size unknown |
| Motoring convictions | Boolean-gated add/remove/edit ordered rows with date/code/fine/points/disqualification/ban fields and exact validation; omitted from MTS-14 | MTS-06 Q33–Q39, R11 | PASS |
| Claims | Boolean-gated ordered date/type/description/cost/status rows with add/remove/validation; omitted from MTS-14 | MTS-06 Q40–Q45, R12 | PASS |
| Criminal convictions | Boolean-gated ordered date/code/sentence-year/month rows with add/remove/validation; omitted from MTS-14 | MTS-06 Q48–Q52, R14 | PASS |
| CCJs | Boolean-gated ordered date/status/amount/circumstances rows, including recorded `ccj` write; omitted from MTS-14 | MTS-06 Q53–Q57, R15 | PASS |
| Trade plates | Count-driven add availability, row removal, normalized uniqueness, MTA retention; summary maps every stored row | MTS-07 Q01–Q03, R01–R03 | PASS |
| Ordinary and specified vehicles/modifications | Separate lookup/manual create/edit/delete and modification shapes; sanitizer filters terminal projection without erasing raw values; MTS-14 shows ordinary rows and only specified index 0 | MTS-08 Q01–Q26, R01–R15; MTS-09 Q01–Q26, R16–R20 | PARTIAL — CLR-007 leaves the observable ordinary-vehicle pagination size unknown |
| Annual Europe vehicles | Boolean-gated append/remove and in-place registration/usage editing in source order; exact raw registration uniqueness; no `isDraft` field or lock; Summary shows registration and its recorded usage lookup only | MTS-11 Q10–Q12, R01/R02/R11 | PASS |
| Temporary Europe trips | Boolean-gated append/remove in source order; persisted `isDraft === false` locks the documented controls and removal; no registration-uniqueness test; Summary formats dates, joins persisted driver names and uses the documented area/cover/usage lookup collections | MTS-11 Q13–Q20, R03–R05/R10/R11, U04 | PASS |

## Phase 3 Completeness Ledger

Every PASS is bidirectional: source partition → stable records and stable records → mounted or bounded dependency evidence. Each Q, R, U, and AUD body independently instantiates its complete declared schema; surrounding matrices and preambles provide context but do not supply missing record properties. Audit status is outcome-based: PASS means every observable behavior on that row is reproducible from permitted repository evidence; any runtime/config unknown that can change an observable transition, enablement threshold, or pagination result makes both the affected internal surface and its parent surface PARTIAL until its CLR item is resolved. Dynamic row content remains explicitly unresolved rather than failing code-grounded coverage.

| Surface | Check | IDs / schema / controls-options | Copy, lifecycle, repeated behavior, Summary and clarification closure |
|---|---|---|---|
| MTS-01 | PARTIAL — CLR-008 | Q01–Q20, R01–R07, U01–U05; `MTStep1Schema`; CTL-MT-01/04/06/08/09/13/17; OPT-MT-01–03 | Mounted order/copy, company/marketing/date/postcode expressions, submit/no-Back, and Summary are closed; proposer-postcode custom-test runtime outcome remains unresolved |
| MTS-02 | PARTIAL — CLR-008 | Q01–Q10, R01–R04, U01–U03; `MTStep2Schema`; CTL-MT-01/04/08/09/18; OPT-MT-04/05 | Repeatable premise/address lifecycle and conditional Summary are closed; premise-postcode custom-test runtime outcome remains unresolved |
| MTS-03 | PARTIAL — CLR-004 | Q01–Q09, R01–R04, U01–U03; `MTStep3Schema`; CTL-MT-04/08/09/10/13 | Exact copy/dialog, dependent clears, submit/Back and Summary are recorded; click/submit ordering and resulting navigation for both dialog controls remain unresolved |
| MTS-04 | PARTIAL — CLR-008 | Q01/Q02, R01–R05, U01–U03; `MTStep4Schema`; CTL-MT-01/11; OPT-MT-06 | Add/remove/copy/Summary and callback expressions are closed; uniqueness and percentage-total failing-path runtime outcomes remain unresolved |
| MTS-05 | PASS | Q01–Q17, R01–R08, U01–U05; `MTStep5Schema`; shared controls; OPT-MT-07–15/58/60/61/71 | All branch/disable/clear/flatten/error and Summary paths closed; absent runtime rows CLR-001 |
| MTS-06 | PARTIAL — CLR-007/CLR-008 | Q01–Q62, R01–R22, U01–U06/U08–U11, AUD-MT-01/AUD-MT-02; driver schemas and controls; OPT-MT-03/16–38/50–52/62/64–72 | Whole plan/detail/list/loading family, repeated arrays, flattening and Summary are recorded; driver-postcode and maximum-ABI failing paths plus the Add threshold and pagination size remain unresolved |
| MTS-06A | PASS | Q01–Q07, R01/R02, U01/U02; `DriverPlanSchema`; OPT-MT-16–21 | Plan conditions, copy, validation and movement closed; no direct Summary rows |
| MTS-06B | PARTIAL — CLR-008 | Q08–Q62, R03–R17, U03–U06, AUD-MT-01; `DriverDetailSchema`; CTL-MT-01/03/04/08–14/19 | Detail predicates, effects, repeated occupations/convictions/claims/criminal/CCJ, create/edit and terminal subset are closed; Q13/Q27 callback runtime outcomes remain unresolved |
| MTS-06C | PARTIAL — CLR-007 | R18–R21, U08–U10; list controls, `DriversSorted`, returned validator fields | Group sort, raw index, add/edit/delete formulas, owner block, errors and raw-order MTS-14 contrast are recorded; effective Add limit and pagination size remain unresolved |
| MTS-06L | PASS | R22, U11, AUD-MT-02 | Exact empty actionless loading container and family reconciliation closed |
| MTS-07 | PASS | Q01–Q03, R01–R03, U01; `MTStep7Schema`; CTL-MT-04/08 | Plate count/rows/uniqueness/MTA/submission/Summary closed |
| MTS-08 | PARTIAL — CLR-007/CLR-008 | Q01–Q26, R01–R15, U01/U03–U06, AUD-MT-03; vehicle schemas/controls; OPT-MT-29/40–42/51/52/59/62/71/72 | Whole detail/list/loading/blank family, lookup/manual, capacity, sanitizer and Summary are recorded; vehicle-value failing path and vehicle-list pagination size remain unresolved |
| MTS-08A | PARTIAL — CLR-008 | Q01–Q26, R01–R07, U01, AUD-MT-03; `VehicleDetailSchema`; CTL-MT-01/03/04/08–13/20 | Ordinary lookup/manual detail, generated choices, modifications and create/edit are closed except Q17 callback runtime outcome |
| MTS-08B | PARTIAL — CLR-007 | R08–R14, U03/U04; list cards, `currencyFormat`, pagination | Display formatting, add/edit/delete formulas, limits, Step 9 branch, stale state and MTS-14 sanitizer are recorded; effective pagination size remains unresolved |
| MTS-08L | PASS | U05 | Empty loading markup with no invented copy/action closed |
| MTS-08Ø | PASS | U06, R15 | No-flag blank fallback and family reconciliation closed |
| MTS-09 | PARTIAL — CLR-008 | Q01–Q26, R16–R20, U01, AUD-MT-04–AUD-MT-06; `MTStep9SchemaLean`/`MTStep9Schema`; vehicle controls/options | Lean/full, one-row write, distinct modifications, stale raw/sanitized projection and Summary are closed; owner-eligibility failing-path runtime outcome remains unresolved |
| MTS-09 lean mode | PASS | Q01 and lean branch of R16/U01 | Add-specified choice and lean-schema movement closed |
| MTS-09 full mode | PARTIAL — CLR-008 | Q02–Q26 and full branch R16–R20/U01; AUD-MT-04/AUD-MT-05 | Full lookup/manual vehicle, submit/Back and first-row Summary are closed; Q20 callback runtime outcome remains unresolved |
| MTS-10 | PARTIAL — CLR-008/CLR-009 | Q01–Q37, R01–R10, U01, AUD-MT-07; `MTStep10Schema`; CTL-MT-09/11/16; OPT metadata | 17 categories, forced/disabled/detail/percentage/copy/lifecycle and truthy Summary are recorded; total-percentage failing-path outcome and built-in dependency-generated error text remain unresolved |
| MTS-11 | PARTIAL — CLR-008/CLR-009 | Q01–Q20, R01–R12, U01–U04, AUD-MT-08/AUD-MT-09; `MTStep11Schema`; shared controls; OPT-MT-07/17/18/26/40/43–48/55/59/63/71 | Extras, both Europe arrays, lookup mismatches, submit/Back, and Summary are recorded; custom-test/equal-date outcomes and built-in dependency-generated error text remain unresolved |
| MTS-12 | PARTIAL — CLR-009 | Q01–Q20, R01–R22, U01, AUD-MT-10; `MTStep12Schema`; CTL-MT-04/08 | Ten declaration pairs, clears, persistence, source copy and `declarationArray` projection are recorded; dependency-generated required error text remains unresolved |
| MTS-13 | PARTIAL — CLR-009 | Q01–Q03, R01–R06, U01, AUD-MT-11; `MTStep13Schema`; CTL-MT-04/08; OPT-MT-06/07/09/26/49/53–55 | Jockey/shunter predicates, optional text, nulling and exact Summary omissions are recorded; Q02 dependency-generated required error text remains unresolved (dynamic option rows remain CLR-001) |
| MTS-14 | PASS | Q01, R01–R06, U01–U03; `MTStepSummarySchema`; CTL-MT-15/21; all projected OPT dependencies | Policy-time gate, 13 sections/11 unconditional, Edit/disclosure/error/accessibility/formatter/sanitizer and terminal boundary closed |

### Sixteen-schema audit

| Schema export | Stable destinations | Result |
|---|---|---|
| `MTStep1Schema` | MTS-01 Q01–Q20, R01–R06 | PARTIAL — CLR-008 |
| `MTStep2Schema` | MTS-02 Q01–Q10, R01–R03 | PARTIAL — CLR-008 |
| `MTStep3Schema` | MTS-03 Q01–Q09, R01–R03 | PASS |
| `MTStep4Schema` | MTS-04 Q01/Q02, R01–R04 | PARTIAL — CLR-008 |
| `MTStep5Schema` | MTS-05 Q01–Q17, R01–R06 | PASS |
| `DriverPlanSchema` | MTS-06 Q01–Q07, R01/R02 | PASS |
| `DriverDetailSchema` | MTS-06 Q08–Q62, R03–R15 | PARTIAL — CLR-008 |
| `MTStep7Schema` | MTS-07 Q01–Q03, R01/R02 | PASS |
| `VehicleDetailSchema` | MTS-08 Q01–Q26, R01–R07 | PARTIAL — CLR-008 |
| `MTStep9SchemaLean` | MTS-09 Q01, R16 | PASS |
| `MTStep9Schema` | MTS-09 Q02–Q26, R16–R18 | PARTIAL — CLR-008 |
| `MTStep10Schema` | MTS-10 Q01–Q37, R01–R10 | PARTIAL — CLR-008/CLR-009 |
| `MTStep11Schema` | MTS-11 Q01–Q20, R01–R12, U01–U04 | PARTIAL — CLR-008/CLR-009 |
| `MTStep12Schema` | MTS-12 Q01–Q20, R01–R20 | PARTIAL — CLR-009 |
| `MTStep13Schema` | MTS-13 Q01–Q03, R01–R03 | PARTIAL — CLR-009 |
| `MTStepSummarySchema` | MTS-14 Q01, R01 | PASS |

### Bidirectional source-partition and stable-symbol audit

| Partition | Checkable destination and result |
|---|---|
| Mounted `Controller`, native mutator and custom/repeated field → contract | MTS-01–14 Q ranges plus CTL-MT-01–21 and repeated-collection closure table: PASS |
| Contract → mounted or audit evidence | Per-record validation requires one canonical Evidence token (`Direct React`, `Dependency-resolved`, `Conflict`, or `Unresolved`), at least one repository-relative `path:symbol` citation, and the matching clarification form. Current Q/R/U/AUD result: PASS. |
| Visible translations/inline copy | Mounted copy is recorded in each Q/U and summary inventory; `t(...)` expansions cite consumer plus English resource; catalog-only text is not elevated: PASS |
| Option/metadata consumers | OPT-MT-01–72 tables state raw `number|string` option primitives, label/value mapping, producer order, filters, defaults and CLR-001 for unavailable rows; every mounted consumer has a Q/R backlink. Backlinks are property-read-specific: OPT-MT-46 has Q12/Q20/R05 but no Summary consumer, while OPT-MT-47 has Q17 and R11 Summary and OPT-MT-63 has only the Q17 countries display: PASS |
| Defaults/effects/watchers/callbacks/submit/Back/reset | Owning R records plus lifecycle ledger distinguish no-write, clear, null, zero, undefined, force, disable-but-retain and projection-only effects; the source expressions are closed, while CLR-008 keeps the non-returned Yup failing paths and equal-date fall-through outcomes PARTIAL. |
| Summary values | Thirteen-section inventory maps every displayed/omitted value to Q/R origin, guard, lookup/formatter and Phase 2 Edit destination: PASS |
| Accessibility/layout | Shared CTL and SHR-MT-R06–R08 records plus per-surface U records and MTS-14-U01 cite only mounted attributes/classes/dimensions; absent labels/roles remain absent: PASS |
| Stable IDs | Heading scan covers CTL-MT-01–21, OPT-MT-01–72, SHR-MT-R01–09, AUD-MT-01–11, and all MTS Q/R/U records; no duplicate definition exists: PASS |
| Record schemas | Per-record body validation scans every stable heading to its next peer heading and fails on any missing named property. Current result: every Q body has all 14 table rows; every R body has Trigger, Evaluation point, Affected fields, Raw-state effect, Projection effect, User-visible result/error, Evidence, and Clarification; every U body has Position and mount condition, Kind, Exact observable contract, Related questions/rules, Evidence, and Clarification; every AUD body has Audit position, Purpose, Assertion, Coverage, Evidence, and Clarification: PASS |
| Clarifications | Every `Conflict`/`Unresolved` behavioral fact links CLR-001–009; all targets exist and remain append-only; Direct React/Dependency-resolved claims are not used for records that own an unresolved outcome or exact-copy gap: PASS |

### Evidence citation lint

The Phase 3 handoff scans every `- Evidence:` bullet, every canonical ``| `OPT-MT-*` `` table row, and every repository citation in `docs/motor-trade-funnel/clarifications.md`. A citation must be a backticked repository-relative `path:symbol` locator matching `` `(?:CleggGifford\.|docs/|\.planning/)[^`]+:[^`]+` ``: the literal file path before the colon must exist, may not contain a wildcard, and the selector after the colon may not be empty. For a compound selector separated by `/`, each segment must contain at least one case-sensitive identifier token of three or more characters that occurs literally in the cited file. This permits compact compound locators while rejecting filename-only, partial-directory, bare-glob, path-without-symbol, and fabricated-symbol targets. The iteration-3 audit checked 618 in-scope citations across both documents and found 0 failures. This lint validates locator shape, literal file existence, and source symbol occurrence; it does not convert CLR-001, CLR-008, or CLR-009 unknowns into resolved behavior.

## Phase 3 Requirement Coverage

| Requirement | Concrete coverage and observable proof |
|---|---|
| QUES-01 | MTS-01–14 Q ranges and completeness rows enumerate every mounted question in JSX order with exact control and required/optional contract. |
| QUES-02 | OPT-MT-01–72, inline-option Q records and option backlinks preserve label/value primitive, order, grouping, filters and defaults; CLR-001 isolates unavailable rows. |
| QUES-03 | Q/U records, translation-consumer evidence and MTS-14 inventory preserve every repository-resolvable heading, instruction, help, hint, disclaimer and inline string exactly. |
| QUES-04 | Dynamic producers and metadata are traced through bounded repository mappings; database rows remain non-blocking CLR-001 and environment list sizes CLR-007. |
| RULE-01 | Owning R records and lifecycle ledger capture every visibility, enablement, force, branch and skip predicate with primitive/operator fidelity. |
| RULE-02 | Sixteen-schema audit plus Q constraints records requiredness, types, ranges, formats, dates, uniqueness, totals and cross-field context. |
| RULE-03 | Q/R/U error channels preserve repository-source literal/interpolated messages, empty-message cases, dialogs, returned lists and exact trigger/presentation; CLR-009 isolates dependency-generated built-in text that repository evidence cannot prove. |
| RULE-04 | Lifecycle/projection and repeated-collection ledgers capture derivation, normalization, null/zero/undefined writes, flattening, sanitization, sorting, date/number/currency formatting and terminal ISO preparation. |
| RULE-05 | Evidence Authority, every record's single status, CLR backlinks, completeness result and scope audit keep Direct React, Dependency-resolved, Conflict and Unresolved distinguishable. |

### Four-source coverage audit

| Source | Status | Concrete Phase 3 destination |
|---|---|---|
| GOAL — ROADMAP Phase 3 | COVERED | MTS-01–14 contracts plus lifecycle, completeness, requirement and scope ledgers let readers reproduce the observable questionnaire while preserving evidence status. |
| REQ — all nine Phase 3 items | COVERED | Exactly nine rows above cover QUES-01–04 and RULE-01–05 with observable assertions and stable destinations. |
| RESEARCH — seven source partitions, React-first authority, dynamic unknowns, terminal boundary | COVERED | Shared controls/options, all numbered/internal MTS sections, sixteen-schema audit, repeated collections, MTS-14 inventory and CLR audit cover each in-scope research finding. |
| UI-SPEC — layout, copy, controls, validation, subflows, Summary and accessibility | COVERED | SHR-MT-R04–R09, CTL-MT-01–21, per-surface U records, completeness rows and MTS-14-U01 map each mounted obligation without adding design tokens. |
| CONTEXT | N/A | N/A — no Phase 3 CONTEXT.md; user explicitly authorized planning from the controlling artifacts. No design preference or behavioral decision is invented. |

## Phase 3 Scope and Clarification Audit

| Guard | Result and evidence |
|---|---|
| Repository-only authority | PASS — tracked mounted React and bounded behavior-bearing dependencies are the sole evidence. No live funnel, network service, database row, or runtime environment was queried. |
| Secret/config boundary | PASS — environment variable **names** and consumer formulas are documented, but no `.env*` file or literal assignment for `VITE_COVERX_DRIVER_LIMIT`/`VITE_COVERX_PAGE_SIZE` was read or exposed. CLR-007 remains the non-blocking source. |
| Append-only unknowns | PASS — existing CLR-001–008 rows remain present and CLR-009 appends the newly isolated dependency-generated Yup copy gap. Every cited CLR exists; no unavailable text is guessed. |
| Legacy immutability | PASS — this phase modifies documentation only; the legacy/application roots are read-only evidence and are checked by the task assertions. |
| Behavioral fidelity | PASS — awkward falsey handling, loose/strict comparisons, malformed identifiers, duplicated/repeated accessibility IDs, source spelling, disabled-but-retained values, stale raw state and projection omissions remain explicit. No improvement is proposed. |
| Terminal boundary | PASS — MTS-14 includes the selected branch's complete local `MotorTradeConverter` argument evaluation and ends immediately before its transport callee executes. Commercial Combined detail, APIs, quotation/referral results, checkout, payments, redirects, post-invocation behavior and modern-stack implementation are excluded. |
| Completion hygiene | PASS — mechanical audit finds every numbered/internal surface and schema/requirement row, unique stable IDs, no unfinished marker, no leaked environment assignment and no unbounded downstream claim. |
