import React from "react";

function FastButtons(props) {
  const {
    SelectTimeMode,
    checkingTime,
    Pausing,
    ReadTime,
    LocalStorageSave,
    circle,
  } = props;

  function ClickClearTime() {
    Pausing();
    circle.current.style.cssText = "animation: none;";
    checkingTime();
    LocalStorageSave(25, 5, 15);
    ReadTime();
  }
  function clickNext() {
    Pausing();
    SelectTimeMode.minutes = 0;
    SelectTimeMode.seconds = 0;
    checkingTime();
    circle.current.style.cssText = "animation: none;";
  }
  return (
    <>
      <div className="NextText" onClick={clickNext}>
        Следующее{" "}
      </div>
      <div className="clearButton" onClick={ClickClearTime}>
        Сброс
      </div>
    </>
  );
}

export default FastButtons;
