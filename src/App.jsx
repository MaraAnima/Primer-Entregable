import "./App.css";
import MovieDetails from "./components/Page/MovieDetails";
import Movie from "./components/Page/Movie";
import AboutUs from "./components/Page/AboutUs";
import Contact from "./components/Page/Contact";
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
      path: "/AboutUs",
      element: <AboutUs/>,
    },
    {
      path: "/Contact",
      element: <Contact/>,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails/>,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
