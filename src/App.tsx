import TodoList from "./features/todos/TodoList";
import { selectTodoCount } from "./features/todos/todoSlice";
import { useAppSelector } from "./hooks";

export default function App() {
  const count = useAppSelector(selectTodoCount);

  return (
    <>
      <h1>Todos: {count}</h1>
      <TodoList />
    </>
  );
}
