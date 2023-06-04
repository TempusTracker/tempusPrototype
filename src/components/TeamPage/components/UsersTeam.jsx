import React, { useState } from "react";

function UsersTeam(props) {
  const { users } = props;
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const [usersTeam, setUsersTeam] = useState({});
  let RenderUsers = [];

  function fUsersTeam() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].UserData.TeamCode === selectTeamLocal.Code) {
        RenderUsers.push(users[i]);
        setUsersTeam({ ...usersTeam, ...RenderUsers });
      }
    }
    return false;
  }

  return (
    <>
      <button onClick={fUsersTeam}>покажи</button>
      {selectUserLocal.UserData.Role === "admin" ? (
        Object.keys(usersTeam).map((key) => (
          <div key={key}>
            <p className="Name">{usersTeam[key].UserData.Name}</p>
            <p className="Time">{usersTeam[key].UserData.TotalTime}</p>
            <p className="Role">{usersTeam[key].UserData.Role}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default UsersTeam;
