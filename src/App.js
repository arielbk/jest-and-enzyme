import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: null,
    }
  }
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter === 0) return (this.setState({ error: 'Cannot set counter below zero' }));
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement counter
        </button>
        <button
          data-test="increment-button"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1, error: null });
          }}
        >
          Increment counter
        </button>
        {this.state.error && <small data-test="error-message">{this.state.error}</small>}
      </div>
    )
  }
}

export default hot(module)(App);
