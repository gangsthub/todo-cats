import { uuid } from './helpers';

const todoItemFactory = (todoItem: Partial<TodoItem>) => {
  return {
    id: uuid(),
    text: todoItem.text!,
    completed: todoItem.completed || false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const updateTodoItem = (
  todoItem: TodoItem,
  {
    text,
    completed,
  }: { text?: TodoItem['text']; completed?: TodoItem['completed'] }
) => {
  return {
    ...todoItem,
    text: text || todoItem.text,
    completed: completed === undefined ? todoItem.completed : completed,
    updatedAt: new Date(),
  };
};

export { todoItemFactory, updateTodoItem };
