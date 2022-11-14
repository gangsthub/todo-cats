export const getPublicRuntimeConfig = () => {
  const publicRuntimeConfig = {
    FF_BUTTON_COLOR: process.env.FF_BUTTON_COLOR || 'green',
  };

  return publicRuntimeConfig;
};
