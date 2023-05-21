import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to="/MyProfile">Profile</NavLink>
      <NavLink to="/MainPage">main</NavLink>
      <NavLink to="/TaskBar">task</NavLink>
      <NavLink to="/MyTeam">team</NavLink>
    </>
  );
}

export default NavBar;
