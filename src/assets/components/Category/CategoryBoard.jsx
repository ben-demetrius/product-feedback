import React, { useEffect, useState } from "react";
import "../../styles/app.scss";
import { get } from "../../js/httpRequests";
import Sticker from "./Sticker";

const PicklistURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/categories/list-type-entries";

const CategoryBoard = ({ setFinalURL, objectToFilter }) => {
  const [picklist, setPicklist] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    get(PicklistURL).then((data) => setPicklist(data));
  }, []);

  useEffect(() => {
    constructURL({ setFinalURL });
  }, [filters]);

  function constructURL({ setFinalURL }) {
    if (filters.length != 0) {
      let initialURL = objectToFilter + "?filter=";
      for (let i = 0; i < filters.length; i++) {
        initialURL += `category%20eq%20%27${filters[i]}%27`;
        if (i != filters.length - 1) {
          initialURL += `%20or%20`;
        }
      }
      return setFinalURL(initialURL);
    } else {
      setFinalURL(objectToFilter);
    }
  }

  const list = picklist.map((item, i) => {
    return (
      <Sticker
        key={i}
        categoryName={item.name}
        categoryKey={item.key}
        filters={filters}
        setFilters={setFilters}
      />
    );
  });

  return <div className="pfa-categories">{list}</div>;
};

export default CategoryBoard;
