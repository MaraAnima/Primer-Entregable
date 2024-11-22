import React from "react";
import data from "../data/data"; // Assuming 'data' is an array of movie objects
import MovieRecomendation from "./MovieRecomendations"; // Import your MovieRecomendation component

function Recomendations() {
  return (
    <div className="recomendations-container">
      {data.map((movie) => (
        <MovieRecomendation
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          plot={movie.plot}
        />
      ))}
    </div>
  );
}

export default Recomendations;
