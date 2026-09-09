import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  sassOptions: {
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
    quietDeps: true,
  },
};
export default config;
