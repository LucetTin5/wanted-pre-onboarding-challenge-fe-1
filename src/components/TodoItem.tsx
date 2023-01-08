import { useState } from "react";
import { Todo, TodoContent } from "../types/todos";
import {
  TodoItemContent,
  TodoDeleteButton,
  TodoItemWrapper,
  TodoListItem,
  TodoListItemDetail,
  TodoTitle,
  TodoUpdateButton,
  TodoItemCloseButton,
} from "./style";

interface TodoItemProps extends Todo {
  id: string;
  handleUpdateOpen: (id: string) => void;
  handleRemove: (id: string) => void;
}

export const TodoItem = ({
  id,
  title,
  content,
  handleUpdateOpen,
  handleRemove,
}: TodoItemProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((cur) => !cur);
  return (
    <TodoItemWrapper id={id}>
      {!open && <TodoListItem onClick={handleClick}>{title}</TodoListItem>}
      {open && (
        <TodoListItemDetail>
          <TodoItemCloseButton onClick={handleClick} />
          <TodoTitle>{title}</TodoTitle>
          <TodoItemContent>{content}</TodoItemContent>
          <TodoUpdateButton type="button" onClick={() => handleUpdateOpen(id)}>
            수정하기
          </TodoUpdateButton>
          <TodoDeleteButton type="button" onClick={() => handleRemove(id)}>
            삭제하기
          </TodoDeleteButton>
        </TodoListItemDetail>
      )}
    </TodoItemWrapper>
  );
};
