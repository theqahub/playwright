# 10 - Parameterize Tests

## Para que sirve
Evita duplicacion al ejecutar misma logica con distintos datos.

## Patron comun
```ts
import { test, expect } from '@playwright/test';

const users = [
  { role: 'admin', path: '/admin' },
  { role: 'editor', path: '/editor' },
  { role: 'viewer', path: '/viewer' },
];

for (const user of users) {
  test(`acceso correcto para ${user.role}`, async ({ page }) => {
    // Arrange: preparar estado del rol
    await page.goto(user.path);

    // Assert: validar area visible
    await expect(page.getByRole('heading')).toContainText(user.role);
  });
}
```

## Variantes
- Matrices de datos simples.
- Generacion dinamica por entorno.
- Parametrizacion por `describe`.

## Buenas practicas
- Nombres de test claros con el dato parametrizado.
- No mezclar demasiadas dimensiones en una sola matriz.

## Checklist
- [ ] Eliminaste duplicados obvios.
- [ ] Titulos de casos identifican dato de entrada.
