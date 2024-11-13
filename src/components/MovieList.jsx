import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


function MovieList() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    );
    const data = await response.json();
    setMovies(data.results);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (

      <div className="row">
    {movies.map((movie) => (
      
      <div key={movie.id} className=" col-2 mt-4 mb-4">
        <MovieCard
          title={movie.title}
          poster_path={movie.poster_path}
        />
      </div>

    ))}
  </div>
  
  );
}
export default MovieList;
