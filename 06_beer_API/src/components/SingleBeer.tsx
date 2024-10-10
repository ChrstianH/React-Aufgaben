import { useState } from "react";
import type { Beer } from "../interfaces/Beer";

export default function SingleBeer({ beer }: { beer: Beer }) {
  const [descVisible, setDescVisible] = useState(false);

  const showMoreInfo = () => {
    setDescVisible(true);
  };
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <div className="title">{beer.name}</div>
        <div className="tagline">{beer.tagline}</div>
        <div className="contributor">Created by: {beer.contributed_by}</div>
        {descVisible && <div className="description">{beer.description}</div>}
        <button onClick={showMoreInfo}>Details</button>
      </div>
    </div>
  );
}
