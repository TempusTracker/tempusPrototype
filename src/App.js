import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MainPage from "./Pages/MainPage";
import LogInForm from "./components/AuthorizationForms/LogInForm";
import NotFound from "./components/NotFoundPage/NotFound";
import SignInForm from "./components/AuthorizationForms/SignInForm";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import TeamPage from "./components/TeamPage/TeamPage";
import CreateTeam from "./components/TeamPage/components/CreateTeam";

import "./App.css";
import "./null.css";

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

  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
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
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
