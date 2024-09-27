import { useEffect, useState } from "react";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [toDos, setToDos] = useState<string[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    setToDos(storedTodos);
  }, []);

  const handleDelete = (toDelete: string) => {
    const newTodos = toDos.filter((todo) => todo !== toDelete);
    setToDos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  return (
    <div className="todo-list">
      {toDos.map((toDo: any) => (
        <ToDo key={toDo} name={toDo} onDelete={handleDelete}>
          {toDo}
        </ToDo>
      ))}
    </div>
  );
}
