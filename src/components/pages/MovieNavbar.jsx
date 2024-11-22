import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieNavbar() {
  const [mostrarInput, setMostrarInput] = useState(false); // Estado para controlar visibilidad del input
  const [terminoBusqueda, setTerminoBusqueda] = useState(""); // Estado para almacenar el texto ingresado

  const alternarInput = () => {
    setMostrarInput((prev) => !prev); // Alterna entre true y false
  };

  const manejarCambioInput = (e) => {
    setTerminoBusqueda(e.target.value); // Actualiza el término de búsqueda
  };

  const realizarBusqueda = () => {
    if (terminoBusqueda.trim() === "") {
      alert("Por favor, ingrese un término para buscar."); // Mensaje si está vacío
      return;
    }
    console.log(`Buscando películas con título: ${terminoBusqueda}`);
    // Aquí podrías realizar una redirección o llamada a la API de búsqueda.
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav>
            <ul>
              <li>
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
                      placeholder="Buscar películas por título..."
                      value={terminoBusqueda}
                      onChange={manejarCambioInput}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") realizarBusqueda(); // Buscar al presionar Enter
                      }}
                    />
                  )}
                </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Recomendations">Recomendations</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MovieNavbar;
