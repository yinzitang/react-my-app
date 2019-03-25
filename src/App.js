import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './tab'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Tab></Tab>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            456464654654
          </a>
        </header>
      </div>
    );
  }
}

export default App;
