export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'tabo_syu note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '週一くらいでハマってる趣味、技術系の学びを更新したいブログ'
      },
      // og
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://bambshot.github.io'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'tabo_syu note'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '週一くらいでハマってる趣味、技術系の学びを更新したいブログ'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://bambshot.github.io/og_image.jpg'
      },
      // twitter card
      {
        name: 'twitter:site',
        content: '@tabo_syu'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['modern-css-reset', '~/assets/variables.scss', '~/assets/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('/', { deep: true })
        .only(['path'])
        .fetch()
      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  }
}
