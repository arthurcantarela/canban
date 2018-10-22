import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Card } from ".";
import Button from "components/Button";
import "./Column.scss";

const Column = ({ id, title, cards, addCard }) => (
  <Droppable droppableId={id}>
    {provided => (
      <ul
        className="Column"
        innerRef={provided.innerRef}
        {...provided.droppableProps}
      >
        <h2 className="ColumnTitle">{title}</h2>
        {cards.map(({ id, ...card }) => (
          <Card key={id} id={id} {...card} />
        ))}
        <Button onClick={() => addCard(id)}>Add card</Button>
        {provided.placeholder}
      </ul>
    )}
  </Droppable>
);

export default Column;
