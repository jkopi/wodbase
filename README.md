# wodbase

## Development

- Start postgres database in docker

```shell
pnpm docker
```

```shell
# start API
pnpm start:api

# start client app
pnpm start:client
```

## Adding dependencies

```shell
pnpm add --filter wodbase-(api/client) <package to install>
```
