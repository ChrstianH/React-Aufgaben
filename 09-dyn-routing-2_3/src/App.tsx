import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/car/:id",
      element: <Car />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
