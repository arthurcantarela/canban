import React from "react";
import { Column } from ".";
import Button from "components/Button";
import "./Board.scss";

const Board = ({ columns, addColumn, addCard }) => (
  <section className="Board">
    {columns.map(({ id, ...column }) => (
      <Column key={id} id={id} {...column} addCard={addCard} />
    ))}
    <Button onClick={() => addColumn()}>Add column</Button>
  </section>
);

export default Board;
