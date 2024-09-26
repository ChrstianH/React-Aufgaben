import { useEffect, useState } from "react";
import { Beer } from "../interfaces/Beer";

export default function RandomBeer() {
  const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers/random";
  const [beer, setBeer] = useState<Beer>();

  useEffect(() => {
    fetch(BASE_URL).then((response) =>
      response.json().then((data) => setBeer(data))
    );
  }, []);

  return (
    <div>
      <img src={beer?.image_url} alt={beer?.name} />{" "}
      <div>
        <h2>{beer?.name}</h2>
        <b>{beer?.tagline}</b>
        <div>
          <p>First brewed:</p>
          <p>{beer?.first_brewed}</p>
        </div>
        <div>
          <p>Attenuation Level:</p>
          <p>{beer?.attenuation_level}</p>
        </div>
        <p>{beer?.description}</p>
        <button type="button">
          <img src="/src/assets/Back.svg" alt="back" />
        </button>
      </div>
    </div>
  );
}
