import React, { useState } from "react";

function TimerMode(props) {
  const { setSelectBreak } = props;

  function HandlerSelectMode(mode) {
    copy(mode);
    setSelectBreak(false);
    UpdateTime();
    Button.current.textContent = "start";
    Button.current.dataset.action = "start";
    Pausing();
  }

  function HandleClickMods(e) {
    console.log(e.target.dataset.mode);
    if (e.target.dataset.mode === "pomodoro") {
      HandlerSelectMode("pomodoro");
    } else if (e.target.dataset.mode === "shortBreak") {
      HandlerSelectMode("shortBreak");
      Pausing();
    } else if (e.target.dataset.mode === "longBreak") {
      HandlerSelectMode("longBreak");
    }
  }
  return (
    <div id="js-mode-buttons" onClick={HandleClickMods}>
      <button data-mode="pomodoro">Pomodoro</button>
      <button data-mode="shortBreak">Short break</button>
      <button data-mode="longBreak">Long break</button>
    </div>
  );
}

export default TimerMode;
