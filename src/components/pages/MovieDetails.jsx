import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  const [moviePage, setMoviePage] = useState(null);

  useEffect(() => {
    const moviePageFetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=33351da04ac1d34c5939d977f66571b0&language=en-US`
      );
      const data = response.data;
      setMoviePage(data);
    };
    moviePageFetch();
  }, [id]);

  if (!moviePage) return <p>Loading...</p>;

  return (
    <>
      <Movie
        title={moviePage.title}
        poster_path={moviePage.poster_path}
        overview={moviePage.overview}
      />
    </>
  );
}

export default MovieDetails;
