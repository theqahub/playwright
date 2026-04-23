# 02 - Test Annotations

## Annotations

### Introduccion
Playwright soporta tags y anotaciones que se muestran en el reporte de tests.

Puedes agregar tus propios tags y anotaciones en cualquier momento, pero Playwright incluye varias integradas:

- `test.skip()` marca el test como irrelevante. Playwright no ejecuta ese test. Usa esta anotacion cuando el test no aplica en alguna configuracion.
- `test.fail()` marca el test como esperado a fallar. Playwright ejecuta el test y comprueba que realmente falle. Si no falla, Playwright lo reporta como problema.
- `test.fixme()` marca el test como pendiente o roto. Playwright no ejecuta ese test, a diferencia de `fail`. Usa `fixme` cuando ejecutar el test es lento o provoca fallos.
- `test.slow()` marca el test como lento y triplica el timeout del test.

Las anotaciones pueden agregarse a un test individual o a un grupo de tests.

Las anotaciones integradas tambien pueden ser condicionales, en cuyo caso se aplican cuando la condicion es verdadera, y pueden depender de fixtures del test. Un mismo test puede tener varias anotaciones, incluso en configuraciones distintas.

## Enfocar un test
Puedes enfocar algunos tests. Cuando hay tests enfocados, solo se ejecutan esos.

```ts
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});
```

## Saltar un test
Marca un test como omitido.

```ts
test.skip('skip this test', async ({ page }) => {
  // This test is not run
});
```

## Saltar un test de forma condicional
Puedes omitir un test segun una condicion.

```ts
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});
```

## Agrupar tests
Puedes agrupar tests para darles un nombre logico o para limitar hooks `before/after` a ese grupo.

```ts
import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});
```

## Etiquetar tests
A veces quieres etiquetar tus tests como `@fast` o `@slow` para luego filtrarlos en el reporte o ejecutar solo ciertos grupos.

Para etiquetar un test, puedes pasar un objeto adicional de detalles al declararlo, o agregar un token `@` al titulo del test. Ten en cuenta que los tags deben empezar con `@`.

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

Tambien puedes etiquetar todos los tests de un grupo o usar varios tags:

```ts
import { test, expect } from '@playwright/test';

test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header', async ({ page }) => {
    // ...
  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    // ...
  });
});
```

Ahora puedes ejecutar tests que tengan un tag concreto usando la opcion de linea de comandos `--grep`.

```bash
npx playwright test --grep @fast
```

O, si quieres lo contrario, puedes omitir los tests con cierto tag:

```bash
npx playwright test --grep-invert @fast
```

Para ejecutar tests que contengan cualquiera de dos tags distintos (operador OR logico):

```bash
npx playwright test --grep "@fast|@slow"
```

O ejecutar tests que contengan ambos tags (operador AND logico) usando lookaheads en la expresion regular:

```bash
npx playwright test --grep "(?=.*@fast)(?=.*@slow)"
```

Tambien puedes filtrar tests en el archivo de configuracion mediante `testConfig.grep` y `testProject.grep`.

## Anotar tests
Si quieres anotar tus tests con algo mas descriptivo que un tag, puedes hacerlo al declarar el test. Las anotaciones tienen un `type` y una `description` para aportar mas contexto y estan disponibles desde la API del reporter. El reporter HTML integrado de Playwright muestra todas las anotaciones, excepto aquellas cuyo `type` empieza por `_`.

Por ejemplo, para anotar un test con la URL de una incidencia:

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

Tambien puedes anotar todos los tests de un grupo o proporcionar varias anotaciones:

```ts
import { test, expect } from '@playwright/test';

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

## Omitir un grupo de tests de forma condicional
Por ejemplo, puedes ejecutar un grupo de tests solo en Chromium pasando un callback.

`example.spec.ts`

```ts
test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // This hook is only run in Chromium.
  });

  test('test 1', async ({ page }) => {
    // This test is only run in Chromium.
  });

  test('test 2', async ({ page }) => {
    // This test is only run in Chromium.
  });
});
```

## Usar `fixme` en un hook `beforeEach`
Para evitar ejecutar hooks `beforeEach`, puedes poner las anotaciones dentro del propio hook.

`example.spec.ts`

```ts
test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');

  await page.goto('http://localhost:3000/settings');
});

test('user profile', async ({ page }) => {
  await page.getByText('My Profile').click();
  // ...
});
```

## Runtime annotations
Mientras el test ya se esta ejecutando, puedes agregar anotaciones a `test.info().annotations`.

`example.spec.ts`

```ts
test('example test', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });

  // ...
});
```
