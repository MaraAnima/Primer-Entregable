import "../App.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function RatingStar({ rating, setRating }) {
  const handleRating = (rate) => {
    setRating(rate * 2 - 2);

    console.log(rating);
  };

  return (
    <div className="App">
      <div className="recoleta cajita Box">
        Filter by Rating:
        <Rating onClick={handleRating} ratingValue={rating} />& more
      </div>
    </div>
  );
}
export default RatingStar;
