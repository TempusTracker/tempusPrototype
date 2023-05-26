import React, { useState } from "react";
import { users } from "../SignInForm/SignInForm";

export var Tickin = false;
function Pomodoro() {
  const Time = {
    pomodoro: { minutes: 25, seconds: 0 },
    shortBreak: { minutes: 5, seconds: 0 },
    longBreak: { minutes: 15, seconds: 0 },
    longBreakInterval: 4,
  };

  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  let SelectTimeMode = {};
  let ViewTime = Time.pomodoro;

  let tickingInterval = 0;
  let TotalTime = 0;
  let SelectBreak = false;
  let Minutes = React.createRef();
  let Seconds = React.createRef();
  let Button = React.createRef();

  const [settingPomodoro, setSettingPomodoro] = useState("");
  const [settingShortBreak, setSettingShortBreak] = useState("");
  const [settingLongBreak, setSettingLongBreak] = useState("");

  function LocalStorageSave(pomodoro, shortBreak, longBreak) {
    localStorage.setItem(
      "Time",
      JSON.stringify({ pomodoro, shortBreak, longBreak })
    );
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
    if (mode == "pomodoro") {
      Object.assign(SelectTimeMode, Time.pomodoro);
    } else if (mode == "shortBreak") {
      Object.assign(SelectTimeMode, Time.shortBreak);
    } else if (mode == "longBreak") {
      Object.assign(SelectTimeMode, Time.longBreak);
    }
  }

  function StartTimer(e) {
    const actoin = e.target;
    if (actoin.dataset.action == "start") {
      e.target.textContent = "pause";
      actoin.dataset.action = "pause";
      Ticking();
    } else if (actoin.dataset.action == "pause") {
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
      console.log(SelectTimeMode.seconds);
    }
  }

  function checkingTime() {
    if (SelectTimeMode.minutes === 0 && SelectTimeMode.seconds === 0) {
      Pausing();
      Button.current.textContent = "start";
      Button.current.dataset.action = "start";
      if (Time.longBreakInterval != 0) {
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
      console.log(SelectTimeMode);
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
      if (selectUserLocal.Name === user.Name) {
        user.TotalTime = TotalTime;
      }
    }
    console.log(users);
  }

  function Pausing() {
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
      document.getElementById("settingsMenu").style.display = "block";
    } else {
      document.getElementById("settingsMenu").style.display = "none";
    }
  }

  function ChengeTime() {
    if (
      settingPomodoro != "" &&
      settingShortBreak != "" &&
      settingLongBreak != ""
    ) {
      Time.pomodoro.minutes = settingPomodoro;
      Time.shortBreak.minutes = settingShortBreak;
      Time.longBreak.minutes = settingLongBreak;
      LocalStorageSave(settingPomodoro, settingShortBreak, settingLongBreak);
      openPage();
      document.getElementById("Minutes").textContent = settingPomodoro;
    } else {
      alert("пустые поля");
    }
  }

  function SelectModePomodoro() {
    document.getElementById("inputSettingsPomodoro").value = 25;
    document.getElementById("inputSettingsShortBreak").value = 5;
    document.getElementById("inputSettingsLongBreak").value = 15;
    setSettingPomodoro(25);
    setSettingShortBreak(5);
    setSettingLongBreak(15);
  }
  function SelectModeLongpom() {
    document.getElementById("inputSettingsPomodoro").value = 40;
    document.getElementById("inputSettingsShortBreak").value = 10;
    document.getElementById("inputSettingsLongBreak").value = 20;
    setSettingPomodoro(40);
    setSettingShortBreak(10);
    setSettingLongBreak(20);
  }

  function openPage() {
    if (JSON.parse(localStorage.getItem("Time")) != null) {
      Time.pomodoro.minutes =
        JSON.parse(localStorage.getItem("Time")).pomodoro || 25;
      Time.shortBreak.minutes =
        JSON.parse(localStorage.getItem("Time")).shortBreak || 5;
      Time.longBreak.minutes =
        JSON.parse(localStorage.getItem("Time")).longBreak || 15;
    }
    UpdateTime();
  }

  copy("pomodoro");
  openPage();
  return (
    <>
      <div id="js-mode-buttons" onClick={HandleClickMods}>
        <button data-mode="pomodoro">Pomodoro</button>
        <button data-mode="shortBreak">Short break</button>
        <button data-mode="longBreak">Long break</button>
      </div>
      <div id="js-clock">
        <span id="Minutes" className="minutes" ref={Minutes}>
          {ViewTime.minutes}
        </span>
        <span>:</span>
        <span id="Seconds" className="seconds" ref={Seconds}>
          {ViewTime.seconds}
        </span>
      </div>
      <button data-action="start" ref={Button} onClick={StartTimer}>
        start
      </button>
      <button onClick={openSettings}>Настройки</button>
      <input type="checkbox" onChange={openSettings}></input>
      <div id="settingsMenu" style={{ display: "none" }}>
        <input
          id="inputSettingsPomodoro"
          placeholder="Pomodoro"
          type="number"
          onChange={(e) => {
            setSettingPomodoro(e.target.value);
          }}
        ></input>
        <input
          id="inputSettingsShortBreak"
          placeholder="ShortBreak"
          type="number"
          onChange={(e) => {
            setSettingShortBreak(e.target.value);
          }}
        ></input>
        <input
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
        <button onClick={ChengeTime}>сохранить</button>
      </div>
    </>
  );
}

export default Pomodoro;
