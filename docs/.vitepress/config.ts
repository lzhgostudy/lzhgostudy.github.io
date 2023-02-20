import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Code Kitchen",
  description: 'This is a "Kitchen" of my program',
  base : "/",
  lang: 'en-US',
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
        text: "Storybook",
        items: [
          {
            text: "Storybook with pnpm-mono",
            link: "/storybook/storybook-with-pnpm-mono"
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