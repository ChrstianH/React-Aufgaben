import BirdCard from "./BirdCard";
import type { Bird } from "../data/birds";
import { useState } from "react";
import { groupBy } from "../lib/groupBy";

interface BirdListProps {
  birds: Bird[];
}

export default function BirdList({ birds }: BirdListProps) {
  // wir brauchen useState, damit wir den Wert des selects speichern und in der Komponente verwenden können
  const [groupByCriterion, setGroupByCriterion] = useState("not");
  const [filterSpan, setFilterSpan] = useState(0);

  console.log(groupBy(birds, "foodsources"));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setGroupByCriterion(value);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterSpan(Number(value));
  };

  return (
    <div>
      <label htmlFor="groupBySelect">Vögel gruppieren</label>
      <select
        onChange={handleChange}
        value={groupByCriterion}
        id="groupBySelect"
        name="groupBy"
      >
        <option value="not">Don't Group</option>
        <option value="habitat">Habitat</option>
        <option value="foodSource">Food Source</option>
      </select>
      <br />
      <label htmlFor="filterBySpan">Max. Flügelpannweite</label>
      <input
        type="number"
        value={filterSpan}
        onChange={handleChange2}
        name="filterBySpan"
        id="filterBySpan"
        min={1}
      />
      <div>
        {groupByCriterion === "not" &&
          birds.map((bird) => <BirdCard bird={bird} />)}
      </div>
    </div>
  );
}
