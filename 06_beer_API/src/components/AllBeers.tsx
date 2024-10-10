import { useEffect, useState } from "react";
import { Beer } from "../interfaces/Beer";
import SingleBeer from "./SingleBeer";

export default function AllBeers() {
  const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    async function getBeers() {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setBeers(json);
      } catch (err) {
        console.error(err);
      }
    }
    getBeers();
  }, []);

  return (
    <div>
      {beers.map((beer: Beer) => (
        <SingleBeer key={beer._id} beer={beer} />
      ))}
    </div>
  );
}
