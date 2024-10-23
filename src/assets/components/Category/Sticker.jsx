import React, { useEffect, useState } from "react";

const Sticker = ({ categoryName, categoryKey, filters, setFilters }) => {
  const [select, setSelect] = useState(false);

  const removeCategory = (category) => {
    return category !== categoryKey;
  };

  const addCategory = (category) => {
    if (!filters.includes(category)) {
      return categoryKey;
    }
    return categoryKey;
  };

  const handleSelect = () => {
    if (!select) {
      setSelect(true);
      const addedFilter = filters.filter(addCategory);
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
