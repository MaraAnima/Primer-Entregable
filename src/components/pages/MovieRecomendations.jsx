function MovieRecomendation({ name, poster_path }) {
  return (
    <>
      <div className=" movie">
        <img src={poster_path} className="card-img-top" alt={name} />
        <div className="overlay">{name}</div>
      </div>
    </>
  );
}

export default MovieRecomendation;
