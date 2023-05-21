import RoutesModule from "./components/Routes";
import "./App.css";
import "./null.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App null.css">
        <header className="App-header">
          <RoutesModule></RoutesModule>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
