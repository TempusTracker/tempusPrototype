import React from "react";
import styles from "./TaskPage.css";

function TaskPage() {
  let modeToDay = React.createRef();
  let modeTomorrow = React.createRef();
  let modeAll = React.createRef();
  let modeToDayplace = React.createRef();
  let modeTomorrowplace = React.createRef();
  let modeAllplace = React.createRef();
  let addTask = React.createRef();

  function clickHandler(e) {
    if (e.target.classList.contains("modeToDay")) {
      modeToDayplace.current.style.display = "block";
      modeTomorrowplace.current.style.display = "none";
      modeAllplace.current.style.display = "none";
    } else if (e.target.classList.contains("modeTomorrow")) {
      modeToDayplace.current.style.display = "none";
      modeTomorrowplace.current.style.display = "block";
      modeAllplace.current.style.display = "none";
    } else if (e.target.classList.contains("modeAll")) {
      modeToDayplace.current.style.display = "none";
      modeTomorrowplace.current.style.display = "none";
      modeAllplace.current.style.display = "block";
    } else if (e.target.classList.contains("buttonAdd")) {
      modeToDayplace.current.style.display = "none";
      modeTomorrowplace.current.style.display = "none";
      modeAllplace.current.style.display = "none";
      addTask.current.style.display = "block";
    }
  }

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
    <div className="TaskPage">
      <div className="TaskBar" onClick={clickHandler}>
        <div className="mods">
          <div ref={modeToDay} className="modeToDay zOpen">
            Сегодня
          </div>
          <div ref={modeTomorrow} className="modeTomorrow zNext">
            Завтра
          </div>
          <div ref={modeAll} className="modeAll zLast">
            Все задачи
          </div>
        </div>
        <div className="buttonAdd">+</div>
      </div>
      <div className="TaskMain">
        <div ref={modeToDayplace} className="modeToDay-place place">
          <div className="task-group">
            <div className="task-title">
              <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
              <img
                onClick={openDesc}
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
            </div>
          </div>
          <div className="task-group">
            <div className="task-title">
              <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
              <img
                onClick={openDesc}
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
            </div>
          </div>
          <div className="task-group">
            <div className="task-title">
              <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
              <img
                onClick={openDesc}
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
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
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
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
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
            </div>
          </div>
          <div className="task-group">
            <div className="task-title">
              <p onClick={openDesc}>Разработать сайт тайм менеджмента:</p>
              <img
                onClick={openDesc}
                src={require("../../assets/images/task/open.svg").default}
                alt=""
              />
            </div>
            <div className="task-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nostrum accusantium quae, ab debitis voluptatibus mollitia amet,
              sit ullam eius rem illo laborum non eaque quas culpa deleniti
              nesciunt aliquid!
            </div>
          </div>
        </div>
        <div
          ref={addTask}
          style={{ display: "none" }}
          className="addTask-place place"
        >
          <form action="">
            <div className="left">
              <input type="text" placeholder="Что необходимо выполнить?" />
              <textarea type="text" placeholder="Описание" />
            </div>
            <div className="right">
              <select name="" id="">
                <option value="">программисты</option>
                <option value="">дизайнеры</option>
                <option value="">берется из участников команды</option>
              </select>
              <select name="" id="">
                <option value="">экстра</option>
                <option value="">высокий</option>
                <option value="">нормальный</option>
                <option value="">низкий</option>
              </select>
              <input type="date"></input>
            </div>
            <button>Отправить задачу</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
