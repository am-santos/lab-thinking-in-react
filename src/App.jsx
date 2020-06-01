import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Data
import data from './data.json';

// Components
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
