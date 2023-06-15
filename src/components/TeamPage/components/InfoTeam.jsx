import React from "react";
import AllertJoin from "./allertJoinTeam";

function InfoTeam(props) {
  const { users, isTeamLocal } = props;

  return (
    <>
      <h1>{isTeamLocal.Title}</h1>
      <h1>{isTeamLocal.Description}</h1>
      <h1>Код: {isTeamLocal.Code}</h1>

      <AllertJoin users={users} />
    </>
  );
}

export default InfoTeam;
