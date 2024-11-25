import Foot from "./Foot";
import MovieNavbar from "./MovieNavbar";

function Movie({
  title,
  poster_path,
  overview,
  release_date,
  original_language,
  vote_average,
}) {
  return (
    <>
      <MovieNavbar />
      <div className="movie-content ">
        <img
          className="img-responsive"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="movie-details">
          <h1 className="title">{title}</h1>

          <div className="container caja mt-4">
            <p className="description">{overview}</p>

            <p class="card-text ">
              <small className="boxit ">{release_date}</small>
              <small className="boxit">
                Original lenguage: {original_language}
              </small>
              <small className="boxit">Rating: {vote_average}</small>
            </p>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
}

export default Movie;
