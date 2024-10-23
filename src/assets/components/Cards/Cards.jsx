import React, { useEffect, useState } from "react";
import Card from "./Card";
import { get } from "../../js/httpRequests";

const filteredURL = "/o/c/feedbackses/?filter=category%20eq%20%27feature%27";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get(filteredURL).then((data) => setData(data));
  }, []);

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
