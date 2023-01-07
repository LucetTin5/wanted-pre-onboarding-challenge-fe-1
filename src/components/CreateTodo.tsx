import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../types/todos";
import {
  CreateTodoButton,
  CreateTodoContent,
  CreateTodoForm,
  CreateTodoInput,
  CreateTodoOpenButton,
} from "./style";

interface CreateTodoProps {
  create: (data: Todo) => void;
}

export const CreateTodo = ({ create }: CreateTodoProps) => {
  const { register, handleSubmit } = useForm<Todo>();
  const [openForm, setOpenForm] = useState(false);

  const onSubmit = (data: Todo) => create(data);
  const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenForm((cur) => !cur);
    e.currentTarget.classList.toggle("active");
  };

  return (
    <CreateTodoForm onSubmit={handleSubmit(onSubmit)}>
      <CreateTodoOpenButton onClick={handleOpenForm}>
        Click to open/close for new todo
      </CreateTodoOpenButton>
      {openForm && (
        <>
          <label htmlFor="title">Title</label>
          <CreateTodoInput {...register("title")} type="text" id="title" />
          <label htmlFor="content">Content</label>
          <CreateTodoContent
            {...register("content")}
            cols={30}
            rows={3}
            id="content"
          ></CreateTodoContent>
          <CreateTodoButton type="submit">
            Create New Todo Item
          </CreateTodoButton>
        </>
      )}
    </CreateTodoForm>
  );
};
