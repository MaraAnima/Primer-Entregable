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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/recomendations",
      element: <Recomendations />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
