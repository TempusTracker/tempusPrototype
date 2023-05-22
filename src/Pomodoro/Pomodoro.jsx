import React from "react";
import { users } from "../components/SignInForm/SignInForm";

function Pomodoro() {
  const Time = {
    pomodoro: { minutes: 25, seconds: 0 },
    shortBreak: { minutes: 5, seconds: 0 },
    longBreak: { minutes: 15, seconds: 0 },
    longBreakInterval: 4,
  };

  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const Minutes = document.getElementsByClassName("minutes");
  const Seconds = document.getElementsByClassName("seconds");
  var SelectMode = Time.pomodoro;
  var tickingInterval = 0;
  var TotalTime = 0;

  function HandleClickPomodoro() {
    UpdateTime();
    SelectMode = Time.pomodoro;
    console.log(SelectMode);
    Pausing();
  }
  function HandleClickShortBreak() {
    UpdateTime();
    SelectMode = Time.shortBreak;
    console.log(SelectMode);
    Pausing();
  }
  function HandleClickLongBreak() {
    UpdateTime();
    SelectMode = Time.longBreak;
    console.log(SelectMode);
    Pausing();
  }

  function UpdateTime() {
    Minutes.textContent = SelectMode.minutes;
    Seconds.textContent = SelectMode.seconds;
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
    tickingInterval = setInterval(() => {
      if (SelectMode.seconds < 10) {
        SelectMode.seconds = SelectMode.seconds;
      }
      if (SelectMode.seconds === 0) {
        newMinut();
        UpdateTime();
      } else {
        SelectMode.seconds = SelectMode.seconds - 1;
        UpdateTime();
      }
      if (SelectMode.minutes === 0 && SelectMode.seconds === 0) {
        Pausing();
        if (Time.longBreakInterval != 0) {
          SelectMode = Time.shortBreak;
          Time.longBreakInterval = Time.longBreakInterval - 1;
        } else {
          SelectMode = Time.longBreak;
          Time.longBreakInterval = 4;
        }
      }
      console.log(SelectMode);
    }, 1000);

    function newMinut() {
      SelectMode.minutes = SelectMode.minutes - 1;
      SelectMode.seconds = 60;
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
  }

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
        <span className="minutes">25</span>
        <span>:</span>
        <span className="seconds">00</span>
      </div>
      <button data-action="start" onClick={StartTimer}>
        start
      </button>
    </div>
  );
}

export default Pomodoro;
