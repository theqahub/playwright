# 16 - TypeScript

## Ventajas
TypeScript mejora autocompletado, seguridad de tipos y mantenibilidad de la suite.

## Puntos clave
- Playwright soporta TS de forma nativa.
- Puedes ejecutar tests `.ts` sin bundlers complejos.
- Recomendable `tsconfig` enfocado a tests.

## Ejemplo minimo
```ts
import { test, expect, Page } from '@playwright/test';

async function abrirHome(page: Page) {
  await page.goto('/');
}

test('home visible', async ({ page }) => {
  await abrirHome(page);
  await expect(page.getByRole('main')).toBeVisible();
});
```

## Buenas practicas
- Tipar fixtures personalizadas.
- Evitar `any` salvo casos extremos.
- Activar chequeo estricto progresivamente.

## Checklist
- [ ] `tsconfig` incluye carpeta de tests.
- [ ] Helpers y fixtures tienen tipos claros.
