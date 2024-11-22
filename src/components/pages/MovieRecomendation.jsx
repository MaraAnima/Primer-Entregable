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
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <div className="recomendationsMovie mb-5 movie ">
              <img
                className="card-img-top imgSize"
                onClick={onOpenModal}
                src={poster_path}
                alt=""
              />
              <div className="overlay">{title}</div>
              <Modal open={isOpen} onClose={onCloseModal}>
                <h2>{title}</h2>
                <p>{plot}</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieRecomendation;