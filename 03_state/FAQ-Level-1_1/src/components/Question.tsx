import { useState } from "react";

export default function Question() {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const handleClick = () => {
    setIsAnswerShown(!isAnswerShown);
  };

  return (
    <div className="faq-block">
      <div className="question">
        <p>Why is React Great</p>
        <button type="button" onClick={handleClick}>
          -
        </button>
      </div>
      <div
        className="answer"
        style={{ display: isAnswerShown ? "block" : "none" }}
      >
        <p>Fast Learning Curve</p>
      </div>
    </div>
  );
}
