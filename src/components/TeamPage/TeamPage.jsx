import React, { useState } from "react";
import NavBar from "../NavBar";
import JoinTeam from "./JoinTeam";
import Team from "./Team";

function LocalStorageSaveTeam(team) {
  localStorage.setItem("team", JSON.stringify(team));
}
let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
function TeamPage(props) {
  const { Teams, setTeams, users } = props;

  function CheckOnJoin(page) {
    if (selectUserLocal.TeamCode !== "none") {
      return page;
    } else {
      return <JoinTeam users={users} Teams={Teams} />;
    }
  }

  function selectTeam(code) {
    for (let i = 0; i < Teams.length; i++) {
      if (Teams[i].Code === code) {
        LocalStorageSaveTeam(Teams[i]);
      }
    }
    return false;
  }

  selectTeam(selectUserLocal.TeamCode);

  return (
    <>
      <header>Твоя команда</header>
      <div>
        <NavBar></NavBar>
        {CheckOnJoin(<Team users={users} Teams={Teams}></Team>)}
      </div>
    </>
  );
}

export default TeamPage;
