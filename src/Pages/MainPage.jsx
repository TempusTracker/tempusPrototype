import React from "react";
import styles from "./MainPage.css";
import NavBar from "../Navigation/NavBar";
import TimerPage from "../components/TimerPage/TimerPage";

function MainPage(props) {
  const { UserFullData } = props;

  return (
    <>
      <header>Главная</header>
      <div>
        <NavBar></NavBar>
        <TimerPage UserFullData={UserFullData}></TimerPage>
      </div>
    </>
  );
}

export default MainPage;
