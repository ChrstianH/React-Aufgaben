import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import ICar from "../interfaces/ICar";
import carJson from "../assets/data/data.json";

export default function Home() {
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    setCars(carJson);
  }, []);
  return (
    <div className="grid">
      {cars.map((car: ICar) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
