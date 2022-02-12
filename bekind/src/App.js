import * as React from 'react';
import './App.css';
import SignUp from './SignUp.js'
import LogIn from './LogIn.js'
import { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>
            BeKind.
          </h1>
        <body className="App-body">
          <h3>
              Welcome!
          </h3>
          <div>
            <SignUp />
          </div>
          <div>
            <LogIn />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
