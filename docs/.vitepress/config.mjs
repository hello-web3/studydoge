import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StudyDoge",
  description:
    "A decentralized learning and creative platform/一个去中心化学习和创作平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "发展计划", link: "/path" },
    ],

    sidebar: [
      {
        text: "关于StudyDoge",
        items: [
          { text: "简介", link: "/about" },
          { text: "平台积分", link: "/token" },
          { text: "发展计划", link: "/path" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
