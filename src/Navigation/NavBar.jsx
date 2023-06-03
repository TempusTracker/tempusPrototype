import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to="/MyProfile">Profile&nbsp;</NavLink>
      <NavLink to="/MainPage">main&nbsp;</NavLink>
      <NavLink to="/TaskBar">task&nbsp;</NavLink>
      <NavLink to="/MyTeam">team&nbsp;</NavLink>
    </>
  );
}

export default NavBar;
