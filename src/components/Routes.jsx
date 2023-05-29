import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import LogInForm from "./SignInForm/LogInForm";
import NotFound from "./NotFound";
import SignInForm from "./SignInForm/SignInForm";
import ProfilPage from "./ProfilPage/ProfilPage";
import TeamPage from "./TeamPage/TeamPage";
import CreateTeam from "./TeamPage/components/CreateTeam";

function RoutesModule(props) {
  const [selectUser, setSelectUser] = useState({});
  const { users, setUsers, Teams, setTeams } = props;

  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;
  function CheckOnLock(page) {
    return isLoggedLocal ? (
      page
    ) : (
      <LogInForm Teams={Teams} users={users} setSelectUser={setSelectUser} />
    );
  }

  function CheckOffLock(page) {
    return isLoggedLocal ? (
      <MainPage
        users={users}
        setUsers={setUsers}
        setSelectUser={setSelectUser}
      />
    ) : (
      page
    );
  }
  return (
    <Routes>
      <Route path="*" Component={NotFound} />
      <Route
        exact
        path="/"
        element={CheckOnLock(
          <MainPage
            users={users}
            setUsers={setUsers}
            setSelectUser={setSelectUser}
          />
        )}
      />
      <Route
        path="/LogInForm"
        element={CheckOnLock(
          <MainPage
            users={users}
            setUsers={setUsers}
            setSelectUser={setSelectUser}
          />
        )}
      />
      <Route
        path="/SignInForm"
        element={CheckOffLock(
          <SignInForm
            users={users}
            setUsers={setUsers}
            setSelectUser={setSelectUser}
          />
        )}
      />
      <Route
        path="/MainPage"
        element={CheckOnLock(<MainPage users={users} />)}
      />
      <Route
        path="/MyProfile"
        element={CheckOnLock(
          <ProfilPage setSelectUser={setSelectUser}></ProfilPage>
        )}
      />
      <Route path="/TaskBar" Component={NotFound} />
      <Route
        path="/MyTeam"
        element={CheckOnLock(
          <TeamPage users={users} Teams={Teams} setTeams={setTeams} />
        )}
      />
      <Route
        path="/createTeam"
        element={CheckOnLock(<CreateTeam Teams={Teams} setTeams={setTeams} />)}
      />
    </Routes>
  );
}

export default RoutesModule;
