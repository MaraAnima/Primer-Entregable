import Data from "../Data/Data";
import MovieRecomendation from "./MovieRecomendations";

function Recomendations() {
  return (
    <>
      <div className="defaultBox container row">
        {Data.map((movieRecomendation) => (
          <div className="col-4 mb-4" key={movieRecomendation.id}>
            <MovieRecomendation
              name={movieRecomendation.name}
              poster_path={movieRecomendation.poster_path}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Recomendations;
