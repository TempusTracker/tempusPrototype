import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.css";
import "./null.css";

import { isLogged } from "./components/SignInForm/SignInForm.jsx";

function App() {
  return (
    <div className="App null.css">
      <header className="App-header">
        <SignInForm />
        <LogInForm />
        {isLogged ? <div>eu</div> : ""}
      </header>
    </div>
  );
}

export default App;
