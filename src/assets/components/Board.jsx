import React from "react";
import "../styles/app.scss";

const Board = () => {
  const title = "Frontend Mentor";
  const subtitle = "Feedback board";
  return (
    <div className="pfa-board">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Board;
