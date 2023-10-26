# 避免 API 重复请求

::: tip 前置知识
[在 Vue.js 中管理 API 层](/vue/managing-api-layers)
:::

众所周知，每个系统，普遍存在静态数据，这些数据是相对不变的，很少更新，但通常会频繁被查询或用于显示在应用程序中。省市区列表数据是一个很好的例子，其他类似的数据可能包括国家列表、货币列表、时区列表等。由于这些数据的不变性，它们通常会被缓存以提高应用程序性能，并减少对后端服务器的不必要请求。

## API 类（改造前）

::: code-group
```ts [Common.class.ts]
export class Common {
  /** 获取省市区列表 */
  async region() {
    const { data } = await axiosClient.get(`/region`);
    return data;
  }
}
```
:::

## 通过 static 共享数据

::: code-group
```ts [Common.class.ts]
export class Common {

  static _region: any[] | null = null;

  /** 获取省市区列表 */
  async region() {
    if (Common._region) {
      return Common._region;
    } else {
      const { data } = await axiosClient.get(`/region`);
      Common._region = data;
      return data;
    }
  }
}
```
:::