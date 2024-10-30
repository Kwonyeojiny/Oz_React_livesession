import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ActiveUserCount from "./components/ActiveUserCount";
import CounterUserCallback from "./components/CounterUserCallback";

function App() {
  return (
    <>
      <CounterUserCallback />
      {/* <ActiveUserCount /> */}
    </>
  );
}

export default App;
