import React, { useState } from "react";

function JoinTeam(props) {
  const { Teams } = props;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const [inputCode, setInputCode] = useState("none");

  function SearchTeam() {}
  return (
    <>
      <h1>Присоединиться к команде</h1>
      <div>
        <input
          type="number"
          placeholder="Код команды"
          onChange={(e) => {
            setInputCode(e.target.value);
          }}
        ></input>
        <button onClick={SearchTeam}>Войти</button>
      </div>
    </>
  );
}

export default JoinTeam;
