import React from "react";
import "../../styles/index.scss";
import right from "../../../../public/assets/shared/icon-arrow-left.svg";

const BackButton = ({ isActive, setIsActive }) => {
  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <button className="pfa__back-btn" onClick={handleClick}>
      <img src={right} />
      <h4>Go Back</h4>
    </button>
  );
};

export default BackButton;
