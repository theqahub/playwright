# 07 - Test Fixtures

## Idea principal
Fixtures crean entorno aislado por test y permiten setup y teardown elegante.

## En este laboratorio

La fixture personalizada hace login en `https://the-internet.herokuapp.com/login` con el usuario de ejemplo `tomsmith` y deja el test en `/secure`.

## Fixture personalizada
```ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();

    await use(page);
  },
});
```
