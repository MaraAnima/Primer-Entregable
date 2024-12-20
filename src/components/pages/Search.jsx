import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import MovieResults from "./MovieResults";
import MovieNavbar from "./MovieNavbar";
import Foot from "./Foot";

function Search({}) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please, enter a title to search.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=33351da04ac1d34c5939d977f66571b0`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
      alert("Error finding the movie, please try again");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <MovieNavbar />
      <div className="container">
        <div className="search">
          <InputGroup className="mb-3 mt-4 input">
            <Form.Control
              className="custom-input"
              aria-label="Buscar película"
              aria-describedby="button-addon1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search movie by title"
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={handleSearch}
              className="botonBuscar"
            >
              Search
            </Button>
          </InputGroup>

          <MovieResults movies={movies} />
        </div>
      </div>
    </>
  );
}

export default Search;
