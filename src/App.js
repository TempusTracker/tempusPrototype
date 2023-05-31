import RoutesModule from "./components/Routes";
import "./App.css";
import "./null.css";

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      Name: "Masha",
      Email: "masha@mail.com",
      Password: "lols",
      TeamCode: "none",
      Role: "",
      InviteCode: "",
      TotalTime: "",
    },
    {
      Name: "Nikita",
      Email: "nikita@mail.com",
      Password: "lol",
      TeamCode: 22,
      Role: "admin",
      InviteCode: "22",
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
          <RoutesModule
            Teams={Teams}
            setTeams={setTeams}
            users={users}
            setUsers={setUsers}
          ></RoutesModule>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
