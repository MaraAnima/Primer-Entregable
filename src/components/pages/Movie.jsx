import Foot from "./Foot";
import MovieNavbar from "./MovieNavbar";
function Movie({ title, poster_path, overview }) {
  return (
    <>
      <MovieNavbar />
      <div className="container">
        <div className="detailsBox">
          <h1 className="title">{title}</h1>
          <img
            className="posterImg"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />

          <p className="description">{overview}</p>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Movie;
