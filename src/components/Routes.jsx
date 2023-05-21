import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import LogInForm from "./SignInForm/LogInForm";
import NotFound from "./NotFound";
import SignInForm from "./SignInForm/SignInForm";
import ProfilPage from "./ProfilPage/ProfilPage";

function RoutesModule() {
  const [selectUser, setSelectUser] = useState({});
  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;
  function CheckOnLock(page) {
    return isLoggedLocal ? page : <LogInForm setSelectUser={setSelectUser} />;
  }

  function CheckOffLock(page) {
    return isLoggedLocal ? <MainPage setSelectUser={setSelectUser} /> : page;
  }
  return (
    <Routes>
      <Route path="*" Component={NotFound} />
      <Route
        exact
        path="/"
        element={CheckOnLock(<MainPage setSelectUser={setSelectUser} />)}
      />
      <Route
        path="/LogInForm"
        element={CheckOnLock(<MainPage setSelectUser={setSelectUser} />)}
      />
      <Route
        path="/SignInForm"
        element={CheckOffLock(<SignInForm setSelectUser={setSelectUser} />)}
      />
      <Route
        path="/MainPage"
        element={CheckOnLock(<MainPage setSelectUser={setSelectUser} />)}
      />
      <Route
        path="/MyProfile"
        element={CheckOnLock(
          <ProfilPage setSelectUser={setSelectUser}></ProfilPage>
        )}
      />
      <Route path="/TaskBar" Component={NotFound} />
      <Route path="/MyTeam" Component={NotFound} />
    </Routes>
  );
}

export default RoutesModule;
