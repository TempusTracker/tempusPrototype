import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import NotFound from "./components/NotFound";
import "./App.css";
import "./null.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const [selectUser, setSelectUser] = useState({});
  let isLoggedLocal = JSON.parse(localStorage.getItem("logged")) || false;
  let selectUserLocal = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedLocal ? (
                  <MainPage
                    setSelectUser={setSelectUser}
                    selectUser={selectUserLocal}
                  />
                ) : (
                  <LogInForm
                    setSelectUser={setSelectUser}
                    selectUser={selectUser}
                  />
                )
              }
            />

            <Route
              path="/LogInForm"
              element={
                isLoggedLocal ? (
                  <MainPage
                    setSelectUser={setSelectUser}
                    selectUser={selectUserLocal}
                  />
                ) : (
                  <LogInForm
                    setSelectUser={setSelectUser}
                    selectUser={selectUser}
                  />
                )
              }
            />
            <Route
              path="/SignInForm"
              element={
                isLoggedLocal ? (
                  <MainPage
                    setSelectUser={setSelectUser}
                    selectUser={selectUserLocal}
                  />
                ) : (
                  <SignInForm
                    setSelectUser={setSelectUser}
                    selectUser={selectUser}
                  />
                )
              }
            />
            <Route
              path="/MainPage"
              element={
                isLoggedLocal ? (
                  <MainPage
                    setSelectUser={setSelectUser}
                    selectUser={selectUserLocal}
                  />
                ) : (
                  <LogInForm
                    setSelectUser={setSelectUser}
                    selectUser={selectUser}
                  />
                )
              }
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
