import React from "react";
import styles from "./MainPage.css";
import NavBar from "../Navigation/NavBar";
import Pomodoro from "../components/TimerPage/Pomodoro";

function MainPage(props) {
  const { users } = props;

  return (
    <>
      <header>Главная</header>
      <div>
        <NavBar></NavBar>
        <Pomodoro users={users}></Pomodoro>
      </div>
    </>
  );
}

export default MainPage;
