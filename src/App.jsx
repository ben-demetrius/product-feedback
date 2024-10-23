import React from "react";
import "./assets/styles/app.scss";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/Category/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";
import Header from "./assets/components/Header";
import CreateFeedback from "./assets/components/CreateFeedback";
import Cards from "./assets/components/Cards/Cards";

const App = () => {
  return (
    <div className="pfa-app">
      <div className="pfa-dash">
        <div className="pfa-side-cards">
          <Board />
          <CategoryBoard />
          <Roadmap />
        </div>
        <div className="pfa-main">
          <Header />
          <Cards />
        </div>
      </div>
      <CreateFeedback />
    </div>
  );
};

export default App;
