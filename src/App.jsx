import React from "react";
import "./assets/styles/app.scss";
import Comp from "./assets/components/Comp";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";

const App = () => {
  return (
    <div className="pfa-app">
      <div className="pfa-side-cards">
        <Board />
        <CategoryBoard />
        <Roadmap />
      </div>
      <Comp />
    </div>
  );
};

export default App;
