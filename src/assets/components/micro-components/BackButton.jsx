import React from "react";
import "../../styles/index.scss";
import right from "../../../../public/assets/shared/icon-arrow-left.svg";

const BackButton = () => {
  return (
    <button className="pfa__back-btn">
      <img src={right} />
      <h4>Go Back</h4>
    </button>
  );
};

export default BackButton;
