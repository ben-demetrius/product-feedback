import React from "react";
import imgSrc from "../../../../public/assets/suggestions/icon-suggestions.svg";
import AddButton from "./AddButton";
import SortDropDown from "./SortDropDown";

const Header = ({
  cardsCount,
  isActive,
  setIsActive,
  finalURL,
  setFinalURL,
}) => {
  const suggestionsText = `${cardsCount} Suggestions`;

  return (
    <div className="pfa-header">
      <div className="pfa-suggestions">
        <img src={imgSrc} className="pfa-suggestions__img" />
        <h3 className="pfa-suggestions__h3">{suggestionsText}</h3>
      </div>
      <SortDropDown finalURL={finalURL} setFinalURL={setFinalURL} />
      <AddButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
