import { useEffect, useState } from "react";
import { Beer } from "../interfaces/Beer";
import { Link, useParams } from "react-router-dom";

export default function BeerDetails() {
  const [beer, setBeer] = useState<Beer>();
  const { id } = useParams();
  const BASE_URL = `https://ih-beers-api2.herokuapp.com/beers/${id}`;

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
        <Link to="/">
          <img src="/src/assets/Back.svg" alt="back" />
        </Link>
      </div>
    </div>
  );
}
