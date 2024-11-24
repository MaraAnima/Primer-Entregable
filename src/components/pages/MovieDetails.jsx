import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const moviePageFetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=33351da04ac1d34c5939d977f66571b0&language=en-US`
      );
      const data = response.data;
      setMovie(data);
    };
    moviePageFetch();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <Movie
        original_language={movie.original_language}
        title={movie.title}
        poster_path={movie.poster_path}
        overview={movie.overview}
        release_date={movie.release_date}
      />
    </>
  );
}

export default MovieDetails;
