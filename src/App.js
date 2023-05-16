import LogInForm from "./components/SignInForm/LogInForm";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.css";
import "./null.css";

function App() {
  return (
    <div className="App null.css">
      <header className="App-header">
        <SignInForm />
        <LogInForm />
      </header>
    </div>
  );
}

export default App;
