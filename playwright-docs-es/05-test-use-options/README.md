# 05 - Test Use Options

## Que controla `use`
Define opciones por defecto para `page` y `browserContext`:
- `baseURL`
- `headless`
- `viewport`
- `locale`
- `timezoneId`
- `permissions`
- `trace`, `video`, `screenshot`

## En este laboratorio

`use.baseURL` apunta a `https://the-internet.herokuapp.com/`, de modo que un `page.goto('/login')` o `page.goto('/dynamic_loading/2')` funciona sin repetir la URL completa en cada test.

## Ejemplo de configuracion
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    locale: 'es-ES',
    timezoneId: 'Europe/Madrid',
    trace: 'retain-on-failure',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});
```

## Sobrescribir en un test
```ts
import { test } from '@playwright/test';

test.use({ locale: 'en-US' });

test('flujo en ingles', async ({ page }) => {
  await page.goto('/');
});
```
