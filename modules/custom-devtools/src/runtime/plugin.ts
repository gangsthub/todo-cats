import { defineNuxtPlugin } from '#app';

import { useEnvVar } from './composables/useEnvVar';

export default defineNuxtPlugin((_nuxtApp) => {
  console.log('Custom Devtools - plugin');
  return {
    provide: {
      useEnvVar,
    },
  };
});
