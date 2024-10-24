import React, { useState, useEffect } from "react";
import "./assets/styles/app.scss";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/Category/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";
import Header from "./assets/components/Header";
import CreateFeedback from "./assets/components/CreateFeedback";
import Cards from "./assets/components/Cards/Cards";

const App = () => {
  const [finalURL, setFinalURL] = useState(null);
  useEffect(() => {
    console.log(finalURL);
  }, [finalURL]);

  return (
    <div className="pfa-app">
      <div className="pfa-dash">
        <div className="pfa-side-cards">
          <Board />
          <CategoryBoard setFinalURL={setFinalURL} />
          <Roadmap />
        </div>
        <div className="pfa-main">
          <Header />
          <Cards finalURL={finalURL} />
        </div>
      </div>
      <CreateFeedback />
    </div>
  );
};

export default App;
