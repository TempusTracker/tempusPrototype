import React from "react";

function TaskBar(props) {
  const { openAdd, modeToDayplace, modeTomorrowplace, modeAllplace } = props;

  let modeToDay = React.createRef();
  let modeTomorrow = React.createRef();
  let modeAll = React.createRef();

  function removeAll() {
    modeToDay.current.classList.remove("zLast");
    modeToDay.current.classList.remove("zNext");
    modeToDay.current.classList.remove("zOpen");
    modeTomorrow.current.classList.remove("zNext");
    modeTomorrow.current.classList.remove("zOpen");
    modeTomorrow.current.classList.remove("zLast");
    modeAll.current.classList.remove("zOpen");
    modeAll.current.classList.remove("zLast");
    modeAll.current.classList.remove("zNext");
  }

  function Openz(Open, Next, Last) {
    Last.current.classList.add("zLast");
    Next.current.classList.add("zNext");
    Open.current.classList.add("zOpen");
  }

  function clickHandler(e) {
    if (e.target.classList.contains("modeToDay")) {
      modeToDayplace.current.style.cssText = "animation-name: displayblock;";
      modeTomorrowplace.current.style.cssText = "animation-name: displaynone;";
      modeAllplace.current.style.cssText = "animation-name: displaynone;";
      removeAll();
      Openz(modeToDay, modeTomorrow, modeAll);
    } else if (e.target.classList.contains("modeTomorrow")) {
      modeToDayplace.current.style.cssText = "animation-name: displaynone;";
      modeTomorrowplace.current.style.cssText = "animation-name: displayblock;";
      modeAllplace.current.style.cssText = "animation-name: displaynone;";
      removeAll();
      Openz(modeTomorrow, modeAll, modeToDay);
    } else if (e.target.classList.contains("modeAll")) {
      modeToDayplace.current.style.cssText = "animation-name: displaynone;";
      modeTomorrowplace.current.style.cssText = "animation-name: displaynone;";
      modeAllplace.current.style.cssText = "animation-name: displayblock;";
      removeAll();
      Openz(modeAll, modeTomorrow, modeToDay);
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
