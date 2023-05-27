import React, { useState } from "react";
import NavBar from "../NavBar";
import JoinTeam from "./JoinTeam";
import Team from "./Team";

function TeamPage(props) {
  const { Teams, setTeams } = props;

  function CheckOnJoin(page) {
    let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
    if (selectUserLocal.TeamCode !== "none") {
      return page;
    } else {
      return <JoinTeam Teams={Teams} />;
    }
  }
  return (
    <>
      <header>Твоя команда</header>
      <div>
        <NavBar></NavBar>
        {CheckOnJoin(<Team Teams={Teams}></Team>)}
      </div>
    </>
  );
}

export default TeamPage;
