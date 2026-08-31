import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type {
  Todo,
  TodoFilter,
} from "../../types/todo";

interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {
    addTodo: (
      state,
      action: PayloadAction<string>,
    ) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },

    toggleTodo: (
      state,
      action: PayloadAction<string>,
    ) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload,
      );

      if (!todo) {
        return;
      }

      todo.completed = !todo.completed;
    },

    deleteTodo: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );
    },

    setFilter: (
      state,
      action: PayloadAction<TodoFilter>,
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;