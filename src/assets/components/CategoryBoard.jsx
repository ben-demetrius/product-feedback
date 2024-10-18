import React from "react";
import "../styles/app.scss";

const CategoryBoard = () => {
  const stickerText = "All";
  return (
    <div className="pfa-categories">
      <button className="stickers">{stickerText}</button>
    </div>
  );
};

export default CategoryBoard;
