<template>
  <section class="bg-white rounded-sm shadow-light-200">
    <BaseInput
      label="List Name"
      name="listTitle"
      placeholder="Groceries..."
      class="mb-4"
      :value="listTitle"
      @input="onTitleInput"
    />
    <form class="flex justify-between items-end" @submit.prevent>
      <BaseInput
        :value="currentTodo"
        label="New Todo"
        name="newTodo"
        class="mr-4"
        placeholder="Cat food..."
        @input="onNewTodoInput"
      />
      <BaseButton
        :disabled="currentTodo === ''"
        @click="onAddTodo"
        :color="FF_BUTTON_COLOR"
      >
        Add Todo
      </BaseButton>
    </form>
  </section>
</template>

<script setup lang="ts">
const $emit = defineEmits<{
  (event: 'addTodo', value: string): void;
  (event: 'updateTitle', value: string): void;
}>();

const { $useEnvVar } = useNuxtApp();
const FF_BUTTON_COLOR = $useEnvVar('FF_BUTTON_COLOR');

const listTitle = ref('');
const currentTodo = ref('');

const onTitleInput = (event: string) => {
  listTitle.value = event;

  $emit('updateTitle', listTitle.value);
};

const onNewTodoInput = (event: string) => {
  currentTodo.value = event;
};

const resetCurrentTodo = () => {
  currentTodo.value = '';
};

const onAddTodo = () => {
  if (!currentTodo) return;
  $emit('addTodo', currentTodo.value);
  resetCurrentTodo();
};
</script>
