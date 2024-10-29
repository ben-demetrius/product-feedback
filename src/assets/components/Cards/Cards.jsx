import React, { useEffect, useState } from "react";
import Card from "./Card";
import { get } from "../../js/httpRequests";
import Empty from "../Empty";
import useSWR from "swr";
import { Error, Loading } from "../micro-components/Texts";

const Cards = ({ finalURL, setCardsCount, isActive, setIsActive }) => {
  const { data, error, isLoading } = useSWR(finalURL, get);

  useEffect(() => {
    setCardsCount(data ? data?.length : "loading");
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const cards = data?.map((item, i) => {
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

  if (data?.length == 0) {
    return <Empty isActive={isActive} setIsActive={setIsActive} />;
  }

  return <div className="pfa-cards">{cards}</div>;
};

export default Cards;
