import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function JoinTeam(props) {
  const { Teams, users } = props;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const [inputCode, setInputCode] = useState("none");

  function LocalStorageSaveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  function LocalStorageSaveTeam(team) {
    localStorage.setItem("team", JSON.stringify(team));
  }

  function SearchTeam() {
    for (let i = 0; i < Teams.length; i++) {
      if (Teams[i].Code === Number(inputCode)) {
        selectUserLocal.TeamCode = Teams[i].Code;
        LocalStorageSaveUser(selectUserLocal);
        LocalStorageSaveTeam(Teams[i]);
        for (let user of users) {
          if (selectUserLocal.Name === user.Name) {
            user.TeamCode = Number(inputCode);
          }
        }
        window.location.reload();
      }
    }
    return false;
  }
  return (
    <>
      <h1>Присоединиться к команде</h1>
      <div>
        <input
          type="number"
          placeholder="Код команды"
          onChange={(e) => {
            setInputCode(e.target.value);
          }}
        ></input>
        <button onClick={SearchTeam}>Войти</button>
      </div>

      <NavLink to="/createTeam">или создайте команду</NavLink>
    </>
  );
}

export default JoinTeam;
