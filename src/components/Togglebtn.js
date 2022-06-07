import React, { useState } from "react";


const Togglebtn = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <button onClick={themeToggler}>Switch Theme</button>
    </div>
  );
};

export default Togglebtn;
