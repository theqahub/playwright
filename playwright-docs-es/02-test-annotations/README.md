# 02 - Test Annotations

## Annotations

### Introduccion
Playwright soporta tags y anotaciones que se muestran en el reporte de tests.

Puedes agregar tus propios tags y anotaciones en cualquier momento, pero Playwright incluye varias integradas:

- `test.skip()` marca el test como irrelevante. Playwright no ejecuta ese test.
- `test.fail()` marca el test como esperado a fallar. Si falla, el resultado global sigue siendo correcto.
- `test.fixme()` marca el test como pendiente o roto. Playwright no ejecuta ese test cuando la condicion aplica.
- `test.slow()` marca el test como lento y triplica el timeout del test.

Las anotaciones pueden agregarse a un test individual o a un grupo de tests.

## Como leer el resultado en esta pildora

Con la configuracion actual del laboratorio, este capitulo se ejecuta por defecto en `chromium` y `firefox`.

Eso hace que se vea mejor en video:
- `skip condicional por navegador` pasa en Chromium y sale como `skipped` en Firefox.
- `fail: ejemplo pedagogico` muestra una marca distinta porque falla como estaba previsto.
- `fixme condicional en firefox` pasa en Chromium y se marca como `fixme/skipped` en Firefox.
- `chromium only` solo corre realmente en Chromium.

Importante: en Playwright, un test con `test.fail()` puede contribuir al resultado final exitoso de la suite si falla como estaba esperado.

## Enfocar un test

En video es mas claro enseñar `test.only` como snippet aislado, no dejarlo activo dentro del fichero:

```ts
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});
```

## Saltar un test de forma condicional

```ts
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});
```

## Etiquetar tests

```ts
import { test, expect } from '@playwright/test';

test('test login page', {
  tag: '@fast',
}, async ({ page }) => {
  // ...
});

test('test full report @slow', async ({ page }) => {
  // ...
});
```

## Filtrar por tag

```bash
npx playwright test --grep @fast
npx playwright test --grep-invert @fast
npx playwright test --grep "@fast|@slow"
npx playwright test --grep "(?=.*@fast)(?=.*@slow)"
```

## Anotar tests

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

## Omitir un grupo de tests de forma condicional

```ts
test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test('test 1', async ({ page }) => {
    // Solo corre en Chromium
  });
});
```

## Usar `fixme` en `beforeEach`

```ts
test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Secure Area no forma parte del recorrido movil de la demo');
  await page.goto('https://the-internet.herokuapp.com/secure');
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

## Comandos recomendados para grabar

```bash
# Ambos navegadores base
npx playwright test 02-test-annotations/annotations.spec.ts

# Solo Chromium
npx playwright test 02-test-annotations/annotations.spec.ts --project=chromium

# Solo Firefox
npx playwright test 02-test-annotations/annotations.spec.ts --project=firefox
```
