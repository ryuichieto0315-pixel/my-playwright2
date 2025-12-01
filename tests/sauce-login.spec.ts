import { test, expect } from '@playwright/test';

test('正常系 E2E: ログイン → 商品追加 → チェックアウト → 完了', async ({ page }) => {

  // 1. ログインページ
  await page.goto('https://www.saucedemo.com/');

  // 2. 正しいユーザーでログイン
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. 商品を2つカートに入れる
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // 4. カートへ移動
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 5. チェックアウト開始
  await page.locator('[data-test="checkout"]').click();

  // 6. 購入者情報入力
  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Taro');
  await page.locator('[data-test="postalCode"]').fill('1234567');
  await page.locator('[data-test="continue"]').click();

  // 7. 注文確定
  await page.locator('[data-test="finish"]').click();

  // 8. 完了ページの確認
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
