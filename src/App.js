import "./App.css";
import React from "react";
import { Login } from "./components/Login/Login";
import { Loginb } from "./components/Login/AnotherLogin";
import Cards from "./components/cards/Cards";

export default function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>

      <Cards />
      <Login />
      <Loginb />
    </div>
  );
}
