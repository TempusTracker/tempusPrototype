import React, { useRef } from "react";
import style from "./TimerPage.module.css";

function TimerPage(props) {
  const { UserFullData } = props;

  const Time = {
    workTime: { minutes: 25, seconds: 0 },
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
  let SettingsOpen = false;

  const settingWorkTime = useRef(UserFullData.userTimeSettings.workTime);
  const settingShortBreak = useRef(UserFullData.userTimeSettings.shortBreak);
  const settingLongBreak = useRef(UserFullData.userTimeSettings.longBreak);

  function LocalStorageSave(workTime, shortBreak, longBreak) {
    UserFullData.userTimeSettings = { workTime, shortBreak, longBreak };
    localStorage.setItem("user", JSON.stringify(UserFullData));
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
    if (e.target.dataset.mode === "workTime") {
      HandlerSelectMode("workTime");
    } else if (e.target.dataset.mode === "shortBreak") {
      HandlerSelectMode("shortBreak");
      Pausing();
    } else if (e.target.dataset.mode === "longBreak") {
      HandlerSelectMode("longBreak");
    }
  } //сократить

  function copy(mode) {
    if (mode === "workTime") {
      Object.assign(SelectTimeMode, Time.workTime);
    } else if (mode === "shortBreak") {
      Object.assign(SelectTimeMode, Time.shortBreak);
    } else if (mode === "longBreak") {
      Object.assign(SelectTimeMode, Time.longBreak);
    }
  }

  function StartTimer(e) {
    const action = e.target;
    console.log(!SettingsOpen);
    if (!SettingsOpen) {
      if (action.dataset.action === "start") {
        e.target.textContent = "pause";
        action.dataset.action = "pause";

        Ticking();
      } else if (action.dataset.action === "pause") {
        e.target.textContent = "start";
        action.dataset.action = "start";
        Pausing();
      }
    } else {
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
          copy("workTime");
          SelectBreak = false;
          UpdateTime();
        }
      } else {
        copy("longBreak");
        Time.longBreakInterval = 4;
        SelectBreak = true;
        UpdateTime();
      }
    }
  }

  function Ticking() {
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
    // AddVallue(TotalTime);
  }

  // function AddVallue(TotalTime) { //позже реализуем, пока лишнее
  //   for (let user of users) {
  //     if (UserData.selectedUser.Name === user.Name) {
  //       user.TotalTime = TotalTime;
  //     }
  //   }
  // }

  function Pausing() {
    Button.current.textContent = "start";
    Button.current.dataset.action = "start";
    clearInterval(tickingInterval);
  }

  function UpdateTime() {
    if (document.getElementById("Minutes") != null) {
      document.getElementById("Minutes").textContent = SelectTimeMode.minutes;
      document.getElementById("Seconds").textContent = SelectTimeMode.seconds;
    }
  } //переписать на верстке, пока хз как

  function openSettings(e) {
    if (e.target.checked) {
      SettingsOpen = true;
      Pausing();
      document.getElementById("settingsMenu").style.display = "block";
    } else {
      SettingsOpen = false;
      document.getElementById("settingsMenu").style.display = "none";
    }
  }

  function changeTimer() {
    Pausing();
    SettingsOpen = false;
    if (
      settingWorkTime.current < 61 &&
      settingShortBreak.current < 61 &&
      settingLongBreak.current < 61 &&
      settingWorkTime.current > 0 &&
      settingShortBreak.current > 0 &&
      settingLongBreak.current > 0 &&
      settingWorkTime.current !== 0 &&
      settingShortBreak.current !== 0 &&
      settingLongBreak.current !== 0
    ) {
      LocalStorageSave(
        settingWorkTime.current,
        settingShortBreak.current,
        settingLongBreak.current
      );
      ReadTime();
    }

    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById("settingsButton").checked = false;
  }
  function ReadTime() {
    Time.workTime.minutes = UserFullData.userTimeSettings.workTime;
    Time.shortBreak.minutes = UserFullData.userTimeSettings.shortBreak;
    Time.longBreak.minutes = UserFullData.userTimeSettings.longBreak;

    copy("workTime");
    UpdateTime();
  }

  function SelectModePomodoro() {
    settingWorkTime.current = 25;
    settingShortBreak.current = 5;
    settingLongBreak.current = 15;
    document.getElementById("inputSettingsPomodoro").value = 25; //тоже переписать, пока хз
    document.getElementById("inputSettingsShortBreak").value = 5;
    document.getElementById("inputSettingsLongBreak").value = 15;
    LocalStorageSave(25, 5, 15);
  }

  function SelectModeLongpom() {
    settingWorkTime.current = 40;
    settingShortBreak.current = 10;
    settingLongBreak.current = 20;
    document.getElementById("inputSettingsPomodoro").value = 40;
    document.getElementById("inputSettingsShortBreak").value = 10;
    document.getElementById("inputSettingsLongBreak").value = 20;
    LocalStorageSave(40, 10, 20);
  }

  ReadTime();
  copy("workTime");

  return (
    <>
      <div id="js-mode-buttons" onClick={HandleClickMods}>
        <button data-mode="workTime">WorkTime&nbsp;</button>
        <button data-mode="shortBreak">ShortBreak&nbsp;</button>
        <button data-mode="longBreak">LongBreak</button>
      </div>
      <div id="js-clock">
        <span id="Minutes" className="minutes" ref={Minutes}>
          {Number(settingWorkTime.current)}
        </span>
        <span>:</span>
        <span id="Seconds" className="seconds" ref={Seconds}>
          {SelectTimeMode.seconds}
        </span>
      </div>
      <button data-action="start" ref={Button} onClick={StartTimer}>
        start&nbsp;
      </button>
      <button onClick={openSettings}>Настройки</button>
      <input
        type="checkbox"
        id="settingsButton"
        onChange={openSettings}
      ></input>
      <div id="settingsMenu" style={{ display: "none" }}>
        <input //на все инпуты времени ограничить ввод числа больше 61, или хотя бы сделать попап предупреждение
          className={style.inputTimeSettings}
          id="inputSettingsPomodoro"
          placeholder="work time"
          type="number"
          min="0"
          max="61"
          onChange={(e) => {
            settingWorkTime.current = e.target.value;
          }}
        ></input>
        <input
          className={style.inputTimeSettings}
          id="inputSettingsShortBreak"
          placeholder="ShortBreak"
          type="number"
          min="0"
          max="61"
          onChange={(e) => {
            settingShortBreak.current = e.target.value;
          }}
        ></input>
        <input
          className={style.inputTimeSettings}
          id="inputSettingsLongBreak"
          placeholder="LongBreak"
          type="number"
          min="0"
          max="61"
          onChange={(e) => {
            settingLongBreak.current = e.target.value;
          }}
        ></input>
        <div>
          mode: <button onClick={SelectModePomodoro}> pomodoro</button>
        </div>
        <div>
          mode: <button onClick={SelectModeLongpom}> longpom</button>
        </div>
        <button onClick={changeTimer}>применить</button>
      </div>
    </>
  );
}

export default TimerPage;
