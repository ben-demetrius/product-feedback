import React from "react";
import comments from "../../../public/assets/shared/icon-comments.svg";
import up from "../../../public/assets/shared/icon-arrow-up.svg";

const Card = ({ upvotes, title, description, category }) => {
  const replies = 2;

  return (
    <div className="pfa-card">
      <div className="pfa-vote">
        <img src={up} />
        <p className="pfa-vote__p">{upvotes}</p>
      </div>
      <div className="pfa-texts">
        <div className="pfa-titles">
          <h3>{title}</h3>
          <p className="pfa-titles__p">{description}</p>
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
