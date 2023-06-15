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
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("почта пустая");
  const [passwordError, setPasswordError] = useState("пароль пустой");

  const { users, setUsers, Teams } = props;
  usersE = users;

  function LocalStorageSave(user) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("logged", JSON.stringify(true));
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const ButtonClick = (e) => {
    e.preventDefault();
    if (isNameExist(login) || isEmailExist(email)) {
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
      alert("такой команды не существует");
    }
  };

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
        onChange={(e) => {
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("ошибка в поле почты");
          } else {
            setEmailError("");
            setEmail(e.target.value);
          }
        }}
        name="email"
        type="email"
        id="InputMail"
        placeholder="Tempus@greatapp.ru"
        onBlur={(e) => blurHandler(e)}
        className="input"
      />
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <label for="InputPass" className="label">
        Пароль
      </label>
      <input
        onChange={(e) => {
          const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
          if (!re.test(String(e.target.value))) {
            setPasswordError("ошибка в поле пароля");
          } else {
            setPasswordError("");
            setPassword(e.target.value);
          }
        }}
        type="password"
        name="password"
        id="InputPass"
        onBlur={(e) => blurHandler(e)}
        placeholder="*******"
        className="input"
      />
      {passwordDirty && passwordError && (
        <div style={{ color: "red" }}>{passwordError}</div>
      )}
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
