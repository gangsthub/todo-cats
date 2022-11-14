import { getPrivateRuntimeConfig } from './private-config';
import { getPublicRuntimeConfig } from './public-config';

export const config = () => ({
  ...getPrivateRuntimeConfig(),
  public: {
    ...getPublicRuntimeConfig(),
  },
});
