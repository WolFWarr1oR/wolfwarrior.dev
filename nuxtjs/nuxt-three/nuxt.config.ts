import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head:{
    
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@unocss/nuxt",
    '@nuxtjs/i18n',
  ],
  i18n:{},
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css"
  ],
})
