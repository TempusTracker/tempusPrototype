import { usersE } from "./SignInForm.jsx";

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
