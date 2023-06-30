import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { selectTeam } from "./utils";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "../store/userSlice";
import { useNavigate } from "react-router-dom";

import { findUserByUsernameAndPassword } from "../DATA/DATA";
import LocalStorageSave from "../../localStorage/localStorage";

export let selectUser = {};
export let TeamsE;

function LogInForm(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Teams, errors, setUser, user } = props;
  TeamsE = Teams;
  function ClearInputs() {
    document.getElementById("InputPassL").value = "";
    document.getElementById("InputLoginL").value = "";
  }

  const { data, loading, error } = useSelector((state) => state.user);

  const LogIn = (e) => {
    e.preventDefault();
    const userData = findUserByUsernameAndPassword(login, password);
    console.log(userData);
    if (userData) {
      // LocalStorageSave(userData);
      // setUser(userData);
      dispatch(getUserSuccess(userData));
      localStorage.setItem("logged", JSON.stringify(true));
      // window.location.href = "/MainPage";
      navigate("/MainPage");
      ClearInputs();
    } else errors("Ошибка: пользователь не найден");
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
