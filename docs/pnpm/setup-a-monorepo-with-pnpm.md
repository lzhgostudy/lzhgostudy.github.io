# Setup a Monorepo with PNPM workspaces

In this article we're going to have a deep dive into setting up a new monorepo using PNPM workspaces that hosts a Vue application. We will learn how to run commands with PNPM, how to run them in parallel.

## Initialize new PNPM workspace

To get started, let's make sure you have PNPM installed. The [official docs have an installation page](https://pnpm.io/installation) with detailed instructions.


Let's create a new folder named `pnpm-mono`, cd into it and then run `pnpm init` to generate a top-level `package.json`. This will be the root `package.json` for our PNPM monorepo.

```bash
mkdir pnpm-mono
cd pnpm-mono
pnpm init
```

## Setting up the Monorepo structure

The structure of a monorepo might vary depending on what you plan to use it for. In this article we're going to demonstrate how we can have an application that consumes packages from within the monorepo.

Create an `apps` and `packages` folder within `pnpm-mono`:

```bash
mkdir apps packages
```
Now let's configure PNPM to properly recognize the monorepo workspace. Basically we have to create a `pnpm-workspace.yaml` file at the root of the repository, defining our monorepo structure:

```yml
packages:
  - apps/*
  - packages/*
```

## Adding a Vue application

We should now be ready to add our first application. I picked Vue for this example:

```bash
cd apps
pnpm create vite my-vue3-app --template vue-ts
```

You should have now a Vue3 app, within the `apps/my-vue3-app` folder or whatever name you chose. Vue3 has already a `package.json` with corresponding scripts configured: 

```json
{
  "name": "my-vue3-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  ...
}
```

Usually, in a monorepo you want to run commands from the root of the repository to not have to constantly switch between folders. PNPM workspaces have a way to do that, by passing a `filter` argument, like:

```bash
pnpm --filter <package-name> <command>
```

You sholud now be able to serve your Vue App in dev-mode by using:

```bash
pnpm --filter my-vue3-app dev
```

![](/public/pnpm/vue3-startup.png)

## Create a Shared UI library

Now that we have our app set up, let's create a library package that can be consumed by our application.

::: code-group
```bash [Vue3]
cd packages
pnpm create vite shared-ui-vue3 --template vue-ts
```
:::

Now, we have a `package.json` with the following content:

::: code-group
```json [Vue3]
{
  "name": "shared-ui-vue3",
  "private": true,
  "version": "0.0.0", // [!code --]
  "type": "module",
  "main": "lib/shared-ui-vue3.js",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.0",
    "vue-tsc": "^1.0.24"
  }
}
```
:::

Note, we declare it as `private` because we don't want to publish it to NPM or somewhere else, but rather just reference and use it locally within our workspace. I also removed the `version` property since it is not used.

Our first component will be a very simple `Button` component. So let's create one:

::: code-group
```vue [Vue3]
// packages/shared-ui-vue3/src/components/Button.vue
<script setup lang="ts" name="Button">

import { ref } from 'vue'

const count = ref(0)
</script>

<template>
<button style="background-color: purple" @click="count++">
  You clicked me {{ count }} times.
</button>
</template>
```
:::

We also want to have a public API where we export components to be used outside of our `shared-ui` package:

::: code-group
```ts [Vue3]
// packages/shared-ui-vue3/src/index.ts
import Button from "./components/Button.vue";

Button.install = (Vue: any) => {
  Vue.component(Button.__name, Button)
}

export { Button };

const components = [Button];

const install = function (Vue: any) {
  components.forEach((item) => {
    Vue.component(item.__name, item);
  })
}

export default {
  install,
}
```
:::

Next, we just use the Vite to compile our package. The `vite.config.ts` file with the following configuration:

::: code-group
```ts [Vue3]
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path"; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: { // [!code ++]
    outDir: "lib", // [!code ++]
    lib: { // [!code ++]
      entry: resolve(__dirname, "src/index.ts"), // [!code ++]
      name: "SharedUI", // [!code ++]
      fileName: "shared-ui-vue3", // [!code ++]
    }, // [!code ++]
    rollupOptions: { // [!code ++]
      external: ["vue"],// [!code ++]
      output: {// [!code ++]
        globals: {// [!code ++]
          vue: "Vue",// [!code ++]
        },// [!code ++]
      },// [!code ++]
    },// [!code ++]
  },// [!code ++]
});

```
:::

As you can see the `outDir` points to a `lib` folder. So we should add a main entry point in the `shared-ui-vue3` package's `package.json`:

```json
{
  "name": "shared-ui-vue3",
  "private": true,
  "type": "module",
  "main": "lib/shared-ui-vue3.js", // [!code ++]
}
```

Finally, use the following command to run the build from the root of the PNPM workspace:

```bash
pnpm -F shared-ui-vue3 build
```

If the build succeeds, you should see the compiled output in the `packages/shared-ui-vue3/lib` folder.

## Consuming our shared-ui package from the apps

Our `shared-ui` library is ready so we can use it in the application hosted within the `apps` folder of our repository. We can add the dependency to app's `package.json` by PNPM:

```bash
pnpm -F my-vue3-app add shared-ui-vue3 --workspace
```

This adds it to the dependency in the `apps/my-vue3-app/package.json`:

```json
{
  "name": "my-vue3-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "dependencies": {
    "shared-ui-vue3": "workspace:*", // [!code ++]
  },
  ...
}
```

`workspace:*` denotes that the package is resolved locally in the workspace, rather than from some remote registry(such as NPM). The `*` simply indicates that we want to depend on the latest version of it, rather than a specific one. 

To use our `Button` component we now import it from `App.vue`.

::: code-group
```vue [Vue3]
// apps/my-vue3-app/src/App.vue
<script setup lang="ts">

import HelloWorld from './components/HelloWorld.vue'
import { Button } from "shared-ui-vue3" // [!code focus]
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Button /> // [!code focus]
  <HelloWorld msg="Vite + Vue" />
</template>
```
:::

If you now run the app again you should see the button being rendered.

```bash
pnpm -F my-vue3-app dev
```

::: tip Reference
[Setup a Monorepo with PNPM workspaces and speed it up with Nx!](https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e)
:::