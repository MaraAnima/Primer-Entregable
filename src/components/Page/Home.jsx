import MovieList from "../MovieList";
import RatingStar from "../RatingStar";
import MovieBanner from "../MovieBanner";
import { useState } from "react";
import MovieNavbar from "./MovieNavbar";
import MovieDetails from "./MovieDetails";
import MovieCard from "../MovieCard";

function Home() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <MovieNavbar />
      <MovieBanner />
      <div className="container">
        <RatingStar rating={rating} setRating={setRating} />
        <MovieList rating={rating} />
      </div>
    </>
  );
}

export default Home;
