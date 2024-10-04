import Layout from "./components/Layout";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <div></div>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
