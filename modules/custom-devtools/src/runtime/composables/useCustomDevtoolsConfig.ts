export function useCustomDevtoolsConfig() {
  console.log('get runtime config');
  return Object.assign({}, useRuntimeConfig().public);
}
