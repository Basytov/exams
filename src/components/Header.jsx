import React from "react";
import { useState } from "react";


function Header() {

    const [theme, setTheme] = useState("light");

    const handleClick = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    return (
      <div className={`App ${theme}`}>
        <button onClick={handleClick}>Light</button>
      </div>
    );
}

export default Header;
