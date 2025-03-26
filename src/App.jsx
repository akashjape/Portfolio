import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  // Apply theme to body class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Toggle theme on click
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`App ${theme}`}>
      <div>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Home theme={theme} />
      </div>
    </div>
  );
}

export default App;
