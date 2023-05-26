import React from "react";
import styles from "./MainPage.css";
import NavBar from "./components/NavBar";
import Pomodoro from "./components/Timer/Pomodoro";

function MainPage() {
  return (
    <>
      <header>Главная</header>
      <div>
        <NavBar></NavBar>
        <Pomodoro></Pomodoro>
      </div>
    </>
  );
}

export default MainPage;
