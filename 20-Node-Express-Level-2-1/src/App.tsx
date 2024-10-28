import { useEffect, useState } from "react";
import { IPerson } from "./models/IPerson";
import { IStarship } from "./models/IStarship";

function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    getStarships();
  }, []);

  const getPeople = async () => {
    const response = await fetch("http://localhost:3000/people");
    const json = await response.json();
    setPeople(json);
  };

  const getStarships = async () => {
    const response = await fetch("http://localhost:3000/starships");
    const json = await response.json();
    setStarships(json);
  };

  return (
    <>
      <h3>People</h3>
      <ul>
        {people?.map((person: IPerson) => (
          <li>
            {person.name}
            <ul>
              <li>Körpergröße: {person.height} m</li>
            </ul>
          </li>
        ))}
      </ul>
      <h3>Starships</h3>
      <ul>
        {starships?.map((starship: IStarship) => (
          <li>
            {starship.name}
            <ul>
              <li>Länge: {starship.length} m</li>
              <li>Max. Geschwindigkeit: {starship.max_velocity} km/h</li>
              <li>Bewaffnung: {starship.armour}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
