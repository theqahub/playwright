# 10 - Parameterize Tests

## Para que sirve
Evita duplicacion al ejecutar la misma logica con distintos datos.

## En este laboratorio

La parametrizacion se apoya en varias paginas de `the-internet`:
- `/status_codes/200`
- `/status_codes/301`
- `/status_codes/404`
- `/status_codes/500`

## Patron comun
```ts
import { test, expect } from '@playwright/test';

const statusCodes = [
  { code: '200', path: '/status_codes/200' },
  { code: '301', path: '/status_codes/301' },
  { code: '404', path: '/status_codes/404' },
];

for (const item of statusCodes) {
  test(`status code ${item.code}`, async ({ page }) => {
    await page.goto(item.path);
    await expect(page.locator('#content')).toContainText(item.code);
  });
}
```
