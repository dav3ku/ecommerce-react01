import React from "react";
import { Routes, Route } from "react-router-dom";
import { CompNavbar } from "./Components/Navbar";

import { Home } from "./Components/Home";
import { SignUp } from "./Components/SignUp";
import { LogIn } from "./Components/LogIn";

import "./App.css";
import { ProductDetails } from "./Components/ProductDetails";

function App() {
  return (
    <>
      <CompNavbar></CompNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="product-details/:ID" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
