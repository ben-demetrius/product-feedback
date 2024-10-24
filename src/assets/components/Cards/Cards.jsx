import React, { useEffect, useState } from "react";
import Card from "./Card";
import { get } from "../../js/httpRequests";

const Cards = ({ finalURL, setCardsCount }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (finalURL == null) {
      get().then((data) => setData(data));
    } else {
      get(finalURL).then((data) => setData(data));
    }
  }, [finalURL]);

  useEffect(() => {
    setCardsCount(data.length);
  }, [data]);

  const cards = data.map((item, i) => {
    return (
      <Card
        key={i}
        upvotes={item.upvotes}
        title={item.title}
        description={item.description}
        category={item.category.key}
      />
    );
  });
  return <div className="pfa-cards">{cards}</div>;
};

export default Cards;
