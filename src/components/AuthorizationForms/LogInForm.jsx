import React, { useState } from "react";
import styles from "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { selectTeam } from "./utils";

export let selectUser = {};
export let TeamsE;

function LogInForm(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { users, Teams } = props;
  TeamsE = Teams;
  function ClearInputs() {
    document.getElementById("InputPassL").value = "";
    document.getElementById("InputLoginL").value = "";
  }

  function LocalStorageSave(user) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("logged", JSON.stringify(true));
  }

  console.log(login);

  const LogIn = (e) => {
    e.preventDefault();
    for (const user of users) {
      if (user.UserData.Name === login && user.UserData.Password === password) {
        console.log(user.UserData.Name);
        LocalStorageSave(user);
        selectTeam(user.UserData.TeamCode);
        window.location.href = "/MainPage";
        ClearInputs();
      }
    }
  };

  return (
    <>
      <form className="LoginForm" action="">
        <header className="title">Войти</header>
        <label className="label">Имя пользователя</label>
        <input
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          type="text"
          id="InputLoginL"
          placeholder="Login"
          className="input"
        />
        <label className="label">Пароль</label>
        <input
          className="input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          id="InputPassL"
        />
        <button type="submit" className="button" onClick={LogIn}>
          Продолжить
        </button>
        <NavLink className="link" to="/SignInForm">
          Зарегистрироваться
        </NavLink>
      </form>
    </>
  );
}

export default LogInForm;
