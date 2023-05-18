import React, { useContext, useState } from "react";
import { isNameExist, isEmailExist } from "./utils";
import styles from "./LogInForm.module.css";
import { isLogged } from "./SignInForm.jsx";

export const users = [
  { Name: "Nikita", Email: "nikita@mail.com", Password: "lol", TeamCode: 123 },
  { Name: "masha", Email: "masha@mail.com", Password: "lol2", TeamCode: 123 },
];

function LogInForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teamcode, setTeamcode] = useState(0);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("почта пустая");
  const [passwordError, setPasswordError] = useState("пароль пустой");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const openSignIn = (e) => {
    e.preventDefault();
    document.getElementById("SignInForm").style.display = "block";
    document.getElementById("LogInForm").style.display = "none";
  };

  const ButtonClick = (e) => {
    e.preventDefault();

    if (isNameExist(login) || isEmailExist(email)) {
      alert("пользователь уже существует");
    } else {
      if (login === "" || password === "" || email === "") {
        alert("заполните все поля");
      } else {
        CreateUser(login, email, password, teamcode);
      }
    }
  };

  const teamButtonChange = (e) => {
    if (e.target.checked) {
      document.getElementById("InputCodeTeam").style.display = "block";
    } else {
      document.getElementById("InputCodeTeam").style.display = "none";
    }
  };

  const CreateUser = (login, email, password, teamcode = "none") => {
    const NewUser = {
      Name: login,
      Email: email,
      Password: password,
      TeamCode: teamcode,
    };
    users.push(NewUser);
    isLogged = true;
  };

  return (
    <form action="" id="LogInForm" className={styles.LogInForm}>
      <label>Login</label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
        placeholder="Login"
        className={styles.LogInForm_input}
      />
      <label>Email</label>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("ошибка в поле почты");
          } else {
            setEmailError("");
          }
        }}
        name="email"
        type="email"
        placeholder="Email"
        onBlur={(e) => blurHandler(e)}
        className={styles.LogInForm_input}
      />
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <label>Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
          const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
          if (!re.test(String(e.target.value))) {
            setPasswordError("ошибка в поле пароля");
          } else {
            setPasswordError("");
          }
        }}
        type="password"
        name="password"
        onBlur={(e) => blurHandler(e)}
        placeholder="Password"
        className={styles.LogInForm_input}
      />
      {passwordDirty && passwordError && (
        <div style={{ color: "red" }}>{passwordError}</div>
      )}
      <p>
        Есть команда? <input type="checkbox" onChange={teamButtonChange} />
      </p>
      <input
        type="number"
        id="InputCodeTeam"
        onChange={(e) => {
          setTeamcode(Number(e.target.value));
        }}
        placeholder="code"
        className={styles.InputCodeTeam}
      />
      <button
        type="submit"
        onClick={ButtonClick}
        className={styles.form_button}
      >
        Submit
      </button>
      <button onClick={openSignIn}>Есть аккаунт</button>
    </form>
  );
}

export default LogInForm;
