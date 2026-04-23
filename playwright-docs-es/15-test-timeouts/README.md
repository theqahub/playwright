# 15 - Timeouts

## Tipos de timeout importantes
- timeout de test,
- timeout de expect,
- timeout de hooks,
- timeout de acciones/navegacion.

## Config global
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  expect: { timeout: 5_000 },
});
```

## Ajuste por test
```ts
import { test, expect } from '@playwright/test';

test('proceso pesado de exportacion', async ({ page }) => {
  test.setTimeout(90_000); // Caso puntual mas lento
  await page.goto('/exports');
  await expect(page.getByText('Completado')).toBeVisible();
});
```

## Buenas practicas
- Subir timeout solo en casos justificados.
- Investigar lentitud antes de inflar tiempos.

## Checklist
- [ ] `expect.timeout` razonable y consistente.
- [ ] No hay timeouts inflados sin motivo.
