# 创建 Vue 应用程序

## 应用实例

每个 Vue 应用程序都首先创建一个新的应用程序实例：

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

## 根组件

每个应用程序都需要一个“根组件”，该组件可以包含其他组件作为其子组件。

如果我们使用单文件组件，我们通常从另一个文件导入根组件：

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

## 安装应用程序

应用程序实例在调用其方法之前不会呈现任何内容`.mount()`。它需要一个“容器”参数，该参数可以是实际的 DOM 元素或选择器字符串：

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

应用程序根组件的内容将在容器元素内呈现。容器元素本身不被视为应用程序的一部分。

`mount`应始终在完成所有应用程序配置和资产注册后调用该方法。另请注意，与资产注册方法不同，它的返回值是根组件实例而不是应用程序实例。

## 多个应用程序实例

您不限于同一页面上的单个应用程序实例。该 API 允许多个 Vue 应用程序在同一页面上共存，每个应用程序都有自己的配置范围：

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