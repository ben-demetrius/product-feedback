import React, { useState, useEffect } from "react";
import ArrowDown from "../micro-components/ArrowDown";
import { get } from "../../js/httpRequests";

const sortPickListURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/sort/list-type-entries";

const SortDropDown = ({ finalURL, setFinalURL }) => {
  const sortByText = "Sort By";

  const [sort, setSort] = useState([]);
  const [sortBy, setSortBy] = useState("mostUpvotes");

  useEffect(() => {
    get(sortPickListURL).then((data) => setSort(data));
  }, []);

  useEffect(() => {
    console.log(sortBy);
    constructSortURL({ finalURL, setFinalURL });
  }, [sortBy]);

  function constructSortURL() {
    let sortDescURL = `?sort=upvotes%3Adesc`;
    let sortAscURL = `?sort=upvotes%3Aasc`;

    if (sortBy == "mostUpvotes") {
      if (finalURL.includes(sortAscURL)) {
        return (sortDescURL = final - sortAscURL);
      }
      setFinalURL(finalURL + sortDescURL);
    } else {
      if (finalURL.includes(sortDescURL)) {
        return (sortAscURL = finalURL - sortDescURL);
      }
      setFinalURL(finalURL + sortAscURL);
    }
  }

  const sortList = sort.map((item, i) => {
    return (
      <option key={i} value={item.key}>
        {item.name}
      </option>
    );
  });

  return (
    <div className="pfa-sort">
      <p className="pfa-sort__p">{sortByText} :</p>
      <form>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortList}
        </select>
      </form>
      <button className="pfa-sort__button">{/* <ArrowDown /> */}</button>
    </div>
  );
};

export default SortDropDown;
