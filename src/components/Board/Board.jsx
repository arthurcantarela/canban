import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from ".";
import Button from "components/Button";
import "./Board.scss";

const Board = ({ columns, addColumn, addCard }) => (
  <DragDropContext onDragEnd={result => {}}>
    <section className="Board">
      {columns.map(({ id, ...column }) => (
        <Column key={id} id={id} {...column} addCard={addCard} />
      ))}
      <Button onClick={() => addColumn()}>Add column</Button>
    </section>
  </DragDropContext>
);

export default Board;
