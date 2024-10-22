import React from "react";
import comments from "../../../public/assets/shared/icon-comments.svg";
import up from "../../../public/assets/shared/icon-arrow-up.svg";

const Card = () => {
  const upvoteNumber = 99;
  const title = "Add Tags for solutuion";
  const subTitle = "Easier to search for solutions based on a specific stack.";
  const category = "Enhancement";
  const replies = 2;
  return (
    <div className="pfa-card">
      <div className="pfa-vote">
        <img src={up} />
        <p className="pfa-vote__p">{upvoteNumber}</p>
      </div>
      <div className="pfa-texts">
        <div className="pfa-titles">
          <h3>{title}</h3>
          <p className="pfa-titles__p">{subTitle}</p>
        </div>
        <p className="pfa-category__p">{category}</p>
      </div>
      <div className="pfa-comments">
        <img src={comments} />
        <p className="pfa-comments__p">{replies}</p>
      </div>
    </div>
  );
};

export default Card;
