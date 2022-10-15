## Set up

まずは環境変数ファイルを設定してください

```
server/.env
server/hasure/.env.dev
```

開発環境立ち上げ

1. docker 起動

```bash
docker-compose up
```

2. hasura 起動

```bash
cd hasura
npx hasura console --envfile .env.dev
```


http://localhost:9695/ にアクセス
