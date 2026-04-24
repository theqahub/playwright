import { test, expect } from '@playwright/test';

test('skip condicional por navegador', { tag: '@simpleTag' }, async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Demo de skip condicional en Firefox');
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});

test('slow: carga dinamica Example 2', { tag: '@simpleTag' }, async ({ page }) => {
  test.slow();
  await page.goto('/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.locator('#finish')).toHaveText('Hello World!', { timeout: 10_000 });
});

test('fail: ejemplo pedagogico', { tag: '@simpleTag' }, async ({ page }) => {
  test.fail(true, 'Este test debe fallar para que el runner lo considere correcto');
  await page.goto('/status_codes/404');
  await expect(page.getByText('This copy should never exist')).toBeVisible();
});

test('fixme condicional en firefox', { tag: '@simpleTag' }, async ({ page, browserName }) => {
  test.fixme(browserName === 'firefox', 'Ejemplo de fixme condicional en Firefox');
  await page.goto('/secure');
  // Debería añadir aquí las líneas necesarias para loguearse, pero como es un ejemplo de fixme, lo dejamos así para que falle y se marque como "to fix".
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});

test.describe('chromium only (skip condicional a nivel grupo)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // Before all afecta a la ejecución de todos los tests y ejecuta este bloque
    // de codigo antes de que se ejecuten todos los casos de prueba
  });

  /*
  // Después de todos los tests
  test.afterAll(() => {

  });

  // Después de cada test
  test.afterEach(() => {
    // Console.log(1) -> se ejecutará después de cada test, es decir, 2 veces en este caso
  });

  Antes de cada test
  test.beforeEach(() => {
    // Console.log(1) -> se ejecutará después de cada test, es decir, 2 veces en este caso
  });*/

  test('grupo chromium test 1', async ({ page }) => {
    await page.goto('/dropdown');
    await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
  });

  test('grupo chromium test 2', async ({ page }) => {
    await page.goto('/checkboxes');
    await expect(page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();
  });
});

test.describe('fixme dentro de beforeEach', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.fixme(isMobile, 'Secure Area no forma parte del recorrido movil de la demo');
    await page.goto('/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('user profile simulado', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  });
});

test('tags: @fast @smoke login heading visible', { tag: ['@fast', '@smoke'] },  async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});

test('tags: @slow @report dropdown cargado', { tag: ['@fast', '@slow', '@report'] }, async ({ page }) => {
  await page.goto('/dropdown');
  await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
});

test(
  'annotation object: test login page',
  {
    annotation: {
      type: 'issue',
      description: 'https://github.com/microsoft/playwright/issues/23180',
    },
  },
  async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  },
);

test.describe(
  'report tests',
  {
    annotation: { type: 'category', description: 'report' },
  },
  () => {
    test('test report header', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    });

    test(
      'test full report',
      {
        annotation: [
          {
            type: 'issue',
            description: 'https://github.com/microsoft/playwright/issues/23180',
          },
          {
            type: 'performance',
            description: 'very slow test!',
          },
        ],
      },
      async ({ page }) => {
        await page.goto('/dynamic_loading/2');
        await page.getByRole('button', { name: 'Start' }).click();
        await expect(page.locator('#finish')).toHaveText('Hello World!', { timeout: 10_000 });
      },
    );
  },
);

test('runtime annotations con test.info()', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});
