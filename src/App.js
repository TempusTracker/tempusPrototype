import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import ProfilPage from "./components/ProfilPage/ProfilPage";
import NotFound from "./components/NotFound";
import MainPage from "./MainPage";
import "./App.css";
import "./null.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [selectUser, setSelectUser] = useState({});
  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;

  function CheckOnLock(page) {
    return isLoggedLocal ? page : <LogInForm setSelectUser={setSelectUser} />;
  }

  function CheckOffLock(page) {
    return isLoggedLocal ? <MainPage setSelectUser={setSelectUser} /> : page;
  }

  console.log(selectUser);
  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
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
              element={CheckOffLock(
                <SignInForm setSelectUser={setSelectUser} />
              )}
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
            <Route
              path="/MyProfile"
              element={CheckOnLock(
                <ProfilPage setSelectUser={setSelectUser}></ProfilPage>
              )}
            />
            <Route path="/TaskBar" Component={<div>sda</div>} />
            <Route path="/MyTeam" Component={NotFound} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
