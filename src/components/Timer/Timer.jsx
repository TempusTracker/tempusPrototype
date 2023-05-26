import React, { useState } from "react";
import { users } from "../SignInForm/SignInForm";
import TimerMode from "./TimerMode/TimerMode";

const Time = {
  pomodoro: { minutes: 25, seconds: 0 },
  shortBreak: { minutes: 5, seconds: 0 },
  longBreak: { minutes: 15, seconds: 0 },
  longBreakInterval: 4,
};

export let SelectTimeMode = {};

export function UpdateTime() {
  if (document.getElementById("Minutes") != null) {
    document.getElementById("Minutes").textContent = SelectTimeMode.minutes;
    document.getElementById("Seconds").textContent = SelectTimeMode.seconds;
  }
}

export function copy(mode) {
  if (mode == "pomodoro") {
    Object.assign(SelectTimeMode, Time.pomodoro);
  } else if (mode == "shortBreak") {
    Object.assign(SelectTimeMode, Time.shortBreak);
  } else if (mode == "longBreak") {
    Object.assign(SelectTimeMode, Time.longBreak);
  }
}

export function Pausing() {
  Button.current.textContent = "start";
  Button.current.dataset.action = "start";
  clearInterval(tickingInterval);
  Tickin = false;
}

function Timer() {
  const [selectBreak, setSelectBreak] = useState(false);

  return (
    <>
      <TimerMode setSelectBreak={setSelectBreak} />
      <div id="js-clock">
        <span id="Minutes" className="minutes" ref={Minutes}>
          {SelectTimeMode.minutes}
        </span>
        <span>:</span>
        <span id="Seconds" className="seconds" ref={Seconds}>
          {SelectTimeMode.seconds}
        </span>
      </div>
      <button data-action="start" ref={Button} onClick={StartTimer}>
        start
      </button>
      <button onClick={openSettings}>Настройки</button>
      <input
        type="checkbox"
        id="settingsButton"
        onChange={openSettings}
      ></input>
      <div id="settingsMenu" style={{ display: "none" }}>
        <input
          id="inputSettingsPomodoro"
          placeholder="Pomodoro"
          type="number"
          value={settingPomodoro}
          onChange={(e) => {
            setSettingPomodoro(e.target.value);
          }}
        ></input>
        <input
          value={settingShortBreak}
          id="inputSettingsShortBreak"
          placeholder="ShortBreak"
          type="number"
          onChange={(e) => {
            setSettingShortBreak(e.target.value);
          }}
        ></input>
        <input
          value={settingLongBreak}
          id="inputSettingsLongBreak"
          placeholder="LongBreak"
          type="number"
          onChange={(e) => {
            setSettingLongBreak(e.target.value);
          }}
        ></input>
        <div>
          mode: <button onClick={SelectModePomodoro}> pomodoro</button>
        </div>
        <div>
          mode: <button onClick={SelectModeLongpom}> longpom</button>
        </div>
        <button onClick={changeTimer}>сохранить</button>
      </div>
    </>
  );
}

export default Timer;
