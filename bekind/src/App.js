import * as React from 'react';
import './App.css';
import SignUp from './pages/SignUp.js'
import LogIn from './pages/LogIn.js'
import Dashboard from './pages/Dashboard.js'
import { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
