import { useState } from "react";

function MovieCard() {
  async function movies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    );
    const movies = await response.json();
    console.log(movies);
  }

  return <></>;
}
export default MovieCard;
