import React from "react";
import { directors } from "../data";

function Directors() {
const directorsInfo = directors.map((director) =>(
  <div key={director.name}>
    {director.name}
    <ul>
       {director.movies.map((movie)=>{
        return <li key={movie}>{movie}</li>
       })}
    </ul>
  </div>
))

  return <div>
    <h1>Directors page</h1>
    {directorsInfo}
    {/*{code here}*/}</div>;
}

export default Directors;
