import { connect } from "react-redux";
import { TodoListWithLogin } from "../components/TodoList";
import { AppDispatch, RootState } from "../store/store";
import { deleteTodo, getTodos, updateTodo } from "../store/todoActions";
import { TodoContent } from "../types/todos";

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token,
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getItems: () => dispatch(getTodos()),
  updateItem: (data: TodoContent) => dispatch(updateTodo(data)),
  removeItem: (id: string) => dispatch(deleteTodo(id)),
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListWithLogin);
