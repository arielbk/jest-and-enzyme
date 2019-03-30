import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Hello, world!</h1>
      </div>
    )
  }
}

export default hot(module)(App);
