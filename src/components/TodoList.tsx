import { withLogin } from "../common/withLogin";
import { TodoContent } from "../types/todos";
import { TodoListWrapper } from "./style";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: TodoContent[];
  getItems: () => void;
  updateItem: (data: TodoContent) => void;
  removeItem: (id: string) => void;
}

const TodoList = ({ todos, getItems }: TodoListProps) => {
  if (todos.length === 0) {
    getItems();
  }
  return (
    <TodoListWrapper>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListWrapper>
  );
};

export const TodoListWithLogin = withLogin(TodoList);
