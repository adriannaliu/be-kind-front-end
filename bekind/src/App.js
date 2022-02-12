import * as React from 'react';
import './App.css';
import SignUp from './SignUp.js'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            BeKind.
          </h1>
        </header>
        <h3>
            Welcome!
        </h3>
        <div>
          <SignUp />
      </div>
      </div>
    );
  }
}

export default App;
