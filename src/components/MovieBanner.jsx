import React, { useEffect } from "react";
import video1 from "../assets/img/video1.png";
import BuscáHeader from "../assets/img/BuscáHeader.png";
import video2 from "../assets/img/video2.png";
function MovieBanner() {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );

    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 5000 /* el periodo de tiempo en el cual se cambian las imagenes*/,
      ride: "carousel" /* le dice que cuando cargue la pagina empieza el evento*/,
    });

    carousel.cycle(); /* Es para que el slide sea automatico*/
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-4">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active visually-hidden"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className="visually-hidden"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className="visually-hidden"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={video1} alt="First slide" />
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={video2} alt="Second slide" />
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={BuscáHeader} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default MovieBanner;
