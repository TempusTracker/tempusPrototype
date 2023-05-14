import dom from "./dom.js";
import { isNameExist, isEmailExist } from "./utils.js";

export const users = [];

dom.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const UserName = dom.InputLogin.value;
  const UserEmail = dom.InputEmail.value;
  const UserPassword = dom.InputPassword.value;
  const UserTeamCode = dom.InputCodeTeam.value;

  if (isNameExist(UserName) || isEmailExist(UserEmail)) {
    alert("пользователь уже существует");
  } else {
    if (UserName === "" || UserPassword === "" || UserEmail === "") {
      alert("заполните все поля");
    } else {
      CreateUser(UserName, UserEmail, UserPassword, UserTeamCode);
    }
  }
});

function CreateUser(UserName, UserEmail, UserPassword, UserTeamCode = "none") {
  const NewUser = {
    Name: UserName,
    Email: UserEmail,
    Password: UserPassword,
    TeamCode: UserTeamCode,
  };
  users.push(NewUser);
  console.log(users);
  alert("Доборо пожаловать " + UserName);
}
