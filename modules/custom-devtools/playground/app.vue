<template>
  <div>Nuxt module playground! {{ envVar }}</div>
</template>

<script setup>
const publicRuntimeConfig = useRuntimeConfig();
const { $useEnvVar } = useNuxtApp();
const envVar = $useEnvVar('testEnvVar', 'default');
</script>
