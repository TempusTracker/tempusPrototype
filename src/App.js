import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import NotFound from "./components/NotFound";
import "./App.css";
import "./null.css";

import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [selectUser, setSelectUser] = useState({});

  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <LogInForm
                  setIsLogged={setIsLogged}
                  setSelectUser={setSelectUser}
                />
              }
            />

            <Route
              path="/LogInForm"
              element={
                <LogInForm
                  setIsLogged={setIsLogged}
                  setSelectUser={setSelectUser}
                />
              }
            />
            <Route
              path="/SignInForm"
              element={
                <SignInForm
                  setIsLogged={setIsLogged}
                  setSelectUser={setSelectUser}
                />
              }
            />
            <Route
              path="/MainPage"
              element={
                isLogged ? (
                  <MainPage
                    setIsLogged={setIsLogged}
                    setSelectUser={setSelectUser}
                    selectUser={selectUser}
                  />
                ) : (
                  <LogInForm
                    setIsLogged={setIsLogged}
                    setSelectUser={setSelectUser}
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
