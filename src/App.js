import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/1")
      .then(response => response.json())
      .then(console.log)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

export default App;
