import React, { useState } from "react";
import data from "../data/data"; // Assuming 'data' is an array of movie objects
//import MovieRecomendation from "./MovieRecomendations"; // Import your MovieRecomendation component
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Recomendations() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={onCloseModal}>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>

      <div className="recomendations-container">
        {/* {data.map((movie) => (
          <MovieRecomendation
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            plot={movie.plot}
          />
        ))} */}
      </div>
    </>
  );
}

export default Recomendations;
