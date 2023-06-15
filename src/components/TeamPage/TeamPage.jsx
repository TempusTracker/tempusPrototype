import React from "react";
import NavBar from "../../Navigation/NavBar";
import JoinTeam from "./components/JoinTeam";
import Team from "./Team";

function TeamPage(props) {
  const { Teams, users, isTeamLocal, UserFullData } = props;

  function CheckOnJoin(page) {
    if (UserFullData.UserData.TeamCode === "none") {
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
        {CheckOnJoin(
          <Team
            UserFullData={UserFullData}
            isTeamLocal={isTeamLocal}
            users={users}
            Teams={Teams}
          ></Team>
        )}
      </div>
    </>
  );
}

export default TeamPage;
