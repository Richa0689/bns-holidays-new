import { test, expect } from '@playwright/test';

test.use({ channel: 'msedge' });

test('flight-trip-types', async ({ page }) => {
  await page.route("**/*", async route => {
    const requestUrl = new URL(route.request().url());
    if (requestUrl.origin === "http://localhost:4189") {
      await route.continue();
    } else {
      await route.abort("blockedbyclient");
    }
  });
  await page.goto('http://localhost:4189');
  await page.getByRole('link', { name: 'Flight' }).click();
  await page.getByRole('button', { name: 'Round trip' }).click();
  await page.getByRole('button', { name: 'One way' }).click();
  await page.getByRole('button', { name: 'Multicity' }).click();
  await page.getByRole('button', { name: '+ Add another flight' }).click();
  await page.locator('#f-multi-to-4').fill('Mumbai');
  await page.getByRole('option', { name: 'Mumbai, India Chhatrapati' }).click();
  await page.getByRole('button', { name: 'Departure' }).first().click();
  await page.getByRole('button', { name: '20' }).click();
  await page.getByRole('button', { name: 'Departure' }).nth(1).click();
  await page.getByRole('button', { name: '25' }).click();
  await page.locator('button').filter({ hasText: 'dd-mm-yyyy' }).click();
  await page.getByRole('button', { name: '30' }).nth(1).click();
  await page.getByRole('button', { name: 'Search flights' }).click();
  await expect(page.getByText('Failed to fetch')).toHaveText("Failed to fetch");
});
