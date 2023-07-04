import React from "react";
import styles from "./MainPage.css";
import NavBar from "../Navigation/NavBar";
import TimerPage from "../components/TimerPage/TimerPage";
import TaskPage from "../components/TaskPage/TaskPage";

function MainPage(props) {
  const { UserFullData, error } = props;

  console.log(UserFullData);

  return (
    <div className="MainPage">
      <TimerPage error={error} UserFullData={UserFullData}></TimerPage>
      <TaskPage error={error} UserFullData={UserFullData}></TaskPage>
    </div>
  );
}

export default MainPage;
