import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/worker',
  workers: 1,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787',
    channel: 'chrome',
    // Credentials must not be captured in traces or videos.
    trace: 'off',
    video: 'off',
    screenshot: 'off',
  },
});
