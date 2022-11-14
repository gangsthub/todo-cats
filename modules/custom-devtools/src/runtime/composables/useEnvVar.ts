import { useCustomDevtoolsConfig } from './useCustomDevtoolsConfig';

export function useEnvVar<T>(key: string, defaultValue?: T): T | undefined {
  console.log('use env var');
  const config = reactive(useCustomDevtoolsConfig());
  console.log({ value: config[key] });
  config[key] = defaultValue;
  console.log({ newValue: defaultValue });
  return defaultValue;
}
