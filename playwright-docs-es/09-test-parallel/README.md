# 09 - Parallelism

## Concepto
Playwright ejecuta tests en procesos worker para acelerar la suite.

## Niveles de paralelismo
- Entre archivos (por defecto).
- Dentro de archivo (`test.describe.configure({ mode: 'parallel' })`).
- Global con `fullyParallel`.

## Configuracion ejemplo
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 2 : undefined,
  fullyParallel: false,
});
```

## Grupo serial cuando hay dependencia
```ts
import { test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('paso 1', async ({ page }) => {
  // Se ejecuta en orden forzado
});

test('paso 2', async ({ page }) => {
  // Depende de paso 1
});
```

## Buenas practicas
- Preferir tests aislados (evita `serial` salvo necesidad real).
- Ajustar `workers` a capacidad de CI.

## Checklist
- [ ] Suite estable en paralelo.
- [ ] No hay estado compartido accidental.
