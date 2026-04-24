import { defineConfig, devices } from '@playwright/test';

const fullMatrix = process.env.FULL_MATRIX === '1';

const extraProjects = fullMatrix
  ? [
      {
        name: 'webkit',
        testIgnore: /support\/auth\.setup\.ts/,
        use: {
          ...devices['Desktop Safari'],
          storageState: './.auth/user.json',
        },
        dependencies: ['setup'],
      },
      {
        name: 'mobile-chrome',
        testIgnore: /support\/auth\.setup\.ts/,
        use: {
          ...devices['Pixel 7'],
          storageState: './.auth/user.json',
        },
        dependencies: ['setup'],
      },
    ]
  : [];

export default defineConfig({
  testDir: '.',
  testMatch: ['**/*.spec.ts', 'support/auth.setup.ts'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    locale: 'es-ES',
    timezoneId: 'Europe/Madrid',
  },
  globalSetup: require.resolve('./support/global-setup'),
  globalTeardown: require.resolve('./support/global-teardown'),
  projects: [
    {
      name: 'setup',
      testMatch: /support\/auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium',
      testIgnore: /support\/auth\.setup\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: './.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      testIgnore: /support\/auth\.setup\.ts/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: './.auth/user.json',
      },
      dependencies: ['setup'],
    },
    ...extraProjects,
  ],
});
