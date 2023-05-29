import React, { useState } from "react";

function UsersTeam(props) {
  const { users } = props;
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  const [usersTeam, setUsersTeam] = useState({});
  let RenderUsers = [];

  function fUsersTeam() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].TeamCode === selectTeamLocal.Code) {
        RenderUsers.push(users[i]);
        setUsersTeam({ ...usersTeam, ...RenderUsers });
      }
    }
    console.log(usersTeam);
    return false;
  }

  return (
    <>
      <button onClick={fUsersTeam}>покажи</button>
    </>
  );
}

export default UsersTeam;
