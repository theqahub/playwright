# 04 - Test Configuration

## Objetivo
`playwright.config` centraliza comportamiento global del runner.

## Ejemplo comentado
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Carpeta de tests
  testDir: './tests',

  // Paralelismo por archivo
  fullyParallel: true,

  // Falla rapida en CI para ahorrar minutos
  forbidOnly: !!process.env.CI,

  // Reintentos solo en CI
  retries: process.env.CI ? 2 : 0,

  // Reporte HTML local
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});
```

## Puntos clave
- `testDir`, `retries`, `workers`, `reporter`, `projects`, `use`.
- Config global + sobreescritura por proyecto.

## Buenas practicas
- Config basada en entorno (`CI`, `LOCAL`).
- Mantener valores sensibles en variables de entorno.

## Checklist
- [ ] Config separa local/CI.
- [ ] `forbidOnly` activo en CI.
