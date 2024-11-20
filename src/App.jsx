import "./App.css";
import MovieDetails from "./components/Page/MovieDetails";
import Movie from "./components/Page/Movie";
import Error404 from "./components/Page/Error404";
import Home from "./components/Page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Movie/:id",
      element: <Movie />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
