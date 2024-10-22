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
    <div className="pfa-categories" id="#test">
      <a
        href="test"
        className="pfa-stickers pfa-stickers--hover .pfa-stickers--active"
      >
        {stickerText1}
      </a>
      <a className="pfa-stickers pfa-stickers--hover .pfa-stickers--active">
        {stickerText2}
      </a>
      <a className="pfa-stickers pfa-stickers--hover .pfa-stickers--active">
        {stickerText3}
      </a>
      <a className="pfa-stickers pfa-stickers--hover .pfa-stickers--active">
        {stickerText4}
      </a>
      <a className="pfa-stickers pfa-stickers--hover .pfa-stickers--active">
        {stickerText5}
      </a>
      <a className="pfa-stickers pfa-stickers--hover">{stickerText6}</a>
    </div>
  );
};

export default CategoryBoard;
