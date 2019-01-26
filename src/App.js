import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import Loader from "react-loader-spinner"

class App extends Component {
  render() {
    return (
        <div className="App">
            <Card/>
      </div>
    );
  }
}

export default App;
