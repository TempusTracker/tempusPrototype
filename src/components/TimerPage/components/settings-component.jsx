import React from "react";

function Settings(props) {
  const {
    settingWorkTime,
    settingShortBreak,
    settingLongBreak,
    Pausing,
    MainBlock,
    ReadTime,
    LocalStorageSave,
    circle,
    Buttonafter,
  } = props;

  function closeSettings() {
    document.getElementById("settingsMenu").style.cssText =
      "animation-name: displaynone;";
    MainBlock.current.style.cssText = "animation-name: displayblock;";
    circle.current.style.cssText = "animation: none;";
    ReadTime();
  }

  function changeTimer() {
    Pausing();
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

  return (
    <div id="settingsMenu" className="settingsMenu" style={{ display: "none" }}>
      <div className="buttonClose" onClick={closeSettings}>
        <img src={require("../settings/settingback.svg").default} alt="" />
      </div>
      <div className="inputWork inputSettings">
        <label className="label" for="inputSettingsPomodoro">
          Время работы
        </label>
        <input
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
  );
}

export default Settings;
