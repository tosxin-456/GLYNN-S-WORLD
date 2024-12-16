import { useState } from "react";
import "./App.css";
import BlackFridayComponent from "./components/blackFriday.component";
import Navbar from "./components/navbar.component";
import Filter from "./components/filter.component";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode); 
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <BlackFridayComponent isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Filter isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
