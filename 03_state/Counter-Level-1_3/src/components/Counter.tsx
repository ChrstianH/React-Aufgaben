import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    if (count !== 0) {
      setCount((count) => count - 1);
    }
  };

  const handleReset = () => {
    setCount(() => 0);
  };

  return (
    <div className="div-counter">
      <div className="first-line">
        <button type="button" onClick={handlePlus}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={handleMinus}>
          -
        </button>
      </div>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
