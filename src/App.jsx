import "./App.css";
import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";
import MovieBanner from "./components/MovieBanner";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div>
        <MovieBanner />
      </div>
      <div className="container">
        <RatingStar rating={rating} setRating={setRating} />
        <MovieList rating={rating} />
      </div>
    </>
  );
}

export default App;
