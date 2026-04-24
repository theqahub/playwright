# 15 - Timeouts

## Tipos de timeout importantes
- timeout de test,
- timeout de expect,
- timeout de hooks,
- timeout de acciones y navegacion.

## En este laboratorio

Usamos `/dynamic_loading/2` de `the-internet.herokuapp.com` para tener una espera realista sin depender de una app local.

## Ajuste por test
```ts
import { test, expect } from '@playwright/test';

test('dynamic loading mas lento', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByText('Hello World!')).toBeVisible();
});
```
