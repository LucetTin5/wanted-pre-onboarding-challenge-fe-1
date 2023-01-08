import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./todoActions";
import { TodoList } from "../types/todos";

const initialState: TodoList = {
  todos: [],
  toUpdate: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload.data;
    });
    builder.addCase(getTodoById.fulfilled, (state, action) => {
      state.toUpdate = action.payload.data;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload.data);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.data.id ? action.payload.data : todo
      );
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg);
    });
  },
});
