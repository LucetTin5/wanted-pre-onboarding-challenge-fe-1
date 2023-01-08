export interface Todo {
  title: string;
  content: string;
}

export interface TodoContent extends Todo {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoUpdate extends Todo {
  id: string;
}

export interface TodoList {
  todos: TodoContent[];
  toUpdate: TodoContent | null;
}
