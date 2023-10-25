# `v-model` 在 Vue2 和 Vue3 中的区别

## Vue 2

Vue2 中的 `v-model`，它主要用于表单元素和自定义组件上。`v-model` 本质上是一个语法糖，会对用户的输入做一些特殊处理以达到更新数据，而所谓的处理其实就是给使用的元素默认绑定属性和事件。

当 `<input type="text">文本` 和 `<textarea>` 上使用时，会默认给元素绑定名为 `value` 的 `prop` 和名为 `input` 的事件；
当 `<input type="checkbox">` 复选框 和 `<input type="radio">` 单选框 上使用时，会默认绑定名为 `checked` 的 `prop` 和名为 `change` 的事件；
当 `<select>选择框` 上使用时，则绑定名为 `value` 的 `prop` 和名为 `change` 的事件。

这些是 Vue 默认帮我们处理的，可以直接使用。但是你也会发现一些第三方组件也可以使用 `v-model` ，比如 Element 中的 `Input` 组件。这是因为这些组件自己实现了 `v-model`，原理其实就是上面说到的绑定属性和事件。

我们可以尝试实现一下 `v-model`，来开发一个简单的输入组件 `MyInput`

```vue
<template>
  <div>
    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: String,  // 默认接收一个名为 value 的 prop
  }
}
</script>
```

上面代码就实现了组件的 `v-model` 功能，当在这个组件上使用 `v-model` 时：

```html
<my-input v-model="msg"></my-input>
```

其实就等同于：

```html
<my-input :value="msg" @input="msg = $event">
```

Vue 还提供了 `model` 选项，用于将属性或事件名称改为其他名称，比如上面的 `MyInput` 组件，我们改一下：

```html
<template>
  <div>
    <input
      type="text"
      :value="title"
      @input="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "title", // 将默认的 prop 名 value 改为 title
    event: "change", // 将默认的事件名 input 改为 change
  },
  props: {
    title: String, // 注意 template 代码中也要修改为 title
  },
};
</script>
```

此时使用组件：

```html
<my-input v-model="msg"></my-input>

<!-- 等同于 -->
<my-input :title="msg" @change="msg = $event"></my-input>

```

### 使用 `.sync` 修饰符

Vue 提供一个 `.sync` 的修饰符，效果跟 `v-model` 一样，也是便于子组件数据更改后自动更新父组件相关数据。实现 `.sync` 的方式与实现 v-model 异曲同工，区别就是抛出的事件名需要是 `update:myPropName` 的结构。

还是拿上面的 `MyInput` 说明，我们还是传入一个 `title` 的 `prop`，同时组件内部抛出 `update:title` 事件，代码如下：

```html
<!-- MyInput 组件中，修改抛出的事件名为 update:title -->
 <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
```

此时如果使用这个组件，正常应该是这样：

```html
<my-input :title="msg" @update:title="msg = $event"></my-input>
```

但此时可以使用 `.sync` 修饰符来简化：

```html
<my-input :title.sync="msg"></my-input>
```

可以看到 `.sync` 和 `v-model` 所能达到的效果是一样的，用什么就看你什么场景，一般表单组件上都是用 `v-model`。

## Vue 3

上面说了那么多，为的就是接下来区别出 Vue3 中 `v-model` 带来的变化，主要变化有以下几处：

### 修改默认 prop 名和事件名

当用在自定义组件上时，`v-model` 默认绑定的 prop 名从 `value` 变为 `modelValue`，而事件名也从默认的 `input` 改为 `update:modelValue` 。在 Vue3 中编写上面那个 MyInput 组件时，就需要这样：

```html{6}
<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String, // 默认 prop 从 value 改为 modelValue
  },
};
</script>
```

用组件时：

```html
<my-input v-model="msg"></my-input>

<!-- 等同于 -->
<my-input :modelValue="msg" @update:modelValue="msg = $event"></my-input>
```

### 废除 model 选项和 .sync 修饰符

Vue3 中移除了 `model` 选项，这样就不可以在组件内修改默认 `prop` 名了。现在有一种更简单的方式，就是直接在 `v-model` 后面传递要修改的 `prop` 名：

```html
<!-- 要修改默认 prop 名，只需在 v-model 后面接上 :propName，例如修改为 title -->
<my-input v-model:title="msg"></my-input>

<!-- 等同于 -->
<my-input :title="msg" @update:title="msg = $event"></my-input>
```

注意组件内部也要修改 `props`：

```vue
<template>
  <div>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // 此时这里不需要 model 选项来修改了
  props: {
    title: String, // 修改为 title，注意 template 中也要修改
  },
};
</script>
```

同时，`.sync` 修饰符也被移除了，如果你尝试使用它，会报这样的错误：

::: danger 报错
'.sync' modifier on 'v-bind' directive is deprecated. Use 'v-model:propName' instead
:::

错误提示中说明了，可以使用 `v-model:propName` 的方式来替代 `.sync`，因为本质上效果是一样的。

### 使用多个 v-model

Vue3 中支持使用多个 `v-model`，属于新增功能，我很喜欢这个功能，使得组件数据更新更灵活。例如有这样一个表单子组件，用户输入的多个数据都需要更新到父组件中显示，可以这样写：

```html
<!--  表单子组件 Form -->

<template>
  <div class="form">
    
    <label for="name">姓名</label>
    <input id="name" type="text" :value="name" @input="$emit('update:name',$event.target.value)">
    
    <label for="address">地址</label>
    <input id="address" type="text" :value="address" @input="$emit('update:address',$event.target.value)">
  
  </div>
</template>

<script>
export default {
  props:{
    name: String,
    address: String
  }
}
</script>
```

父组件使用这个组件时：

```vue
<child-component v-model:name="name" v-model:address="address"></child-component>
    
<!-- 将用户输入数据更新到父组件中显示 -->
<p>{{name}}</p>
<p>{{address}}</p>
```