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

  const [isActive, setIsActive] = useState(false);

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
            <CategoryBoard setFinalURL={setFinalURL} />
            <Roadmap />
          </div>
          <div className="pfa-main">
            <Header
              cardsCount={7}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Cards finalURL={finalURL} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
