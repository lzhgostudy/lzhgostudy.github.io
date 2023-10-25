# Creating a Vue Application

## The application instance

Every Vue application starts by creating a new application instance:

::: code-group
```ts [Vue2]
import Vue from "vue";

const app = new Vue({
  /** VueConstructor params */
})
```

```ts [Vue3]
import { createApp } from "vue";

const app = createApp({
  /** root component options */
})
```
:::

## The Root Component

Every app requires a "root component" that can contain other components as its children.

If we are using Single-File Components, we typically import the root component from another file:

::: code-group
```ts [Vue2]
import Vue from "vue";
// import the root component App from a single-file component.
import App from './App.vue'

const app = new Vue({
  render: (h) => h(App)
});
```

```ts [Vue3]
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
```
:::

## Mounting the App

An application instance won't render anything util its `.mount()` method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string:

```html
<div id="app"></div>
```

::: code-group
```ts [Vue2]
app.$mount("#app")
```

```ts [Vue3]
app.mount("#app")
```
:::

The content of the app's root component will be rendered inside the container element. The container element itself is not considered part of the app.

The `mount` method should always be called after all app configuration and asset registrations are done. Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance.

## Multiple application instances

You are not limited to a single application instance on the same page. The API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets:

::: code-group
```ts [Vue2]
import Vue from "vue"

const app1 = new Vue({
  /** ... */
});
app1.$mount('#container-1')

const app2 = new Vue({
  /** ... */
});
app2.$mount('#container-2')
```

```ts [Vue3]
import { createApp } from 'vue';

const app1 = createApp({
  /** ... */
});
app1.mount('#container-1');

const app2 = createApp({
  /** ... */
});
app2.mount('#container-2');
```
:::