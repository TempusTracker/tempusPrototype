import React from "react";

function FastButtons(props) {
  const {
    SelectTimeMode,
    checkingTime,
    Pausing,
    ReadTime,
    circle,
    setDisable,
    selectMode,
    Button,
  } = props;

  function ClickClearTime() {
    if (Button.current.classList.contains("ButtonStop")) {
      Pausing();
      circle.current.style.cssText = "animation: none;";
      setDisable("clearButton");
      checkingTime();
      ReadTime();
    }
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
        Следующее: {selectMode}
      </div>
      <div className="clearButton button-disable" onClick={ClickClearTime}>
        Сброс
      </div>
    </>
  );
}

export default FastButtons;
