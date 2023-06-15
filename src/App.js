import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MainPage from "./Pages/MainPage";
import LogInForm from "./components/AuthorizationForms/LogInForm";
import NotFound from "./components/NotFoundPage/NotFound";
import SignInForm from "./components/AuthorizationForms/RegistrationForm";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import TeamPage from "./components/TeamPage/TeamPage";
import CreateTeam from "./components/TeamPage/components/CreateTeam";
import animationPetals from "./assets/animations/animationPetals";

import "./assets/css/null.css";
import "./assets/css/App.css";

function App() {
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

  let isTeamLocal = JSON.parse(localStorage.getItem("team")) || {};
  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;
  let isUserLocal = JSON.parse(localStorage.getItem("user")) || {};

  animationPetals();
  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header"></header>
        <div className="App-body">
          {isLoggedLocal ? (
            <Routes>
              <Route path="*" Component={NotFound} />
              <Route
                exact
                path="/"
                element={<MainPage users={users} UserFullData={isUserLocal} />}
              />
              <Route
                path="/MainPage"
                element={<MainPage UserFullData={isUserLocal} />}
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
                element={<LogInForm users={users} Teams={Teams} />}
              />
              <Route path="*" Component={NotFound} />
              <Route
                exact
                path="/"
                element={<LogInForm users={users} Teams={Teams} />}
              />
              <Route
                path="/LogInForm"
                element={<LogInForm users={users} Teams={Teams} />}
              />
              <Route
                path="/SignInForm"
                element={
                  <SignInForm Teams={Teams} setUsers={setUsers} users={users} />
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
          <div className="BackGround-Petals">
            <img
              src={require("./assets/images/petals/petal1.svg").default}
              alt="petal1"
              className="petal petal1"
            />
            <img
              src={require("./assets/images/petals/petal2.svg").default}
              alt="petal2"
              className="petal petal2"
            />
            <img
              src={require("./assets/images/petals/petal3.svg").default}
              alt="petal3"
              className="petal petal3"
            />
            <img
              src={require("./assets/images/petals/petal4.svg").default}
              alt="petal4"
              className="petal petal4"
            />
            <img
              src={require("./assets/images/petals/petal5.svg").default}
              alt="petal5"
              className="petal petal5"
            />
            <img
              src={require("./assets/images/petals/petal6.svg").default}
              alt="petal6"
              className="petal petal6"
            />
            <img
              src={require("./assets/images/petals/petal7.svg").default}
              alt="petal7"
              className="petal petal7"
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
