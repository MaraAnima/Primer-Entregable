import MovieList from "../MovieList";
import RatingStar from "../RatingStar";
import MovieBanner from "../MovieBanner";
import { useState } from "react";
import MovieNavbar from "./MovieNavbar";
import Search from "./Search";

function Home() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);

  return (
    <>
      <MovieNavbar movies={movies} setMovies={setMovies} />
      <MovieBanner />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <RatingStar rating={rating} setRating={setRating} />
            <MovieList rating={rating} movies={movies} setMovies={setMovies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
