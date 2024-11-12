function MovieCard({ name, poster }) {
  return (
    <div className="card" style={{ maxWidth: "15rem" }}>
      <img src={poster} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default MovieCard;
