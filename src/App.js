import React, { Component } from "react";
import Board from "components/Board";
import { hardcodedData } from "core/data";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...hardcodedData
    };
    this.actions = {
      addColumn: this.addColumn.bind(this),
      addCard: this.addCard.bind(this)
    };
  }

  addColumn = () =>
    this.setState(({ columns }) => ({
      columns: [
        ...columns,
        {
          id: -1,
          title: "New column",
          cards: []
        }
      ]
    }));

  addCard = id =>
    this.setState(({ columns }) => ({
      columns: columns.reduce((columns, column) => {
        if (column.id !== id) return [...columns, column];
        else
          return [
            ...columns,
            {
              ...column,
              cards: [
                ...column.cards,
                {
                  id: -1,
                  title: "New card",
                  description: ""
                }
              ]
            }
          ];
      }, [])
    }));

  render = () => {
    return (
      <main>
        <Board {...this.state} {...this.actions} />
      </main>
    );
  };
}

export default App;
