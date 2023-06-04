import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function JoinTeam(props) {
  const { Teams, users } = props;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const [inputCode, setInputCode] = useState("none");
  let ShowInviteTeam;
  function LocalStorageSaveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  function LocalStorageSaveTeam(team) {
    localStorage.setItem("team", JSON.stringify(team));
  }

  function SearchTeam() {
    for (let i = 0; i < Teams.length; i++) {
      if (Teams[i].Code === Number(inputCode)) {
        selectUserLocal.UserData.TeamCode = Teams[i].Code;
        LocalStorageSaveUser(selectUserLocal);
        LocalStorageSaveTeam(Teams[i]);
        for (let user of users) {
          if (selectUserLocal.UserData.Name === user.UserData.Name) {
            user.UserData.TeamCode = Number(inputCode);
          }
        }
        window.location.reload();
      }
    }
    return false;
  }

  function CheckOnAllert() {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].UserData.InviteCode !== "" &&
        users[i].UserData.Name == selectUserLocal.UserData.Name
      ) {
        for (let j = 0; j < Teams.length; j++) {
          if (Teams[j].Code == users[i].UserData.InviteCode) {
            ShowInviteTeam = Teams[j].Title;
          }
        }
      }
    }
  }

  function GoAllertTeam() {
    for (let i = 0; i < Teams.length; i++) {
      if (Teams[i].Title == ShowInviteTeam) {
        document.getElementById("inp").value = Teams[i].Code;
        setInputCode(Teams[i].Code);
      }
    }
  }

  CheckOnAllert();

  return (
    <>
      <h1>Присоединиться к команде</h1>
      <div>
        <input
          type="number"
          id="inp"
          placeholder="Код команды"
          onChange={(e) => {
            setInputCode(e.target.value);
          }}
        ></input>
        <button onClick={SearchTeam}>Войти</button>
      </div>
      <NavLink to="/createTeam">или создайте команду</NavLink>
      <div onClick={GoAllertTeam}>
        {ShowInviteTeam ? "вы приглашены " + ShowInviteTeam : ""}
      </div>
    </>
  );
}

export default JoinTeam;
