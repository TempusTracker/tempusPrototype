import React, { useState } from "react";
import styles from "./TaskPage.css";
import AddTaskComponent from "./components/addtask-component";
import TaskBar from "./components/taskBar-component";
import TaskMain from "./components/taskMain-component";

function TaskPage(props) {
  let modeToDayplace = React.createRef();
  let modeTomorrowplace = React.createRef();
  let modeAllplace = React.createRef();

  const { UserFullData, error } = props;

  const [openAdd, setOpenAdd] = useState();

  return (
    <>
      {openAdd ? (
        <AddTaskComponent error={error} openAdd={setOpenAdd}></AddTaskComponent>
      ) : (
        ""
      )}
      <div className="TaskPage">
        <TaskBar
          modeToDayplace={modeToDayplace}
          modeTomorrowplace={modeTomorrowplace}
          modeAllplace={modeAllplace}
          openAdd={setOpenAdd}
        ></TaskBar>
        <TaskMain
          modeToDayplace={modeToDayplace}
          modeTomorrowplace={modeTomorrowplace}
          modeAllplace={modeAllplace}
          UserFullData={UserFullData}
        ></TaskMain>
      </div>
    </>
  );
}

export default TaskPage;
