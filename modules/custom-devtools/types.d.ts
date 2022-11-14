declare module '#app' {
  interface NuxtApp {
    $useEnvVar: <T>(key: string, defaultValue?: T) => T;
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $useEnvVar: <T>(key: string, defaultValue?: T) => T;
  }
}
export {};
