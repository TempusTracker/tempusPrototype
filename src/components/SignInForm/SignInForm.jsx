import React, { useContext, useState } from "react";
import { isNameExist, isEmailExist } from "./utils";
import styles from "./SignInForm.module.css";
import { users } from "./LogInForm.jsx";

let selectUser = {};
export let isLogged = false;

function SignInForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const openLogIn = (e) => {
    e.preventDefault();
    document.getElementById("SignInForm").style.display = "none";
    document.getElementById("LogInForm").style.display = "block";
  };

  const SignIn = (e) => {
    e.preventDefault();
    for (const user of users) {
      if (user.Name === login) {
        if (user.Password === password) {
          alert("Доборо пожаловать " + user.Name);
          selectUser = user;
          isLogged = true;
          console.log(isLogged);
          break;
        } else {
          alert("пароль не верен");
        }
        break;
      } else {
      }
    }
  };

  return (
    <form className={styles.SignInForm} id="SignInForm" action="">
      <label>Login</label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
        placeholder="Login"
        className={styles.SignInForm_input}
      />
      <label>Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
        className={styles.SignInForm_input}
      />
      <button type="submit" className={styles.form_button} onClick={SignIn}>
        Submit
      </button>
      <button onClick={openLogIn}>Нет аккаунта</button>
    </form>
  );
}

export default SignInForm;
