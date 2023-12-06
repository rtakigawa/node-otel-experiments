# node-otel-experiments

## Setup

```sh
docker compose up -d

npm install && npm run db && npm start
```

## Call API

```sh
curl http://localhost:8080/todo
```

## Open Jaeger UI

```sh
open http://localhost:16686
```
