import React from "react";
import Card from "./Card";
import { items } from "../data";

const Cards = () => {
  const cards = items.map((item, i) => {
    return (
      <Card
        key={i}
        upvotes={item.upvotes}
        title={item.title}
        description={item.description}
        category={item.category}
      />
    );
  });
  return <div className="pfa-cards">{cards}</div>;
};

export default Cards;
