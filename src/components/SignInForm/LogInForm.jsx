import React, { useContext, useState } from "react";
import styles from "./LogInForm.module.css";
import { users } from "./SignInForm.jsx";

export let selectUser = {};

function LogInForm(props) {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");

  const { setIsLogged, setSelectUser } = props;

  const openSignIn = (e) => {
    e.preventDefault();
    document.getElementById("LogInForm").style.display = "none";
    document.getElementById("SignInForm").style.display = "block";
  };

  function ClearInputs() {
    document.getElementById("InputPassL").value = "";
    document.getElementById("InputLoginL").value = "";
  }

  const LogIn = (e) => {
    e.preventDefault();
    for (const user of users) {
      if (user.Name === login && user.Password === password) {
        alert("Доборо пожаловать " + user.Name);
        setSelectUser(user);
        setIsLogged(true);
        ClearInputs();
        break;
      } else alert("пароль или логин не верны");
      break;
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
      <button type="submit" className={styles.form_button} onClick={LogIn}>
        Submit
      </button>
      <button onClick={openSignIn}>Нет аккаунта</button>
    </form>
  );
}

export default LogInForm;
