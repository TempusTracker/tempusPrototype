import React, { useState } from "react";
import styles from "./LogInForm.module.css";
import { NavLink } from "react-router-dom";
import { selectTeam } from "./utils";

export let selectUser = {};
export let TeamsE;

function LogInForm(props) {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");

  const { setSelectUser, users, Teams } = props;
  TeamsE = Teams;
  function ClearInputs() {
    document.getElementById("InputPassL").value = "";
    document.getElementById("InputLoginL").value = "";
  }

  function LocalStorageSave(user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("logged", JSON.stringify(true));
  }

  const LogIn = () => {
    for (const user of users) {
      if (user.Name === login && user.Password === password) {
        alert("Доборо пожаловать " + user.Name);
        setSelectUser(user);
        LocalStorageSave(user);
        selectTeam(user.TeamCode);
        ClearInputs();
      } else {
      }
    }
  };

  return (
    <form className={styles.LogInForm} action="">
      <label>Login</label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
        id="InputLoginL"
        placeholder="Login"
        className={styles.LogInForm_input}
      />
      <label>Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
        id="InputPassL"
        className={styles.LogInForm_input}
      />
      <NavLink to="/MainPage" className={styles.form_button} onClick={LogIn}>
        Submit
      </NavLink>
      <NavLink to="/SignInForm">Нет аккаунта</NavLink>
    </form>
  );
}

export default LogInForm;
