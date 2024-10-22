import React from "react";
import imgSrc from "../../../public/assets/suggestions/icon-suggestions.svg";
import down from "../../../public/assets/shared/icon-arrow-down.svg";

const Header = () => {
  const suggestionsText = "6 Suggestions";
  const addFeedback = "Add Feedback";
  return (
    <div className="pfa-header">
      <div className="pfa-suggestions">
        <img src={imgSrc} className="pfa-suggestions__img" />
        <h3 className="pfa-suggestions__h3">{suggestionsText}</h3>
      </div>
      <div className="pfa-sort">
        <p className="pfa-sort__p">
          Sort by : <b>Most Upvotes</b>
        </p>
        <button className="pfa-sort__button">
          <img src={down} />
        </button>
      </div>
      <button className="pfa-header__btn">+ {addFeedback}</button>
    </div>
  );
};

export default Header;
