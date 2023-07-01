import React from "react";

function TaskBar(props) {
  const { openAdd, modeToDayplace, modeTomorrowplace, modeAllplace } = props;

  let modeToDay = React.createRef();
  let modeTomorrow = React.createRef();
  let modeAll = React.createRef();

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
      openAdd(true);
    }
  }

  return (
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
  );
}

export default TaskBar;
