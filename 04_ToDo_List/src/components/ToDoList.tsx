import { useState } from "react";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [toDos, setToDos] = useState<string[]>([]);

  const handleDelete = (toDelete: string) => {
    const newTodos = toDos.filter((todo) => todo !== toDelete);
    setToDos(newTodos);
  };

  return (
    <div>
      {toDos.map((toDo: any) => (
        <ToDo key={toDo} name={toDo} onDelete={handleDelete}>
          {toDo}
        </ToDo>
      ))}
    </div>
  );
}
