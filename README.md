# CX1 Motor Trade Funnel Implementation

Next.js, TypeScript, Tailwind CSS and React Bootstrap implement the documented CX1 Motor Trade front-end: root entry, all fourteen numbered steps, internal driver/vehicle views, Summary edits and local pre-quotation argument preparation. The legacy application source is not present.

Read [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md) before planning or changing code. The canonical specification index is [Document 04](./docs/motor-trade-funnel/04-llm-implementation-handoff.md), and a reusable bootstrap request is in [STARTER-PROMPT.md](./STARTER-PROMPT.md).

The handover also includes a [downloaded UAT options snapshot](./docs/motor-trade-funnel/external-resources/README.md), with its source URL, retrieval time, checksum and collection inventory.

The original implementation stopped at the documented pre-quotation boundary. A separately approved quote handoff connects the hosted `cx1-dev` demo to `cx1-admin-dev` once both updated sites are deployed; checkout and payments remain outside this repository's scope.

## Run

The [quote design](docs/implementation/DESIGN.md) follows the user-approved Aviva-inspired presentation. Change `--cx-accent` at the top of [quote-theme.css](src/app/quote-theme.css) to replace the blue throughout the interface. Questions, steps and business behavior remain unchanged.

Use Node.js 24 and pnpm 11.19.0 (the exact dependency versions are locked):

```sh
pnpm install --frozen-lockfile --store-dir .pnpm-store
pnpm dev
```

Open http://127.0.0.1:3000. `pnpm build` and `pnpm start` run the production build. Do not run a production build while the development server is using the same `.next` directory.

Production runtime data is intentionally absent. The host boundary is [`HostInputs`](src/runtime/context.tsx), supplied before initialization through `window.__CX1_HOST_INPUTS__`. It accepts local option/population/lookup consumers, limits, assets, missing copy, lookup-card formatters, clean inputs and a selected terminal branch. These are local interfaces, with no network adapters. Production sessions with missing authentication, options or host inputs retain the documented blank/loading/unavailable behavior.

For standalone local use, `pnpm dev` automatically enables a labelled **Mock preview** when no host inputs or authentication are supplied. Refresh the page after updating to activate it. The [development host](src/development/mock-host.ts) provides an in-memory mock identity; dropdowns load from the bundled [options JSON](public/api/options.json), served by the same-origin `/api/options.json` endpoint through the [options consumer](src/development/uat-options.ts). Labels, IDs, order and nested metadata are preserved exactly, with no synthetic fallback rows. Requests use only the same-origin access cookie, send no form values, time out after 15 seconds, and offer Retry if loading fails. No external options service is called at runtime. Mock identity and the UAT option cache remain in memory. Ordinary production builds do not activate this preview unless the explicit demo build flag is enabled (see Cloudflare Worker demo below).

Postcode lookup returns three clearly labelled fictional addresses for any non-empty postcode. Selecting one fills the proposer, premises or driver address fields. This is a local mock, not postcode validation. Vehicle lookups still return local failures; use manual vehicle entry. Driver validation returns a synthetic successful result. Local submission ends at argument preparation. On the hosted `cx1-dev` demo, submission opens `cx1-admin-dev` and uses the reviewer's existing internal login to create a Motor Trade Road Risks draft under the approved fictional review client and agency. The full converted funnel answers are attached to that draft for review. This demo handoff does not resolve any canonical clarification. Set `NEXT_PUBLIC_CX1_MOCKS=off` before starting development to disable it. Supplying `window.__CX1_HOST_INPUTS__` or existing authentication also preserves host-controlled behavior.

## Verify

```sh
pnpm contracts:check
pnpm format:check
pnpm test
pnpm lint
pnpm typecheck
pnpm test:e2e
pnpm build
```

Playwright uses Chrome and a local server on port 3100. On Windows, an already running `pnpm dev --port 3100` can be reused by the browser suite. Stop it before the production build. Browser runs write responsive screenshots and failure traces to `test-results/`.

If development is already running on port 3000, set `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000` for the browser suite to reuse it instead of starting a competing server.

To verify a production build alongside development, set `CX1_BUILD_DIR=.next/production-check` before `pnpm build`. This keeps its output separate from the active development build.

See [verification](docs/implementation/VERIFICATION.md), [stable-ID traceability](docs/implementation/TRACEABILITY.md), [engineering decisions](docs/implementation/ENGINEERING.md) and [unresolved inputs](docs/implementation/CLARIFICATIONS.md). Canonical CLR-001 through CLR-009 remain unresolved. Implementation queries are separately logged; no passing test resolves missing legacy evidence.

## Cloudflare Worker demo

The labelled demo is deployed at https://cx1-dev.gyongyos.co.uk.
See [deployment details](docs/implementation/DEPLOYMENT.md) for the configuration, verification and repeat deployment commands.

```sh
pnpm build:worker
pnpm preview:worker
pnpm deploy
```

The Worker build explicitly enables `NEXT_PUBLIC_CX1_DEMO=on`. Ordinary production builds do not enable demo mode by default. The public demo uses the in-memory mock identity and same-origin bundled options consumer, displays the Mock preview banner, and opens the authenticated admin quote handoff on Submit after both updated Workers are deployed.

### Development password gate

The deployed Worker requires a password for every page and asset. The generated password is in ignored `.dev.vars`; its deployed value is the server-side `SITE_PASSWORD` secret in Cloudflare Worker Settings → Variables and Secrets. The neutral login offers a browser-session login or Remember me for 30 days. Changing the password revokes existing login cookies. See [deployment details](docs/implementation/DEPLOYMENT.md#password-protection-2026-09-10).

### Demo tools

Expand **Demo tools** below the preview notice. **Load sample journey** replaces current answers with a fictional sole-trader sample and starts at step 1. **Load sample at Summary** loads the same sample at step 14. Both use actual bundled dropdown IDs, tomorrow's policy start date, mock contact/address details and sample declarations. Nothing is submitted automatically.

**Clear & restart** removes the journey answers, history and auxiliary lookup state, then returns to an empty step 1. It retains the password login and unrelated browser storage. Actions reload the journey so mounted forms, loading states and terminal preparation do not survive. The panel starts collapsed and appears only in standalone mock/demo sessions, not host-controlled sessions.
