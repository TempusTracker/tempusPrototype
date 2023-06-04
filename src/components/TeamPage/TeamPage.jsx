import React from "react";
import NavBar from "../../Navigation/NavBar";
import JoinTeam from "./components/JoinTeam";
import Team from "./Team";

let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
function TeamPage(props) {
  const { Teams, users } = props;

  function CheckOnJoin(page) {
    if (selectUserLocal.UserData.TeamCode === "none") {
      return <JoinTeam users={users} Teams={Teams} />;
    } else {
      return page;
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
