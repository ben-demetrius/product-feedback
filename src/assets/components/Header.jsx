import React from "react";
import imgSrc from "../../../public/assets/suggestions/icon-suggestions.svg";
import down from "../../../public/assets/shared/icon-arrow-down.svg";

const Header = () => {
  const suggestionsText = "6 Suggestions";
  const addFeedback = "Add Feedback";
  return (
    <div className="pfa-main-header">
      <div className="pfa-main-suggestions">
        <img src={imgSrc} className="pfa-main-suggestions__img" />
        <h3 className="pfa-main-suggestions__h3">{suggestionsText}</h3>
      </div>
      <div className="pfa-main-sort">
        <p className="pfa-main-sort__p">
          Sort by : <b>Most Upvotes</b>
        </p>
        <button className="pfa-main-sort__button">
          <img src={down} />
        </button>
      </div>
      <button className="pfa-main__add-feedback-btn">+ {addFeedback}</button>
    </div>
  );
};

export default Header;
