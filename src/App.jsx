import React, { useState, useEffect } from "react";
import "./assets/styles/app.scss";
import Board from "./assets/components/Board";
import CategoryBoard from "./assets/components/Category/CategoryBoard";
import Roadmap from "./assets/components/Roadmap";
import CreateFeedback from "./assets/components/Create-Feedback/CreateFeedback";
import Cards from "./assets/components/Cards/Cards";
import Header from "./assets/components/Create-Feedback/Header";

const objectToFilter = "/o/c/feedbackses/";

const App = () => {
  const [finalURL, setFinalURL] = useState(objectToFilter);
  const [isActive, setIsActive] = useState(false);
  const [cardsCount, setCardsCount] = useState(0);

  // useEffect(() => {
  //   console.log(finalURL);
  // }, [finalURL]);

  return (
    <div className="pfa-app">
      {isActive ? (
        <CreateFeedback isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <div className="pfa-dash">
          <div className="pfa-side-cards">
            <Board />
            <CategoryBoard
              setFinalURL={setFinalURL}
              objectToFilter={objectToFilter}
            />
            <Roadmap />
          </div>
          <div className="pfa-main">
            <Header
              cardsCount={cardsCount}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Cards finalURL={finalURL} setCardsCount={setCardsCount} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
