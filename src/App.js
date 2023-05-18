import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.css";
import "./null.css";

import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App null.css">
      <header className="App-header">
        <SignInForm isLogged={isLogged} setIsLogged={setIsLogged} />
        <LogInForm setIsLogged={setIsLogged} />
        {isLogged ? <div>eu</div> : ""}
      </header>
    </div>
  );
}

export default App;
