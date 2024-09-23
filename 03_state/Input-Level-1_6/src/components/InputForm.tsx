import { useState } from "react";

function Form() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <div style={{ display: "flex" }}>
          <input
            onChange={(event) => {
              setVorname(event.target.value);
            }}
            value={vorname}
            type="text"
            name="vorname"
            id="vorname"
          />
          <input
            onChange={(event) => {
              setNachname(event.target.value);
            }}
            value={nachname}
            type="text"
            name="nachname"
            id="nachname"
          />
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            type="text"
            name="email"
            id="email"
          />
        </div>
      </form>
      <p>Vorname: {vorname}</p>
      <p>Nachname: {nachname}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Form;
