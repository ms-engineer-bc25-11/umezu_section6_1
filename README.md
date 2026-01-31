# 管理画面付きのポートフォリオ（section6_1）

## 目次

- [概要](#概要)
- [使用技術](#使用技術)
- [ディレクトリ構成](#ディレクトリ構成)

## 概要

section6課題の管理画面付きのポートフォリオです。

## 使用技術

### フロントエンド

- Next.js(App router)
- TypeScript
- TailwindCSS

### バックエンド

- Express.js
- Prisma

### データベース

- MySQL

## ディレクトリ構成

## 命名規則

### 基本ルール

- **フォルダ・ファイル名**: `kebab-case` (例: `user-profile.tsx`)
- **コンポーネント名**: `PascalCase` (例: `UserCard`)
- **変数・関数名**: `camelCase` (例: `getUserData`)
- **定数**: `UPPER_SNAKE_CASE` (例: `API_ENDPOINT`)

### 意味の明確化

- データの取得は `get`、更新は `update`、削除は `delete` を接頭辞に使用します。
- 真偽値(Boolean)は `is`, `has`, `can`, `should` のいずれかを頭に付けます。
- 配列（リスト）には複数形（s）を用い、単数形と明確に区別します。

プロジェクトの概要説明
サービスのスクリーンショット画像 or GIFアニメ（デモ）
必要条件
使用言語、環境、テクノロジー
システム構成図
使い方
インストール方法
テスト方法
デプロイ方法
こだわりポイント
ライセンス情報
今後の計画
