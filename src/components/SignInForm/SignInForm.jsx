import React, { useContext, useState } from "react";
import { isNameExist, isEmailExist } from "./utils";
import styles from "./SignInForm.module.css";

export const users = [
  { Name: "Nikita", Email: "nikita@mail.com", Password: "lol", TeamCode: 123 },
  { Name: "masha", Email: "masha@mail.com", Password: "lol2", TeamCode: 123 },
];

function SignInForm(props) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teamcode, setTeamcode] = useState(0);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("почта пустая");
  const [passwordError, setPasswordError] = useState("пароль пустой");

  const { setIsLogged, setSelectUser } = props;

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

  const openLogIn = (e) => {
    e.preventDefault();
    document.getElementById("LogInForm").style.display = "block";
    document.getElementById("SignInForm").style.display = "none";
  };

  const ButtonClick = (e) => {
    e.preventDefault();

    if (isNameExist(login) || isEmailExist(email)) {
      alert("пользователь уже существует");
    } else {
      if (login === "" || password === "" || email === "") {
        alert("ошибка");
      } else {
        CreateUser(login, email, password, teamcode);
        alert("Доборо пожаловать " + login);
        ClearInputs();
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

  function ClearInputs() {
    document.getElementById("InputLogin").value = "";
    document.getElementById("InputMail").value = "";
    document.getElementById("InputPass").value = "";
    document.getElementById("InputCodeTeam").value = "";
  }

  const CreateUser = (login, email, password, teamcode = "none") => {
    const NewUser = {
      Name: login,
      Email: email,
      Password: password,
      TeamCode: teamcode,
    };
    users.push(NewUser);
    setIsLogged(true);
    setSelectUser(NewUser);
  };

  return (
    <form action="" id="SignInForm" className={styles.SignInForm}>
      <label>Login</label>
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
        placeholder="Login"
        className={styles.SignInForm_input}
        id="InputLogin"
      />
      <label>Email</label>
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
        placeholder="Email"
        onBlur={(e) => blurHandler(e)}
        className={styles.SignInForm_input}
      />
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <label>Password</label>
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
        placeholder="Password"
        className={styles.SignInForm_input}
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
      <button onClick={openLogIn}>Есть аккаунт</button>
    </form>
  );
}

export default SignInForm;
