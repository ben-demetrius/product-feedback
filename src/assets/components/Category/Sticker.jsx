import React from "react";

const Sticker = ({ stickerText }) => {
  return (
    <button className="pfa-stickers pfa-stickers--hover .pfa-stickers--active">
      {stickerText}
    </button>
  );
};

export default Sticker;
