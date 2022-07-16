import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head:{
    link: [{rel:'icon'}]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'prefix_and_default',
    locales: ['en', 'ru', 'ua', 'de', 'md', 'ro'],
    defaultLocale: null,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        ru: {
          welcome: 'Добро пожаловать'
        },
        ua: {
          welcome: 'Ласкаво просимо'
        },
        de: {
          welcome: 'Willkommen'
        },
        md: {
          welcome: 'Бине аць венит'
        },
        ro: {
          welcome: 'Bine ați venit'
        }
      }
    }
  },
  tailwindcss: {
    cssPath: '/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
})
