import React from "react";
import NavBar from "../../Navigation/NavBar";
import { NavLink } from "react-router-dom";

function ProfilPage(props) {
  const { UserFullData } = props;

  function logUot() {
    localStorage.removeItem("user");
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.setItem("team", JSON.stringify({}));
    window.location.href = "/";
    alert("пока");
  }
  console.log(UserFullData);
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
