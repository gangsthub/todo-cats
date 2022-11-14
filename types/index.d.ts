interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface TodoList {
  id: string;
  title: string;
  items: TodoItem[];
}
