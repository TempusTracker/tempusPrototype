import React, { useContext, useState } from "react";
import { isNameExist, isEmailExist } from "./utils";
import styles from "./LogInForm.module.css";
import { users } from "./SignInForm.jsx";

let selectUser = {};

function LogInForm(props) {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");

  const { setIsLogged } = props;

  const openSignIn = (e) => {
    e.preventDefault();
    document.getElementById("LogInForm").style.display = "none";
    document.getElementById("SignInForm").style.display = "block";
  };

  const LogIn = (e) => {
    e.preventDefault();
    for (const user of users) {
      (user.Name === login && user.Password === password) ? {
        alert("Доборо пожаловать " + user.Name);
        selectUser = user;
        setIsLogged(true);
        console.log(user);
        break;
      } : { alert("пароль или логин не верны");
      break;}
    }
    users.map((user) => {
      return 0;
    });
  };

  return (
    <form className={styles.LogInForm} id="LogInForm" action="">
      <label>Login</label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
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
