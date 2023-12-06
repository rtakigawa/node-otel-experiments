# node-otel-experiments

## run database

```sh
docker run \
    --name postgres \
    -d \
    --rm \
    -e POSTGRES_PASSWORD=password \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v (pwd)/temp:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres
```

## call api

### POST

```sh
curl \
    -X POST \
    -H 'Content-Type: application/json' \
    -d '{"title": "book flight to tokyo", "description": "due date is this weekend."}' \
    http://localhost:8080/todo \
```

### GET list

```sh
curl http://localhost:8080/todo
```

### GET by id

```sh
curl http://localhost:8080/todo/:id
```

### PUT

```sh
curl \
    -X PUT \
    -H 'Content-Type: application/json' \
    -d '{"title": "book flight to saitama", "description": "due date is next weekend."}' \
    http://localhost:8080/todo/:id
```
