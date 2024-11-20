import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails() {
  const [moviePage, setMoviePage] = useState([]);

  useEffect(() => {
    const moviePageFetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie${id}?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=0&vote_count.gte=80`
      );
      const info = await response.json();
      setMoviePage(info);
    };
    moviePageFetch();
  }, []);

  return <></>;
}

export default MovieDetails;
