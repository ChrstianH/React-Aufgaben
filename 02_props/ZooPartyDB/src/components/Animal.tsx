interface AnimalProps {
  name: string;
  species: string;
  habitat: string;
  lifespan: number;
  diet: string;
  funFacts: string[];
  emoji: string;
}

function Animal(props: AnimalProps) {
  return (
    <div className="animal">
      <div className="emoji">{props.emoji}</div>
      <div className="name">{props.name}</div>
      <div>{props.species}</div>
      <div>{props.habitat}</div>
      <div>{props.diet}</div>
      <div>{props.lifespan} years</div>
      <div className="funfacts">
        <ul>
          {props.funFacts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Animal;
