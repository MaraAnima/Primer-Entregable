import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component"; 

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);  // Trackea la pagina en la que se encuentra de la api
  const [hasMore, setHasMore] = useState(true);  // es para verificar si hay mas paginas dentro de la api

  // lo que ya hiciimos de la api
  async function fetchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=33351da04ac1d34c5939d977f66571b0&include_adult=false&page=${page}&sort_by=popularity.desc&vote_count.gte=40` // define lo que queremos que cambie dentro del link
    );
    const data = await response.json();

    // un if por si no hay mas info que sacar de la api 
    if (data.results.length === 0) {
      setHasMore(false);
    }

    // es lo que imprime las nuevas peliculas dentro de la lista
    setMovies((prevMovies) => [...prevMovies, ...data.results]);
  }

  // lo que crea el bucle de que cuando se termine la info de una pagina vuelva a realizar la funcion en busca de mas
  useEffect(() => {
    fetchMovies();
  }, [page]); //se modifica al repetirse el bucle

  return (
    <div>


 
      <InfiniteScroll
        dataLength={movies.length}  // Numero de peliculas actualmente cargadas
        next={() => setPage((prevPage) => prevPage + 1)}  // Lo que  carga mas paginas (le suma a la pagina actual uno para recorrer la api)
        hasMore={hasMore}  // defiine el componente hasMore previamente utilizado
        loader={<h4>Cargando Nuevas Paginas...</h4>}  // Simplemente estetico, aparece entre los intervalos donde se cargan las pelis
        endMessage={<p>No hay mas peliculas para ver!</p>}  // Lo mismo que lo anterior pero cuando nohaya mas pelis
      >
  
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3 mt-4 mb-4">
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieList;
