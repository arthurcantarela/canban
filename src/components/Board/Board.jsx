import React from "react";
import { Column } from ".";

const Board = ({ columns }) => (
  <main>
    {columns.map(({ id, ...column }) => (
      <Column key={id} id={id} {...column} />
    ))}
  </main>
);

export default Board;
