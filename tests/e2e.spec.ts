import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('正常系 E2E（POM版）', async ({ page }) => {
  const login = new LoginPage(page);
  const inv = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inv.addBackpack();
  await inv.addBikeLight();
  await inv.goToCart();

  await page.locator('[data-test="checkout"]').click();
  await checkout.checkoutInfo('QA', 'Taro', '1234567');
  await checkout.finish();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
