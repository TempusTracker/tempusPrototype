import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import RoutesModule from "./Routes/Routes";

import "./App.css";
import "./null.css";

function App() {
  const [users, setUsers] = useState([
    {
      UserData: {
        Name: "Masha",
        Email: "masha@mail.com",
        Password: "lols",
        TeamCode: "none",
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

  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
          <RoutesModule //!!! обязательно нужно сделать сначала проверку
            Teams={Teams} //вошел ли юзер и из роутов убрать AuthorizationForms
            setTeams={setTeams} //и в этот компонент с авторизацией уже вставить роуты
            users={users}
            setUsers={setUsers}
          ></RoutesModule>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
