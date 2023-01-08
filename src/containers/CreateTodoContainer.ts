import { connect } from "react-redux";
import { withLogin } from "../common/withLogin";
import { CreateTodo } from "../components/CreateTodo";
import { AppDispatch } from "../store/store";
import { createTodo, getTodos } from "../store/todoActions";
import { Todo } from "../types/todos";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  create: (data: Todo) => dispatch(createTodo(data)),
});

export const CreateTodoContainer = withLogin(
  connect(null, mapDispatchToProps)(CreateTodo)
);
