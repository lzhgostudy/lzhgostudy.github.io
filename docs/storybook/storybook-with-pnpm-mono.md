# Storybook with PNPM-Mono

## Initialize a new Vue application

First, create a Vue App.

::: code-group
```bash [Vue2]
pnpm create vue@2 vue2-pnpm-mono

# You weill be asked for some questions that customize the exact setup.

cd vue2-pnpm-mono
pnpm install
```

```bash [Vue3]
pnpm create vite vue3-pnpm-mono --template vue-ts

cd vue3-pnpm-mono
pnpm install
```
:::

## Install Storybook(v7 beta)

Then, `storybook init` **what is not made for empty projects.**

::: code-group
```bash [Vue2]
cd vue2-pnpm-mono
pnpm dlx storybook@next init
```

```bash [Vue3]
cd vue3-pnpm-mono
pnpm dlx storybook@next init
```
:::

Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

Depending on your framework, first, build your app and then check that everything worked by running:

::: code-group
```bash [Vue2 & Vue3]
pnpm run storybook
```
:::

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you will be greeted by a welcome screen.

![](https://storybook.js.org/0c574a42143da65f91a53764c711a10e/example-welcome.png)

## Setting up the Monorepo structure

Create a `packages` folder within the root:

::: code-group
```bash [Vue2]
mkdir vue2-pnpm-mono/packages
```

```bash [Vue3]
mkdir vue3-pnpm-mono/packages
```
:::

Also, create a `pnpm-workspace.yaml` file:

```yaml
packages:
  - packages/*
```

Removing the `version` and `name` properties in `package.json` since it is not used.

::: code-group
```json [Vue2 & Vue3]
{
  "name": "vue2-pnpm-mono", // [!code --]
  "version": "0.0.1", // [!code --]
}
```
:::

## Create a Shared UI Library

- Create a `components` package within `packages` folder and run `pnpm init` to create a `package.json` file:

::: code-group
```bash [Vue2 & Vue3]
mkdir packages/components
cd packages/comcomponents
pnpm init
```
:::

- Migrating `*.vue` and `*.css` files from `src/stories` to `packages/components` folder.
  
- Create `index.ts` file within `packages/components` folder:

```ts
export * from "./Button.vue"
export * from "./Header.vue"
export * from "./Page.vue"
```

- Changing something in `package.json` file:

::: code-group
```json [packages/components/package.json]
{
  "name": "components",
  "version": "0.0.1", // [!code --]
  "description": "",
  "main": "index.ts", // [!code ++]
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
:::


## Create Stories Library


- Migrating `stories` folder from `src` to the root directory. 
  
- Create a `package.json` by `pnpm init` in the root and then remove `version`, `main` properties in it .

- Install `components` package:

```bash
pnpm -F stores add components --workspace
```

Then the `package.json` file had been changed:

::: code-group
```json [stories/package.json]
{
  "name": "stories",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "components": "workspace:*" // [!code ++]
  }
}
```
:::

- Changing something within `*.stories.js` files from `stories` folder:

::: code-group
```js [Button.stories.js]
import MyButton from './Button.vue'; //[!code --]
import MyButton from 'components/Button.vue'; //[!code ++]
```

```js [Header.stories.js]
import MyHeader from './Header.vue'; //[!code --]
import MyHeader from 'components/Header.vue'; //[!code ++]
```

```js [Page.stories.js]
import MyPage from './Page.vue'; //[!code --]
import MyPage from 'components/Page.vue'; //[!code ++]
```
:::

Finally, run `pnpm storybook`, succeeded.