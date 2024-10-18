import React from "react";
import "./assets/styles/app.scss";
import Comp from "./assets/components/Comp";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/CategoryBoard";

const App = () => {
  return (
    <div className="pfa-app">
      <div className="pfa-side-cards">
        <Board />
        <CategoryBoard />
      </div>
      <Comp />
    </div>
  );
};

export default App;
