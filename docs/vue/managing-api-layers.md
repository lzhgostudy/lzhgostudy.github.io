# 在 Vue.js 中管理 API 层

## 动机

几乎每个单页应用程序在某些时候都需要从后端获取一些数据。有时有多个数据源，例如 REST API、Web Sockets 等。以正确的方式管理 API 层非常重要，这样可以使其在应用程序的任何位置简单易用，无论是存储、组件还是其他类型源文件的。

## 用户列表界面

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<el-table :data="filterTableData" style="width: 100%">
  <el-table-column label="Born" prop="date" />
  <el-table-column label="Name" prop="name" />
  <el-table-column align="right">
    <template #header>
      <el-input v-model="search" size="small" placeholder="Type to search" />
    </template>
    <template #default="scope">
      <el-button type="primary" size="small">
        Detail
      </el-button>
      <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
        Edit
      </el-button>
      <el-button 
        size="small" 
        type="danger" 
        @click="handleDelete(scope.$index, scope.row)"
      >
        Delete
      </el-button>
    </template>
  </el-table-column>
</el-table>
<el-button class="mt-4" style="width: 100%; margin-top: 10px">Add Item</el-button>

## ❌ 错误示范

::: code-group
```vue [@/components/user/UserTable.vue]
<script>
import axios from "axios";

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userList: null,
      detail: null,
    };
  },
  methods: {
    list() {
      axios
        .get(`https://api.domain.com/v1/user/list/${this.page}`)
        .then(res => {
          this.userList = res.data;
        })
        .catch(err => {
          // TODO
        })
    },
    add() {
      axios
        .post(
          "https://api.domain.com/v1/user/create",
          {
            name: "Mine",
            born: "2018-02-22",
          },
        )
        .then(res => {
          // TODO
        })
        .catch(err => {
          // TODO
        })
    },
    detail(userId) {
      axios
        .get(`https://api.domain.com/v1/user/${userId}`)
        .then(res => {
          this.detail = res.data;
        })
        .catch(err => {
          // TODO
        })
    },
    delete(userId) {
      axios
        .delete(`https://api.domain.com/v1/user/${userId}`)
        .then(res => {
          // TODO
        })
        .catch(err => {
          // TODO
        })
    },
    edit(userId, info) {
      axios
        .put(`https://api.domain.com/v1/user/${userId}`, info)
        .then(res => {
          // TODO
        })
        .catch(err => {
          // TODO
        })
    }
  }
}
</script>
```
:::

**在组件中执行 API 调用是不好的，因为：**

- 你让你的组件代码变得很臃肿并且充满了与组件本身无关的逻辑，这违反了SRP；

- 相同的 API 方法可以在不同的组件中使用，这会导致代码重复并违反 DRY；

- 您正在全局导入依赖项，这违反了 DI 原则；

- 每当 API 发生变化时，您都需要手动更改每个需要修改的方法。


## ✅ 正确示范

为了让事情更好地工作，我们需要稍微改变我们的代码并将所有 API 调用移到一个单独的位置。

::: code-group
```ts [@/components/user/user.api.ts]
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.domain.com/v1/user",
});

export async function list() {
  const { data } = await axiosClient.get(`/list/${this.page}`);
  return data;
}

export async function add(name: string, born: string) {
  const { data } = await axiosClient.post(
    "/create",
    { name, born }
  );
  return data;
}

export async function detail(userId: string) {
  const { data } = await axiosClient.get(`/${userId}`)
  return data;
}

export async function delete(userId: string) {
  await axiosClient.delete(`/${userId}`)
}

export async function edit(userId: string, info: Partial<User>) {
  await axiosClient.put(`/${userId}`, info);
}
```
:::

在这个实例中：

- 拥有一个`AxiosInstance`配置为与`/users`API 分支一起使用的单一代码，我们的代码将变得模块化；

- 将所有方法放在一处，以便更轻松地进行更改并在不同组件中重用它们，而无需重复代码；

- 处理成功的请求以及请求失败，使我们能够根据请求状态处理错误和数据对象；

- 为每个方法提供标准化的响应返回类型，以便我们可以使用它们

## 基于 Class 封装

::: code-group
```ts [User.class.ts]
export class User {
  async list() {
    const { data } = await axiosClient.get(`/list/${this.page}`);
    return data;
  }

  async add(name: string, born: string) {
    const { data } = await axiosClient.post(
      "/create",
      { name, born }
    );
    return data;
  }

  async detail(userId: string) {
    const { data } = await axiosClient.get(`/${userId}`)
    return data;
  }

  async delete(userId: string) {
    await axiosClient.delete(`/${userId}`)
  }

  async edit(userId: string, info: Partial<User>) {
    await axiosClient.put(`/${userId}`, info);
  }
}
```
:::