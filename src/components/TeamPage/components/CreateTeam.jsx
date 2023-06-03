import React, { useState } from "react";
import NavBar from "../../../Navigation/NavBar";

function CreateTeam(props) {
  const { Teams, setTeams } = props;
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputCode, setInputCode] = useState(0);

  function Create() {
    if (
      isTeamExist(Number(inputCode)) === false &&
      inputTitle !== "" &&
      inputDescription !== "" &&
      inputCode !== ""
    ) {
      NewTeam();
    }
  }
  function NewTeam() {
    const newTeam = {
      Key: "",
      Title: inputTitle,
      logo: "",
      Description: inputDescription,
      Code: Number(inputCode),
    };
    setTeams((teams) => [...teams, newTeam]);
    alert("команда создана");
  }

  function isTeamExist(code) {
    for (let i = 0; i < Teams.length; i++) {
      if (Teams[i].Code === code) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <h1>создайте команду</h1>
      <input
        placeholder="название"
        type="text"
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      ></input>
      <textarea
        placeholder="описание"
        type="text"
        onChange={(e) => {
          setInputDescription(e.target.value);
        }}
      ></textarea>
      <input
        placeholder="код"
        type="number"
        onChange={(e) => {
          setInputCode(e.target.value);
        }}
      ></input>
      <button onClick={Create}>создать</button>
    </>
  );
}

export default CreateTeam;
