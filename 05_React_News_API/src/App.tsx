import NewsContent from "./copmponents/NewsContent";
import SearchForm from "./copmponents/SearchForm";

const apiKey = "517e77f5cd1c4fc39b5eff509379de62";
const BASE_URL = `http://newsapi.org/v2/everything?q=bitcoin&language=de&apiKey=${apiKey}`;

function App() {
  return (
    <div>
      <header>
        <h1>Breaking News</h1>
      </header>
      <SearchForm />
      {/* <NewsContent apiKey={apiKey} url={BASE_URL} /> */}
      <NewsContent url={BASE_URL} />
    </div>
  );
}

export default App;
