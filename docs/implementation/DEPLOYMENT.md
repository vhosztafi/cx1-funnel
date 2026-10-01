# Cloudflare Worker deployment

Deployed on 2026-09-10 as the user-requested labelled demo.

- URL: https://cx1-dev.gyongyos.co.uk
- Worker: `cx1-dev`
- Initial deployed version: `2d7ee2d6-7b8e-4bed-af76-54e108374847`
- Wrangler: `4.130.0`, pinned with pnpm.
- Configuration: `wrangler.jsonc`.

## Hosting and demo boundary

This application renders the same client-only shell for its optional catch-all Next.js page. `generateStaticParams` exports the root shell; Cloudflare Workers Static Assets serves the shell for browser navigation through its SPA fallback. `html_handling: none` avoids adding redirects to browser-owned route paths. Existing React Router routing, guards, parameterized paths and blank views remain responsible for the journey.

`scripts/build-worker.mjs` sets `CX1_WORKER_EXPORT=on`, exports assets to `out`, and explicitly enables `NEXT_PUBLIC_CX1_DEMO=on`. The ordinary `pnpm build` remains host-controlled by default. The existing dynamically imported development host supplies the labelled mock identity and UAT options consumer. Explicit host inputs and existing authentication still take precedence. No backend, quotation transport, database, or custom domain is required for this demo. The development access gate requires the SITE_PASSWORD Worker secret described below.

The options endpoint `/api/options.json` is served from the bundled project JSON through the authenticated asset binding; no external service or CORS permission is required. Existing failure/retry handling remains active. Postcode lookup offers explicitly fictional local addresses; vehicle lookup uses manual entry. The updated hosted demo opens the admin quote handoff on Submit after both Workers are deployed. CLR-001 through CLR-009 remain unresolved.

## Redeploy

