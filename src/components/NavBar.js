import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink
    className={"navbar"}
    to="/"
    
    >Home</NavLink>
    <NavLink
    to="/movies"
    className={"navbar"}
    >
      Movies
    </NavLink>
    <NavLink
    className={"navbar"}
    to="/directors"
    
    >
      Directors
    </NavLink>
    <NavLink
    className={"navbar"}
    to="actors"
    
    >
     Actors
    </NavLink>
    
    
    {/*{code here}*/}</div>;
}

export default NavBar;
