import React, { useState, useEffect } from "react";
import ArrowDown from "../micro-components/ArrowDown";
import { get } from "../../js/httpRequests";

const sortURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/sort/list-type-entries";

const SortDropDown = ({ finalURL, setFinalURL }) => {
  const sortByText = "Sort By";

  const [sort, setSort] = useState([]);
  const [sortBy, setSortBy] = useState("mostUpvotes");

  useEffect(() => {
    get(sortURL).then((data) => setSort(data));
  }, []);

  useEffect(() => {
    console.log(sortBy);
    const initialURL = finalURL;
    constructSortURL({ finalURL, setFinalURL, initialURL });
  }, [sortBy]);

  function constructSortURL({ finalURL, setFinalURL, initialURL }) {
    if (sortBy == "mostUpvotes") {
      let order = "desc";
      let sortURL = `?sort=upvotes%3A${order}`;
      console.log("Descending order entered");
      setFinalURL(initialURL);
      console.log(finalURL);
      //   setFinalURL(finalURL + sortURL);
      //   console.log(finalURL);
    } else {
      let order = "asc";
      let sortURL = `?sort=upvotes%3A${order}`;
      console.log("Ascending order entered");
      setFinalURL(initialURL);
      console.log(finalURL);
      setFinalURL(finalURL + sortURL);
      console.log(finalURL);
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
