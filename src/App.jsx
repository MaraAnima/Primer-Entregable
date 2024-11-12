//import { useState } from 'react'
import './App.css'
import React from "react";
import MovieCard from './components/MovieCard'
import Movies from './components/movies'
import RatingStar from "./components/RatingStar";
import MovieNavbar from './components/MovieNavbar'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 


function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    
    <> 
    <MovieNavbar/>
    <div>
    const ratingChanged = (newRating) => {
  console.log(newRating);
};
 
render(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
 
  document.getElementById("where-to-render")
);
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
