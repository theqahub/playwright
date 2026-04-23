# 06 - Emulation

## Objetivo
Simular condiciones reales de usuario:
- dispositivo movil,
- geolocalizacion,
- permisos,
- zona horaria,
- color scheme,
- idioma.

## Ejemplo con dispositivos
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 7'], // Emula viewport + UA + tactil
        locale: 'es-ES',
      },
    },
  ],
});
```

## Ejemplo de geolocalizacion
```ts
import { test, expect } from '@playwright/test';

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: 40.4168, longitude: -3.7038 },
});

test('muestra tiendas cercanas en Madrid', async ({ page }) => {
  await page.goto('/tiendas');
  await expect(page.getByText('Madrid')).toBeVisible();
});
```

## Riesgos habituales
- Mezclar emulacion de movil con selectores pensados para desktop.
- No fijar `timezoneId` al validar fechas.

## Checklist
- [ ] Casos criticos cubiertos en movil y desktop.
- [ ] Pruebas sensibles a locale/timezone estan controladas.
