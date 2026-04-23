import { test, expect } from '@playwright/test';

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: 40.4168, longitude: -3.7038 },
});

test('geolocalizacion simulada en Madrid', async ({ page }) => {
  await page.goto('/tiendas');
  await expect(page.getByText('Madrid')).toBeVisible();
});

test('emulacion de color scheme por test', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.setContent('<main id="app">Modo oscuro</main>');
  await expect(page.locator('#app')).toHaveText('Modo oscuro');
});
