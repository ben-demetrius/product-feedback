import React, { useState, useEffect } from "react";
import "./assets/styles/app.scss";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/Category/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";
import CreateFeedback from "./assets/components/Create-Feedback/CreateFeedback";
import Cards from "./assets/components/Cards/Cards";
import Header from "./assets/components/Create-Feedback/Header";

const App = () => {
  const [finalURL, setFinalURL] = useState(null);

  const [addFeedback, setAddFeedBack] = useState(false);

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
          <Header cardsCount={7} />
          <Cards finalURL={finalURL} />
        </div>
      </div>
      <CreateFeedback />
    </div>
  );
};

export default App;
