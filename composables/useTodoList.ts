import { Ref } from 'nuxt/dist/app/compat/capi';

import { todoItemFactory } from '~~/models/TodoItem';
import { todoListFactory, updateTodoListItem } from '~~/models/TodoList';

export function useTodoList() {
  const todoList = useState('todoList', () => todoListFactory());

  const updateTitle = (list: Ref<TodoList>, title: string) => {
    list.value = todoListFactory({
      title,
      id: list.value.id,
      items: list.value.items,
    });
  };

  const addTodoItem = (list: Ref<TodoList>, item: string) => {
    if (!item) return;
    const newItem = todoItemFactory({ text: item });
    list.value = todoListFactory({
      id: list.value.id,
      title: list.value.title,
      items: [...list.value.items, newItem],
    });
  };

  const updateItem = (list: Ref<TodoList>, item: TodoItem) => {
    list.value = updateTodoListItem(todoList.value, item);
  };

  const removeItem = (list: Ref<TodoList>, item: TodoItem) => {
    list.value = todoListFactory({
      title: list.value.title,
      id: list.value.id,
      items: list.value.items.filter((i) => i.id !== item.id),
    });
  };

  return {
    todoList,
    updateTitle,
    addTodoItem,
    updateItem,
    removeItem,
  };
}
