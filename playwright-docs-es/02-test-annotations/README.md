# 02 - Test Annotations

## Para que sirven
Las anotaciones permiten controlar ejecucion y documentar estado de tests:
- `test.skip()`
- `test.fail()`
- `test.fixme()`
- `test.slow()`
- `test.only()`

## Ejemplos practicos
```ts
import { test, expect } from '@playwright/test';

test('flujo legacy', async ({ page, browserName }) => {
  // Saltamos webkit por bug conocido
  test.skip(browserName === 'webkit', 'Bug #123 pendiente');

  await page.goto('/');
  await expect(page).toHaveTitle(/Mi App/);
});

test('caso en investigacion', async ({ page }) => {
  // Esperamos fallo mientras se corrige backend
  test.fail(true, 'Endpoint inestable temporalmente');
  await page.goto('/dashboard');
});

test('bug bloqueante', async ({ page, browserName }) => {
  test.fixme(browserName === 'webkit', 'Pendiente fix');
  await page.goto('/');
});
```

## Cuadro rapido
- `skip`: no se ejecuta.
- `fail`: debe fallar (si pasa, se marca inesperado).
- `fixme`: no ejecutar hasta correccion.
- `slow`: multiplica timeout para casos pesados.
- `only`: ejecuta solo los tests marcados con `only` (usar de forma temporal).

## Grupo de tests con condicion (`describe` + skip)
```ts
test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test('test 1', async ({ page }) => {
    await page.goto('/');
  });

  test('test 2', async ({ page }) => {
    await page.goto('/dashboard');
  });
});
```

## `fixme` dentro de `beforeEach`
```ts
test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page no funciona en mobile todavia');
  await page.goto('/settings');
});
```

## Tags en el titulo del test
```ts
test('crear tarea @fast @smoke', async ({ page }) => {
  // ...
});
```

## Ejecutar por tags con grep
```bash
npx playwright test --grep @fast
npx playwright test --grep-invert @fast
npx playwright test --grep \"@fast|@slow\"
npx playwright test --grep \"(?=.*@fast)(?=.*@slow)\"
```

## Annotate tests (metadatos estructurados)
```ts
import { test, expect } from '@playwright/test';

test('test login page', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  // ...
});
```

Tambien puedes anotar grupos y multiples anotaciones:
```ts
test.describe('report tests', {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test('test report header', async ({ page }) => {
    // ...
  });

  test('test full report', {
    annotation: [
      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
      { type: 'performance', description: 'very slow test!' },
    ],
  }, async ({ page }) => {
    // ...
  });
});
```

## Runtime annotations
```ts
test('example test', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });
});
```

Nota: el HTML reporter muestra anotaciones, excepto las cuyo `type` empieza por `_`.

## Buenas practicas
- Siempre justificar con mensaje y ticket.
- Revisar anotaciones en cada sprint.
- Evitar convertir `skip` en deuda permanente.
- No dejar `only` activo antes de commit (protegete con `forbidOnly` en CI).

## Checklist
- [ ] Cada anotacion tiene motivo claro.
- [ ] Hay tarea de seguimiento asociada.
- [ ] El equipo sabe usar `--grep` y `--grep-invert` por tags.
