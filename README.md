<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>




## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Ejectuar en desarrollo

1. Clonar repositorio
2. Ejectuar
```
$ yarn install
```
3. Instalar NestJS
```
$ npm i -g @nestjs/cli
```
4. Levantar la DB
```
$ docker-compose up -d
```
5. Clonar archivo  ```.env.template``` y renombrar la copia a ```.env```

6. Llenar las variables de entorno definida en el ```.env```

7. Running app y luego reconstruir data de la DB
```
http://localhost:3000/api/v2/seed
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stack

* NestJs
* MongoDB
