import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

function MovieList({ rating }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (reset = false) => {
    if (reset) {
      setMovies([]);
      setPage(1);
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=${rating}&vote_count.gte=80`
    );
    const data = response.data;
    setMovies((prevMovies) => [...prevMovies, ...data.results]);
    setHasMore(data.results.length > 0);
  };

  useEffect(() => {
    fetchMovies(true);
  }, [rating]);

  const fetchMoreMovies = () => {
    if (hasMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchMovies();
        return nextPage;
      });
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more movies!</p>}
      >
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3 mt-4 mb-4">
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                id={movie.id}
                release_date={movie.release_date}
              />
              <div></div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieList;
