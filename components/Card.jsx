import React from "react";

const Card = ({ tab, title, info, className = "" }) => {
  return (
    <section className={`card ${className}`}>
      <div className="tab">{tab}</div>
      <h2>{title}</h2>
      <p>{info}</p>
    </section>
  );
};

export default Card;
