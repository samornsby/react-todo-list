import { useState } from "react";
import { type Todo } from "./types";
import TodoItem from "./TodoItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTodo, toggleComplete } from "./todoSlice";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.values);

  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleAddTodo = () => {
    const todo: Todo = { id: crypto.randomUUID(), text, isComplete: false };
    dispatch(addTodo(todo));
    setText("");
  };

  const handleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleComplete}
          />
        ))}
      </ul>
    </>
  );
}
