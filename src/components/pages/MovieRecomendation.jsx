import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function MovieRecomendation({ title, poster_path, plot }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="movie">
        <img
          className="card-img-top"
          onClick={onOpenModal}
          src={poster_path}
          alt={title}
        />
        <div className="overlay ">{title}</div>
        <Modal
          classNames={{ modal: "custom-modal", overlay: "custom-overlay" }}
          open={isOpen}
          onClose={onCloseModal}
        >
          <img src={poster_path} alt={title} className="container posteR" />
          <div className="container">
            <h2 className="recoTitle">{title}</h2>
            <p>{plot}</p>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default MovieRecomendation;
