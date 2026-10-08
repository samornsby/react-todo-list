import { useState } from "react";
import { type Todo } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onTodosChange: (todo: Todo[]) => void;
}
export default function TodoList({ todos, onTodosChange }: TodoListProps) {
  const [text, setText] = useState("");

  const addTodo = () => {
    const todo: Todo = { id: crypto.randomUUID(), text, isComplete: false };
    onTodosChange([...todos, todo]);
    setText("");
  };

  const handleComplete = (id: string) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return;
    }

    const todo: Todo = {
      ...todos[index],
      isComplete: !todos[index].isComplete,
    };
    onTodosChange(todos.toSpliced(index, 1, todo));
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>
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
