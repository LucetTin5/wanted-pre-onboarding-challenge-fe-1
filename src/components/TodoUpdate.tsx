import { useForm } from "react-hook-form";
import { TodoContent } from "../types/todos";
import {
  ButtonsWrapper,
  CreateTodoButton,
  CreateTodoInput,
  Dimmed,
  FormTitle,
  TodoUpdateForm,
} from "./style";

interface TodoUpdateProps {
  toUpdate: TodoContent;
  handleUpdateClose: () => void;
  handleUpdate: () => void;
}

export const TodoUpdate = ({
  toUpdate,
  handleUpdateClose,
  handleUpdate,
}: TodoUpdateProps) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<TodoContent>({
    defaultValues: toUpdate,
  });
  return (
    <>
      <Dimmed onClick={handleUpdateClose} />
      <TodoUpdateForm onSubmit={handleSubmit(handleUpdate)}>
        <FormTitle>Update</FormTitle>
        <label htmlFor="title">Title</label>
        <CreateTodoInput {...register("title")} id="title" />
        <label htmlFor="content">Content</label>
        <CreateTodoInput {...register("content")} id="content" />
        <ButtonsWrapper>
          <CreateTodoButton type="submit" disabled={!isDirty || !isValid}>
            수정완료
          </CreateTodoButton>
          <CreateTodoButton type="button" onClick={handleUpdateClose}>
            수정 취소
          </CreateTodoButton>
        </ButtonsWrapper>
      </TodoUpdateForm>
    </>
  );
};
