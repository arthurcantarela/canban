import React from "react";
import { Column } from ".";
import Button from "components/Button";
import "./Board.scss";

const Board = ({ columns, addColumn }) => (
  <section className="Board">
    {columns.map(({ id, ...column }) => (
      <Column key={id} id={id} {...column} />
    ))}
    <Button onClick={() => addColumn()}>
      Add column
    </Button>
  </section>
);

export default Board;
