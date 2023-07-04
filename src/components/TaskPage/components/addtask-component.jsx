import React from "react";

function AddTaskComponent(props) {
  const { openAdd } = props;

  let addTask = React.createRef();
  let inputs = React.createRef();
  let inputsSecond = React.createRef();
  function closeAdd() {
    addTask.current.style.cssText = "animation-name: displaynone;";
    setTimeout(() => {
      openAdd(false);
    }, 1000);
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
                <input type="text" placeholder="Разработать логотип..." />
              </div>
              <div className="input">
                <label htmlFor="">Подзадачи</label>
                <input type="text" placeholder="Текст для подзадачи.." />
                <div className="plus">-</div>
              </div>
            </div>
            <div className="inputs-bottom">
              <div className="input">
                <label htmlFor="">Дата</label>
                <input type="date" placeholder="" />
              </div>
              <div className="fiers">
                <label htmlFor="">Приоритет</label>
                <div className="fiers-body">
                  <div className="fire"></div>
                  <div className="fire"></div>
                  <div className="fire"></div>
                </div>
              </div>
              <div className="sub-tasks">
                <div className="subtask">
                  <div className="text">
                    подзадача бла бла бла бла бла бла блаблаблбалалалалал
                  </div>
                  <div className="minus">-</div>
                </div>
                <div className="subtask">
                  <div className="text">
                    подзадача бла бла бла бла бла бла блаблаблбалалалалал
                  </div>
                  <div className="minus">-</div>
                </div>
              </div>
            </div>

            <div className="button-next" onClick={clickNext}>
              Отправить в работу
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskComponent;
