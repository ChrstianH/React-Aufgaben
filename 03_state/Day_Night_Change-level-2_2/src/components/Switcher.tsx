import { useState } from "react";

export default function Switcher() {
  const [isDay, setIsDay] = useState(true);

  const handleClick = () => {
    setIsDay((isDay) => !isDay);
    document.body.style.backgroundColor = isDay ? "black" : "white";
  };

  return (
    <div className={isDay ? "day" : "night"}>
      <h1>{isDay ? "Day" : "Night"}</h1>
      <button onClick={handleClick} className={isDay ? "day" : "night"}>
        {isDay ? "Change to Night" : "Change to Day"}
      </button>
    </div>
  );
}
