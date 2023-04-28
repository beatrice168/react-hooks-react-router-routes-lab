import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsInfo=actors.map((actor)=>(
    <div key={actor.name}>{actor.name}
    <ul>{actor.movies.map((movie)=>(
      <li key={movie}>{movie}</li>
    ))}</ul>
    
    </div>
  ))

  return <div>
    <h1>Actors page</h1>
    {actorsInfo}
    
    
    {/*{code here}*/}</div>;
}

export default Actors;
