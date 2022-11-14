import { uuid } from './helpers';
import { updateTodoItem } from './TodoItem';

const todoListFactory = (todoList: Partial<TodoList> = {}): TodoList => {
  return {
    id: todoList.id || uuid(),
    title: todoList.title || '',
    items: todoList.items || [],
  };
};

const updateTodoListItem = (
  todoList: TodoList,
  newItem: TodoItem
): TodoList => {
  const { id, text, completed } = newItem;

  const items = todoList.items.map((item) => {
    if (item.id === id) {
      return updateTodoItem(item, { text, completed });
    }
    return item;
  });

  return {
    ...todoList,
    items,
  };
};

export { todoListFactory, updateTodoListItem };
