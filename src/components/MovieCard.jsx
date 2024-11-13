
function MovieCard({ title, poster_path }) {
  return (
    <div className="">

    <div className="container" style={{ width: '18rem' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="card-img-top"
        alt={title}
      />
      <div className='overlay '>
                        {title}
                    </div>

    </div>
    </div>
  );
}

export default MovieCard;