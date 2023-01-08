import { connect } from "react-redux";
import { TodoListWithLogin } from "../components/TodoList";
import { AppDispatch, RootState } from "../store/store";
import {
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../store/todoActions";
import { TodoContent } from "../types/todos";

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token,
  todos: state.todo.todos,
  toUpdate: state.todo.toUpdate,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getItems: () => dispatch(getTodos()),
  getItemById: (id: string) => dispatch(getTodoById(id)),
  updateItem: (data: TodoContent) => dispatch(updateTodo(data)),
  removeItem: (id: string) => dispatch(deleteTodo(id)),
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListWithLogin);
