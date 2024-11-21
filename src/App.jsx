import "./App.css";
import MovieDetails from "./components/pages/MovieDetails";
import Movie from "./components/pages/Movie";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recomendations from "./components/pages/Recomendations";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/Recomendations",
      element: <Recomendations />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
