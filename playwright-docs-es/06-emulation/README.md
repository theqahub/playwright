# 06 - Emulation

## Objetivo
Simular condiciones reales de usuario:
- dispositivo movil,
- geolocalizacion,
- permisos,
- zona horaria,
- color scheme,
- idioma.

## En este laboratorio

La pildora usa `the-internet.herokuapp.com`, concretamente paginas como `/geolocation`, para enseñar emulacion sobre una web real en lugar de una app local inventada.

## Ejemplo de geolocalizacion
```ts
import { test, expect } from '@playwright/test';

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: 40.4168, longitude: -3.7038 },
});

test('coordenadas simuladas de Madrid', async ({ page }) => {
  await page.goto('/geolocation');
  const coords = await page.evaluate(() =>
    new Promise(resolve => navigator.geolocation.getCurrentPosition(pos => resolve(pos.coords))),
  );
  expect(coords.latitude).toBeCloseTo(40.4168, 3);
});
```
