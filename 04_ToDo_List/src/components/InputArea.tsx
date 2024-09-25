import { useState } from "react";

export default function InputArea() {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    const todos: string[] = JSON.parse(localStorage.getItem("todo") || "[]");
    todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(todos));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        value={todo}
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
