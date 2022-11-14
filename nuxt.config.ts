import { config } from './config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: config(),
  modules: ['nuxt-windicss', '@pinia/nuxt'],
});
