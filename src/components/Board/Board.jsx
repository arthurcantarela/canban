import React from "react";

const Board = ({columns}) => (
    <main>
      {columns.map(({id, ...column}) => (
        <Column key={id} id={id} {...column} />
      ))}
    </main>
  );