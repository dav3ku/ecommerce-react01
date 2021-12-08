import React from "react";
import { Routes, Route } from "react-router-dom";
import { CompNavbar } from "./Components/Navbar";

import { Home } from "./Components/Home";
import { SignUp } from "./Components/SignUp";
import { LogIn } from "./Components/LogIn";

import "./App.css";

function App() {
  return (
    <>
      <CompNavbar></CompNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
