import { test, expect } from '../support/fixtures';

test('fixture authenticatedPage deja sesion lista', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(authenticatedPage.getByText('qa@example.com')).toBeVisible();
});
