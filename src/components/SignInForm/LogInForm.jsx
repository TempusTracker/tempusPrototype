import React, { useContext, useState } from "react";
import { isNameExist, isEmailExist } from "./utils";
import styles from "./LogInForm.module.css";

export const users = [
  { Name: "Nikita", Email: "nikita@mail.com", Password: "lol", TeamCode: 123 },
  { Name: "masha", Email: "masha@mail.com", Password: "lol2", TeamCode: 123 },
];

function LogInForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teamcode, setTeamcode] = useState(0);

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
    console.log(users);
    alert("Доборо пожаловать " + login);
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
        }}
        type="email"
        placeholder="Email"
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
