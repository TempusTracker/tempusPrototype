import React, { useState } from "react";
import { isNameExist, isEmailExist, selectTeam } from "./utils";
import styles from "./RegistrationForm.css";
import { NavLink } from "react-router-dom";

export let usersE = [];

function SignInForm(props) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teamcode, setTeamcode] = useState(0);

  const { users, setUsers, Teams, error } = props;
  usersE = users;

  const CreateUser = (login, email, password, teamcode = "none") => {
    if (teamcode === 0) {
      teamcode = "none";
    }
    if (checkOnTeam(teamcode) === true) {
      const NewUser = {
        UserData: {
          Name: login,
          Email: email,
          Password: password,
          TeamCode: teamcode,
          Role: "",
          InviteCode: "",
        },
        userTimeSettings: {
          workTime: 25,
          shortBreak: 5,
          longBreak: 15,
        },
      };
      setUsers((users) => [...users, NewUser]);
      LocalStorageSave(NewUser);
      window.location.href = "/MainPage";
      ClearInputs();
    } else {
      error("Ошибка: такой команды не существует");
    }
  };

  function LocalStorageSave(user) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("logged", JSON.stringify(true));
  }

  function ErrorMain() {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (
      !re.test(String(document.getElementById("InputMail").value).toLowerCase())
    ) {
      error("Ошибка: поле почты должно соответствовать нормам");
    } else {
      setEmail(document.getElementById("InputMail").value);
    }
  }
  function ErrorPass() {
    const re2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
    if (!re2.test(String(document.getElementById("InputPass").value))) {
      error("Ошибка: поле пароль должно соответствовать нормам");
    } else {
      setPassword(document.getElementById("InputPass").value);
    }
  }

  const ButtonClick = (e) => {
    e.preventDefault();
    ErrorMain();
    ErrorPass();
    if (isNameExist(login) || isEmailExist(email)) {
      error("Ошибка: пользователь уже существует");
    } else {
      if (login === "" || password === "" || email === "") {
      } else {
        CreateUser(login, email, password, teamcode);
      }
    }
  };

  const teamButtonChange = (e) => {
    if (e.target.checked) {
      document.getElementById("InputCodeTeam").style.display = "block";
      document.getElementById("haveTeam").style.display = "none";
      document.getElementById("labelforteam").style.display = "block";
    } else {
      document.getElementById("InputCodeTeam").style.display = "none";
      document.getElementById("labelforteam").style.display = "none";
    }
  };

  function ClearInputs() {
    document.getElementById("InputLogin").value = "";
    document.getElementById("InputMail").value = "";
    document.getElementById("InputPass").value = "";
    document.getElementById("InputCodeTeam").value = "";
  }

  function checkOnTeam(teamcode) {
    for (let i = 0; i < Teams.length; i++) {
      if (teamcode === "none") {
        return true;
      } else {
        if (Teams[i].Code === teamcode) {
          selectTeam(teamcode);
          return true;
        }
      }
    }
    return false;
  }

  return (
    <form className="RegistrationForm" action="">
      <header className="title">Создать учетную запись</header>
      <label for="InputLogin" className="label">
        Имя пользователя
      </label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
        placeholder="Vladimir_Designer"
        className="input"
        id="InputLogin"
      />
      <label for="InputMail" className="label">
        E-MAIL
      </label>
      <input
        name="email"
        type="email"
        id="InputMail"
        placeholder="Tempus@greatapp.ru"
        className="input"
      />
      <label for="InputPass" className="label">
        Пароль
      </label>
      <input
        type="password"
        name="password"
        id="InputPass"
        placeholder="*******"
        className="input"
      />
      <p className="haveTeam" id="haveTeam">
        <label for="check" className="haveTeam-label">
          Я с командой
        </label>
        <input type="checkbox" id="check" onChange={teamButtonChange} />
      </p>
      <label
        for="InputCodeTeam"
        className="label labelforteam"
        id="labelforteam"
      >
        Команда
      </label>
      <input
        id="InputCodeTeam"
        type="number"
        onChange={(e) => {
          setTeamcode(Number(e.target.value));
        }}
        placeholder="#"
        className="inputCode input"
      />
      <button onClick={ButtonClick} className="button">
        Продолжить
      </button>
      <NavLink to="/LogInForm" className="link">
        Уже зарегистрированы?
      </NavLink>
      <p className="polici">
        Регистрируясь, вы соглашаетесь с{" "}
        <a href="#">Условиями использования </a>и{" "}
        <a href="#">Политикой Конфиденциальности</a> Tempus.
      </p>
    </form>
  );
}

export default SignInForm;
