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
        <img onClick={onOpenModal} src={poster_path} alt="" />
        <Modal open={isOpen} onClose={onCloseModal}>
          <h2>{title}</h2>
          <p>{plot}</p>
        </Modal>
      </div>
    </>
  );
}
export default MovieRecomendation;
