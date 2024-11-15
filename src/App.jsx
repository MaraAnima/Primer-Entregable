import "./App.css";
import { useState } from "react";

import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";
import MovieBanner from "./components/MovieBanner";
import MovieNavbar from "./components/MovieNavbar";

function App() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);

  return (
    <>
      <MovieNavbar />
      <MovieBanner />
      <div className="container">
        <RatingStar
          rating={rating}
          setRating={setRating}
          setMovies={setMovies}
        />
        <MovieList rating={rating} movies={movies} setMovies={setMovies} />
      </div>
    </>
  );
}

export default App;
