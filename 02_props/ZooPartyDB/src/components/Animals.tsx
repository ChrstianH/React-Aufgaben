import animals from "../assets/data";
import Animal from "./animal";

function Animals() {
  return (
    <main>
      {animals.map(
        ({ name, species, habitat, lifespan, diet, funFacts, emoji }) => (
          <Animal
            name={name}
            species={species}
            habitat={habitat}
            lifespan={lifespan}
            diet={diet}
            funFacts={funFacts}
            emoji={emoji}
          />
        )
      )}
    </main>
  );
}

export default Animals;
