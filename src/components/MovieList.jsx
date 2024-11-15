import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MovieList({ rating, movies, setMovies }) {
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

  const minRating = (rating - 1) * 2;
  const maxRating = rating * 2;
  const filteredMovies = movies.filter(
    (movie) =>
      movie.vote_average >= minRating && movie.vote_average <= maxRating
  );

  return (
    <div className="row">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id} className="col-3 mt-4 mb-4">
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          </div>
        ))
      ) : (
        <p>
          Lo sentimos, no se encontraron películas con el rating solicitado.
        </p>
      )}
    </div>
  );
}

export default MovieList;
