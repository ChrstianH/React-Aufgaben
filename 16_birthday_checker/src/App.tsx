import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const dateRef = useRef(null);

  const handleSubmit = () => {
    if (nameRef.current?.value === "") {
      alert("Wie ist dein Name?");
    } else if (dateRef.current?.value === "") {
      alert("Wann ist dein Geburtstag?");
    } else {
      const inputDate = new Date(dateRef.current?.value);
      if (
        inputDate.getMonth() === new Date().getMonth() &&
        inputDate.getDate() === new Date().getDate()
      ) {
        alert(`🎉 Alles Gute zum Geburtstag, ${nameRef.current?.value}! 🎉`);
      } else {
        alert(`Sorry, ${nameRef.current?.value}, heute leider nicht 😔`);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Vorname</label>
        <input ref={nameRef} type="text" name="firstName" id="firstName" />
        <label htmlFor="birthDay">Geburtstag</label>
        <input
          ref={dateRef}
          type="date"
          name="birthDay"
          id="birthDay"
          max={Date.now()}
        />
        <button type="submit">Habe ich heute Geburtstag?</button>
      </form>
    </div>
  );
}

export default App;
