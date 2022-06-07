import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="app">
          <div className="toggler" style={{position: 'fixed', right: '300px', zIndex: '3000', top: '25px'}}>
            {theme === "light" ? (
              <button style={{ border: 'none', backgroundColor: 'none', outline: 'none'}} onClick={themeToggler}>
                <MdDarkMode />
              </button>
            ) : (
              <button onClick={themeToggler}>
                <MdLightMode />
              </button>
            )}
          </div>

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
