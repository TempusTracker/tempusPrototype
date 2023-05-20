import React, { useContext, useState } from "react";
import styles from "./MainPage.css";
import { NavLink } from "react-router-dom";

function MainPage(props) {
  const { selectUser, setSelectUser, setIsLogged } = props;

  console.log(selectUser);

  function logUot() {
    setIsLogged(false);
    setSelectUser({});
    alert("пока");
  }

  return (
    <div>
      <div className="userName">{selectUser.Name}</div>
      <div className="userLogin">{selectUser.Email}</div>
      <NavLink to="/" onClick={logUot}>
        выйти
      </NavLink>
    </div>
  );
}

export default MainPage;
