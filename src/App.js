import "./App.css";
import React from "react";
import { Login } from "./components/Login/Login";
import { Loginb } from "./components/Login/AnotherLogin";
import Cards from "./components/cards/Cards";
import Quiz from "./components/quiz/Quiz";
import Grid from "./components/selectable Grid/Grid";
import Counter from "./components/intv1/Counter";
import CheckBox from "./components/intv1/CheckBox";

export default function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>

      {/* <Cards />
      <Login />
      <Loginb /> */}
      {/* <Quiz /> */}
      <Grid />
      <Counter />
      <CheckBox />
    </div>
  );
}
