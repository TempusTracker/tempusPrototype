import React, { useState } from "react";
import { users } from "../components/SignInForm/SignInForm";

export var Tickin = false;
function Pomodoro() {
  const Time = {
    pomodoro: { minutes: 0, seconds: 10 },
    shortBreak: { minutes: 0, seconds: 5 },
    longBreak: { minutes: 0, seconds: 6 },
    longBreakInterval: 2,
  };

  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  let SelectTimeMode = {};

  let tickingInterval = 0;
  let TotalTime = 0;
  let SelectBreak = false;
  let Minutes = React.createRef();
  let Seconds = React.createRef();
  let Button = React.createRef();

  function HandlerSelectMode(mode) {
    copy(mode);
    console.log(SelectTimeMode);
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
        Time.longBreakInterval = 2; //автозамену завезите пожалуйста
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
    Minutes.current.textContent = SelectTimeMode.minutes;
    Seconds.current.textContent = SelectTimeMode.seconds;
  } //переписать на верстке

  copy("pomodoro");

  return (
    <>
      <div id="js-mode-buttons" onClick={HandleClickMods}>
        <button data-mode="pomodoro">Pomodoro</button>
        <button data-mode="shortBreak">Short break</button>
        <button data-mode="longBreak">Long break</button>
      </div>
      <div id="js-clock">
        <span className="minutes" ref={Minutes}>
          {SelectTimeMode.minutes}
        </span>
        <span>:</span>
        <span className="seconds" ref={Seconds}>
          {SelectTimeMode.seconds}
        </span>
      </div>
      <button data-action="start" ref={Button} onClick={StartTimer}>
        start
      </button>
    </>
  );
}

export default Pomodoro;
