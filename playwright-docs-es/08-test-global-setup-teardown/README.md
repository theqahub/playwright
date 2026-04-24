# 08 - Global Setup and Teardown

## Cuando usarlo
Para tareas que se hacen una vez por corrida:
- preparar datos globales,
- autenticacion compartida,
- semilla de entorno,
- limpieza final.

## Nota para este repo

Este laboratorio ya no depende de una app local. La autenticacion compartida se muestra con `project dependencies` y `storageState` sobre `the-internet.herokuapp.com`, mientras que `globalSetup` y `globalTeardown` siguen disponibles para preparar entorno global del runner.

## Ejemplo clasico
```ts
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ baseURL: 'https://the-internet.herokuapp.com' });

  await page.goto('/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.context().storageState({ path: './.auth/user.json' });

  await browser.close();
}
```
