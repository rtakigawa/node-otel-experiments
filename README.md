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

## run Jaeger

```sh
docker run --rm \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 9411:9411 \
  jaegertracing/all-in-one:latest
```

## call api

```sh
curl http://localhost:8080/todo
```
