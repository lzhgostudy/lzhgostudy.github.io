# Managing API layers in Vue.js

## Motivation

Almost every Single-Page-App at some point needs to get some data from the backend. Sometimes there are several sources of data like REST APIs, Web Sockets etc. It's important to manage the API layer in the right way to make it simple and easy to use in any place of your application no matter if it's store, component or another type of source file.

## UI for example

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

## Bad example
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

**Performing API calls in the component is bad because:**

- You make your component large and filled with logic that has nothing to do with the component itself which violates SRP;

- Same API methods could be used in different components which causes code duplication and violates DRY;

- You are importing dependencies globally and it violates the DI principle;

- Whenever API changes, you need to manually change every method that is needed to be modified.


## Good example

To make things work better we need to slightly change our code and move all the API calls into a separate place.

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

In this case:

-  Have one single `AxiosInstance` that is configured to work with `/users` API branch and our code becomes modular;

- Have all methods located in one place so it's easier to make changes and to reuse them in different components without duplicating code;

- Handle the successful request as well as request failure and make us able to work with both error and data object depending on request status;

- Provide a standardized response return type for each method so we can work with them