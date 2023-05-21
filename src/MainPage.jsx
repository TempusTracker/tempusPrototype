import React from "react";
import styles from "./MainPage.css";
import NavBar from "./components/NavBar";

function MainPage() {
  return (
    <>
      <header>Главная</header>
      <div>
        <NavBar></NavBar>
      </div>
    </>
  );
}

export default MainPage;
