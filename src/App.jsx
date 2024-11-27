import "./App.css";
import MovieDetails from "./components/pages/MovieDetails";
import Movie from "./components/pages/Movie";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recomendations from "./components/pages/Recomendations";
import Search from "./components/pages/Search";
import { useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home movies={movies} setMovies={setMovies} />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/search/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/recomendations",
      element: <Recomendations />,
    },
    {
      path: "/search",
      element: <Search setMovies={setMovies} />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
