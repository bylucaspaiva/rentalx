# Setup Inicial Typescript + ESLint + Prettier

## Setup:
```shell
yarn init -y
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
```
# Code Standardization with ESLint and Prettier
- Install ESLint extension in VS Code
- In the VSCode settings.json file:
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## Installing ESLint
```shell
yarn add eslint -D
yarn eslint --init
```

## Installing dependencies
Example:
```shell
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```
## Create file ignore
Create file on root: .eslintignore
```
/*.js
node_modules
dist
```
## Other necessary settings
Inside env

```json
"jest": true
```

Next in extends `"extends"`:
```json
"plugin:@typescript-eslint/recommended"
```

Now, inside plugins:
```json
"eslint-plugin-import-helpers"
```

Next, in rules:

```json
"camelcase": "off",
"import/no-unresolved": "error",
"@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "interface",
    "format": ["PascalCase"],
    "custom": {
      "regex": "^I[A-Z]",
      "match": true
    }
  }
],
"class-methods-use-this": "off",
"import/prefer-default-export": "off",
"no-shadow": "off",
"no-console": "off",
"no-useless-constructor": "off",
"no-empty-function": "off",
"lines-between-class-members": "off",
"import/extensions": [
  "error",
  "ignorePackages",
  {
    "ts": "never"
  }
],
"import-helpers/order-imports": [
  "warn",
  {
    "newlinesBetween": "always",
    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
    "alphabetize": { "order": "asc", "ignoreCase": true }
  }
],
"import/no-extraneous-dependencies": [
  "error",
  { "devDependencies": ["**/*.spec.js"] }
]
```

Now to node know Typescript:
```json
"settings": {
  "import/resolver": {
    "typescript": {}
  }
}
```

To finish and apply all the changes, let's close VS Code and reopen in the root folder of the project, otherwise ESLint will not recognize the installed dependencies and apply the Linting rules.

F
# Prettier

First we install the packages on the project.
```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Now we update the .eslintc.json, on extends:
```json
"prettier",
"plugin:prettier/recommended"
```

plugins:
```json
"prettier"
```

Rules:
```
"prettier/prettier": "error"
```

## Automate conversion from typescript to javascript.

```shell
yarn add ts-node-dev -D
```

In the package.json, create a new script:
```json
"scripts" : {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
}
```

On ts.config, delete strict, because now the responsability of errors of the app belongs to typescript:
```json
// "strict": true, 
```