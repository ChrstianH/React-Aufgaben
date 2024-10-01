import { Link } from "react-router-dom";
import ICar from "../interfaces/ICar";

export default function CarCard({ car }: { car: ICar }) {
  return (
    <nav>
      {car.CarMake}
      <br />
      <Link to={`/car/${car.id}`}>Read more</Link>
    </nav>
  );
}
