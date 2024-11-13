<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState } from "react";
import "./RatingStar.css";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "yellow";

export default function RatingStar({ count, defaultRating, icon, color, iconSize }) {
    const [rating, setRating] = useState(defaultRating);
    const [temporaryRating, setTemporaryRating] = useState(0);
  
    let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);
  
    const handleClick = (rating) => {
      setRating(rating);
      localStorage.setItem("starRating", rating);
    };
  
    return (
      <div className="starsContainer">
        {stars.map((item, index) => {
          const isActiveColor =
            (rating || temporaryRating) &&
            (index < rating || index < temporaryRating);
  
          let elementColor = "";
  
          if (isActiveColor) {
            elementColor = color || DEFAULT_COLOR;
          } else {
            elementColor = DEFAULT_UNSELECTED_COLOR;
          }
  
          return (
            <div
              className="star"
              key={index}
              style={{
                fontSize: iconSize ? `${iconSize}px` : "14px",
                color: elementColor,
                filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
              }}
              onMouseEnter={() => setTemporaryRating(index + 1)}
              onMouseLeave={() => setTemporaryRating(0)}
              onClick={() => handleClick(index + 1)}
            >
              {icon ? icon : DEFAULT_ICON}
            </div>
          );
        })}
      </div>
    );
  }
>>>>>>> parent of f3cc74e (Rating Stars)
=======
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

render(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,

  document.getElementById("where-to-render")
);
>>>>>>> 34170593fbf42db02e4bead9f23e16827b6a1043
