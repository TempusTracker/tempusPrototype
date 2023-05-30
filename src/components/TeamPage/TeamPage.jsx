import React from "react";
import NavBar from "../NavBar";
import JoinTeam from "./components/JoinTeam";
import Team from "./Team";

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
