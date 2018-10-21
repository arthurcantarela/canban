import React, { Component } from 'react';
import Board from "components/Board";
import './App.scss';

const App = ({ columns }) => (
  <main>
    <Board columns={columns} />
  </main>
);

const hardcodedData = {
  columns: [
    {
      id: 1,
      title: "To Do",
      cards: [
        {
          id: 1,
          title: "Task One",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          title: "Task Two",
          description: "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      id: 2,
      title: "Done",
      cards: [
        {
          id: 3,
          title: "Task Three",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 4,
          title: "Task Four",
          description: "Lorem ipsum dolor sit amet"
        }
      ]
    }
  ]
}

App.defaultProps = {
  ...hardcodedData
};

export default App;
