# Playwright E2E 自動テストプロジェクト

このリポジトリは、Playwright と TypeScript を使用した E2E（End-to-End）テストプロジェクトです。  
保守性と拡張性を重視し、Page Object Model（POM）を採用しています。

---

## ■ プロジェクトの目的

- UI の一連の操作（ログイン〜購入完了）を自動化する  
- テストコードと画面操作ロジックを分離し、保守性を高める  
- 再利用性の高い E2E テストの構造を提示する  

---

## ■ 使用技術

- Playwright  
- TypeScript  
- Page Object Model（POM）

---

## ■ フォルダ構成

my-playwright2/
├── tests/
│ └── e2e.spec.ts // E2Eテスト本体
├── pages/
│ ├── LoginPage.ts // ログインページ
│ ├── InventoryPage.ts // 商品一覧ページ
│ └── CheckoutPage.ts // チェックアウトページ
├── playwright.config.ts
└── package.json

yaml
コードをコピーする

---

## ■ テスト内容（例：正常系購入フロー）

1. ログインページにアクセス  
2. 標準ユーザーとしてログイン  
3. 商品（バックパック、バイクライト）をカートに追加  
4. カート画面へ移動  
5. チェックアウト情報を入力  
6. 購入完了画面を確認  

この流れを Page Object Model を用いて自動化しています。

---

## ■ インストール

```bash
npm install
npx playwright install
■ テスト実行方法
すべてのテストを実行：

bash
コードをコピーする
npx playwright test
ブラウザを表示しながら実行：

bash
コードをコピーする
npx playwright test --headed
レポートを表示：

bash
コードをコピーする
npx playwright show-report
■ Page Object Model（POM）について
本プロジェクトでは POM を使用し、テストコードから UI の詳細を排除しています。

テストコードは「何をテストするか」を記述

ページごとの操作は pages ディレクトリに定義

UI が変更されても対象ページのクラスを修正するだけで対応可能

これにより、保守性・可読性の高い E2E テストを書くことができます。

■ 今後の拡張（任意）
異常系テストの追加

API テストとの統合

モバイルブラウザでの動作確認

テストデータ管理方法の改善

■ 補足
このリポジトリは、自動テストの学習・実践・ポートフォリオ用として構築しています。
Playwright を使用したテスト設計や Page Object Model の理解を深めることを目的としています。

👤 作成者

衞藤 龍一（Ryuichi Eto）
自動化テスト・API テスト・負荷試験に強みがあります。
E2E テスト・API 設計書を用いた品質改善を得意とします。
