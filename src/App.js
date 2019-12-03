import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import currencyHOC from "./components/CurrencyConverter"

class App extends Component {
  render() {
    return (
      <div>
        <h2>Higher Order Component</h2>
        <currencyHOC />
      </div>
    );
  }
}

export default App;
