import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_TODOS,
  GET_TODOS_BY_ID,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../constants/api";
import { Todo, TodoUpdate } from "../types/todos";

const token = localStorage.getItem("token");

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get(GET_TODOS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const getTodoById = createAsyncThunk(
  "todos/getTodos/id",
  async (id: string) => {
    const response = await axios.get(GET_TODOS_BY_ID(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const createTodo = createAsyncThunk(
  "todos/create",
  async (data: Todo) => {
    const response = await axios.post(CREATE_TODO, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async (data: TodoUpdate) => {
    const response = await axios.put(UPDATE_TODO(data.id), data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id: string) => {
    const response = await axios.delete(DELETE_TODO(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);
