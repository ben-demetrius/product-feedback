import React from "react";
import "../styles/app.scss";

const Roadmap = () => {
  const cardHeader = "Roadmap";
  const anchorTagText = "View";
  const anchorTagUrl = "https://ben-product-list-with-cart-react.netlify.app/";

  const iconColor1 = "var(--peach)";
  const iconColor2 = "var(--violet)";
  const iconColor3 = "var(--blue-1)";

  const rowText1 = "Planned";
  const rowText2 = "In-progress";
  const rowText3 = "Live";

  const rowNumber1 = "2";
  const rowNumber2 = "3";
  const rowNumber3 = "1";

  return (
    <div className="pfa-roadmap">
      <div className="pfa-roadmap-header">
        <h3 className="pfa-roadmap-header__h3">{cardHeader}</h3>
        <a
          className="pfa-roadmap-header__a"
          href={anchorTagUrl}
          target="_blank"
        >
          {anchorTagText}
        </a>
      </div>
      <div className="pfa-roadmap-rows">
        <div className="pfa-roadmap-row">
          <div
            className="colored-dot"
            style={{ backgroundColor: `${iconColor1}` }}
          ></div>
          <p className="pfa-roadmap-row__p-text">{rowText1}</p>
          <p className="pfa-roadmap-row__p-number">{rowNumber1}</p>
        </div>

        <div className="pfa-roadmap-row">
          <div
            className="colored-dot"
            style={{ backgroundColor: `${iconColor2}` }}
          ></div>
          <p className="pfa-roadmap-row__p-text">{rowText2}</p>
          <p className="pfa-roadmap-row__p-number">{rowNumber2}</p>
        </div>

        <div className="pfa-roadmap-row">
          <div
            className="colored-dot"
            style={{ backgroundColor: `${iconColor3}` }}
          ></div>
          <p className="pfa-roadmap-row__p-text">{rowText3}</p>
          <p className="pfa-roadmap-row__p-number">{rowNumber3}</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
