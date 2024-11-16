import "./App.css";
import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";
import MovieBanner from "./components/MovieBanner";

import { useState } from "react";

import MovieNavbar from "./components/MovieNavbar";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <MovieNavbar />
      <MovieBanner />
      <div className="container">
        <RatingStar rating={rating} setRating={setRating} />
        <MovieList rating={rating} />
      </div>
    </>
  );
}

export default App;
