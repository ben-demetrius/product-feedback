import React, { useEffect, useState } from "react";

const Sticker = ({ categoryName, categoryKey, filters, setFilters }) => {
  const [select, setSelect] = useState(false);

  const removeCategory = (category) => {
    return category !== categoryKey;
  };

  const handleSelect = () => {
    if (!select) {
      setSelect(true);
      const addedFilter = filters.concat(categoryKey);
      setFilters(addedFilter);
    } else {
      setSelect(false);
      const removedFilter = filters.filter(removeCategory);
      setFilters(removedFilter);
    }
  };

  return (
    <button
      className={`pfa-stickers ${
        select ? `pfa-stickers--active` : `pfa-stickers--hover`
      }`}
      onClick={handleSelect}
    >
      {categoryName}
    </button>
  );
};

export default Sticker;
