import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id",
      element: <BlogArticle />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
