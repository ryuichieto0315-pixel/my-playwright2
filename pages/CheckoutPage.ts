// pages/CheckoutPage.ts
import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ユーザー情報入力
  async checkoutInfo(firstName: string, lastName: string, postal: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postal);
    await this.page.locator('[data-test="continue"]').click();
  }

  // 購入完了
  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  // 完了画面の検証（e2e.spec.ts からここに移動）
  async verifyComplete() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}
