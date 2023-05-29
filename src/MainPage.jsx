import React from "react";
import styles from "./MainPage.css";
import NavBar from "./components/NavBar";
import Pomodoro from "./components/TimerPage/Pomodoro";

function MainPage(props) {
  const { users, setUsers } = props;
  return (
    <>
      <header>Главная</header>
      <div>
        <NavBar></NavBar>
        <Pomodoro users={users} setUsers={setUsers}></Pomodoro>
      </div>
    </>
  );
}

export default MainPage;
