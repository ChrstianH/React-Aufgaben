import { Beer } from "../interfaces/Beer";

export default function SingleBeer({ beer }: { beer: Beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <div className="title">{beer.name}</div>
        <div className="tagline">{beer.tagline}</div>
        <div className="contributor">Created by: {beer.contributed_by}</div>
        <button type="button">Details</button>
      </div>
    </div>
  );
}
