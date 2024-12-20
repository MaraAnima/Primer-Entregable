import React, { useEffect } from "react";
import video1 from "../assets/img/video1.png";
import video2 from "../assets/img/video2.png";
import hack1 from "../assets/img/hack1.png";
import { Link } from "react-router-dom";
function MovieBanner() {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );

    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
    });

    carousel.cycle();
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
        <Link to="/recomendations">
          <div className="carousel-item">
            <img className="d-block w-100" src={video2} alt="Second slide" />
          </div>
        </Link>
        <div className="carousel-item">
          <img className="d-block w-100" src={hack1} alt="Third slide" />
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
