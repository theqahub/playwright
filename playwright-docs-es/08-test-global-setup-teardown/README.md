# 08 - Global Setup and Teardown

## Cuando usarlo
Para tareas una vez por corrida:
- preparar datos globales,
- autenticacion compartida,
- semilla de entorno,
- limpieza final.

## Opcion recomendada moderna
Usar `project dependencies` cuando sea posible para mayor trazabilidad.

## Ejemplo clasico con setup global
```ts
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
});
```

```ts
// global-setup.ts
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Login una vez y guardar estado para reutilizarlo
  await page.goto('http://localhost:3000/login');
  await page.fill('[name=email]', 'qa@example.com');
  await page.fill('[name=password]', 'secret');
  await page.click('button[type=submit]');
  await page.context().storageState({ path: 'playwright/.auth/user.json' });

  await browser.close();
}

export default globalSetup;
```

## Buenas practicas
- Hacer setup idempotente.
- Evitar dependencias fragiles con servicios externos.

## Checklist
- [ ] Setup global rapido y estable.
- [ ] Estado reutilizable versionado correctamente.
