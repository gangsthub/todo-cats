<template>
  <div class="relative">
    <ul class="c-border-top relative my-4 py-4">
      <li
        v-for="item in orderedItems"
        class="bg-gray-100 flex align-baseline justify-start mb-1 p-2 shadow-md"
        :key="item.id"
      >
        <TodoItem
          :item="item"
          @update-todo="$emit('update-todo', $event)"
          @remove-todo="$emit('remove-todo', item)"
        />
      </li>
    </ul>
    <div class="c-empty-state text-center" v-if="todoList.items.length === 0">
      <img src="/img/empty.png" alt="Calm Cat" class="m-auto" />
    </div>
    <div
      class="c-happy-cat"
      v-if="
        todoList.items.length > 0 &&
        todoList.items.length === completedCount &&
        shouldAnimate
      "
      :class="{
        animated: shouldAnimate,
      }"
    >
      <img src="/img/all.png" alt="Happy Cat" class="m-auto" />
    </div>
    <p class="text-xs" v-if="todoList.items.length">
      Completed Items: {{ completedCount }}/{{ todoList.items.length }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  todoList: TodoList;
}>();

const $emit = defineEmits<{
  (event: 'update-todo', value: TodoItem): void;
  (event: 'remove-todo', value: TodoItem): void;
}>();

const orderedItems = computed(() => {
  return props.todoList.items.sort((a, b) => {
    if (a.completed === b.completed) {
      return 0;
    }
    return a.completed ? 1 : -1;
  });
});
const completedCount = computed(() => {
  return props.todoList.items.filter((item) => item.completed).length;
});

const shouldAnimate = ref(false);

const initHappyCatAnimation = () => {
  shouldAnimate.value = true;
  setTimeout(() => {
    shouldAnimate.value = false;
  }, 1500);
};

watch(
  () => completedCount.value,
  (newCount) => {
    if (newCount === props.todoList.items.length) {
      initHappyCatAnimation();
    } else {
      shouldAnimate.value = false;
    }
  }
);
</script>

<style scoped>
.c-border-top:before {
  content: '';
  width: 80%;
  height: 1px;
  background-color: #ccc;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.c-happy-cat {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.c-happy-cat.animated {
  animation-name: bounce-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}
</style>
