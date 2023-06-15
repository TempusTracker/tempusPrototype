import React from "react";
import InfoTeam from "./components/InfoTeam";
import UsersTeam from "./components/UsersTeam";

function LocalStorageSaveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
function LocalStorageSaveTeam(team) {
  localStorage.setItem("team", JSON.stringify(team));
}

function Team(props) {
  const { users, isTeamLocal, UserFullData } = props;

  function logOutTeam() {
    UserFullData.UserData.TeamCode = "none";
    LocalStorageSaveUser(UserFullData);
    LocalStorageSaveTeam({});
    window.location.reload();
  }

  return (
    <>
      <InfoTeam users={users} isTeamLocal={isTeamLocal}></InfoTeam>
      <UsersTeam
        UserFullData={UserFullData}
        users={users}
        isTeamLocal={isTeamLocal}
      ></UsersTeam>
      <button onClick={logOutTeam}>выйти</button>
    </>
  );
}

export default Team;
