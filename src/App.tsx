import React from 'react';
import logo from './logo.svg';
import AppShell from './AppShell'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppShell>
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
      </AppShell>
    </div>
  );
}

export default App;
