import React, { useState } from "react";

function AddTaskComponent(props) {
  const { openAdd, error, UserFullData } = props;

  function setDisable(button) {
    document.querySelector(`.${button}`).classList.remove("button-active");
    document.querySelector(`.${button}`).classList.add("button-disable");
  }

  function setActive(button) {
    document.querySelector(`.${button}`).classList.add("button-active");
    document.querySelector(`.${button}`).classList.remove("button-disable");
  }

  const [SubTasks, setSubTasks] = useState([]);

  let addTask = React.createRef();
  let inputs = React.createRef();
  const today = new Date();

  // Получаем год, месяц и день
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [inputTitle, setinputTitle] = useState("");
  const [inputSubtask, setinputSubtask] = useState("");
  const [inputDate, setinputDate] = useState(formattedDate);
  const [inputPriority, setinputPriority] = useState(0);

  function closeAdd() {
    addTask.current.style.cssText = "animation-name: displaynone;";
    setTimeout(() => {
      openAdd(false);
    }, 1000);
  }

  function GenerateDate() {
    const inputDateTime = inputDate;
    const inputTimeTime = "00:00:00";
    const [year, month, day] = inputDateTime.split("-");
    const [hour, minute, second] = inputTimeTime.split(":");
    const dateObj = new Date(year, month - 1, day, hour, minute, second);
    const formattedDate = dateObj.toISOString();
    return formattedDate;
  }

  function clickCreate(e) {
    e.preventDefault();
    if (inputTitle !== "" && inputPriority !== 0) {
      let NewObject = {
        TaskName: inputTitle,
        DateOfCompletion: GenerateDate(),
        SubTasks: SubTasks,
        TaskPriority: inputPriority,
        Сomments: {},
      };
      UserFullData.userTasks.push(NewObject);
      console.log(UserFullData.userTasks);
      closeAdd();
    } else {
      error("Ошибка: поля не могут быть пустыми");
    }
  }

  function clickHandlerFire(e) {
    if (e.target.classList.contains("fier1")) {
      document.querySelector(".fier2").classList.remove("fill");
      document.querySelector(".fier3").classList.remove("fill");
      e.target.classList.add("fill");
      setinputPriority(1);
    } else if (e.target.classList.contains("fier2")) {
      document.querySelector(".fier1").classList.add("fill");
      document.querySelector(".fier3").classList.remove("fill");
      e.target.classList.add("fill");
      setinputPriority(2);
    } else if (e.target.classList.contains("fier3")) {
      document.querySelector(".fier1").classList.add("fill");
      document.querySelector(".fier2").classList.add("fill");
      e.target.classList.add("fill");
      setinputPriority(3);
    }
    checkOnTrue();
  }

  function checkOnTrue() {
    if (inputTitle !== "" && inputPriority !== 0) {
      setActive("button-next");
    } else {
      setDisable("button-next");
    }
  }

  function AddSubTask() {
    if (inputSubtask !== "") {
      setSubTasks([...SubTasks, inputSubtask]);
      document.getElementById("inputSubTask").value = "";
    } else {
      error("Ошибка: поле не может быть пустым");
    }
  }

  return (
    <div ref={addTask} className="addTask-place place">
      <div className="addTask-bg">
        <form action="">
          <div className="button-back" onClick={closeAdd}>
            <img
              src={
                require("../../../assets/images/settings/settingback.svg")
                  .default
              }
              alt=""
            />
          </div>
          <div className="title">Добавить задачу</div>

          <div className="inputs" ref={inputs}>
            <div className="inputs-top">
              <div className="input">
                <label htmlFor="">Название задачи</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setinputTitle(e.target.value);
                    checkOnTrue();
                  }}
                  onBlur={checkOnTrue}
                  placeholder="Разработать логотип..."
                />
              </div>
              <div className="input">
                <label htmlFor="">Подзадачи</label>
                <input
                  type="text"
                  id="inputSubTask"
                  onChange={(e) => {
                    setinputSubtask(e.target.value);
                  }}
                  onBlur={checkOnTrue}
                  placeholder="Текст для подзадачи.."
                />
                <div className="plus" onClick={AddSubTask}>
                  +
                </div>
              </div>
            </div>
            <div className="inputs-bottom">
              <div className="left">
                <div className="input">
                  <label htmlFor="">Дата</label>
                  <input
                    type="date"
                    placeholder=""
                    value={inputDate}
                    onChange={(e) => {
                      setinputDate(e.target.value);
                      checkOnTrue();
                    }}
                    onBlur={checkOnTrue}
                  />
                </div>
                <div className="fiers" onClick={checkOnTrue}>
                  <label htmlFor="">Приоритет</label>
                  <div className="fiers-body" onClick={clickHandlerFire}>
                    <div className="fire fier1"></div>
                    <div className="fire fier2"></div>
                    <div className="fire fier3"></div>
                  </div>
                </div>
              </div>
              <div className="sub-tasks">
                {SubTasks.map((element, index) => (
                  <div className="subtask" key={index}>
                    <div className="text">{element}</div>
                    <div className="minus">-</div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="button-next button-disable"
              onClick={clickCreate}
            >
              Отправить в работу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskComponent;
