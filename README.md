my-playwright

自動 E2E テスト環境（Playwright）
求職者向けポートフォリオ

📌 プロジェクト概要

このリポジトリは、Playwright を使用した E2E（End-to-End）テストのサンプルプロジェクトです。
Web UI の動作確認・API のテスト・各種 CI/CD 組み込みを想定した構成 になっており、
自動化テストエンジニア / QA エンジニア / 開発エンジニア志望としての技術力を示す目的で作成しました。

🧪 主要機能 / テスト内容
1. Google の起動テスト（E2E）
import { test, expect } from '@playwright/test';

test('Google opens correctly', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

2. ログインページのテスト（例）
// tests/login.test.ts（例）

3. API の動作確認テスト（例）
// tests/api.test.ts（例）

📁 ディレクトリ構成
my-playwright/
├── playwright.config.ts
├── package.json
├── README.md  ← このファイル
└── tests/
    ├── google.spec.ts
    ├── login.test.ts
    └── api.test.ts

▶ 実行方法
1. 依存関係のインストール
npm install

2. Playwright のブラウザをインストール
npx playwright install

3. テスト実行
npx playwright test

4. HTML レポートを見る
npx playwright show-report

🛠 使用技術

Playwright（E2E テスト）

TypeScript

Node.js

GitHub Actions 対応可能な構成

🌟 工夫したポイント

テストコードは TypeScript を利用（読みやすさ・保守性向上）

E2E / API / Login の基本的なテストを網羅

GitHub の採用選考を通過するために、フォルダ構造や README を整備

実務に近い構成で、拡張性のある自動化環境 を意識して作成

🚀 今後追加予定

CI/CD（GitHub Actions）による自動テストパイプライン

API Contract テストの追加

スクリーンショットの自動保存

カバレッジ計測

パフォーマンステスト（k6 or JMeter）との連携

👤 作成者

衞藤 龍一（Ryuuichi Etoh）
自動化テスト・API テスト・負荷試験に強みがあります。
E2E テスト・API 設計書を用いた品質改善を得意とします。