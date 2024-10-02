import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import Homepage from "./pages/Homepage";
import BeerDetails from "./pages/BeerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/beers",
        element: <AllBeers />,
      },
      {
        path: "/beers/:id",
        element: <BeerDetails />,
      },
      {
        path: "/beers/random",
        element: <RandomBeer />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
