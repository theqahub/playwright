import { test, expect } from '@playwright/test';

const demoOnly = process.env.PW_DEMO_ONLY === '1';
const onlyOrTest = demoOnly ? test.only : test;

test('skip condicional por navegador', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Demo de skip condicional en webkit');
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
});

test('slow: caso intencionadamente mas lento', async ({ page }) => {
  test.slow();
  await page.goto('/exports');
  await expect(page.getByText('Completado')).toBeVisible();
});

test('fail: ejemplo pedagogico', async ({ page }) => {
  test.fail(true, 'Ejemplo de test marcado como fail esperado');
  await page.goto('/dashboard');
  await expect(page.getByText('texto que no existe')).toBeVisible();
});

test('fixme: bug bloqueante conocido', async ({ page, browserName }) => {
  test.fixme(browserName === 'webkit', 'Pendiente fix en webkit');
  await page.goto('/dashboard');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

onlyOrTest('only: demo controlada con PW_DEMO_ONLY=1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
});

test.describe('chromium only (skip condicional a nivel grupo)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // Este hook solo corre en Chromium por el skip del grupo.
  });

  test('grupo chromium test 1', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('grupo chromium test 2', async ({ page }) => {
    await page.goto('/todos');
    await expect(page.getByRole('heading', { name: 'Todos' })).toBeVisible();
  });
});

test.describe('fixme dentro de beforeEach', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.fixme(isMobile, 'Settings aun no funciona en mobile');
    await page.goto('/dashboard');
  });

  test('user profile simulado', async ({ page }) => {
    await expect(page.getByText('Usuario:')).toBeVisible();
  });
});

test('tags: @fast @smoke login heading visible', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});

test('tags: @slow @report exports finaliza', async ({ page }) => {
  await page.goto('/exports');
  await expect(page.getByText('Completado')).toBeVisible();
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
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
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
      await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
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
        await page.goto('/exports');
        await expect(page.getByText('Completado')).toBeVisible();
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
  await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
});
