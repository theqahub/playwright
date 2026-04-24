# 04 - Test Configuration

## Objetivo
`playwright.config` centraliza el comportamiento global del runner.

## En este laboratorio

Usamos `https://the-internet.herokuapp.com/` como `baseURL` comun para todo el curso. Eso elimina la necesidad de una app local propia y hace que todos los ejemplos partan del mismo entorno.

## Ejemplo comentado
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
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
- `baseURL` permite navegar con rutas relativas como `/login` o `/dropdown`.
- `projects` deja repetir la misma suite en varios navegadores.
- `use` define el comportamiento por defecto de `page` y `context`.
