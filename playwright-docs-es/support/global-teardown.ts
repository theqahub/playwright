import type { FullConfig } from '@playwright/test';

export default async function globalTeardown(_config: FullConfig) {
  // Punto de extension para limpieza global futura.
}
