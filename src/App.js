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
import usersData from "./data/usersData";

import "./assets/css/null.css";
import "./assets/css/App.css";

export let usersUtils = {};
export let TeamsUtils = {};
export let ErrorAnimate = {};
export let setErrorAnimate = {};

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState(usersData);
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
  let isUserLocal = JSON.parse(localStorage.getItem("user")) || {};

  function logUot(e) {
    e.preventDefault();
    // localStorage.removeItem("user");
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.setItem("team", JSON.stringify({}));
    //localStorage.setItem("user", JSON.stringify({}));
    window.location.href = "/LoginForm";
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
              <Route
                exact
                path="/"
                element={
                  <MainPage
                    error={setError}
                    users={users}
                    UserFullData={isUserLocal}
                  />
                }
              />
              <Route
                path="/MainPage"
                element={
                  <MainPage error={setError} UserFullData={isUserLocal} />
                }
              />
              <Route
                path="/MyProfile"
                element={<ProfilPage UserFullData={isUserLocal}></ProfilPage>}
              />
              <Route path="/TaskBar" Component={NotFound} />
              <Route
                path="/MyTeam"
                element={
                  <TeamPage
                    UserFullData={isUserLocal}
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
                  <LogInForm error={setError} users={users} Teams={Teams} />
                }
              />
              <Route path="*" Component={NotFound} />
              <Route
                exact
                path="/"
                element={
                  <LogInForm error={setError} users={users} Teams={Teams} />
                }
              />
              <Route
                path="/LogInForm"
                element={
                  <LogInForm error={setError} users={users} Teams={Teams} />
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
          {window.location.href.indexOf("http://localhost:3000/LoginForm") ? (
            ""
          ) : (
            <div className="App-lines">
              <div className="lines-bg" />
            </div>
          )}
          {window.location.href.indexOf("http://localhost:3000/SignInForm") ? (
            ""
          ) : (
            <div className="App-lines">
              <div className="lines-bg" />
            </div>
          )}
        </div>
      </div>
      <button onClick={logUot} style={{ position: "absolute", zIndex: "1000" }}>
        выйти
      </button>
    </BrowserRouter>
  );
}

export default App;
