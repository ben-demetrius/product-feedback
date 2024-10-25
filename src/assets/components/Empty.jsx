import React from "react";
import noResultsImage from "../../../public/assets/suggestions/illustration-empty.svg";
import AddButton from "./Create-Feedback/AddButton";

const Empty = ({ isActive, setIsActive }) => {
  const title = "There is no feedback yet.";
  const text =
    "Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.";

  return (
    <div className="pfa-empty">
      <div className="pfa-empty__content">
        <img src={noResultsImage} className="pfa-empty__img" />
        <div className="pfa-empty__texts-button">
          <div className="pfa-empty__texts">
            <h1 className="pfa-empty__h1">{title}</h1>
            <p className="pfa-empty__p">{text}</p>
          </div>
          <AddButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
};

export default Empty;
