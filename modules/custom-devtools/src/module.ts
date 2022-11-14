import { createResolver, defineNuxtModule, addPlugin } from '@nuxt/kit';

export interface ModuleOptions {
  openByDefault: boolean;
  rootClass: string;
  defaultPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closeViaEscapeKey: boolean;
}

export interface ModulePublicRuntimeConfig {}

export interface ModuleRuntimeConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'custom-devtools',
    configKey: 'customDevtools',
  },
  defaults: {
    openByDefault: true,
    rootClass: 'nuxt-custom-devtools',
    defaultPosition: 'top-left',
    closeViaEscapeKey: true,
  },
  setup(_options, nuxt) {
    const isDev = nuxt.options.dev;
    if (isDev) {
      console.log('Custom Devtools - Running in dev mode');
    }

    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve('./runtime/plugin'));
  },
});
