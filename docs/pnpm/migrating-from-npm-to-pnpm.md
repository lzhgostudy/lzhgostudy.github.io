# Migrating from NPM to PNPM

## Preface

I tested this on a project which build with storybook that is still in the alpha phase of development and therefore could afford any potential downtime from errors or other issues.

## Getting started

- Installation guide for PNPM can be found [here](https://pnpm.io/installation). The simplest approach for JS folks is probably to run: `npm install -g pnpm`.

- In the project which you want to convert to PNPM, find the node_modules directory and delete it.

- Add the following code to your project's `package.json`. This will prevent people from installing packages with any other package managers.

```json
"scripts": { "preinstall": "npx only-allow pnpm" }
```

- In directory root, create a file named `pnpm-workspace.yaml` and add the following:

```yaml
packages:
  # include packages in subfolders(change as required)
  - apps/**
  - packages/**
  # if required, exclude directories
  - !**/test/**
```

- In terminal, run `pnpm import`. This will create a `pnpm-lock.yaml` file based on the current `yarn.lock` or `package-lock.json`.

- Delete `yarn.lock` or `package-lock.json` file.

- Install dependencies using **PNPM** by running `pnpm i` or `pnpm` install.

- If you have scripts in package.json that use `npm run` prefix, this will need to be replaced with `pnpm` e.g. `pnpm test` instead of `npm run test`.


### Important note

When installing dependencies with NPM or YARN, a 'flat' node_modules directory is created. This means that source code has access to dependencies that are not added as dependencies  to the project. **PNPM** works differently in that is uses symlinks to add only the direct dependencies of the project into the root of the modules directory.


## Working with PNPM

When you first run `pnpm install` you will see a progress graphic in the terminal like the one in the image below:

![](https://britishgeologicalsurvey.github.io/assets/images/2022-11-17-migrate-npm/pnpm-clean.PNG)

Note that the 'reused' count stays at 0 on the first install. This is because we haven't yet created a cache that **PNPM** can reference.

Once all the dependencies have been installed, if you run `pnpm install` again or add a new package `pnpm add some-new-package -w`, you will see that the 'reused' counter is now going up.

![](https://britishgeologicalsurvey.github.io/assets/images/2022-11-17-migrate-npm/pnpm-cached.PNG)

This caching speeds up the installation process quite drastically, as it avoids re-downloading packages that have already been fetched. Packages are also downloaded concurrently instead of  one-by-one.

**"In pnpm, packages are always reused if they are already installed for another project saving a log of disk space which makes it faster and more efficient than npm."**


::: tip References

[Migrating from NPM to PNPM](https://britishgeologicalsurvey.github.io/development/migrating-from-npm-to-pnpm/)

[将 npm 项目迁移到 pnpm + monorepo](https://lyh543.github.io/posts/2022-04-18-migrate-npm-multirepo-to-pnpm-monorepo.html)

[如何将 npm / yarn 项目迁移到 pnpm？](https://juejin.cn/post/7129552750446116878)

[pnpm切换指南](https://juejin.cn/post/7063740466738511879)

:::