import React from "react";
import "./assets/styles/app.scss";
import Comp from "./assets/components/Comp";
import Board from "./assets/components/Board";

const App = () => {
  return (
    <div className="app">
      <Comp />
      <Board />
    </div>
  );
};

export default App;
