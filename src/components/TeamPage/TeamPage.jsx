import React, { useState } from "react";
import NavBar from "../NavBar";
import JoinTeam from "./JoinTeam";
import Team from "./Team";

function TeamPage(props) {
  const { Teams, setTeams, users } = props;

  function CheckOnJoin(page) {
    let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
    if (selectUserLocal.TeamCode !== "none") {
      return page;
    } else {
      return <JoinTeam users={users} Teams={Teams} />;
    }
  }
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
