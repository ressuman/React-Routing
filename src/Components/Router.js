import React from "react";
import { NavLink } from "react-router-dom";

function Router() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Services">Services</NavLink>
    </div>
  );
}

export default Router;
