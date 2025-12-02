import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

/**
 * 正常系購入フロー（標準ユーザー）
 * - ログイン
 * - 商品追加（バックパック、バイクライト）
 * - カート → チェックアウト
 * - 個人情報入力 → 完了
 */
test('正常系 E2E（POM版）', async ({ page }) => {
  const login = new LoginPage(page);
  const inv = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inv.addBackpack();
  await inv.addBikeLight();
  await inv.goToCart();

  await inv.goToCheckout();

  await checkout.checkoutInfo('QA', 'Taro', '1234567');
  await checkout.finish();

  await checkout.verifyComplete();
});
