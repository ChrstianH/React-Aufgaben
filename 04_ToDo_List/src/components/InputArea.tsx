import { useState } from "react";

export default function InputArea() {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    const todos = [];
    todos.push(todo);
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
