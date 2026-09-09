# CX1 Motor Trade Funnel Implementation

Next.js, TypeScript, Tailwind CSS and React Bootstrap implement the documented CX1 Motor Trade front-end: root entry, all fourteen numbered steps, internal driver/vehicle views, Summary edits and local pre-quotation argument preparation. The legacy application source is not present.

Read [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md) before planning or changing code. The canonical specification index is [Document 04](./docs/motor-trade-funnel/04-llm-implementation-handoff.md), and a reusable bootstrap request is in [STARTER-PROMPT.md](./STARTER-PROMPT.md).

The implementation must stop at the documented pre-quotation boundary. APIs, transport, quotation/results, checkout, and payments are outside this repository's implementation scope.

## Run

Use Node.js 24 and pnpm 11.19.0 (the exact dependency versions are locked):

```sh
pnpm install --frozen-lockfile --store-dir .pnpm-store
pnpm dev
```

Open http://127.0.0.1:3000. `pnpm build` and `pnpm start` run the production build. Do not run a production build while the development server is using the same `.next` directory.

Runtime data is intentionally absent. The host boundary is [`HostInputs`](src/runtime/context.tsx), supplied before initialization through `window.__CX1_HOST_INPUTS__`. It accepts local option/population/lookup consumers, limits, assets, missing copy, lookup-card formatters, clean inputs and a selected terminal branch. These are local interfaces, with no network adapters. Missing authentication, options or host inputs retain the documented blank/loading/unavailable behavior. Browser tests supply explicitly synthetic local fixtures; they are not a production dataset or a demo mode.

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

See [verification](docs/implementation/VERIFICATION.md), [stable-ID traceability](docs/implementation/TRACEABILITY.md), [engineering decisions](docs/implementation/ENGINEERING.md) and [unresolved inputs](docs/implementation/CLARIFICATIONS.md). Canonical CLR-001 through CLR-009 remain unresolved. Implementation queries are separately logged; no passing test resolves missing legacy evidence.
