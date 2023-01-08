import { useState } from "react";
import { withLogin } from "../common/withLogin";
import { TodoContent } from "../types/todos";
import { TodoListWrapper } from "./style";
import { TodoItem } from "./TodoItem";
import { TodoUpdate } from "./TodoUpdate";

interface TodoListProps {
  todos: TodoContent[];
  toUpdate: TodoContent;
  getItems: () => void;
  getItemById: (id: string) => void;
  updateItem: (data: TodoContent) => void;
  removeItem: (id: string) => void;
}

const TodoList = ({
  todos,
  toUpdate,
  getItems,
  getItemById,
  updateItem,
  removeItem,
}: TodoListProps) => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState("");
  if (todos.length === 0) {
    getItems();
  }
  const handleUpdateOpen = (id: string) => {
    setUpdateOpen(true);
    setIdToUpdate(id);
    getItemById(idToUpdate);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };
  const handleUpdate = (data: TodoContent) => {
    updateItem(data);
    handleUpdateClose();
  };
  const handleRemove = (id: string) => {
    if (confirm("Do you want to delete it?")) {
      removeItem(id);
    }
  };
  return (
    <TodoListWrapper>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          handleUpdateOpen={handleUpdateOpen}
          handleRemove={handleRemove}
          {...todo}
        />
      ))}
      {updateOpen && (
        <TodoUpdate
          toUpdate={toUpdate}
          handleUpdateClose={handleUpdateClose}
          handleUpdate={handleUpdate}
        />
      )}
    </TodoListWrapper>
  );
};

export const TodoListWithLogin = withLogin(TodoList);
