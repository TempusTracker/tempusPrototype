import React from "react";
import InfoTeam from "./components/InfoTeam";
import UsersTeam from "./components/UsersTeam";

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
      <InfoTeam selectTeamLocal={selectTeamLocal}></InfoTeam>
      <UsersTeam users={users} selectTeamLocal={selectTeamLocal}></UsersTeam>
      <button onClick={logOutTeam}>выйти</button>
    </>
  );
}

export default Team;
