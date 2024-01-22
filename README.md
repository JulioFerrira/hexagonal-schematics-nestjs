## Description

Nest base project with a schematic for hexagonal architecture configured.

## Prerequisites

Use node 18.13.0

## Installation

```bash
$ yarn install
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

## Generate a hexagonal base module

```bash
$ npx @angular-devkit/schematics-cli ./schematics:hexagonal-module --debug=false
```

Then you must enter the name of the module you want to generate.
