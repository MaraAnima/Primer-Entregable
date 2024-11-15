import { Rating } from "react-simple-star-rating";
import "./RatingStar.css";

export function RatingStar({ rating, setRating, setMovies }) {
  const handleRating = (rate) => {
    setRating(rate);

    console.log("Rating seleccionado:", rate);
    // https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&vote_average.gte=${rating}&vote_count.gte=40
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
