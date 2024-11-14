import React, { useEffect } from "react";
import "./MovieBanner.css";
import header from "../assets/img/header.jpg";

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
          <img className="d-block w-100" src={header} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/09/Refresh_10_Halloween_Facts.png?resize=640%2C360"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://media.newyorker.com/photos/6515ba377ef26f0f1de6985a/master/w_2560%2Cc_limit/shouts-elson-spooky%2520season.jpg"
            alt="Third slide"
          />
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
