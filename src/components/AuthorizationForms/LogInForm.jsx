import React, { useState } from "react";
import styles from "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { selectTeam } from "./utils";

export let selectUser = {};
export let TeamsE;

function LogInForm(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { users, Teams, error } = props;
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

  const LogIn = (e) => {
    e.preventDefault();
    for (const user of users) {
      if (
        user.userProperties.login === login &&
        user.userProperties.Password === password
      ) {
        console.log(user.userProperties.Name);
        LocalStorageSave(user);
        selectTeam(user.userProperties.TeamCode);
        window.location.href = "/MainPage";
        ClearInputs();
      } else {
        error("Ошибка: пользователь не найден");
      }
    }
  };

  return (
    <>
      <form className="LoginForm" action="">
        <header className="title">Войти</header>
        <label for="InputLoginL" className="label">
          Имя пользователя
        </label>
        <input
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          type="text"
          id="InputLoginL"
          placeholder="Login"
          className="input"
        />
        <label for="InputPassL" className="label">
          Пароль
        </label>
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
