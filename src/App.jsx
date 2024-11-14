import "./App.css";
import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";

function App() {
  return (
    <>
    <div className="container">
    <RatingStar />
        <MovieList />
        </div>
    </>
  );
}

export default App;