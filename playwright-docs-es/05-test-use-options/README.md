# 05 - Test Use Options

## Que controla `use`
Define opciones por defecto para `page/context`:
- `baseURL`
- `headless`
- `viewport`
- `locale`
- `timezoneId`
- `permissions`
- `trace`, `video`, `screenshot`

## Ejemplo de configuracion
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:4173',
    headless: true,
    viewport: { width: 1366, height: 768 },
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
  // Este test ignora locale global y usa en-US
});
```

## Buenas practicas
- Definir defaults realistas de usuario.
- Cambiar opciones por `describe`/archivo cuando aplique.

## Checklist
- [ ] `use` cubre idioma, viewport y trazas.
- [ ] Hay estrategia clara para overrides.
