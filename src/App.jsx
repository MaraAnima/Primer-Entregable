import "./App.css";
import MovieList from "./components/MovieList";
import RatingStar from "./components/RatingStar";
import MovieBanner from "./components/MovieBanner";
import MovieNavbar from "./components/MovieNavbar"

function App() {
  return (
    <>
      
    
      <MovieNavbar/>
        <MovieBanner />
      <div className="container">
        <RatingStar />
        <MovieList />
      </div>
    </>
  );
}

export default App;
