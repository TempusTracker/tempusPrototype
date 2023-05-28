import React from "react";

let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};

function LocalStorageSaveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
function LocalStorageSaveTeam(team) {
  localStorage.setItem("team", JSON.stringify(team));
}

function Team(props) {
  const { users } = props;

  function logOutTeam() {
    selectUserLocal.TeamCode = "none";
    LocalStorageSaveUser(selectUserLocal);
    LocalStorageSaveTeam({});
    window.location.reload();
  }
  return (
    <>
      <h1>{selectTeamLocal.Title}</h1>
      <h1>{selectTeamLocal.Description}</h1>
      <button onClick={logOutTeam}>выйти</button>
    </>
  );
}

export default Team;
