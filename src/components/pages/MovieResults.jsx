import React from "react";
import MovieNavbar from "./MovieNavbar";
import Row from "react-bootstrap/Row";

import MovieCard from "../MovieCard";

function MovieResults({ movies }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3 mt-4 mb-4">
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                id={movie.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieResults;
