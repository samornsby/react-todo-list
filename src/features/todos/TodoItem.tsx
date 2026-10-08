import type { Todo } from "./types";

interface TodoItemsProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
}

export default function TodoItem({ todo, onToggleComplete }: TodoItemsProps) {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span style={{ color: todo.isComplete ? "green" : "red" }}>
        {todo.text}
      </span>
    </li>
  );
}
