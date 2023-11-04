# Git 补丁 patch 使用方法

Git 的 patch 功能支持开发者通过文件与别人分享自己的改动，本文记录 patch 使用方法。

## 简介

在同一个 git 管理仓库下，当然直接使用 git 的常用命令可以很好地和其他开发者共享工作，当开发者不处在同一个版本管理平台下，或仅作临时修改时，则可以通过 patch 打补丁的方式共享代码改动。

Git 提供了两种补丁方案，一种是通过 `git diff` 生成的 `.diff` 文件，第二种是通过 `git format-patch` 生成的 `.patch` 文件。

1. 通过 git diff 生成的文件不含有 commit 信息，可以指定文件生成 diff，也可以指定单个 commit， 多个 commit 生成 。
2. 通过 git format-patch 生成的 .patch 文件 含有 commit 信息。一个 commit 对应一个 patch 文件。

## 生成 patch

### `git diff`

`patch` 补丁就是通过 `git diff` 生成的文本内容文件，最简单的生成方法为 `git diff > test.patch`。

比如，我们修改了 `A.java、B.java` 文件，我们只想将 `A.java` 文件的修改打成 `patch`，那么我们可以使用以下的命令:

```bash
git diff A.java > test.patch
```

想把所有的修改文件打成 `patch`，即 `A.java、B.java` 文件，只需要使用下面的命令:

```bash
git diff > test.patch
```

指定 `commit id` 生成 `patch`

```bash
git diff [commit sha1 id] > [diff文件名].patch
```

### `git format-patch`

当前分支所有超前 `master` 的提交：

```bash
git format-patch -M master
```

某次提交以后的所有 `patch`:

```bash
git format-patch [commit id]
```

[commit id] 指的是 commit 名,可以通过 `git log` 查看。

从第一次到指定 [commit id] 的所有 `patch`:

```bash
git format-patch --root 4e16
```

某两次提交之间的所有 patch:

```bash
git format-patch [commit sha1 id].. [commit sha1 id]

# 365a 和 4e16 分别对应两次提交的名称
git format-patch 365a..4e16
```

某次提交（含）之前的几次提交：

```bash
git format-patch –n [commit id]

# –n 指 patch 数，07fe 对应 [commit id]
git format-patch –n 07fe

# 单次提交即为
git format-patch -1 [commit id]
```

::: tip
1. `git format-patch` 生成的补丁文件默认从1开始顺序编号，并使用对应提交信息中的第一行作为文件名。
2. 如果使用了 `--numbered-files` 选项，则文件名只有编号，不包含提交信息；
3. 如果指定了 `–stdout` 选项，可指定输出位置，如当所有 `patch` 输出到一个文件；可指定 `-o` 指定 `patch` 的存放目录。
:::

## 应用 patch

### git apply

应用 `git apply` 命令应用 `patch` 的原理是将 `patch` 中的改动添加到工作区，应用后会相当于对文件做出修改而不惊动 git。`git apply` 用于 `diff` 和 `format-patch` 输出的 `patch`。


### 使用步骤

1. 将生成的 `patch` 文件放在需要合并代码的项目路径

2. 先检查patch文件格式：

```bash
git apply --stat xxx.patch
```

3. 测试patch是否能应用到当前分支

```bash
git apply --check xxx.patch
```

4. 应用此 `patch` 打补丁

```bash
git apply xxx.patch
```

:::tip
这种方式传递的修改将会丢失提交信息和作者信息，但可以兼容非 git 管理的代码。除此之外，git 还提供另一个命令更便于 git 库之间的 patch 传递。

过程中如果有冲突则会停止应用，报错：

```bash
patch does not apply
```
:::

### 解决冲突

出现冲突的时候，这个时候需要我们手动解决冲突。

1. 首先，执行以下命令，自动合入 `patch` 中不冲突的代码，同时保留冲突的部分

```bash
git apply --reject xxxx.patch
```

2. 同时会生成后缀为 `.rej` 的文件，保存没有合并进去的部分的内容，可以参考这个进行冲突解决。

### git am

`format-patch` 生成的 `patch` 保存了更多提交信息。因此除了 `git apply` 之外，还可以用更智能的 `git am` 命令使用此 `patch`，会在修改文件的同时将 `commit` 信息也一起应用到 `git` 中。

`git am` 可以复现修改，保留作者信息，保留 `commit` 信息，但 `commit ID` 无法保留。

`git am` 命令会在应用 `patch` 失败时给出详细的错误信息，并允许手动解决冲突，是官方较为推荐的补丁应用方式。

在使用 `git am` 之前， 需要先 `git am --abort` 一次，以放弃掉以前的 `am` 信息，不然可能会遇到这样的错误。

```bash
.git/rebase-apply still exists but mbox given.
```

`git am` 可以一次合并一个文件，或者一个目录下所有的 `patch`：

```bash
git am *.patch
```

:::tip
再次声明，`am` 合并的 `commit ID` 会和之前不同，因此建议在有仓库管理的情况下用 `git pull`
:::