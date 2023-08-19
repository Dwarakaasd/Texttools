import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
function App() {
  const [mode2, setMode2] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleNavigateAbout = () => {
    // Replace '/about' with the actual URL of your About section
    window.location.href = ".srcComponentsAbout.js";
  };
  const togglemodes = () => {
    if (mode2 === "light") {
      setMode2("blue");
      document.body.style.backgroundColor = "#1a1a35f2";
      document.body.style.color = "black";
      showAlert("Dark Blue mode enabled", "success");
    } else {
      setMode2("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <div>
      <div>
        <Navbar
          title="Texttools"
          name="About us"
          mode2={mode2}
          alert={alert}
          handleNavigateAbout={handleNavigateAbout}
          togglemodes={togglemodes}
        />
        <Textform showAlert={showAlert} mode2={mode2} />
      </div>
    </div>
  );
}

export default App;
