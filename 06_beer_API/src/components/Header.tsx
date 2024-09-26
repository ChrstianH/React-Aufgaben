export default function Header(props: {
  setAllBeers: (ab: boolean) => void;
  setRandomBeer: (rb: boolean) => void;
}) {
  const handleAll = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.setAllBeers(true);
    props.setRandomBeer(false);
  };
  const handleRandom = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.setAllBeers(false);
    props.setRandomBeer(true);
  };

  return (
    <nav>
      <button onClick={handleAll}>All Beers</button>
      <button onClick={handleRandom}>Random Beer</button>
    </nav>
  );
}
