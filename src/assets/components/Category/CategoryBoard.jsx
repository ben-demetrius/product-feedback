import React, { useEffect, useState } from "react";
import "../../styles/app.scss";
import { get } from "../../js/httpRequests";
import Sticker from "./Sticker";

const CategoryBoard = () => {
  const [picklist, setPicklist] = useState([]);

  useEffect(() => {
    get(
      "http://localhost:8080/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/categories/list-type-entries"
    ).then((data) => setPicklist(data));
  }, []);

  const list = picklist.map((item, i) => {
    return <Sticker key={i} stickerText={item.name} />;
  });
  return <div className="pfa-categories">{list}</div>;
};

export default CategoryBoard;
