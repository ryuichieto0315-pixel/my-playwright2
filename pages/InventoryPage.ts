// pages/InventoryPage.ts
import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // 商品追加
  async addBackpack() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async addBikeLight() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  // カート画面へ
  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  // チェックアウト画面へ（テスト本体から移動）
  async goToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
