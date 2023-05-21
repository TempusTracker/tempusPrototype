import React, { useContext, useState } from "react";
import styles from "./MainPage.css";
import NotFound from "./components/NotFound";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import { NavLink, Routes, Route } from "react-router-dom";

function MainPage(props) {
  const { setSelectUser } = props;
  return (
    <div>
      <header>Главная</header>
      <div>
        <NavLink to="/MyProfile">Profile</NavLink>
        <NavLink to="/MainPage">main</NavLink>
        <NavLink to="/TaskBar">task</NavLink>
        <NavLink to="/MyTeam">team</NavLink>
      </div>
    </div>
  );
}

export default MainPage;
