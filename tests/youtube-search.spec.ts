import { test, expect } from '@playwright/test';

test('YouTubeでApexを検索できること（安定版）', async ({ page }) => {
  // YouTube を開く
  await page.goto('https://www.youtube.com/');

  // Cookie の同意ポップアップが出た場合は OK ボタンを押す
  const consentButton = page.locator('button', { hasText: /同意する|Agree|OK/i });
  if (await consentButton.isVisible({ timeout: 3000 }).catch(() => false)) {
    await consentButton.click();
  }

  // 検索ボックスを取得（combobox は不安定なので stable selector に変更）
  const searchBox = page.locator('input#search');

  await searchBox.fill('Apex');
  await searchBox.press('Enter');

  // 結果が表示されるまで待機
  await page.waitForSelector('ytd-video-renderer', { timeout: 10000 });

  // 最初のタイトル取得
  const firstTitle = await page
    .locator('ytd-video-renderer')
    .first()
    .locator('#video-title')
    .innerText();

  console.log('検索結果の最初のタイトル:', firstTitle);

  expect(firstTitle.length).toBeGreaterThan(0);
});
