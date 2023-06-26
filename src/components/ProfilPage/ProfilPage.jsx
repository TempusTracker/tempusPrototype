import React from "react";
import NavBar from "../../Navigation/NavBar";
import { NavLink } from "react-router-dom";

function ProfilPage(props) {
  const { UserFullData } = props;

  function logUot(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.setItem("team", JSON.stringify({}));
    window.location.href = "/LoginForm";
    alert("пока");
  }

  return (
    <>
      <label>Profil</label>
      <div>
        <NavBar />
      </div>
      <div className="userName">{UserFullData.UserData.Name}</div>
      <div className="userLogin">{UserFullData.UserData.Email}</div>
      <button onClick={logUot}>выйти</button>
    </>
  );
}

export default ProfilPage;
