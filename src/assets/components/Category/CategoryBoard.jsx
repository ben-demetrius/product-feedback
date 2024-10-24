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
    // console.log(filters);
  }, [filters]);

  function constructURL({ setFinalURL }) {
    const baseURL = "/o/c/feedbackses/?filter=category";
    const categoryFromFilter = "bug";
    if (categoryFromFilter === "") {
      setFinalURL(null);
    } else {
      const appendToURL = `%20eq%20%27${categoryFromFilter}%27%20`;
      setFinalURL(baseURL + appendToURL);
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
