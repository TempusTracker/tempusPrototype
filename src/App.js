import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import MainPage from "./Pages/MainPage";
import LogInForm from "./components/AuthorizationForms/LogInForm";
import NotFound from "./components/NotFoundPage/NotFound";
import SignInForm from "./components/AuthorizationForms/RegistrationForm";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import TeamPage from "./components/TeamPage/TeamPage";
import CreateTeam from "./components/TeamPage/components/CreateTeam";
import { createPopup } from "./assets/animations/popup";

import "./assets/css/null.css";
import "./assets/css/App.css";

export let usersUtils = {};
export let TeamsUtils = {};
export let ErrorAnimate = {};
export let setErrorAnimate = {};

function App() {
  const [error, setError] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [users, setUsers] = useState([
    {
      UserData: {
        Name: "Masha",
        Email: "masha@mail.com",
        Password: "lols",
        TeamCode: 22,
        Role: "",
        InviteCode: "",
        TotalTime: "",
      },
      userTimeSettings: {
        workTime: 34,
        shortBreak: 7,
        longBreak: 17,
      },
    },
    {
      UserData: {
        Name: "kate",
        Email: "kate@mail.com",
        Password: "lol",
        TeamCode: "none",
        Role: "",
        InviteCode: "",
        TotalTime: "",
      },
      userTimeSettings: {
        workTime: 25,
        shortBreak: 5,
        longBreak: 15,
      },
    },
    {
      UserData: {
        Name: "Nikita",
        Email: "nikita@mail.com",
        Password: "lol",
        TeamCode: 22,
        Role: "admin",
        InviteCode: "22",
      },
      userTimeSettings: {
        workTime: 2,
        shortBreak: 1,
        longBreak: 3,
      },
    },
  ]);

  const [Teams, setTeams] = useState([
    {
      Key: "",
      Title: "lolTeam",
      logo: "",
      Description: "description",
      Code: 33,
    },
    {
      Key: "",
      Title: "vtornik",
      logo: "nety",
      Description: "opisanie",
      Code: 22,
    },
  ]);

  usersUtils = users;
  TeamsUtils = Teams;
  ErrorAnimate = error;
  setErrorAnimate = setError;

  let isTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;

  function logUot(e) {
    e.preventDefault();
    // localStorage.removeItem("user");
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.setItem("team", JSON.stringify({}));
    //localStorage.setItem("user", JSON.stringify({}));
    window.location.href = "/LoginForm";
    alert("poka!!!!!");
  }

  return (
    <BrowserRouter>
      <div className="App null.css">
        {error ? createPopup() : ""}
        <header className="App-header"></header>
        <div className="App-body">
          {isLoggedLocal ? (
            <Routes>
              <Route path="*" Component={NotFound} />
              <Route exact path="/" element={<MainPage user={user} />} />
              <Route path="/MainPage" element={<MainPage user={user} />} />
              <Route
                path="/MyProfile"
                element={<ProfilPage UserFullData={user}></ProfilPage>}
              />
              <Route path="/TaskBar" Component={NotFound} />
              <Route
                path="/MyTeam"
                element={
                  <TeamPage
                    UserFullData={user}
                    isTeamLocal={isTeamLocal}
                    users={users}
                    Teams={Teams}
                  />
                }
              />
              <Route
                path="/createTeam"
                element={<CreateTeam Teams={Teams} setTeams={setTeams} />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route
                path="/MainPage"
                element={
                  <LogInForm
                    error={setError}
                    Teams={Teams}
                    setUser={setUser}
                    user={user}
                  />
                }
              />
              <Route path="*" Component={NotFound} />
              <Route
                exact
                path="/"
                element={
                  <LogInForm
                    error={setError}
                    Teams={Teams}
                    setUser={setUser}
                    user={user}
                  />
                }
              />
              <Route
                path="/LogInForm"
                element={
                  <LogInForm
                    error={setError}
                    Teams={Teams}
                    setUser={setUser}
                    user={user}
                  />
                }
              />
              <Route
                path="/SignInForm"
                element={
                  <SignInForm
                    error={setError}
                    Teams={Teams}
                    setUsers={setUsers}
                    users={users}
                  />
                }
              />
            </Routes>
          )}
        </div>
        <div className="App-backGround">
          <div className="App-logo">
            <img
              src={require("./assets/images/logo/LogoTempus.svg").default}
              alt="LogoTempus"
              className="LogoTempus"
            />
          </div>
          <div className="App-lines">
            <img className="lines-bg" />
          </div>
        </div>
      </div>
      <button onClick={logUot}>выйти</button>
    </BrowserRouter>
  );
}

export default App;
