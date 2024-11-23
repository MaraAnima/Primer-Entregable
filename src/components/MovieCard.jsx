import { Link } from "react-router-dom";

function MovieCard({ title, poster_path, id }) {
  return (
    <div className="container">
      <div className=" movie">
        <Link to={`movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`} /*se escribe de esta forma y no llamando directamente a la prop por que es una ruta variable*/
            className="card-img-top"
            alt={title}
          />
          <div className="overlay">{title}</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
