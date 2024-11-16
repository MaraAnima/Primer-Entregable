import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function MovieList({ rating }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=${rating}&vote_count.gte=80 `
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [rating]);

  return (
    <div className="row">
      {movies.map((movie) => (
        /*Puse el formato de como se muestran las peliculas en otro componente para que quede mas limpio, ademas facilita ponerle hovers*/
        <div key={movie.id} className=" col-3 mt-4 mb-4">
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
}
export default MovieList;
