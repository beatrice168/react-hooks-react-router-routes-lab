import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems=movies.map((movie) => (
    <div key={movie.title}>
     {movie.title}
     {movie.time}
     <ul>
       {movie.genres.map((genre) => (
         <li key={genre}>{genre}</li>
       ))}
     </ul>
     </div>
  ))

  return <div>
    <h1>movies page</h1>
  

     {movieItems} 
    {/*{code here}*/}
    </div>;
}

export default Movies;
