import { test, expect } from '@playwright/test';

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: 40.4168, longitude: -3.7038 },
});

test('geolocalizacion simulada en Madrid', async ({ page }) => {
  await page.goto('/geolocation');

  const coords = await page.evaluate(
    () =>
      new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position =>
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          error => reject(new Error(error.message)),
        );
      }),
  );

  expect(coords.latitude).toBeCloseTo(40.4168, 3);
  expect(coords.longitude).toBeCloseTo(-3.7038, 3);
});

test('emulacion de color scheme por test', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect
    .poll(() => page.evaluate(() => window.matchMedia('(prefers-color-scheme: dark)').matches))
    .toBe(true);
});
