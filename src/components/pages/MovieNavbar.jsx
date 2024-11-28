import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoHack1 from "../../assets/img/logoHack1.png";
import Search from "./Search";

function MovieNavbar({ setMovies, movies }) {
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
                    <Link to="/search">
                      <button className="botonBuscar">🔍︎</button>
                    </Link>
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
