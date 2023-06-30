import React, { useRef } from "react";
import style from "./timerPage.css";

function TimerPage(props) {
  const { UserFullData } = props;

  const Time = {
    workTime: { minutes: 25, seconds: 0 },
    shortBreak: { minutes: 5, seconds: 0 },
    longBreak: { minutes: 15, seconds: 0 },
    longBreakInterval: 6,
  };

  let SelectTimeMode = {};

  let tickingInterval = 0;
  let TotalTime = 0;
  let SelectBreak = false;
  let Minutes = React.createRef();
  let Seconds = React.createRef();
  let Button = React.createRef();
  let ButtonStop = React.createRef();
  let Buttonafter = React.createRef();
  let MainBlock = React.createRef();
  let circle = React.createRef();
  let SettingsOpen = false;
  let TimeForAnimate = 99999;

  const settingWorkTime = useRef(UserFullData.userTimeSettings.workTime);
  const settingShortBreak = useRef(UserFullData.userTimeSettings.shortBreak);
  const settingLongBreak = useRef(UserFullData.userTimeSettings.longBreak);

  function LocalStorageSave(workTime, shortBreak, longBreak) {
    UserFullData.userTimeSettings = { workTime, shortBreak, longBreak };
    localStorage.setItem("user", JSON.stringify(UserFullData));
  }

  //сократить

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
      if (
        action.dataset.action === "start" &&
        Button.current.classList.contains("ButtonStart")
      ) {
        e.target.classList.add("ButtonStop");
        e.target.classList.remove("ButtonStart");
        ButtonStop.current.classList.add("ButtonStart");
        ButtonStop.current.classList.remove("ButtonStop");
        Buttonafter.current.style.cssText = "animation-name: slideinLeft";
        circle.current.style.cssText = "animation-play-state: running;";
        Ticking();
      } else if (action.dataset.action === "pause") {
        e.target.classList.add("ButtonStart");
        e.target.classList.remove("ButtonStop");
        ButtonStop.current.classList.add("ButtonStop");
        Buttonafter.current.style.cssText = "animation-name: slideinRight";
        ButtonStop.current.classList.remove("ButtonStart");
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
      Button.current.classList.add("ButtonStart");
      Button.current.classList.remove("ButtonStop");
      ButtonStop.current.classList.add("ButtonStop");
      ButtonStop.current.classList.remove("ButtonStart");
      Buttonafter.current.style.cssText = "animation-name: slideinRight";
      if (Time.longBreakInterval !== 0) {
        Time.longBreakInterval = Time.longBreakInterval - 1;
        UpdateTime();
        if (SelectBreak === false) {
          copy("shortBreak");
          SelectBreak = true;
          UpdateTime();
          TimeForAnimate = 60 * SelectTimeMode.minutes;
          console.log(TimeForAnimate);
        } else if (SelectBreak === true) {
          copy("workTime");
          TimeForAnimate = 60 * SelectTimeMode.minutes;
          console.log(TimeForAnimate);
          SelectBreak = false;
          UpdateTime();
        }
      } else {
        copy("longBreak");
        Time.longBreakInterval = 7;
        SelectBreak = true;
        TimeForAnimate = 60 * SelectTimeMode.minutes;
        console.log(TimeForAnimate);
        UpdateTime();
      }
    }
  }

  function clickNext() {
    Pausing();
    SelectTimeMode.minutes = 0;
    SelectTimeMode.seconds = 0;
    checkingTime();
    circle.current.style.cssText = "animation: none;";
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
  }

  function Pausing() {
    circle.current.style.cssText = "animation-play-state: paused;";
    Button.current.classList.add("ButtonStart");
    Button.current.classList.remove("ButtonStop");
    ButtonStop.current.classList.add("ButtonStop");
    ButtonStop.current.classList.remove("ButtonStart");
    Buttonafter.current.style.cssText = "animation-name: slideinRight";
    clearInterval(tickingInterval);
  }

  function UpdateTime() {
    if (document.getElementById("Minutes") != null) {
      document.getElementById("Minutes").textContent = SelectTimeMode.minutes;
      if (SelectTimeMode.seconds < 10) {
        document.getElementById("Seconds").textContent =
          "0" + SelectTimeMode.seconds;
      } else {
        document.getElementById("Seconds").textContent =
          SelectTimeMode.seconds + "";
      }
    }
  }

  function openSettings() {
    SettingsOpen = true;
    MainBlock.current.style.cssText = "animation-name: displaynone;";
    document.getElementById("settingsMenu").style.cssText =
      "animation-name: displayblock;";
    Pausing();
    Buttonafter.current.style.cssText = "animation-name: none";
  }

  function closeSettings() {
    SettingsOpen = false;
    document.getElementById("settingsMenu").style.cssText =
      "animation-name: displaynone;";
    MainBlock.current.style.cssText = "animation-name: displayblock;";
    ReadTime();
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
    MainBlock.current.style.cssText = "animation-name: displayblock;";
    document.getElementById("settingsMenu").style.cssText =
      "animation-name: displaynone;";
    circle.current.style.cssText = "animation: none;";
    Buttonafter.current.style.cssText = "animation-name: none";
  }
  function ReadTime() {
    Time.workTime.minutes = UserFullData.userTimeSettings.workTime;
    Time.shortBreak.minutes = UserFullData.userTimeSettings.shortBreak;
    Time.longBreak.minutes = UserFullData.userTimeSettings.longBreak;
    copy("workTime");
    UpdateTime();
  }

  function ClickClearTime() {
    Pausing();
    circle.current.style.cssText = "animation: none;";
    checkingTime();
    LocalStorageSave(25, 5, 15);
    ReadTime();
  }

  function SelectModePomodoro() {
    settingWorkTime.current = 25;
    settingShortBreak.current = 5;
    settingLongBreak.current = 15;
    document.getElementById("inputSettingsPomodoro").value = 25; //тоже переписать, пока хз
    document.getElementById("inputSettingsShortBreak").value = 5;
    document.getElementById("inputSettingsLongBreak").value = 15;
  }

  function SelectModeLongpom() {
    settingWorkTime.current = 40;
    settingShortBreak.current = 10;
    settingLongBreak.current = 20;
    document.getElementById("inputSettingsPomodoro").value = 40;
    document.getElementById("inputSettingsShortBreak").value = 10;
    document.getElementById("inputSettingsLongBreak").value = 20;
  }

  function clickPlusSetting(e) {
    if (e.target.classList.contains("plusWork")) {
      settingWorkTime.current = settingWorkTime.current + 1;
      document.getElementById("inputSettingsPomodoro").value =
        settingWorkTime.current;
    } else if (e.target.classList.contains("plusShort")) {
      settingShortBreak.current = settingShortBreak.current + 1;
      document.getElementById("inputSettingsShortBreak").value =
        settingShortBreak.current;
    } else if (e.target.classList.contains("plusLong")) {
      settingLongBreak.current = settingLongBreak.current + 1;
      document.getElementById("inputSettingsLongBreak").value =
        settingLongBreak.current;
    }
  }
  function clickMinusSetting(e) {
    if (e.target.classList.contains("minusWork")) {
      settingWorkTime.current = settingWorkTime.current - 1;
      document.getElementById("inputSettingsPomodoro").value =
        settingWorkTime.current;
    } else if (e.target.classList.contains("minusShort")) {
      settingShortBreak.current = settingShortBreak.current - 1;
      document.getElementById("inputSettingsShortBreak").value =
        settingShortBreak.current;
    } else if (e.target.classList.contains("minusLong")) {
      settingLongBreak.current = settingLongBreak.current - 1;
      document.getElementById("inputSettingsLongBreak").value =
        settingLongBreak.current;
    }
  }

  ReadTime();
  copy("workTime");

  return (
    <div className="TimerBlock">
      <div className="mainBlock" ref={MainBlock}>
        <div id="js-clock" className="Clock">
          <div className="circle" ref={circle}></div>
          <div className="circle-back"></div>
          <div className="time">
            <span id="Minutes" className="minutes" ref={Minutes}>
              {Number(settingWorkTime.current)}
            </span>
            <span>:</span>
            <span id="Seconds" className="seconds" ref={Seconds}>
              {SelectTimeMode.seconds}0
            </span>
          </div>
        </div>
        <div className="Buttons">
          <button
            data-action="start"
            className="ButtonStart"
            ref={Button}
            onClick={StartTimer}
          >
            Старт&nbsp;
          </button>
          <button
            data-action="pause"
            className="ButtonStop"
            ref={ButtonStop}
            onClick={StartTimer}
          >
            Пауза&nbsp;
          </button>
          <div className="Buttonafter" ref={Buttonafter}></div>
        </div>
        <div className="ButtonSettings" onClick={openSettings}>
          <img
            alt="settings"
            src={require("./settings/setting.svg").default}
          ></img>
        </div>
        <div className="NextText" onClick={clickNext}>
          Следующее{" "}
        </div>
        <div className="clearButton" onClick={ClickClearTime}>
          Сброс
        </div>
      </div>

      <div
        id="settingsMenu"
        className="settingsMenu"
        style={{ display: "none" }}
      >
        <div className="buttonClose" onClick={closeSettings}>
          <img src={require("./settings/settingback.svg").default} alt="" />
        </div>
        <div className="inputWork inputSettings">
          <label className="label" for="inputSettingsPomodoro">
            Время работы
          </label>
          <input
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
          <button className="plus plusWork" onClick={clickPlusSetting}>
            +
          </button>
          <button className="minus minusWork" onClick={clickMinusSetting}>
            -
          </button>
        </div>
        <div className="inputShort inputSettings">
          <label className="label" for="inputSettingsShortBreak">
            Короткий перерыв
          </label>
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
          <button className="plus plusShort" onClick={clickPlusSetting}>
            +
          </button>
          <button className="minus minusShort" onClick={clickMinusSetting}>
            -
          </button>
        </div>
        <div className="inputLong inputSettings">
          <label className="label" for="inputSettingsLongBreak">
            Длинный перерыв
          </label>
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
          <button className="plus plusLong" onClick={clickPlusSetting}>
            +
          </button>
          <button className="minus minusLong" onClick={clickMinusSetting}>
            -
          </button>
        </div>

        <div>
          mode: <button onClick={SelectModePomodoro}> pomodoro</button>
        </div>
        <div>
          mode: <button onClick={SelectModeLongpom}> longpom</button>
        </div>
        <button onClick={changeTimer} className="saveButton">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default TimerPage;
