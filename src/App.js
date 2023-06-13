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
  const [selectUser, setSelectUser] = useState({});
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

  const UserFullData = useRef(JSON.parse(localStorage.getItem("user")) || {});
  useEffect(() => {
    UserFullData.current = JSON.parse(localStorage.getItem("user")) || {};
  });

  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;

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
                element={
                  <MainPage users={users} UserFullData={UserFullData.current} />
                }
              />
              <Route
                path="/MainPage"
                element={<MainPage UserFullData={UserFullData.current} />}
              />
              <Route
                path="/MyProfile"
                element={
                  <ProfilPage
                    setSelectUser={setSelectUser}
                    UserFullData={UserFullData.current}
                  ></ProfilPage>
                }
              />
              <Route path="/TaskBar" Component={NotFound} />
              <Route
                path="/MyTeam"
                element={<TeamPage users={users} Teams={Teams} />}
              />
              <Route
                path="/createTeam"
                element={<CreateTeam Teams={Teams} setTeams={setTeams} />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" Component={NotFound} />
              <Route
                exact
                path="/"
                element={
                  <LogInForm
                    setSelectUser={setSelectUser}
                    users={users}
                    Teams={Teams}
                  />
                }
              />
              <Route
                path="/LogInForm"
                element={
                  <LogInForm
                    setSelectUser={setSelectUser}
                    users={users}
                    Teams={Teams}
                  />
                }
              />
              <Route
                path="/SignInForm"
                element={<SignInForm users={users} />}
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
