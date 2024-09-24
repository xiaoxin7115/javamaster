import { defineConfig } from 'vitepress'
const base = "/javamaster/"; // [!code ++]
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "Java糕手",
  description: "全栈开发，项目定制",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Java糕手',
    logo: `${base}/logo.jpg`,
    nav: [
      { text: '网站首页', link: '/' },
      { text: '项目定制', link: '/项目定制' },
      { text: '源码', link: '/源码' },
      { text: '项目定制', link: '/项目定制' }
    ],

    sidebar: [
      {
        text: '服务介绍',
        items: [
          { text: '项目定制', link: '/项目定制' },
          { text: '源码', link: '/源码' }
        ]
      },
      {
        text: '博客目录',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: {
          svg: '<svg t="1727142533788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14187" width="200" height="200"><path d="M0 0m102.4 0l819.2 0q102.4 0 102.4 102.4l0 819.2q0 102.4-102.4 102.4l-819.2 0q-102.4 0-102.4-102.4l0-819.2q0-102.4 102.4-102.4Z" fill="#0061D5" p-id="14188"></path><path d="M768.4096 528.2816l-156.928-196.1984A44.8 44.8 0 1 1 681.3184 276.48l179.2 224a44.8 44.8 0 0 1 0 55.552l-179.2 224a44.8 44.8 0 0 1-34.9184 16.9984 44.8 44.8 0 0 1-34.9696-72.5504l156.9792-196.2496z m-614.6048 0c0-9.728 3.1744-19.5072 9.6768-27.7504l179.2-224a44.8 44.8 0 0 1 69.888 55.552l-156.9792 196.1984 156.9792 196.2496a44.8 44.8 0 0 1-34.9696 72.5504 44.8 44.8 0 0 1-34.9184-16.9984l-179.2-224a44.5952 44.5952 0 0 1-9.6768-27.8016z m178.9952 0a44.8 44.8 0 1 1 89.6 0 44.8 44.8 0 0 1-89.6 0z m134.4 0a44.8 44.8 0 1 1 89.6 0 44.8 44.8 0 0 1-89.6 0z m134.4 0a44.8 44.8 0 1 1 89.6 0 44.8 44.8 0 0 1-89.6 0z" fill="#FFFFFF" p-id="14189"></path></svg>'
        },
        link: 'https://space.bilibili.com/484414824'
      }
    ]
  }
})
