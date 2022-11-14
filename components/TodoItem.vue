<template>
  <input
    type="checkbox"
    :id="item.id"
    class="mr-2"
    :aria-label="item.completed ? 'Mark as incomplete' : 'Mark as complete'"
    @change="(event) => changeState(event, item)"
  />
  <label
    :for="item.id"
    class="flex-1 mr-auto self-center"
    :class="{
      'line-through': item.completed,
      'text-gray-400': item.completed,
    }"
    >{{ item.text }}</label
  >
  <BaseButton
    @click="$emit('removeTodo', item)"
    aria-label="Remove item"
    color="blue"
    class="text-xs"
    radius="rounded-full"
  >
    x
  </BaseButton>
</template>

<script setup lang="ts">
defineProps<{
  item: TodoItem;
}>();
const $emit = defineEmits<{
  (event: 'updateTodo', value: TodoItem): void;
  (event: 'removeTodo', value: TodoItem): void;
}>();

const changeState = (event: Event, item: TodoItem) => {
  $emit('updateTodo', {
    ...item,
    completed: (event.target as HTMLInputElement).checked,
  });
};
</script>
