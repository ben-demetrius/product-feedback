import React from "react";

const AddButton = ({ isActive, setIsActive }) => {
  const addFeedbackText = "Add Feedback";

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <button className="pfa-header__btn" onClick={handleClick}>
      + {addFeedbackText}
    </button>
  );
};

export default AddButton;
