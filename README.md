## Playwright E2E 自動テストプロジェクト

このリポジトリは、Playwright と TypeScript を使用した E2E（End-to-End）テストプロジェクトです。
保守性・拡張性を重視し、Page Object Model（POM）を採用しています。

\
■ プロジェクトの目的

・UI の一連の操作（ログイン〜購入完了）を自動化する

・テストコードと画面操作ロジックを分離し、保守性を高める

・再利用性の高い E2E テスト構造を提示する

\
■ 使用技術

・Playwright

・TypeScript

・Page Object Model（POM）

\
■ フォルダ構成
```
my-playwright2/
├── tests/
│   └── e2e.spec.ts          // E2E テスト本体
├── pages/
│   ├── LoginPage.ts         // ログインページ
│   ├── InventoryPage.ts     // 商品一覧ページ
│   └── CheckoutPage.ts      // チェックアウトページ
├── playwright.config.ts
└── package.json
```


\
■ テスト内容（正常系：購入フロー）

1. ログインページにアクセス

1. 標準ユーザーとしてログイン

1. 商品をカートに追加

1. カート画面へ移動

1. チェックアウト情報を入力

1. 購入完了画面を確認

この流れを Page Object Model を用いて自動化しています。

\
■ インストール
```bash
npm install
npx playwright install
```

\
■ テスト実行方法
すべてのテストを実行
```bash
npx playwright test
```

ブラウザを表示しながら実行
```bash
npx playwright test --headed
```

レポートを表示
```bash
npx playwright show-report
```

\
■ Page Object Model（POM）について

本プロジェクトでは POM を採用し、テストコードから UI の詳細操作を切り離しています。

テストコード：何をテストするか

Page クラス：UI 操作・要素定義を担当

UI が変更されても Page クラスのみ修正するだけで対応可能となるため、
保守性・再利用性・可読性が向上します。

\
■ 補足

このリポジトリは、自動テストの学習・実践・ポートフォリオ用として構築しています。
Playwright を用いたテスト設計や POM の理解を深めることを目的としています。

\
👤 作成者

衞藤 龍一（Ryuichi Eto）

・自動化テスト（Playwright / TypeScript）

・API テスト

・負荷試験（JMeter）
などを学習・実践しています。
