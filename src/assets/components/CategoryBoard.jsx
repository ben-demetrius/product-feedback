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
      <a className="pfa-stickers pfa-stickers--hover">{stickerText1}</a>
      <a className="pfa-stickers">{stickerText2}</a>
      <a className="pfa-stickers">{stickerText3}</a>
      <a className="pfa-stickers">{stickerText4}</a>
      <a className="pfa-stickers">{stickerText5}</a>
      <a className="pfa-stickers">{stickerText6}</a>
    </div>
  );
};

export default CategoryBoard;
