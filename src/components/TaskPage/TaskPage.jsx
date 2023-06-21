import React from "react";
import styles from "./TaskPage.css";

function TaskPage() {
  return (
    <div className="TaskPage">
      <div className="TaskBar">
        <div className="mods">
          <div className="modeToDay zOpen">Сегодня</div>
          <div className="modeTomorrow zNext">Завтра</div>
          <div className="modeAll zLast">Все задачи</div>
        </div>
        <div className="buttonAdd">+</div>
      </div>
      <div className="TaskMain"></div>
    </div>
  );
}

export default TaskPage;
