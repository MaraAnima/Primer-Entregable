import { useState, useEffect } from "react";

function Search({ movies, setMovies }) {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState(""); // Estado para almacenar el texto ingresado

  const alternarInput = () => {
    setMostrarInput((prev) => !prev);
  };

  const manejarCambioInput = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const realizarBusqueda = () => {
    if (terminoBusqueda.trim() === "") {
      alert("Por favor, ingrese un término para buscar.");
      return;
    }

    useEffect(() => {
      const getMovie = async () => {
        const response = await axios.get(
          `'https://api.themoviedb.org/3/search/movie?query=${terminoBusqueda}&include_adult=false&language=en-US&page=1`
        );
        const data = response.data;
        setMovies(data);
      };
      getMovie();
    }, [terminoBusqueda]);
  };

  return (
    <>
      <div className="search">
        {/* Botón para mostrar/ocultar el input */}
        <button className="botonBuscar" onClick={alternarInput}>
          🔍︎
        </button>
        {/* Input que aparece/desaparece */}
        {mostrarInput && (
          <input
            type="text"
            className="inputBuscar"
            placeholder="Search by title..."
            value={terminoBusqueda}
            onChange={manejarCambioInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") realizarBusqueda(); // Buscar al presionar Enter
            }}
          />
        )}
      </div>
    </>
  );
}
export default Search;
