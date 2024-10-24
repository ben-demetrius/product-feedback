import React, { useEffect, useState } from "react";
import "../../styles/app.scss";
import { get } from "../../js/httpRequests";
import Sticker from "./Sticker";

const PicklistURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/categories/list-type-entries";

const CategoryBoard = ({ setFinalURL }) => {
  const [picklist, setPicklist] = useState([]);
  useEffect(() => {
    get(PicklistURL).then((data) => setPicklist(data));
  }, []);

  const [filters, setFilters] = useState([]);
  useEffect(() => {
    constructURL({ setFinalURL });
  }, [filters]);

  function constructURL({ setFinalURL }) {
    const categoryFromFilter = "test";
    if (categoryFromFilter === "") {
      setFinalURL(null);
    } else {
      const appendToURL = constructURLToAppend();
      setFinalURL(appendToURL);
    }
  }

  function constructURLToAppend() {
    if (filters.length != 0) {
      let initialURL = "/o/c/feedbackses/?filter=";
      for (let i = 0; i < filters.length; i++) {
        initialURL += `category%20eq%20%27${filters[i]}%27`;
        if (i != filters.length - 1) {
          initialURL += `%20or%20`;
        }
      }
      return initialURL;
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
