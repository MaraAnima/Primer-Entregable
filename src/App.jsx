<<<<<<< HEAD
<<<<<<< HEAD
=======
//import { useState } from 'react'
import './App.css'
=======
//import { useState } from 'react'
import './App.css'
import React from "react";
>>>>>>> 34170593fbf42db02e4bead9f23e16827b6a1043
import MovieCard from './components/MovieCard'
import Movies from './components/movies'
import RatingStar from "./components/RatingStar";
import MovieNavbar from './components/MovieNavbar'
<<<<<<< HEAD
=======
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 
>>>>>>> 34170593fbf42db02e4bead9f23e16827b6a1043


function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    
    <> 
    <MovieNavbar/>
    <div>
<<<<<<< HEAD
      <RatingStar iconSize={50} defaultRating={defaultRating} />
=======
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
>>>>>>> 34170593fbf42db02e4bead9f23e16827b6a1043
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
<<<<<<< HEAD
>>>>>>> parent of f3cc74e (Rating Stars)
=======
>>>>>>> 34170593fbf42db02e4bead9f23e16827b6a1043
