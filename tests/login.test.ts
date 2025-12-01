import { test, expect } from '@playwright/test';

test('Login → Search → Detail → Logout flow', async ({ page }) => {
    // Login page
    await page.goto('/login');

    await page.fill('#email', 'testuser@example.com');
    await page.fill('#password', 'testpassword');

    await page.click('button[type=submit]');
    await expect(page).toHaveURL('/dashboard');

    // Search
    await page.fill('#search-box', 'テストデータ');
    await page.click('#search-button');

    await expect(page.locator('.search-result')).toHaveCountGreaterThan(0);

    // Detail page
    await page.click('.search-result:first-child');
    await expect(page).toHaveURL(/detail/);

    // Logout
    await page.click('#user-menu');
    await page.click('#logout');

    await expect(page).toHaveURL('/login');
});
