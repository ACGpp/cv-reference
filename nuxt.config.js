// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 为GitHub Pages部署设置静态生成
  ssr: false,
  target: 'static',
  
  // 兼容性日期设置
  compatibilityDate: '2025-03-01',

  // 应用元数据
  app: {
    // Vercel部署不需要路径前缀
    baseURL: '/',
    head: {
      title: 'Computer Vision Reference',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '全球计算机视觉实验室、教授、课程和会议资源集合' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 模块
  modules: [
    // Tailwind CSS集成
    '@nuxtjs/tailwindcss',
    // 内容管理
    '@nuxt/content',
    // 国际化
    '@nuxtjs/i18n'
  ],

  // 内容模块配置
  content: {
    // 文档搜索配置
    documentDriven: true,
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  // 国际化配置
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'zh',
        name: '中文',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: './locales/i18n.config.ts'
  },

  // 开发环境配置
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  
  // GitHub Pages部署配置
  generate: {
    fallback: true
  },
  
  // 构建优化配置
  build: {
    transpile: [],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  
  // 运行时配置
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  }
})