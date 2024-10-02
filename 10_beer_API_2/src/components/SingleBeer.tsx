import { useEffect, useState } from "react";
import { Beer } from "../interfaces/Beer";
import { Link } from "react-router-dom";

export default function SingleBeer({ id }: { id: string }) {
  const [beer, setBeer] = useState<Beer | null>(null);
  const BASE_URL = `https://ih-beers-api2.herokuapp.com/beers/${id}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, []);

  if (!beer) return;

  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <div className="title">{beer.name}</div>
        <div className="tagline">{beer.tagline}</div>
        <div className="contributor">Created by: {beer.contributed_by}</div>
        <Link to={`/beers/${id}`}>Details</Link>
      </div>
    </div>
  );
}
