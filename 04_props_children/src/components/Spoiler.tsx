import { useState } from "react";

export default function Spoiler(props: any) {
  const [isHidden, setIsHidden] = useState(true);

  const showSpoiler = () => {
    setIsHidden(!isHidden);
  };

  const angle = 8 * Math.random() - 4;

  return isHidden ? (
    <button style={{ transform: "rotateZ(4deg)" }} onClick={showSpoiler}>
      {props.children}
    </button>
  ) : (
    props.children
  );
}
