import React, { useEffect, useState } from "react";

const Sticker = ({ stickerText }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    if (select == false) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  };

  useEffect(() => {
    console.log(`${stickerText}:${select}`);
  }, [select]);

  return (
    <button
      className={`pfa-stickers pfa-stickers--hover ${
        select ? `pfa-stickers--active` : ``
      }`}
      onClick={handleSelect}
    >
      {stickerText}
    </button>
  );
};

export default Sticker;
