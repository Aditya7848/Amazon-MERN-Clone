import React from "react";
import "./displaycard.css";

const DisplayCard = ({
  title,
  oneSrc,
  twoSrc,
  threeSrc,
  fourSrc,
  figcap1,
  figcap2,
  figcap3,
  figcap4,
}) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <div className="picture_grid">
        <div className="one">
          <img src={oneSrc} alt={`${figcap1}_img`} />
          <figcaption>{figcap1}</figcaption>
        </div>
        <div className="two">
          <img src={twoSrc} alt={`${figcap2}_img`} />
          <figcaption>{figcap2}</figcaption>
        </div>
        <div className="three">
          <img src={threeSrc} alt={`${figcap3}_img`} />
          <figcaption>{figcap3}</figcaption>
        </div>
        <div className="four">
          <img src={fourSrc} alt={`${figcap4}_img`} />
          <figcaption>{figcap4}</figcaption>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
