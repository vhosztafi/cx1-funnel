# Quote funnel presentation

The user requested a visual redesign on 2026-09-10 inspired by the [Aviva home quote funnel](https://www.direct.aviva.co.uk/quote/Direct/Home2). Its first page was inspected in the browser: a full-width brand band, large serif heading, simple progress bar, pale grey form panel, outlined inputs, generous spacing and pill-shaped primary actions. CX1 uses these design patterns with its own blue palette and existing content; no Aviva logos, proprietary fonts, claims, questions or steps are imported.

## Theme settings

The presentation layer is [quote-theme.css](../../src/app/quote-theme.css), loaded after Bootstrap and Tailwind by the root layout. Change `--cx-accent` (default `#1768b3`) to replace the primary brand color. Hover, focus and pale accent colors derive from that value. Buttons, progress, header, radio selections, dropdowns and checkbox highlights use the same token. The heading/body font stacks, neutral colors and maximum content width are also declared at the top of this file. No external font download is required.

Desktop content uses a 960px maximum width. Mobile panels, padding and action widths adapt below 568px. Headings use Georgia; body/control text uses Trebuchet MS with local fallbacks. The header displays a supplied host logo or a text CX1 wordmark when no asset is supplied.

## Scope of the authorized design change

This presentation override supersedes the original visual dimensions/styles in SHR-MT-R06/R07, the rendered visual treatments of CTL-MT-01–21, and the corresponding surface layout records. The canonical source documents remain the historical behavioral contract. Existing question text and order, options, steps, progress calculation, field IDs, emitted values, conditionals, validation, handlers and navigation are unchanged. Surface headings move just above their forms to separate the page title from the grey question panel. No new journey stage or question is introduced.

The development notice remains visible in a compact strip. Synthetic authentication and UAT option behavior remain unchanged. No help claims, ratings, policy documents or contact actions are borrowed from the reference site.

## Verification

The browser suite retains the full root-to-terminal journey and control behavior checks. Visual assertions use the authorized new widths rather than the old 440px/568px caps. The calendar assertion accepts placement directly above or below its field as available space changes. `quote-theme.spec.ts` captures desktop/mobile pages and verifies that changing only the accent token updates the header, progress bar and primary action.
