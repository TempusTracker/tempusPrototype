import React from "react";

function TaskMain(props) {
  const { modeToDayplace, modeTomorrowplace, modeAllplace } = props;

  function openDesc(e) {
    if (e.target.parentNode.classList.contains("openDesc")) {
      e.target.parentNode.parentNode.children[1].style.display = "none";
      e.target.parentNode.children[1].style.transform = "rotate(360deg)";
      e.target.parentNode.classList.remove("openDesc");
    } else {
      e.target.parentNode.parentNode.children[1].style.display = "block";
      e.target.parentNode.children[1].style.transform = "rotate(180deg)";
      e.target.parentNode.classList.add("openDesc");
    }
  }

  return (
    <div className="TaskMain">
      <div ref={modeToDayplace} className="modeToDay-place place">
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
