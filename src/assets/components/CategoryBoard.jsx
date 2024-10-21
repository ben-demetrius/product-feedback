import React from "react";
import "../styles/app.scss";

const CategoryBoard = () => {
  const stickerText1 = "All";
  const stickerText2 = "UI";
  const stickerText3 = "UX";
  const stickerText4 = "Enhancement";
  const stickerText5 = "Bug";
  const stickerText6 = "Feature";
  return (
    <div className="pfa-categories">
      <button className="stickers">{stickerText1}</button>
      <button className="stickers">{stickerText2}</button>
      <button className="stickers">{stickerText3}</button>
      <button className="stickers">{stickerText4}</button>
      <button className="stickers">{stickerText5}</button>
      <button className="stickers">{stickerText6}</button>
    </div>
  );
};

export default CategoryBoard;
