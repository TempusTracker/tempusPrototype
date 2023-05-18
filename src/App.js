import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.css";
import "./null.css";

import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [selectUser, setSelectUser] = useState({});

  function logUot() {
    setIsLogged(false);
    setSelectUser({});
    alert("пока");
  }

  return (
    <div className="App null.css">
      <header className="App-header">
        <SignInForm setIsLogged={setIsLogged} setSelectUser={setSelectUser} />
        <LogInForm setIsLogged={setIsLogged} setSelectUser={setSelectUser} />
        {isLogged ? (
          <div>
            <div className="userName">{selectUser.Name}</div>
            <div className="userLogin">{selectUser.Email}</div>
            <button onClick={logUot}>выйти</button>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
