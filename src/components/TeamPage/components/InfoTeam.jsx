import React from "react";

function InfoTeam(props) {
  const { selectTeamLocal } = props;

  return (
    <>
      <h1>{selectTeamLocal.Title}</h1>
      <h1>{selectTeamLocal.Description}</h1>
    </>
  );
}

export default InfoTeam;
