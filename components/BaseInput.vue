<template>
  <div class="flex flex-col w-full text-sm">
    <label :for="'id-' + name" class="mb-2"> {{ label }} </label>
    <input
      :id="'id-' + name"
      type="text"
      class="w-full py-2 px-3 bg-gray-100"
      :name="name"
      v-bind="$attrs"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps<{
  name: string;
  label: string;
  value: string;
}>();

const $emit = defineEmits<{
  (event: 'input', value: string): void;
}>();

const onInput = (event: Event) => {
  const value = (event?.target as HTMLInputElement).value;
  $emit('input', value);
};
</script>
