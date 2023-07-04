import React from "react";

function TaskMain(props) {
  const { modeToDayplace, modeTomorrowplace, modeAllplace, UserFullData } =
    props;

  console.log(UserFullData);

  function openDesc(e) {
    if (e.target.parentNode.classList.contains("openDesc")) {
      e.target.parentNode.parentNode.children[1].style.cssText =
        "margin-top: -40%; opacity: 0;  pointer-events: none;";

      e.target.parentNode.children[1].style.transform = "rotate(0deg)";
      e.target.parentNode.classList.remove("openDesc");
      setTimeout(() => {
        e.target.parentNode.parentNode.style.cssText = "padding-bottom: 20px;";
      }, 200);
    } else {
      e.target.parentNode.parentNode.children[1].style.cssText =
        "margin-top: 0px; opacity: 1;  pointer-events: all;";
      e.target.parentNode.children[1].style.transform = "rotate(180deg)";
      e.target.parentNode.classList.add("openDesc");
      setTimeout(() => {
        e.target.parentNode.parentNode.style.cssText = "padding-bottom: 0px;";
      }, 200);
    }
  }

  function clickSubTask(e) {
    if (e.target.children[0].checked !== true) {
      e.target.children[0].checked = true;
    } else {
      e.target.children[0].checked = false;
    }
  }

  return (
    <div className="TaskMain">
      <div ref={modeToDayplace} className="modeToDay-place place">
        {UserFullData.userTasks.map((task) => (
          <div className="task-group">
            <div className="task-title">
              <p onClick={openDesc}>{task.TaskName}</p>
              <img
                onClick={openDesc}
                src={require("../../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="sub-tasks">
              {task.SubTasks.map((subTask) => (
                <div className="sub-task" onClick={clickSubTask}>
                  <input className="check" id="check" type="checkbox" />
                  <label htmlFor="check" className="label">
                    {subTask}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* 
          
            


              
              

            <div className="sub-task" onClick={clickSubTask}>
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task" onClick={clickSubTask}>
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
          </div>
        </div> */}
      </div>
      <div
        ref={modeTomorrowplace}
        style={{ display: "none" }}
        className="modeTomorrow-place place"
      >
        <div className="task-group">
          <div className="task-title">
            <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
            <img
              onClick={openDesc}
              src={require("../../../assets/images/task/open.svg").default}
              alt=""
            />
          </div>
          <div className="sub-tasks">
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={modeAllplace}
        style={{ display: "none" }}
        className="modeAll-place place"
      >
        <div className="task-group">
          <div className="task-title">
            <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
            <img
              onClick={openDesc}
              src={require("../../../assets/images/task/open.svg").default}
              alt=""
            />
          </div>
          <div className="sub-tasks">
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
          </div>
        </div>
        <div className="task-group">
          <div className="task-title">
            <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
            <img
              onClick={openDesc}
              src={require("../../../assets/images/task/open.svg").default}
              alt=""
            />
          </div>
          <div className="sub-tasks">
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
            <div className="sub-task">
              <input className="check" id="check" type="checkbox" />
              <label htmlFor="check" className="label">
                subtask
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskMain;
