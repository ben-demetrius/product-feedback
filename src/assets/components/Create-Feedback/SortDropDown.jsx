import React, { useState, useEffect } from "react";
import ArrowDown from "../micro-components/ArrowDown";
import { get } from "../../js/httpRequests";

const sortURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/sort/list-type-entries";

const SortDropDown = ({ finalURL, setFinalURL }) => {
  const sortByText = "Sort By";

  const [sort, setSort] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    get(sortURL).then((data) => setSort(data));
  }, []);

  useEffect(() => {
    console.log(sortBy);
    constructSortURL({ finalURL, setFinalURL });
    console.log(finalURL);
  }, [sortBy]);

  function constructSortURL({ finalURL, setFinalURL }) {
    if (sortBy != "") {
      console.log("Construct Sort Block Entered");
      let order = "asc";

      if (sortBy == "mostUpvote") {
        let order = "desc";
        return order;
      }
      let sortURL = `?sort=upvotes%3A${order}`;
      setFinalURL(finalURL + sortURL);
    } else {
      setFinalURL(finalURL);
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
