import Foot from "./Foot";
import MovieNavbar from "./MovieNavbar";

function Movie({ title, poster_path, overview, release_date }) {
  return (
    <>
      <MovieNavbar />
      <div className="despuesveo">
        <div className="movie-content ">
          <img
            className="img-responsive"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <div className="movie-details">
            <h1 className="title">{title}</h1>
            <p className="description">{overview}</p>
            <h2>{release_date}</h2>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
}

export default Movie;
