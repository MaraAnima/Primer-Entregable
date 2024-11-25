import data from "../data/data"; // Assuming 'data' is an array of movie objects
import MovieRecomendation from "./MovieRecomendation"; // Import your MovieRecomendation component
import "react-responsive-modal/styles.css";
import MovieNavbar from "./MovieNavbar";
import Foot from "./Foot";

function Recomendations() {
  return (
    <>
      <MovieNavbar />
      <div className="container">
        <div className="row">
          <h1 className="cajita  mt-4 recoleta">Recomendations</h1>
          {data.map((movie) => (
            <div className="col-3 mt-4 mb-4">
              <MovieRecomendation
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                plot={movie.plot}
              />
            </div>
          ))}
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Recomendations;
