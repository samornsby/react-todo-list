import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./types";
import type { RootState } from "../../store";

export interface TodoState {
  values: Todo[];
}

const initialState: TodoState = {
  values: [{ id: "1", text: "Learn React", isComplete: true }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.values.push(action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.values.find((todo) => todo.id === action.payload);

      if (!todo) {
        return;
      }

      todo.isComplete = !todo.isComplete;
    },
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export const selectTodoCount = (state: RootState) => state.todos.values.length;

export default todoSlice.reducer;
