# 07 - Test Fixtures

## Idea principal
Fixtures crean entorno aislado por test y permiten setup/teardown elegante.

## Built-in fixtures mas usadas
- `page`
- `context`
- `browser`
- `request`
- `browserName`

## Fixture personalizada (ejemplo)
```ts
import { test as base } from '@playwright/test';

type MyFixtures = {
  authenticatedPage: void;
};

export const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Setup: login previo para cada test que use esta fixture
    await page.goto('/login');
    await page.fill('[name=email]', 'qa@example.com');
    await page.fill('[name=password]', 'secret');
    await page.click('button[type=submit]');

    await use();

    // Teardown: limpieza opcional
    await page.context().clearCookies();
  },
});
```

## Ventajas frente a hooks clasicos
- Reutilizacion entre archivos.
- Composicion de fixtures.
- Solo se inicializa lo que el test necesita.

## Buenas practicas
- Fixtures pequenas y con responsabilidad unica.
- Evitar fixtures con demasiada logica de negocio.

## Checklist
- [ ] Existe capa de fixtures compartidas.
- [ ] Setup/teardown no duplicado en cada spec.
