import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

function ProfilePage(props) {
  const { setSelectUser } = props;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};

  function logUot() {
    setSelectUser({});
    localStorage.setItem("user", JSON.stringify({}));
    localStorage.setItem("logged", JSON.stringify(false));
    alert("пока");
  }

  return (
    <div>
      <label>Profil</label>
      <div className="userName">{selectUserLocal.Name}</div>
      <div className="userLogin">{selectUserLocal.Email}</div>
      <NavLink to="/" onClick={logUot}>
        выйти
      </NavLink>
    </div>
  );
}

export default ProfilePage;
