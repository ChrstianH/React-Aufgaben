import { useState } from "react";
import { getEncodedText } from "./utils/encryption";

export default function App() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(0);

  function handleEncode() {
    const newMessage: string = getEncodedText(message, shift);

    return newMessage;
  }
  const newMessage = handleEncode();
  return (
    <>
      <h1>Cesar Code</h1>
      <label htmlFor="msg">Nachricht</label>
      <input
        id="msg"
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <label htmlFor="shift">Shift</label>
      <input
        type="number"
        id="shift"
        onChange={(e) => {
          setShift(parseInt(e.target.value));
        }}
        value={shift}
      />

      <div>
        <p data-testid="output" id="output">
          {newMessage}
        </p>
      </div>
    </>
  );
}
