import React from "react";
import { users } from "../components/SignInForm/SignInForm";

export var Tickin = false;
function Pomodoro() {
  const Time = {
    pomodoro: { minutes: 25, seconds: 0 },
    shortBreak: { minutes: 5, seconds: 0 },
    longBreak: { minutes: 15, seconds: 0 },
    longBreakInterval: 4,
  };

  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  var SelectMode = {};

  var tickingInterval = 0;
  var TotalTime = 0;
  var SelectBreak = false;
  let Minutes = React.createRef();
  let Seconds = React.createRef();
  let Button = React.createRef();

  function HandleClickPomodoro() {
    copy("pomodoro");
    console.log(SelectMode);
    UpdateTime();
    Pausing();
  }

  function HandleClickShortBreak() {
    copy("shortBreak");
    console.log(SelectMode);
    UpdateTime();
    Pausing();
  }

  function HandleClickLongBreak() {
    copy("longBreak");
    console.log(SelectMode);
    UpdateTime();
    Pausing();
  }

  function copy(mode) {
    if (mode == "pomodoro") {
      Object.assign(SelectMode, Time.pomodoro);
    } else if (mode == "shortBreak") {
      Object.assign(SelectMode, Time.shortBreak);
    } else if (mode == "longBreak") {
      Object.assign(SelectMode, Time.longBreak);
    }
  }

  function UpdateTime() {
    Minutes.current.textContent = SelectMode.minutes;
    Seconds.current.textContent = SelectMode.seconds;
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

  function Ticking() {
    Tickin = true;
    tickingInterval = setInterval(() => {
      if (SelectMode.seconds === 0) {
        newMinut();
        UpdateTime();
      } else {
        SelectMode.seconds = SelectMode.seconds - 1;
        UpdateTime();
      }
      if (SelectMode.minutes === 0 && SelectMode.seconds === 0) {
        Pausing();
        Button.current.textContent = "start";
        Button.current.dataset.action = "start";
        if (Time.longBreakInterval != 0) {
          Time.longBreakInterval = Time.longBreakInterval - 1;
          UpdateTime();
          if (SelectBreak == false) {
            copy("shortBreak");
            SelectBreak = true;
            UpdateTime();
          } else if (SelectBreak == true) {
            copy("pomodoro");
            SelectBreak = false;
            UpdateTime();
          }
        } else {
          copy("longBreak");
          Time.longBreakInterval = 2;
          SelectBreak = true;
          UpdateTime();
        }
      }
      console.log(SelectMode);
    }, 1000);

    function newMinut() {
      SelectMode.minutes = SelectMode.minutes - 1;
      SelectMode.seconds = 59;
      TotalTime = TotalTime + 1;
      AddVallue(TotalTime);
    }

    function AddVallue(TotalTime) {
      for (let user of users) {
        if (selectUserLocal.Name == user.Name) {
          user.TotalTime = TotalTime;
        }
      }
      console.log(users);
    }
  }

  function Pausing() {
    clearInterval(tickingInterval);
    Tickin = false;
  }

  copy("pomodoro");

  return (
    <div>
      <div id="js-mode-buttons">
        <button data-mode="pomodoro" onClick={HandleClickPomodoro}>
          Pomodoro
        </button>
        <button data-mode="shortBreak" onClick={HandleClickShortBreak}>
          Short break
        </button>
        <button data-mode="longBreak" onClick={HandleClickLongBreak}>
          Long break
        </button>
      </div>
      <div id="js-clock">
        <span className="minutes" ref={Minutes}>
          25
        </span>
        <span>:</span>
        <span className="seconds" ref={Seconds}>
          00
        </span>
      </div>
      <button data-action="start" ref={Button} onClick={StartTimer}>
        start
      </button>
    </div>
  );
}

export default Pomodoro;
