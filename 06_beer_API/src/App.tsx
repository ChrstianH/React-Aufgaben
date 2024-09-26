import { useState } from "react";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import Header from "./components/Header";

function App() {
  const [isAllBeers, setAllBeers] = useState(false);
  const [isRandomBeer, setRandomBeer] = useState(false);

  return (
    <div>
      {!isAllBeers && !isRandomBeer && (
        <Header setAllBeers={setAllBeers} setRandomBeer={setRandomBeer} />
      )}
      {isAllBeers && <AllBeers />}
      {isRandomBeer && <RandomBeer />}
    </div>
  );
}

export default App;
