import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoHack1 from "../../assets/img/logoHack1.png";

function MovieNavbar() {
  const [mostrarInput, setMostrarInput] = useState(false); // Estado para controlar visibilidad del input
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
    console.log(`Buscando películas con título: ${terminoBusqueda}`);
    // Aquí podrías realizar una redirección o llamada a la API de búsqueda.
  };

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <img src={logoHack1} alt="Logo" className="logo" />
            </Link>
            <div className="Box">
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
                          placeholder="Search by title..."
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
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/recomendations">Recomendations</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieNavbar;
