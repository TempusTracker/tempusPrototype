import React, { useState } from "react";
import { UserData } from "./localStorage/localStorage";

console.log(UserData);

export var Tickin = false;
function Pomodoro(props) {
  const { users } = props;

  const Time = {
    pomodoro: { minutes: 25, seconds: 0 },
    shortBreak: { minutes: 5, seconds: 0 },
    longBreak: { minutes: 15, seconds: 0 },
    longBreakInterval: 4,
  };

  let SelectTimeMode = {};

  let tickingInterval = 0;
  let TotalTime = 0;
  let SelectBreak = false;
  let Minutes = React.createRef();
  let Seconds = React.createRef();
  let Button = React.createRef();

  const [settingPomodoro, setSettingPomodoro] = useState(25);
  const [settingShortBreak, setSettingShortBreak] = useState(5);
  const [settingLongBreak, setSettingLongBreak] = useState(15);

  function LocalStorageSave(pomodoro, shortBreak, longBreak) {
    localStorage.setItem(
      "userTimeSettings",
      JSON.stringify({ pomodoro, shortBreak, longBreak })
    );
    UserData.userTimeSettings = { pomodoro, shortBreak, longBreak };
  }

  function HandlerSelectMode(mode) {
    copy(mode);
    SelectBreak = false;
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
  } //сократить

  function copy(mode) {
    if (mode === "pomodoro") {
      Object.assign(SelectTimeMode, Time.pomodoro);
    } else if (mode === "shortBreak") {
      Object.assign(SelectTimeMode, Time.shortBreak);
    } else if (mode === "longBreak") {
      Object.assign(SelectTimeMode, Time.longBreak);
    }
  }

  function StartTimer(e) {
    const actoin = e.target;
    if (actoin.dataset.action === "start") {
      e.target.textContent = "pause";
      actoin.dataset.action = "pause";
      Ticking();
    } else if (actoin.dataset.action === "pause") {
      e.target.textContent = "start";
      actoin.dataset.action = "start";
      Pausing();
    }
  }

  function classicTick() {
    if (SelectTimeMode.seconds === 0) {
      newMinut();
      UpdateTime();
    } else {
      SelectTimeMode.seconds = SelectTimeMode.seconds - 1;
      UpdateTime();
    }
  }

  function checkingTime() {
    if (SelectTimeMode.minutes === 0 && SelectTimeMode.seconds === 0) {
      Pausing();
      Button.current.textContent = "start";
      Button.current.dataset.action = "start";
      if (Time.longBreakInterval !== 0) {
        Time.longBreakInterval = Time.longBreakInterval - 1;
        UpdateTime();
        if (SelectBreak === false) {
          copy("shortBreak");
          SelectBreak = true;
          UpdateTime();
        } else if (SelectBreak === true) {
          copy("pomodoro");
          SelectBreak = false;
          UpdateTime();
        }
      } else {
        copy("longBreak");
        Time.longBreakInterval = 4; //автозамену завезите пожалуйста
        SelectBreak = true;
        UpdateTime();
      }
    }
  }

  function Ticking() {
    Tickin = true;
    tickingInterval = setInterval(() => {
      classicTick();
      checkingTime();
      UpdateTime();
    }, 1000);
  }

  function newMinut() {
    SelectTimeMode.minutes = SelectTimeMode.minutes - 1;
    SelectTimeMode.seconds = 59;
    TotalTime = TotalTime + 1;
    AddVallue(TotalTime);
  }

  function AddVallue(TotalTime) {
    for (let user of users) {
      if (UserData.selectedUser.Name === user.Name) {
        user.TotalTime = TotalTime;
      }
    }
  }

  function Pausing() {
    Button.current.textContent = "start";
    Button.current.dataset.action = "start";
    clearInterval(tickingInterval);
    Tickin = false;
  }

  function UpdateTime() {
    if (document.getElementById("Minutes") != null) {
      document.getElementById("Minutes").textContent = SelectTimeMode.minutes;
      document.getElementById("Seconds").textContent = SelectTimeMode.seconds;
    }
  } //переписать на верстке

  function openSettings(e) {
    if (e.target.checked) {
      Pausing();
      document.getElementById("settingsMenu").style.display = "block";
    } else {
      document.getElementById("settingsMenu").style.display = "none";
    }
  }

  function changeTimer() {
    Pausing();
    if (
      settingPomodoro < 61 &&
      settingShortBreak < 61 &&
      settingLongBreak < 61
    ) {
      console.log(settingPomodoro, settingShortBreak, settingLongBreak);
      LocalStorageSave(settingPomodoro, settingShortBreak, settingLongBreak);
      ReadTime();
    }
    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById("settingsButton").checked = false;
  }
  function ReadTime() {
    Time.pomodoro.minutes = UserData.userTimeSettings.pomodoro;
    Time.shortBreak.minutes = UserData.userTimeSettings.shortBreak;

    Time.longBreak.minutes = UserData.userTimeSettings.longBreak;
    copy("pomodoro");
    UpdateTime();
  }

  function SelectModePomodoro() {
    document.getElementById("inputSettingsPomodoro").value = 25;
    document.getElementById("inputSettingsShortBreak").value = 5;
    document.getElementById("inputSettingsLongBreak").value = 15;
    // setSettingPomodoro(25);
    // setSettingShortBreak(5);
    // setSettingLongBreak(15);
    LocalStorageSave(25, 5, 15);
  }

  function SelectModeLongpom() {
    document.getElementById("inputSettingsPomodoro").value = 40;
    document.getElementById("inputSettingsShortBreak").value = 10;
    document.getElementById("inputSettingsLongBreak").value = 20;
    setSettingPomodoro(40);
    setSettingShortBreak(10);
    setSettingLongBreak(20);
  }

  ReadTime();
  copy("pomodoro");

  return (
    <>
      <div id="js-mode-buttons" onClick={HandleClickMods}>
        <button data-mode="pomodoro">Pomodoro&nbsp;</button>
        <button data-mode="shortBreak">ShortBreak&nbsp;</button>
        <button data-mode="longBreak">LongBreak</button>
      </div>
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

export default Pomodoro;
