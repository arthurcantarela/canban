import React from "react";
import { Column } from ".";
import "./Board.scss";

const Board = ({ columns }) => (
  <section className="Board">
    {columns.map(({ id, ...column }) => (
      <Column key={id} id={id} {...column} />
    ))}
  </section>
);

export default Board;
