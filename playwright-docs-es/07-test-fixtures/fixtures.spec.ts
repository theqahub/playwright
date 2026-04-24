import { test, expect } from '../support/fixtures';

test('fixture authenticatedPage deja sesion lista', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await expect(authenticatedPage.locator('#flash')).toContainText('You logged into a secure area!');
  await expect(authenticatedPage.getByRole('link', { name: 'Logout' })).toBeVisible();
});
