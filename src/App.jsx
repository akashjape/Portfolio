import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
