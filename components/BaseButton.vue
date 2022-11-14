<template>
  <button
    class="font-bold min-w-max text-sm"
    v-bind="$attrs"
    :class="[buttonClass]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: string;
    radius?: string;
  }>(),
  {
    color: 'blue',
    radius: 'rounded',
  }
);

const getColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-500 hover:bg-blue-700 text-white';
    case 'red':
      return 'bg-red-500 hover:bg-red-700 text-white';
    case 'green':
      return 'bg-green-500 hover:bg-green-700 text-white';
    default:
      return 'bg-gray-500 hover:bg-gray-700 text-white';
  }
};

const getRadius = (radius: string) => {
  switch (radius) {
    case 'rounded-full':
      return 'rounded-full h-6 w-6 flex items-center justify-center';
    case 'rounded':
    default:
      return 'rounded py-2 px-3';
  }
};

const buttonClass = computed(() => {
  return `${getColor(props.color)} ${getRadius(props.radius)}`;
});
</script>
