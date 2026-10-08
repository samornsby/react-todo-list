import { useState } from "react";
import TodoList from "./features/todos/TodoList";
import type { Todo } from "./features/todos/types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn React", isComplete: true },
  ]);

  return (
    <>
      <h1>Todos: {todos.length}</h1>
      <TodoList todos={todos} onTodosChange={setTodos} />
    </>
  );
}
