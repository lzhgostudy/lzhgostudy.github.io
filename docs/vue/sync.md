# `.sync` 使用指南 

vue的子组件不能直接使用父组件的数据，所以我们需要用到prop传递数据，但是，子组件能不能直接修改父组件的数据呢？

按照官方文档的示例：[监听子组件事件](https://v2.cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6) 我们得知vue通过自定义事件系统来帮助我们修改父组件上的数据。

通过 api `$emit` 我们可以在子组件上面修改父组件上面的数据，例如，在子组件上触发一个自定义事件，并传递一个自定义事件：

```html
<div @click="$emit('something')"></div>
```

在父组件的子组件器上使用 `v-on` 监听这个自定义事件

```html
<child :num='num' v-on:something='num += 1' />
```

通过以上方式可以让子组件修改父组件上的数据。

我们接下来分析`$emit`这个api

## `$emit`

`$emit` 共接收2个参数

1. `eventName` 触发当前实例上的事件名称
2. `[...args]` 附加参数都会传给监听器回调

我们需要在子组件上调用`$emit`，然后在父组件上监听这个自定义事件，`$emit` 的附加参数，可在事件回调函数里获取到

::: code-group
```vue [child.vue]
<script>
Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
})
</script>
<template>
<button @click="$emit('update:visible', !visible)">
  {{ visible ? '显示' : '隐藏' }}
</button>
</template>
```

```vue [parent.vue]
<script>
Vue.extend({
  data: () => ({
    show: false,
  })
})
</script>
<template>
<child :visible="show" v-on:update:visible="show = $event" />
</template>
```
:::

## 简写：`.sync`

上面的代码一共进行了两个步骤：

1. 父组件上的字组件监听自定义事件并让 `show` 等于传递过来的 `$event` 
   
    👉🏻 `v-on:update:visible="show = $event"`

2. 子组件内的代码点击后触发自定义事件并传递一个参数，参数为 `!visible` 
   
    👉🏻 `@click="$emit('update:visible', !visible)"`

::: tip 提问
Q: **那么，我们可以不可以简化代码呢？**

A: vue很贴心地为我们做了相关工作，那就是`.sync`修饰符
:::

在父组件上告诉子组件传递过去的 `visible` 跟父组件上的 `show` 保持同步，相当于 `show` 允许被修改

```html
<child :visible.sync="show" />
```

::: danger 重要
使用`.sync`后写法需要注意的是：`eventName`只能采用 **update:传递过来的prop属性** 的方式才行。
:::