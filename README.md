# オタクの履歴書

![オタクの履歴書](https://user-images.githubusercontent.com/53213591/197217543-62292366-f905-4b88-b64a-9ba75385324b.png)

## 製品概要
### 背景(製品開発のきっかけ、課題等）
### 製品説明（具体的な製品の説明）
### 特長
#### 1. 特長1
#### 2. 特長2
#### 3. 特長3

### 解決出来ること
### 今後の展望
### 注力したこと（こだわり等）
* 投稿時などの、使って楽しいUIとアニメーション
* アーティスト情報をSpotify APIを利用して取得して、使いやすいUXを作成
* GraphQLのスキーマからTypeScriptの型やhooksの自動生成

## 開発技術
### 活用した技術
#### API・データ
* Spotify API
* Maps JavaScript API
* Geocoding API
* Geolocation API
* Places API

#### フレームワーク・ライブラリ・モジュール
* フロント： TypeScript / React / Next.js / Tailwind.css / GraphQL Code Generator
* バックエンド： hasura / PostgreSQL 
* その他： Github Actions / Firebase (auth, storage) / Vercel / 

<img src="https://user-images.githubusercontent.com/53213591/197212562-ad7ccc77-f6e4-4b2e-9b16-1f5c70f659fd.png" width="600"/>

### 独自技術
#### ハッカソンで開発した独自機能・技術
* 独自で開発したものの内容をこちらに記載してください
  * **アーティスト入力時のサジェスト機能の開発**https://github.com/jphacks/F_2203/commit/42abf22791bd3948d4a261eb2e2699dc0fc4f60a <br/>
入力文字の変更を検知してSpptify APIにリクエストを投げ、取得したデータを選択肢として表示するサジェスト機能を作りました。
<img src="https://user-images.githubusercontent.com/53213591/197169672-2b70ab34-0cbf-4ddb-af3c-547eb6217be9.gif" width="500"/>

<br/>
<br/>

* 特に力を入れた部分をファイルリンク、またはcommit_idを記載してください。

**登録された情報をマップ上に表示** <br/>
登録された位置情報に基づきマップ上に情報を表示するコンポーネントの開発。

https://github.com/jphacks/F_2203/commit/7dfb8f00a1b133b69c2363d7786d3f358015569c
https://github.com/jphacks/F_2203/commit/3913718410bd840490f23cc8f7ea65606be6760b
<img src="https://user-images.githubusercontent.com/53213591/197174512-ba7283f4-d022-4948-8ea6-72cad9493dd8.gif" width="500"/>

**登録時のUI** <br/>
登録したときに表示されるUIの作成。
アーティストの画像や名前の表示はSpotify APIにリクエストを投げて取得したデータを表示しています。

https://github.com/jphacks/F_2203/blob/development/packages/frontend/src/pages/new.tsx
<img src="https://user-images.githubusercontent.com/53213591/197174792-920db7a1-c9fb-4ea4-88f1-301ecaf8c063.gif" width="500"/>


#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）
* 
* 

---

## 開発
### パッケージ構成
```
packages/
  ├─ frontend/  クライアントサイド
  └─ server/ サーバーサイド
```
### 環境構築
それぞれのパッケージのREADMEを参照してください。
- [frontend README](https://github.com/jphacks/F_2203/tree/development/packages/frontend#readme)
- [backend README](https://github.com/jphacks/F_2203/tree/development/packages/server)


  