Pushes to the `main` branch of `vhosztafi/cx1-funnel` run `.github/workflows/deploy-staging.yml`: install the locked dependencies, typecheck, lint, build the Worker, then deploy `cx1-dev`. The repository must have `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets. Use an account-scoped Workers edit token for the account that owns `cx1-dev`; keep both values out of source control. If either secret is absent, the workflow verifies the build but skips deployment. The existing Worker `SITE_PASSWORD` secret remains configured in Cloudflare.

Use Node.js 24 and pnpm 11.19.0. Stop any Next.js development process before building because Next.js may use its `.next` intermediate directory during export.

```sh
pnpm install --frozen-lockfile --store-dir .pnpm-store
node node_modules/wrangler/bin/wrangler.js login
pnpm deploy
```

`pnpm deploy` builds the labelled demo and deploys it to the configured Worker. If the login has access to multiple accounts, set `CLOUDFLARE_ACCOUNT_ID` to the intended account before deployment. Credentials are stored by Wrangler outside the repository.

For local Workers verification:

```sh
pnpm build:worker
pnpm preview:worker
```

Wrangler serves port 8787 by default. Run the dedicated password-gate suite below against that server. The canonical funnel suite (`pnpm test:e2e`) uses the ordinary Next.js development server; its pre-password Worker verification is recorded below.

## Verification

- Export build and TypeScript: passed.
- Unit/component suite: 433 tests across 35 files passed.
- Complete browser suite against local Wrangler: 33 tests passed, including ROOT through MTS-01–14 and the no-transport terminal boundary.
- Lint and canonical inventory check: passed (677 owners, 256 question contracts).
- Public URL entry, route and demo smoke tests: all 6 passed, including UAT loading/retry and page refresh.

Deployment traceability: ROOT-001–007 and EDGE-GUARD-PERSISTED are exercised in `tests/e2e/root-and-routes.spec.ts`; demo entry, refresh, UAT loading/retry and host precedence are exercised in `tests/e2e/mock-preview.spec.ts`; MTS-01–14 and local terminal preparation are covered in `tests/e2e/full-journey.spec.ts`. Existing owner mappings remain in TRACEABILITY.md.

Cloudflare hosting reference: https://developers.cloudflare.com/workers/static-assets/get-started/

## Password protection (2026-09-10)

All deployed pages and assets now pass through `worker/index.ts` before the `ASSETS` binding (`run_worker_first: true`). Version preview URLs are disabled. The Worker serves an unbranded login screen and does not serve application content when `SITE_PASSWORD` is missing or authentication is invalid.

The generated password is saved locally in ignored `.dev.vars` and uploaded as the Cloudflare Worker secret `SITE_PASSWORD`. To change it, open Cloudflare → Workers & Pages → cx1-dev → Settings → Variables and Secrets, edit `SITE_PASSWORD` as a Secret, and deploy the setting. Changing the password invalidates all previous login cookies. Never add the password to Wrangler `vars`, `NEXT_PUBLIC_*`, source files, or a commit.

A successful login sets a signed, host-only, Secure, HttpOnly, SameSite=Lax cookie. By default it is a browser-session cookie (no persistent expiry). Remember me sets Max-Age to 30 days. Signed tokens have a maximum validity of 30 days. The cookie contains no password. Protected responses use private/no-store caching, including assets. Login attempts have a Cloudflare rate limit of 10 per minute per IP at each Cloudflare location. Same-origin form checks prevent external login posts, and return paths are restricted to the current origin.

Local Worker development reads `.dev.vars`. Next.js `pnpm dev` does not include the Worker gate; use `pnpm preview:worker` to verify deployed authentication behavior. The canonical funnel remains unchanged after login.

```sh
node node_modules/@playwright/test/cli.js test --config playwright.worker.config.ts
```

These browser tests require a running local Worker on port 8787 (or `PLAYWRIGHT_BASE_URL` for the deployment) and read the password from `.dev.vars` or `SITE_PASSWORD`. Tracing, video and automatic screenshots are disabled so credentials are not captured. The explicit login screenshot contains only the empty form. Unit coverage is in `tests/domain/worker-auth.test.ts`.


Password-gate deployment version: `7c150f9f-9abd-4fb9-80af-0046b9a72ae1`. Verification: 449 unit/component tests passed; lint and TypeScript passed; all 3 dedicated browser tests passed locally and against the public deployment, including real asset protection, deep-link return, refresh, session cookie attributes and 30-day remembered access.

## Worker migration (2026-09-10)

The current Worker is `cx1-dev`. The preferred address is https://cx1-dev.gyongyos.co.uk and its default address is https://cx1-dev.vilmos.workers.dev. Both are configured in `wrangler.jsonc`, so `pnpm deploy` targets the new Worker and retains the custom domain. The existing SITE_PASSWORD was securely copied to the new Worker's secret; the ignored local `.dev.vars` password remains unchanged. New hostnames require a fresh login because authentication cookies are host-only.

The same tested assets and authentication Worker were deployed without changing funnel code. All three password-boundary browser tests passed on each new HTTPS address, including protected assets, deep-link login, refresh, and 30-day remembered cookies. Only after these checks, the old `cx1-motor-trade-demo` Worker was deleted successfully. Earlier version IDs in this document are historical records for the retired Worker.
## Bundled dropdown options (2026-09-10)

The user requested removal of all runtime external options requests. A one-time download at 2026-09-10T20:02:47.769Z produced `public/api/options.json`: 156992 bytes, 52 collections, SHA-256 `b79d995c5a10ddd73ab80e2221db8ced573715e3fb166f04057ea694d557ed12`. These bytes match the previous documented capture. Labels, IDs, ordering and nested metadata are unchanged.

The simple read-only endpoint is `/api/options.json`. Next.js serves the file during local development; the deployed Worker serves it through its authenticated ASSETS binding. No additional server, live upstream fetch, build-time refresh, or fallback service is used. Browser requests include the same-origin login cookie. Updating the options now requires intentionally replacing the project JSON and redeploying.

The runtime code and exported assets are checked for references to the retired Worker and external options domain. Historical provenance URLs in the canonical documentation remain evidence records, not executable configuration. `tests/worker/access.spec.ts` verifies unauthenticated denial, exact endpoint JSON and dropdown loading while every external browser request is blocked. CLR-001 remains unresolved as a historical legacy-data question; this is the user-authorized demo snapshot.
Bundled-options verification: build, lint, TypeScript, and 449 unit/component tests passed. The dedicated Worker browser suite passed locally and on the custom domain, including exact JSON equality, unauthenticated endpoint denial and dropdown loading with all external requests blocked. Deployed version: `f3813526-2ef0-4d93-b5eb-6a0850705545`.

## Local postcode mock (2026-09-10)

`src/development/mock-address.ts` implements the user-authorized demo address service through the existing AddressPorts contract (CTL-MT-17/18/19). Lookup accepts any non-empty postcode and returns three explicitly fictional addresses on Mock Street. Selection supplies the correct field names for proposer, premises and driver consumers. No external request, geocoding, or real postcode verification takes place. Postcode normalization, timing, form validation, editing and manual-entry behavior remain owned by the existing controls. The preview banner identifies fictional addresses. CLR gaps and production host integration remain unchanged.

Unit tests cover all consumer field names, arbitrary input, independent lookups and invalid selection rejection. Worker browser verification selects addresses for two postcodes while external requests are blocked.

Postcode-mock deployment: `f10611e6-ca57-43fa-8bdc-f50e55d7d155`. Build, lint, TypeScript and 453 unit/component tests passed. Local and live Worker browser checks passed, including selecting and replacing fictional addresses for two postcodes with all external network requests blocked.

## Demo toolbar

The user-authorized expandable toolbar (`src/development/demo-toolbar.tsx`) is gated by `previewStorage`, independently of the canonical legacy Debug panel. `demo-sample.ts` resolves bundled option labels to their original IDs, supplies fictional contact/address details, dates the policy for tomorrow and uses the existing any-driver branch. Loading a sample explicitly replaces all answers, including declarations, without submitting.

`demo-session.ts` replaces the persisted form with fresh route state and clears journey-owned broker/client and ABI/GVW lookup keys. It leaves unrelated storage, options and the HttpOnly password cookie intact. A full navigation remounts the runtime, clearing in-memory loading/terminal state. The panel is collapsed by default and uses a stacked layout on mobile.

`tests/domain/demo-tools.test.ts` validates the sample against existing schemas, checks missing-option failure and verifies precise reset scope. `tests/worker/demo-tools.spec.ts` covers full sample traversal through all 14 steps, direct Summary, restart, cookie retention and absence in host-controlled mode. Canonical records and production defaults remain unchanged.

Demo-toolbar verification: 456 unit/component tests, all 33 existing journey browser tests, build, TypeScript, lint and formatting passed. Dedicated local Worker checks verified all 14 sample steps, direct Summary, restart, login retention and host-mode exclusion. Deployment version: `c48de763-37bb-4e8c-92fd-94669af8fb4d`.
