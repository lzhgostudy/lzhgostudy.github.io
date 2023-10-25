import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Code Kitchen",
  description: 'This is a "Kitchen" of my program',
  base : "/",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: "/favicon.ico" }],
  ],
  // lastUpdated: true,
  themeConfig: {
    logo: "/chef.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lzhgostudy/lzhgostudy.github.io' },
    ],
    outline: 'deep',
    sidebar: [
      {
        text: "Vue",
        items: [
          {
            text: "Directive 指令",
            link: "/vue/directive"
          },
          {
            text: "创建 Vue 应用",
            link: "/vue/creating-an-app"
          },
          {
            text: "API 管理层",
            link: "/vue/managing-api-layers",
          },
          {
            text: "v-model 对比Vue2/Vue3",
            link: "/vue/v-model"
          },
          {
            text: ".sync",
            link: "/vue/sync"
          }
        ]
      },
      {
        text: "PNPM",
        items: [
          {
            text: "Migrating from NPM to PNPM",
            link: "/pnpm/migrating-from-npm-to-pnpm"
          },
          {
            text: "Setup a monorepo with PNPM",
            link: "/pnpm/setup-a-monorepo-with-pnpm"
          }
        ]
      },
      {
        text: "Storybook(v7)",
        items: [
          {
            text: "Storybook with pnpm-mono",
            link: "/storybook/storybook-with-pnpm-mono"
          },
          {
            text: "Install Addons",
            link: "/storybook/install-addon"
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Mine Lu'
    }
  }
})