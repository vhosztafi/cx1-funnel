# Engineering decisions

The canonical documents own behavior. Package versions and this document do not establish legacy runtime outcomes.

- Next.js 16.3.4 and React 19.2.8 provide the application shell. React Router 7.18.3 preserves explicit SPA navigation with route-local state and source-ordered calls inside the client boundary. It does not settle CLR-006.
- React Bootstrap 2.10.10 is the UI kit, with Bootstrap 5.3.8 compiled using the canonical breakpoint map and gutter. Tailwind 4.3.3 utilities are configured without its preflight reset. Adapter components override defaults where necessary.
- react-hook-form 7.87.0, react-select 5.10.2, react-imask 7.6.1, MUI picker 9.13.0 and dayjs 1.11.23 provide the corresponding primitives. Yup 1.4.0 retains the documented schema API selection. Its observed runtime results/default messages do not resolve CLR-008/009.
- TypeScript 6.0.3 supplies the compiler API required by typescript-eslint. TypeScript 7 was rejected because the installed lint integration does not support that API. ESLint 9.39.5 is selected for the installed React plugin's context API; ESLint 10 fails in that plugin. Both are development tooling choices.
- pnpm 11.19.0 is the available bundled package manager; exact versions and lockfile are committed. Scripts invoke local tools through Node explicitly because this Windows host's pnpm command lookup does not resolve package shims reliably.
- Next uses its Webpack mode because Turbopack cannot spawn its CSS worker in the current sandbox. A production Webpack build passed. Bootstrap Sass deprecation notices are acknowledged through Sass's documented deprecation configuration; no styling contract is changed.
- Runtime options, lookup outputs, assets, dashboard configuration and other unresolved host inputs remain typed injected values. No production values are synthesized and no transport adapter exists.
- Unit/component tests use Vitest and Testing Library. E2E uses Playwright with installed Chrome. Test state is explicitly marked synthetic and is never imported into runtime modules.

Current implementation is in progress. Passing foundation tests and builds do not establish numbered-surface or full-funnel completion. See TRACEABILITY.md for owner status.
