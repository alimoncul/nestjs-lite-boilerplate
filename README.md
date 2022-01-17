## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript Lite Boilerplate.

## Installation

```bash
$ yarn install
```

Copy .env.example to .env and update the environments

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# debug mode
Launch Debug Debug NestJS Lite Boilerplate task

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

```bash

# build image
$ sudo docker build -t IMAGE_NAME .

# run image
$ sudo docker run -d -p 80:80 --env-file ./env.list IMAGE_NAME #--env-file ./env.list optional

```
