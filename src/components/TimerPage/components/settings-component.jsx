import React from "react";

function Settings(props) {
  const {
    setDisable,
    setActive,
    settingWorkTime,
    settingShortBreak,
    settingLongBreak,
    Pausing,
    MainBlock,
    ReadTime,
    LocalStorageSave,
    circle,
    Buttonafter,
    error,
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
      Number(settingWorkTime.current) < 91 &&
      Number(settingShortBreak.current) < 91 &&
      Number(settingLongBreak.current) < 91
    ) {
      if (
        Number(settingWorkTime.current) > 0 &&
        Number(settingShortBreak.current) > 0 &&
        Number(settingLongBreak.current) > 0
      ) {
        if (
          Number(settingWorkTime.current) !== "" &&
          Number(settingShortBreak.current) !== "" &&
          Number(settingLongBreak.current) !== ""
        ) {
          if (
            Number(settingWorkTime.current) !== "0" &&
            Number(settingShortBreak.current) !== "0" &&
            Number(settingLongBreak.current) !== "0"
          ) {
            LocalStorageSave(
              Number(settingWorkTime.current),
              Number(settingShortBreak.current),
              Number(settingLongBreak.current)
            );
            ReadTime();
            MainBlock.current.style.cssText = "animation-name: displayblock;";
            document.getElementById("settingsMenu").style.cssText =
              "animation-name: displaynone;";
            circle.current.style.cssText = "animation: none;";
            Buttonafter.current.style.cssText = "animation-name: none";
          } else {
            error("Ошибка: значение не может быть равно 0");
          }
        } else {
          error("Ошибка: значение не может быть пустым");
        }
      } else {
        error("Ошибка: значение не может быть меньше 0");
      }
    } else {
      error("Ошибка: мы не рекомендуем работать больше 90 минут");
    }
  }

  function SelectModePomodoro() {
    settingWorkTime.current = 25;
    settingShortBreak.current = 5;
    settingLongBreak.current = 15;
    document.getElementById("inputSettingsPomodoro").value = 25; //тоже переписать, пока хз
    document.getElementById("inputSettingsShortBreak").value = 5;
    document.getElementById("inputSettingsLongBreak").value = 15;
    checkOnTrue();
  }

  function SelectModeLongpom() {
    settingWorkTime.current = 45;
    settingShortBreak.current = 15;
    settingLongBreak.current = 30;
    document.getElementById("inputSettingsPomodoro").value = 45;
    document.getElementById("inputSettingsShortBreak").value = 10;
    document.getElementById("inputSettingsLongBreak").value = 30;
    checkOnTrue();
  }
  function SelectModelooongpom() {
    settingWorkTime.current = 90;
    settingShortBreak.current = 20;
    settingLongBreak.current = 45;
    document.getElementById("inputSettingsPomodoro").value = 90;
    document.getElementById("inputSettingsShortBreak").value = 20;
    document.getElementById("inputSettingsLongBreak").value = 45;
    checkOnTrue();
  }

  function checkOnTrue() {
    if (
      Number(settingWorkTime.current) < 91 &&
      Number(settingShortBreak.current) < 91 &&
      Number(settingLongBreak.current) < 91 &&
      Number(settingWorkTime.current) > 0 &&
      Number(settingShortBreak.current) > 0 &&
      Number(settingLongBreak.current) > 0 &&
      Number(settingWorkTime.current) !== "" &&
      Number(settingShortBreak.current) !== "" &&
      Number(settingLongBreak.current) !== "" &&
      Number(settingWorkTime.current) !== "0" &&
      Number(settingShortBreak.current) !== "0" &&
      Number(settingLongBreak.current) !== "0"
    ) {
      setActive("saveButton");
    } else {
      setDisable("saveButton");
    }
  }

  function Open() {
    settingWorkTime.current = "0";
    settingShortBreak.current = "0";
    settingLongBreak.current = "0";
  }

  Open();

  function clickPlusSetting(e) {
    if (e.target.classList.contains("plusWork")) {
      settingWorkTime.current = Number(settingWorkTime.current) + 1;
      document.getElementById("inputSettingsPomodoro").value =
        settingWorkTime.current;
    } else if (e.target.classList.contains("plusShort")) {
      settingShortBreak.current = Number(settingShortBreak.current) + 1;
      document.getElementById("inputSettingsShortBreak").value =
        settingShortBreak.current;
    } else if (e.target.classList.contains("plusLong")) {
      settingLongBreak.current = Number(settingLongBreak.current) + 1;
      document.getElementById("inputSettingsLongBreak").value =
        settingLongBreak.current;
    }
    checkOnTrue();
  }
  function clickMinusSetting(e) {
    if (e.target.classList.contains("minusWork")) {
      settingWorkTime.current = Number(settingWorkTime.current) - 1;
      document.getElementById("inputSettingsPomodoro").value =
        settingWorkTime.current;
    } else if (e.target.classList.contains("minusShort")) {
      settingShortBreak.current = Number(settingShortBreak.current) - 1;
      document.getElementById("inputSettingsShortBreak").value =
        settingShortBreak.current;
    } else if (e.target.classList.contains("minusLong")) {
      settingLongBreak.current = Number(settingLongBreak.current) - 1;
      document.getElementById("inputSettingsLongBreak").value =
        settingLongBreak.current;
    }
    checkOnTrue();
  }

  return (
    <div id="settingsMenu" className="settingsMenu" style={{ display: "none" }}>
      <div className="buttonClose" onClick={closeSettings}>
        <img src={require("../settings/settingback.svg").default} alt="" />
      </div>
      <div className="inputs">
        <div className="inputWork inputSettings">
          <label className="label" htmlFor="inputSettingsPomodoro">
            Время работы
          </label>
          <input
            id="inputSettingsPomodoro"
            placeholder="25 мин"
            type="number"
            min="0"
            max="61"
            onChange={(e) => {
              settingWorkTime.current = e.target.value;
              checkOnTrue();
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
          <label className="label" htmlFor="inputSettingsShortBreak">
            Короткий перерыв
          </label>
          <input
            id="inputSettingsShortBreak"
            placeholder="05 мин"
            type="number"
            min="0"
            max="61"
            onChange={(e) => {
              settingShortBreak.current = e.target.value;
              checkOnTrue();
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
          <label className="label" htmlFor="inputSettingsLongBreak">
            Длинный перерыв
          </label>
          <input
            id="inputSettingsLongBreak"
            placeholder="15 мин"
            type="number"
            min="0"
            max="61"
            onChange={(e) => {
              settingLongBreak.current = e.target.value;
              checkOnTrue();
            }}
          ></input>
          <button className="plus plusLong" onClick={clickPlusSetting}>
            +
          </button>
          <button className="minus minusLong" onClick={clickMinusSetting}>
            -
          </button>
        </div>
        <div className="mods">
          <div className="title">Режимы</div>
          <div className="mods-items">
            <div>
              <button onClick={SelectModePomodoro}>
                25{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />
                5{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />{" "}
                15
              </button>
            </div>
            <div>
              <button onClick={SelectModeLongpom}>
                {" "}
                45{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />{" "}
                15{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />{" "}
                30
              </button>
            </div>
            <div>
              <button onClick={SelectModelooongpom}>
                90{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />{" "}
                20{" "}
                <img
                  src={require("../settings/Rectangle.svg").default}
                  alt=""
                />{" "}
                45
              </button>
            </div>
          </div>
        </div>
      </div>

      <button onClick={changeTimer} className="saveButton button-disable">
        Сохранить
      </button>
    </div>
  );
}

export default Settings;
