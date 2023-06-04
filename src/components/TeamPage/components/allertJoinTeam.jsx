import React, { useState } from "react";

function AllertJoin(props) {
  let selectTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  const [inputNik, setInputNik] = useState("");
  const { users } = props;

  function addAllert() {
    isNameExist(inputNik);
  }

  function isNameExist(name) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].UserData.Name === name) {
        users[i].UserData.InviteCode = selectTeamLocal.Code;
      }
    }
    return false;
  }
  return (
    <>
      <div>
        <input
          placeholder="ник"
          onChange={(e) => setInputNik(e.target.value)}
        ></input>
        <button onClick={addAllert}>пригласить</button>
      </div>
    </>
  );
}

export default AllertJoin;
