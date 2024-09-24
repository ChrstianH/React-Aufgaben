import { useState } from "react";

interface ToDoProps {
  name: string;
  children: React.ReactNode;
  onDelete: (id: string) => void;
}

export default function ToDo(props: ToDoProps) {
  const [toDoDone, setToDoDone] = useState(false);

  const handleChangeState = () => {
    setToDoDone(!toDoDone);
  };

  const todoClass = toDoDone ? `line-through` : "";

  const deleteTodo = () => {
    props.onDelete(props.name);
  };
  return (
    <div>
      <div>
        <input type="checkbox" onChange={handleChangeState} />
        <div className={`${todoClass}`}>{props.children}</div>
      </div>
      <button type="button" onClick={deleteTodo}>
        ❌
      </button>
    </div>
  );
}
