import React, { useContext, useState } from "react";
import styles from "./LogInForm.module.css";
import { users } from "./SignInForm.jsx";
import { NavLink } from "react-router-dom";

export let selectUser = {};

function LogInForm(props) {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");

  const { setIsLogged, setSelectUser } = props;

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
        setIsLogged(true);
        LocalStorageSave(user);
        ClearInputs();
      } else {
      }
    }
  };

  return (
    <form className={styles.LogInForm} id="LogInForm" action="">
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
