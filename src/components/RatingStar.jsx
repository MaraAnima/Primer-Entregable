import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";


export function RatingStar() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <div className="Star Box">
        Filtrar por rating:
        <Rating onClick={handleRating} ratingValue={rating} />Y mas
      </div>
    </div>
  );
}
export default RatingStar;
