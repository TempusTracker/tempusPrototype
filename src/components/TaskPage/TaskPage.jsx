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
  let inputs = React.createRef();
  let inputsSecond = React.createRef();

  function clickHandler(e) {
    if (e.target.classList.contains("modeToDay")) {
      modeToDayplace.current.style.cssText = "animation-name: displayblock;";
      modeTomorrowplace.current.style.cssText = "animation-name: displaynone;";
      modeAllplace.current.style.cssText = "animation-name: displaynone;";
    } else if (e.target.classList.contains("modeTomorrow")) {
      modeToDayplace.current.style.cssText = "animation-name: displaynone;";
      modeTomorrowplace.current.style.cssText = "animation-name: displayblock;";
      modeAllplace.current.style.cssText = "animation-name: displaynone;";
    } else if (e.target.classList.contains("modeAll")) {
      modeToDayplace.current.style.cssText = "animation-name: displaynone;";
      modeTomorrowplace.current.style.cssText = "animation-name: displaynone;";
      modeAllplace.current.style.cssText = "animation-name: displayblock;";
    } else if (e.target.classList.contains("buttonAdd")) {
      addTask.current.style.cssText = "animation-name: displayblock;";
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

  function closeAdd() {
    addTask.current.style.cssText = "animation-name: displaynone;";
  }

  function clickNext() {
    inputs.current.style.display = "none";
    inputsSecond.current.style.cssText = "animation-name: displayblock;";
    inputsSecond.current.style.display = "flex";
  }

  function clickHandlerFire(e) {
    if (e.target.classList.contains("fier1")) {
      e.target.classList.add("fill-fier");
      e.target.children[0].style.filter = "invert(50%)";
      document.querySelector(".fier2").classList.remove("fill-fier");
      document.querySelector(".fier2").children[0].style.filter = "invert(0%)";
      document.querySelector(".fier2").children[1].style.filter = "invert(0%)";
      document.querySelector(".fier3").classList.remove("fill-fier");
      document.querySelector(".fier3").children[0].style.filter = "invert(0%)";
      document.querySelector(".fier3").children[1].style.filter = "invert(0%)";
      document.querySelector(".fier3").children[2].style.filter = "invert(0%)";
    } else if (e.target.classList.contains("fier2")) {
      e.target.classList.add("fill-fier");
      e.target.children[0].style.filter = "invert(50%)";
      e.target.children[1].style.filter = "invert(50%)";
      document.querySelector(".fier1").classList.add("fill-fier");
      document.querySelector(".fier3").classList.remove("fill-fier");
      document.querySelector(".fier3").children[0].style.filter = "invert(0%)";
      document.querySelector(".fier3").children[1].style.filter = "invert(0%)";
      document.querySelector(".fier3").children[2].style.filter = "invert(0%)";
    } else if (e.target.classList.contains("fier3")) {
      e.target.children[0].style.filter = "invert(50%)";
      e.target.children[1].style.filter = "invert(50%)";
      e.target.children[2].style.filter = "invert(50%)";
      document.querySelector(".fier1").children[0].style.filter = "invert(50%)";
      document.querySelector(".fier2").children[0].style.filter = "invert(50%)";
      document.querySelector(".fier2").children[1].style.filter = "invert(50%)";
      e.target.classList.add("fill-fier");
      document.querySelector(".fier2").classList.add("fill-fier");
      document.querySelector(".fier1").classList.add("fill-fier");
    }
  }

  return (
    <>
      <div
        ref={addTask}
        style={{ display: "none" }}
        className="addTask-place place"
      >
        <div className="addTask-bg">
          <form action="">
            <div className="button-back" onClick={closeAdd}>
              <img
                src={
                  require("../../assets/images/settings/settingback.svg")
                    .default
                }
                alt=""
              />
            </div>
            <div className="title">Добавить задачу</div>
            <div className="inputs" ref={inputs}>
              <div className="wrapper">
                <label htmlFor="taskName">Здача</label>
                <input
                  type="text"
                  id="taskName"
                  placeholder="Необходимо выполнить"
                  className="input"
                />
              </div>
              <div className="wrapper">
                <label htmlFor="supTask">Доп. Задачи</label>
                <input
                  type="text"
                  placeholder="Подзадачи"
                  id="supTask"
                  className="input"
                />
              </div>
              <div className="button-next" onClick={clickNext}>
                Далее
              </div>
            </div>

            <div className="inputs-second inputs" ref={inputsSecond}>
              <div className="wrapper">
                <label htmlFor="taskName">Кто выполняет</label>
                <input
                  type="text"
                  id="taskName"
                  placeholder="Например: Designer"
                  className="input"
                  list="values"
                />
                <datalist id="values">
                  <option value="Значение 1" />
                  <option value="Значение 2" />
                  <option value="Значение 3" />
                  <option value="Значение 4" />
                </datalist>
              </div>
              <div className="wrapper2 wrapper">
                <div className="secondWrapper">
                  <label htmlFor="taskName">Время</label>
                  <input
                    type="time"
                    id="taskName"
                    placeholder="00:00"
                    className="input"
                  />
                </div>
                <div className="secondWrapper">
                  <label htmlFor="taskName">Дата</label>
                  <input
                    type="date"
                    id="taskName"
                    placeholder="01.07.2023"
                    className="input"
                  />
                </div>
              </div>
              <div className="wrapper">
                <label htmlFor="">Приоритет</label>
                <div className="fiers">
                  <div onClick={clickHandlerFire} className="fier fier1">
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                  </div>
                  <div onClick={clickHandlerFire} className="fier fier2">
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                  </div>

                  <div onClick={clickHandlerFire} className="fier fier3">
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                    <img
                      src={
                        require("../../assets/images/settings/fire.svg").default
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="button-add button-next">Отправить задачу</div>
            </div>
          </form>
        </div>
      </div>
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
        </div>
      </div>
    </>
  );
}

export default TaskPage;
