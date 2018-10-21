import React, { Component } from 'react';
import Board from "components/Board";
import { hardcodedData } from "core/data";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...hardcodedData
    };

  }

  addColumn = () => this.setState

  render = () => {
    return (
      <main>
        <Board {...this.state} />
      </main >
    );
  }
}

export default App;
