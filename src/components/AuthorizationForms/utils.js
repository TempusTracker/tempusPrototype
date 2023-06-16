import { usersUtils } from "../../App.js";
import { TeamsUtils } from "../../App.js";

function LocalStorageSaveTeam(team) {
  localStorage.setItem("team", JSON.stringify(team));
}

export function isNameExist(name) {
  for (let i = 0; i < usersUtils.length; i++) {
    if (usersUtils[i].UserData.Name === name) {
      return true;
    }
  }
  return false;
}

export function isEmailExist(email) {
  for (let i = 0; i < usersUtils.length; i++) {
    if (usersUtils[i].UserData.Email === email) {
      return true;
    }
  }
  return false;
}

export function selectTeam(code) {
  for (let i = 0; i < TeamsUtils.length; i++) {
    if (TeamsUtils[i].Code === code) {
      LocalStorageSaveTeam(TeamsUtils[i]);
    }
  }
  return false;
}
