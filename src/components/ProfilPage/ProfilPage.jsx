import React from "react";
import NavBar from "../NavBar";
import { NavLink } from "react-router-dom";

function ProfilPage(props) {
  const { setSelectUser } = props;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};

  function logUot() {
    setSelectUser({});
    localStorage.setItem("user", JSON.stringify({}));
    localStorage.setItem("logged", JSON.stringify(false));
    alert("пока");
  }

  return (
    <>
      <label>Profil</label>
      <div>
        <NavBar />
      </div>
      <div className="userName">{selectUserLocal.Name}</div>
      <div className="userLogin">{selectUserLocal.Email}</div>
      <NavLink to="/" onClick={logUot}>
        выйти
      </NavLink>
    </>
  );
}

export default ProfilPage;
