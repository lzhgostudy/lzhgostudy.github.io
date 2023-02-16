import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Code Kitchen",
  description: 'This is a "Kitchen" of my program',
  base : "/",
  lang: 'en-US',
  head: [
    ['link', { rel: 'shortcut icon', href: "/favicon.ico" }],
  ],
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
            text: "Migration from NPM",
            link: "/pnpm/get-started"
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