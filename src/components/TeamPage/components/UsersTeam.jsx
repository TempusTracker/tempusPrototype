import React, { useState } from "react";

function UsersTeam(props) {
  const { users, UserFullData, isTeamLocal } = props;
  const [usersTeam, setUsersTeam] = useState({});
  let RenderUsers = [];

  function fUsersTeam() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].UserData.TeamCode === isTeamLocal.Code) {
        RenderUsers.push(users[i]);
        setUsersTeam({ ...usersTeam, ...RenderUsers });
      }
    }
    return false;
  }

  return (
    <>
      <button onClick={fUsersTeam}>покажи</button>
      {UserFullData.UserData.Role === "admin" ? (
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
