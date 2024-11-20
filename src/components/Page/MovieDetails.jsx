import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const {id} = useParams();
  console.log(id);
  const [moviePage, setMoviePage] = useState(null);
  
  

  useEffect(() => {
    const moviePageFetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/find/${id}?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=0&vote_count.gte=80`
      );
      setMoviePage(response.data);
    };
    moviePageFetch ();
  }, [id]);

  return (
  <>
  <h1>uwu</h1>
  </>
)
}

export default MovieDetails;
