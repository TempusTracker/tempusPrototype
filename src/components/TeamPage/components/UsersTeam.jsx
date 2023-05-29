import React, { useState } from "react";

function UsersTeam(props) {
  const { users } = props;
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const [usersTeam, setUsersTeam] = useState({});
  let RenderUsers = [];

  function fUsersTeam() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].TeamCode === selectTeamLocal.Code) {
        RenderUsers.push(users[i]);
        setUsersTeam({ ...usersTeam, ...RenderUsers });
        console.log(usersTeam);
      }
    }
    return false;
  }

  return (
    <>
      <button onClick={fUsersTeam}>покажи</button>

      {selectUserLocal.Role === "admin"
        ? Object.keys(usersTeam).map((key) => (
            <div key={key}>
              <p className="Name">{usersTeam[key].Name}</p>
              <p className="Time">{usersTeam[key].TotalTime}</p>
              <p className="Role">{usersTeam[key].Role}</p>
            </div>
          ))
        : alert("не админ")}
    </>
  );
}

export default UsersTeam;
