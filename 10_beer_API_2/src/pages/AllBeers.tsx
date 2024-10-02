import { useEffect, useState } from "react";
import { Beer } from "../interfaces/Beer";
import SingleBeer from "../components/SingleBeer";

export default function AllBeers() {
  const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <div>
      {beers.map((beer: Beer) => (
        <SingleBeer key={beer._id} id={beer._id} />
      ))}
    </div>
  );
}
function setError(_e: any) {
  throw new Error("Function not implemented.");
}
