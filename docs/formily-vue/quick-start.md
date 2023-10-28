# 快速开始

## 安装

vue3:

```bash
npm install --save @formily/core @formily/vue
```

vue2:

```bash
npm install --save @formily/core @formily/vue @vue/composition-api
```

## 🌰 Vue 2 + element-ui

![](/formily-vue/quick-start/1.png)

### Template 开发模式

::: code-group
```vue [template.vue]
<script>
import Vue from "vue";
import { Input as _Input, FormItem as _FormItem } from "element-ui";
import { createForm } from "@formily/core";
import { 
  FormProvider, 
  FormConsumer,
  Field,
  connect,
  mapProps,
} from "@formily/vue";
import { transformComponent } from "./transform-component";

// 为适配 Formily 接口规范，先对 el-input 进行转换
const TransformInput = transformComponent(_Input);

// 通过 formily-vue 这层胶水把 el-input 桥接上
const Input = connect(
  TransformInput,
  mapProps(
    {
      readOnly: 'readonly'
    },
  )
);

// el-form-item 如此类推，绑定 Field 模型中需要消费的属性：required, title
const FormItem = connect(
  _FormItem,
  mapProps(
    {
      required: true,
      title: 'label',
    }
  )
);

export default Vue.extend({
  components: {
    FormProvider,
    FormConsumer,
    Field,
  },
  data: () => {
    const form = createForm();

    return {
      form,
      Input,
      FormItem,
    }
  },
})

</script>
<template>
<FormProvider :form="form">
  <ElForm label-width="100px" size="small">
    <Field
      name="username"
      title="用户名"
      required
      :decorator="[FormItem]"
      :component="[Input, { placeholder: '请输入用户名' }]"
    ></Field>
    <Field
      name="password"
      title="密码"
      required
      :decorator="[FormItem]"
      :component="[Input, { type: 'password', placeholder: '请输入密码' }]"
    ></Field>
    <Field
      name="confirm_password"
      title="确认密码"
      required
      :decorator="[FormItem]"
      :component="[Input, { type: 'password', placeholder: '请输入密码' }]"
    ></Field>
  </ElForm>

  <FormConsumer>
    <template #default="{ form }">
      <div style="white-space: pre">
        {{ JSON.stringify(form.values, null, 2) }}
      </div>
    </template>
  </FormConsumer>
</FormProvider>
</template>
```

```ts [transform-component.ts]
/**
 * el-input 是基于 value 和input 事件来实现双向绑定，
 * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配
 * 
 * @URL https://github.com/alibaba/formily/issues/1583
 */
import Vue, { type Component } from "vue";

export const transformComponent = <T extends Record<string, any>>(
  tag: any,
): Component<T> | any => {
  return Vue.extend({
    render(h) {
      const data = {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
      };

      data.on.input = this.$listeners.change;

      return h(tag, data, this.$slots.default)
    }
  })
}
```
:::

### JSON Schema 开发模式

::: code-group
```vue [json-schema.vue]
<script lang="ts">
import Vue from "vue";
import FormItem from "./FormItem";
import Input from "./Input";
import { createForm } from "@formily/core";
import { 
  createSchemaField, 
  FormProvider,
  FormConsumer
} from "@formily/vue";

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});
 
export default Vue.extend({
  components: {
    SchemaField,
    FormProvider,
    FormConsumer
  },
  data: () => {
    return {
      form: createForm(),
      schema: {
        type: "object",
        properties: {
          username: {
            type: 'string',
            title: '用户名',
            required: true,
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            'x-component-props': {
              placeholder: '请输入用户名'
            },
          },
          password: {
            type: 'string',
            title: '密码',
            required: true,
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            'x-component-props': {
              type: 'password',
              placeholder: '请输入密码'
            },
          },
          confirm_password: {
            type: 'string',
            title: '确认密码',
            required: true,
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            'x-component-props': {
              type: 'password',
              placeholder: '请输入密码'
            },
          },
        }
      }
    }
  }
})
</script>
<template>
<FormProvider :form="form">
  <ElForm label-width="100px" size="small">
    <SchemaField :schema="schema"></SchemaField>
  </ElForm>
  <FormConsumer>
    <template #default="{ form }">
      <div style="white-space: pre">
        {{ JSON.stringify(form.values, null, 2) }}
      </div>
    </template>
  </FormConsumer>
</FormProvider>
</template>
```

```ts [transform-component.ts]
/**
 * el-input 是基于 value 和input 事件来实现双向绑定，
 * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配
 * 
 * @URL https://github.com/alibaba/formily/issues/1583
 */
import Vue, { type Component } from "vue";

export const transformComponent = <T extends Record<string, any>>(
  tag: any,
): Component<T> | any => {
  return Vue.extend({
    render(h) {
      const data = {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
      };

      data.on.input = this.$listeners.change;

      return h(tag, data, this.$slots.default)
    }
  })
}
```

```ts [Input.ts]
import { connect, mapProps } from "@formily/vue";
import { Input as ElInput } from "element-ui";
import { transformComponent } from "./transform-component";

const transformInput = transformComponent(ElInput);

const Input = connect(
  transformInput,
  mapProps({ readOnly: "readonly" }),
);

export default Input;
```

```ts [FormItem.ts]
import {  connect, mapProps } from "@formily/vue";
import { FormItem as ElFormItem } from "element-ui";

export const FormItem = connect(
  ElFormItem,
  mapProps({ 
    title: "label",
    required: true,
  }),
);

export default FormItem;
```
:::