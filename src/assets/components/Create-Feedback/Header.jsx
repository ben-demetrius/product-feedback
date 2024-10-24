import React from "react";
import imgSrc from "../../../../public/assets/suggestions/icon-suggestions.svg";
import ArrowDown from "../micro-components/ArrowDown";
import AddButton from "./AddButton";

const Header = ({ cardsCount }) => {
  const suggestionsText = `${cardsCount} Suggestions`;
  const sortByText = "Sort By";
  const mostUpvotesText = "Most Upvotes";
  return (
    <div className="pfa-header">
      <div className="pfa-suggestions">
        <img src={imgSrc} className="pfa-suggestions__img" />
        <h3 className="pfa-suggestions__h3">{suggestionsText}</h3>
      </div>
      <div className="pfa-sort">
        <p className="pfa-sort__p">
          {sortByText} : <b>{mostUpvotesText}</b>
        </p>
        <button className="pfa-sort__button">
          <ArrowDown />
        </button>
      </div>
      <AddButton />
    </div>
  );
};

export default Header;
