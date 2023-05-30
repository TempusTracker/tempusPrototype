import { usersE } from "./SignInForm.jsx";
import { TeamsE } from "./LogInForm.jsx";

function LocalStorageSaveTeam(team) {
  localStorage.setItem("team", JSON.stringify(team));
}

export function isNameExist(name) {
  for (let i = 0; i < usersE.length; i++) {
    if (usersE[i].Name === name) {
      return true;
    }
  }
  return false;
}

export function isEmailExist(email) {
  for (let i = 0; i < usersE.length; i++) {
    if (usersE[i].Email === email) {
      return true;
    }
  }
  return false;
}

export function selectTeam(code) {
  for (let i = 0; i < TeamsE.length; i++) {
    if (TeamsE[i].Code === code) {
      LocalStorageSaveTeam(TeamsE[i]);
    }
  }
  return false;
}
