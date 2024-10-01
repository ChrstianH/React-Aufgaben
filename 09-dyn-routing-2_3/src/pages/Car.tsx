import { useParams } from "react-router-dom";
import carJson from "../assets/data/data.json";
import ICar from "../interfaces/ICar";

export default function Car() {
  const params = useParams();
  const car: ICar = carJson.find(
    (car) => Number(car.id) === Number(params.id)
  ) as ICar;

  return (
    <div className="singleCar">
      <div>{car.CarMake}</div>
      <div>{car.carModel}</div>
      <div>{car.CarYear}</div>
    </div>
  );
}
