import React from "react";

function InfoTeam(props) {
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};

  return (
    <>
      <h1>{selectTeamLocal.Title}</h1>
      <h1>{selectTeamLocal.Description}</h1>
    </>
  );
}

export default InfoTeam;
