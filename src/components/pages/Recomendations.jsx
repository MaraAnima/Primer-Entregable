import data from "../data/data"; // Assuming 'data' is an array of movie objects
import MovieRecomendation from "./MovieRecomendation"; // Import your MovieRecomendation component
import "react-responsive-modal/styles.css";
import MovieNavbar from "./MovieNavbar";

function Recomendations() {
  return (
    <>
      {" "}
      <MovieNavbar />
      <div className="container">
        <div className="row">
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
    </>
  );
}

export default Recomendations;
