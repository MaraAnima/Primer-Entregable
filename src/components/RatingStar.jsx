import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function RatingStar({ rating, setRating }) {
  const handleRating = (rate) => {
    setRating(rate * 2 - 2);

    console.log(rating);
  };

  return (
    <div className="App">
      <div className="Star cajita Box">
        Filtrar por rating:
        <Rating onClick={handleRating} ratingValue={rating} />Y mas
      </div>
    </div>
  );
}
export default RatingStar;
