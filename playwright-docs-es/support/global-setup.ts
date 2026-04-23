import type { FullConfig } from '@playwright/test';

export default async function globalSetup(_config: FullConfig) {
  process.env.PW_DOCS_GLOBAL_SETUP = 'ok';
}
