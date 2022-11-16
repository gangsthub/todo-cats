<template>
  <BaseButton @click="addTodo">Add Fake Todo</BaseButton>
</template>

<script setup lang="ts">
const addTodo = () => {
  const { todoList, addTodoItem } = useTodoList();
  addTodoItem(todoList, 'Fake Todo');
};
</script>
