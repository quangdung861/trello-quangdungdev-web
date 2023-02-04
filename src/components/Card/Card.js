import React from "react";

import "./Card.scss";

const Card = ({ card }) => {
  return (
    <div className="card-item card-drag-handle">
      {card.cover && (
        <img
          src={card.cover}
          className="card-cover"
          alt="quangdungdev-alt-img"
          onMouseDown={e => e.preventDefault()}
        />
      )}
      {card.title}
    </div>
  );
};

export default Card;
