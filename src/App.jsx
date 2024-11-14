import "./App.css";
import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";
import MovieBanner from "./components/MovieBanner";

function App() {
  return (
    <>
      <div>
        <MovieBanner />
      </div>
      <div className="container">
        <RatingStar />
        <MovieList />
      </div>
    </>
  );
}

export default App;
