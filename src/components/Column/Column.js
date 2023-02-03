import React from "react";

import "./Column.scss";
import Card from "components/Card/Card";
import { mapOrder } from "utilities/sorts";

const Column = ({ column }) => {
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  const renderCard = cards.map((card) => (
    <Card key={card.id} card={card} />
  ));

  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">{renderCard}</ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
