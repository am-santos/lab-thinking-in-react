import React, { Component } from 'react';

import './SearchBar.css';

class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.searchInput,
      renderInStock: props.displayStock
    };
  }

  inputChange = event => {
    // get input variable name and input variable value
    const { name, value, checked } = event.target;
    // let searchingValue;
    if (name === 'search') {
      this.props.searchMethod(value, this.renderInStock);
    } else if (name === 'renderInStock') {
      this.props.searchMethod(this.search, checked);
    }

    // run parent method
    // this.props.searchMethod(value, checked);

    // update state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={this.search}
          onChange={this.inputChange}
        />
        <div>
          <input
            type="checkbox"
            name="renderInStock"
            id="render-in-stock"
            value={this.renderInStock}
            onChange={this.inputChange}
          />
          <label htmlFor="render-in-stock">Show only products in stock</label>
        </div>
      </form>
    );
  }
}

export default searchBar;
