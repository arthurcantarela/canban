import React, { Component } from 'react';
import './App.scss';

const Card = ({id, title, text}) => (
  <li>
    <h3>{title}</h3>
    <p>{text}</p>
  </li>
)

const Column = ({id, title, cards}) => (
  <ul>
    <h2>{title}</h2>
    {cards.map(({id, ...card}) => (
      <Card key={id} id={id} {...card} />
    ))}
  </ul>
);

const App = ({columns}) => (
  <main>
    {columns.map(({id, ...column}) => (
      <Column key={id} id={id} {...column} />
    ))}
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
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          title: "Task Two",
          text: "Lorem ipsum dolor sit amet"
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
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: 4,
          title: "Task Four",
          text: "Lorem ipsum dolor sit amet"
        }
      ]
    }
  ]
}

App.defaultProps = {
  ...hardcodedData
};

export default App;
