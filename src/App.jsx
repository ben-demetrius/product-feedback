import React from "react";
import "./assets/styles/app.scss";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";
import Header from "./assets/components/Header";
import Card from "./assets/components/Card";

const App = () => {
  return (
    <div className="pfa-app">
      <div className="pfa-side-cards">
        <Board />
        <CategoryBoard />
        <Roadmap />
      </div>
      <div className="pfa-main">
        <Header />
        <div className="pfa-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
