//import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Movies from './components/movies'
import RatingStar from "./components/RatingStar";
import MovieNavbar from './components/MovieNavbar'


function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    
    <> 
    <MovieNavbar/>
    <div>
      <RatingStar iconSize={50} defaultRating={defaultRating} />
    </div>

    <div className="row">
    <div className="box col-4" >
    {Movies.map((movies) => (
      <div className='movie'>
       <MovieCard
          key={movies.id}
          name={movies.name}
          poster={movies.poster}
        />
       </div>
    ))}
  </div>
         </div>
  </>
     

    
  )
}

export default App
