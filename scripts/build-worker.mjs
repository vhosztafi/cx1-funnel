import { spawnSync } from 'node:child_process';

// The ordinary Next.js production build remains host-controlled.
const result = spawnSync(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'build', '--webpack'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      CX1_WORKER_EXPORT: 'on',
      CX1_BUILD_DIR: 'out',
      NEXT_PUBLIC_CX1_DEMO: 'on',
      NEXT_PUBLIC_CX1_MOCKS: 'on',
    },
  },
);
if (result.error) throw result.error;
process.exit(result.status ?? 1);
