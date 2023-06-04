import React from "react";
import NavBar from "../../Navigation/NavBar";
import { NavLink } from "react-router-dom";

function ProfilPage(props) {
  const { setSelectUser, UserFullData } = props;

  function logUot() {
    setSelectUser({});
    localStorage.removeItem("user");
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.setItem("team", JSON.stringify({}));
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
      <NavLink to="/" onClick={logUot}>
        выйти
      </NavLink>
    </>
  );
}

export default ProfilPage;
