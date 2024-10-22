import React from "react";
import "../styles/app-two.scss";

const CategoryBoard = () => {
  const stickerText1 = "All";
  const stickerText2 = "UI";
  const stickerText3 = "UX";
  const stickerText4 = "Enhancement";
  const stickerText5 = "Bug";
  const stickerText6 = "Feature";
  return (
    <div className="pfa-categories">
      <a className="stickers stickers--hover">{stickerText1}</a>
      <a className="stickers">{stickerText2}</a>
      <a className="stickers">{stickerText3}</a>
      <a className="stickers">{stickerText4}</a>
      <a className="stickers">{stickerText5}</a>
      <a className="stickers">{stickerText6}</a>
    </div>
  );
};

export default CategoryBoard;
