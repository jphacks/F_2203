## Set up

まずは環境変数ファイルを設定してください

```
server/.env
server/hasure/.env.dev
```

開発環境立ち上げ

1. docker 起動

```bash
docker-compose up --build
```

2. hasura 起動

```bash
npx hasura console --envfile .env.dev
```

3. 2が失敗した場合
```bash
yarn
hasura console --envfile .env.dev
```


http://localhost:9695/ にアクセス
