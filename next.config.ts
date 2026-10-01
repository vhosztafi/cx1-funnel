import type { NextConfig } from 'next';
const config: NextConfig = {
  output: process.env.CX1_WORKER_EXPORT === 'on' ? 'export' : undefined,
  // Allow production verification without overwriting the running dev build.
  distDir: process.env.CX1_BUILD_DIR ?? '.next',
  poweredByHeader: false,
  devIndicators: false,
  sassOptions: {
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
    quietDeps: true,
  },
};
export default config;
