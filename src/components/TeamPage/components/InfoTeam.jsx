import React from "react";
import AllertJoin from "./allertJoinTeam";

function InfoTeam(props) {
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  const { users } = props;

  return (
    <>
      <h1>{selectTeamLocal.Title}</h1>
      <h1>{selectTeamLocal.Description}</h1>
      <h1>Код: {selectTeamLocal.Code}</h1>

      <AllertJoin users={users} />
    </>
  );
}

export default InfoTeam;
