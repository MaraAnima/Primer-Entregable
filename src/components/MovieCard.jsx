import { useState, useEffect } from "react";

function MovieCard() {
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
    <div>
      <h1>Movies</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <div className="imag">
              <img src={""} alt={movie.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieCard;
