import * as React from 'react';
import './App.css';
import SignUp from './pages/SignUp.js'
import LogIn from './pages/LogIn.js'
import Dashboard from './pages/Dashboard.js'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <h1>
            BeKind.
          </h1>
        {/* </header> */}
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
          <div>
            <Dashboard />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
