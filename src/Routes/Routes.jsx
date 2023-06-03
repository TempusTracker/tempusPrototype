import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import LogInForm from "../components/AuthorizationForms/LogInForm";
import NotFound from "../components/NotFoundPage/NotFound";
import SignInForm from "../components/AuthorizationForms/SignInForm";
import ProfilPage from "../components/ProfilPage/ProfilPage";
import TeamPage from "../components/TeamPage/TeamPage";
import CreateTeam from "../components/TeamPage/components/CreateTeam";

function RoutesModule(props) {
  const [selectUser, setSelectUser] = useState({}); //оставим для будущего api
  const { users, Teams, setTeams } = props;

  const UserFullData = useRef(JSON.parse(localStorage.getItem("user")) || {});
  useEffect(() => {
    UserFullData.current = JSON.parse(localStorage.getItem("user")) || {};
  });

  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;
  function CheckOnLock(page) {
    return isLoggedLocal ? (
      page
    ) : (
      <LogInForm Teams={Teams} users={users} setSelectUser={setSelectUser} />
    );
  }
  console.log(UserFullData);
  function CheckOffLock(page) {
    return isLoggedLocal ? (
      <MainPage UserFullData={UserFullData.current} />
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
          <MainPage users={users} UserFullData={UserFullData.current} />
        )}
      />
      <Route
        path="/LogInForm"
        element={CheckOnLock(<MainPage UserFullData={UserFullData.current} />)}
      />
      <Route
        path="/SignInForm"
        element={CheckOffLock(<SignInForm users={users} />)}
      />
      <Route
        path="/MainPage"
        element={CheckOnLock(<MainPage UserFullData={UserFullData.current} />)}
      />
      <Route
        path="/MyProfile"
        element={CheckOnLock(
          <ProfilPage
            setSelectUser={setSelectUser}
            UserFullData={UserFullData.current}
          ></ProfilPage>
        )}
      />
      <Route path="/TaskBar" Component={NotFound} />
      <Route
        path="/MyTeam"
        element={CheckOnLock(<TeamPage users={users} Teams={Teams} />)}
      />
      <Route
        path="/createTeam"
        element={CheckOnLock(<CreateTeam Teams={Teams} setTeams={setTeams} />)}
      />
    </Routes>
  );
}

export default RoutesModule;
