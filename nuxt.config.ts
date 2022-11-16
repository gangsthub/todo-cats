// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      FF_BUTTON_COLOR: process.env.FF_BUTTON_COLOR || 'blue',
    },
  },
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    'nuxt-module-example-custom-devtools',
  ],
  vite: {
    server: {
      fs: {
        allow: ['../custom-devtools'],
      },
    },
  },
});
