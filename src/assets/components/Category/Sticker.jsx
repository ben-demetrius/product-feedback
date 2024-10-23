import React, { useEffect, useState } from "react";

const Sticker = ({ categoryName, categoryKey, filters, setFilters }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    if (select == false) {
      setSelect(true);
      filters.push(categoryKey);
      // console.log(filters);
      // setFilters(() => filters.push(categoryKey));
    } else {
      setSelect(false);
      let index = filters.indexOf(categoryKey);
      if (index !== -1) {
        array.splice(index, 1);
      }
    }
  };

  useEffect(() => {
    setFilters(filters);
  }, [select]);

  return (
    <button
      className={`pfa-stickers  ${
        select ? `pfa-stickers--active` : `pfa-stickers--hover`
      }`}
      onClick={handleSelect}
    >
      {categoryName}
    </button>
  );
};

export default Sticker;
