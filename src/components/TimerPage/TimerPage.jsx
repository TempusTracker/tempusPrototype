import React, { useRef } from "react";
import style from "./timerPage.css";
import Settings from "./components/settings-component";
import FastButtons from "./components/fast-buttons";

function TimerPage(props) {
  const { UserFullData, error } = props;

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

  function ReadTime() {
    Time.workTime.minutes = UserFullData.userTimeSettings.workTime;
    Time.shortBreak.minutes = UserFullData.userTimeSettings.shortBreak;
    Time.longBreak.minutes = UserFullData.userTimeSettings.longBreak;
    copy("workTime");
    UpdateTime();
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
        <FastButtons
          SelectTimeMode={SelectTimeMode}
          checkingTime={checkingTime}
          Pausing={Pausing}
          ReadTime={ReadTime}
          LocalStorageSave={LocalStorageSave}
          circle={circle}
        ></FastButtons>
      </div>
      <Settings
        SettingsOpen={SettingsOpen}
        settingWorkTime={settingWorkTime}
        settingShortBreak={settingShortBreak}
        settingLongBreak={settingLongBreak}
        MainBlock={MainBlock}
        ReadTime={ReadTime}
        Pausing={Pausing}
        LocalStorageSave={LocalStorageSave}
        circle={circle}
        Buttonafter={Buttonafter}
        error={error}
      ></Settings>
    </div>
  );
}

export default TimerPage;
