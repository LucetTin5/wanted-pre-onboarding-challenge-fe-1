import { useState } from "react";
import { Todo } from "../types/todos";
import {
  TodoContent,
  TodoDeleteButton,
  TodoItemWrapper,
  TodoListItem,
  TodoListItemDetail,
  TodoTitle,
  TodoUpdateButton,
} from "./style";

interface TodoItemProps extends Todo {
  id: string;
}

export const TodoItem = ({ id, title, content }: TodoItemProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((cur) => !cur);
  return (
    <TodoItemWrapper id={id}>
      {!open && <TodoListItem onClick={handleClick}>{title}</TodoListItem>}
      {open && (
        <TodoListItemDetail onClick={handleClick}>
          <TodoTitle>{title}</TodoTitle>
          <TodoContent>{content}</TodoContent>
          <TodoUpdateButton>수정하기</TodoUpdateButton>
          <TodoDeleteButton>삭제하기</TodoDeleteButton>
        </TodoListItemDetail>
      )}
    </TodoItemWrapper>
  );
};
