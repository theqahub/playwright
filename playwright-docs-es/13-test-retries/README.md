# 13 - Retries

## Que resuelve
Reintenta tests fallidos para mitigar flaky tests mientras investigas causa raiz.

## Configuracion
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: process.env.CI ? 2 : 0,
});
```

## Desde CLI
```bash
npx playwright test --retries=3
```

## Categorias de resultado
- `passed`: pasa al primer intento.
- `flaky`: falla y luego pasa en retry.
- `failed`: falla siempre.

## Buenas practicas
- No usar retries para esconder bugs.
- Medir tasa `flaky` y abrir tickets.
- Limpiar caches/estado en `testInfo.retry` cuando haga falta.

## Ejemplo rapido
```ts
import { test } from '@playwright/test';

test('caso sensible a estado', async ({ page }, testInfo) => {
  if (testInfo.retry) {
    // Reintento: reseteo para evitar residuos
    await page.context().clearCookies();
  }
});
```

## Checklist
- [ ] Retries activos solo donde aportan.
- [ ] Existe plan de reduccion de flaky tests.
