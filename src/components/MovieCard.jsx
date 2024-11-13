
function MovieCard({ title, poster_path }) {
  return (
  
    <div className=" movie" >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}  /*se escribe de esta forma y no llamando directamente a la prop por que es una ruta variable*/
        className="card-img-top"
        alt={title}
      />
      <div className='overlay '>
                        {title}  
                    </div>

    </div>
  );
}

export default MovieCard;