<template>
  <div class="w-full sm:w-1/2 m-auto p-4 border-dark-50 border-1 rounded-md">
    <TodosForm
      class="mb-6"
      @add-todo="onAddTodo"
      @update-title="onUpdateTitle"
    />
    <TodoList
      :todoList="todoList"
      @update-todo="onUpdateTodo"
      @remove-todo="onRemoveTodo"
    />
  </div>
</template>

<script setup lang="ts">
const { todoList, updateItem, addTodoItem, updateTitle, removeItem } =
  useTodoList();

const onAddTodo = (newTodo: string) => {
  addTodoItem(todoList, newTodo);
};
const onUpdateTitle = (title: string) => {
  updateTitle(todoList, title);
};
const onUpdateTodo = (item: TodoItem) => {
  updateItem(todoList, item);
};
const onRemoveTodo = (item: TodoItem) => {
  removeItem(todoList, item);
};
</script>
